#!/usr/bin/env node

/**
 * Generate PDF for The Fractal-Cybernetic Model of Consciousness
 * 
 * Usage: node scripts/generate-fractal-cybernetic-pdf.js [language]
 * Example: node scripts/generate-fractal-cybernetic-pdf.js en
 * Example: node scripts/generate-fractal-cybernetic-pdf.js sv
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
const INPUT_DIR = path.join(__dirname, '../src/routes/working-papers/fractal-cybernetic-consciousness/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/working-papers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `fractal-cybernetic-consciousness${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/working-papers/images/fractal-cybernetic-cover-optimized-rotated.png');

// Metadata based on language
const metadata = {
	en: {
		title: "The Fractal-Cybernetic Model of Consciousness",
		subtitle: "Integrating Requisite Variety, Fractality, and Nondual Realization",
		description: "A transdisciplinary framework bridging cybernetics, fractal geometry, and contemplative science to explain consciousness evolution toward awakening.",
		author: "Björn Kenneth Holmström",
		date: "February 2026",
		url: "https://bjornkennethholmstrom.org/working-papers/fractal-cybernetic-consciousness",
		license: "Creative Commons Attribution-ShareAlike 4.0 International"
	},
	sv: {
		title: "Den Fraktala-Kybernetiska Medvetandemodellen",
		subtitle: "Integrering av nödvändig mångfald, fraktalitet och icke-dual realisering",
		description: "Ett tvärvetenskapligt ramverk som förenar kybernetik, fraktalgeometri och kontemplativ vetenskap för att förklara medvetandets evolution mot uppvaknande.",
		author: "Björn Kenneth Holmström",
		date: "Februari 2026",
		url: "https://bjornkennethholmstrom.org/working-papers/fractal-cybernetic-consciousness",
		license: "Creative Commons Attribution-ShareAlike 4.0 International"
	}
};

const meta = metadata[LANGUAGE];

// Working paper sections - these are markdown files
const sections = [
	{ file: 'abstract', title: 'Abstract' },
	{ file: 'section-01', title: '1. Introduction: The Problem of Integration' },
	{ file: 'section-02', title: '2. Conceptual Foundations' },
	{ file: 'section-03', title: '3. The Fractal-Cybernetic Model: Core Synthesis' },
	{ file: 'section-04', title: '4. The Awareness-Focus Dynamic' },
	{ file: 'section-05', title: '5. Revisiting Key Mystical Questions' },
	{ file: 'section-06', title: '6. Testable Implications and Research Proposals' },
	{ file: 'section-07', title: '7. Philosophical and Existential Implications' },
	{ file: 'section-08', title: '8. Limitations and Future Directions' },
	{ file: 'section-09', title: '9. Conclusion: Toward a Unified Science of Awakening' },
	{ file: 'appendix-a', title: 'Appendix A: Glossary of Key Terms' },
	{ file: 'appendix-b', title: 'Appendix B: The Fractal-Cybernetic Consciousness Map' },
	{ file: 'appendix-c', title: 'Appendix C: Meditative Exercises Based on the Model' },
	{ file: 'acknowledgements', title: 'Acknowledgements' },
	{ file: 'references', title: 'References' }
];

// CSS for PDF styling with academic formatting
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
		padding: 1cm 2cm;
  margin-top: -0.5cm;
	}
	
	.cover-image {
		width: 100%;
		max-width: 400px;
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
	
	/* Academic title page */
	.title-page {
		page-break-after: always;
		padding: 4cm 2cm;
	}
	
	.title-page h1 {
		font-size: 28pt;
		text-align: center;
		margin-bottom: 0.3em;
	}
	
	.title-page .subtitle {
		font-size: 18pt;
		text-align: center;
		font-style: italic;
		margin-bottom: 2em;
		color: #555;
	}
	
	.title-page .author {
		font-size: 14pt;
		text-align: center;
		margin-top: 3em;
	}
	
	.title-page .date {
		font-size: 12pt;
		text-align: center;
		margin-top: 0.5em;
		color: #666;
	}
	
	/* Abstract styling */
	.abstract {
		font-style: italic;
		margin: 2em 0;
		padding: 1em;
		background: #f9f9f9;
		border-left: 3px solid #ccc;
	}
	
	.abstract h2 {
		font-style: normal;
		margin-top: 0;
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
	
	/* Appendices styling */
	.appendix h1 {
		font-style: italic;
		color: #444;
	}
	
	/* Diagram styling */
	.diagram-container {
		text-align: center;
		margin: 1.5em 0;
		page-break-inside: avoid;
	}
	
	.diagram {
		max-width: 100%;
		height: auto;
		border: 1px solid #ddd;
		padding: 0.5em;
		background: #f9f9f9;
	}
	
	.diagram-caption {
		font-size: 10pt;
		color: #666;
		margin-top: 0.5em;
		font-style: italic;
	}
	
	/* References */
	.references {
		font-size: 10pt;
		line-height: 1.4;
	}
	
	.references h1 {
		border-bottom: none;
		font-size: 16pt;
	}
	
	.references .reference {
		margin-bottom: 0.5em;
		text-indent: -2em;
		padding-left: 2em;
	}
	
	/* Exercises styling */
	.exercise {
		margin: 1em 0;
		padding: 1em;
		border: 1px solid #ddd;
		border-left: 4px solid #4a90e2;
		background: #f8f9fa;
		page-break-inside: avoid;
	}
	
	.exercise h4 {
		margin-top: 0;
		color: #2c5282;
	}
	
	.exercise .purpose {
		font-style: italic;
		color: #555;
		margin-bottom: 0.5em;
	}
	
	/* Keywords */
	.keywords {
		font-style: italic;
		color: #666;
		margin: 1em 0;
	}
	
	/* Note boxes */
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
	
	/* Footnotes */
	.footnote {
		font-size: 9pt;
		color: #666;
		margin-top: 0.5em;
	}
	
	/* Prevent orphans and widows */
	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}
	
	p, li {
		orphans: 3;
		widows: 3;
	}
	
	/* Appendices and back matter */
	.appendix, .acknowledgements, .references {
		page-break-before: always;
	}
</style>
`;

// Read and combine markdown files
function readMarkdownFiles() {
	console.log(`Reading working paper sections for language: ${LANGUAGE}`);
	
	const contents = [];
	
	for (const section of sections) {
		const filename = LANGUAGE === 'en' ? `${section.file}.md` : `${section.file}-sv.md`;
		const filepath = path.join(INPUT_DIR, filename);
		
		if (!fs.existsSync(filepath)) {
			console.error(`⚠️  File not found: ${filepath}`);
			console.error(`   Make sure you have ${filename} in the sections directory`);
			process.exit(1);
		}
		
		let content = fs.readFileSync(filepath, 'utf-8');
		
		// Clean up frontmatter if present
		content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
		
		contents.push({
			title: section.title,
			content: content,
			isAppendix: section.file.startsWith('appendix'),
			isAbstract: section.file === 'abstract',
			isReferences: section.file === 'references',
			isAcknowledgements: section.file === 'acknowledgements'
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
		
		if (stats.size > 1 * 1024 * 1024) {
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
	console.log('📝 Cover image not found, proceeding without it');
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

/*	// Add title page (optional academic format)
	html += `
	<div class="title-page">
		<h1>${meta.title}</h1>
		<div class="subtitle">${meta.subtitle}</div>
		<div class="author">${meta.author}</div>
		<div class="date">${meta.date}</div>
	</div>
`;*/
	
	console.log(`Cover page HTML: ${(html.length / 1024).toFixed(1)} KB`);
	
	// Add each section
	sections.forEach((section, index) => {
		// Add page break for major sections
		if (index > 0 && (section.isAbstract || section.isAppendix || section.isReferences || section.isAcknowledgements)) {
			html += `\n<div class="section-divider"></div>\n`;
		}
		
		// Add section title with appropriate class
		const sectionClass = section.isAppendix ? 'appendix' : 
						   section.isReferences ? 'references' : 
						   section.isAcknowledgements ? 'acknowledgements' : '';
		
		html += `<section class="${sectionClass}">\n`;
/*		html += `<h1>${section.title}</h1>\n`;*/
		
		// Add special styling for abstract
		if (section.isAbstract) {
			html += `<div class="abstract">\n`;
		}
		
		const sectionHtml = marked.parse(section.content);
		const sectionSize = (sectionHtml.length / 1024).toFixed(1);
		console.log(`  ${section.title}: ${sectionSize} KB`);
		html += sectionHtml;
		
		if (section.isAbstract) {
			html += `</div>\n`;
		}
		
		html += `</section>\n`;
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
	page.setDefaultNavigationTimeout(180000);
	
	console.log('Loading HTML content...');
	await page.setContent(html, { 
		waitUntil: 'domcontentloaded',
		timeout: 180000
	});
	
	console.log('Content loaded, waiting for rendering...');
	await new Promise(resolve => setTimeout(resolve, 3000));
	
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
		headerTemplate: `
			<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;">
				<span style="float: left;">${meta.title}</span>
				<span style="float: right;">${LANGUAGE === 'en' ? 'Working paper' : 'Artikel'}</span>
			</div>
		`,
		footerTemplate: `
			<div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;">
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
	const pageCount = Math.ceil(html.length / 2500);
	console.log(`📖 Estimated pages: ${pageCount}`);
	
	// Display success message
	const baseUrl = LANGUAGE === 'en' ? 
		'https://bjornkennethholmstrom.org/working-papers/fractal-cybernetic-consciousness' :
		'https://bjornkennethholmstrom.org/sv/working-papers/fractal-cybernetic-consciousness';
	
	console.log('\n✨ Working paper generated successfully!');
	console.log(`\n📚 To view the working paper online:`);
	console.log(`${baseUrl}`);
	console.log(`\n🔧 For Swedish version:`);
	console.log(`node scripts/generate-fractal-cybernetic-pdf.js sv`);
}

// Main execution
async function main() {
	try {
		console.log('📄 Starting PDF generation for Fractal-Cybernetic Model working paper...\n');
		console.log(`Language: ${LANGUAGE}`);
		console.log(`Input directory: ${INPUT_DIR}`);
		console.log(`Output: ${OUTPUT_FILE}\n`);
		
		const sections = readMarkdownFiles();
		const html = generateHTML(sections);
		
		// Optionally save HTML for debugging
		if (process.env.DEBUG) {
			const debugFile = path.join(__dirname, '../debug-fractal-html.html');
			fs.writeFileSync(debugFile, html);
			console.log(`Debug HTML saved to: ${debugFile}`);
		}
		
		await generatePDF(html);
	} catch (error) {
		console.error('❌ Error generating PDF:', error);
		process.exit(1);
	}
}

main();
