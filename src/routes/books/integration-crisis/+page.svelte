<!-- src/routes/books/integration-crisis/+page.svelte -->
<script lang="ts">
  import { t, language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import { base } from '$app/paths';
  
  // Book data (hardcoded until books array exists)
  const book = {
    cover: '/resources/book-cover-integration-crisis.svg',
    title: 'The Integration Crisis'
  };
  
  // Lightbox state
  let showLightbox = $state(false);
  let imageError = $state(false);
  
  // --- 1. IMPORTS (English) ---
  // Front Matter
  import DedicationEn from './sections/en/dedication.md';
  import PrefaceEn from './sections/en/preface.md';
  import PrimerEn from './sections/en/primer.md';
  
  // Part I: The Crisis
  import Chapter1En from './sections/en/chapter-1.md';
  import Chapter2En from './sections/en/chapter-2.md';
  import Chapter3En from './sections/en/chapter-3.md';
  import Chapter4En from './sections/en/chapter-4.md';
  
  // Part II: The Diagnosis
  import Chapter5En from './sections/en/chapter-5.md';
  import Chapter6En from './sections/en/chapter-6.md';
  import Chapter7En from './sections/en/chapter-7.md';
  import Chapter8En from './sections/en/chapter-8.md';

  // Part III: The Architecture
  import Chapter9En from './sections/en/chapter-9.md';
  import Chapter10En from './sections/en/chapter-10.md';
  import InterludeEn from './sections/en/interlude.md';
  import Chapter11En from './sections/en/chapter-11.md';
  import Chapter12En from './sections/en/chapter-12.md';
  import Chapter13En from './sections/en/chapter-13.md';
  import Chapter14En from './sections/en/chapter-14.md';
  import Chapter15En from './sections/en/chapter-15.md';

  // Part IV: The Solutions
  import Chapter16En from './sections/en/chapter-16.md';
  import Chapter17En from './sections/en/chapter-17.md';
  import Chapter18En from './sections/en/chapter-18.md';
  import Chapter19En from './sections/en/chapter-19.md';

  // Part V: The Horizon
  import Chapter20En from './sections/en/chapter-20.md';
  import Chapter21En from './sections/en/chapter-21.md';
  import Chapter22En from './sections/en/chapter-22.md';
  
  // Back Matter - Appendices
  import AppendixAEn from './sections/en/appendix-a.md';
  import AppendixBEn from './sections/en/appendix-b.md';
  import AppendixCEn from './sections/en/appendix-c.md';
  import AppendixDEn from './sections/en/appendix-d.md';
  import AppendixEEn from './sections/en/appendix-e.md';
  import AppendixFEn from './sections/en/appendix-f.md';

  // --- 2. IMPORTS (Swedish) ---
  // Add these as you translate them!
  // Front Matter
  import DedicationSv from './sections/sv/dedication.md';
  import PrefaceSv from './sections/sv/preface.md';
  import PrimerSv from './sections/sv/primer.md';

  // Part I: The Crisis
  import Chapter1Sv from './sections/sv/chapter-1.md';
  // etc...

  // --- STATE ---
  let activeSection = $state('dedication');

  // --- DATA: Table of Contents Map ---
  const toc = [
    // Front Matter
    { 
      id: 'dedication', 
      titleKey: 'dedication',
      compEn: DedicationEn, 
      compSv: DedicationSv
    },
    { 
      id: 'preface', 
      titleKey: 'preface',
      compEn: PrefaceEn, 
      compSv: PrefaceSv
    },
    { 
      id: 'primer', 
      titleKey: 'primer',
      compEn: PrimerEn, 
      compSv: PrimerSv
    },
    
    // Part I: The Crisis
    { 
      partKey: 'part1',
      isPartHeader: true
    },
    { 
      id: 'chapter-1', 
      titleKey: 'chapter1',
      compEn: Chapter1En, 
      compSv: Chapter1Sv
    },
    { 
      id: 'chapter-2', 
      titleKey: 'chapter2',
      compEn: Chapter2En, 
      compSv: Chapter2En // Use EN until SV is ready
    },
    { 
      id: 'chapter-3', 
      titleKey: 'chapter3',
      compEn: Chapter3En, 
      compSv: Chapter3En
    },
    { 
      id: 'chapter-4', 
      titleKey: 'chapter4',
      compEn: Chapter4En, 
      compSv: Chapter4En
    },
    
    // Part II: The Diagnosis
    { 
      partKey: 'part2',
      isPartHeader: true
    },
    { 
      id: 'chapter-5', 
      titleKey: 'chapter5',
      compEn: Chapter5En, 
      compSv: Chapter5En
    },
    { 
      id: 'chapter-6', 
      titleKey: 'chapter6',
      compEn: Chapter6En, 
      compSv: Chapter6En
    },
    { 
      id: 'chapter-7', 
      titleKey: 'chapter7',
      compEn: Chapter7En, 
      compSv: Chapter7En
    },
    { 
      id: 'chapter-8', 
      titleKey: 'chapter8',
      compEn: Chapter8En, 
      compSv: Chapter8En
    },
    
    // Part III: The Architecture
    { 
      partKey: 'part3',
      isPartHeader: true
    },
    { 
      id: 'chapter-9', 
      titleKey: 'chapter9',
      compEn: Chapter9En, 
      compSv: Chapter9En
    },
    { 
      id: 'chapter-10', 
      titleKey: 'chapter10',
      compEn: Chapter10En, 
      compSv: Chapter10En
    },
    { 
      id: 'interlude', 
      titleKey: 'interlude',
      compEn: InterludeEn, 
      compSv: InterludeEn
    },
    { 
      id: 'chapter-11', 
      titleKey: 'chapter11',
      compEn: Chapter11En, 
      compSv: Chapter11En
    },
    { 
      id: 'chapter-12', 
      titleKey: 'chapter12',
      compEn: Chapter12En, 
      compSv: Chapter12En
    },
    { 
      id: 'chapter-13', 
      titleKey: 'chapter13',
      compEn: Chapter13En, 
      compSv: Chapter13En
    },
    { 
      id: 'chapter-14', 
      titleKey: 'chapter14',
      compEn: Chapter14En, 
      compSv: Chapter14En
    },
    { 
      id: 'chapter-15', 
      titleKey: 'chapter15',
      compEn: Chapter15En, 
      compSv: Chapter15En
    },
    
    // Part IV: The Solutions
    { 
      partKey: 'part4',
      isPartHeader: true
    },
    { 
      id: 'chapter-16', 
      titleKey: 'chapter16',
      compEn: Chapter16En, 
      compSv: Chapter16En
    },
    { 
      id: 'chapter-17', 
      titleKey: 'chapter17',
      compEn: Chapter17En, 
      compSv: Chapter17En
    },
    { 
      id: 'chapter-18', 
      titleKey: 'chapter18',
      compEn: Chapter18En, 
      compSv: Chapter18En
    },
    { 
      id: 'chapter-19', 
      titleKey: 'chapter19',
      compEn: Chapter19En, 
      compSv: Chapter19En
    },
    
    // Part V: The Horizon
    { 
      partKey: 'part5',
      isPartHeader: true
    },
    { 
      id: 'chapter-20', 
      titleKey: 'chapter20',
      compEn: Chapter20En, 
      compSv: Chapter20En
    },
    { 
      id: 'chapter-21', 
      titleKey: 'chapter21',
      compEn: Chapter21En, 
      compSv: Chapter21En
    },
    { 
      id: 'chapter-22', 
      titleKey: 'chapter22',
      compEn: Chapter22En, 
      compSv: Chapter22En
    },
    
    // Appendices
    { 
      partKey: 'appendices',
      isPartHeader: true
    },
    { 
      id: 'appendix-a', 
      titleKey: 'appendixA',
      compEn: AppendixAEn, 
      compSv: AppendixAEn
    },
    { 
      id: 'appendix-b', 
      titleKey: 'appendixB',
      compEn: AppendixBEn, 
      compSv: AppendixBEn
    },
    { 
      id: 'appendix-c', 
      titleKey: 'appendixC',
      compEn: AppendixCEn, 
      compSv: AppendixCEn
    },
    { 
      id: 'appendix-d', 
      titleKey: 'appendixD',
      compEn: AppendixDEn, 
      compSv: AppendixDEn
    },
    { 
      id: 'appendix-e', 
      titleKey: 'appendixE',
      compEn: AppendixEEn, 
      compSv: AppendixEEn
    },
    { 
      id: 'appendix-f', 
      titleKey: 'appendixF',
      compEn: AppendixFEn, 
      compSv: AppendixFEn
    }
  ];

  // --- DERIVED ---
  let activeItem = $derived(toc.find(s => s.id === activeSection));
  let ActiveComponent = $derived(activeItem ? ($language === 'sv' ? activeItem.compSv : activeItem.compEn) : DedicationEn);
  let activeIndex = $derived(toc.findIndex(s => s.id === activeSection));

  // --- ACTIONS ---
  function scrollToTop() {
    const content = document.getElementById('book-content');
    if (content) {
      content.scrollTop = 0;
      content.scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function nextChapter() {
    // Find next non-header item
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
    // Find previous non-header item
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

<style>
  /* Book Theme - "Warm Integration" */
  .book-theme {
    /* Revert to your site's native Amber (#D97706) */
    /* This represents the "Yellow" integration layer */
    --color-page-accent: var(--color-accent); 

    /* Use a brighter/lighter Amber for hover to simulate energy/heat */
    --color-link-hover: #F59E0B; 

    /* Keep Teal for Blockquotes (representing Green/Community context) */
    --color-quote-border: #3CAEA3; 
  }

  /* Custom styling for the book content */
  .book-prose :global(h1), 
  .book-prose :global(h2),
  .book-prose :global(h3) {
    color: var(--color-page-accent);
    scroll-margin-top: 2rem; /* Helps with anchor scrolling */
  }

  /* Blockquotes: Teal border, very subtle teal tint */
  .book-prose :global(blockquote) {
    border-left-color: var(--color-quote-border);
    background: rgba(60, 174, 163, 0.05); 
    font-style: italic;
    color: var(--color-page-text);
    opacity: 0.9;
  }

  /* Links: Amber, underlined */
  .book-prose :global(a) {
    color: var(--color-page-accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .book-prose :global(a:hover) {
    color: var(--color-link-hover);
  }

  /* Strong text: White/Bright (assuming dark mode base) */
  .book-prose :global(strong) {
    color: var(--color-page-text);
    font-weight: 700;
  }

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

<SEO
  title="{$t.integrationCrisisBook.meta.title} | Björn Kenneth Holmström"
  description={$t.integrationCrisisBook.meta.description}
  type="book"
/>

<div class="book-theme min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto border-r border-[var(--color-separator)]">
    <div class="mb-8">
      <a href="/books" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        ← {$t.integrationCrisisBook.ui.backToBooks}
      </a>
    </div>
    
    <button 
      onclick={() => showLightbox = true}
      class="mb-8 w-full aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg border border-[var(--color-separator)] hover:scale-105 transition-transform cursor-pointer group relative"
      aria-label="View cover in full size"
    >
      {#if !imageError}
        <img 
          src={book.cover} 
          alt="{book.title} cover"
          class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          onerror={() => imageError = true}
        />
      {:else}
        <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
          📚
        </div>
      {/if}
    </button>

    <div class="mb-8 space-y-3">
      <a href="/books/The_Integration_Crisis.pdf" download class="block w-full py-2 text-center text-sm font-bold text-[var(--color-page-bg)] bg-[var(--color-page-accent)] rounded hover:opacity-90 transition-opacity">
        {$t.integrationCrisisBook.ui.downloadPdfEn}
      </a>
      <!--
      {#if $language === 'sv'}
        <a href="/books/Integrationskrisen.pdf" download class="block w-full py-2 text-center text-sm font-bold border border-[var(--color-page-accent)] text-[var(--color-page-accent)] rounded hover:bg-[var(--color-card-bg)] transition-colors">
          {$t.integrationCrisisBook.ui.downloadPdfSv}
        </a>
      {/if} -->
      
      <a href="https://globalgovernanceframeworks.org/integration-scorecard" target="_blank" rel="noopener noreferrer" class="block w-full py-2 text-center text-sm font-bold border border-[var(--color-page-accent)] text-[var(--color-page-accent)] rounded hover:bg-[var(--color-card-bg)] transition-colors">
        {$t.integrationCrisisBook.ui.integrationScorecard}
      </a>

      <button disabled class="block w-full py-2 text-center text-sm font-bold border border-[var(--color-separator)] rounded opacity-50 cursor-not-allowed" title="2026">
        {$t.integrationCrisisBook.ui.buyPaperback}
      </button>
    </div>

    <nav class="space-y-1 pb-16">
      {#each toc as section}
        {#if section.isPartHeader}
          <div class="part-header">
            {$t.integrationCrisisBook.parts[section.partKey]}
          </div>
        {:else}
          <button
            onclick={() => { activeSection = section.id; scrollToTop(); }}
            class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors truncate
            {activeSection === section.id 
              ? 'bg-[var(--color-page-accent)] text-[var(--color-page-bg)] font-bold' 
              : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-80 hover:opacity-100'}"
          >
            {$t.integrationCrisisBook.toc[section.titleKey]}
          </button>
        {/if}
      {/each}
    </nav>
  </aside>

  <main class="flex-1 min-w-0 px-4 md:px-12 pt-16 pb-24" id="book-content">
    
    <div class="lg:hidden mb-8">
      <h1 class="text-3xl font-bold text-[var(--color-page-accent)]">{$t.integrationCrisisBook.meta.title}</h1>
      <p class="text-sm opacity-70 mt-2">{$t.integrationCrisisBook.meta.subtitle}</p>
    </div>

    <article class="book-prose prose prose-lg max-w-none"
       style="--tw-prose-body: var(--color-page-text); --tw-prose-bold: var(--color-page-text);">
      <svelte:component this={ActiveComponent} />
    </article>

    <div class="mt-16 pt-8 border-t border-[var(--color-separator)] flex justify-between items-center">
      <div>
        {#if activeIndex > 0 && !toc[activeIndex - 1]?.isPartHeader}
          <button onclick={prevChapter} class="text-sm font-medium hover:text-[var(--color-page-accent)] transition-colors">
            ← {$t.integrationCrisisBook.ui.previous}
          </button>
        {/if}
      </div>
      
      <div class="text-xs opacity-50 hidden sm:block">
        {$t.integrationCrisisBook.meta.title}
      </div>

      <div>
        {#if activeIndex < toc.length - 1}
          <button onclick={nextChapter} class="text-sm font-bold text-[var(--color-page-accent)] hover:text-[var(--color-link-hover)] transition-colors">
            {$t.integrationCrisisBook.ui.nextChapter} →
          </button>
        {/if}
      </div>
    </div>

  </main>
</div>

<!-- Lightbox for cover image -->
{#if showLightbox}
  <div 
    class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
    onclick={() => showLightbox = false}
    role="dialog"
    aria-modal="true"
    aria-label="Book cover full view"
  >
    <button
      onclick={() => showLightbox = false}
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
