<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import ContentEn from './the-shortest-chain.md';
  import ContentSv from './the-shortest-chain-sv.md';

  const meta = {
    en: {
      title: 'The Shortest Chain',
      description: 'The Governance as Engineering series establishes that shorter chains produce better outcomes. Applied inward, this argument reaches a limit that engineering cannot resolve: every instruction — including "observe yourself" — adds a layer of intermediation.',
      back: '← All Essays',
      category: 'Consciousness',
      readTime: '5 min read',
      published: 'February 2026',
    },
    sv: {
      title: 'Den kortaste kedjan',
      description: 'Serien Styrning som ingenjörskonst fastslår att kortare kedjor ger bättre resultat. Tillämpat inåt når detta argument en gräns som ingenjörskonsten inte kan lösa.',
      back: '← Alla essäer',
      category: 'Medvetande',
      readTime: '5 min läsning',
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
      bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
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
