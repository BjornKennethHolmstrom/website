#!/usr/bin/env node

/**
 * Generate PDF from Addiction as Integration Failure white paper
 * 
 * Usage: node scripts/generate-addiction-pdf.js [language]
 * Example: node scripts/generate-addiction-pdf.js en
 * Example: node scripts/generate-addiction-pdf.js sv
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

// Configuration
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const suffix = LANGUAGE === 'en' ? '' : `-${LANGUAGE}`;
const INPUT_DIR = path.join(__dirname, '../src/routes/whitepapers/addiction-as-integration-failure/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/whitepapers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `addiction-as-integration-failure${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/whitepapers/images/addiction-cover-optimized.png');

// Metadata based on language
const metadata = {
	en: {
		title: "Addiction as Integration Failure",
		subtitle: "A Multi-Domain Framework for Understanding Civilizational Compulsion",
		description: "Applying the Project Janus Model to the Crisis of Attention and Meaning",
		author: "Björn Kenneth Holmström",
		date: "November 2025",
		url: "https://bjornkennethholmstrom.org/whitepapers/addiction-as-integration-failure",
		license: "Creative Commons Attribution 4.0 International"
	},
	sv: {
		title: "Beroende som integrationsmisslyckande",
		subtitle: "Ett multidomän-ramverk för att förstå civilisatoriskt tvång",
		description: "Applicering av Project Janus-modellen på uppmärksamhets- och meningskrisen",
		author: "Björn Kenneth Holmström",
		date: "November 2025",
		url: "https://bjornkennethholmstrom.org/whitepapers/addiction-as-integration-failure",
		license: "Creative Commons Attribution 4.0 International"
	}
};

const meta = metadata[LANGUAGE];

// Section order and filenames
const sections = [
	{ file: '00-abstract', title: LANGUAGE === 'en' ? 'Abstract' : 'Sammanfattning' },
	{ file: '01-intro', title: LANGUAGE === 'en' ? '1. Introduction' : '1. Introduktion' },
	{ file: '02-framework', title: LANGUAGE === 'en' ? '2. The Project Janus Framework' : '2. Ramverket Project Janus' },
	{ file: '03-diagnosis', title: LANGUAGE === 'en' ? '3. Multi-Domain Diagnosis' : '3. Diagnos över flera domäner' },
	{ file: '04-failures', title: LANGUAGE === 'en' ? '4. Why Interventions Fail' : '4. Varför interventioner misslyckas' },
	{ file: '05-rehab', title: LANGUAGE === 'en' ? '5. Minimum Viable Civilizational Rehab' : '5. Minimal livskraftig civilisatorisk rehabilitering' },
	{ file: '06-research', title: LANGUAGE === 'en' ? '6. Research and Action Agenda' : '6. Forsknings- och handlingsagenda' },
	{ file: '07-conclusion', title: LANGUAGE === 'en' ? '7. Conclusion' : '7. Slutsats', usePdfVersion: true },
	{ file: '08-appendices', title: LANGUAGE === 'en' ? 'Appendices' : 'Bilagor' }
];

// CSS for PDF styling
const pdfStyles = `
<style>
	@page {
		size: A4;
		margin: 2.5cm 2cm;
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
		padding: 2cm;
	}
	
	.cover-image {
		width: 100%;
		max-width: 600px;
		margin-bottom: 2em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}
	
	.cover h1 {
		font-size: 28pt;
		font-weight: bold;
		margin-bottom: 0.5em;
		line-height: 1.2;
		color: #1a1a1a;
	}
	
	.cover .subtitle {
		font-size: 18pt;
		font-style: italic;
		margin-bottom: 1em;
		color: #555;
		line-height: 1.3;
	}
	
	.cover .description {
		font-size: 13pt;
		margin-bottom: 2em;
		color: #666;
	}
	
	.cover .metadata {
		font-size: 12pt;
		color: #666;
		margin-top: 2em;
		line-height: 1.8;
	}
	
	.cover .url {
		font-size: 9pt;
		color: #888;
		margin-top: 1em;
		font-family: 'Courier New', monospace;
	}
	
	.cover .license {
		font-size: 9pt;
		color: #888;
		margin-top: 0.5em;
		font-style: italic;
	}
	
	/* Typography */
	h1 {
		font-size: 20pt;
		font-weight: bold;
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		page-break-after: avoid;
		color: #1a1a1a;
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
		font-size: 13pt;
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
	}
	
	p {
		margin-bottom: 0.8em;
		text-align: justify;
		orphans: 3;
		widows: 3;
	}
	
	/* Lists */
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
	
	/* Blockquotes */
	blockquote {
		margin: 1em 2em;
		padding: 0.5em 1em;
		border-left: 3px solid #ccc;
		font-style: italic;
		background: #f9f9f9;
		page-break-inside: avoid;
	}
	
	/* Code blocks */
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
	
	/* Tables */
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
	
	/* Links */
	a {
		color: #0066cc;
		text-decoration: none;
	}
	
	/* Print URLs after links */
	a[href^="http"]:after {
		content: " (" attr(href) ")";
		font-size: 8pt;
		color: #666;
		word-break: break-all;
	}
	
	/* Don't print URLs for internal links */
	a[href^="#"]:after {
		content: "";
	}
	
	/* Strong emphasis */
	strong {
		font-weight: bold;
		color: #000;
	}
	
	em {
		font-style: italic;
	}
	
	/* Horizontal rules */
	hr {
		border: none;
		border-top: 2px solid #ccc;
		margin: 2em 0;
		page-break-after: avoid;
	}
	
	/* Section dividers */
	.section-divider {
		page-break-before: always;
		margin: 2em 0 1em 0;
	}
	
	/* First section shouldn't break */
	.section-divider:first-of-type {
		page-break-before: avoid;
	}
	
	/* Footer for each page */
	@page {
		@bottom-right {
			content: counter(page);
			font-size: 9pt;
			color: #666;
		}
		
		@bottom-left {
			content: "Addiction as Integration Failure";
			font-size: 8pt;
			color: #999;
		}
	}
	
	/* Prevent orphans and widows */
	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}
	
	p, li {
		orphans: 3;
		widows: 3;
	}
	
	/* Special styling for metadata at end */
	.end-metadata {
		margin-top: 3em;
		padding-top: 2em;
		border-top: 3px solid #333;
		text-align: center;
		page-break-before: avoid;
	}
	
	.end-metadata h2 {
		font-size: 18pt;
		margin-bottom: 1em;
	}
	
	.end-metadata p {
		text-align: center;
		margin-bottom: 0.5em;
	}
</style>
`;

// Read and combine markdown files
function readMarkdownFiles() {
	console.log(`Reading markdown files for language: ${LANGUAGE}`);
	
	const contents = [];
	
	for (const section of sections) {
		// Use PDF version for conclusion if specified
		const fileBase = section.usePdfVersion ? `${section.file}-pdf` : section.file;
		const filename = `${fileBase}-${LANGUAGE}.md`;
		const filepath = path.join(INPUT_DIR, filename);
		
		if (!fs.existsSync(filepath)) {
			console.error(`File not found: ${filepath}`);
			console.error(`Make sure you have ${filename} in the sections directory`);
			process.exit(1);
		}
		
		const content = fs.readFileSync(filepath, 'utf-8');
		contents.push({
			title: section.title,
			content: content
		});
	}
	
	return contents;
}

// Convert image to base64 for embedding (with size check)
function getBase64Image() {
	if (fs.existsSync(COVER_IMAGE)) {
		const stats = fs.statSync(COVER_IMAGE);
		const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
		console.log(`Cover image size: ${fileSizeMB} MB`);
		
		// If image is too large (>2MB), skip it to avoid huge HTML
		if (stats.size > 2 * 1024 * 1024) {
			console.warn('⚠️  Cover image is large, skipping to reduce HTML size');
			console.warn('   Consider optimizing the image for web');
			return null;
		}
		
		const imageBuffer = fs.readFileSync(COVER_IMAGE);
		const base64 = imageBuffer.toString('base64');
		const base64Size = (base64.length / 1024).toFixed(1);
		console.log(`Base64 encoded size: ${base64Size} KB`);
		return `data:image/png;base64,${base64}`;
	}
	console.log('Cover image not found, proceeding without it');
	return null;
}

// Generate HTML from markdown
function generateHTML(sections) {
	console.log('Converting markdown to HTML...');
	
	// Configure marked
	marked.setOptions({
		breaks: false,
		gfm: true
	});
	
	const coverImage = getBase64Image();
	
	// Generate cover page
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
		</div>
		<div class="url">${meta.url}</div>
	</div>
`;
	
	console.log(`Cover page HTML: ${(html.length / 1024).toFixed(1)} KB`);
	
	// Add each section
	sections.forEach((section, index) => {
		if (index > 0) {
			html += `\n<div class="section-divider"></div>\n`;
		}
		
		const sectionHtml = marked.parse(section.content);
		const sectionSize = (sectionHtml.length / 1024).toFixed(1);
		console.log(`  ${section.title}: ${sectionSize} KB`);
		html += sectionHtml;
	});
	
	html += `
</body>
</html>
`;
	
	return html;
}

// Generate PDF using Puppeteer
async function generatePDF(html) {
	console.log('Generating PDF...');
	console.log(`HTML size: ${(html.length / 1024).toFixed(1)} KB`);
	
	// Ensure output directory exists
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}
	
	const browser = await puppeteer.launch({
		headless: 'new',
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	
	const page = await browser.newPage();
	
	// Increase navigation timeout
	page.setDefaultNavigationTimeout(120000);
	
	// Set content with longer timeout and simpler wait condition
	console.log('Loading HTML content...');
	await page.setContent(html, { 
		waitUntil: 'domcontentloaded',
		timeout: 120000
	});
	
	console.log('Content loaded, waiting for rendering...');
	// Use setTimeout wrapped in Promise instead of deprecated waitForTimeout
	await new Promise(resolve => setTimeout(resolve, 2000));
	
	console.log('Generating PDF file...');
	await page.pdf({
		path: OUTPUT_FILE,
		format: 'A4',
		printBackground: true,
		margin: {
			top: '2.5cm',
			right: '2cm',
			bottom: '2.5cm',
			left: '2cm'
		},
		displayHeaderFooter: true,
		headerTemplate: '<div></div>',
		footerTemplate: `
			<div style="font-size: 9pt; color: #666; width: 100%; text-align: right; margin: 0 2cm;">
				<span class="pageNumber"></span>
			</div>
		`
	});
	
	console.log('Closing browser...');
	await browser.close();
	
	console.log(`✅ PDF generated successfully: ${OUTPUT_FILE}`);
	
	// Get file size
	const stats = fs.statSync(OUTPUT_FILE);
	const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
	console.log(`📄 File size: ${fileSizeMB} MB`);
	
	// Count pages (approximate)
	const pageCount = Math.ceil(html.length / 3000); // Rough estimate
	console.log(`📖 Approximate pages: ${pageCount}`);
}

// Main execution
async function main() {
	try {
		console.log('📄 Starting PDF generation for white paper...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);
		
		const sections = readMarkdownFiles();
		const html = generateHTML(sections);
		await generatePDF(html);
		
		console.log('\n✨ Done!');
		console.log(`\nTo generate the other language, run:`);
		console.log(`node scripts/generate-addiction-pdf.js ${LANGUAGE === 'en' ? 'sv' : 'en'}`);
	} catch (error) {
		console.error('❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
