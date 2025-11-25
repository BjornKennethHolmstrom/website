<!-- src/routes/essays/alchemists-dilemma/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the three parts of the essay
	import Part1 from './part1.md';
	import Part2 from './part2.md';
	import Part3 from './part3.md';

	// Essay metadata
	const metadata = {
		en: {
			title: "The Alchemist's Dilemma: Holding Power Lightly in the Transition",
			subtitle: "A Protocol for Conscious Capital",
			description: "Can you touch money without being poisoned by it? This manifesto argues yes—but only through rigorous accountability, community oversight, and the willingness to compost your accumulation.",
			published: "November 2024",
			readTime: "60 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Alkemistens dilemma: Att hålla makt lätt under övergången",
			subtitle: "Ett protokoll för medvetet kapital",
			description: "Kan du röra pengar utan att förgiftas av dem? Detta manifest hävdar ja—men endast genom rigorös ansvarighet, gemenskapsövervakning och viljan att kompostera din ackumulering.",
			published: "November 2024",
			readTime: "60 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata
	let t = $derived(metadata[$language] || metadata.en);

	// Navigation state for parts
	let currentPart = $state(1);
	let showTableOfContents = $state(false);

	// Table of contents structure
	const tableOfContents = {
		en: {
			title: "Table of Contents",
			parts: [
				{
					number: 1,
					title: "Recognition, Opening, and Core Framework",
					sections: [
						"Recognition: Who Gets to Have This Conversation",
						"Opening Story: The $650k Inheritance",
						"The Alchemist and the Compost Heap",
						"1. The Paralysis of Purity: The Saint's Trap",
						"2. The Three States of Capital: Stock, Flow, and Lightning",
						"3. The Sovereign Floor: How Much Personal Resilience Is Moral"
					]
				},
				{
					number: 2,
					title: "The Enforcement Mechanisms",
					sections: [
						"4. The First Fruits Rule: Immediate Structural Redistribution",
						"5. Permissible Aims for Surplus",
						"6. The Dynastic Sunset Clause: Composting Yourself",
						"7. The Spiritual Hazard: The Quarterly Janus Check"
					]
				},
				{
					number: 3,
					title: "Community Accountability and Living the Practice",
					sections: [
						"8. Community Accountability Structures",
						"9. The Integration Paradox: Conscious Code-Switching",
						"10. The Transitionary Commitment: Your Living Vow",
						"11. Practical Implementation: Getting Started This Week",
						"12. The Companion Resources",
						"Closing: From Burden to Liberated Momentum"
					]
				}
			]
		},
		sv: {
			title: "Innehållsförteckning",
			parts: [
				{
					number: 1,
					title: "Erkännande, inledning och kärnramverk",
					sections: [
						"Erkännande: Vem får ha denna konversation",
						"Inledande berättelse: 650k arvet",
						"Alkemisten och komposthögen",
						"1. Renhetens förlamning: Helgonets fälla",
						"2. Kapitalets tre tillstånd: Lager, flöde och blixt",
						"3. Det suveräna golvet: Hur mycket personlig motståndskraft är moralisk"
					]
				},
				{
					number: 2,
					title: "Verkställighetsmekanismerna",
					sections: [
						"4. Förstfruktregeln: Omedelbar strukturell omfördelning",
						"5. Tillåtna mål för överskott",
						"6. Den dynastiska solnedgångsklausulen: Kompostera dig själv",
						"7. Den andliga faran: Den kvartalsvisa Janus-kontrollen"
					]
				},
				{
					number: 3,
					title: "Gemenskapsansvar och att leva praktiken",
					sections: [
						"8. Strukturer för gemenskapsansvar",
						"9. Integrationsparadoxen: Medveten kodväxling",
						"10. Övergångsåtagandet: Ditt levande löfte",
						"11. Praktisk implementering: Komma igång denna vecka",
						"12. Kompletterande resurser",
						"Avslutning: Från börda till befriad momentum"
					]
				}
			]
		}
	};

	let toc = $derived(tableOfContents[$language] || tableOfContents.en);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<SEO
	title={t.title}
	description={t.description}
	type="article"
	publishedTime={t.published}
	keywords="wealth, ethics, accountability, capitalism, protocol, transformation, regenerative"
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
		<div class="flex flex-wrap gap-4 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.author}</span>
			<span>•</span>
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
	</header>

	<!-- Table of Contents Toggle -->
	<div class="not-prose mb-8">
		<button
			onclick={() => showTableOfContents = !showTableOfContents}
			class="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
			style="background-color: var(--color-separator); color: var(--color-page-text);"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					clip-rule="evenodd"
				/>
			</svg>
			<span class="font-medium">{toc.title}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-4 w-4 transition-transform {showTableOfContents ? 'rotate-180' : ''}"
			>
				<path
					fill-rule="evenodd"
					d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>

		{#if showTableOfContents}
			<nav
				class="mt-4 p-6 rounded-lg"
				style="background-color: var(--color-card-bg); border: 1px solid var(--color-separator);"
			>
				<div class="space-y-6">
					{#each toc.parts as part}
						<div>
							<button
								onclick={() => { currentPart = part.number; showTableOfContents = false; scrollToTop(); }}
								class="text-lg font-bold mb-2 hover:opacity-70 transition-opacity text-left"
								style="color: var(--color-page-text);"
							>
								Part {part.number}: {part.title}
							</button>
							<ul class="ml-4 space-y-1">
								{#each part.sections as section}
									<li class="text-sm" style="color: var(--color-page-text); opacity: 0.7;">
										{section}
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</nav>
		{/if}
	</div>

	<!-- Part Navigation -->
	<div class="not-prose mb-8 flex justify-center gap-2">
		{#each [1, 2, 3] as partNum}
			<button
				onclick={() => { currentPart = partNum; scrollToTop(); }}
				class="px-6 py-3 rounded-lg font-medium transition-all"
				class:active={currentPart === partNum}
				style="
					background-color: {currentPart === partNum ? 'var(--color-page-accent)' : 'var(--color-separator)'};
					color: var(--color-page-text);
					opacity: {currentPart === partNum ? '1' : '0.6'};
				"
			>
				Part {partNum}
			</button>
		{/each}
	</div>

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
		{#if currentPart === 1}
			<Part1 />
		{:else if currentPart === 2}
			<Part2 />
		{:else if currentPart === 3}
			<Part3 />
		{/if}
	</div>

	<!-- Navigation Between Parts -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<div class="flex justify-between items-center">
			{#if currentPart > 1}
				<button
					onclick={() => { currentPart--; scrollToTop(); }}
					class="flex items-center gap-2 px-6 py-3 rounded-lg transition-opacity hover:opacity-70"
					style="background-color: var(--color-separator); color: var(--color-page-text);"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
						<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
					</svg>
					{$language === 'en' ? 'Previous Part' : 'Föregående del'}
				</button>
			{:else}
				<div></div>
			{/if}

			{#if currentPart < 3}
				<button
					onclick={() => { currentPart++; scrollToTop(); }}
					class="flex items-center gap-2 px-6 py-3 rounded-lg transition-opacity hover:opacity-70"
					style="background-color: var(--color-separator); color: var(--color-page-text);"
				>
					{$language === 'en' ? 'Next Part' : 'Nästa del'}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
						<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
					</svg>
				</button>
			{:else}
				<div></div>
			{/if}
		</div>
	</nav>

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

<style>
	button.active {
		transform: scale(1.05);
	}
</style>
