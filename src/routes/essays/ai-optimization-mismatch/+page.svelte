<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import ContentEn from './ai-optimization-mismatch.md';
  import ContentSv from './ai-optimization-mismatch-sv.md';

  const meta = {
    en: {
      title: 'AI and the Optimization–Design Mismatch',
      description: 'AI is an optimization technology. But when the objective function it optimizes—GDP, engagement, quarterly earnings—is misaligned with human and ecological flourishing, increasing efficiency amplifies dysfunction. This essay diagnoses the mismatch, traces its consequences, and outlines what realigning AI with a higher-fidelity signal would require.',
      back: '← All Essays',
      category: 'AI & Tech',
      readTime: '12 min read',
      published: 'April 2026',
    },
    sv: {
      title: 'AI och optimerings–design-missmatchningen',
      description: 'AI är en optimeringsteknologi. Men när målfunktionen den optimerar—BNP, engagemang, kvartalsvinster—är felanpassad till mänskligt och ekologiskt blomstrande, förstärker ökad effektivitet dysfunktionen. Denna essä diagnostiserar missmatchningen, spårar dess konsekvenser och skisserar vad som krävs för att omrikta AI mot en signal med högre upplösning.',
      back: '← Alla essäer',
      category: 'AI & Tech',
      readTime: '12 min läsning',
      published: 'April 2026',
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
