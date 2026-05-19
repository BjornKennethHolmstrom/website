#!/usr/bin/env node

/**
 * Generate PDFs for the Stable Glossary in all supported languages.
 *
 * Usage: node scripts/generate-glossary-pdf.js
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

const CONTENT_DIR = path.join(__dirname, '../src/lib/content');
const OUTPUT_DIR = path.join(__dirname, '../static/variety-gap-framework');

const LOCALES = [
  {
    lang: 'en',
    inputFile: path.join(CONTENT_DIR, 'stable-glossary-v1.0.md'),
    outputFile: path.join(OUTPUT_DIR, 'stable-glossary-en.pdf'),
    title: 'Stable Glossary',
    subtitle: 'Variety Gap Framework & Governance as Engineering Series',
    description: 'Standardised terminology for the Variety Gap Framework and the Governance as Engineering working papers. Use this reference when reading the country reports, organisational reports, or any of the engineering papers.',
    author: 'Björn Kenneth Holmström',
    date: 'May 2026',
    version: '1.0',
    url: 'https://bjornkennethholmstrom.org/variety-gap-framework',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
  },
  {
    lang: 'sv',
    inputFile: path.join(CONTENT_DIR, 'stable-glossary-v1.0-sv.md'),
    outputFile: path.join(OUTPUT_DIR, 'stable-glossary-sv.pdf'),
    title: 'Stabil ordlista',
    subtitle: 'Varietetsgap-ramverket och serien Governance as Engineering',
    description: 'Standardiserad terminologi för Varietetsgap-ramverket och Governance as Engineering. Används som referens vid läsning av landrapporter, organisationsrapporter eller working papers.',
    author: 'Björn Kenneth Holmström',
    date: 'Maj 2026',
    version: '1.0',
    url: 'https://bjornkennethholmstrom.org/variety-gap-framework',
    license: 'Creative Commons Erkännande-DelaLika 4.0 Internationell',
  },
];

// ── CSS (identical for both languages) ───────────────────────────────────────
const pdfStyles = `
<style>
  @page {
    size: A4;
    margin: 2.5cm 2cm;
    @bottom-right {
      content: "Sida " counter(page) " av " counter(pages);
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
    max-width: 100%;
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
  .cover h1 { font-size: 24pt; font-weight: bold; margin-bottom: 0.3em; line-height: 1.2; color: #1a1a1a; }
  .cover .subtitle { font-size: 14pt; font-style: italic; margin-bottom: 0.6em; color: #555; line-height: 1.3; }
  .cover .description { font-size: 10.5pt; margin-bottom: 0.6em; color: #666; max-width: 600px; line-height: 1.4; }
  .cover .metadata { font-size: 10.5pt; color: #666; margin-top: 1em; line-height: 1.5; }
  .cover .url { font-size: 8.5pt; color: #888; margin-top: 0.6em; font-family: 'Courier New', monospace; }
  .cover .license { font-size: 8.5pt; color: #888; margin-top: 0.4em; font-style: italic; }
  .cover .version { font-size: 9pt; color: #888; margin-top: 0.3em; }
  h1 { font-size: 20pt; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em; page-break-after: avoid; color: #1a1a1a; border-bottom: 2px solid #ccc; padding-bottom: 0.2em; }
  h2 { font-size: 16pt; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.5em; page-break-after: avoid; color: #2c2c2c; }
  h3 { font-size: 14pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; page-break-after: avoid; color: #333; }
  p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
  ul, ol { margin-bottom: 0.8em; padding-left: 1.5em; }
  li { margin-bottom: 0.3em; }
  blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }
  code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; border-radius: 2px; }
  strong { font-weight: bold; color: #000; }
  em { font-style: italic; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 1em; page-break-inside: avoid; font-size: 10pt; }
  th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; vertical-align: top; }
  th { background: #f5f5f5; font-weight: bold; }
  a { color: #0066cc; text-decoration: none; }
  a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; word-break: break-all; }
  a[href^="#"]:after { content: ""; }
</style>
`;

// ── Read markdown, strip frontmatter ────────────────────────────────────────
function readGlossary(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return null;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
  return content;
}

// ── Generate HTML for a single locale ────────────────────────────────────────
function generateHTML(locale) {
  const content = readGlossary(locale.inputFile);
  if (!content) return null;

  marked.setOptions({ breaks: false, gfm: true });
  const bodyHtml = marked.parse(content);

  return `<!DOCTYPE html>
<html lang="${locale.lang}">
<head>
  <meta charset="UTF-8">
  <title>${locale.title} – ${locale.subtitle}</title>
  ${pdfStyles}
</head>
<body>
  <div class="cover">
    <h1>${locale.title}</h1>
    <div class="subtitle">${locale.subtitle}</div>
    <div class="description">${locale.description}</div>
    <div class="metadata">
      <div><strong>${locale.author}</strong></div>
      <div>${locale.date} · Version ${locale.version}</div>
      <div class="license">${locale.license}</div>
    </div>
    <div class="url">${locale.url}</div>
  </div>
  ${bodyHtml}
</body>
</html>`;
}

// ── Generate PDF for a single locale ─────────────────────────────────────────
async function generateOnePDF(html, outputPath, locale) {
  if (!html) return;

  const tempFile = path.join(OUTPUT_DIR, `temp-glossary-${locale.lang}.html`);
  fs.writeFileSync(tempFile, html);
  const tempUri = 'file://' + path.resolve(tempFile).replace(/\\/g, '/');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--allow-file-access-from-files']
  });

  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(120000);
    await page.goto(tempUri, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 120000 });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;">
          <span style="float: left;">${locale.title} – ${locale.subtitle}</span>
          <span style="float: right;">Version ${locale.version}</span>
        </div>`,
      footerTemplate: `
        <div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;">
          <span class="pageNumber"></span>
        </div>`,
      timeout: 120000
    });

    console.log(`✅ PDF generated: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generating PDF for ${locale.lang}:`, error);
  } finally {
    await browser.close();
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('📄 Generating Stable Glossary PDFs...\n');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const locale of LOCALES) {
    console.log(`Processing ${locale.lang}...`);
    const html = generateHTML(locale);
    if (html) {
      await generateOnePDF(html, locale.outputFile, locale);
    }
  }

  console.log('\n🎉 All done!');
}

main();
