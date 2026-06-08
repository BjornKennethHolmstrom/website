#!/usr/bin/env node

/**
 * Generate PDF for the Switzerland Boundary Expansion Deficit report
 * 
 * Usage: node scripts/generate-switzerland-report-pdf.js [language]
 * Example: node scripts/generate-switzerland-report-pdf.js en
 * Example: node scripts/generate-switzerland-report-pdf.js de
 * Example: node scripts/generate-switzerland-report-pdf.js fr
 * Example: node scripts/generate-switzerland-report-pdf.js it
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

// ── Configuration ────────────────────────────────────────────────────────────
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'de', 'fr', 'it'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const REPORT_SLUG = 'switzerland-boundary-expansion-deficit';
const INPUT_DIR = path.join(__dirname, `../src/routes/reports/${REPORT_SLUG}/sections`);
const OUTPUT_DIR = path.join(__dirname, `../static/reports`);
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${REPORT_SLUG}-${LANGUAGE}.pdf`);
const COVER_IMAGE = path.join(__dirname, `../static/images/reports/${REPORT_SLUG}/cover.png`);

// ── Metadata ─────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: "Switzerland: The Boundary Expansion Deficit",
		subtitle: "When Internal Excellence Meets Global Interdependence",
		description: "Switzerland does not lack governance capacity — it lacks the boundary adequacy to match its internal excellence to global interdependence. This report diagnoses the Boundary Expansion Deficit and proposes a Global Footprint Dashboard, a Cantonal Pilot Programme, and a Citizens' Assembly on Switzerland's Global Role.",
		author: "Björn Kenneth Holmström",
		date: "June 2026",
		url: "https://bjornkennethholmstrom.org/reports/switzerland-boundary-expansion-deficit",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "Country Report · Switzerland"
	},
	de: {
		title: "Schweiz: Das Grenzerweiterungsdefizit",
		subtitle: "Wenn interne Exzellenz auf globale Interdependenz trifft",
		description: "Die Schweiz leidet nicht an mangelnder Governance-Kapazität, sondern an unzureichender Grenzadäquanz, um ihre interne Exzellenz mit globaler Interdependenz in Einklang zu bringen. Dieser Bericht diagnostiziert das Grenzerweiterungsdefizit und schlägt ein Global-Footprint-Dashboard, ein kantonales Pilotprogramm und eine Bürgerversammlung zur globalen Rolle der Schweiz vor.",
		author: "Björn Kenneth Holmström",
		date: "Juni 2026",
		url: "https://bjornkennethholmstrom.org/reports/switzerland-boundary-expansion-deficit",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "Länderbericht · Schweiz"
	},
	fr: {
		title: "Suisse : Le déficit d'expansion des frontières",
		subtitle: "Quand l'excellence interne rencontre l'interdépendance mondiale",
		description: "La Suisse ne manque pas de capacité de gouvernance — elle manque d’une adéquation des frontières pour aligner son excellence interne sur l’interdépendance mondiale. Ce rapport diagnostique le déficit d’expansion des frontières et propose un tableau de bord de l’empreinte mondiale, un programme pilote cantonal et une Assemblée citoyenne sur le rôle mondial de la Suisse.",
		author: "Björn Kenneth Holmström",
		date: "Juin 2026",
		url: "https://bjornkennethholmstrom.org/reports/switzerland-boundary-expansion-deficit",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "Rapport national · Suisse"
	},
	it: {
		title: "Svizzera: Il deficit di espansione del confine",
		subtitle: "Quando l'eccellenza interna incontra l'interdipendenza globale",
		description: "La Svizzera non manca di capacità di governance — le manca l'adeguatezza del confine per allineare la sua eccellenza interna all'interdipendenza globale. Questo rapporto diagnostica il deficit di espansione del confine e propone un Dashboard dell'impronta globale, un programma pilota cantonale e un'Assemblea dei cittadini sul ruolo globale della Svizzera.",
		author: "Björn Kenneth Holmström",
		date: "Giugno 2026",
		url: "https://bjornkennethholmstrom.org/reports/switzerland-boundary-expansion-deficit",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "Rapporto nazionale · Svizzera"
	}
};

const meta = metadata[LANGUAGE];

// ── Section definitions (file base name without language suffix) ───────────
const sections = [
	{ file: 'executive-summary',                 titleEn: 'Executive Summary',                             titleDe: 'Zusammenfassung',                               titleFr: 'Résumé',                                titleIt: 'Sintesi',                              isAppendix: false },
	{ file: '01-boundary-expansion-deficit',      titleEn: '1. The Boundary Expansion Deficit',             titleDe: '1. Das Grenzerweiterungsdefizit',               titleFr: '1. Le déficit d\'expansion des frontières', titleIt: '1. Il deficit di espansione del confine', isAppendix: false },
	{ file: '02-structural-mechanisms',           titleEn: '2. Structural Mechanisms',                      titleDe: '2. Strukturelle Mechanismen',                  titleFr: '2. Mécanismes structurels',               titleIt: '2. Meccanismi strutturali',            isAppendix: false },
	{ file: '03-empirical-cases',                 titleEn: '3. Empirical Cases',                            titleDe: '3. Empirische Fälle',                         titleFr: '3. Cas empiriques',                       titleIt: '3. Casi empirici',                     isAppendix: false },
	{ file: '04-building-boundary-adequacy',      titleEn: '4. What Building Boundary Adequacy Would Look Like', titleDe: '4. Wie der Aufbau von Grenzadäquanz aussehen würde', titleFr: '4. À quoi ressemblerait l\'adéquation des frontières', titleIt: '4. Come sarebbe costruire l\'adeguatezza dei confini', isAppendix: false },
	{ file: '05-concrete-first-step',             titleEn: '5. A Concrete First Step: The Boundary Expansion Pilot', titleDe: '5. Ein konkreter erster Schritt: Das Grenzerweiterungspilotprojekt', titleFr: '5. Une première étape concrète : le projet pilote d\'expansion des frontières', titleIt: '5. Un primo passo concreto: il progetto pilota di espansione del confine', isAppendix: false },
	{ file: '06-coda',                            titleEn: '6. Coda: The Prototype at the Boundary',       titleDe: '6. Koda: Der Prototyp an der Grenze',         titleFr: '6. Coda : le prototype à la frontière',  titleIt: '6. Coda: Il prototipo al confine',      isAppendix: false },
	{ file: '07-appendix-a',                      titleEn: 'Appendix A: Value Systems & Policy Mindsets',   titleDe: 'Anhang A: Wertesysteme und politische Denkweisen', titleFr: 'Annexe A : Systèmes de valeurs et mentalités politiques', titleIt: 'Appendice A: Sistemi di valori e mentalità politiche', isAppendix: true  },
	{ file: '08-appendix-b',                      titleEn: 'Appendix B: International Analogues',           titleDe: 'Anhang B: Internationale Analogien',          titleFr: 'Annexe B : Analogies internationales',   titleIt: 'Appendice B: Analogie internazionali',  isAppendix: true  },
	{ file: '09-appendix-c',                      titleEn: 'Appendix C: The Governance as Engineering Connection', titleDe: 'Anhang C: Die Verbindung zu Governance as Engineering', titleFr: 'Annexe C : Le lien avec la gouvernance comme ingénierie', titleIt: 'Appendice C: Il collegamento con Governance as Engineering', isAppendix: true  },
	{ file: '10-appendix-d',                      titleEn: 'Appendix D: Anticipated Objections',           titleDe: 'Anhang D: Erwartete Einwände',                titleFr: 'Annexe D : Objections anticipées',       titleIt: 'Appendice D: Obiezioni previste',       isAppendix: true  },
	{ file: '11-appendix-e',                      titleEn: 'Appendix E: About the Author & Method',        titleDe: 'Anhang E: Über den Autor und die Methode',    titleFr: 'Annexe E : À propos de l\'auteur et de la méthode', titleIt: 'Appendice E: L\'autore e il metodo',  isAppendix: true  },
];

// ── CSS (identical to other scripts) ─────────────────────────────────────────
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
		@bottom-right {
			content: none;
		}
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
	
	/* Cover page */
	.cover {
		page-break-after: always;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		text-align: center;
		padding: 0.5cm 2cm;
		margin-top: 0;
		box-sizing: border-box;
	}
	
	.cover-image {
		width: auto;
		height: 400px;
		object-fit: contain;
		margin-bottom: 1em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}
	
	.cover h1 {
		font-size: 24pt;
		font-weight: bold;
		margin-bottom: 0.3em;
		line-height: 1.2;
		color: #1a1a1a;
	}
	
	.cover .subtitle {
		font-size: 14pt;
		font-style: italic;
		margin-bottom: 0.6em;
		color: #555;
		line-height: 1.3;
	}
	
	.cover .description {
		font-size: 10.5pt;
		margin-bottom: 0.6em;
		color: #666;
		max-width: 600px;
		line-height: 1.4;
	}
	
	.cover .metadata {
		font-size: 10.5pt;
		color: #666;
		margin-top: 1em;
		line-height: 1.5;
	}
	
	.cover .url {
		font-size: 8.5pt;
		color: #888;
		margin-top: 0.6em;
		font-family: 'Courier New', monospace;
	}
	
	.cover .license {
		font-size: 8.5pt;
		color: #888;
		margin-top: 0.4em;
		font-style: italic;
	}
	
	.cover .type {
		font-size: 9pt;
		color: #888;
		margin-top: 0.3em;
	}
	
	/* Typography */
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
	
	ul, ol {
		margin-bottom: 0.8em;
		padding-left: 1.5em;
	}
	
	li {
		margin-bottom: 0.3em;
	}
	
	ul ul, ol ol, ul ol, ol ul {
		margin-top: 0.3em;
		margin-bottom: 0.3em;
	}
	
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
		overflow-x: auto;
		font-size: 9pt;
		line-height: 1.4;
		page-break-inside: avoid;
		margin-bottom: 1em;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
	}
	
	code {
		background: #f5f5f5;
		padding: 0.1em 0.3em;
		font-family: 'Courier New', monospace;
		font-size: 9pt;
		border-radius: 2px;
	}
	
	pre code {
		background: none;
		padding: 0;
	}
	
	table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1em;
		page-break-inside: avoid;
		font-size: 10pt;
	}
	
	th, td {
		border: 1px solid #ddd;
		padding: 0.5em;
		text-align: left;
		vertical-align: top;
	}
	
	th {
		background: #f5f5f5;
		font-weight: bold;
	}
	
	a {
		color: #0066cc;
		text-decoration: none;
	}
	
	a[href^="http"]:after {
		content: " (" attr(href) ")";
		font-size: 8pt;
		color: #666;
		word-break: break-all;
	}
	
	a[href^="#"]:after {
		content: "";
	}
	
	strong {
		font-weight: bold;
		color: #000;
	}
	
	em {
		font-style: italic;
	}
	
	hr {
		border: none;
		border-top: 2px solid #ccc;
		margin: 2em 0;
		page-break-after: avoid;
	}
	
	.section-gap {
		margin: 2em 0 1em 0;
	}
	
	.appendix h1 {
		font-style: italic;
		color: #444;
	}
	
	.figure-container {
		page-break-inside: avoid;
		break-inside: avoid;
	}
	
	.figure {
		page-break-inside: avoid;
		margin: 1.5em 0;
		text-align: center;
	}
	
	.figure img {
		max-width: 100%;
		max-height: 22cm;
		width: auto;
		height: auto;
		object-fit: contain;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
	
	img,
	.cover-image {
		max-height: 20cm;
		width: auto;
		max-width: 100%;
		object-fit: contain;
	}
	
	figure, .figure, .diagram-container {
		page-break-inside: avoid;
		break-inside: avoid;
		margin: 1.5em 0;
	}
	
	em:only-child {
		display: block;
		font-size: 9.5pt;
		color: #555;
		margin-top: 0.4em;
		text-align: center;
		font-style: italic;
	}
	
	.appendix, .acknowledgements, .references {
		page-break-before: always;
	}
	
	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}
	
	p, li {
		orphans: 3;
		widows: 3;
	}
	
	.page-break-before { page-break-before: always; }
	.page-break-after  { page-break-after: always;  }
	.page-break-avoid  { page-break-inside: avoid; break-inside: avoid; }
	
	.section-divider {
		page-break-before: always;
	}
	
	.section-gap {
		margin: 2em 0 1em 0;
	}
</style>
`;

// ── Helper: resolve local image paths to file:// URIs ─────────────────────────
function processMarkdownImagesSync(content) {
	const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
	let processedContent = content;
	let match;

	while ((match = imageRegex.exec(content)) !== null) {
		const [fullMatch, altText, imagePath] = match;
		if (imagePath.startsWith('http') || imagePath.startsWith('file:')) continue;

		const possiblePaths = [
			path.join(__dirname, '../static', imagePath),
			path.join(__dirname, '../static/images/reports', path.basename(imagePath)),
			path.join(INPUT_DIR, imagePath),
			path.join(__dirname, '../static', imagePath.replace(/^\//, ''))
		];

		let foundPath = null;
		for (const testPath of possiblePaths) {
			if (fs.existsSync(testPath)) {
				foundPath = testPath;
				break;
			}
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

// ── Wrap markdown images in figure containers ─────────────────────────────────
function enhanceImageMarkup(content) {
	const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
	return content.replace(imageRegex, (fullMatch, altText, imagePath) => `
<div class="figure-container">
  <div class="figure">
    <img src="${imagePath}" alt="${altText}" />
  </div>
</div>
`);
}

// ── Read and combine markdown files ───────────────────────────────────────────
function readMarkdownFiles() {
	console.log(`\n📖 Reading report sections for language: ${LANGUAGE}`);
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

		// Remove possible frontmatter
		content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

		process.stdout.write(`   Processing images... `);
		content = processMarkdownImagesSync(content);

		// Determine title in current language
		let title;
		if (LANGUAGE === 'de') title = section.titleDe;
		else if (LANGUAGE === 'fr') title = section.titleFr;
		else if (LANGUAGE === 'it') title = section.titleIt;
		else title = section.titleEn;

		contents.push({ title, content, isAppendix: section.isAppendix });
	}

	console.log(`\n✅ All sections read successfully\n`);
	return contents;
}

// ── Cover image URI ───────────────────────────────────────────────────────────
function getCoverImageUri() {
	if (fs.existsSync(COVER_IMAGE)) {
		return 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/');
	}
	console.log('📝 Cover image not found, proceeding without it');
	return null;
}

// ── Generate HTML ─────────────────────────────────────────────────────────────
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
    <div class="description">${meta.description}</div>
    <div class="metadata">
      <div><strong>${meta.author}</strong></div>
      <div>${meta.date}</div>
      <div class="license">${meta.license}</div>
      <div class="type">${meta.type}</div>
    </div>
    <div class="url">${meta.url}</div>
  </div>
`;

	sections.forEach((section, index) => {
		process.stdout.write(`  Processing ${section.title}... `);

		if (index > 0) {
			const dividerClass = section.isAppendix ? 'section-gap' : 'section-divider';
			html += `<div class="${dividerClass}"></div>\n`;
		}

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

// ── Generate PDF via Puppeteer ────────────────────────────────────────────────
async function generatePDF(html) {
	console.log('📄 Generating PDF...');

	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-${REPORT_SLUG}-${LANGUAGE}.html`);
	fs.writeFileSync(tempHtmlFile, html);
	const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

	const browser = await puppeteer.launch({
		headless: 'new',
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
			'--disable-gpu',
			'--allow-file-access-from-files'
		]
	});

	try {
		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(120000);

		console.log('Loading HTML file locally...');
		await page.goto(tempHtmlUri, {
			waitUntil: ['domcontentloaded', 'networkidle0'],
			timeout: 120000
		});

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
					<span style="float: right;">${meta.type}</span>
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
		if (fs.existsSync(tempHtmlFile)) {
			fs.unlinkSync(tempHtmlFile);
		}
	}
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
	try {
		console.log('📄 Starting PDF generation for Switzerland Boundary Expansion Deficit report...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);

		const sections = readMarkdownFiles();
		const html = generateHTML(sections);

		if (process.env.DEBUG) {
			const debugFile = path.join(__dirname, `../debug-${REPORT_SLUG}-${LANGUAGE}.html`);
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
