<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  import ContentEn from '$lib/content/syntheses/we-see-you.md';
  import ContentSv from '$lib/content/syntheses/we-see-you-sv.md';

  const meta = {
    en: {
      title: 'We See You',
      subtitle: 'For those who have no energy left for theories',
      description:
        'The foundation of all governance is the body, the breath, the safety of a place to sleep. This synthesis speaks directly to human need—and argues that any system that cannot perceive that need has already failed.',
      audience: 'Anyone who is tired, hungry, scared, or just needs to hear that someone sees them.',
      pdf: '/syntheses/we-see-you.pdf',
    },
    sv: {
      title: 'Vi ser dig',
      subtitle: 'För den som inte orkar med fler teorier',
      description:
        'All styrning börjar med kroppen, andningen, tryggheten att ha någonstans att sova.',
      audience: 'För den som är trött, hungrig, rädd – eller bara behöver höra att någon ser dig.',
      pdf: '/syntheses/we-see-you-sv.pdf',
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
  <!-- Top: back + PDF -->
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
      class="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-200 mb-4"
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
