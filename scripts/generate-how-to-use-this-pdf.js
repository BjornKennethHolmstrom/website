#!/usr/bin/env node

/**
 * Generate "How to Use This" PDF for the European Subsidiarity Protocol
 * Usage: node scripts/generate-how-to-use-this.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  outputDir: path.join(__dirname, '../static/pdfs'),
  outputFile: 'eu-subsidiarity-protocol-how-to-use.pdf',
  
  title: 'European Subsidiarity Protocol',
  subtitle: 'A Resource for EPC Programmes',
  version: '1.0',
  date: '26 March 2026',
  author: 'Björn Kenneth Holmström',
  url: 'bjornkennethholmstrom.org/eu-subsidiarity-protocol',
  
  // Markdown content
  content: `# How to Use This

## What This Is

The European Subsidiarity Protocol is a **diagnostic and actuation framework** that makes subsidiarity empirically measurable. It answers a question current governance tools cannot: *For a given policy problem, which level of governance—local, regional, national, or EU—should solve it?*

The framework is fully documented, politically hardened (stress-tested against Commission, ECB, Member States), and deployment-ready. It requires no treaty change and can be tested at zero policy risk through a Parallel Diagnostic Phase.

---

## Why It Matters for EPC's Work

| EPC Programme | Framework Component | How It Applies |
|---------------|---------------------|----------------|
| **Democracy and Institutions** | Global Subsidiarity Index (GSI) + Optimal Governance Tier Matrix | Provides empirical evidence for Yellow Card objections; strengthens Better Regulation and REFIT with measurable subsidiarity diagnostics |
| **Social Europe** | Civic Value Registry + Conditional Service Credits | Makes informal care capacity visible; activates local care resources; reduces pressure on national healthcare budgets |
| **Strategic Foresight / Geopolitics** | Three-layer architecture (Sensor → Brain → Muscle) | Positions the EU as the global leader in adaptive governance—an alternative to U.S. fragmentation and Chinese centralization |

---

## What the Framework Contains

| Component | Function | Status |
|-----------|----------|--------|
| **Full Technical Specification** (v1.2) | Complete architecture, indicators, deployment model | Documented, 40+ pages |
| **Annex A: GSI Framework** | 4 dimensions, 16 indicators, EU-CAF complexity adjustment | Peer-review ready |
| **Annex B: Actuation Layer** | Civic Registry + Conditional Service Credits + ECB-safe design | Pilot-ready |
| **Executive Briefing** (2 pages) | High-level overview for policymakers | Available |
| **Architecture Map** (1 page visual) | System diagram showing three-layer architecture | Available |
| **FAQ** | Answers to likely questions | Available |

---

## How EPC Could Use This

### Option 1: Integrate into Existing Projects

- **Better Regulation / REFIT work:** Use the GSI as a case study in empirical subsidiarity measurement
- **Care policy work:** Use the Civic Registry and CSC as a model for activating informal care capacity
- **Institutional reform work:** Use the framework as a concrete proposal for operationalizing Article 5

### Option 2: Publish a Briefing

EPC publishes a short piece (with me as author or co-author) introducing the framework to a policy audience

I provide the text; EPC provides editing, branding, distribution

### Option 3: Host a Workshop or Roundtable

Bring together Committee of the Regions, Eurocities, national parliamentarians, and Commission officials to discuss the GSI as a tool for subsidiarity implementation

I provide the materials and technical input; EPC convenes the stakeholders

### Option 4: Connect to Partners

If this isn't a fit for EPC's current work, introductions to relevant actors (Committee of the Regions, Eurocities, member state administrations) would be invaluable

---

## What I Can Provide

- **Full documentation** (technical spec, annexes, briefings, maps)
- **Written contributions** (briefings, articles, policy papers)
- **Technical consultation** (by email—I work best in writing)
- **Materials adapted** for different audiences (shorter summaries, translations, presentations)

I am not a public speaker, but I am a thorough writer and systems architect. I can support EPC in any way that plays to these strengths.

---

## Next Steps

If this is of interest, I'm happy to:

1. **Provide the full technical documentation** (if you haven't already received it)
2. **Draft a short piece for EPC's website** in whatever format works
3. **Answer questions by email** about any component of the framework
4. **Discuss how this might fit** into your current programmes

No pressure, no expectation—just an offer of resources if they're useful.

---

**Björn Kenneth Holmström**  
[bjornkennethholmstrom.org/eu-subsidiarity-protocol](http://bjornkennethholmstrom.org/eu-subsidiarity-protocol)`
};

async function main() {
  console.log('\n📄 Generating "How to Use This" PDF...\n');

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    console.log('📁 Created output directory\n');
  }

  // Configure marked for better table rendering
  marked.setOptions({
    breaks: true,
    gfm: true,
    tables: true
  });

  // Parse markdown to HTML
  const parsedContent = await marked.parse(CONFIG.content);
  
  // Build full HTML with professional styling
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${CONFIG.title} — ${CONFIG.subtitle}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #1f2937;
      line-height: 1.6;
      font-size: 11pt;
      margin: 0;
      padding: 0;
    }
    
    /* Cover page */
    .cover-page {
      text-align: center;
      padding: 2em 0;
      margin-top: 3in;
    }
    
    .cover-title {
      font-size: 28pt;
      font-family: 'Georgia', serif;
      font-weight: bold;
      border-bottom: none;
      margin-bottom: 0.25em;
      color: #1e3a8a;
    }
    
    .cover-subtitle {
      font-size: 14pt;
      color: #4b5563;
      margin-bottom: 0.5em;
    }
    
    .cover-version {
      font-size: 11pt;
      color: #6b7280;
      margin-top: 2em;
    }
    
    .cover-date {
      font-size: 10pt;
      color: #6b7280;
    }
    
    .cover-spacer {
      height: 2.5in;
    }
    
    .cover-author {
      font-size: 11pt;
      font-weight: 500;
      margin-bottom: 0.25em;
    }
    
    .cover-url {
      font-size: 9pt;
      color: #1e3a8a;
      text-decoration: none;
    }
    
    /* Content area */
    .content {
      max-width: 100%;
      margin: 0 auto;
    }
    
    /* Typography */
    h1 {
      font-family: 'Georgia', serif;
      font-size: 20pt;
      color: #111827;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 0.2em;
    }
    
    h2 {
      font-family: 'Georgia', serif;
      font-size: 16pt;
      color: #111827;
      margin-top: 1.2em;
      margin-bottom: 0.4em;
    }
    
    h3 {
      font-family: 'Georgia', serif;
      font-size: 13pt;
      color: #111827;
      margin-top: 1em;
      margin-bottom: 0.3em;
    }
    
    p {
      margin-bottom: 1em;
    }
    
    ul, ol {
      margin-bottom: 1em;
      padding-left: 2em;
    }
    
    li {
      margin-bottom: 0.3em;
    }
    
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.2em 0;
      font-size: 10pt;
    }
    
    th, td {
      border: 1px solid #e5e7eb;
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }
    
    th {
      background-color: #f9fafb;
      font-weight: bold;
    }
    
    /* Blockquotes */
    blockquote {
      border-left: 4px solid #1e3a8a;
      margin: 1.2em 0;
      padding: 0.5em 1em;
      background-color: #f9fafb;
      color: #475569;
      font-style: italic;
    }
    
    hr {
      border: 0;
      border-top: 1px solid #e5e7eb;
      margin: 1.5em 0;
    }
    
    /* Code and inline code */
    code {
      background-color: #f1f5f9;
      padding: 0.1em 0.3em;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 9.5pt;
    }
    
    pre {
      background-color: #f1f5f5;
      padding: 1em;
      overflow-x: auto;
      margin: 1em 0;
      border-radius: 4px;
    }
    
    /* Links */
    a {
      color: #1e3a8a;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    /* Page breaks */
    .page-break {
      page-break-before: always;
    }
    
    /* Footer */
    .footer-note {
      margin-top: 2em;
      padding-top: 1em;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      font-size: 8pt;
      color: #6b7280;
    }
  </style>
</head>
<body>

<!-- Cover Page -->
<div class="cover-page">
  <h1 class="cover-title">${CONFIG.title}</h1>
  <p class="cover-subtitle">${CONFIG.subtitle}</p>
  <div class="cover-spacer"></div>
  <p class="cover-version">Version ${CONFIG.version}</p>
  <p class="cover-date">${CONFIG.date}</p>
  <div style="margin-top: 0.5in;"></div>
  <p class="cover-author">${CONFIG.author}</p>
  <p class="cover-url">${CONFIG.url}</p>
</div>

<div class="page-break"></div>

<!-- Content -->
<div class="content">
  ${parsedContent}
</div>

<div class="footer-note">
  <p>${CONFIG.author} — ${CONFIG.url}</p>
  <p>This document is offered as an open resource. All materials available on request.</p>
</div>

</body>
</html>`;

  // Launch browser and generate PDF
  console.log('🚀 Launching headless browser...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  const outputPath = path.join(CONFIG.outputDir, CONFIG.outputFile);
  console.log('🖨️  Rendering PDF...');
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 8pt; color: #6b7280; width: 100%; text-align: right; margin: 0 2cm; font-family: sans-serif;">
        ${CONFIG.title} — ${CONFIG.subtitle}
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 8pt; color: #6b7280; width: 100%; text-align: center; margin: 0 2cm; font-family: sans-serif;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>
    `
  });
  
  await browser.close();
  
  const stats = fs.statSync(outputPath);
  console.log(`\n✅ PDF generated successfully!`);
  console.log(`📁 Location: ${outputPath}`);
  console.log(`📊 Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB\n`);
  
  console.log('📋 Document includes:');
  console.log('   • Cover page with title, subtitle, version, date, author');
  console.log('   • Properly formatted markdown with tables, bold, italics');
  console.log('   • Professional styling with EU blue accents');
  console.log('   • Page numbers and headers on every page\n');
}

main().catch((error) => {
  console.error('\n❌ Error generating PDF:');
  console.error(error);
  process.exit(1);
});
