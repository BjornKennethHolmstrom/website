<!-- src/routes/essays/geometry-of-insight/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './geometry-of-insight.md';
	import ContentSv from './geometry-of-insight-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Geometry of Insight",
			subtitle: "Why Rationality is Not Enough to Understand an Infinite Reality",
			description: "A seven-dimensional framework for understanding that integrates cognitive models, behavioral competence, mathematical elegance, developmental stages, ontological creativity, ethical purpose, and embodied wisdom.",
			published: "December 2025",
			readTime: "20 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Insiktens geometri",
			subtitle: "Varför rationalitet inte räcker för att förstå en oändlig verklighet",
			description: "Ett sjudimensionellt ramverk för förståelse som integrerar kognitiva modeller, beteendekompetens, matematisk elegans, utvecklingsstadier, ontologisk kreativitet, etiskt syfte och förkroppsligad visdom.",
			published: "December 2025",
			readTime: "20 min läsning",
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
	keywords="understanding, epistemology, rationality, wisdom, developmental psychology, spiral dynamics, embodied cognition, ontology, ethics, systems thinking, Leo Gura, consciousness, governance, God, integral theory"
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

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/ai-consciousness"
				class="block p-4 rounded-lg transition-colors hover:opacity-90"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🤖</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Epistemology of Illusion" 
								: "Illusionens epistemologi"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Why AI fails at 'truth' and what it teaches us about consciousness" 
								: "Varför AI misslyckas med 'sanning' och vad den lär oss om medvetandet"}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/project-janus"
				class="block p-4 rounded-lg transition-colors hover:opacity-90"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🎭</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Architecture of Wholeness" 
								: "Helhetens arkitektur"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'A complete framework for computational modeling of human complexity' 
								: 'Ett komplett ramverk för beräkningsmodellering av mänsklig komplexitet'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/lost-ability"
				class="block p-4 rounded-lg transition-colors hover:opacity-90"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🧘</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Architecture of Stillness" 
								: "Stillhetens arkitektur"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why we lost the ability to just be and how embodied wisdom works' 
								: 'Varför vi förlorade förmågan att bara vara och hur förkroppsligad visdom fungerar'}
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
