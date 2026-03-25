#!/usr/bin/env node

/**
 * Generate PDF for DPI 2.0: The Subsidiarity Layer v0.3
 * Usage: node scripts/generate-india-dpi-pdf.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(__dirname, '../src/routes/india-dpi-2/sections/v0.3.md');
const OUTPUT_DIR = path.join(__dirname, '../static/pdfs');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'india-dpi-2.0-v0.3.pdf');

async function main() {
	console.log('📄 Starting PDF generation for DPI 2.0: The Subsidiarity Layer...\n');

	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	if (!fs.existsSync(INPUT_FILE)) {
		console.error(`❌ Missing file: ${INPUT_FILE}`);
		process.exit(1);
	}

	const content = fs.readFileSync(INPUT_FILE, 'utf-8');
	const htmlContent = marked.parse(content);

	const fullHtml = `
		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="UTF-8">
			<style>
				:root {
					--text-main: #1f2937;
					--border: #e5e7eb;
					--accent: #1e3a5f; /* Deep Navy */
				}
				body {
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
					color: var(--text-main);
					line-height: 1.65;
					font-size: 10.5pt;
					margin: 0;
					padding: 0;
				}
				h1, h2, h3, h4 {
					color: #0f172a;
					margin-top: 1.8em;
					margin-bottom: 0.5em;
					font-weight: 700;
					letter-spacing: -0.02em;
				}
				h1 { 
					font-size: 24pt; 
					border-bottom: 2px solid var(--accent); 
					padding-bottom: 0.2em; 
				}
				h1:first-of-type {
					font-size: 28pt;
					border-bottom: none;
					margin-top: 1in;
					color: var(--accent);
					line-height: 1.2;
				}
				h2 { font-size: 16pt; border-bottom: 1px solid var(--border); padding-bottom: 0.3em; }
				h3 { font-size: 13pt; color: #334155; }
				p { margin-bottom: 1.2em; }
				ul, ol { margin-bottom: 1.2em; padding-left: 2em; }
				li { margin-bottom: 0.4em; }
				table {
					width: 100%;
					border-collapse: collapse;
					margin: 1.5em 0;
					font-size: 9.5pt;
				}
				th, td {
					border: 1px solid var(--border);
					padding: 12px;
					text-align: left;
					vertical-align: top;
				}
				th { background-color: #f8fafc; font-weight: 600; color: #334155; }
				blockquote {
					border-left: 4px solid var(--accent);
					margin: 1.5em 0;
					padding: 0.5em 1em;
					background-color: #f1f5f9;
					color: #475569;
					font-style: italic;
					border-radius: 0 4px 4px 0;
				}
				hr { border: 0; border-top: 1px solid var(--border); margin: 2.5em 0; }
				strong { color: #0f172a; }
				code {
					background-color: #f1f5f9;
					padding: 2px 6px;
					border-radius: 3px;
					font-size: 0.9em;
				}
				pre {
					background-color: #f8fafc;
					border: 1px solid var(--border);
					border-radius: 4px;
					padding: 1em;
					overflow-x: auto;
					font-size: 9pt;
					line-height: 1.5;
				}
				pre code {
					background: none;
					padding: 0;
				}
			</style>
		</head>
		<body>
			${htmlContent}
		</body>
		</html>
	`;

	console.log('🚀 Launching headless browser...');
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();
	
	await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
	
	console.log('🖨️  Rendering PDF...');
	await page.pdf({
		path: OUTPUT_FILE,
		format: 'A4',
		printBackground: true,
		margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
		displayHeaderFooter: true,
		headerTemplate: `
			<div style="font-size: 8pt; color: #64748b; width: 100%; text-align: right; margin: 0 2cm; font-family: -apple-system, sans-serif;">
				DPI 2.0: The Subsidiarity Layer v0.3
			</div>
		`,
		footerTemplate: `
			<div style="font-size: 8pt; color: #64748b; width: 100%; text-align: center; margin: 0 2cm; font-family: -apple-system, sans-serif;">
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
