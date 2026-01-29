<!-- src/routes/essays/beyond-alignment/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	// Import the essay content
	import EssayContentEn from './beyond-alignment.md';
 import EssayContentSv from './beyond-alignment-sv.md';

	// For now, only English version available
	let EssayContent = $derived(EssayContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "Beyond Alignment: AI and the Architecture of Human Development",
			subtitle: "Why surviving our technological adolescence isn't the same as growing up",
			description: "An exploration of a neglected dimension of AI risk: that perfectly aligned AI might prevent civilizational development by optimizing away the friction that forces stage transitions.",
			published: "January 2026",
			readTime: "30 min read",
			author: "Björn Kenneth Holmström (in dialogue with Claude AI)",
			note: "This essay was generated through collaborative dialogue with an AI language model, building on Dario Amodei's 'The Adolescence of Technology.'"
		},
		sv: {
			title: "Bortom anpassning: AI och den mänskliga utvecklingens arkitektur",
			subtitle: "Varför det att överleva vår teknologiska ungdomstid inte är samma sak som att växa upp",
			description: "En utforskning av en försummad dimension av AI-risk: att perfekt anpassad AI kan förhindra civilisatorisk utveckling genom att optimera bort friktionen som driver stadieövergångar.",
			published: "Januari 2026",
			readTime: "30 min läsning",
			author: "Björn Kenneth Holmström (i dialog med Claude AI)",
			note: "Denna essä genererades genom samarbetsdialog med en AI-språkmodell, byggandes på Dario Amodeis 'The Adolescence of Technology.'"
		}
	};

	// Get current language metadata
	let t = $derived(metadata[$language] || metadata.en);

	// Table of contents structure with anchor links
	const tableOfContents = {
		en: {
			title: "Table of Contents",
			sections: [
				{ id: "opening", title: "Opening: The Missing Question" },
				{ id: "over-optimization", title: "The Over-Optimization Trap" },
				{ id: "constitutional-ai", title: "Why Constitutional AI Isn't Enough" },
				{ id: "human-development", title: "The Mechanics of Human Development" },
				{ id: "designing-evolution", title: "Designing for Evolution, Not Just Safety" },
				{ id: "design-challenge", title: "The Design Challenge" },
				{ id: "implications", title: "Implications for Now" },
				{ id: "closing", title: "The Real Rite of Passage" }
			]
		},
		sv: {
			title: "Innehållsförteckning",
			sections: [
				{ id: "opening", title: "Inledning: Den saknade frågan" },
				{ id: "over-optimization", title: "Överoptimeringsfällan" },
				{ id: "constitutional-ai", title: "Varför konstitutionell AI inte räcker" },
				{ id: "human-development", title: "Mekanismerna för mänsklig utveckling" },
				{ id: "designing-evolution", title: "Design för evolution, inte bara säkerhet" },
				{ id: "design-challenge", title: "Designutmaningen" },
				{ id: "implications", title: "Konsekvenser för nuet" },
				{ id: "closing", title: "Den verkliga övergångsriten" }
			]
		}
	};

	let toc = $derived(tableOfContents[$language] || tableOfContents.en);
	let showTableOfContents = $state(false);

	// For mobile: track which section is currently visible
	let activeSectionId = $state('opening');

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
		const sections = toc.sections.map(s => s.id);
		
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
	keywords="AI, alignment, development, consciousness, evolution, governance, safety, spiral dynamics, stage transition"
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
		
		<div class="flex flex-wrap items-center gap-4 mb-6 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.author}</span>
			<span>•</span>
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
		
		<!-- Context note about building on Dario's essay -->
		<div class="mb-6 p-4 rounded-lg" style="background-color: var(--color-card-bg); border: 1px solid var(--color-separator);">
			<p class="text-sm" style="color: var(--color-page-text); opacity: 0.7;">
				{#if $language === 'en'}
					This essay responds to and builds upon Dario Amodei's <a href="https://www.anthropic.com/news/the-adolescence-of-technology" class="underline hover:opacity-70" style="color: var(--color-link);">"The Adolescence of Technology"</a> (January 2026), exploring a dimension of AI risk he doesn't fully address: developmental capture.
				{:else}
					Denna essä svarar på och bygger vidare på Dario Amodeis <a href="https://www.anthropic.com/news/the-adolescence-of-technology" class="underline hover:opacity-70" style="color: var(--color-link);">"The Adolescence of Technology"</a> (Januari 2026), och utforskar en dimension av AI-risk som han inte fullt ut tar upp: utvecklingsmässig fångst.
				{/if}
			</p>
		</div>
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
									opacity: {activeSectionId === section.id ? '1' : '0.7'};
								"
							>
								{section.title}
							</button>
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
						<span class="text-sm">
							{$language === 'en' ? 'Previous' : 'Föregående'}
						</span>
					</button>
					
					<span class="text-sm px-4 py-2 rounded-lg" style="background-color: var(--color-separator); color: var(--color-page-text); opacity: 0.7;">
						{toc.sections.find(s => s.id === activeSectionId)?.title || activeSectionId}
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
						<span class="text-sm">
							{$language === 'en' ? 'Next' : 'Nästa'}
						</span>
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
