#!/usr/bin/env node

/**
 * Generate PDF for the European Subsidiarity Protocol
 * * Usage: node scripts/generate-eu-protocol-pdf.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories
const INPUT_DIR = path.join(__dirname, '../src/routes/eu-subsidiarity-protocol/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/pdfs');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'european-subsidiarity-protocol-v1.2-full.pdf');

// The exact sequence of files to stitch together
const FILES_TO_PROCESS = [
	'v1.2.md',
	'annex-a-gsi-framework-v5.md',
	'annex-b-actuation-layer.md'
];

async function main() {
	console.log('📄 Starting PDF generation for European Subsidiarity Protocol...\n');

	// Ensure output directory exists
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	// 1. Read and stitch Markdown files with page breaks
	let combinedMarkdown = '';
	for (const [index, filename] of FILES_TO_PROCESS.entries()) {
		const filePath = path.join(INPUT_DIR, filename);
		if (!fs.existsSync(filePath)) {
			console.error(`❌ Missing file: ${filePath}`);
			process.exit(1);
		}
		
		const content = fs.readFileSync(filePath, 'utf-8');
		
		// Insert a CSS page break before the Annexes
		if (index > 0) {
			combinedMarkdown += '\n\n<div class="page-break"></div>\n\n';
		}
		combinedMarkdown += content;
	}

	// 2. Parse Markdown to HTML
	const htmlContent = marked.parse(combinedMarkdown);

	// 3. Wrap in professional EU-style CSS 
	// (Using Helvetica/Arial for body, Georgia for headers to mimic institutional docs)
	const fullHtml = `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="UTF-8">
			<style>
				:root {
					--text-main: #1f2937;
					--border: #e5e7eb;
					--accent: #1e3a8a; /* EU Blue */
				}
				body {
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
					color: var(--text-main);
					line-height: 1.6;
					font-size: 11pt;
					margin: 0;
					padding: 0;
				}
				h1, h2, h3 {
					font-family: 'Georgia', serif;
					color: #111827;
					margin-top: 1.8em;
					margin-bottom: 0.5em;
				}
				h1 { 
					font-size: 24pt; 
					border-bottom: 2px solid var(--border); 
					padding-bottom: 0.2em; 
				}
				/* Title page styling for the very first h1 */
				h1:first-of-type {
					font-size: 32pt;
					border-bottom: none;
					margin-top: 1.5in;
					color: var(--accent);
				}
				h2 { font-size: 16pt; }
				h3 { font-size: 13pt; }
				p { margin-bottom: 1.2em; }
				ul, ol { margin-bottom: 1.2em; padding-left: 2em; }
				li { margin-bottom: 0.4em; }
				table {
					width: 100%;
					border-collapse: collapse;
					margin: 1.5em 0;
					font-size: 10pt;
				}
				th, td {
					border: 1px solid var(--border);
					padding: 10px;
					text-align: left;
					vertical-align: top;
				}
				th { background-color: #f9fafb; font-weight: bold; }
				blockquote {
					border-left: 4px solid var(--accent);
					margin: 1.5em 0;
					padding: 0.5em 1em;
					background-color: #f8fafc;
					color: #475569;
					font-style: italic;
				}
				hr { border: 0; border-top: 1px solid var(--border); margin: 2em 0; }
				.page-break { page-break-before: always; }
			</style>
		</head>
		<body>
			${htmlContent}
		</body>
		</html>
	`;

	// 4. Generate PDF via Puppeteer directly from memory
	console.log('🚀 Launching headless browser...');
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();
	
	// Load the HTML directly into the page
	await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
	
	console.log('🖨️  Rendering PDF...');
	await page.pdf({
		path: OUTPUT_FILE,
		format: 'A4',
		printBackground: true,
		margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
		displayHeaderFooter: true,
		headerTemplate: `
			<div style="font-size: 8pt; color: #6b7280; width: 100%; text-align: right; margin: 0 2cm; font-family: sans-serif;">
				European Subsidiarity Protocol v1.2
			</div>
		`,
		footerTemplate: `
			<div style="font-size: 8pt; color: #6b7280; width: 100%; text-align: center; margin: 0 2cm; font-family: sans-serif;">
				Page <span class="pageNumber"></span> of <span class="totalPages"></span>
			</div>
		`
	});

	await browser.close();
	
	const stats = fs.statSync(OUTPUT_FILE);
	console.log(`✅ Success! PDF generated at: ${OUTPUT_FILE}`);
	console.log(`📊 File size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB\n`);
}

main().catch(console.error);
