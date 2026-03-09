<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import ContentEn from './the-hidden-cost-of-money.md';
  import ContentSv from './the-hidden-cost-of-money-sv.md';

  const meta = {
    en: {
      title: 'The Hidden Cost of Money',
      description: 'An energy-efficiency analysis of money as coordination protocol — physical footprint, three structural wastes, and what an alternative asks of us.',
      back: '← All Essays',
      category: 'Economics',
      readTime: '12 min read',
      published: 'March 2026',
    },
    sv: {
      title: 'Pengarnas dolda kostnad',
      description: 'En energieffektivitetsanalys av pengar som koordinationsprotokoll — fysisk fotavtryck, tre strukturella slöserier, och vad ett alternativ kräver av oss.',
      back: '← Alla essäer',
      category: 'Ekonomi',
      readTime: '12 min läsning',
      published: 'Mars 2026',
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
