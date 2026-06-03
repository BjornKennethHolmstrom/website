#!/usr/bin/env node

/**
 * Generate PDF for "The Clouded Mirror" full synthesis
 *
 * Usage: node scripts/generate-clouded-mirror-pdf.js
 *
 * Requirements: npm install marked puppeteer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Configuration ────────────────────────────────────────────────────────────
const CONTENT_DIR = path.join(__dirname, '../src/lib/content/syntheses/the-clouded-mirror');
const OUTPUT_DIR  = path.join(__dirname, '../static/syntheses');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'the-clouded-mirror.pdf');

// ── Metadata ─────────────────────────────────────────────────────────────────
const meta = {
  title: 'The Clouded Mirror',
  subtitle: 'Why Our Institutions Can’t See the Crises They Create—and What We Can Build Instead',
  description: 'The full public‑facing synthesis of the Governance as Engineering research programme. A journey from a woman in Rio to the structural blindness that haunts every institution on earth.',
  author: 'Björn Kenneth Holmström',
  date: 'June 2026',
  url: 'https://bjornkennethholmstrom.org/syntheses/the-clouded-mirror',
  license: 'Creative Commons Attribution-ShareAlike 4.0 International',
  type: 'Public Synthesis'
};

// ── Chapter definitions (must match the Svelte page exactly) ──────────────────
const chapters = [
  { file: 'chapter-1',  title: '1. The Woman in Rio' },
  { file: 'chapter-2',  title: '2. The Hidden Structure of Governance' },
  { file: 'chapter-3',  title: '3. Four Ways the Channel Breaks' },
  { file: 'chapter-4',  title: '4. The Paradox of Competent Blindness' },
  { file: 'chapter-5',  title: '5. The Variety Gap' },
  { file: 'chapter-6',  title: '6. Why Failures Compound (And Why Reforms Disappoint)' },
  { file: 'chapter-7',  title: '7. The Meta‑Governance Imperative' },
  { file: 'chapter-8',  title: '8. The Fragments Are Already Here' },
  { file: 'chapter-9',  title: '9. A Sensory Prosthesis: What AI Could Be For' },
  { file: 'chapter-10', title: '10. The Civilizational Bet' },
  { file: 'chapter-11', title: '11. The Invitation' },
  { file: 'summary',    title: 'Summary' },
];

// ── CSS (identical to working paper, no cover image) ──────────────────────────
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
		@bottom-right { content: none; }
	}
	body {
		font-family: 'Georgia', 'Times New Roman', serif;
		font-size: 11pt;
		line-height: 1.6;
		color: #1a1a1a;
		margin: 0;
		padding: 0;
	}
	.cover {
		page-break-after: always;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		text-align: center;
		padding: 0.5cm 2cm;
		box-sizing: border-box;
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

	h1 { font-size: 20pt; border-bottom: 2px solid #ccc; padding-bottom: 0.2em; page-break-after: avoid; }
	h2 { font-size: 16pt; page-break-after: avoid; }
	h3 { font-size: 14pt; page-break-after: avoid; }
	p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
	blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }
	code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; }
	pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; overflow-x: auto; font-size: 9pt; page-break-inside: avoid; }
	a { color: #0066cc; text-decoration: none; }
	a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; }
	img { max-width: 100%; max-height: 20cm; }
	figure { page-break-inside: avoid; }
	.page-break-before { page-break-before: always; }
	.page-break-after { page-break-after: always; }
	.section-gap { margin: 2em 0 1em 0; }
</style>
`;

// ── Read and combine chapters ─────────────────────────────────────────────────
function readChapters() {
  console.log('📖 Reading chapters...');
  const sections = [];

  for (const ch of chapters) {
    const filename = `${ch.file}.md`;
    const filepath = path.join(CONTENT_DIR, filename);

    if (!fs.existsSync(filepath)) {
      console.error(`❌ File not found: ${filepath}`);
      process.exit(1);
    }

    let content = fs.readFileSync(filepath, 'utf-8');
    // Remove frontmatter if present
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

    sections.push({ title: ch.title, content });
    console.log(`  ✓ ${filename}`);
  }

  console.log('✅ All chapters loaded\n');
  return sections;
}

// ── Generate HTML ─────────────────────────────────────────────────────────────
function generateHTML(sections) {
  console.log('🔨 Converting markdown to HTML...');

  marked.setOptions({ breaks: false, gfm: true });

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  ${pdfStyles}
</head>
<body>

  <div class="cover">
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

  for (const section of sections) {
    const sectionHtml = marked.parse(section.content);
    html += `<h1>${section.title}</h1>\n`;
    html += sectionHtml;
    html += `<div class="section-gap"></div>\n`;
  }

  html += `\n</body>\n</html>\n`;

  console.log(`✅ HTML generated (${(html.length / 1024).toFixed(1)} KB)\n`);
  return html;
}

// ── Generate PDF via Puppeteer ────────────────────────────────────────────────
async function generatePDF(html) {
  console.log('📄 Generating PDF...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const tempHtmlFile = path.join(OUTPUT_DIR, 'temp-clouded-mirror.html');
  fs.writeFileSync(tempHtmlFile, html);
  const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--allow-file-access-from-files']
  });

  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(120000);

    await page.goto(tempHtmlUri, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 120000 });

    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      printBackground: true,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      displayHeaderFooter: true,
      headerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;"><span style="float: left;">${meta.title}</span><span style="float: right;">${meta.type}</span></div>`,
      footerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;"><span class="pageNumber"></span></div>`,
      timeout: 120000
    });

    console.log(`✅ PDF generated: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('❌ PDF generation failed:', error);
  } finally {
    await browser.close();
    if (fs.existsSync(tempHtmlFile)) fs.unlinkSync(tempHtmlFile);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`📄 Generating PDF for "${meta.title}"...\n`);
  const sections = readChapters();
  const html = generateHTML(sections);
  await generatePDF(html);
  console.log('✨ Done.');
}

main();
