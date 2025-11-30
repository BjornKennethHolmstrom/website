<!-- src/routes/essays/fjarilspartiet/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './metamorphosis-of-politics.md';
	import ContentSv from './metamorphosis-of-politics-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Metamorphosis of Politics",
			subtitle: "Designing a Political Vehicle for the Polycrisis",
			description: "A new political initiative in Sweden designed to facilitate society's transformation through developmental thinking, AUBI, and digital democracy tools.",
			published: "February 2025",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Politikens metamorfos",
			subtitle: "Att utforma ett politiskt verktyg för polykrisen",
			description: "Ett nytt politiskt initiativ i Sverige designat för att underlätta samhällets transformation genom utvecklingstänkande, AUBI och digitala demokrativerktyg.",
			published: "Februari 2025",
			readTime: "10 min läsning",
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
	keywords="Fjärilspartiet, Swedish politics, AUBI, spiral dynamics, open-source, digital democracy, political transformation, developmental approach, adaptive UBI"
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

	<!-- External Links -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Explore Fjärilspartiet' : 'Utforska Fjärilspartiet'}
		</h3>
		<div class="space-y-3">
			<a
				href="https://fjarilspartiet.se"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-3 p-3 rounded transition-colors hover:opacity-80"
				style="background-color: var(--color-card-bg); color: var(--color-page-text);"
			>
				<span class="text-2xl">🦋</span>
				<div>
					<h4 class="font-bold">fjarilspartiet.se</h4>
					<p class="text-sm opacity-70">
						{$language === 'en' ? 'Official website' : 'Officiell webbplats'}
					</p>
				</div>
			</a>
			<a
				href="https://github.com/fjarilspartiet-se"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-3 p-3 rounded transition-colors hover:opacity-80"
				style="background-color: var(--color-card-bg); color: var(--color-page-text);"
			>
				<span class="text-2xl">💻</span>
				<div>
					<h4 class="font-bold">GitHub Repository</h4>
					<p class="text-sm opacity-70">
						{$language === 'en' ? 'Open-source projects and documentation' : 'Öppen källkod-projekt och dokumentation'}
					</p>
				</div>
			</a>
		</div>
	</div>

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/wealth-system"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">⚖️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The System That Makes the Rich Richer" 
								: "Systemet som gör de rika rikare"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The economic analysis behind AUBI and wealth redistribution' 
								: 'Den ekonomiska analysen bakom AUBI och omfördelning av rikedom'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/treaty-blueprint"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌐</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Treaty for Our Only Home" 
								: "Fördrag för Vårt Enda Hem"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The global governance framework that complements national transformation' 
								: 'Det globala governance-ramverket som kompletterar nationell transformation'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="https://spiralize.org"
				target="_blank"
				rel="noopener noreferrer"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌀</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							Spiralize.org
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Free assessment tool for understanding developmental values' 
								: 'Gratis bedömningsverktyg för att förstå utvecklingsvärden'}
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
