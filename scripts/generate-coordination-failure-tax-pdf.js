#!/usr/bin/env node

/**
 * Generate PDF for The Coordination Failure Tax whitepaper
 *
 * Usage: node scripts/generate-coordination-failure-tax-pdf.js [language]
 * Example: node scripts/generate-coordination-failure-tax-pdf.js en
 * Example: node scripts/generate-coordination-failure-tax-pdf.js sv
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LANGUAGE = process.argv[2] || 'en';
if (!['en', 'sv'].includes(LANGUAGE)) {
  console.error(`Invalid language: ${LANGUAGE}. Use 'en' or 'sv'.`);
  process.exit(1);
}

const INPUT_DIR = path.join(__dirname, '../src/routes/working-papers/coordination-failure-tax/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/whitepapers');
const SUFFIX = LANGUAGE === 'en' ? '' : `-${LANGUAGE}`;
const OUTPUT_FILE = path.join(OUTPUT_DIR, `coordination-failure-tax${SUFFIX}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/working-papers/images/coordination-failure-tax-cover.png');

const metadata = {
  en: {
    title: 'The Coordination Failure Tax',
    subtitle: 'Architectural Compounding and the Path to Requisite Governance',
    description: 'Four governance failure modes — spatial blindness, frequency gaps, preference invisibility, and observational inadequacy — do not add. They multiply. A governance system exhibiting all four simultaneously is categorically incapable of the functions it claims to perform.',
    author: 'Björn Kenneth Holmström',
    date: 'March 2026',
    url: 'https://bjornkennethholmstrom.org/working-papers/coordination-failure-tax',
    seriesNote: 'Paper V in the Governance as Engineering series',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
  },
  sv: {
    title: 'Samordningsmisslyckandets skatt',
    subtitle: 'Arkitektonisk förstärkning och vägen mot nödvändig styrning',
    description: 'Fyra styrningsfelmönster — rumslig blindhet, frekvensluckor, preferensosynlighet och observationsotillräcklighet — adderar inte. De multiplicerar. Ett styrningssystem som uppvisar alla fyra är kategoriskt oförmöget att utföra de funktioner det påstår sig utföra.',
    author: 'Björn Kenneth Holmström',
    date: 'Mars 2026',
    url: 'https://bjornkennethholmstrom.org/sv/working-papers/coordination-failure-tax',
    seriesNote: 'Rapport V i serien Styrning som ingenjörskonst',
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
  },
};

const meta = metadata[LANGUAGE];

const sections = [
  'abstract',
  'part-1',
  'part-2',
  'part-3',
  'part-4',
  'part-5',
  'part-6',
];

// ── CSS ───────────────────────────────────────────────────────────────────────
const pdfStyles = `
<style>
  @page {
    size: A4;
    margin: 2.5cm 2cm;
  }
  @page :first { @bottom-right { content: none; } }

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
  .cover-image { width: 100%; max-width: 280px; max-height: 12cm; object-fit: contain; margin-bottom: 1em; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
  .cover h1 { font-size: 22pt; font-weight: bold; margin-bottom: 0.3em; line-height: 1.2; }
  .cover .subtitle { font-size: 13pt; font-style: italic; margin-bottom: 0.4em; color: #555; line-height: 1.4; max-width: 560px; }
  .cover .series-note { font-size: 9.5pt; color: #888; margin-bottom: 0.4em; font-style: italic; }
  .cover .description { font-size: 10.5pt; margin-bottom: 0.6em; color: #666; max-width: 580px; line-height: 1.4; }
  .cover .metadata { font-size: 10.5pt; color: #666; margin-top: 0.6em; line-height: 1.5; }
  .cover .url { font-size: 8.5pt; color: #888; margin-top: 0.4em; font-family: 'Courier New', monospace; }
  .cover .license { font-size: 8.5pt; color: #888; margin-top: 0.2em; font-style: italic; }

  h1 { font-size: 20pt; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.5em; page-break-after: avoid; border-bottom: 2px solid #ccc; padding-bottom: 0.2em; }
  h2 { font-size: 16pt; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.5em; page-break-after: avoid; color: #2c2c2c; }
  h3 { font-size: 14pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; page-break-after: avoid; color: #333; }
  h4 { font-size: 12pt; font-weight: bold; margin-top: 0.8em; margin-bottom: 0.5em; page-break-after: avoid; font-style: italic; }

  p { margin-bottom: 0.8em; text-align: justify; orphans: 3; widows: 3; }
  ul, ol { margin-bottom: 0.8em; padding-left: 1.5em; }
  li { margin-bottom: 0.3em; }

  blockquote { margin: 1em 2em; padding: 0.5em 1em; border-left: 3px solid #ccc; font-style: italic; background: #f9f9f9; page-break-inside: avoid; }

  table { width: 100%; border-collapse: collapse; margin-bottom: 1em; page-break-inside: avoid; font-size: 10pt; }
  th, td { border: 1px solid #ddd; padding: 0.5em; text-align: left; vertical-align: top; }
  th { background: #f5f5f5; font-weight: bold; }

  code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; border-radius: 2px; }
  pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; font-size: 9pt; line-height: 1.4; page-break-inside: avoid; margin-bottom: 1em; border-radius: 4px; }
  pre code { background: none; padding: 0; }

  a { color: #0066cc; text-decoration: none; }
  a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; word-break: break-all; }
  a[href^="#"]:after { content: ""; }

  hr { border: none; border-top: 2px solid #ccc; margin: 2em 0; page-break-after: avoid; }
  strong { font-weight: bold; }
  em { font-style: italic; }

  .section-divider { page-break-before: always; margin: 2em 0 1em 0; }

  figure, .figure { page-break-inside: avoid; break-inside: avoid; margin: 1.5em 0; text-align: center; }
  figure img, .figure img { max-width: 100%; max-height: 18cm; width: auto; height: auto; object-fit: contain; border: 1px solid #eee; border-radius: 4px; }
  figcaption { font-size: 9pt; color: #555; font-style: italic; margin-top: 0.5em; }

  svg { max-width: 100%; height: auto; }
</style>
`;

// ── Helpers ───────────────────────────────────────────────────────────────────
function processImages(content) {
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    if (src.startsWith('http') || src.startsWith('file:')) return match;
    const candidates = [
      path.join(__dirname, '../static', src),
      path.join(__dirname, '../static/working-papers/images', path.basename(src)),
      path.join(__dirname, '../src/routes/working-papers/coordination-failure-tax', src),
      path.join(__dirname, '../static', src.replace(/^\//, '')),
    ];
    const found = candidates.find(p => fs.existsSync(p));
    if (found) {
      const uri = 'file://' + path.resolve(found).replace(/\\/g, '/');
      console.log(`  ✅ ${path.basename(found)}`);
      return `![${alt}](${uri})`;
    }
    console.warn(`  ⚠️  Not found: ${src}`);
    return match;
  });
}

function wrapImages(html) {
  return html.replace(/<img([^>]+)>/g, (_, attrs) =>
    `<figure><img${attrs}></figure>`
  );
}

function readSections() {
  console.log(`\n📖 Reading sections [${LANGUAGE}]\n`);
  return sections.map(name => {
    const filename = LANGUAGE === 'en' ? `${name}.md` : `${name}-sv.md`;
    const filepath = path.join(INPUT_DIR, filename);
    process.stdout.write(`  ${filename} ... `);
    if (!fs.existsSync(filepath)) {
      console.error(`\n❌ Not found: ${filepath}`);
      process.exit(1);
    }
    let content = fs.readFileSync(filepath, 'utf-8').replace(/^---\n[\s\S]*?\n---\n/, '');
    content = processImages(content);
    console.log('✓');
    return content;
  });
}

function buildHTML(sections) {
  marked.setOptions({ breaks: false, gfm: true });
  const coverImg = fs.existsSync(COVER_IMAGE)
    ? 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/')
    : null;

  let html = `<!DOCTYPE html><html lang="${LANGUAGE}"><head><meta charset="UTF-8"><title>${meta.title}</title>${pdfStyles}</head><body>`;

  // Cover
  html += `<div class="cover">`;
  if (coverImg) html += `<img src="${coverImg}" alt="Cover" class="cover-image" />`;
  html += `
    <h1>${meta.title}</h1>
    <div class="subtitle">${meta.subtitle}</div>
    <div class="series-note">${meta.seriesNote}</div>
    <div class="description">${meta.description}</div>
    <div class="metadata"><div><strong>${meta.author}</strong></div><div>${meta.date}</div><div class="license">${meta.license}</div></div>
    <div class="url">${meta.url}</div>
  </div>`;

  sections.forEach((content, i) => {
    if (i > 0) html += `<div class="section-divider"></div>`;
    html += `<section>${wrapImages(marked.parse(content))}</section>`;
  });

  html += `</body></html>`;
  return html;
}

async function generatePDF(html) {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const tmp = path.join(OUTPUT_DIR, `tmp-cft-${LANGUAGE}.html`);
  fs.writeFileSync(tmp, html);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--allow-file-access-from-files'],
  });

  try {
    const page = await browser.newPage();
    await page.goto('file://' + path.resolve(tmp).replace(/\\/g, '/'), { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 120000 });
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      printBackground: true,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      displayHeaderFooter: true,
      headerTemplate: `<div style="font-size:9pt;color:#666;width:100%;margin:0 2cm;"><span style="float:left;">${meta.title}</span><span style="float:right;">${LANGUAGE === 'en' ? 'Whitepaper · Series V' : 'Vitbok · Serie V'}</span></div>`,
      footerTemplate: `<div style="font-size:9pt;color:#666;width:100%;text-align:center;"><span class="pageNumber"></span></div>`,
      timeout: 120000,
    });
    console.log(`\n✅ PDF written to ${OUTPUT_FILE}`);
  } finally {
    await browser.close();
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
  }
}

async function main() {
  console.log(`\n📄 Generating PDF: The Coordination Failure Tax [${LANGUAGE}]`);
  const sectionContents = readSections();
  const html = buildHTML(sectionContents);
  if (process.env.DEBUG) {
    const dbg = path.join(__dirname, `../debug-cft-${LANGUAGE}.html`);
    fs.writeFileSync(dbg, html);
    console.log(`Debug HTML: ${dbg}`);
  }
  await generatePDF(html);
}

main().catch(e => { console.error(e); process.exit(1); });
