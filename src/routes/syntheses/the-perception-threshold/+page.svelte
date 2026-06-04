<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  import ContentEn from '$lib/content/syntheses/the-perception-threshold.md';
  import ContentSv from '$lib/content/syntheses/the-perception-threshold-sv.md';

  const meta = {
    en: {
      title: 'The Perception Threshold',
      subtitle: 'Why Civilisational Transitions Are Always About What We Can See—and What That Means for This One',
      description:
        'A synthesis for systems thinkers, integral practitioners, and evolutionary designers. It frames the Variety Gap as the structural mechanism of civilisational inflection and the meta‑governance imperative as the evolutionary challenge of our era.',
      audience: 'Systems thinkers, integral practitioners, metamodern explorers, and evolutionary designers.',
      pdf: '/syntheses/the-perception-threshold.pdf',
    },
    sv: {
      title: 'Perceptionströskeln',
      subtitle: 'Varför civilisatoriska övergångar alltid handlar om vad vi kan se – och vad det betyder för den här',
      description:
        'En syntes för systemtänkare, integrala praktiker och evolutionära designers. Den ramar in varietetsgapet som den strukturella mekanismen för civilisatorisk omvälvning och meta‑styrningsimperativet som vår tids evolutionära utmaning.',
      audience: 'Systemtänkare, integrala praktiker, metamoderna utforskare och evolutionära designers.',
      pdf: '/syntheses/the-perception-threshold-sv.pdf',
    },
  };

  $: currentMeta = meta[$language];
  $: Content = $language === 'sv' ? ContentSv : ContentEn;
</script>

<SEO
  title={`${currentMeta.title} | The Clouded Mirror — Reader's Guide`}
  description={currentMeta.description}
/>

<div class="max-w-3xl mx-auto px-4 py-16">
  <div class="mb-8 flex items-center justify-between">
    <a
      href="/syntheses"
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {$language === 'sv' ? 'Tillbaka till läsguiden' : 'Back to Reader\'s Guide'}
    </a>

    <a
      href={currentMeta.pdf}
      download
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
      PDF
    </a>
  </div>

  <header class="mb-12 text-center">
    <span
      class="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mb-4"
    >
      {$language === 'sv' ? 'För' : 'For'}: {currentMeta.audience}
    </span>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">{currentMeta.title}</h1>
    <p class="text-xl opacity-70">{currentMeta.subtitle}</p>
  </header>

  <article class="prose prose-lg max-w-none dark:prose-invert" style="--tw-prose-body: #f1f5f9;">
    <svelte:component this={Content} />
  </article>

  <div class="mt-16 pt-8 border-t border-[var(--color-separator)]">
    <a href="/syntheses" class="text-sm opacity-60 hover:opacity-100 transition-opacity">
      {$language === 'sv' ? '← Tillbaka till läsguiden' : '← Back to Reader\'s Guide'}
    </a>
    <div class="mt-8">
      <ShareButtons title={currentMeta.title} />
    </div>
  </div>
</div>
