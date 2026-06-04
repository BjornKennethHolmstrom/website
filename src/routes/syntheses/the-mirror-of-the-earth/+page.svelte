<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  import ContentEn from '$lib/content/syntheses/the-mirror-of-the-earth.md';
  import ContentSv from '$lib/content/syntheses/the-mirror-of-the-earth-sv.md';

  const meta = {
    en: {
      title: 'The Mirror of the Earth',
      subtitle: 'Why the Planet Is Speaking and Our Institutions Cannot Hear It',
      description:
        'A synthesis for planetary thinkers, deep ecologists, and the emerging Earth community. It describes the planetary Variety Gap—the distance between the Earth system’s complexity and our institutions’ ability to perceive it—and calls for an Earth‑attuned governance architecture.',
      audience: 'Planetary thinkers, deep ecologists, indigenous knowledge holders, and Gaia theorists.',
      pdf: '/syntheses/the-mirror-of-the-earth.pdf',
    },
    sv: {
      title: 'Jordens spegel',
      subtitle: 'Varför planeten talar och våra institutioner inte kan höra den',
      description:
        'En syntes för planetära tänkare, djup ekologer och den framväxande Jordgemenskapen. Den beskriver det planetära varietetsgapet – avståndet mellan jordsystemets komplexitet och våra institutioners förmåga att uppfatta det – och efterlyser en jordförankrad styrningsarkitektur.',
      audience: 'Planetära tänkare, djup ekologer, bärare av ursprunglig kunskap och Gaia‑teoretiker.',
      pdf: '/syntheses/the-mirror-of-the-earth-sv.pdf',
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
      class="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 mb-4"
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
