<!-- src/routes/essays/architecture-of-the-open-hand/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the English parts
	import PartIEn from './part-i.md';
	import PartIIEn from './part-ii.md';
	import PartIIIEn from './part-iii.md';
	import PartIVEn from './part-iv.md';
	import PartVEn from './part-v.md';
	import PartVIEn from './part-vi.md';

	// Import the Swedish parts
	import PartISv from './part-i-sv.md';
	import PartIISv from './part-ii-sv.md';
	import PartIIISv from './part-iii-sv.md';
	import PartIVSv from './part-iv-sv.md';
	import PartVSv from './part-v-sv.md';
	import PartVISv from './part-vi-sv.md';

	// Determine which parts to use based on language
	let PartI = $derived($language === 'sv' ? PartISv : PartIEn);
	let PartII = $derived($language === 'sv' ? PartIISv : PartIIEn);
	let PartIII = $derived($language === 'sv' ? PartIIISv : PartIIIEn);
	let PartIV = $derived($language === 'sv' ? PartIVSv : PartIVEn);
	let PartV = $derived($language === 'sv' ? PartVSv : PartVEn);
	let PartVI = $derived($language === 'sv' ? PartVISv : PartVIEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Architecture of the Open Hand",
			subtitle: "Why We Fight and How We Design Peace",
			description: "A child asks: Why is there war? This essay traces the question from its metaphysical roots through systemic analysis to architectural solutions—from the illusion of separation to the design specifications for peace.",
			published: "December 2024",
			readTime: "25 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Öppna handens arkitektur",
			subtitle: "Varför vi krigar och hur vi designar fred",
			description: "Ett barn frågar: Varför finns det krig? Denna essä spårar frågan från dess metafysiska rötter genom systemanalys till arkitektoniska lösningar—från illusionen av separation till designspecifikationer för fred.",
			published: "December 2024",
			readTime: "25 min läsning",
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
					title: "The Innocent Question",
					sections: [
						"The child's question",
						"The shallow answer and the deep truth",
						"War as structural consequence of epistemic error"
					]
				},
				{
					number: 2,
					title: "The Diagnosis: The Epistemic Error",
					sections: [
						"The separate self as perceptual error",
						"Separation as latency error in feedback loops",
						"From individual error to collective institution",
						"Moloch: the god of negative-sum games",
						"Moral responsibility within systemic analysis"
					]
				},
				{
					number: 3,
					title: "The Trap: When Good Intentions Meet Bad Incentives",
					sections: [
						"Individual virtue vs. systemic design",
						"The coordination failure",
						"The political reification of the separate self",
						"The ecological dimension: material basis of war",
						"The closing window"
					]
				},
				{
					number: 4,
					title: "The Solution: Trans-Rational Architecture",
					sections: [
						"The trans-rational move",
						"Addressing the Pacifist's Dilemma",
						"The Porcupine Strategy",
						"The Lifeboats: Hearts, BAZs, Treaty of the Circle",
						"Why this isn't utopian",
						"First concrete steps"
					]
				},
				{
					number: 5,
					title: "The Transition Pathway: From Here to There",
					sections: [
						"Not revolution, but architecture",
						"Three-phase strategy",
						"Current focus and pilot jurisdictions",
						"Commons Fund and Hearts/Leaves as tangible first steps"
					]
				},
				{
					number: 6,
					title: "Conclusion: The New Answer to the Child",
					sections: [
						"Returning to the child's question",
						"The architect's answer",
						"Peace as design specification"
					]
				}
			]
		},
		sv: {
			title: "Innehållsförteckning",
			parts: [
				{
					number: 1,
					title: "Den oskyldiga frågan",
					sections: [
						"Barnets fråga",
						"Det ytliga svaret och den djupa sanningen",
						"Krig som strukturell konsekvens av epistemiskt fel"
					]
				},
				{
					number: 2,
					title: "Diagnosen: Det epistemiska felet",
					sections: [
						"Det separata jaget som perceptuellt fel",
						"Separation som latensfel i återkopplingsslingor",
						"Från individuellt fel till kollektiv institution",
						"Molok: de negativa summespelets gud",
						"Moraliskt ansvar inom systemanalys"
					]
				},
				{
					number: 3,
					title: "Fällan: När goda avsikter möter dåliga incitament",
					sections: [
						"Individuell dygd kontra systemdesign",
						"Koordinationsmisslyckandet",
						"Det separata jagets politiska reifiering",
						"Den ekologiska dimensionen: krigets materiella grund",
						"Det stängande fönstret"
					]
				},
				{
					number: 4,
					title: "Lösningen: Transrationell arkitektur",
					sections: [
						"Det transrationella draget",
						"Pacifistens dilemma",
						"Igelkottsstrategin",
						"Livbåtarna: Hearts, BAZs, Cirkelns fördrag",
						"Varför detta inte är utopiskt",
						"Första konkreta steg"
					]
				},
				{
					number: 5,
					title: "Övergångsvägen: Härifrån till dit",
					sections: [
						"Inte revolution, utan arkitektur",
						"Tre-fas strategi",
						"Nuvarande fokus och pilotjurisdiktioner",
						"Commons Fund och Hearts/Leaves som konkreta första steg"
					]
				},
				{
					number: 6,
					title: "Slutsats: Det nya svaret till barnet",
					sections: [
						"Återvändande till barnets fråga",
						"Arkitektens svar",
						"Fred som designspecifikation"
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
	keywords="war, peace, systems thinking, bioregionalism, governance, hearts currency, separation, moloch, architecture"
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
		<div class="flex flex-wrap items-center gap-4 mb-6 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.author}</span>
			<span>•</span>
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
		
		<!-- Download PDF Button -->
		<a
			href="/essays/architecture-of-the-open-hand{$language === 'sv' ? '-sv' : ''}.pdf"
			download
			class="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:opacity-80"
			style="background-color: var(--color-separator); color: var(--color-page-text);"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
				<path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
				<path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
			</svg>
			<span class="font-medium">
				{#if $language === 'en'}
					Download complete PDF
				{:else}
					Ladda ner komplett PDF
				{/if}
			</span>
		</a>
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
								{#if $language === 'en'}
									Part {part.number}: {part.title}
								{:else}
									Del {part.number}: {part.title}
								{/if}
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
	<div class="not-prose mb-8 flex justify-center gap-2 flex-wrap">
		{#each [1, 2, 3, 4, 5, 6] as partNum}
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
				{#if $language === 'en'}
					Part {partNum}
				{:else}
					Del {partNum}
				{/if}
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
			<PartI />
		{:else if currentPart === 2}
			<PartII />
		{:else if currentPart === 3}
			<PartIII />
		{:else if currentPart === 4}
			<PartIV />
		{:else if currentPart === 5}
			<PartV />
		{:else if currentPart === 6}
			<PartVI />
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

			{#if currentPart < 6}
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
