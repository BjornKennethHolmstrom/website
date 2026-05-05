<script lang="ts">
	import { t } from '$lib/stores/languageStore.ts';
	import SEO from '$lib/components/SEO.svelte';
 import { fly } from 'svelte/transition';
 import { onMount } from 'svelte';

 // Governance as Engineering — carousel papers
 const governanceEngineeringPapers = [
   { key: 'geSeriesPaperI',   url: '/whitepapers/governance-stability-simulator',            coverImage: '/whitepapers/images/governance-simulator-cover.png' },
   { key: 'geSeriesPaperII',  url: '/whitepapers/fractality-as-stability',                   coverImage: '/whitepapers/images/fractality-as-stability-cover.png' },
   { key: 'geSeriesPaperIII', url: '/whitepapers/observability-democracy-connection',        coverImage: '/whitepapers/images/observability-democracy-cover.png' },
   { key: 'geSeriesPaperIV',  url: '/whitepapers/requisite-variety-and-the-commons',         coverImage: '/whitepapers/images/requisite-variety-commons-cover.png' },
   { key: 'geSeriesPaperV',   url: '/whitepapers/coordination-failure-tax',                  coverImage: '/whitepapers/images/coordination-failure-tax-cover.png' },
 ];

	// Definiera vår projektdata.
	const projects = {
		systems: [
   {
		 	type: 'emoji',
		 	key: 'coordination',
		 	emoji: '🌐',
		 	url: '/coordination-imperative',
		 	badge: 'NEW'
		 },
			{
				type: 'img',
				key: 'ggf',
				logo: 'logo-ggf.svg',
				url: 'https://globalgovernanceframeworks.org'
			},
   {
    type: 'img',
    key: 'subsidiarity',
    logo: 'logo-subsidiarity.svg',
				badge: 'NEW',
    url: 'https://svensksubsidiaritet.se'/*,
    badge: 'PILOT'*/
   },
			{
				type: 'img',
				key: 'fjäril',
				logo: 'logo-fjarilspartiet.svg',
				url: 'https://fjarilspartiet.se'
			},
			{
				type: 'emoji',
				key: 'changeParadox', 
				emoji: '📘',
				url: 'https://bjornkennethholmstrom.github.io/change-paradox-field-manual/',
				githubUrl: 'https://github.com/BjornKennethHolmstrom/change-paradox-field-manual'
			}
		],
  architecture: [
			{
				type: 'emoji',
				key: 'civicbase',
				emoji: '🛡️', // Shield for CivicBase (formerly CosmicSyncCore)
				url: 'https://github.com/GlobalGovernanceFrameworks/CivicBase'
			},
			{
				type: 'img',
				key: 'mycel',
    logo: '/apps/images/logo-mycel.svg',
				url: '/mycel',
		 	badge: 'NEW'
			},
			{
				type: 'img',
				key: 'janus',
				logo: 'logo-project-janus.svg',            // '🧠', Brain/Wisdom for Janus
				url: 'https://github.com/BjornKennethHolmstrom/ProjectJanus'
			}
		],
		quartet: [
			{ type: 'img', key: 'spiralize', logo: 'logo-spiralize.svg', url: 'https://spiralize.org' },
			{ type: 'img', key: 'nondualize', logo: 'logo-nondualize.svg', url: 'https://nondualize.org' },
			{ type: 'img', key: 'communize', logo: 'logo-communize.svg', url: 'https://communize.org' },
			{	type: 'img',	key: 'universalize',	logo: 'logo-universalize.svg',	url: 'https://universalize.org' }
		],
		library: [
			{
				type: 'emoji',
				key: 'books',
				emoji: '📖',
				url: '/books'
			},
			{
				type: 'emoji',
				key: 'whitepapers',
				emoji: '📄',
				url: '/whitepapers'
			},
			{
				type: 'emoji',
				key: 'blog',
				emoji: '✍️',
				url: '/blog'
			}
		],
		personal: [
			{
				type: 'img',
				key: 'spiritualized',
				logo: 'logo-spiritualized.svg',
				url: 'https://spiritualized.org'
			},
			{
				type: 'emoji',
				key: 'apps',
				emoji: '🛠️',
				url: '/apps'
			},
			{
				type: 'emoji',
				key: 'creations',
				emoji: '🎨',
				url: '/creations'
			}
  ]
	};
  const countryReports = [
      {
          key: 'reportsGermany',
          emoji: '🇩🇪',
          url: '/reports/germany-spending-mirage'
      },
      {
          key: 'reportsFrance',
          emoji: '🇫🇷',
          url: '/reports/france-decisiveness-mirage'
      },
      {
          key: 'reportsIndia',
          emoji: '🇮🇳',
          url: '/reports/india-leap-lag-cycle',
          badge: 'NEW'
      },
      {
          key: 'reportsEU',
          emoji: '🇪🇺',
          url: '/reports/eu-coherence-mirage',
          badge: 'NEW'
      },
      {
          key: 'reportsUK',
          emoji: '🇬🇧',
          url: '/reports/uk-control-mirage',
          badge: 'NEW'
      },
      {
          key: 'reportsSynthesis',
          emoji: '🌐',
          url: '/reports/subsidiarity-deficit',
          badge: 'NEW'
      }
  ];

  // To be published
  //      {
  //      key: 'reportsSweden',
  //      emoji: '🇸🇪',
  //      url: '/reports/sweden-competence-trap',
  //      badge: 'NEW'
  //  }
 

  // Helper to determine link type
  function getLinkType(url: string) {
    if (url.includes('github.com')) return 'github';
    if (url.startsWith('http')) return 'external';
    return 'local';
  }

  // --- CAROUSEL LOGIC ---

  // Governance as Engineering carousel
  let activeGEIndex = 0;
  let geDirection = 1;
  let geAutoSlideInterval: any;
  let geSlideDuration = 7000; // slightly faster than book carousel

  // Resolve the current paper's translations correctly
  $: currentGEPaper = governanceEngineeringPapers[activeGEIndex];
  $: currentPaper = {
    title: $t.geCarouselSeries[governanceEngineeringPapers[activeGEIndex].key].title,
    desc:  $t.geCarouselSeries[governanceEngineeringPapers[activeGEIndex].key].desc,
    url:   governanceEngineeringPapers[activeGEIndex].url,
    coverImage: governanceEngineeringPapers[activeGEIndex].coverImage,
  };

  function geNextSlide() {
    geDirection = 1;
    activeGEIndex = (activeGEIndex + 1) % governanceEngineeringPapers.length;
    geResetTimer();
  }

  function gePrevSlide() {
    geDirection = -1;
    activeGEIndex = (activeGEIndex - 1 + governanceEngineeringPapers.length) % governanceEngineeringPapers.length;
    geResetTimer();
  }

  function geResetTimer() {
    clearInterval(geAutoSlideInterval);
    geStartTimer();
  }

  function geStartTimer() {
    geAutoSlideInterval = setInterval(() => {
      geNextSlide();
    }, geSlideDuration);
  }

  // Book carousel
  let activeIndex = 0;
  let direction = 1; // 1 for right, -1 for left
  let autoSlideInterval: any;

  // Compute the current book based on index
  $: currentBook = $t.bookLaunches[activeIndex];

  const nextSlide = () => {
    direction = 1;
    activeIndex = (activeIndex + 1) % $t.bookLaunches.length;
    resetTimer();
  };

  const prevSlide = () => {
    direction = -1;
    activeIndex = (activeIndex - 1 + $t.bookLaunches.length) % $t.bookLaunches.length;
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(autoSlideInterval);
    startTimer();
  };

  const startTimer = () => {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 8000); // Auto-slide every 8 seconds
  };

  onMount(() => {
    // Start the book carousel timer (existing)
    startTimer();
    // Start the GE carousel timer (new)
    geStartTimer();

    return () => {
      clearInterval(autoSlideInterval);
      clearInterval(geAutoSlideInterval);
    };
  });

  let showWelcomeModal = false;
  let dontShowAgain = false;
  
  onMount(() => {
    // Only check for permanent opt-out, not for first visit
    const dontShow = localStorage.getItem('dontShowWelcomeModal');
    if (dontShow === 'true') {
      dontShowAgain = true;
    }
  });

  function closeWithPreference() {
    if (dontShowAgain) {
      localStorage.setItem('dontShowWelcomeModal', 'true');
    }
    showWelcomeModal = false;
  }

  function openModal() {
    showWelcomeModal = true;
  }
  
  function closeModal() {
    showWelcomeModal = false;
  }
  
  // Hantera klick utanför modal
  function handleOutsideClick(event: MouseEvent) {
    const modal = document.getElementById('welcome-modal-content');
    if (modal && !modal.contains(event.target as Node)) {
      closeModal();
    }
  }
</script>

<SEO
	title={$t.meta.title}
	description={$t.meta.description}
	keywords={'systems thinking, consciousness, global governance, björn kenneth holmström, polycrisis'}
	image={'/social-preview.png'}
	type={'website'}
/>

{#if showWelcomeModal}
  <!-- Overlay -->
  <div 
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={handleOutsideClick}
    transition:fly={{ y: 20, duration: 300 }}
  >
    <!-- Modal content -->
    <div 
      id="welcome-modal-content"
      class="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 md:p-8 relative"
    >
      <!-- Close button -->
      <button 
        on:click={closeModal}
        class="absolute top-4 right-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
        aria-label={$t.welcomeModal.close}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h2 class="text-2xl font-bold text-amber-600 mb-2">
        {$t.welcomeModal.title}
      </h2>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        {$t.welcomeModal.subtitle}
      </p>
      
      <!-- Tre kolumner på desktop, staplade på mobil -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Systemtänkare -->
        <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div class="text-3xl mb-2">🌍</div>
          <h3 class="font-bold text-lg mb-1">
            {$t.welcomeModal.categories.systems.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3 italic">
            {$t.welcomeModal.categories.systems.quote}
          </p>
          <ul class="text-sm space-y-1">
            <li>• <a href="/coordination-imperative" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.systems.links.coordination}</a></li>
            <li>• <a href="/whitepapers" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.systems.links.whitepapers}</a></li>
            <li>• <a href="https://svensksubsidiaritet.se" target="_blank" rel="noopener"  class="text-amber-600 hover:underline">{$t.welcomeModal.categories.systems.links.subsidiarity}</a></li>
            <li>• <a href="https://globalgovernanceframeworks.org" target="_blank" rel="noopener" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.systems.links.ggf}</a></li>
            <li>• <a href="https://fjarilspartiet.se" target="_blank" rel="noopener" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.systems.links.fjaril}</a></li>
          </ul>
        </div>
        
        <!-- Andligt sökande -->
        <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div class="text-3xl mb-2">🧘</div>
          <h3 class="font-bold text-lg mb-1">
            {$t.welcomeModal.categories.spiritual.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3 italic">
            {$t.welcomeModal.categories.spiritual.quote}
          </p>
          <ul class="text-sm space-y-1">
            <li>• <a href="https://spiritualized.org" target="_blank" rel="noopener" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.spiritual.links.spiritualized}</a></li>
            <li>• <a href="/creations/poems" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.spiritual.links.poems}</a></li>
            <li>• <a href="/enlightenment" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.spiritual.links.enlightenment}</a></li>
            <li>• <a href="https://nondualize.org" target="_blank" rel="noopener" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.spiritual.links.nondualize}</a></li>
          </ul>
        </div>
        
        <!-- Kreativ -->
        <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div class="text-3xl mb-2">🎨</div>
          <h3 class="font-bold text-lg mb-1">
            {$t.welcomeModal.categories.creative.title}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-3 italic">
            {$t.welcomeModal.categories.creative.quote}
          </p>
          <ul class="text-sm space-y-1">
            <li>• <a href="/creations#art" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.creative.links.art}</a></li>
            <li>• <a href="/creations#music" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.creative.links.music}</a></li>
            <li>• <a href="/creations#photography" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.creative.links.photography}</a></li>
            <li>• <a href="/creations#minecraft" class="text-amber-600 hover:underline">{$t.welcomeModal.categories.creative.links.minecraft}</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
        <input type="checkbox" id="dontShowAgain" bind:checked={dontShowAgain} class="rounded" />
        <label for="dontShowAgain">
          {$t.welcomeModal.dontShowAgain}
        </label>
      </div>
      
      <!-- Länk till startsidan -->
      <div class="mt-6 text-center">
        <button 
          on:click={closeModal}
          class="text-sm text-slate-500 hover:text-amber-600 transition-colors"
        >
          {$t.welcomeModal.goToHomepage} →
        </button>
      </div>
    </div>
  </div>
{/if}

<div class="mx-auto max-w-7xl">
	<section class="bg-slate-900 py-16 text-center text-white md:py-24">
		<div class="mx-auto max-w-3xl px-4">
    <h1 class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl pb-2">
        {$t.title}
    </h1>

    <!-- Personlig ingress -->
    <p class="text-lg text-slate-300 sm:text-xl mb-6 italic border-l-4 border-amber-500 pl-4">
        {$t.ingress}
    </p>

    <!-- Professionell rollbeskrivning -->
    <p class="text-base text-slate-400">
        {$t.description}
    </p>
		</div>
	</section>

<!-- Governance as Engineering Carousel -->
<section class="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex items-center gap-3 mb-2">
    <h2 class="text-2xl font-semibold text-amber-600 dark:text-amber-400">
      {$t.geCarouselTitle}
    </h2>
    <span class="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-amber-500 text-white shadow">
      {$t.geCarouselBadge}
    </span>
  </div>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      {$t.geCarouselSubtitle}
    </p>

    <div class="relative min-h-[320px] md:min-h-[260px]">
      {#key activeGEIndex}
        <div
          in:fly={{ x: 200 * geDirection, duration: 400, delay: 100 }}
          out:fly={{ x: -200 * geDirection, duration: 400 }}
          class="absolute inset-0 w-full"
        >
          <div class="bg-gradient-to-br from-slate-50 to-amber-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-slate-200 dark:border-slate-700 h-full">
            
            <div class="flex-1 text-center md:text-left z-10">
              <span class="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-4 bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                Whitepaper
              </span>
              <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                {currentPaper.title}
              </h3>
              <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {currentPaper.desc}
              </p>
              <a
                href={currentPaper.url}
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm"
              >
                Read the Paper
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 -mr-1"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

            <div class="w-48 md:w-56 flex-shrink-0 flex items-center justify-center">
              <img 
                src={currentPaper.coverImage} 
                alt={currentPaper.title} 
                class="w-full h-auto rounded shadow-lg" 
              />
            </div>
          </div>
        </div>
      {/key}
    </div>

    <!-- Navigation buttons -->
    <button
      on:click={gePrevSlide}
      class="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300"
      aria-label="Previous paper"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <button
      on:click={geNextSlide}
      class="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300"
      aria-label="Next paper"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </button>

    <!-- Dots -->
    <div class="flex justify-center space-x-2 mt-6">
      {#each governanceEngineeringPapers as _, i}
        <button
          class="w-2.5 h-2.5 rounded-full transition-colors {i === activeGEIndex ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'}"
          on:click={() => { geDirection = i > activeGEIndex ? 1 : -1; activeGEIndex = i; geResetTimer(); }}
          aria-label="Go to paper {i + 1}"
        ></button>
      {/each}
    </div>
  </div>
</section>

	<section class="space-y-12 py-16 md:py-24">
   <div>
    <h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
        {$t.clusterSystems}
    </h2>
    
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {#each projects.systems as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						<!-- NEW Badge -->
						{#if project.badge === 'NEW'}
							<div class="absolute -top-3 -right-3">
								<span class="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
									⭐ NEW
								</span>
							</div>
						{/if}

						<!-- Logo or Emoji -->
						{#if project.type === 'img'}
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
						{:else if project.type === 'emoji'}
							<span class="mb-4 block text-5xl">
								{project.emoji}
							</span>
						{/if}

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>

      <div class="absolute top-4 right-4 text-[var(--color-card-text)] opacity-20 transition-opacity group-hover:opacity-60">
      {#if project.githubUrl}
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      {:else if getLinkType(project.url) === 'external'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      {/if}
      </div>
					</a>
				{/each}
			</div>
		</div>


  <!-- Country Reports -->
  <div>
      <h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
          {$t.clusterReports}
      </h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#each countryReports as report}
              <a
                  href={report.url}
                  target="_self"
                  class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                  <!-- NEW Badge -->
                  {#if report.badge}
                      <div class="absolute -top-3 -right-3 z-10">
                          <span class="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
                              ⭐ {report.badge}
                          </span>
                      </div>
                  {/if}

                  <span class="mb-4 block text-5xl">
                      {report.emoji}
                  </span>
                  <h3 class="text-xl font-semibold text-[var(--color-card-text)]">
                      {$t[`${report.key}Title`]}
                  </h3>
                  <p class="text-[var(--color-card-text)] opacity-80">
                      {$t[`${report.key}Tagline`]}
                  </p>
              </a>
          {/each}
      </div>
  </div>

  <div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterArchitecture}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects.architecture as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						{#if project.type === 'img'}
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
						{:else if project.type === 'emoji'}
							<span class="mb-4 block text-5xl">
								{project.emoji}
							</span>
						{/if}

						<!-- NEW Badge -->
						{#if project.badge === 'NEW'}
							<div class="absolute -top-3 -right-3">
								<span class="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
									⭐ NEW
								</span>
							</div>
						{/if}

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>

      <div class="absolute top-4 right-4 text-[var(--color-card-text)] opacity-20 transition-opacity group-hover:opacity-60">
      {#if getLinkType(project.url) === 'github'}
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      {:else if getLinkType(project.url) === 'external'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      {/if}
      </div>
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterQuartet}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each projects.quartet as project}
					{#if project.comingSoon}
						<div
							class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 opacity-70"
						>
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
							<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
								{$t[`${project.key}Title`]}
							</h3>
							<p class="text-[var(--color-card-text)] opacity-80">
								{$t[`${project.key}Tagline`]}
							</p>
							<div class="mt-3">
								<span
									class="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300"
								>
									Coming Soon
								</span>
							</div>
						</div>
					{:else}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
						>
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
							<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
								{$t[`${project.key}Title`]}
							</h3>
							<p class="text-[var(--color-card-text)] opacity-80">
								{$t[`${project.key}Tagline`]}
							</p>
       <div class="absolute top-4 right-4 text-[var(--color-card-text)] opacity-20 transition-opacity group-hover:opacity-60">
       {#if getLinkType(project.url) === 'github'}
         <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
           <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
         </svg>
       {:else if getLinkType(project.url) === 'external'}
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
         </svg>
       {/if}
       </div>
						</a>
					{/if}
				{/each}
			</div>
		</div>

		<div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterLibrary}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects.library as project}
					<a
						href={project.url}
						target="_self"
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						{#if project.type === 'img'}
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
						{:else if project.type === 'emoji'}
							<span class="mb-4 block text-5xl">
								{project.emoji}
							</span>
						{/if}

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>
		<div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterPersonal}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects.personal as project}
					<a
						href={project.url}
						target={project.url.startsWith('/') ? '_self' : '_blank'}
						rel={project.url.startsWith('/') ? '' : 'noopener noreferrer'}
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						{#if project.type === 'img'}
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
						{:else if project.type === 'emoji'}
							<span class="mb-4 block text-5xl">
								{project.emoji}
							</span>
						{/if}

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>

 <section class="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      <div class="relative min-h-[500px] md:min-h-[400px]"> 
        
        {#key activeIndex}
          <div 
            in:fly={{ x: 200 * direction, duration: 400, delay: 100 }} 
            out:fly={{ x: -200 * direction, duration: 400 }}
            class="absolute inset-0 w-full"
          >
            <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-amber-100 dark:border-slate-700 h-full">
              
              <div class="flex-1 text-center md:text-left z-10">
                <span class={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-4 ${currentBook.colorClass}`}>
                  {currentBook.label}
                </span>
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  {currentBook.title}
                </h2>
                <p class="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                  {currentBook.desc}
                </p>
                <a 
                  href={currentBook.url} 
                  target={getLinkType(currentBook.url) === 'external' ? '_blank' : '_self'}
                  rel={getLinkType(currentBook.url) === 'external' ? 'noopener noreferrer' : ''}
                  class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-sm"
                >
                  {currentBook.cta}
                  
                  {#if getLinkType(currentBook.url) === 'external'}
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  {:else}
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  {/if}

                </a>
              </div>

              <div class="w-48 md:w-56 flex-shrink-0 transform md:rotate-3 transition-transform hover:rotate-0 duration-500 z-10">
                  <img src={currentBook.cover} alt={currentBook.title} class="w-full h-auto rounded shadow-2xl" />
              </div>

            </div>
          </div>
        {/key}
      </div>

      <button 
        on:click={prevSlide} 
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300"
        aria-label="Previous book"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>

      <button 
        on:click={nextSlide} 
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300"
        aria-label="Next book"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {#each $t.bookLaunches as _, i}
          <button 
            class="w-2.5 h-2.5 rounded-full transition-colors {i === activeIndex ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-600'}"
            on:click={() => { direction = i > activeIndex ? 1 : -1; activeIndex = i; resetTimer(); }}
            aria-label="Go to slide {i + 1}"
          ></button>
        {/each}
      </div>

    </div>
  </section>

  <button
    on:click={() => showWelcomeModal = true}
    class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
    aria-label={$t.help}
  >
    <span class="text-2xl font-bold">?</span>
  </button>
</div>
