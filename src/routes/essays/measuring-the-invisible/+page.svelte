<!-- src/routes/essays/measuring-the-invisible/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './measuring-the-invisible.md';
	import ContentSv from './measuring-the-invisible-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "Measuring the Invisible: Why We Need a Metric for Aliveness to Replace the Tyranny of GDP",
			subtitle: "The Love, Meaning, and Connection Index (LMCI) as an alternative scoreboard for human flourishing",
			description: "GDP measures everything except what makes life worthwhile. We need a new metric that tracks the 'dark matter' of society—the non-transactional bonds that actually hold us together.",
			published: "February 2025",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Mäta det Osynliga: Varför Vi Behöver ett Mått för Livskraft för att Ersätta BNP:s Tyranni",
			subtitle: "Kärlek, Mening och Anslutning Index (LMCI) som ett alternativt resultatstavla för mänsklig blomstring",
			description: "BNP mäter allt utom det som gör livet värt att leva. Vi behöver ett nytt mått som följer samhällets 'mörka materia'—de icke-transaktionella band som faktiskt håller ihop oss.",
			published: "Februari 2025",
			readTime: "10 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "Measuring the Invisible");
	let seoDescription = $derived(t?.description || "The LMCI as an alternative to GDP for measuring human flourishing");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="GDP, LMCI, human flourishing, metrics, economics, governance, social indicators, well-being, prosperity, alternative economics"
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

	<!-- LMCI Dimensions -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'LMCI Framework' : 'LMCI Ramverk'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">💝</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Love Dimension' : 'Kärleksdimensionen'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Quality of care received and given, self-compassion, relationship strength'
							: 'Kvaliteten på vård som ges och tas emot, självmedkänsla, relationers styrka'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌟</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Meaning Dimension' : 'Meningdimensionen'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Sense of purpose, engagement in work, alignment between values and actions'
							: 'Känsla av syfte, engagemang i arbete, överensstämmelse mellan värderingar och handlingar'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🕸️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Connection Dimension' : 'Anslutningsdimensionen'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Connection to self, community, and nature; social fabric density'
							: 'Anslutning till sig själv, samhälle och natur; socialt tygns täthet'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Emergent Qualities -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Emergent Qualities' : 'Emergenta Kvaliteter'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🎭</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Systemic Benefits of High LMCI' : 'Systemfördelar med Högt LMCI'}
					</h4>
					<div class="mt-2 text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
						<div>• <strong>{$language === 'en' ? 'Playfulness' : 'Lekfullhet'}</strong> → {$language === 'en' ? 'Innovation and creativity' : 'Innovation och kreativitet'}</div>
						<div>• <strong>{$language === 'en' ? 'Freedom' : 'Frihet'}</strong> → {$language === 'en' ? 'Adaptability and resilience' : 'Anpassningsförmåga och motståndskraft'}</div>
						<div>• <strong>{$language === 'en' ? 'Resilience' : 'Motståndskraft'}</strong> → {$language === 'en' ? 'Social stability and cohesion' : 'Social stabilitet och sammanhållning'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/change-paradox"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🏎️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Change Paradox" 
								: "Förändringsparadoxen"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Metabolic Governance for an Accelerating World' 
								: 'Metabolisk styrning för en accelererande värld'}
						</p>
					</div>
				</div>
			</a>
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
								? "The Architecture of Extraction" 
								: "Extraktionens arkitektur"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why Inequality is a Design Choice, Not an Accident' 
								: 'Varför ojämlikhet är ett designval, inte en slump'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/fjarilspartiet"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🦋</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Metamorphosis of Politics" 
								: "Politikens metamorfos"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Designing a Political Vehicle for the Polycrisis' 
								: 'Att utforma ett politiskt verktyg för polykrisen'}
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
