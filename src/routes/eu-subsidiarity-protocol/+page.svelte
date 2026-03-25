<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import { euTranslations } from '$lib/i18n/translations/eu';

  // Import your markdown files as Svelte components
  import ProtocolV1_2 from './sections/v1.2.md';
  import AnnexA from './sections/annex-a-gsi-framework-v5.md';
  import AnnexB from './sections/annex-b-actuation-layer.md';

  // Reactive translation
  let t = $derived(euTranslations[$language] || euTranslations.en);

  // State for progressive disclosure
  let showTechnicalDocs = $state(false);

  function toggleDocs() {
    showTechnicalDocs = !showTechnicalDocs;
  }
</script>

<SEO 
  title={t.meta.title}
  description={t.meta.description}
/>

<main class="mx-auto max-w-4xl px-6 py-16">
  
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl" style="color: var(--color-page-text);">
      {t.hero.title}
    </h1>
    <p class="text-xl leading-relaxed opacity-80" style="color: var(--color-page-text);">
      {t.hero.tagline}
    </p>
  </header>

  <section class="prose prose-lg mb-16 max-w-none"
    style="
      --tw-prose-body: var(--color-page-text);
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
    ">
    <h2>{t.intro.challengeTitle}</h2>
    <p>{@html t.intro.challengeP1}</p>
    <p>{t.intro.challengeP2}</p>

    <h2>{t.intro.upgradeTitle}</h2>
    <p>{@html t.intro.upgradeP1}</p>
    <p>{@html t.intro.upgradeP2}</p>
  </section>

  <section class="mb-16 rounded-xl border border-[var(--color-separator)] p-8 shadow-sm" style="background-color: var(--color-card-bg);">
    <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-page-text);">{t.briefing.title}</h2>
    <div class="flex flex-col gap-4 sm:flex-row">
      <a 
        href="/pdfs/european-subsidiarity-protocol-executive-briefing.pdf" 
        target="_blank" 
        class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-card-text);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.briefing.executiveBriefing}
      </a>
      <a 
        href="/pdfs/european-subsidiarity-protocol-architecture-map.pdf" 
        target="_blank" 
        class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-card-text);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.briefing.architectureMap}
      </a>
    </div>
  </section>

<section class="border-t border-[var(--color-separator)] pt-12">
    
    <div class="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <h2 class="text-3xl font-bold" style="color: var(--color-page-text);">{t.technical.title}</h2>
        <p class="mt-2 opacity-80" style="color: var(--color-page-text);">{t.technical.tagline}</p>
      </div>
      
      <a 
        href="/pdfs/european-subsidiarity-protocol-v1.2-full.pdf" 
        target="_blank"
        class="flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-page-text)] px-5 py-2.5 text-sm font-semibold text-[var(--color-card-bg)] transition-opacity hover:opacity-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.technical.downloadFull}
      </a>
    </div>

    {#if !showTechnicalDocs}
      <button 
        onclick={toggleDocs} 
        class="w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        {t.technical.expand}
      </button>
    {:else}
      <button 
        onclick={toggleDocs} 
        class="mb-8 w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        {t.technical.collapse}
      </button>

      <div class="prose prose-lg max-w-none"
        style="
          --tw-prose-headings: var(--color-page-text);
          --tw-prose-body: var(--color-page-text);
          --tw-prose-bold: var(--color-page-text);
          --tw-prose-links: var(--color-page-accent);
          --tw-prose-quotes: var(--color-page-text);
          --tw-prose-code: var(--color-page-text);
          --tw-prose-pre-bg: var(--color-card-bg);
          --tw-prose-pre-code: #1a1a1a;
        ">
        <ProtocolV1_2 />
        <hr class="my-16 border-[var(--color-separator)]" />
        <AnnexA />
        <hr class="my-16 border-[var(--color-separator)]" />
        <AnnexB />
      </div>

      <div class="mt-12 flex justify-center border-t border-[var(--color-separator)] pt-8">
         <a 
           href="/pdfs/european-subsidiarity-protocol-v1.2-full.pdf" 
           target="_blank"
           class="text-sm font-medium transition-opacity hover:opacity-70"
           style="color: var(--color-page-text);"
         >
            {t.technical.downloadBottom}
         </a>
      </div>
    {/if}
  </section>

</main>
