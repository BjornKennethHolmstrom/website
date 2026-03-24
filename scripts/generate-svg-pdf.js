#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your paths
const SVG_PATH = path.join(__dirname, '../static/images/itl-architecture.svg'); // Adjust to where you saved the SVG
const OUTPUT_PDF = path.join(__dirname, '../static/pdfs/itl-architecture.pdf');

async function main() {
	console.log('🚀 Launching browser to convert SVG to PDF...');
	
	// Check if SVG exists
	if (!fs.existsSync(SVG_PATH)) {
		console.error(`❌ Cannot find SVG at: ${SVG_PATH}`);
		process.exit(1);
	}

	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();

	// Load the raw SVG file directly into the browser
	const svgUrl = `file://${SVG_PATH}`;
	await page.goto(svgUrl, { waitUntil: 'networkidle0' });

	console.log('🖨️  Rendering PDF...');
	await page.pdf({
		path: OUTPUT_PDF,
		printBackground: true,
		// Using landscape since the SVG is wider than it is tall (900x500)
		landscape: true, 
		// Remove default margins so the SVG fills the space cleanly
		margin: { top: '0', right: '0', bottom: '0', left: '0' } 
	});

	await browser.close();
	console.log(`✅ Success! Architecture PDF generated at: ${OUTPUT_PDF}`);
}

main().catch(console.error);
