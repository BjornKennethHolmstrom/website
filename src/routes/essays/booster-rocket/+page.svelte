<!-- src/routes/essays/booster-rocket/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the English and Swedish versions
	import ContentEn from './content.md';
	import ContentSv from './content-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Booster Rocket That Won't Detach",
			subtitle: "Redesigning Venture Capital for Companies That Last",
			description: "We've confused temporary risk with permanent ownership. High-risk capital is essential for innovation—but once companies reach orbit, investors shouldn't extract forever. Here's how redeemable equity fixes venture capital.",
			published: "December 2025",
			readTime: "15 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Boosterraketen som inte lossnar",
			subtitle: "Att omdesigna riskkapital för företag som håller",
			description: "Vi har förväxlat tillfällig risk med permanent ägande. Riskkapital är nödvändigt för innovation—men när företag når omloppsbana bör investerare inte extrahera för evigt. Så här fixar inlösbar egenkapital riskkapitalmodellen.",
			published: "December 2025",
			readTime: "15 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata
	let t = $derived(metadata[$language] || metadata.en);
</script>

<SEO
	title={t.title}
	description={t.description}
	type="article"
	publishedTime={t.published}
	keywords="venture capital, redeemable equity, startup funding, NDEs, non-dividend enterprises, patient capital, innovation"
	section="Essays"
/>

<article class="mx-auto max-w-4xl px-4 pt-8 pb-24">
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
		<Content />
	</div>

	<!-- Share Buttons -->
	<div class="mt-12">
		<ShareButtons title={t.title} />
	</div>

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
