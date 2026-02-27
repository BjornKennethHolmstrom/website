<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import ContentEn from './the-economy-that-cannot-see.md';
  import ContentSv from './the-economy-that-cannot-see-sv.md';

  const meta = {
    en: {
      title: 'The Economy That Cannot See',
      description: 'GDP is a single-dimension signal governing a high-variety system. Ashby\'s Law of Requisite Variety reveals why market consolidation progressively destroys the observation capacity needed to serve what it claims to grow — and why the broken feedback loop between extraction and consequence is not a market failure but the market\'s architecture.',
      back: '← All Essays',
      category: 'Economics',
      readTime: '15 min read',
      published: 'February 2026',
    },
    sv: {
      title: 'Ekonomin som inte kan se',
      description: 'BNP är en endimensionssignal som styr ett system med hög variation. Ashbys lag om nödvändig variation avslöjar varför marknadskonsolidering progressivt förstör den observationskapacitet som behövs för att tjäna det den påstår sig odla — och varför den brutna återkopplingsslingan mellan utvinning och konsekvens är marknadens arkitektur, inte ett marknadsmisslyckande.',
      back: '← Alla essäer',
      category: 'Ekonomi',
      readTime: '15 min läsning',
      published: 'Februari 2026',
    },
  };

  let t = $derived(meta[$language] ?? meta.en);
  let Content = $derived($language === 'sv' ? ContentSv : ContentEn);
</script>

<SEO title="{t.title} | Björn Kenneth Holmström" description={t.description} type="article" />

<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6">

  <div class="mb-10">
    <a href="/essays" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
      style="color: var(--color-page-accent);">
      {t.back}
    </a>
  </div>

  <header class="mb-12">
    <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4
      bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
      {t.category}
    </span>
    <h1 class="text-3xl md:text-4xl font-bold mb-6" style="color: var(--color-page-text);">
      {t.title}
    </h1>
    <p class="text-sm opacity-50" style="color: var(--color-page-text);">
      {t.published} · {t.readTime}
    </p>
  </header>

  <article class="prose prose-lg max-w-none"
    style="
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-body: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
      --tw-prose-links: var(--color-page-accent);
      --tw-prose-hr: var(--color-separator);
    ">
    <Content />
  </article>

  <div class="mt-16 pt-8 border-t border-[var(--color-separator)]">
    <ShareButtons title={t.title} />
  </div>

</div>
