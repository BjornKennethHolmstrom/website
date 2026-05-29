<script lang="ts">
  import { t, language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const book = {
    cover: '/resources/book-cover-what-a-civilization-must-value.svg',
    title: 'What a Civilization Must Value',
  };

  let showLightbox = $state(false);
  let imageError = $state(false);

  // ── English Imports ──────────────────────────────────────────
  import IntroductionEn from './sections/en/introduction.md';
  import Chapter01En from './sections/en/chapter-1.md';
  import Chapter02En from './sections/en/chapter-2.md';
  import Chapter03En from './sections/en/chapter-3.md';
  import Chapter04En from './sections/en/chapter-4.md';
  import Chapter05En from './sections/en/chapter-5.md';
  import Chapter06En from './sections/en/chapter-6.md';
  import Chapter07En from './sections/en/chapter-7.md';
  import ConclusionEn from './sections/en/conclusion.md';
  import ReferencesEn from './sections/en/references.md';
  import GlossaryEn from './sections/en/glossary.md';

  // ── Swedish Imports ───────────────────────────────────────────
  import IntroductionSv from './sections/sv/introduction.md';
  import Chapter01Sv from './sections/sv/chapter-1.md';
  import Chapter02Sv from './sections/sv/chapter-2.md';
  import Chapter03Sv from './sections/sv/chapter-3.md';
  import Chapter04Sv from './sections/sv/chapter-4.md';
  import Chapter05Sv from './sections/sv/chapter-5.md';
  import Chapter06Sv from './sections/sv/chapter-6.md';
  import Chapter07Sv from './sections/sv/chapter-7.md';
  import ConclusionSv from './sections/sv/conclusion.md';
  import ReferencesSv from './sections/sv/references.md';
  import GlossarySv from './sections/sv/glossary.md';

  // ── TOC ───────────────────────────────────────────────────────
  const toc = [
    { id: 'introduction', titleKey: 'introduction', compEn: IntroductionEn, compSv: IntroductionSv },
    { partKey: 'part1', isPartHeader: true },
    { id: 'chapter-01', titleKey: 'chapter1', compEn: Chapter01En, compSv: Chapter01Sv },
    { id: 'chapter-02', titleKey: 'chapter2', compEn: Chapter02En, compSv: Chapter02Sv },
    { partKey: 'part2', isPartHeader: true },
    { id: 'chapter-03', titleKey: 'chapter3', compEn: Chapter03En, compSv: Chapter03Sv },
    { partKey: 'part3', isPartHeader: true },
    { id: 'chapter-04', titleKey: 'chapter4', compEn: Chapter04En, compSv: Chapter04Sv },
    { id: 'chapter-05', titleKey: 'chapter5', compEn: Chapter05En, compSv: Chapter05Sv },
    { partKey: 'part4', isPartHeader: true },
    { id: 'chapter-06', titleKey: 'chapter6', compEn: Chapter06En, compSv: Chapter06Sv },
    { id: 'chapter-07', titleKey: 'chapter7', compEn: Chapter07En, compSv: Chapter07Sv },
    { partKey: 'conclusion', isPartHeader: true },
    { id: 'conclusion', titleKey: 'conclusion', compEn: ConclusionEn, compSv: ConclusionSv },
    { partKey: 'references', isPartHeader: true },
    { id: 'references', titleKey: 'references', compEn: ReferencesEn, compSv: ReferencesSv },
    { id: 'glossary', titleKey: 'glossary', compEn: GlossaryEn, compSv: GlossarySv },
  ];

  let activeSection = $state('introduction');
  let activeItem = $derived(toc.find(s => s.id === activeSection));
  let ActiveComponent = $derived(
    activeItem
      ? $language === 'sv'
        ? activeItem.compSv
        : activeItem.compEn
      : IntroductionEn,
  );
  let activeIndex = $derived(toc.findIndex(s => s.id === activeSection));

  function scrollToTop() {
    const content = document.getElementById('book-content');
    if (content) {
      content.scrollTop = 0;
      content.scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function nextChapter() {
    let nextIndex = activeIndex + 1;
    while (nextIndex < toc.length && toc[nextIndex].isPartHeader) {
      nextIndex++;
    }
    if (nextIndex < toc.length) {
      activeSection = toc[nextIndex].id;
      scrollToTop();
    }
  }

  function prevChapter() {
    let prevIndex = activeIndex - 1;
    while (prevIndex >= 0 && toc[prevIndex].isPartHeader) {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      activeSection = toc[prevIndex].id;
      scrollToTop();
    }
  }
</script>

<SEO
  title="{$t.whatACivilizationMustValueBook.meta.title} | Björn Kenneth Holmström"
  description={$t.whatACivilizationMustValueBook.meta.description}
  type="book"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  <!-- Sidebar -->
  <aside
    class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto border-r border-[var(--color-separator)]"
  >
    <div class="mb-8">
      <a
        href="/books"
        class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
      >
        {$t.whatACivilizationMustValueBook.ui.backToBooks}
      </a>
    </div>

    <button
      onclick={() => (showLightbox = true)}
      class="mb-8 w-full aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg border border-[var(--color-separator)] hover:scale-105 transition-transform cursor-pointer group relative"
      aria-label="View cover in full size"
    >
      {#if !imageError}
        <img
          src={book.cover}
          alt="{book.title} cover"
          class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          onerror={() => (imageError = true)}
        />
      {:else}
        <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
          📚
        </div>
      {/if}
    </button>

    <div class="mb-8 space-y-3">
      <a
        href="/books/What_a_Civilization_Must_Value.pdf"
        download
        class="block w-full py-2 text-center text-sm font-bold text-[var(--color-page-bg)] bg-[var(--color-page-accent)] rounded hover:opacity-90 transition-opacity"
      >
        {$t.whatACivilizationMustValueBook.ui.downloadPdfEn}
      </a>
      <a
        href="/books/What_a_Civilization_Must_Value-sv.pdf"
        download
        class="block w-full py-2 text-center text-sm font-bold text-[var(--color-page-bg)] bg-[var(--color-page-accent)] rounded hover:opacity-90 transition-opacity"
      >
        {$t.whatACivilizationMustValueBook.ui.downloadPdfSv}
      </a>
    </div>

    <nav class="space-y-1 pb-16">
      {#each toc as section}
        {#if section.isPartHeader}
          <div class="part-header">
            {$t.whatACivilizationMustValueBook.parts[section.partKey]}
          </div>
        {:else}
          <button
            onclick={() => {
              activeSection = section.id;
              scrollToTop();
            }}
            class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors truncate
            {activeSection === section.id
              ? 'bg-[var(--color-page-accent)] text-[var(--color-page-bg)] font-bold'
              : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-80 hover:opacity-100'}"
          >
            {$t.whatACivilizationMustValueBook.toc[section.titleKey]}
          </button>
        {/if}
      {/each}
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 min-w-0 px-4 md:px-12 pt-16 pb-24" id="book-content">
    <div class="lg:hidden mb-8">
      <h1 class="text-3xl font-bold text-[var(--color-page-accent)]">
        {$t.whatACivilizationMustValueBook.meta.title}
      </h1>
      <p class="text-sm opacity-70 mt-2">
        {$t.whatACivilizationMustValueBook.meta.subtitle}
      </p>
    </div>

    <article
      class="prose prose-lg max-w-none"
      style="--tw-prose-body: var(--color-page-text); --tw-prose-bold: var(--color-page-text);"
    >
      <svelte:component this={ActiveComponent} />
    </article>

    <div
      class="mt-16 pt-8 border-t border-[var(--color-separator)] flex justify-between items-center"
    >
      <div>
        {#if activeIndex > 0 && !toc[activeIndex - 1]?.isPartHeader}
          <button
            onclick={prevChapter}
            class="text-sm font-medium hover:text-[var(--color-page-accent)] transition-colors"
          >
            ← {$t.whatACivilizationMustValueBook.ui.previous}
          </button>
        {/if}
      </div>

      <div class="text-xs opacity-50 hidden sm:block">
        {$t.whatACivilizationMustValueBook.meta.title}
      </div>

      <div>
        {#if activeIndex < toc.length - 1}
          <button
            onclick={nextChapter}
            class="text-sm font-bold text-[var(--color-page-accent)] hover:opacity-80 transition-colors"
          >
            {$t.whatACivilizationMustValueBook.ui.nextChapter}
          </button>
        {/if}
      </div>
    </div>
  </main>
</div>

<!-- Lightbox -->
{#if showLightbox}
  <div
    class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
    onclick={() => (showLightbox = false)}
    role="dialog"
    aria-modal="true"
    aria-label="Book cover full view"
  >
    <button
      onclick={() => (showLightbox = false)}
      class="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light leading-none transition-colors"
      aria-label="Close"
    >
      ×
    </button>
    <div class="w-full h-full flex items-center justify-center p-8">
      <img
        src={book.cover}
        alt="{book.title} cover - full view"
        class="max-w-xl max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        onclick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
{/if}

<style>
  .part-header {
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.6;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    padding-left: 0.75rem;
  }
</style>
