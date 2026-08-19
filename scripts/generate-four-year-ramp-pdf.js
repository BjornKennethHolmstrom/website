#!/usr/bin/env node

/**
 * Generate PDF for The Four-Year Ramp
 *
 * Usage: node scripts/generate-four-year-ramp-pdf.js [language]
 * Example: node scripts/generate-four-year-ramp-pdf.js en
 * Example: node scripts/generate-four-year-ramp-pdf.js sv
 *
 * Differs from the Governance-as-Engineering scripts: this paper lives in a
 * single markdown file per language rather than a sections/ directory, so
 * there is no section list to maintain and no forced page break between parts.
 * Page breaks are inserted only before the appendix and references.
 *
 * Requirements:
 * npm install marked puppeteer katex
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import katex from 'katex';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const SLUG = 'four-year-ramp';
const suffix = LANGUAGE === 'sv' ? '-sv' : '';
const PAPER_DIR = path.join(__dirname, `../src/routes/working-papers/${SLUG}`);
const INPUT_FILE = path.join(PAPER_DIR, `${SLUG}.${LANGUAGE}.md`);
const OUTPUT_DIR = path.join(__dirname, '../static/working-papers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${SLUG}${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, `../static/working-papers/images/${SLUG}-cover.svg`);

// ── Metadata ──────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: 'The Four-Year Ramp',
		subtitle: 'Legislative production and the electoral clock in the Swedish Riksdag, 2002–2026',
		description: 'Legislative volume in the Riksdag rises 73% from a mandate\'s first riksmöte to its fourth, accounting for 82.4% of all variance in output. Which parties govern accounts for 1.4%. Latency is flat at 71–72 days regardless of load, the additional propositions are not smaller, and rejection rates are constant across 23 of 24 riksmöten. The end-of-term surge is well documented; its invariance to government identity is not.',
		author: 'Björn Kenneth Holmström',
		date: 'August 2026',
		url: 'https://bjornkennethholmstrom.org/working-papers/four-year-ramp',
		dataNote: 'Data: Sveriges riksdag, öppna data (fri användning, ange källa)',
		runningHead: 'Working paper',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	},
	sv: {
		title: 'Den fyraåriga rampen',
		subtitle: 'Lagstiftningsproduktion och valklockan i Sveriges riksdag 2002–2026',
		description: 'Propositionsvolymen i riksdagen stiger 73 procent från mandatperiodens första riksmöte till dess fjärde, vilket förklarar 82,4 procent av all variation i utflödet. Vilka partier som regerar förklarar 1,4 procent. Beredningstiden ligger stilla på 71–72 dagar oavsett belastning, de tillkommande propositionerna är inte mindre, och avslagsfrekvensen är konstant under 23 av 24 riksmöten. Ökningen mot mandatperiodens slut är väldokumenterad; att den är oberoende av regeringens identitet är det inte.',
		author: 'Björn Kenneth Holmström',
		date: 'augusti 2026',
		url: 'https://bjornkennethholmstrom.org/sv/working-papers/four-year-ramp',
		dataNote: 'Data: Sveriges riksdag, öppna data (fri användning, ange källa)',
		runningHead: 'Arbetsdokument',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	}
};

const meta = metadata[LANGUAGE];

// Headings that should start on a fresh page (matched case-insensitively
// against the beginning of the heading text).
const PAGE_BREAK_HEADINGS = ['appendix', 'references', 'referenser', 'bilaga', 'källor'];

// ── CSS ─────────────────────────────────────────────────────────────────────
const pdfStyles = `
<style>
	@page {
		size: A4;
		margin: 2.5cm 2cm;
	}

	@page :first {
		@bottom-right { content: none; }
	}

	body {
		font-family: 'Georgia', 'Times New Roman', serif;
		font-size: 12pt;
		line-height: 1.6;
		color: #1a1a1a;
		max-width: 100%;
		margin: 0;
		padding: 0;
	}

	.cover {
		page-break-after: always;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		text-align: center;
		padding: 0.5cm 2cm;
		box-sizing: border-box;
	}

	/* Landscape SVG cover — wider than the portrait PNGs the series uses. */
	.cover-image {
		width: 100%;
		max-width: 440px;
		max-height: 8cm;
		object-fit: contain;
		margin-bottom: 1.4em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.12);
	}

	.cover h1 {
		font-size: 24pt;
		font-weight: bold;
		margin-bottom: 0.3em;
		line-height: 1.2;
		color: #1a1a1a;
		border-bottom: none;
		margin-top: 0;
	}

	.cover .subtitle {
		font-size: 13pt;
		font-style: italic;
		margin-bottom: 0.6em;
		color: #555;
		line-height: 1.35;
		max-width: 560px;
	}

	.cover .description {
		font-size: 10pt;
		margin-bottom: 0.6em;
		color: #666;
		max-width: 580px;
		line-height: 1.45;
		text-align: justify;
	}

	.cover .metadata {
		font-size: 10.5pt;
		color: #666;
		margin-top: 0.8em;
		line-height: 1.5;
	}

	.cover .url {
		font-size: 8.5pt;
		color: #888;
		margin-top: 0.4em;
		font-family: 'Courier New', monospace;
	}

	.cover .license,
	.cover .data-note {
		font-size: 8.5pt;
		color: #888;
		margin-top: 0.2em;
		font-style: italic;
	}

	h1 { font-size: 19pt; font-weight: bold; margin-top: 1.4em; margin-bottom: 0.5em; page-break-after: avoid; color: #1a1a1a; border-bottom: 2px solid #ccc; padding-bottom: 0.2em; }
	h2 { font-size: 15pt; font-weight: bold; margin-top: 1.3em; margin-bottom: 0.5em; page-break-after: avoid; color: #2c2c2c; }
	h3 { font-size: 12.5pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.4em; page-break-after: avoid; color: #333; }
	h4 { font-size: 11.5pt; font-weight: bold; margin-top: 0.8em; margin-bottom: 0.4em; page-break-after: avoid; font-style: italic; }
	p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
	ul, ol { margin-bottom: 0.8em; padding-left: 1.5em; }
	li { margin-bottom: 0.3em; }
	ul ul, ol ol, ul ol, ol ul { margin-top: 0.3em; margin-bottom: 0.3em; }
	blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }
	pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; font-size: 9pt; line-height: 1.4; page-break-inside: avoid; margin-bottom: 1em; border-radius: 4px; font-family: 'Courier New', monospace; color: #1a1a1a; white-space: pre-wrap; word-wrap: break-word; }
	code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; border-radius: 2px; color: #1a1a1a; }
	pre code { background: none; padding: 0; }

	/*
	 * Tables: this paper is table-heavy (six of them, some with six columns).
	 * A table wider than the content box makes Chromium shrink-to-fit the whole
	 * document, silently scaling every page down. Fixed layout plus wrapping
	 * cells keeps them inside the box.
	 */
	table {
		width: 100%;
		max-width: 100%;
		table-layout: fixed;
		border-collapse: collapse;
		margin: 1em 0 1.2em 0;
		page-break-inside: avoid;
		font-size: 9.5pt;
	}
	th, td {
		border: 1px solid #ddd;
		padding: 0.4em 0.5em;
		text-align: left;
		vertical-align: top;
		overflow-wrap: break-word;
		word-break: normal;
		hyphens: auto;
	}
	th { background: #f5f5f5; font-weight: bold; }
	td:first-child, th:first-child { width: auto; }

	a { color: #0066cc; text-decoration: none; }
	a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; word-break: break-all; }
	a[href^="#"]:after { content: ""; }
	strong { font-weight: bold; color: #000; }
	em { font-style: italic; }
	hr { border: none; border-top: 1px solid #ddd; margin: 1.6em 0; page-break-after: avoid; }

	.figure-container { page-break-inside: avoid; break-inside: avoid; }
	.figure { page-break-inside: avoid; margin: 1.5em 0; text-align: center; }
	.figure img { max-width: 100%; max-height: 20cm; width: auto; height: auto; object-fit: contain; border: 1px solid #ddd; border-radius: 4px; }

	img { max-height: 20cm; width: auto; max-width: 100%; object-fit: contain; }
	figure, .figure, .diagram-container { page-break-inside: avoid; break-inside: avoid; margin: 1.5em 0; }
	h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
	p, li { orphans: 3; widows: 3; }
	.page-break-before { page-break-before: always; }
	.page-break-after  { page-break-after: always;  }
	.page-break-avoid  { page-break-inside: avoid; break-inside: avoid; }
</style>
`;

// ── Image processing helpers ─────────────────────────────────────────────────
function processMarkdownImagesSync(content) {
	const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
	let processedContent = content;
	let match;
	while ((match = imageRegex.exec(content)) !== null) {
		const [fullMatch, altText, imagePath] = match;
		if (imagePath.startsWith('http') || imagePath.startsWith('file:')) continue;
		const possiblePaths = [
			path.join(__dirname, '../static', imagePath),
			path.join(__dirname, '../static/working-papers/images', path.basename(imagePath)),
			path.join(PAPER_DIR, imagePath),
			path.join(__dirname, '../static', imagePath.replace(/^\//, ''))
		];
		let foundPath = null;
		for (const testPath of possiblePaths) {
			if (fs.existsSync(testPath)) { foundPath = testPath; break; }
		}
		if (foundPath) {
			const fileUri = 'file://' + path.resolve(foundPath).replace(/\\/g, '/');
			processedContent = processedContent.replace(fullMatch, `![${altText}](${fileUri})`);
		}
	}
	return processedContent;
}

function enhanceImageMarkup(content) {
	return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, altText, imagePath) => `
<div class="figure-container">
  <div class="figure">
    <img src="${imagePath}" alt="${altText}" />
  </div>
</div>
`);
}

// ── Pre‑render LaTeX with KaTeX (handles $…$, $$…$$, \(…\), \[…\]) ─────────
function preRenderMath(mdContent) {
	const blocks = [];
	let processed = mdContent;

	processed = processed.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
		const tex = (tex1 ?? tex2 ?? '').trim();
		try {
			blocks.push(katex.renderToString(tex, { displayMode: true, throwOnError: false }));
		} catch (e) {
			console.warn('KaTeX display error:', e);
			blocks.push(match);
		}
		return `%%MATH${blocks.length - 1}%%`;
	});

	processed = processed.replace(/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g, (match, tex1, tex2) => {
		const tex = (tex1 ?? tex2 ?? '').trim();
		try {
			blocks.push(katex.renderToString(tex, { displayMode: false, throwOnError: false }));
		} catch (e) {
			console.warn('KaTeX inline error:', e);
			blocks.push(match);
		}
		return `%%MATH${blocks.length - 1}%%`;
	});

	return { processed, blocks };
}

function restoreMath(html, blocks) {
	return html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');
}

/**
 * The paper's own H1 duplicates the cover title, so drop the first H1 and any
 * immediately following subtitle line. Then force a page break before the
 * appendix and references headings.
 */
function tidyDocumentStructure(html) {
	let out = html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
	out = out.replace(/^\s*<h3[^>]*>[\s\S]*?<\/h3>\s*/i, '');

	out = out.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g, (m, attrs, inner) => {
		const text = inner.replace(/<[^>]+>/g, '').trim().toLowerCase();
		const wants = PAGE_BREAK_HEADINGS.some((k) => text.startsWith(k));
		if (!wants) return m;
		const a = attrs ?? '';
		if (/class\s*=/.test(a)) {
			return `<h2${a.replace(/class\s*=\s*"([^"]*)"/, 'class="$1 page-break-before"')}>${inner}</h2>`;
		}
		return `<h2${a} class="page-break-before">${inner}</h2>`;
	});

	return out;
}

// ── Read the markdown ────────────────────────────────────────────────────────
function readMarkdown() {
	console.log(`\n📖 Reading paper for language: ${LANGUAGE}`);
	console.log(`Input file: ${INPUT_FILE}\n`);

	if (!fs.existsSync(INPUT_FILE)) {
		console.error(`❌ File not found: ${INPUT_FILE}`);
		if (LANGUAGE === 'sv') {
			console.error('   The Swedish translation may not exist yet.');
		}
		process.exit(1);
	}

	let content = fs.readFileSync(INPUT_FILE, 'utf-8');
	console.log(`✓ Read ${(content.length / 1024).toFixed(1)} KB`);

	content = content.replace(/^---\n[\s\S]*?\n---\n/, ''); // strip frontmatter

	process.stdout.write('   Processing images... ');
	content = processMarkdownImagesSync(content);
	console.log('done.');

	const headings = (content.match(/^##\s+(?!#)/gm) || []).length;
	const words = content.split(/\s+/).filter(Boolean).length;
	const tables = (content.match(/^\|/gm) || []).length;
	console.log(`   ${headings} sections, ~${words} words, ${tables} table rows\n`);

	return content;
}

function getCoverImageUri() {
	if (fs.existsSync(COVER_IMAGE)) {
		return 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/');
	}
	console.log('📝 Cover image not found, proceeding without it');
	return null;
}

function generateHTML(markdown) {
	console.log('🔨 Converting markdown to HTML (pre‑rendering LaTeX)...');
	marked.setOptions({ breaks: false, gfm: true });

	const coverImage = getCoverImageUri();
	const katexCssUri = 'file://' + path.resolve(path.join(__dirname, '../node_modules/katex/dist/katex.min.css')).replace(/\\/g, '/');

	const { processed, blocks } = preRenderMath(markdown);
	const imgEnhanced = enhanceImageMarkup(processed);
	let body = marked.parse(imgEnhanced);
	body = restoreMath(body, blocks);
	body = tidyDocumentStructure(body);

	const html = `
<!DOCTYPE html>
<html lang="${LANGUAGE}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  <link rel="stylesheet" href="${katexCssUri}" />
  ${pdfStyles}
</head>
<body>
  <div class="cover">
    ${coverImage ? `<img src="${coverImage}" alt="Cover" class="cover-image" />` : ''}
    <h1>${meta.title}</h1>
    <div class="subtitle">${meta.subtitle}</div>
    <div class="description">${meta.description}</div>
    <div class="metadata">
      <div><strong>${meta.author}</strong></div>
      <div>${meta.date}</div>
      <div class="data-note">${meta.dataNote}</div>
      <div class="license">${meta.license}</div>
    </div>
    <div class="url">${meta.url}</div>
  </div>
  <section>
${body}
  </section>
</body>
</html>
`;

	console.log(`✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
	return html;
}

async function generatePDF(html) {
	console.log('📄 Generating PDF...');
	if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

	const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-${SLUG}-${LANGUAGE}.html`);
	fs.writeFileSync(tempHtmlFile, html);
	const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

	const browser = await puppeteer.launch({
		headless: 'new',
		args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--allow-file-access-from-files']
	});

	try {
		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(120000);
		console.log('Loading HTML file locally...');
		await page.goto(tempHtmlUri, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 120000 });
		console.log('Content loaded, generating PDF...');

		await page.pdf({
			path: OUTPUT_FILE,
			format: 'A4',
			printBackground: true,
			margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
			displayHeaderFooter: true,
			headerTemplate: `
				<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;">
					<span style="float: left;">${meta.title}</span>
					<span style="float: right;">${meta.runningHead}</span>
				</div>
			`,
			footerTemplate: `
				<div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;">
					<span class="pageNumber"></span>
				</div>
			`,
			timeout: 120000
		});

		console.log('✅ PDF generated successfully');
	} catch (error) {
		console.error('❌ Error during PDF generation:', error);
		throw error;
	} finally {
		console.log('Cleaning up...');
		await browser.close();
		if (fs.existsSync(tempHtmlFile)) fs.unlinkSync(tempHtmlFile);
	}
}

async function main() {
	try {
		console.log('📄 Starting PDF generation for The Four-Year Ramp...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);

		const markdown = readMarkdown();
		const html = generateHTML(markdown);

		if (process.env.DEBUG) {
			const debugFile = path.join(__dirname, `../debug-${SLUG}-${LANGUAGE}.html`);
			fs.writeFileSync(debugFile, html);
			console.log(`Debug HTML saved to: ${debugFile}`);
		}

		await generatePDF(html);
	} catch (error) {
		console.error('\n❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
