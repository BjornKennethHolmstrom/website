#!/usr/bin/env node

/**
 * Generate PDFs for the eight short Clouded Mirror syntheses
 *
 * Usage: node scripts/generate-synthesis-pdfs.js
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
const SYNTHESES_DIR = path.join(__dirname, '../src/lib/content/syntheses');
const OUTPUT_DIR   = path.join(__dirname, '../static/syntheses');

// ── Metadata for the eight syntheses ─────────────────────────────────────────
const syntheses = [
  {
    slug: 'we-see-you',
    title: 'We See You',
    subtitle: 'For those who have no energy left for theories',
    description: 'The foundation of all governance is the body, the breath, the safety of a place to sleep.',
    audience: 'For those who are tired, hungry, scared, or just need to hear that someone sees them.',
    file: 'we-see-you.md',
  },
  {
    slug: 'the-spirits-the-state-cannot-hear',
    title: 'The Spirits the State Cannot Hear',
    subtitle: 'Why Ancestral Governance Is Not the Past—It Is the Missing Dimension of Our Future',
    description: 'An offering from the edge of the framework to the keepers of the old ways.',
    audience: 'For keepers of ancestral traditions and those who know the land is alive.',
    file: 'the-spirits-the-state-cannot-hear.md',
  },
  {
    slug: 'the-dashboard-was-green',
    title: 'The Dashboard Was Green',
    subtitle: 'Why Ecological Governance Keeps Failing—and What Would Actually Work',
    description: 'A synthesis for the climate, ecological, and global governance community.',
    audience: 'For climate activists, ecologists, planetary thinkers, and bioregional organizers.',
    file: 'the-dashboard-was-green.md',
  },
  {
    slug: 'the-blindness-of-power',
    title: 'The Blindness of Power',
    subtitle: 'Why Control-Obsessed Governance Fails—and What It Means for Every Regime',
    description: 'A global synthesis on the structural limits of authoritarian, populist, and strongman governance.',
    audience: 'For geopolitical analysts, democracy advocates, and those watching the rise of authoritarian governance.',
    file: 'the-blindness-of-power.md',
  },
  {
    slug: 'the-democracy-that-cant-hear-you',
    title: 'The Democracy That Can’t Hear You',
    subtitle: 'Why Representation Chains Break the Signal They’re Meant to Transmit',
    description: 'A synthesis for the democratic reform community, framing deliberative democracy as an engineering solution to a signal‑fidelity problem.',
    audience: 'For democratic reformers, participatory budgeting advocates, and deliberative practitioners.',
    file: "the-democracy-that-cant-hear-you.md",
  },
  {
    slug: 'from-goodhart-to-governance',
    title: 'From Goodhart to Governance',
    subtitle: 'Why AI Needs a Theory of Institutional Blindness',
    description: 'A synthesis for the AI and tech community, translating the Variety Gap framework into the language of reward misspecification.',
    audience: 'For AI safety researchers, alignment thinkers, and tech governance practitioners.',
    file: 'from-goodhart-to-governance.md',
  },
  {
    slug: 'the-perception-threshold',
    title: 'The Perception Threshold',
    subtitle: 'Why Civilisational Transitions Are Always About What We Can See—and What That Means for This One',
    description: 'A synthesis for systems thinkers, integral practitioners, and evolutionary designers.',
    audience: 'For systems thinkers, integral practitioners, metamodern explorers, and evolutionary designers.',
    file: 'the-perception-threshold.md',
  },
  {
    slug: 'the-mirror-of-the-earth',
    title: 'The Mirror of the Earth',
    subtitle: 'Why the Planet Is Speaking and Our Institutions Cannot Hear It',
    description: 'A synthesis for planetary thinkers, deep ecologists, and the emerging Earth community.',
    audience: 'For planetary thinkers, deep ecologists, indigenous knowledge holders, and Gaia theorists.',
    file: 'the-mirror-of-the-earth.md',
  },
];

// ── CSS (clean, plain, no cover images) ──────────────────────────────────────
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
  code { background: #f5f5f5; padding: 0.1em 0.3em; font-family: 'Courier New', monospace; font-size: 9pt; border-radius: 2px; }
  pre { background: #f5f5f5; border: 1px solid #ddd; padding: 0.8em; overflow-x: auto; font-size: 9pt; line-height: 1.4; page-break-inside: avoid; }
  a { color: #0066cc; text-decoration: none; }
  a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 8pt; color: #666; }
  img { max-width: 100%; max-height: 20cm; }
  figure { page-break-inside: avoid; }
</style>
`;

// ── Generate one PDF ─────────────────────────────────────────────────────────
async function generateSynthesisPDF(meta) {
  const inputFile = path.join(SYNTHESES_DIR, meta.file);
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ File not found: ${inputFile}`);
    return;
  }

  let content = fs.readFileSync(inputFile, 'utf-8');
  // Remove any frontmatter if present
  content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Enhance image paths (if any) – for now just pass through
  // (you can add image processing later if needed)
  const htmlContent = marked.parse(content);

  const coverHtml = `
    <div class="cover">
      <h1>${meta.title}</h1>
      <div class="subtitle">${meta.subtitle}</div>
      <div class="description">${meta.description}</div>
      <div class="metadata">
        <div><strong>Björn Kenneth Holmström</strong></div>
        <div>June 2026</div>
        <div class="license">Creative Commons Attribution-ShareAlike 4.0 International</div>
        <div class="type">The Clouded Mirror · Reader's Guide</div>
      </div>
      <div class="url">https://bjornkennethholmstrom.org/syntheses/${meta.slug}</div>
    </div>
  `;

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  ${pdfStyles}
</head>
<body>
  ${coverHtml}
  ${htmlContent}
</body>
</html>`;

  const tempHtmlPath = path.join(OUTPUT_DIR, `temp-${meta.slug}.html`);
  const pdfOutputPath = path.join(OUTPUT_DIR, `${meta.slug}.pdf`);

  fs.writeFileSync(tempHtmlPath, fullHtml);
  const tempUri = 'file://' + path.resolve(tempHtmlPath).replace(/\\/g, '/');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--allow-file-access-from-files']
  });

  try {
    const page = await browser.newPage();
    await page.goto(tempUri, { waitUntil: ['domcontentloaded', 'networkidle0'], timeout: 120000 });
    await page.pdf({
      path: pdfOutputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
      displayHeaderFooter: true,
      headerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;"><span style="float: left;">${meta.title}</span><span style="float: right;">The Clouded Mirror</span></div>`,
      footerTemplate: `<div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;"><span class="pageNumber"></span></div>`,
      timeout: 120000
    });
    console.log(`✅ PDF generated: ${pdfOutputPath}`);
  } catch (err) {
    console.error(`❌ Failed to generate PDF for ${meta.slug}:`, err);
  } finally {
    await browser.close();
    if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const meta of syntheses) {
    console.log(`📄 Generating "${meta.title}"...`);
    await generateSynthesisPDF(meta);
  }
  console.log('\n✨ All synthesis PDFs generated.');
}

main();
