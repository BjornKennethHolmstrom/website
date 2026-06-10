#!/usr/bin/env node

/**
 * Generate English and Swedish PDFs for "The Clouded Mirror" full synthesis
 *
 * Usage: node scripts/generate-clouded-mirror-pdf.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/lib/content/syntheses/the-clouded-mirror');
const OUTPUT_DIR  = path.join(__dirname, '../static/syntheses');

const meta = {
  en: {
    title: 'The Clouded Mirror',
    subtitle: 'Why Our Institutions Can’t See the Crises They Create—and What We Can Build Instead',
    description: 'The full public‑facing synthesis of the Governance as Engineering research programme.',
    author: 'Björn Kenneth Holmström',
    date: 'June 2026',
    url: 'https://bjornkennethholmstrom.org/syntheses/the-clouded-mirror',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
    type: 'Public Synthesis',
    pdfSuffix: '',
  },
  sv: {
    title: 'Den grumlade spegeln',
    subtitle: 'Varför våra institutioner inte kan se kriserna de skapar – och vad vi kan bygga istället',
    description: 'Den fullständiga publika syntesen av forskningsprogrammet Governance as Engineering.',
    author: 'Björn Kenneth Holmström',
    date: 'Juni 2026',
    url: 'https://bjornkennethholmstrom.org/syntheses/the-clouded-mirror',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
    type: 'Publikt syntes',
    pdfSuffix: '-sv',
  },
};

const chapters = {
  en: [
    { file: 'chapter-1',  title: '1. The Woman in Rio' },
    { file: 'chapter-2',  title: '2. The Hidden Structure of Governance' },
    { file: 'chapter-3',  title: '3. Four Ways the Channel Breaks' },
    { file: 'chapter-4',  title: '4. The Paradox of Competent Blindness' },
    { file: 'chapter-5',  title: '5. The Variety Gap' },
    { file: 'chapter-6',  title: '6. Why Failures Compound (And Why Reforms Disappoint)' },
    { file: 'chapter-7',  title: '7. The Meta‑Governance Imperative' },
    { file: 'chapter-8',  title: '8. The Fragments Are Already Here' },
    { file: 'chapter-9',  title: '9. A Sensory Prosthesis: What AI Could Be For' },
    { file: 'chapter-10', title: '10. The Shared Mirror' },
    { file: 'chapter-11', title: '11. The Civilizational Bet' },
    { file: 'chapter-12', title: '12. The Invitation' },
    { file: 'summary',    title: 'Summary' },
  ],
  sv: [
    { file: 'chapter-1-sv',  title: '1. Kvinnan i Rio' },
    { file: 'chapter-2-sv',  title: '2. Styrningens dolda struktur' },
    { file: 'chapter-3-sv',  title: '3. Fyra sätt kanalen bryts' },
    { file: 'chapter-4-sv',  title: '4. Paradoxen med kompetent blindhet' },
    { file: 'chapter-5-sv',  title: '5. Varietetsgapet' },
    { file: 'chapter-6-sv',  title: '6. Varför misslyckanden förvärras' },
    { file: 'chapter-7-sv',  title: '7. Meta‑styrningsimperativet' },
    { file: 'chapter-8-sv',  title: '8. Fragmenten finns redan här' },
    { file: 'chapter-9-sv',  title: '9. En sensorisk protes: Vad AI skulle kunna vara till för' },
    { file: 'chapter-10-sv', title: '10. Den gemensamma spegeln' },
    { file: 'chapter-11-sv', title: '11. Det civilisatoriska vadet' },
    { file: 'chapter-12-sv', title: '12. Inbjudan' },
    { file: 'summary-sv',    title: 'Sammanfattning' },
  ],
};

// ── CSS ──────────────────────────────────────────────────────────────────────
const pdfStyles = `
<style>
  @page { size: A4; margin: 2.5cm 2cm; @bottom-right { content: "Page " counter(page) " of " counter(pages); font-size: 9pt; color: #666; } }
  @page :first { @bottom-right { content: none; } }
  body { font-family: 'Georgia', 'Times New Roman', serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }
  .cover { page-break-after: always; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; text-align: center; padding: 0.5cm 2cm; box-sizing: border-box; }
  .cover h1 { font-size: 24pt; font-weight: bold; margin-bottom: 0.3em; line-height: 1.2; color: #1a1a1a; }
  .cover .subtitle { font-size: 14pt; font-style: italic; margin-bottom: 0.6em; color: #555; line-height: 1.3; }
  .cover .description { font-size: 10.5pt; margin-bottom: 0.6em; color: #666; max-width: 600px; line-height: 1.4; }
  .cover .metadata { font-size: 10.5pt; color: #666; margin-top: 1em; line-height: 1.5; }
  .cover .url { font-size: 8.5pt; color: #888; margin-top: 0.6em; font-family: 'Courier New', monospace; }
  .cover .license { font-size: 8.5pt; color: #888; margin-top: 0.4em; font-style: italic; }
  .cover .type { font-size: 9pt; color: #888; margin-top: 0.3em; }
  h1 { font-size: 20pt; border-bottom: 2px solid #ccc; padding-bottom: 0.2em; page-break-after: avoid; }
  h2 { font-size: 16pt; page-break-after: avoid; }
  h3 { font-size: 14pt; page-break-after: avoid; }
  p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
  blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }
  code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; }
  pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; overflow-x: auto; font-size: 9pt; page-break-inside: avoid; }
  a { color: #0066cc; text-decoration: none; }
  a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; }
</style>`;

// ── Read chapters for a language ─────────────────────────────────────────────
function readChapters(lang) {
  const ch = chapters[lang];
  const sections = [];
  for (const c of ch) {
    const filename = `${c.file}.md`;
    const filepath = path.join(CONTENT_DIR, filename);
    if (!fs.existsSync(filepath)) {
      console.error(`❌ File not found: ${filepath}`);
      process.exit(1);
    }
    let content = fs.readFileSync(filepath, 'utf-8');
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    sections.push({ title: c.title, content });
  }
  return sections;
}

// ── Generate HTML ─────────────────────────────────────────────────────────────
function generateHTML(lang, sections) {
  const currentMeta = meta[lang];
  let html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${currentMeta.title}</title>
  ${pdfStyles}
</head>
<body>
  <div class="cover">
    <h1>${currentMeta.title}</h1>
    <div class="subtitle">${currentMeta.subtitle}</div>
    <div class="description">${currentMeta.description}</div>
    <div class="metadata">
      <div><strong>${currentMeta.author}</strong></div>
      <div>${currentMeta.date}</div>
      <div class="license">${currentMeta.license}</div>
      <div class="type">${currentMeta.type}</div>
    </div>
    <div class="url">${currentMeta.url}</div>
  </div>
`;

  for (const section of sections) {
    const sectionHtml = marked.parse(section.content);
    html += `<h1>${section.title}</h1>\n`;
    html += sectionHtml;
    html += `<div class="section-gap"></div>\n`;
  }

  html += `\n</body>\n</html>\n`;
  return html;
}

// ── Generate PDF ─────────────────────────────────────────────────────────────
async function generatePDF(lang, html) {
  const currentMeta = meta[lang];
  const pdfFilename = `the-clouded-mirror${currentMeta.pdfSuffix}.pdf`;
  const outputPath = path.join(OUTPUT_DIR, pdfFilename);

  const tempHtmlFile = path.join(OUTPUT_DIR, `temp-clouded-mirror-${lang}.html`);
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
      headerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;"><span style="float: left;">${currentMeta.title}</span><span style="float: right;">${currentMeta.type}</span></div>`,
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
  console.log('📄 Generating Clouded Mirror PDFs...\n');
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const lang of ['en', 'sv']) {
    console.log(`\n--- Language: ${lang} ---`);
    const sections = readChapters(lang);
    const html = generateHTML(lang, sections);
    await generatePDF(lang, html);
  }
  console.log('\n✨ All Clouded Mirror PDFs generated.');
}

main();
