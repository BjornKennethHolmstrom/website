#!/usr/bin/env node

/**
 * Generate PDFs for Redrawing the Lines (English and Swedish)
 *
 * Usage:
 *   node scripts/generate-redrawing-the-lines-pdf.js          # both languages
 *   node scripts/generate-redrawing-the-lines-pdf.js en       # English only
 *   node scripts/generate-redrawing-the-lines-pdf.js sv       # Swedish only
 *
 * Requirements: npm install marked puppeteer katex
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import katex from 'katex';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Configuration ────────────────────────────────────────────────────────────
const PROJECT_ROOT = path.join(__dirname, '..');
const SECTIONS_DIR = path.join(PROJECT_ROOT, 'src/routes/books/redrawing-the-lines/sections');
const STATIC_BOOKS_DIR = path.join(PROJECT_ROOT, 'static/books');
const COVER_EN = path.join(PROJECT_ROOT, 'static/resources/book-cover-redrawing-the-lines.svg');
const COVER_SV = path.join(PROJECT_ROOT, 'static/resources/book-cover-redrawing-the-lines-sv.svg');

// ── Metadata per language ───────────────────────────────────────────────────
const METADATA = {
  en: {
    title: 'Redrawing the Lines',
    subtitle: 'A field guide to why competent institutions fail, and how to design them to survive their own learning',
    description:
      'A practical design and diagnosis manual for institutional designers, senior public servants, regulators, organisational leaders, and AI‑governance staff.',
    author: 'Björn Kenneth Holmström',
    date: new Date().getFullYear().toString(),
    lang: 'en',
  },
  sv: {
    title: 'Rita om linjerna',
    subtitle:
      'En fälthandbok för varför kompetenta institutioner misslyckas, och hur man utformar dem för att överleva sitt eget lärande',
    description:
      'En praktisk design- och diagnoshandbok för institutionella designers, högre tjänstemän, regulatorer, organisationsledare och AI‑säkerhetspersonal.',
    author: 'Björn Kenneth Holmström',
    date: new Date().getFullYear().toString(),
    lang: 'sv',
  },
};

// ── List of sections (same order as the book) ───────────────────────────────
const SECTIONS = [
  { file: 'frontmatter',   titleEn: 'How to Read This Book',                       titleSv: 'Hur man läser denna bok' },
  { file: 'chapter-01',    titleEn: '1. The Carving Problem',                       titleSv: '1. Inskärningsproblemet' },
  { file: 'chapter-02',    titleEn: '2. The Whispering Gallery and the Immune System', titleSv: '2. Viskgalleriet och immunsystemet' },
  { file: 'chapter-03',    titleEn: '3. Boundaries Are Load‑Bearing',               titleSv: '3. Gränser är bärande' },
  { file: 'chapter-04',    titleEn: '4. Legitimacy Is the Gain on Everything You Do', titleSv: '4. Legitimitet är förstärkningen på allt du gör' },
  { file: 'chapter-05',    titleEn: '5. The Speed Limits of Learning',              titleSv: '5. Inlärningens hastighetsgränser' },
  { file: 'chapter-06',    titleEn: '6. Success Launders Evidence',                 titleSv: '6. Framgång tvättar bevis' },
  { file: 'chapter-07',    titleEn: '7. The Entanglement Speed Limit',             titleSv: '7. Sammanflätningens hastighetsgräns' },
  { file: 'chapter-08',    titleEn: '8. The Certification Floor',                  titleSv: '8. Certifieringsgolvet' },
  { file: 'chapter-09',    titleEn: '9. The Diagnostic Sequence',                   titleSv: '9. Den diagnostiska sekvensen' },
  { file: 'chapter-10',    titleEn: '10. The Design Principles, Consolidated',      titleSv: '10. Designprinciperna, samlade' },
  { file: 'chapter-11',    titleEn: '11. What This Book Does Not Claim',            titleSv: '11. Vad denna bok inte påstår' },
  { file: 'appendix-a',    titleEn: 'Appendix A: Glossary and Term Map',            titleSv: 'Bilaga A: Ordlista och termkarta' },
  { file: 'appendix-b',    titleEn: 'Appendix B: The Tools',                        titleSv: 'Bilaga B: Verktygen' },
  { file: 'appendix-c',    titleEn: 'Appendix C: Paper Map and Further Reading',    titleSv: 'Bilaga C: Artikelkarta och vidare läsning' },
];

// ── CSS for the PDF (book‑style, with KaTeX support) ───────────────────────
const PDF_STYLES = `
<style>
  @page {
    size: A4;
    margin: 2.5cm 2cm;
  }
  @page :first {
    margin: 0;  /* cover fills the page */
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

  /* ── Cover ─────────────────────────────────────────── */
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

  /* ── Typography ────────────────────────────────────── */
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
  h2 { font-size: 16pt; font-weight: bold; margin-top: 1.2em; margin-bottom: 0.5em; page-break-after: avoid; color: #2c2c2c; }
  h3 { font-size: 14pt; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; page-break-after: avoid; color: #333; }
  h4 { font-size: 12pt; font-weight: bold; margin-top: 0.8em; margin-bottom: 0.5em; page-break-after: avoid; font-style: italic; }
  p { margin: 0.5em 0; text-align: justify; orphans: 3; widows: 3; }
  ul, ol { margin: 0.5em 0; padding-left: 2em; }
  li { margin: 0.3em 0; }
  blockquote {
    margin: 1em 2em;
    padding: 0.5em 1em;
    border-left: 4px solid #ccc;
    font-style: italic;
    background-color: #f9f9f9;
  }
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
  th { background-color: #f5f5f5; font-weight: bold; font-size: 9pt; }
  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em auto;
    page-break-inside: avoid;
  }
  a { color: #0066cc; text-decoration: none; }
  a:hover { text-decoration: underline; }

  .section-divider { page-break-before: always; }
  .appendix h1 { border-bottom-color: #999; }
</style>
`;

// ── Image processing (find images and convert to file:// URIs) ───────────
function processMarkdownImages(content, sectionsDir) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let processed = content;
  for (const match of [...content.matchAll(imageRegex)]) {
    const [fullMatch, altText, imagePath] = match;
    if (imagePath.startsWith('file://') || imagePath.startsWith('http')) continue;

    const possiblePaths = [
      path.join(sectionsDir, imagePath),
      path.join(sectionsDir, '..', imagePath),
      path.join(sectionsDir, 'images', imagePath),
      path.join(PROJECT_ROOT, 'static', imagePath),
    ];
    let found = null;
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) { found = p; break; }
    }
    if (found) {
      const uri = 'file://' + path.resolve(found).replace(/\\/g, '/');
      processed = processed.replace(fullMatch, `![${altText}](${uri})`);
      console.log(`   ✓ Linked image: ${path.basename(found)}`);
    } else {
      console.warn(`   ⚠️  Image not found: ${imagePath}`);
    }
  }
  return processed;
}

// ── LaTeX pre‑rendering with KaTeX ──────────────────────────────────────
function preRenderMath(mdContent) {
  const blocks = [];
  let processed = mdContent;

  // Display math: $$...$$ and \[...\]
  processed = processed.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
    const tex = (tex1 ?? tex2 ?? '').trim();
    try {
      const rendered = katex.renderToString(tex, { displayMode: true, throwOnError: false });
      blocks.push(rendered);
      return `%%MATH${blocks.length - 1}%%`;
    } catch (e) {
      console.warn('KaTeX display error:', e);
      blocks.push(match);
      return `%%MATH${blocks.length - 1}%%`;
    }
  });

  // Inline math: $...$ and \(...\)
  processed = processed.replace(/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g, (match, tex1, tex2) => {
    const tex = (tex1 ?? tex2 ?? '').trim();
    try {
      const rendered = katex.renderToString(tex, { displayMode: false, throwOnError: false });
      blocks.push(rendered);
      return `%%MATH${blocks.length - 1}%%`;
    } catch (e) {
      console.warn('KaTeX inline error:', e);
      blocks.push(match);
      return `%%MATH${blocks.length - 1}%%`;
    }
  });

  return { processed, blocks };
}

function restoreMath(html, blocks) {
  return html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');
}

// ── Read and combine Markdown sections ─────────────────────────────────
function readSections(lang) {
  const suffix = lang === 'sv' ? '.sv.md' : '.md';
  console.log(`\n📖 Reading sections for ${lang.toUpperCase()} from: ${SECTIONS_DIR}\n`);
  const contents = [];

  for (const section of SECTIONS) {
    const filename = `${section.file}${suffix}`;
    const filepath = path.join(SECTIONS_DIR, filename);
    process.stdout.write(`Reading ${filename}... `);

    if (!fs.existsSync(filepath)) {
      console.warn(`⚠️  Not found, skipping`);
      continue;
    }

    let content = fs.readFileSync(filepath, 'utf-8');
    console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);

    // Strip YAML frontmatter if present
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

    // Process images
    content = processMarkdownImages(content, SECTIONS_DIR);

    const title = lang === 'en' ? section.titleEn : section.titleSv;
    contents.push({ title, content });
  }

  console.log(`\n✅ ${contents.length} sections loaded\n`);
  return contents;
}

// ── Build full HTML document ────────────────────────────────────────────
function buildHTML(lang, sections) {
  const meta = METADATA[lang];
  const coverPath = lang === 'sv' ? COVER_SV : COVER_EN;
  let coverUri = null;
  if (fs.existsSync(coverPath)) {
    coverUri = 'file://' + path.resolve(coverPath).replace(/\\/g, '/');
    console.log(`📷 Using cover image for ${lang}`);
  } else {
    console.warn('⚠️  Cover image not found, proceeding without it');
  }

  const katexCssUri = 'file://' + path.resolve(path.join(PROJECT_ROOT, 'node_modules/katex/dist/katex.min.css')).replace(/\\/g, '/');

  console.log('🔨 Converting Markdown to HTML (with KaTeX)...');
  marked.setOptions({ breaks: false, gfm: true });

  let html = `<!DOCTYPE html>
<html lang="${meta.lang}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  <link rel="stylesheet" href="${katexCssUri}" />
  ${PDF_STYLES}
</head>
<body>
`;

  // Cover
  if (coverUri) {
    html += `<div class="cover">
  <img src="${coverUri}" alt="Cover" class="cover-image" />
</div>`;
  }

  // Sections
  sections.forEach((section, index) => {
    if (index > 0) html += `<div class="section-divider"></div>\n`;
    html += `<section>`;

    // Pre‑render LaTeX, then Markdown → HTML, then restore LaTeX HTML
    const { processed, blocks } = preRenderMath(section.content);
    let rawHtml = marked.parse(processed);
    rawHtml = restoreMath(rawHtml, blocks);
    html += rawHtml;
    html += `</section>`;
    console.log(`   ${section.title} → HTML (${(rawHtml.length / 1024).toFixed(1)} KB)`);
  });

  html += `\n</body>\n</html>`;
  console.log(`\n✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
  return html;
}

// ── Generate PDF using Puppeteer ────────────────────────────────────────
async function generatePDF(lang, html) {
  const meta = METADATA[lang];
  const outputFile = path.join(
    STATIC_BOOKS_DIR,
    lang === 'sv' ? 'Redrawing_the_Lines_sv.pdf' : 'Redrawing_the_Lines.pdf'
  );
  console.log(`📄 Generating PDF: ${path.basename(outputFile)}`);

  if (!fs.existsSync(STATIC_BOOKS_DIR)) {
    fs.mkdirSync(STATIC_BOOKS_DIR, { recursive: true });
  }

  const tempHtmlFile = path.join(STATIC_BOOKS_DIR, `temp-redrawing-${lang}.html`);
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
    console.error(`❌ Error generating ${lang} PDF:`, error);
    throw error;
  } finally {
    console.log('Cleaning up...');
    await browser.close();
    if (fs.existsSync(tempHtmlFile)) {
      fs.unlinkSync(tempHtmlFile);
    }
  }
}

// ── Main entry point ─────────────────────────────────────────────────────
async function main() {
  const targetLang = process.argv[2]; // optional 'en' or 'sv'
  const languages = targetLang
    ? [targetLang]
    : ['en', 'sv'];

  console.log('📚 Starting PDF generation for Redrawing the Lines\n');

  for (const lang of languages) {
    if (!['en', 'sv'].includes(lang)) {
      console.error(`Invalid language: ${lang}. Use 'en' or 'sv'.`);
      continue;
    }
    console.log(`\n━━━ ${lang.toUpperCase()} ━━━`);
    const sections = readSections(lang);
    if (sections.length === 0) {
      console.warn(`⚠️  No sections found for ${lang}, skipping.`);
      continue;
    }
    const html = buildHTML(lang, sections);

    // Optional: write debug HTML if DEBUG env variable is set
    if (process.env.DEBUG) {
      const debugFile = path.join(STATIC_BOOKS_DIR, `debug-redrawing-${lang}.html`);
      fs.writeFileSync(debugFile, html);
      console.log(`Debug HTML saved to: ${debugFile}\n`);
    }

    await generatePDF(lang, html);
  }

  console.log('\n✅ All PDFs generated successfully!\n');
}

main();
