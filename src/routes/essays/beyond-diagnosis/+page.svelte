<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import ContentEn from './beyond-diagnosis-en.md';
  import ContentSv from './beyond-diagnosis-sv.md';

  const meta = {
    en: {
      title: 'Beyond Diagnosis: From Decolonial Critique to Institutional Architecture',
      description: 'Epistemic decolonization operates at the paradigm level — the highest leverage point in any system. But critique alone cannot instantiate a new paradigm in working institutions. This essay asks what that connecting work requires and why it has been so hard.',
      back: '← All Essays',
      category: 'Economics',
      readTime: '25 min read',
      published: 'March 2026',
    },
    sv: {
      title: 'Bortom diagnosen: Från dekolonial kritik till institutionell arkitektur',
      description: 'Epistemisk dekolonisering verkar på paradigmnivå — den högsta hävstångspunkten i vilket system som helst. Men kritik ensam kan inte förverkliga ett nytt paradigm i fungerande institutioner. Denna essä frågar vad det förbindande arbetet kräver och varför det har varit så svårt.',
      back: '← Alla essäer',
      category: 'Ekonomi',
      readTime: '25 min läsning',
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

  <!-- Source video -->
  <div class="mb-10 rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-4 flex gap-4 items-start">
    <a href="https://www.youtube.com/watch?v=SZUSrglFDz0"
      target="_blank" rel="noopener noreferrer"
      class="flex-shrink-0 mt-1">
      <img
        src="https://img.youtube.com/vi/SZUSrglFDz0/mqdefault.jpg"
        alt="Video thumbnail"
        class="w-32 rounded"
      />
    </a>
    <div>
      <p class="text-xs font-bold uppercase tracking-wider opacity-50 mb-1" style="color: var(--color-page-text);">
        {$language === 'sv' ? 'Originalvideo' : 'Source video'}
      </p>
      <a href="https://www.youtube.com/watch?v=SZUSrglFDz0"
        target="_blank" rel="noopener noreferrer"
        class="text-sm font-medium hover:underline"
        style="color: var(--color-page-accent);">
        Why Economics Can't Explain Poverty — It Was Designed Not To | Ingrid Harvold Kvangraven
      </a>
      <p class="text-xs opacity-50 mt-1" style="color: var(--color-page-text);">
        FREE – Forum for Real Economic Emancipation
      </p>
    </div>
  </div>

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
