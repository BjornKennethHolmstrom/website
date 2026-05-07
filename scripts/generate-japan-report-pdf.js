#!/usr/bin/env node

/**
 * Generate PDF for the Japan Continuity Trap report
 * 
 * Usage: node scripts/generate-japan-report-pdf.js [language]
 * Example: node scripts/generate-japan-report-pdf.js en
 * Example: node scripts/generate-japan-report-pdf.js ja
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

// ── Configuration ────────────────────────────────────────────────────────────
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'ja'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
    console.error(`Invalid language: ${LANGUAGE}`);
    console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
    process.exit(1);
}

const REPORT_SLUG = 'japan-continuity-trap';
const INPUT_DIR = path.join(__dirname, `../src/routes/reports/${REPORT_SLUG}/sections`);
const OUTPUT_DIR = path.join(__dirname, `../static/reports`);
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${REPORT_SLUG}-${LANGUAGE}.pdf`);
const COVER_IMAGE = path.join(__dirname, `../static/images/reports/${REPORT_SLUG}/cover.png`);

// ── Metadata ─────────────────────────────────────────────────────────────────
const metadata = {
    en: {
        title: "The Continuity Trap",
        subtitle: "A field guide to the Pressure–Accommodate–Preserve–Defer Loop — and how the world’s most coherent society can learn to let go of the paradigm that saved it",
        description: "Japan is not failing — it has perfected continuity. This report diagnoses a Continuity Trap produced by the Iron Triangle, the fiscal‑demographic trap, and a cultural operating system that converts systemic failure into individual endurance, and proposes Institutional Kaizen and a Demography Commission as the concrete first step.",
        author: "Björn Kenneth Holmström",
        date: "May 2026",
        url: "https://bjornkennethholmstrom.org/reports/japan-continuity-trap",
        license: "Creative Commons Attribution-ShareAlike 4.0 International",
        type: "Country Report · Japan"
    },
    ja: {
        title: "連続性の罠",
        subtitle: "「圧力→適応→保存→延期」ループの実地ガイド — そして世界で最も結束力の高い社会が、自らを救ったパラダイムを手放す術をどう学ぶか",
        description: "日本は失敗しているのではない — 連続性を極めすぎたのだ。本報告書は、鉄の三角形、財政・人口動態の罠、そしてシステムの失敗を個人の耐久力へと変換する文化的オペレーティング・システムによって生み出される「連続性の罠」を診断し、具体的な第一歩として「制度的カイゼン」と「人口統計委員会」を提案する。",
        author: "Björn Kenneth Holmström",
        date: "2026年5月",
        url: "https://bjornkennethholmstrom.org/reports/japan-continuity-trap",
        license: "Creative Commons Attribution-ShareAlike 4.0 International",
        type: "国別報告書 · 日本"
    }
};

const meta = metadata[LANGUAGE];

// ── Section definitions ──────────────────────────────────────────────────────
const sections = [
    { file: '00-executive-summary',            titleEn: 'Executive Summary',                                             titleJa: 'エグゼクティブ・サマリー',                                            isAppendix: false },
    { file: '01-continuity-trap',              titleEn: '1. The Continuity Trap',                                        titleJa: '1. 連続性の罠',                                                       isAppendix: false },
    { file: '02-structural-mechanisms',        titleEn: '2. The Continuity Trap: Structural Mechanisms',                  titleJa: '2. 連続性の罠：構造的メカニズム',                                    isAppendix: false },
    { file: '03-building-paradigm-replacement',titleEn: '3. What Building Paradigm Replacement Capacity Would Look Like', titleJa: '3. パラダイム置換能力の構築とは',                                   isAppendix: false },
    { file: '04-political-immune-system',      titleEn: '4. The Political Immune System: The Stability Bias',             titleJa: '4. 政治免疫システム：安定性バイアス',                               isAppendix: false },
    { file: '05-transition-architecture',      titleEn: '5. Working with the Grain: Transition Architecture for Japan',   titleJa: '5. 日本の特性に沿った移行アーキテクチャ',                           isAppendix: false },
    { file: '06-concrete-first-step',          titleEn: '6. A Concrete First Step: The Sunset Legislation and a Demography Commission', titleJa: '6. 具体的な第一歩：サンセット法と人口統計委員会',               isAppendix: false },
    { file: '07-coda',                        titleEn: '7. Coda: The Master of Continuity at the Frontier of Renewal',   titleJa: '7. コーダ：再生の最前線に立つ連続性の達人',                        isAppendix: false },
    { file: '08-appendix-a',                   titleEn: 'Appendix A: Value Systems & Policy Mindsets',                    titleJa: '付録A：価値体系と政策マインドセット',                              isAppendix: true  },
    { file: '08-appendix-b',                   titleEn: 'Appendix B: International Analogues & Precedents',               titleJa: '付録B：国際的な類似例と先例',                                       isAppendix: true  },
    { file: '08-appendix-c',                   titleEn: 'Appendix C: The Governance as Engineering Connection',           titleJa: '付録C：ガバナンス・アズ・エンジニアリングとの関連',               isAppendix: true  },
    { file: '08-appendix-d',                   titleEn: 'Appendix D: Anticipated Objections',                            titleJa: '付録D：想定される反論',                                             isAppendix: true  },
    { file: '08-appendix-e',                   titleEn: 'Appendix E: About the Author & Method',                         titleJa: '付録E：著者と方法について',                                        isAppendix: true  },
];

// ── CSS (same as Finland report) ─────────────────────────────────────────────
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
	
	.cover {
		page-break-after: always;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		text-align: center;
		padding: 0.5cm 2cm;
		margin-top: 0;
		box-sizing: border-box;
	}
	
	.cover-image {
		width: auto;
		height: 400px;
		object-fit: contain;
		margin-bottom: 1em;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
	
	blockquote {
		margin: 1em 2em;
		padding: 0.5em 1em;
		border-left: 3px solid #ccc;
		font-style: italic;
		background: #f9f9f9;
		page-break-inside: avoid;
	}
	
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
	
	a {
		color: #0066cc;
		text-decoration: none;
	}
	
	a[href^="http"]:after {
		content: " (" attr(href) ")";
		font-size: 8pt;
		color: #666;
		word-break: break-all;
	}
	
	a[href^="#"]:after {
		content: "";
	}
	
	strong {
		font-weight: bold;
		color: #000;
	}
	
	em {
		font-style: italic;
	}
	
	hr {
		border: none;
		border-top: 2px solid #ccc;
		margin: 2em 0;
		page-break-after: avoid;
	}
	
	.section-gap {
		margin: 2em 0 1em 0;
	}
	
	.appendix h1 {
		font-style: italic;
		color: #444;
	}

	.figure-container {
		page-break-inside: avoid;
		break-inside: avoid;
	}

	.figure {
		page-break-inside: avoid;
		margin: 1.5em 0;
		text-align: center;
	}

	.figure img {
		max-width: 100%;
		max-height: 22cm;
		width: auto;
		height: auto;
		object-fit: contain;
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	img,
	.cover-image {
		max-height: 20cm;
		width: auto;
		max-width: 100%;
		object-fit: contain;
	}

	figure, .figure, .diagram-container {
		page-break-inside: avoid;
		break-inside: avoid;
		margin: 1.5em 0;
	}

	em:only-child {
		display: block;
		font-size: 9.5pt;
		color: #555;
		margin-top: 0.4em;
		text-align: center;
		font-style: italic;
	}

	.appendix, .acknowledgements, .references {
		page-break-before: always;
	}

	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}
	
	p, li {
		orphans: 3;
		widows: 3;
	}

	.page-break-before { page-break-before: always; }
	.page-break-after  { page-break-after: always;  }
	.page-break-avoid  { page-break-inside: avoid; break-inside: avoid; }

	.section-divider {
		page-break-before: always;
	}

	.section-gap {
		margin: 2em 0 1em 0;
	}
</style>
`;

// ── Helper: resolve local image paths to file:// URIs ─────────────────────────
function processMarkdownImagesSync(content) {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let processedContent = content;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
        const [fullMatch, altText, imagePath] = match;
        if (imagePath.startsWith('http') || imagePath.startsWith('file:')) continue;

        const possiblePaths = [
            path.join(__dirname, '../static', imagePath),
            path.join(__dirname, '../static/images/reports', path.basename(imagePath)),
            path.join(INPUT_DIR, imagePath),
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
            const fileUri = 'file://' + path.resolve(foundPath).replace(/\\/g, '/');
            processedContent = processedContent.replace(fullMatch, `![${altText}](${fileUri})`);
            console.log(`✅ Linked image: ${path.basename(foundPath)}`);
        } else {
            console.warn(`⚠️  Image not found: ${imagePath}`);
        }
    }
    return processedContent;
}

// ── Wrap markdown images in figure containers ─────────────────────────────────
function enhanceImageMarkup(content) {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    return content.replace(imageRegex, (fullMatch, altText, imagePath) => `
<div class="figure-container">
  <div class="figure">
    <img src="${imagePath}" alt="${altText}" />
  </div>
</div>
`);
}

// ── Read and combine markdown files ───────────────────────────────────────────
function readMarkdownFiles() {
    console.log(`\n📖 Reading report sections for language: ${LANGUAGE}`);
    console.log(`Input directory: ${INPUT_DIR}\n`);

    const contents = [];

    for (const section of sections) {
        const filename = `${section.file}.${LANGUAGE}.md`;
        const filepath = path.join(INPUT_DIR, filename);

        process.stdout.write(`Reading ${filename}... `);

        if (!fs.existsSync(filepath)) {
            console.error(`\n❌ File not found: ${filepath}`);
            process.exit(1);
        }

        let content = fs.readFileSync(filepath, 'utf-8');
        console.log(`✓ (${(content.length / 1024).toFixed(1)} KB)`);

        // Remove frontmatter if present
        content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

        process.stdout.write(`   Processing images... `);
        content = processMarkdownImagesSync(content);

        let title;
        if (LANGUAGE === 'ja') title = section.titleJa;
        else title = section.titleEn;

        contents.push({ title, content, isAppendix: section.isAppendix });
    }

    console.log(`\n✅ All sections read successfully\n`);
    return contents;
}

// ── Cover image URI ───────────────────────────────────────────────────────────
function getCoverImageUri() {
    if (fs.existsSync(COVER_IMAGE)) {
        return 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/');
    }
    console.log('📝 Cover image not found, proceeding without it');
    return null;
}

// ── Generate HTML ─────────────────────────────────────────────────────────────
function generateHTML(sections) {
    console.log('🔨 Converting markdown to HTML...');

    marked.setOptions({ breaks: false, gfm: true });

    const coverImage = getCoverImageUri();

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
      <div class="type">${meta.type}</div>
    </div>
    <div class="url">${meta.url}</div>
  </div>
`;

    sections.forEach((section, index) => {
        process.stdout.write(`  Processing ${section.title}... `);

        if (index > 0) {
            const dividerClass = section.isAppendix ? 'section-gap' : 'section-divider';
            html += `<div class="${dividerClass}"></div>\n`;
        }

        const sectionClass = section.isAppendix ? 'appendix' : '';
        html += `<section class="${sectionClass}">\n`;

        const enhancedContent = enhanceImageMarkup(section.content);
        const sectionHtml = marked.parse(enhancedContent);
        html += sectionHtml;

        html += `</section>\n`;
        console.log(`✓ (${(sectionHtml.length / 1024).toFixed(1)} KB)`);
    });

    html += `\n</body>\n</html>\n`;

    console.log(`\n✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
    return html;
}

// ── Generate PDF via Puppeteer ────────────────────────────────────────────────
async function generatePDF(html) {
    console.log('📄 Generating PDF...');

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-${REPORT_SLUG}-${LANGUAGE}.html`);
    fs.writeFileSync(tempHtmlFile, html);
    const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--allow-file-access-from-files'
        ]
    });

    try {
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(120000);

        console.log('Loading HTML file locally...');
        await page.goto(tempHtmlUri, {
            waitUntil: ['domcontentloaded', 'networkidle0'],
            timeout: 120000
        });

        console.log('Content loaded, generating PDF...');
        await page.pdf({
            path: OUTPUT_FILE,
            format: 'A4',
            printBackground: true,
            margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2cm' },
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="font-size: 9pt; color: #666; width: 100%; margin: 0 2cm;">
                    <span style="float: left;">${meta.title}</span>
                    <span style="float: right;">${meta.type}</span>
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
        console.log('📄 Starting PDF generation for Japan Continuity Trap report...\n');
        console.log(`Language: ${LANGUAGE}`);
        console.log(`Output: ${OUTPUT_FILE}\n`);

        const sections = readMarkdownFiles();
        const html = generateHTML(sections);

        if (process.env.DEBUG) {
            const debugFile = path.join(__dirname, `../debug-${REPORT_SLUG}-${LANGUAGE}.html`);
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
