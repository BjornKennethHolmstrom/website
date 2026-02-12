#!/usr/bin/env node

/**
 * Generate PDF from Between Two Articles markdown files
 * 
 * Usage: node scripts/generate-between-two-articles-pdf.js [language]
 * Example: node scripts/generate-between-two-articles-pdf.js en
 * Example: node scripts/generate-between-two-articles-pdf.js sv
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
const INPUT_DIR = path.join(__dirname, '../src/routes/essays/between-two-articles');
const OUTPUT_DIR = path.join(__dirname, '../static/essays');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `between-two-articles${suffix}.pdf`);

// Metadata based on language
const metadata = {
	en: {
		title: "Between Two Articles",
		subtitle: "What the World Bank and Cisco Reveal About the Consciousness We've Outgrown",
		author: "Björn Kenneth Holmström",
		date: "February 2026",
		url: "https://bjornkennethholmstrom.org/essays/between-two-articles"
	},
	sv: {
		title: "Mellan två artiklar",
		subtitle: "Vad Världsbanken och Cisco avslöjar om medvetandet vi vuxit ifrån",
		author: "Björn Kenneth Holmström",
		date: "Februari 2026",
		url: "https://bjornkennethholmstrom.org/essays/between-two-articles"
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

	.cover-image {
		max-width: 80%;
		max-height: 400px;
		object-fit: cover;
		margin: 2em 0;
		border-radius: 4px;
		box-shadow: 0 4px 15px rgba(0,0,0,0.1);
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
	
	/* Section dividers */
	.section-divider {
		page-break-before: always;
		text-align: center;
		margin: 3em 0;
		padding: 2em 0;
		border-top: 3px solid #333;
		border-bottom: 3px solid #333;
	}
	
	.section-divider h1 {
		margin: 0;
		font-size: 24pt;
	}
	
	.section-divider .subtitle {
		font-size: 14pt;
		font-style: italic;
		color: #555;
		margin-top: 0.5em;
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

// Helper to convert image to base64
function getImageAsBase64(filename) {
	// Adjust this path to where you actually save the image
	const imagePath = path.join(__dirname, '../static/essays', filename);
	
	if (fs.existsSync(imagePath)) {
		const bitmap = fs.readFileSync(imagePath);
		const base64 = Buffer.from(bitmap).toString('base64');
		return `data:image/jpeg;base64,${base64}`;
	}
	return null;
}

// Section metadata for titles and subtitles
const sectionMetadata = {
	en: [
		{ number: 1, title: "The Artifacts", subtitle: "Two documents, one world, no conversation." },
		{ number: 2, title: "The Frame", subtitle: "What ORANGE sees, and what it cannot see." },
		{ number: 3, title: "The Collision", subtitle: "What happens when you hold them together." },
		{ number: 4, title: "The Diagnosis", subtitle: "A Spiral Dynamics reading, and what it reveals." },
		{ number: 5, title: "The Questions ORANGE Cannot Ask", subtitle: "Performing YELLOW." },
		{ number: 6, title: "The Addiction", subtitle: "Control, and the cost of keeping it." },
		{ number: 7, title: "The Emergence", subtitle: "Trust, and what it requires." },
		{ number: 8, title: "The Becoming", subtitle: "Who are we, now?" },
		{ number: 9, title: "Coda", subtitle: "For the one holding the contradiction." }
	],
	sv: [
		{ number: 1, title: "Artefakterna", subtitle: "Två dokument, en värld, ingen dialog." },
		{ number: 2, title: "Ramverket", subtitle: "Vad ORANGE ser, och vad det inte kan se." },
		{ number: 3, title: "Kollisionen", subtitle: "Vad händer när du håller dem samman." },
		{ number: 4, title: "Diagnosen", subtitle: "En Spiral Dynamics-läsning, och vad den avslöjar." },
		{ number: 5, title: "Frågorna ORANGE inte kan ställa", subtitle: "Att performa GULT." },
		{ number: 6, title: "Beroendet", subtitle: "Kontroll, och priset för att upprätthålla den." },
		{ number: 7, title: "Framväxten", subtitle: "Tillit, och vad den kräver." },
		{ number: 8, title: "Blivandet", subtitle: "Vilka är vi, nu?" },
		{ number: 9, title: "Coda", subtitle: "För den som håller motsägelsen." }
	]
};

// Read and combine markdown files
function readMarkdownFiles() {
	console.log(`Reading markdown files for language: ${LANGUAGE}`);
	
	const sections = [];
	const sectionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	for (let i = 0; i < sectionNumbers.length; i++) {
		const sectionNum = sectionNumbers[i];
		const filename = `section-${sectionNum}${suffix}.md`;
		const filepath = path.join(INPUT_DIR, filename);
		
		if (!fs.existsSync(filepath)) {
			console.error(`File not found: ${filepath}`);
			console.error(`Make sure you have ${filename} in the essays directory`);
			process.exit(1);
		}
		
		const content = fs.readFileSync(filepath, 'utf-8');
		sections.push({
			number: sectionNum,
			content: content,
			metadata: sectionMetadata[LANGUAGE][i]
		});
	}
	
	return sections;
}

// Generate HTML from markdown
function generateHTML(sections) {
	console.log('Converting markdown to HTML...');
	
	// Configure marked
	marked.setOptions({
		breaks: true,
		gfm: true
	});
	
	// Load the cover image
	const coverImageSrc = getImageAsBase64('between-two-articles-cover-optimized.png');
	
	// Generate cover page with image
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
		
		${coverImageSrc ? `<img src="${coverImageSrc}" class="cover-image" alt="Collision of two worlds" />` : ''}

		<div class="metadata">
			<div>${meta.author}</div>
			<div>${meta.date}</div>
		</div>
		<div class="url">${meta.url}</div>
	</div>
`;
	
	// Add each section with divider
	sections.forEach((section) => {
		const sectionLabel = LANGUAGE === 'en' ? 'Section' : 'Avsnitt';
		html += `
	<div class="section-divider">
		<h1>${sectionLabel} ${section.number}</h1>
		<div class="subtitle">${section.metadata.subtitle}</div>
	</div>
`;
	
		// Add the section title as h1 if not already in markdown
		// (This ensures the title appears on the first page of the section)
		html += `<h1>${section.metadata.title}</h1>\n`;
		
		// Parse and add the markdown content
		html += marked.parse(section.content);
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
		console.log('📄 Starting PDF generation for "Between Two Articles"...\n');
		
		const sections = readMarkdownFiles();
		const html = generateHTML(sections);
		await generatePDF(html);
		
		console.log('\n✨ Done!');
	} catch (error) {
		console.error('❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
