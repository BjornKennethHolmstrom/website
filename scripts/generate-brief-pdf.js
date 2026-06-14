#!/usr/bin/env node

/**
 * Generate English and Swedish PDFs for the Governance as Engineering
 * "Synthesis Brief".
 *
 * Unlike the Clouded Mirror generator, the brief is a single short document,
 * so it uses a compact masthead (no full-page cover) and adds table styling
 * for the fourteen-paper grammar table.
 *
 * Usage: node scripts/generate-brief-pdf.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/lib/content/syntheses');
const OUTPUT_DIR  = path.join(__dirname, '../static/syntheses');

const meta = {
  en: {
    file: 'brief',
    title: 'The Synthesis Brief',
    subtitle:
      'The fourteen-paper grammar of Governance as Engineering — what it claims, how strongly, and what it does not',
    author: 'Björn Kenneth Holmström',
    date: 'June 2026',
    url: 'https://bjornkennethholmstrom.org/syntheses/brief',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
    type: 'Synthesis Brief',
    tierNote: 'Claims are labelled [R] rigorous, [IP] in-principle, or [H] heuristic.',
    pdfSuffix: '',
  },
  sv: {
    file: 'brief-sv',
    title: 'Syntesöversikten',
    subtitle:
      'Grammatiken i Governance as Engineerings fjorton arbetsdokument — vad den hävdar, hur starkt, och vad den inte gör',
    author: 'Björn Kenneth Holmström',
    date: 'Juni 2026',
    url: 'https://bjornkennethholmstrom.org/syntheses/brief',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
    type: 'Syntesöversikt',
    tierNote: 'Anspråk märks [R] rigorös, [IP] i princip, eller [H] heuristisk.',
    pdfSuffix: '-sv',
  },
};

// ── CSS ──────────────────────────────────────────────────────────────────────
const pdfStyles = `
<style>
  @page { size: A4; margin: 2.5cm 2cm; @bottom-right { content: "Page " counter(page) " of " counter(pages); font-size: 9pt; color: #666; } }
  body { font-family: 'Georgia', 'Times New Roman', serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }

  /* Compact masthead (no full-page cover) */
  .masthead { border-bottom: 2px solid #ccc; padding-bottom: 0.8em; margin-bottom: 1.4em; }
  .masthead h1 { font-size: 22pt; font-weight: bold; margin: 0 0 0.2em 0; line-height: 1.15; border: none; padding: 0; }
  .masthead .subtitle { font-size: 12pt; font-style: italic; color: #555; line-height: 1.3; margin-bottom: 0.6em; }
  .masthead .metadata { font-size: 9pt; color: #666; line-height: 1.5; }
  .masthead .metadata .tier { color: #444; }
  .masthead .url { font-family: 'Courier New', monospace; font-size: 8.5pt; color: #888; }

  h2 { font-size: 15pt; margin-top: 1.3em; page-break-after: avoid; }
  h3 { font-size: 12.5pt; page-break-after: avoid; }
  p { margin-bottom: 0.7em; text-align: justify; orphans: 3; widows: 3; }
  ul, ol { margin-bottom: 0.8em; }
  li { margin-bottom: 0.3em; }
  strong { color: #1a1a1a; }
  em { color: #333; }
  blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }
  code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9.5pt; }
  pre { background: #f7f7f7; border: 1px solid #e0e0e0; border-radius: 4px; padding: 0.9em 1.1em; white-space: pre-wrap; overflow-wrap: anywhere; font-size: 9.5pt; line-height: 1.45; page-break-inside: avoid; }
  pre code { background: none; padding: 0; }

  /* Fourteen-paper grammar table */
  table { width: 100%; border-collapse: collapse; margin: 1em 0 1.2em 0; font-size: 9.5pt; page-break-inside: auto; }
  thead { display: table-header-group; }
  tr { page-break-inside: avoid; }
  th, td { border: 1px solid #ddd; padding: 0.45em 0.6em; text-align: left; vertical-align: top; }
  th { background: #f0f0f0; font-weight: bold; }
  tbody tr:nth-child(even) { background: #fafafa; }

  a { color: #0066cc; text-decoration: none; }
  a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; }
</style>`;

// ── Read single content file ─────────────────────────────────────────────────
function readContent(lang) {
  const filepath = path.join(CONTENT_DIR, `${meta[lang].file}.md`);
  if (!fs.existsSync(filepath)) {
    console.error(`❌ File not found: ${filepath}`);
    process.exit(1);
  }
  let content = fs.readFileSync(filepath, 'utf-8');
  content = content.replace(/^---\n[\s\S]*?\n---\n/, ''); // strip frontmatter if present
  return content;
}

// ── Generate HTML ─────────────────────────────────────────────────────────────
function generateHTML(lang, content) {
  const m = meta[lang];
  const body = marked.parse(content);
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${m.title}</title>
  ${pdfStyles}
</head>
<body>
  <div class="masthead">
    <h1>${m.title}</h1>
    <div class="subtitle">${m.subtitle}</div>
    <div class="metadata">
      <div><strong>${m.author}</strong> · ${m.date}</div>
      <div class="tier">${m.tierNote}</div>
      <div>${m.license}</div>
      <div class="url">${m.url}</div>
    </div>
  </div>
  ${body}
</body>
</html>
`;
}

// ── Generate PDF ─────────────────────────────────────────────────────────────
async function generatePDF(lang, html) {
  const m = meta[lang];
  const pdfFilename = `brief${m.pdfSuffix}.pdf`;
  const outputPath = path.join(OUTPUT_DIR, pdfFilename);

  const tempHtmlFile = path.join(OUTPUT_DIR, `temp-brief-${lang}.html`);
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
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      displayHeaderFooter: true,
      headerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;"><span style="float: left;">${m.title}</span><span style="float: right;">${m.type}</span></div>`,
      footerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;"><span class="pageNumber"></span></div>`,
      timeout: 120000
    });
    console.log(`✅ PDF generated: ${outputPath}`);
  } catch (error) {
    console.error(`❌ PDF generation failed for ${lang}:`, error);
  } finally {
    await browser.close();
    if (fs.existsSync(tempHtmlFile)) fs.unlinkSync(tempHtmlFile);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('📄 Generating Synthesis Brief PDFs...\n');
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const lang of ['en', 'sv']) {
    console.log(`--- Language: ${lang} ---`);
    const content = readContent(lang);
    const html = generateHTML(lang, content);
    await generatePDF(lang, html);
  }
  console.log('\n✨ All Synthesis Brief PDFs generated.');
}

main();
