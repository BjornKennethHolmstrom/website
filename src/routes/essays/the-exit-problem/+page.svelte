<!-- src/routes/essays/the-exit-problem/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';
	import { marked } from 'marked';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	// --- IMPORT RAW MARKDOWN ---
	import ContentEnRaw from './the-exit-problem.md?raw';
	import ContentSvRaw from './the-exit-problem-sv.md?raw';

	// --- ESSAY METADATA ---
	const metadata = {
		en: {
			title: 'The Exit Problem',
			subtitle: 'Why agreement among AI systems is weak evidence, and what actually protects you once the agreement starts deciding things',
			description: 'Combining several AI models and trusting their agreement assumes they are independent observers — but shared training, architecture, and benchmarks may make them one generator sampled many times.',
			published: 'June 2026',
			readTime: '40 min read',
			author: 'Björn Kenneth Holmström'
		},
		sv: {
			title: 'Utgångsproblemet',
			subtitle: 'Varför enighet mellan AI-system är svaga bevis, och vad som faktiskt skyddar dig när enigheten börjar avgöra saker',
			description: 'Att kombinera flera AI-modeller och lita på deras enighet förutsätter att de är oberoende observatörer — men delad träning, arkitektur och benchmarks kan göra dem till en och samma generator som samplas flera gånger.',
			published: 'juni 2026',
			readTime: '40 min läsning',
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
	keywords="AI, observer diversity, systems thinking, blind spots, consensus, governance, independence, correlation, exit, institutional design"
	section="Essays"
/>

<article class="mx-auto max-w-4xl px-4 pt-8 pb-24">
 <!-- Breadcrumb + PDF download (same row) -->
 <div class="not-prose mb-8 flex items-center justify-between">
	 <!-- Left: back to essays -->
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

	 <!-- Right: PDF download -->
	 <a
		 href="/essays/exitProblem{$language === 'sv' ? '-sv' : ''}.pdf"
		 download
		 class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors hover:opacity-80 text-sm font-medium"
		 style="background-color: var(--color-separator); color: var(--color-page-text);"
	 >
		 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
			 <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
			 <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
		 </svg>
		 {$language === 'en' ? 'Download PDF' : 'Ladda ner PDF'}
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

	<!-- PDF Download -->
	<div class="mt-12 pt-8 border-t border-[var(--color-separator)]">
		<a
			href="/essays/exitProblem{$language === 'sv' ? '-sv' : ''}.pdf"
			download
			class="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:opacity-80"
			style="background-color: var(--color-separator); color: var(--color-page-text);"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
				<path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
				<path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
			</svg>
			<span class="font-medium">
				{$language === 'en' ? 'Download PDF' : 'Ladda ner PDF'}
			</span>
		</a>
	</div>

	<!-- Share Buttons -->
	<div class="mt-12">
		<ShareButtons title={t.title} />
	</div>

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/what-the-operator-cannot-see"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">👁️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' ? 'What the Operator Cannot See' : 'Vad operatören inte kan se'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' ? 'The structural conditions for perceiving well enough to govern' : 'De strukturella förutsättningarna för att uppfatta tillräckligt väl för att styra'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/boundary-blind-spot"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🔦</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' ? 'The Boundary and the Blind Spot' : 'Gränsen och den blinda fläcken'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' ? 'Nondual insight and the architecture of governance' : 'Icke‑dualitet och styrningens arkitektur'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/ai-optimization-mismatch"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🎯</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' ? 'AI and the Optimization–Design Mismatch' : 'AI och optimerings–design-missmatchningen'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' ? 'Why making a broken system faster is not progress' : 'Varför det inte är framsteg att få ett trasigt system att gå snabbare'}
						</p>
					</div>
				</div>
			</a>
		</div>
	</nav>

	<!-- Back to Essays -->
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
