<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import ContentEn from './boundary-blind-spot.md';
  import ContentSv from './boundary-blind-spot-sv.md';

  const meta = {
    en: {
      title: 'The Boundary and the Blind Spot — Nondual Awareness and the Architecture of Governance',
      description: 'Every governance system draws a boundary that determines what becomes visible. This essay explores how the nondual insight—that the observer is part of the observed—illuminates the structural blind spots of institutional design.',
      back: '← All Essays',
      category: 'Governance & Consciousness',
      readTime: '18 min read',
      published: 'May 2026',
    },
    sv: {
      title: 'Gränsen och den blinda fläcken — Icke‑dualitet och styrningens arkitektur',
      description: 'Varje styrsystem drar en gräns som avgör vad som blir synligt. Denna essä utforskar hur icke‑dual insikt—att observatören är en del av det observerade—belyser de strukturella blinda fläckarna i institutionell design.',
      back: '← Alla essäer',
      category: 'Styrning & Medvetande',
      readTime: '18 min läsning',
      published: 'Maj 2026',
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
      bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
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
