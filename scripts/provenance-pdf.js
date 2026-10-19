// scripts/provenance-pdf.js
// Adds the provenance label to a Puppeteer page just before page.pdf().
// Works on the rendered DOM, so it needs no changes to each generator's
// metadata or HTML template.
//
//   import { applyProvenance } from './provenance-pdf.js';
//   await applyProvenance(page);                    // language from <html lang>
//   await applyProvenance(page, { lang: 'sv' });    // or explicit
//   await applyProvenance(page, { kind: 'human' }); // a text you wrote yourself

import { getProvenance } from '../src/lib/provenance.js';

export const AUTHOR_NAME = 'Björn Kenneth Holmström';

/**
 * Runs inside the browser (or jsdom in tests). Must be self-contained.
 * @param {Document} doc
 * @param {{ name: string, labels: Record<string, ReturnType<typeof getProvenance>>, lang?: string }} data
 */
export function injectProvenance(doc, data) {
	if (doc.querySelector('[data-provenance]')) return 'already-applied';

	const htmlLang = (data.lang || doc.documentElement.getAttribute('lang') || 'en')
		.toLowerCase()
		.replace('-', '_');
	const p =
		data.labels[htmlLang] ||
		data.labels[htmlLang.split('_')[0]] ||
		(htmlLang.startsWith('pt') ? data.labels.pt_br : null) ||
		data.labels.en;

	// 1. Replace a bare author line ("Björn Kenneth Holmström", "By …", "Av …")
	const nameRe = new RegExp(`^\\s*((by|av|von|par|por|di|door)\\s+)?${data.name}\\s*$`, 'i');
	const cover = doc.querySelector('.cover');
	const coverHasText = !!cover && (cover.textContent || '').trim().length > 0;
	let replaced = 0;
	let replacedInCover = 0;
	for (const el of doc.body.querySelectorAll('*')) {
		if (el.children.length === 0 && nameRe.test(el.textContent || '')) {
			el.textContent = p.byline;
			replaced++;
			if (cover && cover.contains(el)) replacedInCover++;
		}
	}

	// 2. Insert the note
	const box = doc.createElement('div');
	box.setAttribute('data-provenance', '');
	box.setAttribute('lang', p.lang);
	box.setAttribute('dir', p.dir);
	box.style.cssText = [
		'margin:1.2em auto 0',
		'max-width:15cm',
		'padding:0.7em 1em',
		'border:1px solid #d6a23a',
		'border-inline-start:4px solid #d6a23a',
		'border-radius:4px',
		'background:#fdf8ec',
		'color:#3a2e14',
		'font-size:9.5pt',
		'line-height:1.45',
		'text-align:start',
		'page-break-inside:avoid',
		'break-inside:avoid'
	].join(';');
	// Skip the bold byline when the cover's own author line already shows it
	if (!(coverHasText && replacedInCover)) {
		const b = doc.createElement('div');
		b.style.fontWeight = 'bold';
		b.style.marginBottom = '0.3em';
		b.textContent = p.byline;
		box.appendChild(b);
	}
	if (p.note) {
		const n = doc.createElement('div');
		n.textContent = p.note;
		box.appendChild(n);
	}

	if (!box.childNodes.length) return `author line only (replaced: ${replaced})`;

	if (coverHasText) {
		// Text cover: put the note on the cover itself
		cover.appendChild(box);
		return `cover-text (author lines replaced: ${replaced})`;
	}

	// Image-only cover, or no cover: own page / top of document
	const pageWrap = doc.createElement('div');
	pageWrap.style.cssText = 'padding-top:6cm;page-break-after:always;break-after:page';
	pageWrap.appendChild(box);
	if (cover) {
		cover.after(pageWrap);
		return `after-image-cover (author lines replaced: ${replaced})`;
	}
	box.style.marginBottom = '1.5em';
	doc.body.prepend(box);
	return `top-of-body (author lines replaced: ${replaced})`;
}

const LANGS = ['en', 'sv', 'de', 'fr', 'es', 'eu', 'pt_br', 'it', 'nl', 'fi', 'ru', 'zh', 'ja', 'ko', 'hi', 'ta', 'he'];

/**
 * @param {import('puppeteer').Page} page
 * @param {{ lang?: string, kind?: 'ai' | 'human' }} [opts]
 */
export async function applyProvenance(page, opts = {}) {
	const kind = opts.kind || 'ai';
	const labels = Object.fromEntries(LANGS.map((l) => [l, getProvenance(l, kind)]));
	const where = await page.evaluate(
		`(${injectProvenance.toString()})(document, ${JSON.stringify({ name: AUTHOR_NAME, labels, lang: opts.lang })})`
	);
	console.log(`🏷️  Provenance label: ${where}`);
}
