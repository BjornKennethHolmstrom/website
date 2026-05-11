#!/usr/bin/env node

/**
 * Generate PDF for The Observability-Democracy Connection working paper
 *
 * Usage: node scripts/generate-observability-democracy-pdf.js [language]
 * Example: node scripts/generate-observability-democracy-pdf.js en
 * Example: node scripts/generate-observability-democracy-pdf.js sv
 *
 * Requirements:
 * npm install marked puppeteer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
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

const suffix = LANGUAGE === 'en' ? '' : `-${LANGUAGE}`;
const INPUT_DIR = path.join(__dirname, '../src/routes/working-papers/observability-democracy-connection/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/working-papers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `observability-democracy-connection${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/working-papers/images/observability-democracy-cover.png');

const metadata = {
	en: {
		title: 'The Observability-Democracy Connection',
		subtitle: 'How Representation Chains Destroy the Signal They Are Meant to Transmit',
		description: 'Representation chains with three or more layers are constitutionally unobservable: noise variance exceeds surviving signal variance at the policy layer, and no institutional reform within the existing architecture can restore preference transmission fidelity.',
		author: 'Björn Kenneth Holmström',
		date: 'February 2026',
		url: 'https://bjornkennethholmstrom.org/working-papers/observability-democracy-connection',
		seriesNote: 'Paper III in the Governance as Engineering series',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	},
	sv: {
		title: 'Observerbarhets-demokratikopplingen',
		subtitle: 'Hur representationskedjor förstör den signal de är avsedda att förmedla',
		description: 'Representationskedjor med tre eller fler lager är konstitutionellt icke-observerbara: brusvariansen överstiger den kvarvarande signalvariansen i politiklagret, och ingen institutionell reform kan återställa preferensöverföringens trohet.',
		author: 'Björn Kenneth Holmström',
		date: 'Februari 2026',
		url: 'https://bjornkennethholmstrom.org/sv/working-papers/observability-democracy-connection',
		seriesNote: 'Rapport III i serien Styrning som ingenjörskonst',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	}
};

const meta = metadata[LANGUAGE];

const sections = [
	{ file: 'executive-summary', title: LANGUAGE === 'en' ? 'Executive Summary'                                                           : 'Sammanfattning',                                              isAppendix: false },
	{ file: 'part-1',            title: LANGUAGE === 'en' ? 'Part I: The Observability Problem'                                           : 'Del I: Observerbarhetsproblemet',                              isAppendix: false },
	{ file: 'part-2',            title: LANGUAGE === 'en' ? 'Part II: The Simulation'                                                     : 'Del II: Simuleringen',                                         isAppendix: false },
	{ file: 'part-3',            title: LANGUAGE === 'en' ? 'Part III: Structural Observations'                                           : 'Del III: Strukturella observationer',                          isAppendix: false },
	{ file: 'part-4',            title: LANGUAGE === 'en' ? 'Part IV: Limitations'                                                        : 'Del IV: Begränsningar',                                        isAppendix: false },
	{ file: 'part-5',            title: LANGUAGE === 'en' ? 'Part V: Implications'                                                        : 'Del V: Implikationer',                                         isAppendix: false },
	{ file: 'part-6',            title: LANGUAGE === 'en' ? 'Part VI: Conclusion'                                                         : 'Del VI: Slutsats',                                             isAppendix: false },
	{ file: 'appendix-a',        title: LANGUAGE === 'en' ? 'Appendix A: Mathematical Formulations'                                       : 'Appendix A: Matematiska formuleringar',                        isAppendix: true  },
	{ file: 'appendix-b',        title: LANGUAGE === 'en' ? 'Appendix B: Code and Reproduction'                                           : 'Appendix B: Kod och reproducerbarhet',                         isAppendix: true  },
	{ file: 'appendix-c',        title: LANGUAGE === 'en' ? 'Appendix C: References and Sources'                                          : 'Appendix C: Referenser och källor',                            isAppendix: true  },
];

// ── CSS ───────────────────────────────────────────────────────────────────────
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
		font-size: 11pt;
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
		max-width: 280px;
		max-height: 12cm;
		object-fit: contain;
		margin-bottom: 1em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}

	.cover h1 {
		font-size: 22pt;
		font-weight: bold;
		margin-bottom: 0.3em;
		line-height: 1.2;
		color: #1a1a1a;
	}

	.cover .subtitle {
		font-size: 13pt;
		font-style: italic;
		margin-bottom: 0.4em;
		color: #555;
		line-height: 1.4;
		max-width: 560px;
	}

	.cover .series-note {
		font-size: 9.5pt;
		color: #888;
		margin-bottom: 0.4em;
		font-style: italic;
	}

	.cover .description {
		font-size: 10.5pt;
		margin-bottom: 0.6em;
		color: #666;
		max-width: 580px;
		line-height: 1.4;
	}

	.cover .metadata {
		font-size: 10.5pt;
		color: #666;
		margin-top: 0.6em;
		line-height: 1.5;
	}

	.cover .url {
		font-size: 8.5pt;
		color: #888;
		margin-top: 0.4em;
		font-family: 'Courier New', monospace;
	}

	.cover .license {
		font-size: 8.5pt;
		color: #888;
		margin-top: 0.2em;
		font-style: italic;
	}

	h1 {
		font-size: 20pt;
		font-weight: bold;
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		page-break-after: avoid;
		color: #1a1a1a;
		border-bottom: 2px solid #ccc;
		padding-bottom: 0.2em;
	}

	h2 {
		font-size: 16pt;
		font-weight: bold;
		margin-top: 1.2em;
		margin-bottom: 0.5em;
		page-break-after: avoid;
		color: #2c2c2c;
	}

	h3 {
		font-size: 14pt;
		font-weight: bold;
		margin-top: 1em;
		margin-bottom: 0.5em;
		page-break-after: avoid;
		color: #333;
	}

	h4 {
		font-size: 12pt;
		font-weight: bold;
		margin-top: 0.8em;
		margin-bottom: 0.5em;
		page-break-after: avoid;
		font-style: italic;
	}

	p {
		margin-bottom: 0.8em;
		text-align: justify;
		orphans: 3;
		widows: 3;
	}

	ul, ol { margin-bottom: 0.8em; padding-left: 1.5em; }
	li { margin-bottom: 0.3em; }
	ul ul, ol ol, ul ol, ol ul { margin-top: 0.3em; margin-bottom: 0.3em; }

	blockquote {
		margin: 1em 2em;
		padding: 0.5em 1em;
		border-left: 3px solid #ccc;
		font-style: italic;
		background: #f9f9f9;
		page-break-inside: avoid;
	}

	pre {
		background: #f5f5f5;
		border: 1px solid #ddd;
		padding: 0.8em;
		font-size: 9pt;
		line-height: 1.4;
		page-break-inside: avoid;
		margin-bottom: 1em;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		color: #1a1a1a;
	}

	code {
		background: #f5f5f5;
		padding: 0.1em 0.3em;
		font-family: 'Courier New', monospace;
		font-size: 9pt;
		border-radius: 2px;
		color: #1a1a1a;
	}

	pre code { background: none; padding: 0; }

	table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1em;
		page-break-inside: avoid;
		font-size: 10pt;
	}

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

	img, .cover-image { max-height: 20cm; width: auto; max-width: 100%; object-fit: contain; }
	figure, .figure, .diagram-container { page-break-inside: avoid; break-inside: avoid; margin: 1.5em 0; }

	h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
	p, li { orphans: 3; widows: 3; }

	.page-break-before { page-break-before: always; }
	.page-break-after  { page-break-after: always;  }
	.page-break-avoid  { page-break-inside: avoid; break-inside: avoid; }
</style>
`;

// ── Helpers ───────────────────────────────────────────────────────────────────
function processMarkdownImagesSync(content) {
	const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
	let match;
	let processedContent = content;

	while ((match = imageRegex.exec(content)) !== null) {
		const [fullMatch, altText, imagePath] = match;
		if (imagePath.startsWith('http') || imagePath.startsWith('file:')) continue;

		const possiblePaths = [
			path.join(__dirname, '../static', imagePath),
			path.join(__dirname, '../static/working-papers/images', path.basename(imagePath)),
			path.join(__dirname, '../src/routes/working-papers/observability-democracy-connection', imagePath),
			path.join(__dirname, '../static', imagePath.replace(/^\//, ''))
		];

		let foundPath = null;
		for (const testPath of possiblePaths) {
			if (fs.existsSync(testPath)) { foundPath = testPath; break; }
		}

		if (foundPath) {
			const fileUri = 'file://' + path.resolve(foundPath).replace(/\\/g, '/');
			processedContent = processedContent.replace(fullMatch, `![${altText}](${fileUri})`);
			console.log(`✅ Linked image: ${path.basename(foundPath)}`);
		} else {
			console.warn(`⚠️  Image not found: ${imagePath}`);
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

function readMarkdownFiles() {
	console.log(`\n📖 Reading working paper sections for language: ${LANGUAGE}`);
	console.log(`Input directory: ${INPUT_DIR}\n`);
	const contents = [];

	for (const section of sections) {
		const filename = LANGUAGE === 'en' ? `${section.file}.md` : `${section.file}-sv.md`;
		const filepath = path.join(INPUT_DIR, filename);
		process.stdout.write(`Reading ${filename}... `);

		if (!fs.existsSync(filepath)) {
			console.error(`\n❌ File not found: ${filepath}`);
			process.exit(1);
		}

		let content = fs.readFileSync(filepath, 'utf-8');
		console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);
		content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
		process.stdout.write(`   Processing images... `);
		content = processMarkdownImagesSync(content);
		contents.push({ title: section.title, content, isAppendix: section.isAppendix });
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
	console.log('🔨 Converting markdown to HTML...');
	marked.setOptions({ breaks: false, gfm: true });
	const coverImage = getCoverImageUri();

	let html = `
<!DOCTYPE html>
<html lang="${LANGUAGE}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
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
		const enhancedContent = enhanceImageMarkup(section.content);
		const sectionHtml = marked.parse(enhancedContent);
		html += sectionHtml;
		html += `</section>\n`;
		console.log(`✓ (${(sectionHtml.length / 1024).toFixed(1)} KB)`);
	});

	html += `\n</body>\n</html>\n`;
	console.log(`\n✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
	return html;
}

async function generatePDF(html) {
	console.log('📄 Generating PDF...');
	if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

	const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-${LANGUAGE}.html`);
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
					<span style="float: right;">${LANGUAGE === 'en' ? 'Working paper · Series III' : 'Artikel · Serie III'}</span>
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
		console.log('📄 Starting PDF generation for The Observability-Democracy Connection working paper...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);

		const sections = readMarkdownFiles();
		const html = generateHTML(sections);

		if (process.env.DEBUG) {
			const debugFile = path.join(__dirname, `../debug-observability-${LANGUAGE}.html`);
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
