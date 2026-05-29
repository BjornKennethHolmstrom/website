#!/usr/bin/env node

/**
 * Generate PDFs for What a Civilization Must Value (English and Swedish)
 *
 * Usage: node scripts/generate-what-a-civilization-must-value-pdf.js [en|sv]
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
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
  console.error(`Invalid language: ${LANGUAGE}`);
  console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
  process.exit(1);
}

// ── Paths ────────────────────────────────────────────────────────────────────
const WEBSITE_DIR = path.join(__dirname, '..');
const SLUG = 'what-a-civilization-must-value';
const SECTIONS_DIR = path.join(WEBSITE_DIR, `src/routes/books/${SLUG}/sections`, LANGUAGE);
const STATIC_BOOKS_DIR = path.join(WEBSITE_DIR, 'static/books');
const OUTPUT_FILE = path.join(STATIC_BOOKS_DIR, `What_a_Civilization_Must_Value${LANGUAGE === 'sv' ? '-sv' : ''}.pdf`);

// ── Cover image ─────────────────────────────────────────────────────────────
function getCoverSvgPath() {
  const base = path.join(WEBSITE_DIR, 'static/resources/book-cover-what-a-civilization-must-value');
  const svgPath = LANGUAGE === 'sv' ? `${base}-sv.svg` : `${base}.svg`;
  if (fs.existsSync(svgPath)) return svgPath;
  return `${base}.svg`;
}

// ── Metadata ─────────────────────────────────────────────────────────────────
const metadata = {
  en: {
    title: 'What a Civilization Must Value',
    subtitle: 'The Governance‑as‑Engineering Answer',
    description: 'A structural argument for the values a civilization must adopt if it wants to remain viable — and an honest account of where the framework stops and other traditions must begin.',
    author: 'Björn Kenneth Holmström',
    date: 'May 2026',
    lang: 'en',
    seriesNote: 'A companion volume to Competent Blindness',
  },
  sv: {
    title: 'Vad en civilisation måste värdera',
    subtitle: 'Styrning‑som‑ingenjörskonst-svaret',
    description: 'Ett strukturellt argument för de värden en civilisation måste anta om den vill förbli livskraftig — och en ärlig redogörelse för var ramverket stannar och andra traditioner måste ta vid.',
    author: 'Björn Kenneth Holmström',
    date: 'Maj 2026',
    lang: 'sv',
    seriesNote: 'En följeslagare till Kompetent Blindhet',
  },
};

const meta = metadata[LANGUAGE];

// ── Section definitions ──────────────────────────────────────────────────────
const sections = [
  { file: 'table-of-contents', titleKey: 'toc', isAppendix: false },
  { file: 'introduction',      titleKey: 'introduction', isAppendix: false },
  { file: 'chapter-1',         titleKey: 'chapter1', isAppendix: false },
  { file: 'chapter-2',         titleKey: 'chapter2', isAppendix: false },
  { file: 'chapter-3',         titleKey: 'chapter3', isAppendix: false },
  { file: 'chapter-4',         titleKey: 'chapter4', isAppendix: false },
  { file: 'chapter-5',         titleKey: 'chapter5', isAppendix: false },
  { file: 'chapter-6',         titleKey: 'chapter6', isAppendix: false },
  { file: 'chapter-7',         titleKey: 'chapter7', isAppendix: false },
  { file: 'conclusion',        titleKey: 'conclusion', isAppendix: false },
  { file: 'references',        titleKey: 'references', isAppendix: true },
  { file: 'glossary',          titleKey: 'glossary', isAppendix: true },
];

// ── Chapter titles by language ───────────────────────────────────────────────
const chapterTitles = {
  en: {
    toc: 'Contents',
    introduction: 'Introduction: The Question the Diagnosis Raises',
    chapter1: '1. The Self‑Defeat Argument',
    chapter2: '2. Truth as Signal Fidelity',
    chapter3: '3. Ecological Integrity as the Boundary Condition',
    chapter4: '4. Love and Connection as Relational Infrastructure',
    chapter5: '5. Meaning — Where the Framework’s Grip Loosens',
    chapter6: '6. The Meta‑Governance Imperative',
    chapter7: '7. The Dimensions the Framework Cannot Name',
    conclusion: 'Conclusion: What the Reader Now Sees',
    references: 'References',
    glossary: 'Glossary',
  },
  sv: {
    toc: 'Innehåll',
    introduction: 'Introduktion: Frågan diagnosen väcker',
    chapter1: '1. Självförlustargumentet',
    chapter2: '2. Sanning som signaltrohet',
    chapter3: '3. Ekologisk integritet som gränsvillkor',
    chapter4: '4. Kärlek och anknytning som relationell infrastruktur',
    chapter5: '5. Mening — där ramverket tappar greppet',
    chapter6: '6. Meta‑styrningsimperativet',
    chapter7: '7. De dimensioner ramverket inte kan namnge',
    conclusion: 'Slutsats: Vad läsaren nu ser',
    references: 'Referenser',
    glossary: 'Ordlista',
  },
};

// ── CSS Styles ───────────────────────────────────────────────────────────────
const pdfStyles = `
<style>
    @page {
        size: A4;
        margin: 2.5cm 2cm;
    }
    @page :first {
        margin: 0;
    }
    @page wide {
        size: A4 landscape;
        margin: 2cm 1.5cm;
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
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .cover-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0;
        padding: 0;
    }
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
        margin: 0.5em 0;
        text-align: justify;
        orphans: 3;
        widows: 3;
    }
    .section-divider { page-break-before: always; }
    .section-gap { height: 2em; }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
        font-size: 10pt;
        page-break-inside: avoid;
    }
    th, td {
        padding: 8px 10px;
        border: 1px solid #ddd;
        text-align: left;
        vertical-align: top;
    }
    th {
        background-color: #f5f5f5;
        font-weight: bold;
        font-size: 9pt;
    }
    .wide-table-page { page: wide; }
    .wide-table-page table { font-size: 7pt; width: 100%; }
    .wide-table-page th,
    .wide-table-page td {
        padding: 4px 6px;
        font-size: 7pt;
        line-height: 1.3;
        word-break: break-word;
        hyphens: auto;
    }
    .wide-table-page th { font-size: 7.5pt; font-weight: bold; }
    code {
        font-family: 'Courier New', monospace;
        background-color: #f5f5f5;
        padding: 2px 4px;
        border-radius: 3px;
        font-size: 10pt;
    }
    pre {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 3px;
        overflow-x: auto;
        page-break-inside: avoid;
    }
    pre code { background-color: transparent; padding: 0; }
    blockquote {
        margin: 1em 2em;
        padding: 0.5em 1em;
        border-left: 4px solid #ccc;
        font-style: italic;
        background-color: #f9f9f9;
    }
    ul, ol { margin: 0.5em 0; padding-left: 2em; }
    li { margin: 0.3em 0; }
    img, svg {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 1em auto;
        page-break-inside: avoid;
    }
    .figure-container { page-break-inside: avoid; margin: 1em 0; }
    .figure { text-align: center; }
    a { color: #0066cc; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .page-break { page-break-before: always; }
    .appendix h1 { border-bottom-color: #999; }
</style>
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
function processMarkdownImages(content) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let processedContent = content;

  for (const match of content.matchAll(imageRegex)) {
    const [fullMatch, altText, imagePath] = match;
    if (imagePath.startsWith('file://') || imagePath.startsWith('http')) continue;

    const possiblePaths = [
      path.join(SECTIONS_DIR, imagePath),
      path.join(WEBSITE_DIR, 'static', imagePath),
    ];

    let foundPath = null;
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) { foundPath = testPath; break; }
    }

    if (foundPath) {
      const fileUri = 'file://' + path.resolve(foundPath).replace(/\\/g, '/');
      processedContent = processedContent.replace(fullMatch, `![${altText}](${fileUri})`);
      console.log(`   ✓ Linked image: ${path.basename(foundPath)}`);
    } else {
      console.warn(`   ⚠️  Image not found: ${imagePath}`);
    }
  }

  return processedContent;
}

function escapeAngleBrackets(content) {
  return content.replace(/(?<!["'=])<(\d)/g, '&lt;$1').replace(/(\d)>(?!["'=])/g, '$1&gt;');
}

function enhanceImageMarkup(content) {
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, altText, imagePath) => `
<div class="figure-container">
  <div class="figure">
    <img src="${imagePath}" alt="${altText}" />
  </div>
</div>
`);
}

function wrapWideTables(content) {
  return content.replace(/<div class="wide">\s*\n\s*([\s\S]*?<table>[\s\S]*?<\/table>[\s\S]*?)\s*<\/div>/g, (_, tableContent) => {
    return `<div class="wide-table-page">\n${tableContent}\n</div>`;
  });
}

// ── Read and combine markdown files ──────────────────────────────────────────
function readMarkdownFiles() {
  console.log(`\n📖 Reading book chapters from: ${SECTIONS_DIR}\n`);

  const contents = [];
  const titles = chapterTitles[LANGUAGE];

  for (const section of sections) {
    const filepath = path.join(SECTIONS_DIR, `${section.file}.md`);

    process.stdout.write(`Reading ${section.file}.md... `);

    if (!fs.existsSync(filepath)) {
      console.warn(`⚠️  Not found, skipping: ${section.file}.md`);
      continue;
    }

    let content = fs.readFileSync(filepath, 'utf-8');
    console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);

    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    content = escapeAngleBrackets(content);
    content = processMarkdownImages(content);

    const title = titles[section.titleKey] || section.file;
    contents.push({ title, content, isAppendix: section.isAppendix });
  }

  console.log(`\n✅ All chapters read successfully (${contents.length} chapters)\n`);
  return contents;
}

// ── Generate HTML ────────────────────────────────────────────────────────────
function generateHTML(sections) {
  console.log('🔨 Converting markdown to HTML...');

  marked.setOptions({ breaks: false, gfm: true, headerIds: true, mangle: false });

  const coverImagePath = getCoverSvgPath();
  const coverImage = fs.existsSync(coverImagePath)
    ? 'file://' + path.resolve(coverImagePath).replace(/\\/g, '/')
    : null;

  let html = `
<!DOCTYPE html>
<html lang="${meta.lang}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  ${pdfStyles}
</head>
<body>
  ${coverImage ? `<div class="cover">
    <img src="${coverImage}" alt="Cover" class="cover-image" />
  </div>` : ''}
`;

  sections.forEach((section, index) => {
    process.stdout.write(`  Converting ${section.title}... `);

    if (index > 0) {
      html += section.isAppendix ? '<div class="section-gap"></div>\n' : '<div class="section-divider"></div>\n';
    }

    const sectionClass = section.isAppendix ? 'appendix' : '';
    html += `<section class="${sectionClass}">\n`;

    const enhancedContent = enhanceImageMarkup(section.content);
    let sectionHtml = marked.parse(enhancedContent);
    sectionHtml = wrapWideTables(sectionHtml);

    html += sectionHtml;
    html += `</section>\n`;

    console.log(`✓ (${(sectionHtml.length / 1024).toFixed(1)} KB)`);
  });

  html += `\n</body>\n</html>\n`;

  console.log(`\n✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
  return html;
}

// ── Generate PDF via Puppeteer ───────────────────────────────────────────────
async function generatePDF(html) {
  console.log('📄 Generating PDF...');

  if (!fs.existsSync(STATIC_BOOKS_DIR)) fs.mkdirSync(STATIC_BOOKS_DIR, { recursive: true });

  const tempHtmlFile = path.join(STATIC_BOOKS_DIR, `temp-${SLUG}-${LANGUAGE}.html`);
  fs.writeFileSync(tempHtmlFile, html);
  const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--allow-file-access-from-files'],
  });

  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(180000);

    console.log('Loading HTML...');
    await page.goto(tempHtmlUri, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 180000 });

    console.log('Generating PDF...');
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      timeout: 180000,
    });

    console.log(`✅ PDF generated: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('❌ Error during PDF generation:', error);
    throw error;
  } finally {
    console.log('Cleaning up...');
    await browser.close();
    if (fs.existsSync(tempHtmlFile)) fs.unlinkSync(tempHtmlFile);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  try {
    console.log(`📚 Starting PDF generation for ${meta.title}\n`);
    console.log(`Language: ${LANGUAGE}`);
    console.log(`Output: ${OUTPUT_FILE}\n`);

    const sections = readMarkdownFiles();
    if (sections.length === 0) {
      console.warn(`⚠️  No chapters found, aborting.`);
      process.exit(1);
    }

    const html = generateHTML(sections);

    if (process.env.DEBUG) {
      const debugFile = path.join(STATIC_BOOKS_DIR, `debug-${SLUG}-${LANGUAGE}.html`);
      fs.writeFileSync(debugFile, html);
      console.log(`Debug HTML saved to: ${debugFile}\n`);
    }

    await generatePDF(html);

    console.log('\n✅ Done!\n');
  } catch (error) {
    console.error('\n❌ Error generating PDF:', error);
    process.exit(1);
  }
}

main();
