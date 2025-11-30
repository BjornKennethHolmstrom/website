<!-- src/routes/essays/the-surplus-trap/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './the-surplus-trap.md';
	import ContentSv from './the-surplus-trap-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Surplus Trap",
			subtitle: "Why AI is the Latest Bubble and How to Build Real Value",
			description: "The AI ​​bubble is not about technological maturity—it's about capital that has nowhere else to go. A systems analysis of excess capital accumulation and the path to a regenerative economy.",
			published: "November 2025",
			readTime: "12 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Överskottsfällan",
			subtitle: "Varför AI är den senaste bubblan och hur man bygger verkligt värde",
			description: "AI-bubblan handlar inte om teknologisk mognad—den handlar om kapital som inte har någon annanstans att ta vägen. En systemanalys av överskottskapitalackumulation och vägen till regenerativ ekonomi.",
			published: "November 2025",
			readTime: "12 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "The Surplus Trap");
	let seoDescription = $derived(t?.description || "Understanding the AI bubble as a capital accumulation crisis");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="surplus capital, AI bubble, capital accumulation, fictitious capital, regenerative economics, global governance, sovereign debt, commons dividend, temporal fix, spatial fix"
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

	<!-- Economic Concepts -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Key Economic Concepts' : 'Nyckelbegrepp inom Ekonomi'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">💧</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Surplus Capital' : 'Överskottskapital'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Money that has accumulated so massively it can no longer find profitable outlets in the real economy'
							: 'Pengars som ackumulerats så massivt att de inte längre kan hitta lönsamma investeringar i den reala ekonomin'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌐</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Temporal Fix' : 'Temporalt Fix'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Moving capital into the future through speculation and credit when spatial expansion is exhausted'
							: 'Att flytta kapital in i framtiden genom spekulation och kredit när rumslig expansion är uttömd'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌱</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Fictitious Capital' : 'Fiktivt Kapital'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Claims on future wealth that does not yet exist, creating bubbles'
							: 'Anspråk på framtida rikedom som inte ännu existerar, vilket skapar bubblor'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Solutions Framework -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Regenerative Solutions' : 'Regenerativa Lösningar'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔄</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Three Pathways for Capital Redirection' : 'Tre Vägar för Kapitalomdirigering'}
					</h4>
					<div class="mt-2 text-sm space-y-2" style="color: var(--color-page-text); opacity: 0.8;">
						<div><strong>1. {$language === 'en' ? 'Living Capital' : 'Levande Kapital'}:</strong> {$language === 'en' ? 'Invest in biosphere regeneration' : 'Investera i biosfärens regenerering'}</div>
						<div><strong>2. {$language === 'en' ? 'Sovereign Debt Transformation' : 'Suverän Skuldomvandling'}:</strong> {$language === 'en' ? 'Convert debt into ecological regeneration' : 'Omvandla skuld till ekologisk regenerering'}</div>
						<div><strong>3. {$language === 'en' ? 'Commons Dividend' : 'Allmäningsutdelning'}:</strong> {$language === 'en' ? 'Treat AI infrastructure as commons' : 'Behandla AI-infrastruktur som allmänning'}</div>
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
								? 'A blueprint for global governance that addresses the polycrisis through interconnected frameworks' 
								: 'En ritning för global styrning som hanterar polykrisen genom sammankopplade ramverk'}
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
