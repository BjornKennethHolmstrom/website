<!-- src/routes/essays/ai-consciousness/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './epistemology-of-illusion.md';
	import ContentSv from './epistemology-of-illusion-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Epistemology of Illusion",
			subtitle: "Why AI Fails at 'Truth' and What It Teaches Us About Ourselves",
			description: "A new study reveals that AI models cannot distinguish belief from knowledge, exposing an epistemological blind spot that reflects our own understanding of truth and consciousness.",
			published: "November 2025",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Illusionens epistemologi",
			subtitle: "Varför AI misslyckas med 'sanningen' och vad den lär oss om oss själva",
			description: "En ny studie avslöjar att AI-modeller inte kan skilja tro från kunskap, vilket blottlägger en epistemologisk blind fläck som reflekterar vår egen förståelse av sanning och medvetande.",
			published: "November 2025",
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
	keywords="AI, epistemology, consciousness, knowledge, belief, nonduality, language models, DeepSeek, philosophy of mind, two truths, map-territory"
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

	<!-- Study Reference -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Study Reference' : 'Studiereferens'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">📄</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						"Language models cannot reliably distinguish belief from knowledge and fact"
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						Nature Machine Intelligence, 2025
					</p>
					<p class="text-sm mt-2" style="color: var(--color-page-text); opacity: 0.8;">
						{$language === 'en' 
							? 'The research paper that inspired this analysis, testing 24 language models across 13 epistemic tasks.'
							: 'Forskningsartikeln som inspirerade denna analys, testande 24 språkmodeller över 13 epistemiska uppgifter.'
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
				href="/essays/breaking-the-mirror"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🪞</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The AI Mirror" 
								: "AI-spegeln"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'What our distrust of AI reveals about the nature of self' 
								: 'Vad vår misstro mot AI avslöjar om självets natur'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/ai-governance"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🏛️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Why AI Consciousness Demands Governance" 
								: "Varför AI-medvetande kräver governance"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The governance implications of AI epistemological limitations' 
								: 'Governance-implikationerna av AI:s epistemologiska begränsningar'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/project-janus"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🎭</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Project Janus" 
								: "Project Janus"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Blueprint for modeling human knowledge and belief systems' 
								: 'Blueprint för att modellera mänskliga kunskaps- och trossystem'}
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
