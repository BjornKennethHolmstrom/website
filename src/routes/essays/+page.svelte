<script lang="ts">
	import { essaysTranslations as allTranslations } from '$lib/i18n/translations/essays';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	// Add a loading state
	let isLoading = true;

	// Subscribe to language changes
	$: if ($language) {
		isLoading = false;
	}

	// Define categories for the filter
	const categories = ['All', 'Governance', 'Economics', 'AI & Tech', 'Consciousness', 'Philosophy'];
	let selectedCategory = 'All';

	// Define the essay cards with categories and metadata
 const essayCards = [
   // --- Priority 1: Governance ---
   { 
     key: 'treatyBlueprint', 
     url: '/essays/treaty-blueprint',
     icon: '🌐',
     category: 'Governance',
     hasPDF: false
   },
   { 
     key: 'g20OperatingSystem', 
     url: '/essays/g20-operating-system',
     icon: '💰',
     category: 'Governance',
     hasPDF: false
   },
   { 
     key: 'wealthSystem', 
     url: '/essays/wealth-system',
     icon: '⚖️',
     category: 'Governance',
     hasPDF: false
   },
   { 
  			key: 'lmciIndex', 
  			url: '/essays/measuring-the-invisible',
  			icon: '📐', // Ruler/Measure
  			category: 'Governance', // Or Economics
     hasPDF: false,
			  date: 'Feb 2025',
 	 		readTime: '10 min'
	 	},
   { 
     key: 'aiGovernance', 
     url: '/essays/ai-governance',
     icon: '🏛️',
     category: 'Governance',
     hasPDF: false
   },
   { 
     key: 'fjärilspartiet', 
     url: '/essays/fjarilspartiet',
     icon: '🦋',
     category: 'Governance',
     hasPDF: false
   },

   // --- Priority 2: Economy ---
   { 
 		  key: 'checkoutLine', 
			  url: '/essays/beyond-the-checkout',
			  icon: '🛒', // Shopping Cart
			  category: 'Economics', 
     hasPDF: false
 		},
   { 
			 key: 'surplusTrap', 
			 url: '/essays/the-surplus-trap',
			 icon: '🫧', // Bubble
			 category: 'Economics',
    hasPDF: false
		 },
   
   // --- Priority 2: AI & Tech ---
   { 
     key: 'breakingMirror', 
     url: '/essays/the-ai-mirror', 
     icon: '🪞',
     category: 'AI & Tech',
     hasPDF: false
   },
   { 
     key: 'aiConsciousness', 
     url: '/essays/ai-consciousness', 
     icon: '🤖',
     category: 'AI & Tech',
     hasPDF: false
   },
   { 
     key: 'projectJanus', 
     url: '/essays/project-janus',
     icon: '🎭',
     category: 'AI & Tech',
     hasPDF: false
   },
   { 
     key: 'simulationTheory', 
     url: '/essays/simulation-theory',
     icon: '🕹️',
     category: 'AI & Tech',
     hasPDF: false
   },

   // --- Priority 3: Consciousness ---
   { 
     key: 'depressionThistle', 
     url: '/essays/ecology-of-despair', 
     icon: '🌿',
     category: 'Consciousness',
     hasPDF: false
   },
   { 
     key: 'mycelialEconomy', 
     url: '/essays/mycelial-economy',
     icon: '🍄',
     category: 'Consciousness',
     hasPDF: false
   },
   { 
     key: 'alchemistsDilemma', 
     url: '/essays/alchemists-dilemma',
     icon: '⚗️',
     category: 'Consciousness',
     hasPDF: true
   },
   { 
     key: 'lostAbility', 
     url: '/essays/architecture-of-stillness',
     icon: '🧘',
     category: 'Consciousness',
     hasPDF: false
   },
   { 
     key: 'contemplativeGuide', 
     url: '/essays/change-paradox',
     icon: '🏎️',
     category: 'Consciousness',
     hasPDF: false
   },
   { 
     key: 'materialistParadox', 
     url: '/essays/the-infinite-ground',
     icon: '♾️',
     category: 'Consciousness',
     hasPDF: false
   },
   { 
     key: 'originLife', 
     url: '/essays/continuity-of-life',
     icon: '🌱',
     category: 'Consciousness',
     hasPDF: false
   },

   // --- Priority 4: Philosophy ---
   { 
			  key: 'fieldOfIntelligence', 
			  url: '/essays/field-of-intelligence',
			  icon: '🕸️', // Web/Network
			  category: 'Philosophy', // Or Systems Thinking
     hasPDF: false
		 }
 ];

	// Reactive filter
	$: filteredCards = selectedCategory === 'All' 
		? essayCards 
		: essayCards.filter(card => card.category === selectedCategory);

	// Helper for badge colors
	function getCategoryColor(cat: string) {
		switch(cat) {
			case 'Governance': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
			case 'AI & Tech': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
   case 'Economics': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
			case 'Consciousness': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
			default: return 'bg-gray-100 text-gray-800';
		}
	}
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p class="text-gray-500">Loading library...</p>
	</div>
{:else if $language && allTranslations[$language]?.essays}
	{@const t = allTranslations[$language].essays}

	<SEO title={t.meta.title} description={t.meta.description} />

	<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

	<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
		
		<!-- Category Filter -->
		<div class="flex flex-wrap justify-center gap-3 mb-12">
			{#each categories as category}
				<button
					class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
					{selectedCategory === category 
						? 'bg-amber-600 text-white shadow-md scale-105' 
						: 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-700'}"
					on:click={() => selectedCategory = category}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Essays Grid -->
		<div class="space-y-8">
			{#each filteredCards as card (card.key)}
				{@const essay = t.cards[card.key]} <!-- CHANGED: t.cards[card.key] instead of t[card.key] -->
				{#if essay} <!-- ADDED: Safety check -->
				<article class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
					<a href={card.url} class="group">
						<div class="flex items-start gap-6">
							<!-- Icon -->
							<span class="text-5xl flex-shrink-0 transition-transform group-hover:scale-110">
								{card.icon}
							</span>

							<!-- Content -->
							<div class="flex-1">
								<!-- Category Badge -->
								<div class="flex justify-between items-start mb-3">
									<span class="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider {getCategoryColor(card.category)}">
										{card.category}
									</span>
								</div>

								<!-- Title & Subtitle -->
								<h2 class="text-2xl font-bold text-[var(--color-card-text)] mb-1 group-hover:text-[var(--color-link)]">
									{essay.title}
								</h2>
								<p class="text-lg text-[var(--color-card-text)] opacity-70 italic mb-3">
									{essay.subtitle}
								</p>

								<!-- Tagline -->
								{#if essay.tagline} <!-- ADDED: Optional tagline -->
									<p class="text-[var(--color-card-text)] opacity-90 font-medium mb-4">
										{essay.tagline}
									</p>
								{/if}

								<!-- Description -->
								<p class="text-[var(--color-card-text)] opacity-80 leading-relaxed mb-4">
									{essay.desc} <!-- CHANGED: essay.desc instead of essay.description -->
								</p>

								<!-- Metadata -->
								<div class="flex flex-wrap gap-4 text-sm text-[var(--color-card-text)] opacity-60">
									{#if essay.published} <!-- ADDED: Optional published date -->
										<span>{essay.published}</span>
										<span>•</span>
									{/if}
									<span>{essay.readTime}</span>
								</div>

								<!-- Tags -->
								{#if essay.tags} <!-- ADDED: Safety check for tags -->
									<div class="flex flex-wrap gap-2 mt-4">
										{#each essay.tags as tag}
											<span class="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-separator)] text-[var(--color-card-text)] opacity-70">
												{tag}
											</span>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					</a>
					
					<!-- Download PDF Button -->
					{#if card.hasPDF}
						<div class="mt-6 pt-6 border-t border-[var(--color-separator)]">
							<a
								href="/essays/{card.key}{$language === 'sv' ? '-sv' : ''}.pdf"
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
										Download PDF 
										{#if essay.pdfPages}({essay.pdfPages} pages){/if}
									{:else}
										Ladda ner PDF
										{#if essay.pdfPages}({essay.pdfPages} sidor){/if}
									{/if}
								</span>
							</a>
						</div>
					{/if}
				</article>
				{/if} <!-- END: Safety check -->
			{/each}
		</div>

		<!-- Coming soon note -->
		<div class="mt-16 p-6 rounded-lg bg-[var(--color-separator)] text-[var(--color-card-text)] opacity-70 text-center">
			<p class="text-sm">
				{#if $language === 'en'}
					This library grows at the speed of insight, not the speed of the feed. Take your time to integrate what is here. New work will arrive when it is ready. Each piece is crafted to endure—substantial explorations meant to serve the transition between worlds.
				{:else}
					Detta bibliotek växer i takt med insikt, inte algoritmer. Ta dig tid att integrera det som finns här. Nya verk tillkommer när de är redo. Varje stycke är skapat för att bestå—omfattande utforskningar tänkta att tjäna övergången mellan världar.
				{/if}
			</p>
		</div>
	</div>
{/if}

<style>
	article {
		transition: all 0.2s ease-in-out;
	}
</style>
