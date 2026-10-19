#!/usr/bin/env node
// scripts/add-provenance.js
// One-off patcher: adds provenance labels to PDF generators and content pages.
// Dry run by default — prints what it would change. Add --write to apply.
//
//   node scripts/add-provenance.js --pdf                       # PDF generators
//   node scripts/add-provenance.js --pages reports,books       # page groups
//   node scripts/add-provenance.js --audit                     # list first-person "author" texts
//   node scripts/add-provenance.js --fix-lang                  # label language + position, all groups
//   node scripts/add-provenance.js --fix-cite                  # AI note on "Cite this" strings, all groups
//   node scripts/add-provenance.js --fix-lang --pages reports  # …or only these groups
//   node scripts/add-provenance.js --pdf --pages reports --write
//
// Page groups: reports, books, working-papers, syntheses, essays
// Exclude files: --exclude generate-foo-pdf.js,essays/booster-rocket

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const val = (f) => {
	const i = args.indexOf(f);
	return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : '';
};

const WRITE = has('--write');
const EXCLUDE = new Set(['generate-svg-pdf.js', ...val('--exclude').split(',').filter(Boolean)]);
const rel = (p) => path.relative(ROOT, p);
const stats = { changed: 0, skipped: 0, manual: [] };

function save(file, before, after) {
	if (before === after) return;
	stats.changed++;
	console.log(`  ✎ ${rel(file)}`);
	if (WRITE) fs.writeFileSync(file, after);
}

// ── PDF generators ───────────────────────────────────────────────────────────
function patchGenerators() {
	console.log('\n▸ PDF generators (scripts/generate-*.js)');
	const dir = path.join(ROOT, 'scripts');
	for (const name of fs.readdirSync(dir).sort()) {
		if (!/^generate-.*\.(m?js)$/.test(name) || EXCLUDE.has(name)) continue;
		const file = path.join(dir, name);
		const src = fs.readFileSync(file, 'utf-8');

		if (src.includes('applyProvenance')) { stats.skipped++; continue; }
		if (!/await\s+\w+\.pdf\(/.test(src)) {
			stats.manual.push(`${rel(file)} — no "await <page>.pdf(" call found`);
			continue;
		}

		let out = src.replace(
			/^([ \t]*)(?:const\s+\w+\s*=\s*)?await\s+(\w+)\.pdf\(/gm,
			(m, indent, pageVar) => `${indent}await applyProvenance(${pageVar});\n${m}`
		);

		const importLine = `import { applyProvenance } from './provenance-pdf.js';`;
		const imports = [...out.matchAll(/^import .+?;\s*$/gm)];
		if (imports.length) {
			const last = imports[imports.length - 1];
			const at = last.index + last[0].length;
			out = out.slice(0, at) + `\n${importLine}` + out.slice(at);
		} else if (/require\(/.test(out)) {
			stats.manual.push(`${rel(file)} — CommonJS; add the import by hand`);
			continue;
		} else {
			out = out.replace(/^(#!.*\n)?/, (s) => `${s}${importLine}\n`);
		}
		save(file, src, out);
	}
}

// ── Svelte pages ─────────────────────────────────────────────────────────────
function pageFiles(group) {
	const base = path.join(ROOT, 'src/routes', group);
	if (!fs.existsSync(base)) return [];
	return fs
		.readdirSync(base, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => path.join(base, d.name, '+page.svelte'))
		.filter((f) => fs.existsSync(f));
}

function patchPages(groups) {
	for (const group of groups) {
		console.log(`\n▸ Pages: src/routes/${group}/*/+page.svelte`);
		for (const file of pageFiles(group)) {
			const id = `${group}/${path.basename(path.dirname(file))}`;
			if (EXCLUDE.has(id)) continue;
			const src = fs.readFileSync(file, 'utf-8');
			if (src.includes('Provenance')) { stats.skipped++; continue; }

			const scriptOpen = src.match(/<script(?![^>]*context=["']module["'])(?![^>]*module)[^>]*>/);
			if (!scriptOpen) {
				stats.manual.push(`${rel(file)} — no <script> block; place <Provenance /> by hand`);
				continue;
			}

			let out;
			const isPaper = group === 'working-papers';
			const tag = `<Provenance align="start"${isPaper ? ' paper' : ''} />`;
			// Remove an essay-style "<span>{t.author}</span> •" from the meta line
			const authorSpan = /[ \t]*<span>\{t\.author\}<\/span>\s*\n[ \t]*<span>•<\/span>\s*\n/;
			// Prefer the end of the <header> that contains the first <h1>
			const h1Open = src.indexOf('<h1');
			const headerOpen = src.lastIndexOf('<header', h1Open);
			const headerClose = src.indexOf('</header>', h1Open);
			const nextHeaderOpen = src.indexOf('<header', headerOpen + 1);
			const h1InHeader =
				h1Open > 0 && headerOpen >= 0 && headerClose > h1Open &&
				(nextHeaderOpen < 0 || nextHeaderOpen > headerClose);
			if (h1InHeader) {
				const lineStart = src.lastIndexOf('\n', headerClose) + 1;
				const indent = src.slice(lineStart).match(/^[ \t]*/)[0];
				const inner = indent.includes('\t') ? `${indent}\t` : `${indent}  `;
				out = src.slice(0, lineStart) + `${inner}${tag}\n` + src.slice(lineStart);
				out = out.replace(authorSpan, '');
			} else {
				// Otherwise: after the first </h1>, keeping that line's indentation
				const h1Close = src.indexOf('</h1>');
				if (h1Close < 0) {
					stats.manual.push(`${rel(file)} — no </h1>; place <Provenance /> by hand`);
					continue;
				}
				const lineStart = src.lastIndexOf('\n', h1Close) + 1;
				const indent = src.slice(lineStart).match(/^[ \t]*/)[0];
				const afterH1 = h1Close + '</h1>'.length;
				out = src.slice(0, afterH1) + `\n${indent}<Provenance />` + src.slice(afterH1);
			}

			const at = out.indexOf(scriptOpen[0]) + scriptOpen[0].length;
			const scriptIndent = (out.slice(at).match(/\n([ \t]+)\S/) || [, '\t'])[1];
			out = out.slice(0, at) + `\n${scriptIndent}import Provenance from '$lib/components/Provenance.svelte';` + out.slice(at);

			if (isPaper) out = patchPaperLabels(out, file);
			save(file, src, out);
		}
	}
}

// ── English-only pages: pin the label to English ────────────────────────────
// A page counts as English-only when its content files (in the route folder
// or imported by the page) include Markdown but nothing Swedish.
const SV_FILE = /(^|[./_-])sv([./_-]|$)/i;

function listFiles(dir) {
	const out = [];
	for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, d.name);
		if (d.isDirectory()) out.push(p + '/', ...listFiles(p));
		else out.push(p);
	}
	return out;
}

function contentLanguage(file, src) {
	const dir = path.dirname(file);
	const local = listFiles(dir).map((p) => path.relative(dir, p));
	const imported = [...src.matchAll(/from\s+['"]([^'"]+\.md(?:\?raw)?)['"]/g)].map((m) => m[1]);
	const all = [...local, ...imported];
	if (!all.some((p) => /\.md(\?raw)?$/.test(p))) return 'unknown';
	if (all.some((p) => p.split('/').some((seg) => SV_FILE.test(seg) || seg === 'sv'))) return 'bilingual';
	// Other content languages (de, fr, ja …) → the page likely has its own language switcher
	const other = /[.-](de|fr|it|es|eu|pt_br|nl|fi|ru|zh|ja|ko|hi|ta|he|ar)\.md(\?raw)?$/i;
	return all.some((p) => other.test(p)) ? 'multilingual' : 'en';
}

// A page-local content-language state, e.g. `let reportLang: … = $state('en')`
function localLangVar(src) {
	const m = src.match(
		/let\s+(\w*[Ll]ang\w*)\s*(?::[^=;]+)?=\s*\$state\s*(?:<[^>]*>)?\(\s*['"][a-z_]{2,5}['"]\s*\)/
	);
	return m ? m[1] : null;
}

// Move a label that sits right after </h1> to the end of its <header>
function relocate(src) {
	return src.replace(
		/(<\/h1>[ \t]*\n)([ \t]*)<Provenance([^>]*?)\s*\/>[ \t]*\n((?:(?!<header|<\/header>)[\s\S])*?)([ \t]*)<\/header>/,
		(m, h1, indent, attrs, middle, closeIndent) => {
			const a = /\balign=/.test(attrs) ? attrs : `${attrs} align="start"`;
			return `${h1}${middle}${indent}<Provenance${a} />\n${closeIndent}</header>`;
		}
	);
}

function fixLang(groups) {
	console.log('\n▸ Label language: lang="en" on English-only pages, page variable on multilingual ones');
	for (const group of groups) {
		for (const file of pageFiles(group)) {
			const src = fs.readFileSync(file, 'utf-8');
			if (!/<Provenance\b/.test(src)) continue;
			let out = relocate(src);
			if (!/<Provenance\b[^>]*\blang=/.test(out)) {
				const kind = contentLanguage(file, out);
				const v = localLangVar(out);
				if (kind === 'multilingual' || (kind !== 'en' && v)) {
					if (v) out = out.replace(/<Provenance\b/g, `<Provenance lang={${v}}`);
					else stats.manual.push(`${rel(file)} — other content languages but no language variable found; pass it by hand, e.g. <Provenance lang={contentLang} />`);
				} else if (kind === 'en') {
					out = out.replace(/<Provenance\b/g, '<Provenance lang="en"');
				} else if (kind === 'unknown') {
					stats.manual.push(`${rel(file)} — content language unclear; add lang="en" by hand if English-only`);
				}
			}
			if (out === src) stats.skipped++;
			else save(file, src, out);
		}
	}
}

// ── Citations: append an AI note to "Holmström, B. K. …" strings ────────────
const CITE_NOTES = {
	paper_en: 'AI-generated working paper; not peer-reviewed.',
	paper_sv: 'AI-genererat arbetsdokument; ej fackgranskat.',
	en: 'AI-generated; not peer-reviewed.',
	sv: 'AI-genererad; ej fackgranskad.',
	hi: 'एआई-जनित; सहकर्मी-समीक्षित नहीं।',
	ta: 'செயற்கை நுண்ணறிவால் உருவாக்கப்பட்டது; சக மதிப்பாய்வு செய்யப்படவில்லை.',
	zh: 'AI 生成；未经同行评审。',
	ja: 'AI生成、査読なし。',
	ko: 'AI 생성, 동료 검토를 거치지 않음.',
	he: 'נוצר בבינה מלאכותית; לא עבר ביקורת עמיתים.',
	ru: 'Создано ИИ; не рецензировано.',
	de: 'KI-generiert; nicht begutachtet.',
	fr: 'Généré par IA ; non évalué par les pairs.',
	es: 'Generado por IA; sin revisión por pares.',
	it: "Generato dall'IA; non sottoposto a revisione paritaria.",
	nl: 'AI-gegenereerd; niet peer-reviewed.',
	fi: 'Tekoälyn tuottama; ei vertaisarvioitu.',
	pt_br: 'Gerado por IA; sem revisão por pares.',
	eu: 'AAk sortua; ez da parekideek berrikusia.'
};
const ALL_NOTES = Object.values(CITE_NOTES);

function citeLang(body) {
	if (/[ऀ-ॿ]/.test(body)) return 'hi';
	if (/[஀-௿]/.test(body)) return 'ta';
	if (/[぀-ヿ]/.test(body)) return 'ja';
	if (/[가-힯]/.test(body)) return 'ko';
	if (/[一-鿿]/.test(body)) return 'zh';
	if (/[֐-׿]/.test(body)) return 'he';
	if (/[Ѐ-ӿ]/.test(body)) return 'ru';
	if (/Styrning som ingenjörskonst|Rapport [IVXL]+|Arbetsdokument|[åäö]\w* (rapport|dokument)/i.test(body)) return 'sv';
	return 'en';
}

function patchCitations(src, isPaper) {
	let count = 0;
	// '…', "…" and `…` string literals that start with the citation
	const esc = (q, s) => (q === "'" ? s.replace(/'/g, "\\'") : s);
	const out = src.replace(
		/(['"`])(Holmström, B\. K\.(?:\\.|(?!\1)[^\\\n])*)\1/g,
		(m, q, body, offset) => {
			// Language from an object key right before the string (e.g. `nl: '…'`), else from the text
			const key = src.slice(Math.max(0, offset - 30), offset).match(/(?:^|[\s{,])([a-z]{2}(?:_[a-z]{2})?)\s*:\s*$/);
			const lang = key && CITE_NOTES[key[1]] ? key[1] : citeLang(body);
			const note = isPaper && (lang === 'en' || lang === 'sv') ? CITE_NOTES[`paper_${lang}`] : CITE_NOTES[lang];

			// Already has the English note but belongs to another language → swap it
			if (lang !== 'en' && body.includes(esc(q, CITE_NOTES.en))) {
				count++;
				return `${q}${body.replace(esc(q, CITE_NOTES.en), esc(q, note))}${q}`;
			}
			if (/AI-genere|AI-generated/.test(body) || ALL_NOTES.some((n) => body.includes(esc(q, n)))) return m;
			count++;
			return `${q}${body.replace(/\s*$/, '')} ${esc(q, note)}${q}`;
		}
	);
	return { out, count };
}

function fixCitations(groups) {
	console.log('\n▸ Citations: add AI note');
	for (const group of groups) {
		for (const file of pageFiles(group)) {
			const src = fs.readFileSync(file, 'utf-8');
			if (!src.includes('Holmström, B. K.')) continue;
			const { out, count } = patchCitations(src, group === 'working-papers');
			if (count) save(file, src, out);
			else stats.skipped++;
		}
	}
}

// Working papers: series tag and copied citation
function patchPaperLabels(src, file) {
	const tagged = src
		.replace(/tag:\s*(['"])Working Paper ·/g, "tag: $1AI-generated working paper ·")
		.replace(/tag:\s*(['"])Arbetsdokument ·/g, "tag: $1AI-genererat arbetsdokument ·");
	const { out, count } = patchCitations(tagged, true);
	if (!count && /copyCitation|citation/i.test(src) && !/AI-genere|AI-generated working/.test(src)) {
		stats.manual.push(`${rel(file)} — citation text not recognised; add the AI note by hand`);
	}
	return out;
}

// ── Audit: first-person author texts and rights claims ──────────────────────
function audit() {
	console.log('\n▸ Audit: texts written as if by you, and rights claims');
	const patterns = [
		/about the author/i, /om författaren/i, /author'?s note/i, /författarens/i,
		/moral right/i, /ideell rätt/i, /all rights reserved/i
	];
	const hits = [];
	const walk = (dir) => {
		for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
			const p = path.join(dir, d.name);
			if (d.isDirectory()) { if (d.name !== 'node_modules') walk(p); continue; }
			if (/authors?-note/i.test(d.name)) { hits.push(`${rel(p)}  (filename)`); continue; }
			if (!/\.(md|svelte|ts|js)$/.test(d.name) || /provenance/i.test(d.name)) continue;
			const text = fs.readFileSync(p, 'utf-8');
			const found = patterns.filter((re) => re.test(text)).map((re) => re.source);
			if (found.length) hits.push(`${rel(p)}  [${found.join(', ')}]`);
		}
	};
	for (const d of ['src', 'scripts']) if (fs.existsSync(path.join(ROOT, d))) walk(path.join(ROOT, d));
	hits.sort().forEach((h) => console.log(`  • ${h}`));
	console.log(`  ${hits.length} file(s)`);
}

// ── Run ──────────────────────────────────────────────────────────────────────
const ALL_GROUPS = ['reports', 'books', 'working-papers', 'syntheses', 'essays'];

const FIX = has('--fix-lang') || has('--fix-cite');
if (!has('--pdf') && !val('--pages') && !has('--audit') && !FIX) {
	console.log('Nothing to do. Use --pdf, --pages <groups>, --fix-lang, --fix-cite and/or --audit (add --write to apply).');
	process.exit(0);
}
const groups = val('--pages') ? val('--pages').split(',') : ALL_GROUPS;
if (has('--pdf')) patchGenerators();
// With --fix-*, --pages only narrows the fix passes (it doesn't insert labels)
if (val('--pages') && !FIX) patchPages(groups);
if (has('--fix-lang')) fixLang(groups);
if (has('--fix-cite')) fixCitations(groups);
if (has('--audit')) audit();

if (has('--pdf') || val('--pages') || FIX) {
	console.log(`\n${WRITE ? 'Changed' : 'Would change'}: ${stats.changed} · already done: ${stats.skipped}`);
	if (stats.manual.length) {
		console.log('Needs manual attention:');
		stats.manual.forEach((m) => console.log(`  ! ${m}`));
	}
	if (!WRITE && stats.changed) console.log('\nDry run — re-run with --write to apply.');
}
