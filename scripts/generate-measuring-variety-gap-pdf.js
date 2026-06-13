#!/usr/bin/env node

/**
 * Generate PDF for Measuring the Variety Gap working paper (Paper VIII)
 *
 * Usage: node scripts/generate-measuring-variety-gap-pdf.js [language]
 * Example: node scripts/generate-measuring-variety-gap-pdf.js en
 * Example: node scripts/generate-measuring-variety-gap-pdf.js sv
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
const SLUG = 'measuring-the-variety-gap';
const INPUT_DIR = path.join(__dirname, `../src/routes/working-papers/${SLUG}/sections`);
const OUTPUT_DIR = path.join(__dirname, '../static/working-papers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${SLUG}${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, `../static/working-papers/images/${SLUG}-cover.png`);

// ── Metadata ──────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: 'Measuring the Variety Gap',
		subtitle: 'A Parametric Framework for Diagnosing Governance Failure',
		description: 'The Governance as Engineering series has established structural constraints on institutional perception, but has not yet provided a systematic method for measuring the central diagnostic concept: the Variety Gap. This paper develops a parametric framework that maps observable governance characteristics to the eight structural primitives, constructs a composite Variety Gap Index, and tests it against the twenty‑one cases in the series. It is offered as a diagnostic instrument, with all limitations stated, for empirical testing and refinement.',
		author: 'Björn Kenneth Holmström',
		date: 'May 2026',
		url: `https://bjornkennethholmstrom.org/working-papers/${SLUG}`,
		seriesNote: 'Paper VIII in the Governance as Engineering series',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	},
	sv: {
		title: 'Att mäta varietetsgapet',
		subtitle: 'Ett parametriskt ramverk för att diagnostisera styrningsmisslyckanden',
		description: 'Serien Styrning som ingenjörskonst har fastställt strukturella begränsningar för institutionell perception, men har ännu inte tillhandahållit en systematisk metod för att mäta det centrala diagnostiska konceptet: varietetsgapet. Denna rapport utvecklar ett parametriskt ramverk som kartlägger observerbara styrningsegenskaper till de åtta strukturella primitiverna, konstruerar ett sammansatt varietetsgapindex och testar det mot de tjugoen fallen i serien. Det erbjuds som ett diagnostiskt instrument, med alla begränsningar angivna, för empirisk testning och förfining.',
		author: 'Björn Kenneth Holmström',
		date: 'Maj 2026',
		url: `https://bjornkennethholmstrom.org/sv/working-papers/${SLUG}`,
		seriesNote: 'Rapport VIII i serien Styrning som ingenjörskonst',
		license: 'Creative Commons Attribution-ShareAlike 4.0 International'
	}
};

const meta = metadata[LANGUAGE];

// ── Section definitions (order as per the Svelte page) ──────────────────────
const sections = [
	{ file: '01-introduction',                  title: LANGUAGE === 'en' ? '1. Introduction: From Diagnosis to Measurement'                     : '1. Introduktion: Från diagnos till mätning',                          isAppendix: false },
	{ file: '02-dimensionality-estimation-problem', title: LANGUAGE === 'en' ? '2. The Dimensionality Estimation Problem'                        : '2. Dimensionalitetsuppskattningsproblemet',                            isAppendix: false },
	{ file: '03-eight-parameters',               title: LANGUAGE === 'en' ? '3. The Eight Parameters'                                             : '3. De åtta parametrarna',                                              isAppendix: false },
	{ file: '04-measurement-paradox',            title: LANGUAGE === 'en' ? '4. The Measurement Paradox'                                           : '4. Mätparadoxen',                                                      isAppendix: false },
	{ file: '05-composite-variety-gap-index',    title: LANGUAGE === 'en' ? '5. The Composite Variety Gap Index'                                  : '5. Det sammansatta varietetsgap-indexet',                             isAppendix: false },
	{ file: '06-dynamic-extension',              title: LANGUAGE === 'en' ? '6. Dynamic Extension: Measuring the Rate of Gap Change'             : '6. Dynamisk utvidgning: Mätning av gapets förändringshastighet',     isAppendix: false },
	{ file: '07-calibration',                   title: LANGUAGE === 'en' ? '7. Calibration Against the Twenty‑One Cases'                         : '7. Kalibrering mot de tjugoen fallen',                                 isAppendix: false },
	{ file: '08-empirical-application',          title: LANGUAGE === 'en' ? '8. Empirical Application: A Pilot Validation'                       : '8. Empirisk tillämpning: En pilotvalidering',                         isAppendix: false },
	{ file: '09-limitations-and-next-steps',     title: LANGUAGE === 'en' ? '9. Limitations and Next Steps'                                      : '9. Begränsningar och nästa steg',                                     isAppendix: false },
	{ file: '10-appendix-a',                     title: LANGUAGE === 'en' ? 'Appendix A: Parameter Estimation Guide'                              : 'Appendix A: Guide för parameteruppskattning',                         isAppendix: true  },
	{ file: '10-appendix-b',                     title: LANGUAGE === 'en' ? 'Appendix B: Country Calibration Table'                               : 'Appendix B: Landkalibreringstabell',                                  isAppendix: true  },
	{ file: '10-appendix-c',                     title: LANGUAGE === 'en' ? 'Appendix C: Data Sources and Availability Matrix'                   : 'Appendix C: Datakällor och tillgänglighetsmatris',                    isAppendix: true  },
	{ file: '10-appendix-d',                     title: LANGUAGE === 'en' ? 'Appendix D: Mathematical Appendix'                                   : 'Appendix D: Matematiskt appendix',                                    isAppendix: true  },
];

// ── CSS (identical to Paper VI template) ────────────────────────────────────
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
		overflow-wrap: break-word;
		word-wrap: break-word;
		hyphens: auto;
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

	img { max-height: 20cm; width: auto; max-width: 100%; object-fit: contain; }
	figure, .figure, .diagram-container { page-break-inside: avoid; break-inside: avoid; margin: 1.5em 0; }

	h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
	p, li { orphans: 3; widows: 3; }

	.page-break-before { page-break-before: always; }
	.page-break-after  { page-break-after: always;  }
	.page-break-avoid  { page-break-inside: avoid; break-inside: avoid; }
</style>
`;

// ── Helpers (unchanged from template) ───────────────────────────────────────
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
			path.join(__dirname, `../src/routes/working-papers/${SLUG}`, imagePath),
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
					<span style="float: right;">${LANGUAGE === 'en' ? 'Working paper · Series VIII' : 'Artikel · Serie VIII'}</span>
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
		console.log('📄 Starting PDF generation for Measuring the Variety Gap working paper...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);

		const sections = readMarkdownFiles();
		const html = generateHTML(sections);

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
