#!/usr/bin/env node

/**
 * Generate PDF for Three Laws from One Bound (Paper XX)
 *
 * Usage: node scripts/generate-three-laws-from-one-bound-pdf.js [language]
 * Example: node scripts/generate-three-laws-from-one-bound-pdf.js en
 * Example: node scripts/generate-three-laws-from-one-bound-pdf.js sv
 *
 * Requirements:
 * npm install marked puppeteer katex
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';
import { marked } from 'marked';
import katex from 'katex';
import puppeteer from 'puppeteer';

import { applyProvenance } from './provenance-pdf.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const KATEX_CSS = pathToFileURL(require.resolve('katex/dist/katex.min.css')).href;

const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const suffix = LANGUAGE === 'sv' ? '-sv' : '';
const INPUT_DIR = path.join(__dirname, '../src/routes/working-papers/three-laws-from-one-bound/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/working-papers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `three-laws-from-one-bound${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/working-papers/images/three-laws-from-one-bound-cover.png');

// ── Metadata ──────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: 'Three Laws from One Bound',
		subtitle: 'Ashby, Goodhart, and certification cost under bounded representation',
		description: 'Examines Ashby\'s requisite variety, Goodhart\'s law, and certification cost under bounded representation. Consolidates a deterministic action-cover bound, an established proxy–target ordering criterion illustrated by a registered budget-allocation demonstration, and conditional cost accounting. Reports the unsuccessful search for a stronger conservation law.',
		author: 'Björn Kenneth Holmström',
		date: 'July 2026 · Revised November 2026',
		url: 'https://bjornkennethholmstrom.org/working-papers/three-laws-from-one-bound',
		seriesNote: 'Paper XX in the Governance as Engineering series',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	},
	sv: {
		title: 'Tre lagar från en gräns',
		subtitle: 'Ashby, Goodhart och certifieringskostnad under begränsad representation',
		description: 'Undersöker Ashbys lag om nödvändig variation, Goodharts lag och certifieringskostnad under begränsad representation. Konsoliderar en deterministisk räknegräns baserad på handlingstäckning, ett etablerat ordningskriterium för proxyvariabel och mål illustrerat med en registrerad budgetallokeringsdemonstration samt villkorad kostnadsredovisning. Redovisar det misslyckade sökandet efter en starkare konserveringslag.',
		author: 'Björn Kenneth Holmström',
		date: 'Juli 2026 · Reviderad november 2026',
		url: 'https://bjornkennethholmstrom.org/sv/working-papers/three-laws-from-one-bound',
		seriesNote: 'Rapport XX i serien Styrning som ingenjörskonst',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	}
};

const meta = metadata[LANGUAGE];

// ── Section definitions (matches the Svelte page contentMap) ─────────────────
const sections = [
	{ file: 'abstract',    titleEn: 'Abstract',                                                   titleSv: 'Sammanfattning' },
	{ file: 'section-01',  titleEn: '1. Three laws, one suspicion',                                titleSv: '1. Tre lagar, en misstanke' },
	{ file: 'section-02',  titleEn: '2. Shared setting and additional premises',                  titleSv: '2. Gemensam utgångspunkt och ytterligare premisser' },
	{ file: 'section-03',  titleEn: '3. Ashby as a deterministic counting bound — the First Law', titleSv: '3. Ashby som deterministisk räknegräns — den första lagen' },
	{ file: 'section-04',  titleEn: '4. Goodhart as an ordering criterion — the optimization face', titleSv: '4. Goodhart som ordningskriterium — optimeringssidan' },
	{ file: 'section-05',  titleEn: '5. Certification cost as monotone accounting — the maintenance face', titleSv: '5. Certifieringskostnad som monoton redovisning — underhållssidan' },
	{ file: 'section-06',  titleEn: '6. How the three faces relate',                              titleSv: '6. Hur de tre sidorna hänger samman' },
	{ file: 'section-07',  titleEn: '7. What this re‑grounds, and what it does not show',           titleSv: '7. Vad detta återgrundar, och vad det inte visar' },
	{ file: 'section-08',  titleEn: '8. Method and confidence',                                   titleSv: '8. Metod och konfidens' },
	{ file: 'appendix-a',  titleEn: 'Appendix A: Notation and the Goodhart demonstration',         titleSv: 'Appendix A: Notation och Goodhart‑demonstrationen', isAppendix: true },
];

// ── CSS (12pt base, identical to other recent papers) ────────────────────────
const pdfStyles = `
<style>
	@page {
		size: A4;
		margin: 2.5cm 2cm;
		@bottom-right {
			content: "Page " counter(page) " of " counter(pages);
			font-size: 9pt;
			color: #666;
		}
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

	.cover-image {
		width: 100%;
		max-width: 400px;
		max-height: 12cm;
		object-fit: contain;
		margin-bottom: 1em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.cover h1 { font-size: 24pt; font-weight: bold; margin-bottom: 0.3em; line-height: 1.2; color: #1a1a1a; }
	.cover .subtitle { font-size: 14pt; font-style: italic; margin-bottom: 0.4em; color: #555; line-height: 1.3; max-width: 560px; }
	.cover .series-note { font-size: 9.5pt; color: #888; margin-bottom: 0.4em; font-style: italic; }
	.cover .description { font-size: 10.5pt; margin-bottom: 0.6em; color: #666; max-width: 580px; line-height: 1.4; }
	.cover .metadata { font-size: 10.5pt; color: #666; margin-top: 0.6em; line-height: 1.5; }
	.cover .url { font-size: 8.5pt; color: #888; margin-top: 0.4em; font-family: 'Courier New', monospace; }
	.cover .license { font-size: 8.5pt; color: #888; margin-top: 0.2em; font-style: italic; }

	h1 { font-size: 20pt; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em; page-break-after: avoid; color: #1a1a1a; border-bottom: 2px solid #ccc; padding-bottom: 0.2em; }
	h2 { font-size: 16pt; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.5em; page-break-after: avoid; color: #2c2c2c; }
	h3 { font-size: 14pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; page-break-after: avoid; color: #333; }
	h4 { font-size: 12pt; font-weight: bold; margin-top: 0.8em; margin-bottom: 0.5em; page-break-after: avoid; font-style: italic; }
	p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
	ul, ol { margin-bottom: 0.8em; padding-left: 1.5em; }
	li { margin-bottom: 0.3em; }
	blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }
	pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; font-size: 9pt; line-height: 1.4; page-break-inside: avoid; margin-bottom: 1em; border-radius: 4px; font-family: 'Courier New', monospace; color: #1a1a1a; }
	code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; border-radius: 2px; color: #1a1a1a; }
	pre code { background: none; padding: 0; }
	table { width: 100%; border-collapse: collapse; margin-bottom: 1em; page-break-inside: avoid; font-size: 10pt; }
	th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; vertical-align: top; }
	th { background: #f5f5f5; font-weight: bold; }
	a { color: #0066cc; text-decoration: none; }
	a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; word-break: break-all; }
	a[href^="#"]:after { content: ""; }
	strong { font-weight: bold; color: #000; }
	em { font-style: italic; }
	hr { border: none; border-top: 2px solid #ccc; margin: 2em 0; page-break-after: avoid; }
	.section-divider { page-break-before: always; margin: 2em 0 1em 0; }
	.appendix h1 { font-style: italic; color: #444; }
	.appendix, .acknowledgements, .references { page-break-before: always; }
	.figure-container { page-break-inside: avoid; break-inside: avoid; }
	.figure { page-break-inside: avoid; margin: 1.5em 0; text-align: center; }
	.figure img { max-width: 100%; max-height: 22cm; width: auto; height: auto; object-fit: contain; border: 1px solid #ddd; border-radius: 4px; }

	img {
		max-height: 20cm;
		width: auto;
		max-width: 100%;
		object-fit: contain;
	}
	figure, .figure, .diagram-container { page-break-inside: avoid; break-inside: avoid; margin: 1.5em 0; }
	h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
	p, li { orphans: 3; widows: 3; }
	.page-break-before { page-break-before: always; }
	.page-break-after  { page-break-after: always;  }
	.katex-display { break-inside: avoid; page-break-inside: avoid; overflow: visible; }
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
			path.join(__dirname, '../src/routes/working-papers/three-laws-from-one-bound', imagePath),
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
function preRenderMath(content, sectionTitle) {
	const blocks = [];
	const prefix = '%%XXPDFMATH';
	if (content.includes(prefix)) throw new Error(`Math placeholder collision in ${sectionTitle}`);

	// Protect fenced code and inline code; then match display before inline math.
	// The inline forms cannot span lines. Escaped dollar signs are left alone.
	const pattern = /(^[ \t]{0,3}(`{3,}|~{3,})[^\r\n]*\r?\n[\s\S]*?^\s*\2[ \t]*(?=\r?$)|(`+)[^\r\n]*?\3)|\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]|(?<![\\$])\$(?!\$)([^\r\n$]+?)(?<!\\)\$(?!\$)|\\\(([^\r\n]*?)\\\)/gm;
	const processed = content.replace(pattern, (match, code, fence, ticks, displayDollar, displayBracket, inlineDollar, inlineParen) => {
		if (code !== undefined) return match;
		const displayMode = displayDollar !== undefined || displayBracket !== undefined;
		const tex = (displayDollar ?? displayBracket ?? inlineDollar ?? inlineParen).trim().replace(/\^\\\*/g, () => '^{\\ast}');
		try {
			const rendered = katex.renderToString(tex, { displayMode, throwOnError: true, trust: false });
			blocks.push(rendered);
			return `${prefix}${blocks.length - 1}%%`;
		} catch (error) {
			throw new Error(`KaTeX error in ${sectionTitle}: ${tex}`, { cause: error });
		}
	});
	return { processed, blocks };
}

function restoreMath(html, blocks) {
	let restored = 0;
	const result = html.replace(/%%XXPDFMATH(\d+)%%/g, (_, idx) => {
		if (blocks[Number(idx)] === undefined) throw new Error(`Unknown math placeholder: ${idx}`);
		restored++;
		return blocks[Number(idx)];
	});
	if (restored !== blocks.length) throw new Error(`Restored ${restored} of ${blocks.length} math expressions`);
	return result;
}

// ── Read markdown files ──────────────────────────────────────────────────────
function readMarkdownFiles() {
	console.log(`\n📖 Reading Paper XX sections for language: ${LANGUAGE}`);
	console.log(`Input directory: ${INPUT_DIR}\n`);
	const contents = [];

	for (const section of sections) {
		const filename = `${section.file}.${LANGUAGE}.md`;
		const filepath = path.join(INPUT_DIR, filename);
		process.stdout.write(`Reading ${filename}... `);

		if (!fs.existsSync(filepath)) {
			console.error(`\n❌ File not found: ${filepath}`);
			process.exit(1);
		}

		let content = fs.readFileSync(filepath, 'utf-8');
		console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);
		content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
		process.stdout.write('   Processing images... ');
		content = processMarkdownImagesSync(content);
		console.log('done.');

		const title = LANGUAGE === 'en' ? section.titleEn : section.titleSv;
		contents.push({ title, content, isAppendix: section.isAppendix });
	}

	console.log(`\n✅ All sections read successfully\n`);
	return contents;
}

function getCoverImageUri() {
	if (fs.existsSync(COVER_IMAGE)) {
		return 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/');
	}
	console.log('📝 Cover image not found, proceeding without it');
	return null;
}

function generateHTML(sections) {
	console.log('🔨 Converting markdown to HTML (pre‑rendering LaTeX)...');
	marked.setOptions({ breaks: false, gfm: true });
	const coverImage = getCoverImageUri();
	const katexCssUri = KATEX_CSS;

	let html = `
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
    <div class="series-note">${meta.seriesNote}</div>
    <div class="description">${meta.description}</div>
    <div class="metadata">
      <div><strong>${meta.author}</strong></div>
      <div>${meta.date}</div>
      <div class="license">${meta.license}</div>
    </div>
    <div class="url">${meta.url}</div>
  </div>
`;

	sections.forEach((section, index) => {
		process.stdout.write(`  Processing ${section.title}... `);
		if (index > 0) html += `\n<div class="section-divider"></div>\n`;
		const sectionClass = section.isAppendix ? 'appendix' : '';
		html += `<section class="${sectionClass}">\n`;

		const { processed, blocks } = preRenderMath(section.content, section.title);
		const imgEnhanced = enhanceImageMarkup(processed);
		const rawHtml = marked.parse(imgEnhanced);
		const finalHtml = restoreMath(rawHtml, blocks);
		html += finalHtml;
		html += `</section>\n`;
		console.log(`✓ (${(finalHtml.length / 1024).toFixed(1)} KB)`);
	});

	html += `\n</body>\n</html>\n`;
	console.log(`\n✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
	return html;
}

async function generatePDF(html) {
	console.log('📄 Generating PDF...');
	if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

	const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-three-laws-from-one-bound-${LANGUAGE}.html`);
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

		await applyProvenance(page);
		await page.emulateMediaType('print');
		await page.evaluate(async () => {
			await document.fonts.ready;
			await Promise.all(Array.from(document.images, img => img.decode()));
			if (!document.querySelector('link[rel="stylesheet"]')?.sheet) throw new Error('KaTeX stylesheet did not load');
		});
		const overflow = await page.evaluate(() => Array.from(document.querySelectorAll('.katex-display')).filter(el => el.scrollWidth > el.clientWidth + 2).map(el => el.textContent.slice(0, 100)));
		if (overflow.length) console.warn('Check wide equations in the printed PDF:', overflow);
		await page.pdf({
			path: OUTPUT_FILE,
			format: 'A4',
			printBackground: true,
			margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
			displayHeaderFooter: true,
			headerTemplate: `
				<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;">
					<span style="float: left;">${meta.title}</span>
					<span style="float: right;">${LANGUAGE === 'en' ? 'Working paper · Series XX' : 'Artikel · Serie XX'}</span>
				</div>
			`,
			footerTemplate: `<div></div>`,
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
		console.log('📄 Starting PDF generation for Three Laws from One Bound (Paper XX)...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);

		const sections = readMarkdownFiles();
		const html = generateHTML(sections);

		if (process.env.DEBUG || process.env.HTML_ONLY === '1') {
			const debugFile = path.join(__dirname, `../debug-three-laws-from-one-bound-${LANGUAGE}.html`);
			fs.writeFileSync(debugFile, html);
			console.log(`Debug HTML saved to: ${debugFile}`);
		}

		if (process.env.HTML_ONLY === '1') return;
		await generatePDF(html);
	} catch (error) {
		console.error('\n❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
