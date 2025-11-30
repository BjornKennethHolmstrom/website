<!-- src/routes/essays/continuity-of-life/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './continuity-of-life.md';
	import ContentSv from './continuity-of-life-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
   title: "The Continuity of Life",
   subtitle: "Why the Search for an Origin is a Category Error",
   description: "We haven't found the 'spark' of life because life isn't a binary switch; it's a continuous spectrum. The biological case for the Moral Operating System and Rights of Nature.",
   published: "December 2024",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
   title: "Livets kontinuitet",
   subtitle: "Varför sökandet efter ett ursprung är ett kategorifel",
   description: "Vi har inte hittat livets 'gnista' eftersom livet inte är en binär brytare; det är ett kontinuerligt spektrum. Det biologiska argumentet för det moraliska operativsystemet och naturens rättigheter.",
			published: "December 2024",
			readTime: "10 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "The Origin of Life");
	let seoDescription = $derived(t?.description || "Exploring life's emergence through scientific, philosophical and infinite perspectives");
	let seoPublished = $derived(t?.published || "2024");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="origin of life, emergence, reductionism, infinite ground, biology, philosophy of science, complexity, self-organization, abiogenesis, systems thinking"
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

	<!-- Scientific Context -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Scientific Landscape' : 'Vetenskapligt Landskap'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔬</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Current Research Directions' : 'Nuvarande Forskningsriktningar'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'The origin of life remains one of science\'s greatest unsolved problems, with multiple competing hypotheses.'
							: 'Livets ursprung förblir ett av vetenskapens största olösta problem, med flera konkurrerande hypoteser.'
						}
					</p>
					<div class="mt-2 text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
						<div>• {$language === 'en' ? 'RNA World: Self-replicating molecules' : 'RNA-värld: Självreplikerande molekyler'}</div>
						<div>• {$language === 'en' ? 'Metabolism First: Chemical networks' : 'Metabolism Först: Kemiska nätverk'}</div>
						<div>• {$language === 'en' ? 'Panspermia: Extraterrestrial origins' : 'Panspermia: Extraterrestriskt ursprung'}</div>
						<div>• {$language === 'en' ? 'Complex Systems: Emergent properties' : 'Komplexa System: Emergenta egenskaper'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Philosophical Integration -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Philosophical Integration' : 'Filosofisk Integration'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌌</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Beyond Reductionism' : 'Bortom Reduktionism'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'This essay bridges scientific inquiry with philosophical understanding of infinite ground.'
							: 'Denna essä överbryggar vetenskaplig undersökning med filosofisk förståelse av oändlig grund.'
						}
					</p>
					<div class="mt-2 text-sm" style="color: var(--color-page-text); opacity: 0.8;">
						{$language === 'en' 
							? 'Rather than choosing between science and mystery, we explore how they illuminate different aspects of the same reality.'
							: 'Istället för att välja mellan vetenskap och mysterium, utforskar vi hur de belyser olika aspekter av samma verklighet.'
						}
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
								? 'Foundational critique of materialist explanations of existence' 
								: 'Grundläggande kritik av materialistiska förklaringar av tillvaron'}
						</p>
					</div>
				</div>
			</a>
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
								? 'Mathematical evidence for infinite ground underlying reality' 
								: 'Matematiskt bevis för oändlig grund underliggande verkligheten'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/mycelial-economy"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🍄</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Understanding Infinite Intelligence" 
								: "Att Förstå Oändlig Intelligens"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Systems perspective on intelligence as permeating phenomenon' 
								: 'Systemperspektiv på intelligens som genomsyrande fenomen'}
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
