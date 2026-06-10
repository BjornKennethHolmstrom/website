<script lang="ts">
  import { language, t } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  import ContentEn from '$lib/content/syntheses/the-spirits-the-state-cannot-hear.md';
  import ContentSv from '$lib/content/syntheses/the-spirits-the-state-cannot-hear-sv.md';

  const SLUG = 'the-spirits-the-state-cannot-hear';

  $: furtherReading = ($t.synthesesItems as { slug: string; furtherReading?: { href: string; label: string; reason: string }[] }[])
    ?.find((i) => i.slug === SLUG)?.furtherReading ?? [];

  const meta = {
    en: {
      title: 'The Spirits the State Cannot Hear',
      subtitle: 'Why Ancestral Governance Is Not the Past—It Is the Missing Dimension of Our Future',
      description:
        'An offering from the edge of the framework to the keepers of the old ways. It argues that the Variety Gap is not just a failure of measurement—it is a spiritual catastrophe that destroyed the sensors that maintained human-ecosystem relationships for millennia.',
      audience: 'Keepers of ancestral traditions, indigenous communities, and those who know the land is alive.',
      pdf: '/syntheses/the-spirits-the-state-cannot-hear.pdf',
    },
    sv: {
      title: 'Andarna som staten inte kan höra',
      subtitle: 'Varför förfädernas styrelseskick inte är det förflutna – det är den saknade dimensionen av vår framtid',
      description:
        'Ett erbjudande från ramverkets utkant till väktarna av de gamla vägarna. Det hävdar att varietetsgapet inte bara är ett mätfel – det är en andlig katastrof som förstörde de sensorer som upprätthöll relationerna mellan människa och ekosystem i årtusenden.',
      audience: 'Väktare av förfädernas traditioner, ursprungsfolk och de som vet att landet lever.',
      pdf: '/syntheses/the-spirits-the-state-cannot-hear-sv.pdf',
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
      class="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4"
    >
      {$language === 'sv' ? 'För' : 'For'}: {currentMeta.audience}
    </span>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">{currentMeta.title}</h1>
    <p class="text-xl opacity-70">{currentMeta.subtitle}</p>
  </header>

  <article class="prose prose-lg max-w-none"
    style="
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-body: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
      --tw-prose-links: var(--color-page-accent);
      --tw-prose-quotes: var(--color-page-text);
    ">
    <svelte:component this={Content} />
  </article>

  {#if furtherReading.length}
    <section class="mt-16 pt-8 border-t border-[var(--color-separator)]">
      <h3 class="text-xl font-bold mb-2">{$t.furtherReadingTitle}</h3>
      <p class="text-sm opacity-70 mb-6">{$t.furtherReadingIntro}</p>
      <ul class="space-y-5">
        {#each furtherReading as item}
          <li>
            <a href={item.href} class="font-medium text-[var(--color-page-accent)] hover:underline">
              {item.label} →
            </a>
            <p class="text-sm opacity-70 mt-1">{item.reason}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  <div class="mt-16 pt-8 border-t border-[var(--color-separator)]">
    <a href="/syntheses" class="text-sm opacity-60 hover:opacity-100 transition-opacity">
      {$language === 'sv' ? '← Tillbaka till läsguiden' : '← Back to Reader\'s Guide'}
    </a>
    <div class="mt-8">
      <ShareButtons title={currentMeta.title} />
    </div>
  </div>
</div>
