#!/usr/bin/env node

/**
 * Generate PDF for the India Leap‑Lag Cycle report
 * 
 * Usage: node scripts/generate-india-report-pdf.js [language]
 * Example: node scripts/generate-india-report-pdf.js en
 * Example: node scripts/generate-india-report-pdf.js hi
 * Example: node scripts/generate-india-report-pdf.js ta
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
const VALID_LANGUAGES = ['en', 'hi', 'ta'];

if (!VALID_LANGUAGES.includes(LANGUAGE)) {
	console.error(`Invalid language: ${LANGUAGE}`);
	console.error(`Valid languages: ${VALID_LANGUAGES.join(', ')}`);
	process.exit(1);
}

const REPORT_SLUG = 'india-leap-lag-cycle';
const INPUT_DIR = path.join(__dirname, `../src/routes/reports/${REPORT_SLUG}/sections`);
const OUTPUT_DIR = path.join(__dirname, `../static/reports`);
const OUTPUT_FILE = path.join(OUTPUT_DIR, `${REPORT_SLUG}-${LANGUAGE}.pdf`);
const COVER_IMAGE = path.join(__dirname, `../static/images/reports/${REPORT_SLUG}/cover.png`);

// ── Metadata ─────────────────────────────────────────────────────────────────
const metadata = {
	en: {
		title: "The Leap‑Lag Cycle",
		subtitle: "A field guide to the synchronisation deficit — and how India can make its fragments cohere",
		description: "India does not lack capacity — it lacks the ability to synchronise its extraordinary strengths across scale. This report diagnoses the structural mechanisms and proposes a Synchronisation Sandbox as the first step.",
		author: "Björn Kenneth Holmström",
		date: "May 2026",
		url: "https://bjornkennethholmstrom.org/reports/india-leap-lag-cycle",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "Country Report · India"
	},
	hi: {
		title: "लीप‑लैग चक्र",
		subtitle: "तालमेल की कमी के लिए एक फील्ड गाइड — और भारत अपने टुकड़ों को कैसे जोड़ सकता है",
		description: "भारत में क्षमता की कमी नहीं है — उसमें पैमाने पर अपनी असाधारण ताकतों को तालमेल से जोड़ने की क्षमता का अभाव है। यह रिपोर्ट संरचनात्मक तंत्रों का निदान करती है और पहले कदम के रूप में एक तालमेल सैंडबॉक्स प्रस्तावित करती है।",
		author: "ब्योर्न केनेथ होल्मस्ट्रॉम",
		date: "मई 2026",
		url: "https://bjornkennethholmstrom.org/reports/india-leap-lag-cycle",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "देश रिपोर्ट · भारत"
	},
	ta: {
		title: "முன்னேற்ற‑பின்னடைவு சுழற்சி",
		subtitle: "ஒத்திசைவு குறைபாட்டிற்கான ஒரு கள வழிகாட்டி — மற்றும் இந்தியா தனது துண்டுகளை எவ்வாறு ஒன்றிணைக்க முடியும்",
		description: "இந்தியாவுக்கு திறன் இல்லையென்பதல்ல — பல்வேறு அளவீடுகளில் தனது அசாதாரண பலங்களை ஒத்திசைக்கும் திறன் இல்லை. இந்த அறிக்கை கட்டமைப்பு வழிமுறைகளை கண்டறிந்து, முதல் படியாக ஒரு ஒத்திசைவு சேண்ட்பாக்சை முன்மொழிகிறது.",
		author: "பியோர்ன் கென்னத் ஹோல்ஸ்ட்ரோம்",
		date: "மே 2026",
		url: "https://bjornkennethholmstrom.org/reports/india-leap-lag-cycle",
		license: "Creative Commons Attribution-ShareAlike 4.0 International",
		type: "நாட்டு அறிக்கை · இந்தியா"
	}
};

const meta = metadata[LANGUAGE];

// ── Section definitions (file base name without language suffix) ───────────
const sections = [
	{ file: 'executive-summary',                 titleEn: 'Executive Summary',                               titleHi: 'कार्यकारी सारांश',                          titleTa: 'செயலாக்க சுருக்கம்',                                isAppendix: false },
	{ file: '01-leap-lag-cycle',                 titleEn: '1. The Leap‑Lag Cycle',                           titleHi: '1. लीप‑लैग चक्र',                              titleTa: '1. முன்னேற்ற‑பின்னடைவு சுழற்சி',                    isAppendix: false },
	{ file: '02-synchronisation-deficit',         titleEn: '2. The Synchronisation Deficit: A New Diagnosis', titleHi: '2. तालमेल की कमी: एक नया निदान',                titleTa: '2. ஒத்திசைவு குறைபாடு: ஒரு புதிய நோயறிதல்',         isAppendix: false },
	{ file: '03-building-synchronisation-capacity', titleEn: '3. What Building Synchronisation Capacity Looks Like', titleHi: '3. तालमेल क्षमता निर्माण कैसा दिखता है',        titleTa: '3. ஒத்திசைவு திறன் மேம்பாடு எப்படி இருக்கும்',      isAppendix: false },
	{ file: '04-political-immune-system',          titleEn: '4. The Political Immune System: Why Synchronisation Fails', titleHi: '4. राजनीतिक प्रतिरक्षा प्रणाली: तालमेल क्यों विफल होता है', titleTa: '4. அரசியல் நோயெதிர்ப்பு அமைப்பு: ஒத்திசைவு ஏன் தோல்வியடைகிறது', isAppendix: false },
	{ file: '05-transition-architecture',          titleEn: '5. Working with the Grain: Transition Architecture for India', titleHi: '5. प्रकृति के अनुरूप: भारत के लिए संक्रमण वास्तुकला', titleTa: '5. இயற்கைக்கு இசைவாக: இந்தியாவுக்கான மாற்றுக் கட்டமைப்பு', isAppendix: false },
	{ file: '06-synchronisation-sandbox',          titleEn: '6. A Concrete First Step: The Synchronisation Sandbox', titleHi: '6. एक ठोस पहला कदम: तालमेल सैंडबॉक्स',          titleTa: '6. ஒரு உறுதியான முதல் படி: ஒத்திசைவு சேண்ட்பாக்ஸ்', isAppendix: false },
	{ file: '07-coda',                             titleEn: '7. Coda: From Leap‑Lag to Leap‑Sync',            titleHi: '7. उपसंहार: लीप‑लैग से लीप‑सिंक तक',               titleTa: '7. முடிவுரை: முன்னேற்ற‑பின்னடைவிலிருந்து முன்னேற்ற‑ஒத்திசைவுக்கு', isAppendix: false },
	{ file: '08-appendix-a',                       titleEn: 'Appendix A: Value Systems & Policy Mindsets',    titleHi: 'परिशिष्ट क: मूल्य प्रणालियाँ और नीति मानसिकताएँ',    titleTa: 'இணைப்பு அ: மதிப்பு அமைப்புகள் மற்றும் கொள்கை மனப்பான்மைகள்', isAppendix: true  },
	{ file: '08-appendix-b',                       titleEn: 'Appendix B: International Analogues',            titleHi: 'परिशिष्ट ख: अंतर्राष्ट्रीय समानताएँ',               titleTa: 'இணைப்பு ஆ: சர்வதேச ஒப்புமைகள்',                   isAppendix: true  },
	{ file: '08-appendix-c',                       titleEn: 'Appendix C: The Governance as Engineering Connection', titleHi: 'परिशिष्ट ग: गवर्नेंस ऐज़ इंजीनियरिंग कनेक्शन', titleTa: 'இணைப்பு இ: ஆளுகை பொறியியல் இணைப்பு',            isAppendix: true  },
	{ file: '08-appendix-d',                       titleEn: 'Appendix D: Anticipated Objections',            titleHi: 'परिशिष्ट घ: अपेक्षित आपत्तियाँ',                   titleTa: 'இணைப்பு ஈ: எதிர்பார்க்கப்படும் எதிர்ப்புகள்',     isAppendix: true  },
	{ file: '08-appendix-e',                       titleEn: 'Appendix E: About the Author & Method',         titleHi: 'परिशिष्ट ङ: लेखक और विधि के बारे में',              titleTa: 'இணைப்பு உ: ஆசிரியர் மற்றும் முறை பற்றி',            isAppendix: true  },
];

// ── CSS (identical to the France/Sweden scripts, with cover image height fix) ──
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

		content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

		process.stdout.write(`   Processing images... `);
		content = processMarkdownImagesSync(content);

		let title;
		if (LANGUAGE === 'hi') title = section.titleHi;
		else if (LANGUAGE === 'ta') title = section.titleTa;
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
		console.log('📄 Starting PDF generation for India Leap‑Lag Cycle report...\n');
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
