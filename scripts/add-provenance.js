#!/usr/bin/env node
// scripts/add-provenance.js
// One-off patcher: adds provenance labels to PDF generators and content pages.
// Dry run by default — prints what it would change. Add --write to apply.
//
//   node scripts/add-provenance.js --pdf                       # PDF generators
//   node scripts/add-provenance.js --pages reports,books       # page groups
//   node scripts/add-provenance.js --audit                     # list first-person "author" texts
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
			// Essay-style header: "<span>{t.author}</span> • date • read time" inside <header>
			const authorSpan = /[ \t]*<span>\{t\.author\}<\/span>\s*\n[ \t]*<span>•<\/span>\s*\n/;
			const headerClose = src.indexOf('</header>');
			if (authorSpan.test(src) && headerClose > 0) {
				const lineStart = src.lastIndexOf('\n', headerClose) + 1;
				const indent = src.slice(lineStart).match(/^[ \t]*/)[0];
				out =
					src.slice(0, lineStart) +
					`${indent}\t<Provenance align="start" />\n` +
					src.slice(lineStart);
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
			out = out.slice(0, at) + `\n\timport Provenance from '$lib/components/Provenance.svelte';` + out.slice(at);
			save(file, src, out);
		}
	}
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
if (!has('--pdf') && !val('--pages') && !has('--audit')) {
	console.log('Nothing to do. Use --pdf, --pages <groups> and/or --audit (add --write to apply).');
	process.exit(0);
}
if (has('--pdf')) patchGenerators();
if (val('--pages')) patchPages(val('--pages').split(','));
if (has('--audit')) audit();

if (has('--pdf') || val('--pages')) {
	console.log(`\n${WRITE ? 'Changed' : 'Would change'}: ${stats.changed} · already done: ${stats.skipped}`);
	if (stats.manual.length) {
		console.log('Needs manual attention:');
		stats.manual.forEach((m) => console.log(`  ! ${m}`));
	}
	if (!WRITE && stats.changed) console.log('\nDry run — re-run with --write to apply.');
}
