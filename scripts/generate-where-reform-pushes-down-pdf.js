#!/usr/bin/env node

/**
 * Generate PDF for Where Reform Pushes Down, Strategy Pushes Back (Paper XXV)
 *
 * Usage: node scripts/generate-where-reform-pushes-down-pdf.js [language]
 * Example: node scripts/generate-where-reform-pushes-down-pdf.js en
 * Example: node scripts/generate-where-reform-pushes-down-pdf.js sv
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

const suffix = LANGUAGE === 'sv' ? '-sv' : '';
const INPUT_DIR = path.join(__dirname, '../src/routes/working-papers/where-reform-pushes-down/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/working-papers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `where-reform-pushes-down${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/working-papers/images/where-reform-pushes-down-cover.png');

// ── Metadata ──────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: 'Where Reform Pushes Down, Strategy Pushes Back',
		subtitle: 'Conserved sensitivity, an imported risk measure, and the geometry between them',
		description: 'Imports Bode\'s sensitivity integral and CVaR to separate the geometry of conserved amplification from the geometry of strategic loss. Shows that deeper proxy suppression raises the accessible exploitability floor, and that the gap between risk‑blind and risk‑aware design closes at maximal suppression. Paper XXV in the Governance as Engineering series.',
		author: 'Björn Kenneth Holmström',
		date: 'July 2026',
		url: 'https://bjornkennethholmstrom.org/working-papers/where-reform-pushes-down',
		seriesNote: 'Paper XXV in the Governance as Engineering series',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	},
	sv: {
		title: 'Där reform trycker ner, trycker strategi tillbaka',
		subtitle: 'Konserverad känslighet, ett importerat riskmått och geometrin däremellan',
		description: 'Importerar Bodes känslighetsintegral och CVaR för att separera geometrin för konserverad förstärkning från geometrin för strategisk förlust. Visar att djupare proxy‑undertryckning höjer det nåbara exploaterbarhetsgolvet, och att gapet mellan riskblind och riskmedveten design stängs vid maximalt undertryck. Rapport XXV i serien Styrning som ingenjörskonst.',
		author: 'Björn Kenneth Holmström',
		date: 'Juli 2026',
		url: 'https://bjornkennethholmstrom.org/sv/working-papers/where-reform-pushes-down',
		seriesNote: 'Rapport XXV i serien Styrning som ingenjörskonst',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	}
};

const meta = metadata[LANGUAGE];

// ── Section definitions (matches the Svelte page contentMap) ─────────────────
const sections = [
	{ file: 'abstract',    titleEn: 'Abstract',                                                              titleSv: 'Sammanfattning' },
	{ file: 'section-01',  titleEn: '1. Introduction',                                                        titleSv: '1. Introduktion' },
	{ file: 'section-02',  titleEn: '2. The imported allocation law',                                         titleSv: '2. Den importerade allokeringslagen' },
	{ file: 'section-03',  titleEn: '3. Bode as an achievability constraint, and the geometry gap',           titleSv: '3. Bode som ett uppnåelighetsvillkor, och geometrigapet' },
	{ file: 'section-04',  titleEn: '4. Licensing conditions',                                                titleSv: '4. Licensieringsvillkor' },
	{ file: 'section-05',  titleEn: '5. What architecture can and cannot buy: an achievability result',        titleSv: '5. Vad arkitektur kan och inte kan köpa: ett uppnåelighetsresultat' },
	{ file: 'section-06',  titleEn: '6. Governance transfer, in two separated layers',                         titleSv: '6. Styrningsöverföring, i två separata lager' },
	{ file: 'section-07',  titleEn: '7. Limits and open problems',                                            titleSv: '7. Gränser och öppna problem' },
	{ file: 'appendix-a',  titleEn: 'Appendix A: The allocation lemma',                                       titleSv: 'Appendix A: Allokeringslemmat', isAppendix: true },
	{ file: 'appendix-b',  titleEn: 'Appendix B: Model, simulators, and reproducibility',                     titleSv: 'Appendix B: Modell, simulatorer och reproducerbarhet', isAppendix: true },
];

// ── CSS (12pt base, with overflow‑wrap fixes for appendices) ────────────────
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
	pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; font-size: 9pt; line-height: 1.4; page-break-inside: avoid; margin-bottom: 1em; border-radius: 4px; font-family: 'Courier New', monospace; color: #1a1a1a; white-space: pre-wrap; overflow-wrap: anywhere; word-break: break-word; }
	code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; border-radius: 2px; color: #1a1a1a; overflow-wrap: anywhere; word-break: break-word; }
	pre code { background: none; padding: 0; }
	table { width: 100%; border-collapse: collapse; margin-bottom: 1em; page-break-inside: avoid; font-size: 10pt; table-layout: fixed; }
	th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; vertical-align: top; overflow-wrap: anywhere; word-break: break-word; }
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
	.page-break-avoid  { page-break-inside: avoid; break-inside: avoid; }
	.katex-display { overflow-x: hidden; }
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
			path.join(__dirname, '../src/routes/working-papers/where-reform-pushes-down', imagePath),
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

	// Display math: $$ ... $$ and \[ ... \]
	processed = processed.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
		const tex = (tex1 ?? tex2 ?? '').trim();
		try {
			const rendered = katex.renderToString(tex, { displayMode: true, throwOnError: false });
			blocks.push(rendered);
			return `%%MATH${blocks.length - 1}%%`;
		} catch (e) {
			console.warn('KaTeX display error:', e);
			blocks.push(match);
			return `%%MATH${blocks.length - 1}%%`;
		}
	});

	// Inline math: $ ... $ and \( ... \)
	processed = processed.replace(/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g, (match, tex1, tex2) => {
		const tex = (tex1 ?? tex2 ?? '').trim();
		try {
			const rendered = katex.renderToString(tex, { displayMode: false, throwOnError: false });
			blocks.push(rendered);
			return `%%MATH${blocks.length - 1}%%`;
		} catch (e) {
			console.warn('KaTeX inline error:', e);
			blocks.push(match);
			return `%%MATH${blocks.length - 1}%%`;
		}
	});

	return { processed, blocks };
}

function restoreMath(html, blocks) {
	return html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');
}

// ── Read markdown files ──────────────────────────────────────────────────────
function readMarkdownFiles() {
	console.log(`\n📖 Reading Paper XXV sections for language: ${LANGUAGE}`);
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
	const katexCssUri = 'file://' + path.resolve(path.join(__dirname, '../node_modules/katex/dist/katex.min.css')).replace(/\\/g, '/');

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

		const { processed, blocks } = preRenderMath(section.content);
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

	const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-where-reform-pushes-down-${LANGUAGE}.html`);
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
					<span style="float: right;">${LANGUAGE === 'en' ? 'Working paper · Series XXV' : 'Artikel · Serie XXV'}</span>
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
		console.log('📄 Starting PDF generation for Where Reform Pushes Down, Strategy Pushes Back (Paper XXV)...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);

		const sections = readMarkdownFiles();
		const html = generateHTML(sections);

		if (process.env.DEBUG) {
			const debugFile = path.join(__dirname, `../debug-where-reform-pushes-down-${LANGUAGE}.html`);
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
