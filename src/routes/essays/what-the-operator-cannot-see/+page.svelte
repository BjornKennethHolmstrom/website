<!-- src/routes/essays/what-the-operator-cannot-see/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content (adjust the file names as needed)
	import ContentEn from './what-the-operator-cannot-see.md';
	import ContentSv from './what-the-operator-cannot-see-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "What the Operator Cannot See",
			subtitle: "Structural conditions for perceiving well enough to govern",
			description: "A practical translation of the Governance as Engineering framework. The limits of a decision-maker's perception become the limits of the institution – and how structural diversity can correct for what no individual can perceive alone.",
			published: "June 2026",
			readTime: "18 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Vad operatören inte kan se",
			subtitle: "Strukturella förutsättningar för att uppfatta tillräckligt väl för att styra",
			description: "En praktisk översättning av ramverket Governance as Engineering. En beslutsfattares perceptuella gränser blir institutionens gränser – och hur strukturell mångfald kan korrigera det ingen individ kan uppfatta ensam.",
			published: "Juni 2026",
			readTime: "18 min läsning",
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
	keywords="governance, perception, institutional design, blind spots, decision-making, structural diversity, cognitive limits, leadership, operator, sensemaking"
	section="Essays"
/>

<article class="mx-auto max-w-4xl px-4 pt-8 pb-24">
	<!-- Back to Essays -->
  <div class="mb-10">
    <a href="/essays" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
      style="color: var(--color-page-accent);">
   			{$language === 'en' ? '< Back to Essays' : '< Tillbaka till essäer'}
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
			<!-- Cross-link to The Boundary and the Blind Spot -->
			<a
				href="/essays/boundary-blind-spot"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🔦</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The Boundary and the Blind Spot' 
								: 'Gränsen och den blinda fläcken'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Nondual insight and the architecture of governance' 
								: 'Icke‑dualitet och styrningens arkitektur'}
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
								? 'The broader governance framework containing the Oracle Protocol' 
								: 'Det bredare governance-ramverket som innehåller Oracle-protokollet'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/the-ai-mirror"
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
				href="/essays/ai-consciousness"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🤖</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The AI That Can't Know It's Wrong" 
								: "AI:n som inte kan veta att den har fel"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The epistemological blind spot that makes governance essential' 
								: 'Den epistemologiska blind fläcken som gör governance essentiell'}
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
