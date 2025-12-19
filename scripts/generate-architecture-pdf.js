#!/usr/bin/env node

/**
 * Generate PDF from The Architecture of the Open Hand markdown files
 * 
 * Usage: node scripts/generate-architecture-pdf.js [language]
 * Example: node scripts/generate-architecture-pdf.js en
 * Example: node scripts/generate-architecture-pdf.js sv
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
const INPUT_DIR = path.join(__dirname, '../src/routes/essays/architecture-of-the-open-hand');
const OUTPUT_DIR = path.join(__dirname, '../static/essays');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `architecture-of-the-open-hand${suffix}.pdf`);

// Metadata based on language
const metadata = {
	en: {
		title: "The Architecture of the Open Hand",
		subtitle: "Why We Fight and How We Design Peace",
		author: "Björn Kenneth Holmström",
		date: "December 2024",
		url: "https://bjornkennethholmstrom.org/essays/architecture-of-the-open-hand"
	},
	sv: {
		title: "Öppna handens arkitektur",
		subtitle: "Varför vi krigar och hur vi designar fred",
		author: "Björn Kenneth Holmström",
		date: "December 2024",
		url: "https://bjornkennethholmstrom.org/essays/architecture-of-the-open-hand"
	}
};

const meta = metadata[LANGUAGE];

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
		min-height: 80vh;
		text-align: center;
	}
	
	.cover h1 {
		font-size: 28pt;
		font-weight: bold;
		margin-bottom: 0.5em;
		line-height: 1.2;
	}
	
	.cover .subtitle {
		font-size: 18pt;
		font-style: italic;
		margin-bottom: 3em;
		color: #555;
	}
	
	.cover .metadata {
		font-size: 12pt;
		color: #666;
		margin-top: 2em;
	}
	
	.cover .url {
		font-size: 10pt;
		color: #888;
		margin-top: 1em;
		font-family: monospace;
	}
	
	/* Typography */
	h1 {
		font-size: 20pt;
		font-weight: bold;
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		page-break-after: avoid;
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
	}
	
	code {
		background: #f5f5f5;
		padding: 0.1em 0.3em;
		font-family: 'Courier New', monospace;
		font-size: 9pt;
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
	
	a:after {
		content: " (" attr(href) ")";
		font-size: 9pt;
		color: #666;
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
	
	/* Part dividers */
	.part-divider {
		page-break-before: always;
		text-align: center;
		margin: 3em 0;
		padding: 2em 0;
		border-top: 3px solid #333;
		border-bottom: 3px solid #333;
	}
	
	.part-divider h1 {
		margin: 0;
		font-size: 24pt;
	}
	
	/* Footer for each page */
	@page {
		@bottom-right {
			content: counter(page);
			font-size: 9pt;
			color: #666;
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
</style>
`;

// Read and combine markdown files
function readMarkdownFiles() {
	console.log(`Reading markdown files for language: ${LANGUAGE}`);
	
	const parts = [];
	const partNames = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];
	
	for (let i = 0; i < partNames.length; i++) {
		const filename = `part-${partNames[i]}${suffix}.md`;
		const filepath = path.join(INPUT_DIR, filename);
		
		if (!fs.existsSync(filepath)) {
			console.error(`File not found: ${filepath}`);
			console.error(`Make sure you have ${filename} in the essays directory`);
			process.exit(1);
		}
		
		const content = fs.readFileSync(filepath, 'utf-8');
		parts.push({
			number: i + 1,
			romanNumeral: partNames[i].toUpperCase(),
			content: content
		});
	}
	
	return parts;
}

// Generate HTML from markdown
function generateHTML(parts) {
	console.log('Converting markdown to HTML...');
	
	// Configure marked
	marked.setOptions({
		breaks: true,
		gfm: true
	});
	
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
		<h1>${meta.title}</h1>
		<div class="subtitle">${meta.subtitle}</div>
		<div class="metadata">
			<div>${meta.author}</div>
			<div>${meta.date}</div>
		</div>
		<div class="url">${meta.url}</div>
	</div>
`;
	
	// Add each part with divider
	parts.forEach((part, index) => {
		if (index > 0) {
			const partLabel = LANGUAGE === 'en' ? 'Part' : 'Del';
			html += `\n<div class="part-divider"><h1>${partLabel} ${part.romanNumeral}</h1></div>\n`;
		}
		
		html += marked.parse(part.content);
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
	
	// Ensure output directory exists
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}
	
	const browser = await puppeteer.launch({
		headless: 'new',
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});
	
	const page = await browser.newPage();
	await page.setContent(html, { waitUntil: 'networkidle0' });
	
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
			<div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;">
				<span class="pageNumber"></span> / <span class="totalPages"></span>
			</div>
		`
	});
	
	await browser.close();
	
	console.log(`✅ PDF generated successfully: ${OUTPUT_FILE}`);
	
	// Get file size
	const stats = fs.statSync(OUTPUT_FILE);
	const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
	console.log(`📄 File size: ${fileSizeMB} MB`);
}

// Main execution
async function main() {
	try {
		console.log('📄 Starting PDF generation...\n');
		
		const parts = readMarkdownFiles();
		const html = generateHTML(parts);
		await generatePDF(html);
		
		console.log('\n✨ Done!');
	} catch (error) {
		console.error('❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
