<script lang="ts">
  import { t, language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  const book = {
    cover: '/resources/book-cover-competent-blindness.svg',
    title: 'Competent Blindness',
  };

  let showLightbox = $state(false);
  let imageError = $state(false);

  // ── English Imports ──────────────────────────────────────────
  import IntroductionEn from './sections/en/introduction.md';
  import Chapter01En from './sections/en/chapter-01.md';
  import Chapter02En from './sections/en/chapter-02.md';
  import Chapter03En from './sections/en/chapter-03.md';
  import Chapter04En from './sections/en/chapter-04.md';
  import Chapter05En from './sections/en/chapter-05.md';
  import Chapter06En from './sections/en/chapter-06.md';
  import Chapter07En from './sections/en/chapter-07.md';
  import Chapter08En from './sections/en/chapter-08.md';
  import Chapter09En from './sections/en/chapter-09.md';
  import Chapter10En from './sections/en/chapter-10.md';
  import Chapter11En from './sections/en/chapter-11.md';
  import Chapter12En from './sections/en/chapter-12.md';
  import Chapter13En from './sections/en/chapter-13.md';
  import Chapter14En from './sections/en/chapter-14.md';
  import Chapter15En from './sections/en/chapter-15.md';
  import Chapter16En from './sections/en/chapter-16.md';
  import Chapter17En from './sections/en/chapter-17.md';
  import Chapter18En from './sections/en/chapter-18.md';
  import Chapter19En from './sections/en/chapter-19.md';
  import ConclusionEn from './sections/en/conclusion.md';
  import AppendixAEn from './sections/en/appendix-a.md';
  import AppendixBEn from './sections/en/appendix-b.md';
  import AppendixCEn from './sections/en/appendix-c.md';
  import AppendixDEn from './sections/en/appendix-d.md';
  import AppendixEEn from './sections/en/appendix-e.md';
  import AppendixFEn from './sections/en/appendix-f.md';

  // ── Swedish Imports ───────────────────────────────────────────
  import IntroductionSv from './sections/sv/introduction.md';
  import Chapter01Sv from './sections/sv/chapter-01.md';
  import Chapter02Sv from './sections/sv/chapter-02.md';
  import Chapter03Sv from './sections/sv/chapter-03.md';
  import Chapter04Sv from './sections/sv/chapter-04.md';
  import Chapter05Sv from './sections/sv/chapter-05.md';
  import Chapter06Sv from './sections/sv/chapter-06.md';
  import Chapter07Sv from './sections/sv/chapter-07.md';
  import Chapter08Sv from './sections/sv/chapter-08.md';
  import Chapter09Sv from './sections/sv/chapter-09.md';
  import Chapter10Sv from './sections/sv/chapter-10.md';
  import Chapter11Sv from './sections/sv/chapter-11.md';
  import Chapter12Sv from './sections/sv/chapter-12.md';
  import Chapter13Sv from './sections/sv/chapter-13.md';
  import Chapter14Sv from './sections/sv/chapter-14.md';
  import Chapter15Sv from './sections/sv/chapter-15.md';
  import Chapter16Sv from './sections/sv/chapter-16.md';
  import Chapter17Sv from './sections/sv/chapter-17.md';
  import Chapter18Sv from './sections/sv/chapter-18.md';
  import Chapter19Sv from './sections/sv/chapter-19.md';
  import ConclusionSv from './sections/sv/conclusion.md';
  import AppendixASv from './sections/sv/appendix-a.md';
  import AppendixBSv from './sections/sv/appendix-b.md';
  import AppendixCSv from './sections/sv/appendix-c.md';
  import AppendixDSv from './sections/sv/appendix-d.md';
  import AppendixESv from './sections/sv/appendix-e.md';
  import AppendixFSv from './sections/sv/appendix-f.md';

  // ── TOC ───────────────────────────────────────────────────────
  const toc = [
    { id: 'introduction', titleKey: 'introduction', compEn: IntroductionEn, compSv: IntroductionSv },
    { partKey: 'part1', isPartHeader: true },
    { id: 'chapter-01', titleKey: 'chapter1', compEn: Chapter01En, compSv: Chapter01Sv },
    { id: 'chapter-02', titleKey: 'chapter2', compEn: Chapter02En, compSv: Chapter02Sv },
    { id: 'chapter-03', titleKey: 'chapter3', compEn: Chapter03En, compSv: Chapter03Sv },
    { partKey: 'part2', isPartHeader: true },
    { id: 'chapter-04', titleKey: 'chapter4', compEn: Chapter04En, compSv: Chapter04Sv },
    { id: 'chapter-05', titleKey: 'chapter5', compEn: Chapter05En, compSv: Chapter05Sv },
    { id: 'chapter-06', titleKey: 'chapter6', compEn: Chapter06En, compSv: Chapter06Sv },
    { id: 'chapter-07', titleKey: 'chapter7', compEn: Chapter07En, compSv: Chapter07Sv },
    { id: 'chapter-08', titleKey: 'chapter8', compEn: Chapter08En, compSv: Chapter08Sv },
    { partKey: 'part3', isPartHeader: true },
    { id: 'chapter-09', titleKey: 'chapter9', compEn: Chapter09En, compSv: Chapter09Sv },
    { id: 'chapter-10', titleKey: 'chapter10', compEn: Chapter10En, compSv: Chapter10Sv },
    { id: 'chapter-11', titleKey: 'chapter11', compEn: Chapter11En, compSv: Chapter11Sv },
    { id: 'chapter-12', titleKey: 'chapter12', compEn: Chapter12En, compSv: Chapter12Sv },
    { id: 'chapter-13', titleKey: 'chapter13', compEn: Chapter13En, compSv: Chapter13Sv },
    { id: 'chapter-14', titleKey: 'chapter14', compEn: Chapter14En, compSv: Chapter14Sv },
    { partKey: 'part4', isPartHeader: true },
    { id: 'chapter-15', titleKey: 'chapter15', compEn: Chapter15En, compSv: Chapter15Sv },
    { id: 'chapter-16', titleKey: 'chapter16', compEn: Chapter16En, compSv: Chapter16Sv },
    { id: 'chapter-17', titleKey: 'chapter17', compEn: Chapter17En, compSv: Chapter17Sv },
    { id: 'chapter-18', titleKey: 'chapter18', compEn: Chapter18En, compSv: Chapter18Sv },
    { id: 'chapter-19', titleKey: 'chapter19', compEn: Chapter19En, compSv: Chapter19Sv },
    { partKey: 'conclusion', isPartHeader: true },
    { id: 'conclusion', titleKey: 'conclusion', compEn: ConclusionEn, compSv: ConclusionSv },
    { partKey: 'appendices', isPartHeader: true },
    { id: 'appendix-a', titleKey: 'appendixA', compEn: AppendixAEn, compSv: AppendixASv },
    { id: 'appendix-b', titleKey: 'appendixB', compEn: AppendixBEn, compSv: AppendixBSv },
    { id: 'appendix-c', titleKey: 'appendixC', compEn: AppendixCEn, compSv: AppendixCSv },
    { id: 'appendix-d', titleKey: 'appendixD', compEn: AppendixDEn, compSv: AppendixDSv },
    { id: 'appendix-e', titleKey: 'appendixE', compEn: AppendixEEn, compSv: AppendixESv },
    { id: 'appendix-f', titleKey: 'appendixF', compEn: AppendixFEn, compSv: AppendixFSv },
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
  title="{$t.competentBlindnessBook.meta.title} | Björn Kenneth Holmström"
  description={$t.competentBlindnessBook.meta.description}
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
        {$t.competentBlindnessBook.ui.backToBooks}
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
        href="/books/Competent_Blindness.pdf"
        download
        class="block w-full py-2 text-center text-sm font-bold text-[var(--color-page-bg)] bg-[var(--color-page-accent)] rounded hover:opacity-90 transition-opacity"
      >
        {$t.competentBlindnessBook.ui.downloadPdfEn}
      </a>
      <a
        href="/books/Kompetent_Blindhet.pdf"
        download
        class="block w-full py-2 text-center text-sm font-bold border border-[var(--color-page-accent)] text-[var(--color-page-accent)] rounded hover:bg-[var(--color-card-bg)] transition-colors"
      >
        {$t.competentBlindnessBook.ui.downloadPdfSv}
      </a>
    </div>

    <nav class="space-y-1 pb-16">
      {#each toc as section}
        {#if section.isPartHeader}
          <div class="part-header">
            {$t.competentBlindnessBook.parts[section.partKey]}
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
            {$t.competentBlindnessBook.toc[section.titleKey]}
          </button>
        {/if}
      {/each}
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 min-w-0 px-4 md:px-12 pt-16 pb-24" id="book-content">
    <div class="lg:hidden mb-8">
      <h1 class="text-3xl font-bold text-[var(--color-page-accent)]">
        {$t.competentBlindnessBook.meta.title}
      </h1>
      <p class="text-sm opacity-70 mt-2">
        {$t.competentBlindnessBook.meta.subtitle}
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
            ← {$t.competentBlindnessBook.ui.previous}
          </button>
        {/if}
      </div>

      <div class="text-xs opacity-50 hidden sm:block">
        {$t.competentBlindnessBook.meta.title}
      </div>

      <div>
        {#if activeIndex < toc.length - 1}
          <button
            onclick={nextChapter}
            class="text-sm font-bold text-[var(--color-page-accent)] hover:opacity-80 transition-colors"
          >
            {$t.competentBlindnessBook.ui.nextChapter}
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
