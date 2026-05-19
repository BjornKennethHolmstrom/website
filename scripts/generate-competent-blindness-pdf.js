#!/usr/bin/env node

/**
 * Generate PDFs for Competent Blindness book (English and Swedish)
 *
 * Usage: node scripts/generate-competent-blindness-pdf.js
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

// ── Paths (relative to /scripts) ─────────────────────────────────────────────
const WEBSITE_DIR = path.join(__dirname, '..');
const SECTIONS_BASE = path.join(WEBSITE_DIR, 'src/routes/books/competent-blindness/sections');
const STATIC_BOOKS_DIR = path.join(WEBSITE_DIR, 'static/books');
function getCoverSvgPath(lang) {
  if (lang === 'sv') {
    const svgPath = path.join(WEBSITE_DIR, 'static/resources/book-cover-competent-blindness-sv.svg');
    if (fs.existsSync(svgPath)) return svgPath;
  }
  return path.join(WEBSITE_DIR, 'static/resources/book-cover-competent-blindness.svg');
}

// ── Language configurations ──────────────────────────────────────────────────
const LANGUAGES = [
  {
    lang: 'en',
    sectionsDir: path.join(SECTIONS_BASE, 'en'),
    outputFile: path.join(STATIC_BOOKS_DIR, 'Competent_Blindness.pdf'),
    metadata: {
      title: 'Competent Blindness',
      subtitle:
        'How Successful Institutions Lose Sight of the World They Govern—and What Must Be Built Instead',
      author: 'Björn Kenneth Holmström',
      date: new Date().getFullYear().toString(),
      lang: 'en',
    },
  },
  {
    lang: 'sv',
    sectionsDir: path.join(SECTIONS_BASE, 'sv'),
    outputFile: path.join(STATIC_BOOKS_DIR, 'Kompetent_Blindhet.pdf'),
    metadata: {
      title: 'Kompetent Blindhet',
      subtitle:
        'Hur framgångsrika institutioner tappar kontakten med världen de styr—och vad som måste byggas istället',
      author: 'Björn Kenneth Holmström',
      date: new Date().getFullYear().toString(),
      lang: 'sv',
    },
  },
];

// ── Chapter definitions (filenames shared across languages) ───────────────────
const chapters = [
  { file: 'table-of-contents.md', titleKey: 'toc', isAppendix: false },
  { file: 'introduction.md', titleKey: 'introduction', isAppendix: false },
  { file: 'chapter-01.md', titleKey: 'chapter01', isAppendix: false },
  { file: 'chapter-02.md', titleKey: 'chapter02', isAppendix: false },
  { file: 'chapter-03.md', titleKey: 'chapter03', isAppendix: false },
  { file: 'chapter-04.md', titleKey: 'chapter04', isAppendix: false },
  { file: 'chapter-05.md', titleKey: 'chapter05', isAppendix: false },
  { file: 'chapter-06.md', titleKey: 'chapter06', isAppendix: false },
  { file: 'chapter-07.md', titleKey: 'chapter07', isAppendix: false },
  { file: 'chapter-08.md', titleKey: 'chapter08', isAppendix: false },
  { file: 'chapter-09.md', titleKey: 'chapter09', isAppendix: false },
  { file: 'chapter-10.md', titleKey: 'chapter10', isAppendix: false },
  { file: 'chapter-11.md', titleKey: 'chapter11', isAppendix: false },
  { file: 'chapter-12.md', titleKey: 'chapter12', isAppendix: false },
  { file: 'chapter-13.md', titleKey: 'chapter13', isAppendix: false },
  { file: 'chapter-14.md', titleKey: 'chapter14', isAppendix: false },
  { file: 'chapter-15.md', titleKey: 'chapter15', isAppendix: false },
  { file: 'chapter-16.md', titleKey: 'chapter16', isAppendix: false },
  { file: 'chapter-17.md', titleKey: 'chapter17', isAppendix: false },
  { file: 'chapter-18.md', titleKey: 'chapter18', isAppendix: false },
  { file: 'chapter-19.md', titleKey: 'chapter19', isAppendix: false },
  { file: 'conclusion.md', titleKey: 'conclusion', isAppendix: false },
  { file: 'appendix-a.md', titleKey: 'appendixA', isAppendix: true },
  { file: 'appendix-b.md', titleKey: 'appendixB', isAppendix: true },
  { file: 'appendix-c.md', titleKey: 'appendixC', isAppendix: true },
  { file: 'appendix-d.md', titleKey: 'appendixD', isAppendix: true },
  { file: 'appendix-e.md', titleKey: 'appendixE', isAppendix: true },
  { file: 'appendix-f.md', titleKey: 'appendixF', isAppendix: true },
];

// ── Chapter titles by language ───────────────────────────────────────────────
const chapterTitles = {
  en: {
    toc: 'Contents',
    introduction: 'Introduction: The Day the Dashboard Still Looked Green',
    chapter01: '1. The Competence Trap',
    chapter02: '2. The World Became More Complex Than Our Institutions',
    chapter03: '3. The Variety Gap',
    chapter04: '4. Why Smart People Cannot See the Failure',
    chapter05: '5. Observation Channels',
    chapter06: '6. The Immune System',
    chapter07: '7. Resolution Lock‑In',
    chapter08: '8. The Compounding Failure Tax, and Why It Is Structural',
    chapter09: '9. AI Labs and the Coherence–Velocity Trap',
    chapter10: '10. Hospitals and the Clinical Observability Gap',
    chapter11: '11. Universities and the Integration Deficit',
    chapter12: '12. Courts and the Adjudication–Governance Gap',
    chapter13: '13. Central Banks and the Monetary Variety Gap',
    chapter14: '14. Democracies, Authoritarianism, and the Feedback Problem',
    chapter15: '15. The Shadow Systems Already Emerging',
    chapter16: '16. Adaptive Coherence',
    chapter17: '17. The Logic of Structural Constraints',
    chapter18: '18. Multi‑Scale Adaptive Governance',
    chapter19: '19. The Civilisational Threshold',
    conclusion: 'Conclusion: The Future Can Still Be Perceived',
    appendixA: 'Appendix A: The Eight Structural Primitives',
    appendixB: 'Appendix B: The Immune System Taxonomy',
    appendixC: 'Appendix C: The Resolution Lock‑In Table',
    appendixD: 'Appendix D: The Series Coherence Table',
    appendixE: 'Appendix E: The Logic of Structural Constraints',
    appendixF: 'Appendix F: Stable Glossary',
  },
  sv: {
    toc: 'Innehåll',
    introduction: 'Introduktion: Dagen då instrumentpanelen fortfarande var grön',
    chapter01: '1. Kompetensfällan',
    chapter02: '2. Världen blev mer komplex än våra institutioner',
    chapter03: '3. Varietetsgapet',
    chapter04: '4. Varför smarta människor inte kan se misslyckandet',
    chapter05: '5. Observationskanaler',
    chapter06: '6. Immunsystemet',
    chapter07: '7. Upplösningslåsning',
    chapter08: '8. Samordningsmisslyckandets skatt, och varför den är strukturell',
    chapter09: '9. AI-labb och koherens–hastighetsfällan',
    chapter10: '10. Sjukhus och det kliniska observerbarhetsgapet',
    chapter11: '11. Universitet och integrationsunderskottet',
    chapter12: '12. Domstolar och styrningsgapet',
    chapter13: '13. Centralbanker och det penningpolitiska varietetsgapet',
    chapter14: '14. Demokratier, auktoritära stater och återkopplingsproblemet',
    chapter15: '15. Skuggsystemen som redan växer fram',
    chapter16: '16. Adaptiv koherens',
    chapter17: '17. De strukturella begränsningarnas logik',
    chapter18: '18. Flerskalig adaptiv styrning',
    chapter19: '19. Den civilisatoriska tröskeln',
    conclusion: 'Slutsats: Framtiden kan fortfarande uppfattas',
    appendixA: 'Bilaga A: De åtta strukturella primitiverna',
    appendixB: 'Bilaga B: Immunsystemets taxonomi',
    appendixC: 'Bilaga C: Upplösningslåsningstabellen',
    appendixD: 'Bilaga D: Seriens koherenstabell',
    appendixE: 'Bilaga E: De strukturella begränsningarnas logik',
    appendixF: 'Bilaga F: Stabil ordlista',
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

// ── Process markdown images to use file:// URIs ──────────────────────────────
function processMarkdownImages(content, sectionsDir) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let processedContent = content;

  const matches = [...content.matchAll(imageRegex)];

  for (const match of matches) {
    const [fullMatch, altText, imagePath] = match;

    if (imagePath.startsWith('file://') || imagePath.startsWith('http')) continue;

    const possiblePaths = [
      path.join(sectionsDir, imagePath),
      path.join(sectionsDir, '..', imagePath),
      path.join(sectionsDir, 'images', imagePath),
      path.join(WEBSITE_DIR, 'static', imagePath),
    ];

    let foundPath = null;
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        foundPath = testPath;
        break;
      }
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

// ── Wrap wide tables ─────────────────────────────────────────────────────────
function wrapWideTables(content) {
  const wideTableRegex =
    /<div class="wide">\s*\n\s*([\s\S]*?<table>[\s\S]*?<\/table>[\s\S]*?)\s*<\/div>/g;
  return content.replace(wideTableRegex, (match, tableContent) => {
    return `<div class="wide-table-page">\n${tableContent}\n</div>`;
  });
}

// ── Enhance image markup ─────────────────────────────────────────────────────
function enhanceImageMarkup(content) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  return content.replace(imageRegex, (fullMatch, altText, imagePath) => {
    const maxWidth = imagePath.toLowerCase().endsWith('.svg') ? 'max-width: 90%;' : '';
    return `
<div class="figure-container">
  <div class="figure">
    <img src="${imagePath}" alt="${altText}" style="${maxWidth}" />
  </div>
</div>`;
  });
}

// ── Escape angle brackets in non-code text ──────────────────────────────────
function escapeAngleBrackets(content) {
  // Escape < and > that aren't part of HTML tags or markdown
  // Look for patterns like SNR < 1 or f_max > 0
  return content.replace(/(?<!["'=])<(\d)/g, '&lt;$1').replace(/(\d)>(?!["'=])/g, '$1&gt;');
}

// ── Read and combine markdown files ──────────────────────────────────────────
function readMarkdownFiles(langConfig) {
  const sectionsDir = langConfig.sectionsDir;
  console.log(`\n📖 Reading chapters from: ${sectionsDir}\n`);

  const contents = [];
  const titles = chapterTitles[langConfig.lang];

  for (const chapter of chapters) {
    const filepath = path.join(sectionsDir, chapter.file);

    process.stdout.write(`Reading ${chapter.file}... `);

    if (!fs.existsSync(filepath)) {
      console.warn(`⚠️  Not found, skipping: ${chapter.file}`);
      continue;
    }

    let content = fs.readFileSync(filepath, 'utf-8');
    console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);

    // Remove frontmatter
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

    // Escape angle brackets in mathematical comparisons
    content = escapeAngleBrackets(content);

    // Process images
    content = processMarkdownImages(content, sectionsDir);

    const title = titles[chapter.titleKey] || chapter.file;
    contents.push({
      title,
      content,
      isAppendix: chapter.isAppendix,
    });
  }

  console.log(`\n✅ All chapters read successfully (${contents.length} chapters)\n`);
  return contents;
}

// ── Get cover image URI ──────────────────────────────────────────────────────
function getCoverImageUri(lang) {
  const svgPath = getCoverSvgPath(lang);
  if (fs.existsSync(svgPath)) {
    console.log(`📷 Using cover for ${lang}`);
    return 'file://' + path.resolve(svgPath).replace(/\\/g, '/');
  }
  console.log('📝 No cover image found');
  return null;
}

// ── Generate HTML ────────────────────────────────────────────────────────────
function generateHTML(sections, langConfig) {
  const metadata = langConfig.metadata;
  console.log('🔨 Converting markdown to HTML...');

  marked.setOptions({
    breaks: false,
    gfm: true,
    headerIds: true,
    mangle: false,
  });

  const coverImage = getCoverImageUri(langConfig.lang);

  let html = `
<!DOCTYPE html>
<html lang="${metadata.lang}">
<head>
  <meta charset="UTF-8">
  <title>${metadata.title}</title>
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
      const dividerClass = section.isAppendix ? 'section-gap' : 'section-divider';
      html += `<div class="${dividerClass}"></div>\n`;
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
async function generatePDF(html, outputFile, langConfig) {
  const metadata = langConfig.metadata;
  console.log(`📄 Generating PDF: ${path.basename(outputFile)}...`);

  if (!fs.existsSync(STATIC_BOOKS_DIR)) {
    fs.mkdirSync(STATIC_BOOKS_DIR, { recursive: true });
  }

  const tempHtmlFile = path.join(STATIC_BOOKS_DIR, `temp-${metadata.lang}-render.html`);
  fs.writeFileSync(tempHtmlFile, html);
  const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--allow-file-access-from-files',
    ],
  });

  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(180000);

    console.log('Loading HTML...');
    await page.goto(tempHtmlUri, {
      waitUntil: ['domcontentloaded', 'networkidle0'],
      timeout: 180000,
    });

    console.log('Generating PDF...');
    await page.pdf({
      path: outputFile,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      timeout: 180000,
    });

    console.log(`✅ PDF generated: ${outputFile}`);
  } catch (error) {
    console.error(`❌ Error generating ${metadata.lang} PDF:`, error);
    throw error;
  } finally {
    console.log('Cleaning up...');
    await browser.close();
    if (fs.existsSync(tempHtmlFile)) {
      fs.unlinkSync(tempHtmlFile);
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  try {
    console.log('📚 Starting PDF generation for Competent Blindness / Kompetent Blindhet\n');

    for (const langConfig of LANGUAGES) {
      console.log(`\n━━━ ${langConfig.lang.toUpperCase()} ━━━`);

      const sections = readMarkdownFiles(langConfig);
      if (sections.length === 0) {
        console.warn(`⚠️  No chapters found for ${langConfig.lang}, skipping.`);
        continue;
      }

      const html = generateHTML(sections, langConfig);

      if (process.env.DEBUG) {
        const debugFile = path.join(STATIC_BOOKS_DIR, `debug-book-${langConfig.lang}.html`);
        fs.writeFileSync(debugFile, html);
        console.log(`Debug HTML saved to: ${debugFile}\n`);
      }

      await generatePDF(html, langConfig.outputFile, langConfig);
    }

    console.log('\n✅ All done!\n');
  } catch (error) {
    console.error('\n❌ Error generating PDF:', error);
    process.exit(1);
  }
}

main();
