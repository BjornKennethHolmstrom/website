#!/usr/bin/env node

/**
 * Generate PDF for the South Korea Tournament Trap report
 *
 * Usage: node scripts/generate-south-korea-report-pdf.js [language]
 * Example: node scripts/generate-south-korea-report-pdf.js en
 * Example: node scripts/generate-south-korea-report-pdf.js ko
 *
 * Requirements:
 * npm install marked puppeteer katex
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
const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'ko'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const REPORT_SLUG = 'south-korea-tournament-trap';
const INPUT_DIR = path.join(__dirname, `../src/routes/reports/${REPORT_SLUG}/sections`);
const OUTPUT_DIR = path.join(__dirname, `../static/reports`);
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${REPORT_SLUG}-${LANGUAGE}.pdf`);
const COVER_IMAGE = path.join(__dirname, `../static/images/reports/${REPORT_SLUG}/cover.png`);
const KATEX_CSS = path.join(__dirname, `../node_modules/katex/dist/katex.min.css`);

// ── Metadata ─────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: "South Korea: The Tournament Trap",
		subtitle: "Consequence Coupling Under Effective Scarcity",
		description:
			"South Korea is not failing. It observes well, acts fast and has shown that its democracy can correct even a president who turns on the constitution. Yet on one Thursday every November the country grounds its aircraft for an eight-hour examination, and too many futures depend on winning it. This report diagnoses the Tournament Trap — consequence coupling under effective scarcity — and proposes a transition architecture that lowers what winning buys, so that losing one tournament becomes survivable.",
		author: "Björn Kenneth Holmström",
		date: "September 2026",
		url: "https://bjornkennethholmstrom.org/reports/south-korea-tournament-trap",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "Country Report · South Korea"
	},
	ko: {
		title: "한국: 토너먼트 함정",
		subtitle: "유효 희소성 아래의 결과 연동",
		description:
			"한국은 실패하고 있지 않다. 한국은 잘 관찰하고, 빠르게 행동하며, 헌법에 등을 돌린 대통령조차 바로잡을 수 있음을 보여주었다. 그런데도 매년 11월 어느 목요일이면 나라는 8시간짜리 시험을 위해 항공기를 착륙시키고, 너무 많은 미래가 그 시험에서 이기는 데 달려 있다. 이 보고서는 토너먼트 함정 — 유효 희소성 아래의 결과 연동 — 을 진단하고, 이기는 것이 사들이는 것을 낮추어 하나의 토너먼트에서 지는 것이 생존 가능해지도록 하는 전환 아키텍처를 제안한다.",
		author: "Björn Kenneth Holmström",
		date: "2026년 9월",
		url: "https://bjornkennethholmstrom.org/reports/south-korea-tournament-trap",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "국가 보고서 · 한국"
	}
};

const meta = metadata[LANGUAGE];

// ── Section definitions (file base name without language suffix) ─────────────
const sections = [
	{ file: '00-executive-summary',        titleEn: 'Executive Summary',                                                          titleKo: '요약',                                                          isAppendix: false },
	{ file: '01-tournament-trap',          titleEn: '1. The Tournament Trap',                                                     titleKo: '1. 토너먼트 함정',                                              isAppendix: false },
	{ file: '02-structural-mechanisms',    titleEn: '2. Structural Mechanisms',                                                   titleKo: '2. 구조적 메커니즘',                                            isAppendix: false },
	{ file: '03-opportunity-architecture', titleEn: '3. What Building an Opportunity Architecture Would Look Like',               titleKo: '3. 기회 아키텍처 구축은 어떤 모습일까',                          isAppendix: false },
	{ file: '04-political-immune-system',  titleEn: '4. The Political Immune System: The Legitimacy Lock',                        titleKo: '4. 정치적 면역체계: 정당성 잠금',                                isAppendix: false },
	{ file: '05-transition-architecture',  titleEn: '5. Working with the Grain: Transition Architecture for South Korea',          titleKo: '5. 결을 따라 일하기: 한국을 위한 전환 아키텍처',                 isAppendix: false },
	{ file: '06-first-step',               titleEn: '6. A Concrete First Step: The Tournament Audit',                             titleKo: '6. 구체적 첫 단계: 토너먼트 감사',                              isAppendix: false },
	{ file: '07-coda',                     titleEn: '7. Coda: The Champion of the Tournament at the Frontier of Plurality',       titleKo: '7. 코다: 다원성의 최전선에 선 토너먼트의 챔피언',                isAppendix: false },
	{ file: '08-appendix-a',               titleEn: 'Appendix A: Value Systems and Policy Mindsets',                              titleKo: '부록 A: 가치 체계와 정책 사고방식',                             isAppendix: true  },
	{ file: '08-appendix-b',               titleEn: 'Appendix B: International Analogues and Precedents',                         titleKo: '부록 B: 국제적 유사 사례와 선례',                               isAppendix: true  },
	{ file: '08-appendix-c',               titleEn: 'Appendix C: The Governance as Engineering Connection',                       titleKo: '부록 C: 공학으로서의 거버넌스 연결',                            isAppendix: true  },
	{ file: '08-appendix-d',               titleEn: 'Appendix D: Anticipated Objections',                                         titleKo: '부록 D: 예상되는 반론',                                          isAppendix: true  },
	{ file: '08-appendix-e',               titleEn: 'Appendix E: About the Author and Method',                                    titleKo: '부록 E: 저자와 방법에 관하여',                                  isAppendix: true  },
	{ file: '08-appendix-f',               titleEn: 'Appendix F: The Medical-School Capacity Case',                               titleKo: '부록 F: 의과대학 정원 사례',                                    isAppendix: true  }
];

// ── CSS ──────────────────────────────────────────────────────────────────────
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
		font-family: 'Georgia', 'Times New Roman', 'Noto Sans KR', 'Noto Serif KR', 'Malgun Gothic', 'Apple SD Gothic Neo', serif;
		font-size: 11pt;
		line-height: 1.7;
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
		line-height: 1.3;
		color: #1a1a1a;
	}

	.cover .subtitle {
		font-size: 14pt;
		font-style: italic;
		margin-bottom: 0.6em;
		color: #555;
		line-height: 1.4;
	}

	.cover .description {
		font-size: 10.5pt;
		margin-bottom: 0.6em;
		color: #666;
		max-width: 600px;
		line-height: 1.5;
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

.caption {
    display: block;
    font-size: 9.5pt;
    color: #555;
    margin-top: 0.4em;
    margin-bottom: 1em;
    text-align: center;
}
.caption em {
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

	/* KaTeX display math — center and give breathing room */
	.katex-display {
		margin: 1.2em 0;
		page-break-inside: avoid;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.katex {
		font-size: 1.05em;
	}

	/* Korean typographic adjustments */
	html[lang="ko"] body {
		line-height: 1.75;
	}
</style>
`;

// ── Helper: resolve local image paths to file:// URIs ────────────────────────
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

// ── Wrap markdown images in figure containers ────────────────────────────────
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

// ── Promote standalone <em> paragraphs to .caption ───────────────────────────
// Only matches <p> whose entire content is a single <em>…</em> (whitespace allowed).
// Inline emphasis inside a paragraph with other content is left untouched.
function promoteStandaloneItalics(html) {
	return html.replace(
		/<p>\s*<em>([\s\S]*?)<\/em>\s*<\/p>/g,
		(_, inner) => `<p class="caption"><em>${inner}</em></p>`
	);
}

// ── Render LaTeX in markdown to KaTeX HTML ───────────────────────────────────
// Handles $$...$$, \[...\], $...$, \(...\)
// Renders server-side so the PDF does not depend on network or client JS.
function renderMathInMarkdown(content) {
	const blocks = [];

	// 1. Display math: $$ ... $$ and \[ ... \]
	content = content.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
		const tex = (tex1 ?? tex2 ?? '').trim();
		try {
			const rendered = katex.renderToString(tex, {
				displayMode: true,
				throwOnError: false,
				output: 'html'
			});
			blocks.push(rendered);
			return `%%MATH${blocks.length - 1}%%`;
		} catch (e) {
			console.warn('KaTeX display error:', e.message);
			blocks.push(match);
			return `%%MATH${blocks.length - 1}%%`;
		}
	});

	// 2. Inline math: $ ... $ and \( ... \)
	content = content.replace(
		/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
		(match, tex1, tex2) => {
			const tex = (tex1 ?? tex2 ?? '').trim();
			try {
				const rendered = katex.renderToString(tex, {
					displayMode: false,
					throwOnError: false,
					output: 'html'
				});
				blocks.push(rendered);
				return `%%MATH${blocks.length - 1}%%`;
			} catch (e) {
				console.warn('KaTeX inline error:', e.message);
				blocks.push(match);
				return `%%MATH${blocks.length - 1}%%`;
			}
		}
	);

	return { content, blocks };
}

// ── Reinsert KaTeX blocks after markdown parsing ─────────────────────────────
function reinsertMath(html, blocks) {
	return html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx, 10)] ?? '');
}

// ── Read and combine markdown files ──────────────────────────────────────────
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

		// Remove possible frontmatter
		content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

		process.stdout.write(`   Processing images... `);
		content = processMarkdownImagesSync(content);

		// Title in current language
		const title = LANGUAGE === 'ko' ? section.titleKo : section.titleEn;

		contents.push({ title, content, isAppendix: section.isAppendix });
	}

	console.log(`\n✅ All sections read successfully\n`);
	return contents;
}

// ── Cover image URI ──────────────────────────────────────────────────────────
function getCoverImageUri() {
	if (fs.existsSync(COVER_IMAGE)) {
		return 'file://' + path.resolve(COVER_IMAGE).replace(/\\/g, '/');
	}
	console.log('📝 Cover image not found, proceeding without it');
	return null;
}

// ── KaTeX CSS as a file:// URI ───────────────────────────────────────────────
function getKatexCssUri() {
	if (fs.existsSync(KATEX_CSS)) {
		return 'file://' + path.resolve(KATEX_CSS).replace(/\\/g, '/');
	}
	console.warn('⚠️  KaTeX CSS not found at', KATEX_CSS);
	console.warn('   Install katex: npm install katex');
	return null;
}

// ── Generate HTML ────────────────────────────────────────────────────────────
function generateHTML(sections) {
	console.log('🔨 Converting markdown to HTML...');

	marked.setOptions({ breaks: false, gfm: true });

	const coverImage = getCoverImageUri();
	const katexCss = getKatexCssUri();

	let html = `
<!DOCTYPE html>
<html lang="${LANGUAGE}">
<head>
  <meta charset="UTF-8">
  <title>${meta.title}</title>
  ${katexCss ? `<link rel="stylesheet" href="${katexCss}">` : ''}
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

		// 1. Render math placeholders
		const { content: mathProcessed, blocks } = renderMathInMarkdown(section.content);

		// 2. Wrap images in figures
		const enhancedContent = enhanceImageMarkup(mathProcessed);

		// 3. Markdown → HTML
		let sectionHtml = marked.parse(enhancedContent);

		// 4. Reinsert rendered KaTeX HTML
		sectionHtml = reinsertMath(sectionHtml, blocks);

  // 5. Only promote <em> paragraphs that are truly alone
  sectionHtml = promoteStandaloneItalics(sectionHtml);

		html += sectionHtml;
		html += `</section>\n`;

		const mathNote = blocks.length > 0 ? ` (${blocks.length} math blocks)` : '';
		console.log(`✓ (${(sectionHtml.length / 1024).toFixed(1)} KB${mathNote})`);
	});

	html += `\n</body>\n</html>\n`;

	console.log(`\n✅ HTML generated (${(html.length / 1024).toFixed(1)} KB total)\n`);
	return html;
}

// ── Generate PDF via Puppeteer ───────────────────────────────────────────────
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

		// Give fonts (KaTeX + Korean) a moment to fully load before rendering
		await page.evaluate(() => document.fonts && document.fonts.ready);

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

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
	try {
		console.log('📄 Starting PDF generation for South Korea Tournament Trap report...\n');
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
