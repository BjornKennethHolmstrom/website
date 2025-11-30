<!-- src/routes/essays/simulation-theory/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './non-algorithmic-ground.md';
	import ContentSv from './non-algorithmic-ground-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Non-Algorithmic Ground",
			subtitle: "Why Reality Cannot Be Simulated",
			description: "Physics meets Philosophy: Why Gödel's theorems suggest reality is not a computer, and why we must build civilization for the 'uncomputable' aspects of being.",
			published: "November 2025",
			readTime: "8 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
   title: "Den icke-algoritmiska grunden",
   subtitle: "Varför verkligheten inte kan simuleras",
   description: "Fysik möter filosofi: Varför Gödels satser antyder att verkligheten inte är en dator, och varför vi måste bygga civilisation för de 'icke-beräknebara' aspekterna av varandet.",
			published: "November 2025",
			readTime: "8 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "Simulation Theory Essay");
	let seoDescription = $derived(t?.description || "Exploring why the universe cannot be a simulation based on recent physics research");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="simulation theory, physics, philosophy, ground of being, Gödel, quantum physics, non-duality, materialism, metaphysics, necessary being"
	section="Essays"
/>

<!-- Rest of the component remains the same -->
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

	<!-- Research Reference -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Physics Research Reference' : 'Fysikforskningsreferens'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔬</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						Mir Faizal et al. - Non-algorithmic Foundations of Physics
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Research demonstrating mathematical limits to computational descriptions of reality'
							: 'Forskning som demonstrerar matematiska gränser för beräkningsbeskrivningar av verkligheten'
						}
					</p>
					<p class="text-sm mt-2" style="color: var(--color-page-text); opacity: 0.8;">
						{$language === 'en' 
							? 'Building on Gödel\'s incompleteness theorems and computational limits in physics.'
							: 'Bygger på Gödels ofullständighetsteorem och beräkningsgränser i fysiken.'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Nondualize.org Resource -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Explore Non-Dual Understanding' : 'Utforska Icke-Dual Förståelse'}
		</h3>
		<a
			href="https://www.nondualize.org"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-3 p-4 rounded transition-colors hover:opacity-80"
			style="background-color: var(--color-card-bg); color: var(--color-page-text);"
		>
			<span class="text-3xl">🌌</span>
			<div class="flex-1">
				<h4 class="font-bold">Nondualize.org</h4>
				<p class="text-sm opacity-70">
					{$language === 'en' 
						? 'Free resource exploring reality beyond real vs. unreal distinctions'
						: 'Gratis resurs som utforskar verkligheten bortom real vs. oreal-distinktioner'
					}
				</p>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 opacity-70">
				<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
			</svg>
		</a>
	</div>

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/alchemists-dilemma"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">⚗️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "When Mathematics Points Beyond Itself" 
								: "När Matematik Pekar Förbi Sig Själv"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'How mathematical necessity points toward an infinite ground of being' 
								: 'Hur matematisk nödvändighet pekar mot en oändlig grund för tillvaron'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/the-infinite-ground"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">♾️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Infinite Ground" 
								: "Den oändliga grunden"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why materialism cannot explain existence on its own terms' 
								: 'Varför materialism inte kan förklara tillvaron på sina egna villkor'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/continuity-of-life"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌱</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Continuity of Life" 
								: "Livets kontinuitet"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why the Search for an Origin is a Category Error' 
								: 'Varför sökandet efter ett ursprung är ett kategorifel'}
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
