#!/usr/bin/env node

/**
 * Generate PDF for The Architecture of Stability whitepaper
 * 
 * Usage: node scripts/generate-architecture-of-stability-pdf.js [language]
 * Example: node scripts/generate-architecture-of-stability-pdf.js en
 * Example: node scripts/generate-architecture-of-stability-pdf.js sv
 * 
 * Requirements:
 * npm install marked puppeteer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const suffix = LANGUAGE === 'en' ? '' : `-${LANGUAGE}`;
const INPUT_DIR = path.join(__dirname, '../src/routes/working-papers/architecture-of-stability/sections');
const OUTPUT_DIR = path.join(__dirname, '../static/whitepapers');
const OUTPUT_FILE = path.join(OUTPUT_DIR, `architecture-of-stability${suffix}.pdf`);
const COVER_IMAGE = path.join(__dirname, '../static/working-papers/images/architecture-of-stability-cover.png');

// Metadata based on language
const metadata = {
	en: {
		title: "The Architecture of Stability",
		subtitle: "A Systems-Theoretic Framework for Power and Governance",
		description: "Integrating control theory, network science, and constitutional design to diagnose governance instability and prescribe fractal subsidiarity as the solution.",
		author: "Björn Kenneth Holmström",
		date: "February 2026",
		url: "https://bjornkennethholmstrom.org/working-papers/architecture-of-stability",
		license: "Creative Commons Attribution-ShareAlike 4.0 International"
	},
	sv: {
		title: "Stabilitetens Arkitektur",
		subtitle: "Ett systemteoretiskt ramverk för makt och styrelseskick",
		description: "Integrering av reglerteori, nätverksvetenskap och konstitutionell design för att diagnostisera styrelseinstabilitet och föreslå fraktal subsidiaritet som lösning.",
		author: "Björn Kenneth Holmström",
		date: "Februari 2026",
		url: "https://bjornkennethholmstrom.org/sv/working-papers/architecture-of-stability",
		license: "Creative Commons Attribution-ShareAlike 4.0 International"
	}
};

const meta = metadata[LANGUAGE];

// Whitepaper sections - these are markdown files
const sections = [
	{ file: 'executive-summary', title: LANGUAGE === 'en' ? 'Executive Summary' : 'Sammanfattning', isAppendix: false },
	{ file: 'part-1', title: LANGUAGE === 'en' ? 'Part I: The Bandwidth Problem' : 'Del I: Bandbreddsproblemet', isAppendix: false },
	{ file: 'part-2', title: LANGUAGE === 'en' ? 'Part II: The Six-Layer Model of Systemic Power' : 'Del II: Sexlagersmodellen för systemisk makt', isAppendix: false },
	{ file: 'part-3', title: LANGUAGE === 'en' ? 'Part III: The Physics of Failure' : 'Del III: Misslyckandets fysik', isAppendix: false },
	{ file: 'part-4', title: LANGUAGE === 'en' ? 'Part IV: The Protocol of Resilience' : 'Del IV: Resiliensprotokollet', isAppendix: false },
	{ file: 'part-5', title: LANGUAGE === 'en' ? 'Part V: The Sweden Prototype' : 'Del V: Sverige som prototyp', isAppendix: false },
	{ file: 'part-6', title: LANGUAGE === 'en' ? 'Part VI: Implications and Generalizations' : 'Del VI: Implikationer och generaliseringar', isAppendix: false },
	{ file: 'part-7', title: LANGUAGE === 'en' ? 'Part VII: Conclusion' : 'Del VII: Slutsats', isAppendix: false },
	{ file: 'appendix-a', title: LANGUAGE === 'en' ? 'Appendix A: Mathematical Formulations' : 'Appendix A: Matematiska formuleringar', isAppendix: true },
	{ file: 'appendix-b', title: LANGUAGE === 'en' ? 'Appendix B: The Fractal Constitution (Full Text)' : 'Appendix B: Den fraktala konstitutionen (fulltext)', isAppendix: true },
	{ file: 'appendix-c', title: LANGUAGE === 'en' ? 'Appendix C: The Insändare (Swedish Original + English Translation)' : 'Appendix C: Insändaren (svensk original + engelsk översättning)', isAppendix: true },
	{ file: 'appendix-d', title: LANGUAGE === 'en' ? 'Appendix D: Glossary of Terms' : 'Appendix D: Ordlista', isAppendix: true },
	{ file: 'appendix-e', title: LANGUAGE === 'en' ? 'Appendix E: Further Reading' : 'Appendix E: Vidare läsning', isAppendix: true }
];

// CSS for PDF styling with academic formatting (keeping the same as before)
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
		@bottom-right {
			content: none;
		}
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
	
	/* Cover page */
	.cover {
		page-break-after: always;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		text-align: center;
		padding: 1cm 2cm;
		margin-top: -0.5cm;
	}
	
	.cover-image {
		width: 100%;
		max-width: 400px;
		margin-bottom: 2em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	}
	
	.cover h1 {
		font-size: 28pt;
		font-weight: bold;
		margin-bottom: 0.5em;
		line-height: 1.2;
		color: #1a1a1a;
	}
	
	.cover .subtitle {
		font-size: 16pt;
		font-style: italic;
		margin-bottom: 1em;
		color: #555;
		line-height: 1.3;
	}
	
	.cover .description {
		font-size: 12pt;
		margin-bottom: 2em;
		color: #666;
		max-width: 600px;
	}
	
	.cover .metadata {
		font-size: 12pt;
		color: #666;
		margin-top: 2em;
		line-height: 1.8;
	}
	
	.cover .url {
		font-size: 9pt;
		color: #888;
		margin-top: 1em;
		font-family: 'Courier New', monospace;
	}
	
	.cover .license {
		font-size: 9pt;
		color: #888;
		margin-top: 0.5em;
		font-style: italic;
	}
	
	/* Typography */
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
		margin-bottom: 0.8em;
		text-align: justify;
		orphans: 3;
		widows: 3;
	}
	
	/* Lists */
	ul, ol {
		margin-bottom: 0.8em;
		padding-left: 1.5em;
	}
	
	li {
		margin-bottom: 0.3em;
	}
	
	ul ul, ol ol, ul ol, ol ul {
		margin-top: 0.3em;
		margin-bottom: 0.3em;
	}
	
	/* Blockquotes */
	blockquote {
		margin: 1em 2em;
		padding: 0.5em 1em;
		border-left: 3px solid #ccc;
		font-style: italic;
		background: #f9f9f9;
		page-break-inside: avoid;
	}
	
	/* Code blocks - for mathematical notation */
	pre {
		background: #f5f5f5;
		border: 1px solid #ddd;
		padding: 0.8em;
		overflow-x: auto;
		font-size: 9pt;
		line-height: 1.4;
		page-break-inside: avoid;
		margin-bottom: 1em;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
	}
	
	code {
		background: #f5f5f5;
		padding: 0.1em 0.3em;
		font-family: 'Courier New', monospace;
		font-size: 9pt;
		border-radius: 2px;
	}
	
	pre code {
		background: none;
		padding: 0;
	}
	
	/* Mathematical expressions */
	.math {
		font-family: 'Times New Roman', serif;
		font-style: italic;
		background: #f9f9f9;
		padding: 0.2em 0.4em;
		border-radius: 3px;
	}
	
	.math-display {
		text-align: center;
		margin: 1.5em 0;
		padding: 0.8em;
		background: #f9f9f9;
		border: 1px solid #eee;
		border-radius: 4px;
		font-family: 'Times New Roman', serif;
		font-size: 12pt;
		overflow-x: auto;
	}
	
	/* Tables */
	table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 1em;
		page-break-inside: avoid;
		font-size: 10pt;
	}
	
	th, td {
		border: 1px solid #ddd;
		padding: 0.5em;
		text-align: left;
		vertical-align: top;
	}
	
	th {
		background: #f5f5f5;
		font-weight: bold;
	}
	
	/* Links */
	a {
		color: #0066cc;
		text-decoration: none;
	}
	
	/* Print URLs after links */
	a[href^="http"]:after {
		content: " (" attr(href) ")";
		font-size: 8pt;
		color: #666;
		word-break: break-all;
	}
	
	/* Don't print URLs for internal links */
	a[href^="#"]:after {
		content: "";
	}
	
	/* Strong emphasis */
	strong {
		font-weight: bold;
		color: #000;
	}
	
	em {
		font-style: italic;
	}
	
	/* Horizontal rules */
	hr {
		border: none;
		border-top: 2px solid #ccc;
		margin: 2em 0;
		page-break-after: avoid;
	}
	
	/* Section dividers */
	.section-divider {
		page-break-before: always;
		margin: 2em 0 1em 0;
	}
	
	/* Appendices styling */
	.appendix h1 {
		font-style: italic;
		color: #444;
	}
	
 /* Diagram styling - UPDATED for better sizing */
 .diagram-container {
	 text-align: center;
	 margin: 1.5em 0;
	 page-break-inside: avoid;
 }

 .diagram {
	 max-width: 100%;
	 height: auto;
	 border: 1px solid #ddd;
	 padding: 0.5em;
	 background: #f9f9f9;
 }

 .diagram-caption {
	 font-size: 10pt;
	 color: #666;
	 margin-top: 0.5em;
	 font-style: italic;
 }

 /* Ensure images don't cause awkward page breaks */
 img, 
 .figure img,
 .cover-image {
	 max-height: 20cm; /* Safely within an A4 page height (29.7cm) */
	 width: auto;
	 max-width: 100%;
	 object-fit: contain;
 }

 /* Figures with captions */
 .figure {
	 page-break-inside: avoid;
	 margin: 1.5em 0;
 }

 /* Ensure images don't cause awkward page breaks */
 img[src*=".png"], 
 img[src*=".jpg"], 
 img[src*=".jpeg"], 
 img[src*=".gif"] {
	 max-height: 80vh; /* Limit height to 80% of viewport */
	 width: auto;
	 max-width: 100%;
	 object-fit: contain;
 }

 /* For very large diagrams, allow them to scale down */
 .large-diagram {
	 max-height: 60vh;
 }

 /* Force page break avoidance for figure+caption pairs */
 .figure-container {
	 page-break-inside: avoid;
	 break-inside: avoid;
 }
	
	/* References */
	.references {
		font-size: 10pt;
		line-height: 1.4;
	}
	
	.references h1 {
		border-bottom: none;
		font-size: 16pt;
	}
	
	.references .reference {
		margin-bottom: 0.5em;
		text-indent: -2em;
		padding-left: 2em;
	}
	
	/* Note boxes */
	.note {
		background: #f0f8ff;
		border-left: 4px solid #4a90e2;
		padding: 1em;
		margin: 1em 0;
		page-break-inside: avoid;
	}
	
	.warning {
		background: #fff8f0;
		border-left: 4px solid #e2a04a;
		padding: 1em;
		margin: 1em 0;
		page-break-inside: avoid;
	}
	
	/* Footnotes */
	.footnote {
		font-size: 9pt;
		color: #666;
		margin-top: 0.5em;
	}
	
	/* Prevent orphans and widows */
	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}
	
	p, li {
		orphans: 3;
		widows: 3;
	}
	
	/* Appendices and back matter */
	.appendix, .acknowledgements, .references {
		page-break-before: always;
	}

 /* Page break control */
 .page-break-before {
	 page-break-before: always;
 }

 .page-break-after {
	 page-break-after: always;
 }

 .page-break-avoid {
	 page-break-inside: avoid;
	 break-inside: avoid;
 }

 /* Keep figures together */
 figure, .figure, .diagram-container {
	 page-break-inside: avoid;
	 break-inside: avoid;
	 margin: 1.5em 0;
 }

 /* Captions should stay with their images */
 .diagram-caption {
	 page-break-before: avoid;
 }
</style>
`;

// Function to process markdown and replace image paths with base64 (SYNCHRONOUS version)
function processMarkdownImagesSync(content) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  
  let match;
  let processedContent = content;
  let foundImages = false;
  
  while ((match = imageRegex.exec(content)) !== null) {
    foundImages = true;
    const [fullMatch, altText, imagePath] = match;
    
    if (imagePath.startsWith('http') || imagePath.startsWith('file:')) {
      continue;
    }
    
    const possiblePaths = [
      path.join(__dirname, '../static', imagePath),
      path.join(__dirname, '../static/working-papers/images', path.basename(imagePath)),
      path.join(__dirname, '../src/routes/working-papers/architecture-of-stability', imagePath),
      path.join(__dirname, '../static', imagePath.replace(/^\//, ''))
    ];
    
    let foundPath = null;
    
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        foundPath = testPath;
        break;
      }
    }
    
    if (foundPath) {
      // Convert to absolute file URI for Puppeteer
      const fileUri = 'file://' + path.resolve(foundPath).replace(/\\/g, '/');
      processedContent = processedContent.replace(fullMatch, `![${altText}](${fileUri})`);
      console.log(`✅ Linked image: ${path.basename(foundPath)}`);
    } else {
      console.warn(`⚠️  Image not found: ${imagePath}`);
    }
  }
  
  return processedContent;
}

// Function to add CSS classes to images based on their dimensions or content
function enhanceImageMarkup(content) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  
  return content.replace(imageRegex, (fullMatch, altText, imagePath) => {
    // We convert the markdown directly to an HTML <img> tag here
    // so the marked parser doesn't get confused by the wrapper divs.
    // removed : <div class="diagram-caption">${altText}</div>
    return `
<div class="figure-container">
  <div class="figure">
    <img src="${imagePath}" alt="${altText}" />
  </div>
</div>
`;
  });
}

// Read and combine markdown files (SYNCHRONOUS version)
function readMarkdownFiles() {
  console.log(`\n📖 Reading whitepaper sections for language: ${LANGUAGE}`);
  console.log(`Input directory: ${INPUT_DIR}\n`);
  
  const contents = [];
  
  for (const section of sections) {
    const filename = LANGUAGE === 'en' ? `${section.file}.md` : `${section.file}-sv.md`;
    const filepath = path.join(INPUT_DIR, filename);
    
    process.stdout.write(`Reading ${filename}... `);
    
    if (!fs.existsSync(filepath)) {
      console.error(`\n❌ File not found: ${filepath}`);
      console.error(`   Make sure you have ${filename} in the sections directory`);
      process.exit(1);
    }
    
    let content = fs.readFileSync(filepath, 'utf-8');
    console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);
    
    // Clean up frontmatter if present
    content = content.replace(/^---\n[\s\S]*?\n---\n/, '');
    
    // Process images in the content (synchronously)
    process.stdout.write(`   Processing images... `);
    content = processMarkdownImagesSync(content);
    
    contents.push({
      title: section.title,
      content: content,
      isAppendix: section.isAppendix
    });
  }
  
  console.log(`\n✅ All sections read successfully\n`);
  return contents;
}

// Convert image to base64 for embedding
function getCoverImageUri() {
  if (fs.existsSync(COVER_IMAGE)) {
    return 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/');
  }
  console.log('📝 Cover image not found, proceeding without it');
  return null;
}

// Generate HTML from markdown
function generateHTML(sections) {
  console.log('🔨 Converting markdown to HTML...');
  
  // Configure marked
  marked.setOptions({
    breaks: false,
    gfm: true
  });
  
  const coverImage = getCoverImageUri();
  
  // Generate cover page
  let html = `
<!DOCTYPE html>
<html lang="${LANGUAGE}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  ${pdfStyles}
</head>
<body>
  <div class="cover">
    ${coverImage ? `<img src="${coverImage}" alt="Cover" class="cover-image" />` : ''}
    <h1>${meta.title}</h1>
    <div class="subtitle">${meta.subtitle}</div>
    <div class="description">${meta.description}</div>
    <div class="metadata">
      <div><strong>${meta.author}</strong></div>
      <div>${meta.date}</div>
      <div class="license">${meta.license}</div>
    </div>
    <div class="url">${meta.url}</div>
  </div>
`;
  
  console.log(`Cover page HTML: ${(html.length / 1024).toFixed(1)} KB`);
  
  // Add each section
  sections.forEach((section, index) => {
    process.stdout.write(`  Processing ${section.title}... `);
    
    // Add page break for major sections
    if (index > 0) {
      html += `\n<div class="section-divider"></div>\n`;
    }
    
    // Add section title
    const sectionClass = section.isAppendix ? 'appendix' : '';
    html += `<section class="${sectionClass}">\n`;
    //html += `<h1>${section.title}</h1>\n`;
    
    // First, enhance the markdown to wrap images
    const enhancedContent = enhanceImageMarkup(section.content);
    const sectionHtml = marked.parse(enhancedContent);
    const sectionSize = (sectionHtml.length / 1024).toFixed(1);
    html += sectionHtml;
    
    html += `</section>\n`;
    
    console.log(`✓ (${sectionSize} KB)`);
  });
  
  html += `
</body>
</html>
`;
  
  console.log(`\n✅ HTML generated successfully (${(html.length / 1024).toFixed(1)} KB total)\n`);
  return html;
}

// Generate PDF using Puppeteer
async function generatePDF(html) {
  console.log('📄 Generating PDF...');
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Write the HTML to a temporary file
  const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-${LANGUAGE}.html`);
  fs.writeFileSync(tempHtmlFile, html);
  const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--allow-file-access-from-files' // Crucial for loading local images
    ]
  });
  
  try {
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(120000); // 2 minutes is plenty now
    
    console.log('Loading HTML file locally...');
    
    // Navigate to the local file instead of using setContent
    await page.goto(tempHtmlUri, { 
      waitUntil: ['domcontentloaded', 'networkidle0'],
      timeout: 120000
    });
    
    console.log('Content loaded, generating PDF...');
    
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;">
          <span style="float: left;">${meta.title}</span>
          <span style="float: right;">${LANGUAGE === 'en' ? 'Whitepaper' : 'Vitbok'}</span>
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 9pt; color: #666; width: 100%; text-align: center; margin: 0 2cm;">
          <span class="pageNumber"></span>
        </div>
      `,
      timeout: 120000
    });
    
    console.log('✅ PDF generated successfully');
    
  } catch (error) {
    console.error('❌ Error during PDF generation:', error);
    throw error;
  } finally {
    console.log('Cleaning up and closing browser...');
    await browser.close();
    // Clean up the temporary HTML file
    if (fs.existsSync(tempHtmlFile)) {
      fs.unlinkSync(tempHtmlFile);
    }
  }
}
// Main execution
async function main() {
  try {
    console.log('📄 Starting PDF generation for Architecture of Stability whitepaper...\n');
    console.log(`Language: ${LANGUAGE}`);
    console.log(`Output: ${OUTPUT_FILE}\n`);
    
    const sections = readMarkdownFiles();
    const html = generateHTML(sections);
    
    // Optionally save HTML for debugging
    if (process.env.DEBUG) {
      const debugFile = path.join(__dirname, '../debug-architecture-html.html');
      fs.writeFileSync(debugFile, html);
      console.log(`Debug HTML saved to: ${debugFile}`);
    }
    
    await generatePDF(html);
  } catch (error) {
    console.error('\n❌ Error generating PDF:', error);
    process.exit(1);
  }
}

main();
