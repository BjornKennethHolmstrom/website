<!-- src/routes/essays/the-infinite-ground/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './the-infinite-ground.md';
	import ContentSv from './the-infinite-ground-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
   title: "The Infinite Ground",
   subtitle: "A Logical and Mathematical Case for an Unlimited Reality",
   description: "Merging the philosophical argument against 'Brute Facts' with the mathematical necessity of Infinity in physics. A unified theory of why reality cannot be finite.",
   published: "Oct 2025",
			readTime: "15 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
   title: "Den oändliga grunden",
   subtitle: "Ett logiskt och matematiskt argument för en obegränsad verklighet",
   description: "Att sammanfoga det filosofiska argumentet mot 'bruta fakta' med den matematiska nödvändigheten av oändlighet inom fysiken. En enhetlig teori om varför verkligheten inte kan vara ändlig.",
   published: "okt 2025",
			readTime: "15 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "The Materialist's Hidden Paradox");
	let seoDescription = $derived(t?.description || "Exploring why materialism cannot explain existence on its own terms");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="materialism, paradox, philosophy, existence, brute fact, special pleading, necessary being, ground of being, metaphysics, ontology"
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

	<!-- Philosophical Context -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Philosophical Context' : 'Filosofiskt Sammanhang'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🏛️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'The Problem of Existence' : 'Existensproblemet'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'This argument engages with one of philosophy\'s oldest questions: "Why is there something rather than nothing?"'
							: 'Detta argument engagerar med en av filosofins äldsta frågor: "Varför finns det något istället för ingenting?"'
						}
					</p>
					<div class="mt-2 text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
						<div>• {$language === 'en' ? 'Leibniz: Principle of sufficient reason' : 'Leibniz: Tillräcklig grunds princip'}</div>
						<div>• {$language === 'en' ? 'Aristotle: The unmoved mover' : 'Aristoteles: Den orörda röraren'}</div>
						<div>• {$language === 'en' ? 'Contemporary: Modal metaphysics' : 'Samtida: Modal metafysik'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Series Connection -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Part of a Series' : 'Del av en Serie'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔗</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Foundational Argument' : 'Grundläggande Argument'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'This essay establishes the necessary ground of being, which subsequent essays explore further.'
							: 'Denna essä etablerar den nödvändiga grunden för tillvaron, som efterföljande essäer utforskar vidare.'
						}
					</p>
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
								? 'Mathematical evidence for the infinite ground of being' 
								: 'Matematiskt bevis för den oändliga grunden för tillvaron'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/simulation-theory"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🕹️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Why the Universe Can't Be a Simulation" 
								: "Varför Universum Inte Kan Vara en Simulering"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Physics catches up to philosophy on non-algorithmic reality' 
								: 'Fysiken ikapp filosofin om icke-algoritmisk verklighet'}
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
								: "Varför sökandet efter ett ursprung är ett kategorifel"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why the Search for an Origin is a Category Error' 
								: 'Omfamnande det kända, okända och oändliga i emergens'}
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
