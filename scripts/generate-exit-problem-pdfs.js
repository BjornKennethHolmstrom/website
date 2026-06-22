#!/usr/bin/env node

/**
 * Generate PDF for "The Exit Problem" essay (with LaTeX + image support)
 *
 * Usage: node scripts/generate-exit-problem-pdf.js [language]
 * Example: node scripts/generate-exit-problem-pdf.js en
 * Example: node scripts/generate-exit-problem-pdf.js sv
 *
 * Requirements:
 * npm install marked puppeteer katex
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';
import katex from 'katex';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Configuration ────────────────────────────────────────────────────────────
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
    console.error(`Invalid language: ${LANGUAGE}`);
    console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
    process.exit(1);
}

const INPUT_FILE = path.join(
    __dirname,
    `../src/routes/essays/the-exit-problem/the-exit-problem${LANGUAGE === 'en' ? '' : '-sv'}.md`
);

const OUTPUT_DIR = path.join(__dirname, '../static/essays');
const OUTPUT_FILE = path.join(
    OUTPUT_DIR,
    `exitProblem${LANGUAGE === 'en' ? '' : '-sv'}.pdf`
);

const STATIC_DIR = path.join(__dirname, '../static');      // used to resolve image paths
const COVER_IMAGE = path.join(__dirname, '../static/essays/exit-problem-cover.svg'); // optional

// ── Metadata ─────────────────────────────────────────────────────────────────
const metadata = {
    en: {
        title: 'The Exit Problem',
        subtitle: 'Why Agreement Among AI Systems Is Weak Evidence',
        author: 'Björn Kenneth Holmström',
        date: 'June 2026',
        url: 'https://bjornkennethholmstrom.org/essays/the-exit-problem',
    },
    sv: {
        title: 'Utgångsproblemet',
        subtitle: 'Varför enighet mellan AI-system är svaga bevis',
        author: 'Björn Kenneth Holmström',
        date: 'Juni 2026',
        url: 'https://bjornkennethholmstrom.org/essays/the-exit-problem',
    },
};

const meta = metadata[LANGUAGE];

// ── Load KaTeX CSS ──────────────────────────────────────────────────────────
let katexCss = '';
try {
    katexCss = fs.readFileSync(
        path.join(__dirname, '../node_modules/katex/dist/katex.min.css'),
        'utf-8'
    );
    console.log('✓ KaTeX CSS loaded from node_modules');
} catch {
    console.warn('⚠ Could not load KaTeX CSS from node_modules, using CDN link');
}

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

	/* --- KaTeX overrides for PDF --- */
	.katex { font-size: 1em !important; }
	.katex-display > .katex { font-size: 1.1em !important; }
	.katex .mord { font-family: 'KaTeX_Main', 'Times New Roman', serif; }
	.katex .mord.mathdefault { font-family: 'KaTeX_Main', 'Times New Roman', serif; }

	${katexCss ? `/* Embedded KaTeX CSS */` : ''}
	
	/* Cover page */
 .cover {
   page-break-after: always;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   min-height: auto;      
   text-align: center;
   padding: 1.5cm 2cm;     
   box-sizing: border-box; 
 }

 .cover-image {
   max-width: 80%;
   max-height: 300px;
   object-fit: contain;
   margin: 1em 0;
   border-radius: 4px;
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
   margin-bottom: 1.5em;
   color: #555;
 }

 .cover .metadata {
   font-size: 12pt;
   color: #666;
   margin-top: 1em;
 }
	
	.cover .url {
		font-size: 10pt;
		color: #888;
		margin-top: 1em;
		font-family: monospace;
	}
	
	/* Typography */
	h1 { font-size: 20pt; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em; page-break-after: avoid; }
	h2 { font-size: 16pt; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.5em; page-break-after: avoid; }
	h3 { font-size: 13pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; page-break-after: avoid; }
	
	p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
	ul, ol { margin-bottom: 0.8em; padding-left: 1.5em; }
	li { margin-bottom: 0.3em; }
	
	blockquote {
		margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc;
		font-style: italic; background: #f9f9f9; page-break-inside: avoid;
	}
	
	pre {
		background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em;
		overflow-x: auto; font-size: 9pt; line-height: 1.4;
		page-break-inside: avoid; margin-bottom: 1em;
	}
	
	code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; }
	pre code { background: none; padding: 0; }
	
	table { width: 100%; border-collapse: collapse; margin-bottom: 1em; page-break-inside: avoid; font-size: 10pt; }
	th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; }
	th { background: #f5f5f5; font-weight: bold; }
	
	a { color: #0066cc; text-decoration: none; }
	a:after { content: " (" attr(href) ")"; font-size: 9pt; color: #666; }
	
	strong { font-weight: bold; }
	em { font-style: italic; }
	
	hr { border: none; border-top: 2px solid #ccc; margin: 2em 0; page-break-after: avoid; }
	
	img { max-height: 20cm; width: auto; max-width: 100%; object-fit: contain; }

	h1, h2, h3, h4, h5, h6 { page-break-after: avoid; }
	p, li { orphans: 3; widows: 3; }
</style>
`;

// ── Helpers ─────────────────────────────────────────────────────────────────
function getImageAsBase64(imagePath) {
    if (fs.existsSync(imagePath)) {
        const bitmap = fs.readFileSync(imagePath);
        const ext = path.extname(imagePath).toLowerCase();
        const mime = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/svg+xml';
        const base64 = bitmap.toString('base64');
        return `data:${mime};base64,${base64}`;
    }
    return null;
}

// New: replace /essays/images/... references with base64 data URIs
function resolveImages(html) {
    // Matches src="/essays/images/..." (also works with single quotes)
    const imgRegex = /src="(\/essays\/images\/[^"]+)"/g;
    return html.replace(imgRegex, (match, srcPath) => {
        // Resolve to the filesystem
        const filePath = path.join(STATIC_DIR, srcPath);
        console.log(`  ↳ resolving image: ${srcPath} -> ${filePath}`);
        if (fs.existsSync(filePath)) {
            const dataUri = getImageAsBase64(filePath);
            return `src="${dataUri}"`;
        } else {
            console.warn(`  ⚠ image not found: ${filePath}`);
            return match; // keep original (won't load)
        }
    });
}

// ── Pre‑render LaTeX with KaTeX ─────────────────────────────────────────────
function renderMathInMarkdown(markdown) {
    const blocks = [];

    // Display math: $$ ... $$ and \[ ... \]
    let processed = markdown.replace(
        /\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g,
        (match, tex1, tex2) => {
            const tex = (tex1 ?? tex2 ?? '').trim();
            try {
                const rendered = katex.renderToString(tex, { displayMode: true, throwOnError: false });
                blocks.push(rendered);
                return `%%MATH${blocks.length - 1}%%`;
            } catch (e) {
                console.warn('KaTeX display error:', e.message);
                blocks.push(match);
                return `%%MATH${blocks.length - 1}%%`;
            }
        }
    );

    // Inline math: $ ... $ and \( ... \)
    processed = processed.replace(
        /(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
        (match, tex1, tex2) => {
            const tex = (tex1 ?? tex2 ?? '').trim();
            try {
                const rendered = katex.renderToString(tex, { displayMode: false, throwOnError: false });
                blocks.push(rendered);
                return `%%MATH${blocks.length - 1}%%`;
            } catch (e) {
                console.warn('KaTeX inline error:', e.message);
                blocks.push(match);
                return `%%MATH${blocks.length - 1}%%`;
            }
        }
    );

    return { processed, blocks };
}

// ── Read and convert markdown ───────────────────────────────────────────────
function readMarkdown() {
    console.log(`\n📖 Reading essay file for language: ${LANGUAGE}`);
    console.log(`Input file: ${INPUT_FILE}\n`);

    if (!fs.existsSync(INPUT_FILE)) {
        console.error(`\n❌ File not found: ${INPUT_FILE}`);
        process.exit(1);
    }

    let content = fs.readFileSync(INPUT_FILE, 'utf-8');
    console.log(`✓ Read ${(content.length / 1024).toFixed(1)} KB`);
    return content;
}

// ── Generate HTML ────────────────────────────────────────────────────────────
function generateHTML(markdown) {
    console.log('🔨 Converting markdown to HTML (with KaTeX)...');

    // Pre‑render LaTeX
    const { processed, blocks } = renderMathInMarkdown(markdown);

    // Convert the processed markdown to HTML
    marked.setOptions({ breaks: false, gfm: true });
    let html = marked.parse(processed);

    // Restore KaTeX placeholders
    html = html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');

    // Resolve image references to base64 (after KaTeX restoration, so img tags are intact)
    console.log('🖼️ Resolving image references...');
    html = resolveImages(html);

    // Build the full HTML page
    const coverImageSrc = getImageAsBase64(COVER_IMAGE);
    const katexLink = !katexCss
        ? '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">'
        : '';

    const fullHtml = `
<!DOCTYPE html>
<html lang="${LANGUAGE}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  ${katexLink}
  <style>${katexCss}</style>
  ${pdfStyles}
</head>
<body>
  <div class="cover">
    <h1>${meta.title}</h1>
    <div class="subtitle">${meta.subtitle}</div>
    ${coverImageSrc ? `<img src="${coverImageSrc}" class="cover-image" alt="Cover illustration" />` : ''}
    <div class="metadata">
      <div>${meta.author}</div>
      <div>${meta.date}</div>
    </div>
    <div class="url">${meta.url}</div>
  </div>
  ${html}
</body>
</html>`;

    console.log(`✅ HTML generated (${(fullHtml.length / 1024).toFixed(1)} KB total)\n`);
    return fullHtml;
}

// ── Generate PDF via Puppeteer ───────────────────────────────────────────────
async function generatePDF(html) {
    console.log('📄 Generating PDF...');

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
        margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: `
            <div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;">
                <span class="pageNumber"></span> / <span class="totalPages"></span>
            </div>
        `
    });

    await browser.close();

    console.log(`✅ PDF generated: ${OUTPUT_FILE}`);
    const stats = fs.statSync(OUTPUT_FILE);
    console.log(`📄 File size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    try {
        console.log('📄 Starting PDF generation for "The Exit Problem"...\n');
        console.log(`Language: ${LANGUAGE}`);
        console.log(`Output: ${OUTPUT_FILE}\n`);

        const markdown = readMarkdown();
        const html = generateHTML(markdown);
        await generatePDF(html);

        console.log('\n✨ Done!');
    } catch (error) {
        console.error('\n❌ Error generating PDF:', error);
        process.exit(1);
    }
}

main();
