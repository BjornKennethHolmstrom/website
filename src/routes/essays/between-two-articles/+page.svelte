<!-- src/routes/essays/between-two-articles/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the English parts
	import SectionIEn from './section-1.md';
	import SectionIIEn from './section-2.md';
	import SectionIIIEn from './section-3.md';
	import SectionIVEn from './section-4.md';
	import SectionVEn from './section-5.md';
	import SectionVIEn from './section-6.md';
	import SectionVIIEn from './section-7.md';
	import SectionVIIIEn from './section-8.md';
	import SectionIXEn from './section-9.md';

	// Import the Swedish parts
	import SectionISv from './section-1-sv.md';
	import SectionIISv from './section-2-sv.md';
	import SectionIIISv from './section-3-sv.md';
	import SectionIVSv from './section-4-sv.md';
	import SectionVSv from './section-5-sv.md';
	import SectionVISv from './section-6-sv.md';
	import SectionVIISv from './section-7-sv.md';
	import SectionVIIISv from './section-8-sv.md';
	import SectionIXSv from './section-9-sv.md';

	// Determine which parts to use based on language
	let SectionI = $derived($language === 'sv' ? SectionISv : SectionIEn);
	let SectionII = $derived($language === 'sv' ? SectionIISv : SectionIIEn);
	let SectionIII = $derived($language === 'sv' ? SectionIIISv : SectionIIIEn);
	let SectionIV = $derived($language === 'sv' ? SectionIVSv : SectionIVEn);
	let SectionV = $derived($language === 'sv' ? SectionVSv : SectionVEn);
	let SectionVI = $derived($language === 'sv' ? SectionVISv : SectionVIEn);
	let SectionVII = $derived($language === 'sv' ? SectionVIISv : SectionVIIEn);
	let SectionVIII = $derived($language === 'sv' ? SectionVIIISv : SectionVIIIEn);
	let SectionIX = $derived($language === 'sv' ? SectionIXSv : SectionIXEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "Between Two Articles",
			subtitle: "What the World Bank and Cisco Reveal About the Consciousness We've Outgrown",
			description: "On February 11, 2026, two documents were published. One described how to create jobs for 1.2 billion young humans. The other described how to build collective intelligence for AI agents. They did not reference each other. This essay holds them together—and asks what emerges in the space between.",
			published: "February 2026",
			readTime: "35 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Mellan två artiklar",
			subtitle: "Vad Världsbanken och Cisco avslöjar om medvetandet vi vuxit ifrån",
			description: "Den 11 februari 2026 publicerades två dokument. Det ena beskrev hur man skapar jobb för 1,2 miljarder unga människor. Det andra beskrev hur man bygger kollektiv intelligens för AI-agenter. De refererade inte till varandra. Denna essä håller dem samman—och frågar vad som uppstår i rummet däremellan.",
			published: "Februari 2026",
			readTime: "35 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata
	let t = $derived(metadata[$language] || metadata.en);

	// Navigation state for sections
	let currentSection = $state(1);
	let showTableOfContents = $state(false);

	// Table of contents structure
	const tableOfContents = {
		en: {
			title: "Table of Contents",
			sections: [
				{
					number: 1,
					title: "The Artifacts",
					subtitle: "Two documents, one world, no conversation."
				},
				{
					number: 2,
					title: "The Frame",
					subtitle: "What ORANGE sees, and what it cannot see."
				},
				{
					number: 3,
					title: "The Collision",
					subtitle: "What happens when you hold them together."
				},
				{
					number: 4,
					title: "The Diagnosis",
					subtitle: "A Spiral Dynamics reading, and what it reveals."
				},
				{
					number: 5,
					title: "The Questions ORANGE Cannot Ask",
					subtitle: "Performing YELLOW."
				},
				{
					number: 6,
					title: "The Addiction",
					subtitle: "Control, and the cost of keeping it."
				},
				{
					number: 7,
					title: "The Emergence",
					subtitle: "Trust, and what it requires."
				},
				{
					number: 8,
					title: "The Becoming",
					subtitle: "Who are we, now?"
				},
				{
					number: 9,
					title: "Coda",
					subtitle: "For the one holding the contradiction."
				}
			]
		},
		sv: {
			title: "Innehållsförteckning",
			sections: [
				{
					number: 1,
					title: "Artefakterna",
					subtitle: "Två dokument, en värld, ingen dialog."
				},
				{
					number: 2,
					title: "Ramverket",
					subtitle: "Vad ORANGE ser, och vad det inte kan se."
				},
				{
					number: 3,
					title: "Kollisionen",
					subtitle: "Vad händer när du håller dem samman."
				},
				{
					number: 4,
					title: "Diagnosen",
					subtitle: "En Spiral Dynamics-läsning, och vad den avslöjar."
				},
				{
					number: 5,
					title: "Frågorna ORANGE inte kan ställa",
					subtitle: "Att performa GULT."
				},
				{
					number: 6,
					title: "Beroendet",
					subtitle: "Kontroll, och priset för att upprätthålla den."
				},
				{
					number: 7,
					title: "Framväxten",
					subtitle: "Tillit, och vad den kräver."
				},
				{
					number: 8,
					title: "Blivandet",
					subtitle: "Vilka är vi, nu?"
				},
				{
					number: 9,
					title: "Coda",
					subtitle: "För den som håller motsägelsen."
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
	keywords="spiral dynamics, world bank, cisco, ai, jobs, demographic dividend, collective intelligence, orange, yellow, emergence, trust, control, bhubaneswar"
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
			href="/essays/between-two-articles{$language === 'sv' ? '-sv' : ''}.pdf"
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
				<div class="space-y-4">
					{#each toc.sections as section}
						<div>
							<button
								onclick={() => { currentSection = section.number; showTableOfContents = false; scrollToTop(); }}
								class="text-left w-full hover:opacity-70 transition-opacity"
								style="color: var(--color-page-text);"
							>
								<span class="font-bold">
									{#if $language === 'en'}
										Section {section.number}:
									{:else}
										Avsnitt {section.number}:
									{/if}
								</span>
								<span class="font-bold ml-1">{section.title}</span>
								<div class="text-sm mt-1" style="color: var(--color-page-text); opacity: 0.7;">
									{section.subtitle}
								</div>
							</button>
						</div>
					{/each}
				</div>
			</nav>
		{/if}
	</div>

	<!-- Section Navigation -->
	<div class="not-prose mb-8 flex justify-center gap-2 flex-wrap">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as sectionNum}
			<button
				onclick={() => { currentSection = sectionNum; scrollToTop(); }}
				class="px-4 py-2 rounded-lg font-medium transition-all"
				class:active={currentSection === sectionNum}
				style="
					background-color: {currentSection === sectionNum ? 'var(--color-page-accent)' : 'var(--color-separator)'};
					color: var(--color-page-text);
					opacity: {currentSection === sectionNum ? '1' : '0.6'};
				"
			>
				{#if $language === 'en'}
					{sectionNum}
				{:else}
					{sectionNum}
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
		{#if currentSection === 1}
			<SectionI />
		{:else if currentSection === 2}
			<SectionII />
		{:else if currentSection === 3}
			<SectionIII />
		{:else if currentSection === 4}
			<SectionIV />
		{:else if currentSection === 5}
			<SectionV />
		{:else if currentSection === 6}
			<SectionVI />
		{:else if currentSection === 7}
			<SectionVII />
		{:else if currentSection === 8}
			<SectionVIII />
		{:else if currentSection === 9}
			<SectionIX />
		{/if}
	</div>

	<!-- Navigation Between Sections -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<div class="flex justify-between items-center">
			{#if currentSection > 1}
				<button
					onclick={() => { currentSection--; scrollToTop(); }}
					class="flex items-center gap-2 px-6 py-3 rounded-lg transition-opacity hover:opacity-70"
					style="background-color: var(--color-separator); color: var(--color-page-text);"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
						<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
					</svg>
					{$language === 'en' ? 'Previous Section' : 'Föregående avsnitt'}
				</button>
			{:else}
				<div></div>
			{/if}

			{#if currentSection < 9}
				<button
					onclick={() => { currentSection++; scrollToTop(); }}
					class="flex items-center gap-2 px-6 py-3 rounded-lg transition-opacity hover:opacity-70"
					style="background-color: var(--color-separator); color: var(--color-page-text);"
				>
					{$language === 'en' ? 'Next Section' : 'Nästa avsnitt'}
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
