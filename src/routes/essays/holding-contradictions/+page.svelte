<!-- src/routes/essays/holding-contradictions/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';
 import { browser } from '$app/environment';
 import { onMount, onDestroy } from 'svelte';

	// Import the essay content (single file for each language)
	import EssayContentEn from './holding-contradictions.md';
	import EssayContentSv from './holding-contradictions-sv.md';

	// Determine which content to use based on language
	let EssayContent = $derived($language === 'sv' ? EssayContentSv : EssayContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "Holding the Contradictions: A Map of Gender in Biology, Experience, and Society",
			subtitle: "Beyond the Impasse of Incomplete Truths",
			description: "An integrative map of the gender debate that moves beyond polarization by honoring the partial truths in biology, psychology, culture, and ethics—and the human needs they represent.",
			published: "January 2025",
			readTime: "45 min read",
			author: "Björn Kenneth Holmström (in dialogue with DeepSeek AI)",
			note: "This essay was generated through extensive collaborative dialogue with an AI language model. It represents an attempt to model integrative, non-polarized thinking on a contentious topic."
		},
		sv: {
			title: "Att hålla motsägelserna: En karta över kön i biologi, erfarenhet och samhälle",
			subtitle: "Bortom dödläget mellan ofullständiga sanningar",
			description: "En integrerande karta över kön-debatten som går förbi polarisering genom att hedra de partiella sanningarna inom biologi, psykologi, kultur och etik—och de mänskliga behov de representerar.",
			published: "Januari 2025",
			readTime: "45 min läsning",
			author: "Björn Kenneth Holmström (i dialog med DeepSeek AI)",
			note: "Denna essä genererades genom omfattande samarbetsdialog med en AI-språkmodell. Den representerar ett försök att modellera integrerande, icke-polariserat tänkande kring ett kontroversiellt ämne."
		}
	};

	// Get current language metadata
	let t = $derived(metadata[$language] || metadata.en);

	// Table of contents structure with anchor links
	const tableOfContents = {
		en: {
			title: "Table of Contents",
			sections: [
				{ id: "impasse", title: "The Impasse: Diagnosing the Clash of Incomplete Truths" },
				{ id: "territories", title: "The Territories of Evidence", subsections: [
					{ id: "biology", title: "Territory 1: The Biological Landscape" },
					{ id: "psychology", title: "Territory 2: The Psychological Landscape" },
					{ id: "culture", title: "Territory 3: The Cultural-Historical Landscape" },
					{ id: "ethics", title: "Territory 4: The Ethical-Political Landscape" }
				]},
				{ id: "integration", title: "The Integration: From Either/Or to Both/And" },
				{ id: "path-forward", title: "A Path Forward: Principles for Discourse" },
				{ id: "using-the-map", title: "On Using This Map (And Not Being Used By It)" }
			]
		},
		sv: {
			title: "Innehållsförteckning",
			sections: [
				{ id: "impasse", title: "Dödläget: Att diagnosticera kampen mellan ofullständiga sanningar" },
				{ id: "territories", title: "Bevisens territorier", subsections: [
					{ id: "biology", title: "Territorium 1: Det biologiska landskapet" },
					{ id: "psychology", title: "Territorium 2: Det psykologiska landskapet" },
					{ id: "culture", title: "Territorium 3: Det kulturellt-historiska landskapet" },
					{ id: "ethics", title: "Territorium 4: Det etisk-politiska landskapet" }
				]},
				{ id: "integration", title: "Integrationen: Från antingen/eller till både/och" },
				{ id: "path-forward", title: "En väg framåt: Principer för diskurs" },
				{ id: "using-the-map", title: "Om att använda denna karta (och inte låta sig användas av den)" }
			]
		}
	};

	let toc = $derived(tableOfContents[$language] || tableOfContents.en);
	let showTableOfContents = $state(false);

	// For mobile: track which section is currently visible
	let activeSectionId = $state('impasse');

	// Scroll to a section (for anchor links)
 function scrollToSection(id: string) {
	 // Only scroll if we're in the browser
	 if (typeof window === 'undefined') return;
	 
	 const element = document.getElementById(id);
	 if (element) {
		 const offset = 100; // Adjust for sticky header
		 const elementPosition = element.getBoundingClientRect().top;
		 const offsetPosition = elementPosition + window.pageYOffset - offset;
		 
		 window.scrollTo({
			 top: offsetPosition,
			 behavior: 'smooth'
		 });
		 
		 // Update active section for mobile nav
		 activeSectionId = id;
		 
		 // Close TOC on mobile after selection
		 if (window.innerWidth < 768) {
			 showTableOfContents = false;
		 }
	 }
 }

	// Function to handle scroll and update active section
	function handleScroll() {
		// This is a simplified version - you might want to use IntersectionObserver
		// for more accurate section tracking
		const sections = toc.sections.flatMap(s => 
			s.subsections ? [s.id, ...s.subsections.map(sub => sub.id)] : [s.id]
		);
		
		for (const sectionId of sections) {
			const element = document.getElementById(sectionId);
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top <= 150 && rect.bottom >= 150) {
					activeSectionId = sectionId;
					break;
				}
			}
		}
	}

	// Add scroll listener only on client side
	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Initial check
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<SEO
	title={t.title}
	description={t.description}
	type="article"
	publishedTime={t.published}
	keywords="gender, transgender, biology, psychology, culture, ethics, integration, polarization, discourse"
	section="Essays"
/>

<article class="mx-auto max-w-7xl px-4 pt-8 pb-24">
	<!-- Header -->
	<header class="mb-12 border-b border-[var(--color-separator)] pb-8">
		<h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
			{t.title}
		</h1>
		<p class="text-xl md:text-2xl italic mb-6" style="color: var(--color-page-text); opacity: 0.8;">
			{t.subtitle}
		</p>
		
		<!-- Author Note 
		<div class="mb-6 p-4 rounded-lg" style="background-color: var(--color-card-bg); border: 1px solid var(--color-separator);">
			<p class="text-sm italic" style="color: var(--color-page-text); opacity: 0.7;">
				{t.note}
			</p>
		</div> -->
		
		<div class="flex flex-wrap items-center gap-4 mb-6 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.author}</span>
			<span>•</span>
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
		
		<!-- Download PDF Button -->
		<a
			href="/essays/holding-contradictions{$language === 'sv' ? '-sv' : ''}.pdf"
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

	<div class="flex flex-col lg:flex-row gap-8">
		<!-- Desktop Navigation Sidebar -->
		<aside class="hidden lg:block lg:w-64 flex-shrink-0">
			<nav class="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto py-4">
				<h3 class="font-bold mb-4 text-sm uppercase tracking-wider" style="color: var(--color-page-text); opacity: 0.5;">
					{toc.title}
				</h3>
				<ul class="space-y-2">
					{#each toc.sections as section}
						<li>
							<button
								onclick={() => scrollToSection(section.id)}
								class="w-full text-left py-2 px-3 rounded-lg transition-colors hover:opacity-80 {activeSectionId === section.id ? 'font-semibold' : ''}"
								style="
									background-color: {activeSectionId === section.id ? 'var(--color-page-accent)' : 'transparent'};
									color: var(--color-page-text);
								"
							>
								{section.title}
							</button>
							{#if section.subsections}
								<ul class="ml-4 mt-1 space-y-1">
									{#each section.subsections as subsection}
										<li>
											<button
												onclick={() => scrollToSection(subsection.id)}
												class="w-full text-left py-1 px-3 text-sm rounded transition-colors hover:opacity-80 {activeSectionId === subsection.id ? 'font-medium' : ''}"
												style="
													background-color: {activeSectionId === subsection.id ? 'var(--color-page-accent)' : 'transparent'};
													color: var(--color-page-text);
													opacity: {activeSectionId === subsection.id ? '1' : '0.7'};
												"
											>
												{subsection.title}
											</button>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
		</aside>

		<!-- Main Content Area -->
		<div class="flex-1 min-w-0">
			<!-- Mobile Table of Contents Toggle -->
			<div class="lg:hidden mb-8">
				<button
					onclick={() => showTableOfContents = !showTableOfContents}
					class="flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors"
					style="background-color: var(--color-separator); color: var(--color-page-text);"
				>
					<span class="flex items-center gap-2 font-medium">
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
						{toc.title}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5 transition-transform {showTableOfContents ? 'rotate-180' : ''}"
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
						class="mt-2 p-4 rounded-lg"
						style="background-color: var(--color-card-bg); border: 1px solid var(--color-separator);"
					>
						<ul class="space-y-2">
							{#each toc.sections as section}
								<li>
									<button
										onclick={() => scrollToSection(section.id)}
										class="w-full text-left py-2 px-3 font-medium rounded hover:opacity-70 transition-opacity"
										style="color: var(--color-page-text);"
									>
										{section.title}
									</button>
									{#if section.subsections}
										<ul class="ml-4 mt-1 space-y-1">
											{#each section.subsections as subsection}
												<li>
													<button
														onclick={() => scrollToSection(subsection.id)}
														class="w-full text-left py-1 px-3 text-sm rounded hover:opacity-70 transition-opacity"
														style="color: var(--color-page-text); opacity: 0.8;"
													>
														{subsection.title}
													</button>
												</li>
											{/each}
										</ul>
									{/if}
								</li>
							{/each}
						</ul>
					</nav>
				{/if}
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
					--tw-prose-headings-font-weight: 600;
				"
			>
				<EssayContent />
			</div>

			<!-- Mobile Section Quick Nav (at bottom) -->
			<div class="lg:hidden mt-12 pt-8 border-t border-[var(--color-separator)]">
				<div class="flex justify-between items-center">
					<button
						onclick={() => {
							const currentIndex = toc.sections.findIndex(s => s.id === activeSectionId);
							if (currentIndex > 0) {
								const prevSection = toc.sections[currentIndex - 1];
								scrollToSection(prevSection.id);
							}
						}}
						class="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
						style="background-color: var(--color-separator); color: var(--color-page-text);"
						disabled={activeSectionId === toc.sections[0].id}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
							<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
						</svg>
						<span class="text-sm">Previous</span>
					</button>
					
					<span class="text-sm px-4 py-2 rounded-lg" style="background-color: var(--color-separator); color: var(--color-page-text); opacity: 0.7;">
						{activeSectionId}
					</span>
					
					<button
						onclick={() => {
							const currentIndex = toc.sections.findIndex(s => s.id === activeSectionId);
							if (currentIndex < toc.sections.length - 1) {
								const nextSection = toc.sections[currentIndex + 1];
								scrollToSection(nextSection.id);
							}
						}}
						class="flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
						style="background-color: var(--color-separator); color: var(--color-page-text);"
						disabled={activeSectionId === toc.sections[toc.sections.length - 1].id}
					>
						<span class="text-sm">Next</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
							<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
						</svg>
					</button>
				</div>
			</div>

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
		</div>
	</div>
</article>

<style>
	/* Ensure proper spacing for anchor targets */
	:global([id]) {
		scroll-margin-top: 120px;
	}
	
	/* Custom prose styles for this essay */
	:global(.prose h2) {
		margin-top: 3em;
		padding-top: 0.5em;
		border-top: 2px solid var(--color-separator);
	}
	
	:global(.prose h3) {
		margin-top: 2em;
		color: var(--color-page-text);
		opacity: 0.9;
	}
	
	:global(.prose h4) {
		margin-top: 1.5em;
		color: var(--color-page-text);
		opacity: 0.8;
		font-style: italic;
	}
</style>
