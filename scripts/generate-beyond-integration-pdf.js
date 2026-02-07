#!/usr/bin/env node

/**
 * Generate PDF from Beyond Integration: Nonduality, Psychosis, and the Aperture Problem
 * 
 * Usage: node scripts/generate-beyond-integration-pdf.js [language]
 * Example: node scripts/generate-beyond-integration-pdf.js en
 * Example: node scripts/generate-beyond-integration-pdf.js sv
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
const VALID_LANGUAGES = ['en','sv']; 

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const suffix = LANGUAGE === 'en' ? '' : `-${LANGUAGE}`;
const INPUT_DIR = path.join(__dirname, '../src/routes/whitepapers/beyond-integration/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/whitepapers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `beyond-integration${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/whitepapers/images/beyond-integration-cover.png');

// Metadata based on language
const metadata = {
	en: {
		title: "Beyond Integration: Nonduality, Psychosis, and the Aperture Problem",
		subtitle: "A Framework for Modal Flexibility and Consciousness Development",
		description: "Personal exploration and systemic analysis of the intersection between mystical experience, psychiatric diagnosis, and human potential",
		author: "Björn Kenneth Holmström",
		date: "December 2024",
		url: "https://bjornkennethholmstrom.org/whitepapers/beyond-integration",
		license: "Creative Commons Attribution-ShareAlike 4.0 International"
	},
	sv: {
		title: "Bortom integration: icke-dualitet, psykos och aperturproblemet",
		subtitle: "Ett ramverk för modal flexibilitet och medvetandeutveckling",
		description: "Personlig utforskning och systemisk analys av skärningspunkten mellan mystisk upplevelse, psykiatrisk diagnos och mänsklig potential",
		author: "Björn Kenneth Holmström",
		date: "December 2024",
		url: "https://bjornkennethholmstrom.org/whitepapers/beyond-integration",
		license: "Creative Commons Attribution-ShareAlike 4.0 International"
	}
};

const meta = metadata[LANGUAGE];

// Essay parts - these are markdown files you'll create
const parts = [
	{ file: 'part-0', title: 'Part 0: The Story' },
	{ file: 'part-1', title: 'Part I: The Problem' },
	{ file: 'part-2', title: 'Part II: The Aperture Theory' },
	{ file: 'part-3', title: 'Part III: Historical and Cultural Context' },
	{ file: 'part-4', title: 'Part IV: The Janus Integration' },
	{ file: 'part-5', title: 'Part V: Practical Implications' },
	{ file: 'part-6', title: 'Part VI: The Specific Question' },
	{ file: 'part-7', title: 'Part VII: Research Agenda' },
	{ file: 'part-8', title: 'Part VIII: Conclusion' },
	{ file: 'epilogue', title: 'Epilogue: Beginning the Practice' }
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
		font-size: 26pt;
		font-weight: bold;
		margin-bottom: 0.5em;
		line-height: 1.2;
		color: #1a1a1a;
	}
	
	.cover .subtitle {
		font-size: 16pt;
		font-style: italic;
		margin-bottom: 1em;
		color: #555;
		line-height: 1.3;
	}
	
	.cover .description {
		font-size: 12pt;
		margin-bottom: 2em;
		color: #666;
		max-width: 600px;
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
	
	/* Diagrams and ASCII art */
	.diagram {
		font-family: 'Courier New', monospace;
		background: #f9f9f9;
		padding: 1em;
		border: 1px solid #ddd;
		margin: 1em 0;
		white-space: pre;
		font-size: 9pt;
		line-height: 1.2;
		page-break-inside: avoid;
	}
	
	/* Prevent orphans and widows */
	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}
	
	p, li {
		orphans: 3;
		widows: 3;
	}
	
	/* Warning/note boxes */
	.note {
		background: #f0f8ff;
		border-left: 4px solid #4a90e2;
		padding: 1em;
		margin: 1em 0;
		page-break-inside: avoid;
	}
	
	.warning {
		background: #fff8f0;
		border-left: 4px solid #e2a04a;
		padding: 1em;
		margin: 1em 0;
		page-break-inside: avoid;
	}
</style>
`;

// Read and combine markdown files
function readMarkdownFiles() {
	console.log(`Reading essay parts for language: ${LANGUAGE}`);
	
	const contents = [];
	
	for (const part of parts) {
		const filename = `${part.file}.md`;
		const filepath = path.join(INPUT_DIR, filename);
		
		if (!fs.existsSync(filepath)) {
			console.error(`File not found: ${filepath}`);
			console.error(`Make sure you have ${filename} in the essay directory`);
			process.exit(1);
		}
		
		let content = fs.readFileSync(filepath, 'utf-8');
		
		// Remove the title header since we'll add it as section divider
		content = content.replace(/^# Beyond Integration[^\n]*\n\n\*\*Part [IVXL]+[^\n]*\n\n\*[^\n]*\*\n\n---\n\n/m, '');
		content = content.replace(/^# Beyond Integration[^\n]*\n\n\*\*Epilogue[^\n]*\n\n\*[^\n]*\*\n\n---\n\n/m, '');
		
		contents.push({
			title: part.title,
			content: content
		});
	}
	
	return contents;
}

// Convert image to base64 for embedding
function getBase64Image() {
	if (fs.existsSync(COVER_IMAGE)) {
		const stats = fs.statSync(COVER_IMAGE);
		const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
		console.log(`Cover image size: ${fileSizeMB} MB`);
		
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
function generateHTML(parts) {
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
	
	// Add each part
	parts.forEach((part, index) => {
		if (index > 0) {
			html += `\n<div class="section-divider"></div>\n`;
		}
		
/*		html += `<h1>${part.title}</h1>\n`;*/
		
		const partHtml = marked.parse(part.content);
		const partSize = (partHtml.length / 1024).toFixed(1);
		console.log(`  ${part.title}: ${partSize} KB`);
		html += partHtml;
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
	
	console.log('Loading HTML content...');
	await page.setContent(html, { 
		waitUntil: 'domcontentloaded',
		timeout: 120000
	});
	
	console.log('Content loaded, waiting for rendering...');
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
	
	// Estimate pages
	const pageCount = Math.ceil(html.length / 3000);
	console.log(`📖 Approximate pages: ${pageCount}`);
}

// Main execution
async function main() {
	try {
		console.log('📄 Starting PDF generation for Beyond Integration essay...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);
		
		const parts = readMarkdownFiles();
		const html = generateHTML(parts);
		await generatePDF(html);
		
		console.log('\n✨ Done!');
		console.log(`\nTo view the essay online:`);
		console.log(`https://bjornkennethholmstrom.org/whitepapers/beyond-integration`);
	} catch (error) {
		console.error('❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
