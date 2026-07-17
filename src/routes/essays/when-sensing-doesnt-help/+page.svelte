<!-- src/routes/essays/when-sensing-doesnt-help/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';
	import { marked } from 'marked';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	// --- IMPORT RAW MARKDOWN ---
	import ContentEnRaw from './when-sensing-doesnt-help.md?raw';
	import ContentSvRaw from './when-sensing-doesnt-help-sv.md?raw';

	// --- ESSAY METADATA ---
	const metadata = {
		en: {
			title: 'When Sensing Doesn’t Help',
			subtitle: 'A Retained‑Variety hypothesis, and how four simulations took it apart',
			description: 'A hypothesis that looked like the next paper in the Governance as Engineering series, produced a clean result, and then dissolved when the objection was modelled fairly.',
			published: 'July 2026',
			readTime: '15 min read',
			author: 'Björn Kenneth Holmström'
		},
		sv: {
			title: 'När avkänning inte hjälper',
			subtitle: 'En hypotes om kvarhållen variation, och hur fyra simuleringar plockade isär den',
			description: 'En hypotes som ett tag såg ut som nästa artikel i serien Styrning som ingenjörskonst, gav ett rent resultat, och sedan upplöstes när invändningen modellerades på rättvisa villkor.',
			published: 'juli 2026',
			readTime: '15 min läsning',
			author: 'Björn Kenneth Holmström'
		}
	};

	let t = $derived(metadata[$language] ?? metadata.en);
	let rawMarkdown = $derived($language === 'sv' ? ContentSvRaw : ContentEnRaw);

	// --- PRE-RENDER LATEX WITH KATEX ---
	function renderHtml(md: string): string {
		const blocks: string[] = [];

		// Display math: $$ ... $$ and \[ ... \]
		let processed = md.replace(
			/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g,
			(match, tex1, tex2) => {
				const tex = (tex1 ?? tex2 ?? '').trim();
				try {
					const rendered = katex.renderToString(tex, {
						displayMode: true,
						throwOnError: false
					});
					blocks.push(rendered);
					return `%%MATH${blocks.length - 1}%%`;
				} catch (e) {
					console.warn('KaTeX display error:', e);
					blocks.push(match);
					return `%%MATH${blocks.length - 1}%%`;
				}
			}
		);

		// Inline math: $ ... $ and \( ... \)
		processed = processed.replace(
			/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
			(match, tex1, tex2) => {
				const tex = (tex1 ?? tex2 ?? '').trim();
				try {
					const rendered = katex.renderToString(tex, {
						displayMode: false,
						throwOnError: false
					});
					blocks.push(rendered);
					return `%%MATH${blocks.length - 1}%%`;
				} catch (e) {
					console.warn('KaTeX inline error:', e);
					blocks.push(match);
					return `%%MATH${blocks.length - 1}%%`;
				}
			}
		);

		// Convert markdown to HTML (without breaking math placeholders)
		let html = marked.parse(processed, { breaks: false, gfm: true }) as string;

		// Restore KaTeX HTML
		html = html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');

		return html;
	}

	let contentHtml = $derived(renderHtml(rawMarkdown));
</script>

<SEO
	title={t.title}
	description={t.description}
	type="article"
	publishedTime={t.published}
	keywords="governance, Ashby, Goodhart, variety gap, sensing, prediction, buffering, feedforward, feedback, institutional design, retained variety"
	section="Essays"
/>

<article class="mx-auto max-w-4xl px-4 pt-8 pb-24">
	<!-- Breadcrumb -->
	<div class="not-prose mb-8">
		<a
			href="/essays"
			class="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
			style="color: var(--color-page-text);"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
				<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
			</svg>
			{$language === 'en' ? 'Back to Essays' : 'Tillbaka till essäer'}
		</a>
	</div>

	<!-- Header -->
	<header class="mb-12 border-b border-[var(--color-separator)] pb-8">
		<h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
			{t.title}
		</h1>
		<p class="text-xl md:text-2xl italic mb-6" style="color: var(--color-page-text); opacity: 0.8;">
			{t.subtitle}
		</p>
		<div class="flex flex-wrap items-center gap-4 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.author}</span>
			<span>•</span>
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
	</header>

	<!-- Essay Content -->
	<div
		class="prose prose-lg max-w-none"
		style="
			--tw-prose-body: var(--color-page-text);
			--tw-prose-headings: var(--color-page-text);
			--tw-prose-links: var(--color-link);
			--tw-prose-bold: var(--color-page-text);
			--tw-prose-code: var(--color-page-text);
			--tw-prose-pre-code: var(--color-page-text);
			--tw-prose-pre-bg: var(--color-card-bg);
			--tw-prose-th-borders: var(--color-separator);
			--tw-prose-td-borders: var(--color-separator);
			--tw-prose-quotes: var(--color-page-text);
		"
	>
		{@html contentHtml}
	</div>

	<!-- Share Buttons -->
	<div class="mt-12">
		<ShareButtons title={t.title} />
	</div>

	<!-- Back to Essays (bottom) -->
	<div class="not-prose mt-12 text-center">
		<a
			href="/essays"
			class="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
			style="color: var(--color-page-text);"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
				<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
			</svg>
			{$language === 'en' ? 'Back to Essays' : 'Tillbaka till essäer'}
		</a>
	</div>
</article>
