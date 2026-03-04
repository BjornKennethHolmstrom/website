#!/usr/bin/env node

/**
 * Generate PDF for The Coordination Imperative
 * 
 * Usage: node scripts/generate-coordination-imperative-pdf.js [language]
 * Example: node scripts/generate-coordination-imperative-pdf.js en
 * Example: node scripts/generate-coordination-imperative-pdf.js sv
 * Example: node scripts/generate-coordination-imperative-pdf.js ja
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

// --- CONFIGURATION ---

const LANGUAGE = process.argv[2] || 'en';
const VALID_LANGUAGES = ['en', 'sv', 'ja', 'es', 'fr', 'pt', 'ar', 'zh', 'hi', 'sw'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	console.error(`\nTo add a new language, add its code to VALID_LANGUAGES and create a metadata entry.`);
	process.exit(1);
}

const CONTENT_DIR = path.join(__dirname, '../src/lib/content');
const OUTPUT_DIR = path.join(__dirname, '../static/downloads/coordination-imperative');

const suffix = LANGUAGE === 'en' ? '' : `-${LANGUAGE}`;
const INPUT_FILE = path.join(CONTENT_DIR, `the-coordination-imperative-v0.2${suffix}.md`);
const OUTPUT_FILE = path.join(OUTPUT_DIR, `The-Coordination-Imperative-v0.2${suffix}.pdf`);

// --- METADATA PER LANGUAGE ---
// Add new languages here. The document itself must exist as a translated .md file.

const metadata = {
	en: {
		title: "The Coordination Imperative",
		subtitle: "A Protocol for Planetary-Scale Cooperation",
		author: "Björn Kenneth Holmström",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "Protocol Document",
		lang: 'en',
		dir: 'ltr'
	},
	sv: {
		title: "Koordinationsimperativet",
		subtitle: "Ett protokoll för planetär samverkan",
		author: "Björn Kenneth Holmström",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/sv/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "Protokolldokument",
		lang: 'sv',
		dir: 'ltr'
	},
	ja: {
		title: "調整の必然",
		subtitle: "惑星規模の協力のためのプロトコル",
		author: "ビョルン・ケネス・ホルムストローム",
		date: "2026年",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/ja/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "プロトコル文書",
		lang: 'ja',
		dir: 'ltr'
	},
	es: {
		title: "El Imperativo de la Coordinación",
		subtitle: "Un Protocolo para la Cooperación a Escala Planetaria",
		author: "Björn Kenneth Holmström",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/es/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "Documento de Protocolo",
		lang: 'es',
		dir: 'ltr'
	},
	fr: {
		title: "L'Impératif de Coordination",
		subtitle: "Un protocole pour la coopération à l'échelle planétaire",
		author: "Björn Kenneth Holmström",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/fr/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "Document de Protocole",
		lang: 'fr',
		dir: 'ltr'
	},
	pt: {
		title: "O Imperativo da Coordenação",
		subtitle: "Um Protocolo para Cooperação em Escala Planetária",
		author: "Björn Kenneth Holmström",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/pt/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "Documento de Protocolo",
		lang: 'pt',
		dir: 'ltr'
	},
	ar: {
		title: "ضرورة التنسيق",
		subtitle: "بروتوكول للتعاون على مستوى الكوكب",
		author: "بيورن كينيث هولمستروم",
		date: "٢٠٢٦",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/ar/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "وثيقة بروتوكول",
		lang: 'ar',
		dir: 'rtl'
	},
	zh: {
		title: "协调的必要性",
		subtitle: "星球级合作协议",
		author: "比约恩·肯尼斯·霍尔姆斯特伦",
		date: "2026年",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/zh/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "协议文件",
		lang: 'zh',
		dir: 'ltr'
	},
	hi: {
		title: "समन्वय अनिवार्यता",
		subtitle: "ग्रहीय स्तर के सहयोग के लिए एक प्रोटोकॉल",
		author: "ब्योर्न केनेथ होल्मस्ट्रोम",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/hi/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "प्रोटोकॉल दस्तावेज़",
		lang: 'hi',
		dir: 'ltr'
	},
	sw: {
		title: "Umuhimu wa Uratibu",
		subtitle: "Itifaki ya Ushirikiano wa Kiwango cha Sayari",
		author: "Björn Kenneth Holmström",
		date: "2026",
		version: "v0.2",
		url: "https://bjornkennethholmstrom.org/sw/coordination-imperative",
		license: "CC BY-SA 4.0",
		headerLabel: "Hati ya Itifaki",
		lang: 'sw',
		dir: 'ltr'
	}
};

const meta = metadata[LANGUAGE];

// --- PDF STYLES ---
// Clean, typographic, RFC-inspired. No cover image.

const pdfStyles = `
<style>
	@page {
		size: A4;
		margin: 2.5cm 2cm;
	}

	body {
		font-family: 'Georgia', 'Times New Roman', serif;
		font-size: 11pt;
		line-height: 1.65;
		color: #1a1a1a;
		margin: 0;
		padding: 0;
		direction: ${meta.dir};
	}

	/* === COVER PAGE === */
	.cover {
		page-break-after: always;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 24.7cm;
		max-height: 24.7cm;
		overflow: hidden;
		box-sizing: border-box;
		text-align: ${meta.dir === 'rtl' ? 'right' : 'left'};
		padding: 1.5cm 0 1cm 0;
	}

	.cover-type {
		font-family: 'Arial', 'Helvetica', sans-serif;
		font-size: 9pt;
		font-weight: bold;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: #78716c;
		margin-bottom: 2rem;
		border-bottom: 2px solid #1a1a1a;
		display: inline-block;
		padding-bottom: 5px;
	}

	.cover h1 {
		font-family: 'Arial', 'Helvetica', sans-serif;
		font-size: 32pt;
		font-weight: 800;
		line-height: 1.1;
		margin: 0 0 0.8rem 0;
		color: #000;
		letter-spacing: -0.5px;
		border-bottom: none;
	}

	.cover .subtitle {
		font-size: 15pt;
		font-style: italic;
		color: #57534e;
		margin-bottom: 3rem;
		font-weight: normal;
		line-height: 1.3;
	}

	.cover .version-badge {
		font-family: 'Courier New', monospace;
		font-size: 10pt;
		color: #78716c;
		background: #f5f5f4;
		display: inline-block;
		padding: 4px 12px;
		border-radius: 3px;
		margin-bottom: 2rem;
	}

	.cover .meta {
		border-top: 1px solid #d6d3d1;
		padding-top: 1rem;
		font-size: 10.5pt;
		color: #57534e;
		line-height: 1.7;
		flex-shrink: 0;
	}

	.cover .meta-url {
		font-family: 'Courier New', monospace;
		font-size: 9pt;
		color: #a8a29e;
		margin-top: 0.5rem;
	}

	.cover .meta-license {
		font-size: 9pt;
		color: #a8a29e;
		font-style: italic;
	}

	/* === CONTENT TYPOGRAPHY === */
	h1, h2, h3, h4 {
		font-family: 'Arial', 'Helvetica', sans-serif;
		color: #1a1a1a;
		page-break-after: avoid;
	}

	h1 {
		font-size: 20pt;
		font-weight: bold;
		margin-top: 2em;
		margin-bottom: 0.6em;
		border-bottom: 2px solid #e7e5e4;
		padding-bottom: 0.3em;
	}

	h2 {
		font-size: 16pt;
		font-weight: bold;
		margin-top: 1.5em;
		margin-bottom: 0.5em;
		color: #292524;
	}

	h3 {
		font-size: 13pt;
		font-weight: bold;
		margin-top: 1.2em;
		margin-bottom: 0.5em;
		color: #44403c;
	}

	h4 {
		font-size: 11pt;
		font-weight: bold;
		margin-top: 1em;
		margin-bottom: 0.4em;
		font-style: italic;
	}

	p {
		margin-bottom: 0.8em;
		text-align: justify;
		orphans: 3;
		widows: 3;
	}

	/* === LISTS === */
	ul, ol {
		margin-bottom: 0.8em;
		padding-left: 1.5em;
	}

	li {
		margin-bottom: 0.3em;
	}

	/* === BLOCKQUOTES === */
	blockquote {
		border-left: 3px solid #1a1a1a;
		margin: 1.2em 0;
		padding: 0.8em 1.2em;
		font-style: italic;
		background: #fafaf9;
		page-break-inside: avoid;
	}

	/* === EMPHASIS === */
	strong {
		font-weight: bold;
		color: #000;
	}

	/* === LINKS === */
	a {
		color: #0066cc;
		text-decoration: none;
	}

	a[href^="http"]:after {
		content: " (" attr(href) ")";
		font-size: 8pt;
		color: #78716c;
		word-break: break-all;
	}

	a[href^="#"]:after {
		content: "";
	}

	/* === HORIZONTAL RULES (section dividers) === */
	hr {
		border: none;
		border-top: 1px solid #d6d3d1;
		margin: 2.5em 0;
		page-break-after: avoid;
	}

	/* === CODE (unlikely but just in case) === */
	code {
		font-family: 'Courier New', monospace;
		background: #f5f5f4;
		padding: 2px 5px;
		border-radius: 2px;
		font-size: 0.9em;
	}

	pre {
		background: #f5f5f4;
		border: 1px solid #e7e5e4;
		padding: 0.8em;
		overflow-x: auto;
		font-size: 9pt;
		border-radius: 4px;
		page-break-inside: avoid;
	}

	pre code {
		background: none;
		padding: 0;
	}

	/* === TABLE (if ever needed) === */
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5em 0;
		font-size: 10pt;
		page-break-inside: avoid;
	}

	th {
		background: #f5f5f4;
		font-weight: bold;
		padding: 0.6em;
		text-align: left;
		border-bottom: 2px solid #1a1a1a;
	}

	td {
		border-bottom: 1px solid #e7e5e4;
		padding: 0.6em;
	}

	/* === PAGE BREAK CONTROL === */
	h1, h2, h3, h4, h5, h6 {
		page-break-after: avoid;
	}

	p, li {
		orphans: 3;
		widows: 3;
	}

	blockquote, pre, table {
		page-break-inside: avoid;
	}
</style>
`;

// --- MAIN ---

async function main() {
	console.log(`📄 Generating PDF: The Coordination Imperative`);
	console.log(`   Language: ${LANGUAGE} (${meta.title})`);
	console.log(`   Input:    ${INPUT_FILE}`);
	console.log(`   Output:   ${OUTPUT_FILE}\n`);

	// Validate input
	if (!fs.existsSync(INPUT_FILE)) {
		console.error(`❌ Source file not found: ${INPUT_FILE}`);
		console.error(`   Create the ${LANGUAGE} translation at this path first.`);
		process.exit(1);
	}

	// Ensure output dir
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	// Read markdown
	let markdown = fs.readFileSync(INPUT_FILE, 'utf-8');
	markdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, ''); // Strip frontmatter
	console.log(`   Read source: ${(markdown.length / 1024).toFixed(1)} KB`);

	// The first H1 and H3 in the markdown are the title/subtitle — 
	// we render those on the cover page, so strip them from the body content.
	// Expected format:
	//   # The Coordination Imperative
	//   ### A protocol for planetary-scale cooperation
	//   *v0.1 — Draft for review*
	const bodyMarkdown = markdown
		.replace(/^# .+\n+/, '')          // Remove first H1
		.replace(/^### .+\n+/, '')        // Remove first H3 (subtitle)
		.replace(/^\*v[\d.]+[^*]*\*\n+/, ''); // Remove version line

	// Convert to HTML
	marked.setOptions({ breaks: false, gfm: true });
	const contentHtml = marked.parse(bodyMarkdown);

	// Build full HTML
	const html = `
<!DOCTYPE html>
<html lang="${meta.lang}" dir="${meta.dir}">
<head>
	<meta charset="UTF-8">
	<title>${meta.title}</title>
	${pdfStyles}
</head>
<body>
	<!-- COVER PAGE -->
	<div class="cover">
		<div class="cover-type">${meta.headerLabel}</div>
		<h1>${meta.title}</h1>
		<div class="subtitle">${meta.subtitle}</div>
		<div class="version-badge">${meta.version} — Draft</div>
		<div class="meta">
			<strong>${meta.author}</strong><br/>
			${meta.date}<br/>
			<div class="meta-license">${meta.license}</div>
			<div class="meta-url">${meta.url}</div>
		</div>
	</div>

	<!-- CONTENT -->
	<main>
		${contentHtml}
	</main>
</body>
</html>
`;

	console.log(`   HTML generated: ${(html.length / 1024).toFixed(1)} KB`);

	// Write temp HTML and render via Puppeteer (file URI for reliability)
	const tempHtmlFile = path.join(OUTPUT_DIR, `temp-render-${LANGUAGE}.html`);
	fs.writeFileSync(tempHtmlFile, html);
	const tempHtmlUri = 'file://' + path.resolve(tempHtmlFile).replace(/\\/g, '/');

	const browser = await puppeteer.launch({
		headless: 'new',
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
			'--disable-gpu'
		]
	});

	try {
		const page = await browser.newPage();
		page.setDefaultNavigationTimeout(60000);

		console.log(`   Loading HTML...`);
		await page.goto(tempHtmlUri, {
			waitUntil: ['domcontentloaded', 'networkidle0'],
			timeout: 60000
		});

		console.log(`   Rendering PDF...`);
		await page.pdf({
			path: OUTPUT_FILE,
			format: 'A4',
			printBackground: true,
			margin: {
				top: '2.5cm',
				right: '2cm',
				bottom: '2.5cm',
				left: '2cm'
			},
			displayHeaderFooter: true,
			headerTemplate: `
				<div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; width: 100%; margin: 0 2cm;">
					<span style="float: left;">${meta.title}</span>
					<span style="float: right;">${meta.headerLabel}</span>
				</div>
			`,
			footerTemplate: `
				<div style="font-size: 8pt; font-family: sans-serif; color: #a8a29e; width: 100%; text-align: center;">
					<span class="pageNumber"></span>
				</div>
			`,
			timeout: 60000
		});

		console.log(`\n✅ PDF saved: ${OUTPUT_FILE}`);
		const stats = fs.statSync(OUTPUT_FILE);
		console.log(`   Size: ${(stats.size / 1024).toFixed(0)} KB`);

	} catch (error) {
		console.error('❌ PDF generation failed:', error);
		throw error;
	} finally {
		await browser.close();
		if (fs.existsSync(tempHtmlFile)) {
			fs.unlinkSync(tempHtmlFile);
		}
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
