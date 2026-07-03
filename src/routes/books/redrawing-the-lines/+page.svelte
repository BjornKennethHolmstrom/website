<script lang="ts">
  import { t, language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // ── English raw imports ───────────────────────────────────────
  import FrontmatterEn from './sections/frontmatter.md?raw';
  import Chapter01En from './sections/chapter-01.md?raw';
  import Chapter02En from './sections/chapter-02.md?raw';
  import Chapter03En from './sections/chapter-03.md?raw';
  import Chapter04En from './sections/chapter-04.md?raw';
  import Chapter05En from './sections/chapter-05.md?raw';
  import Chapter06En from './sections/chapter-06.md?raw';
  import Chapter07En from './sections/chapter-07.md?raw';
  import Chapter08En from './sections/chapter-08.md?raw';
  import Chapter09En from './sections/chapter-09.md?raw';
  import Chapter10En from './sections/chapter-10.md?raw';
  import Chapter11En from './sections/chapter-11.md?raw';
  import AppendixAEn from './sections/appendix-a.md?raw';
  import AppendixBEn from './sections/appendix-b.md?raw';
  import AppendixCEn from './sections/appendix-c.md?raw';

  // ── Swedish raw imports ───────────────────────────────────────
  import FrontmatterSv from './sections/frontmatter.sv.md?raw';
  import Chapter01Sv from './sections/chapter-01.sv.md?raw';
  import Chapter02Sv from './sections/chapter-02.sv.md?raw';
  import Chapter03Sv from './sections/chapter-03.sv.md?raw';
  import Chapter04Sv from './sections/chapter-04.sv.md?raw';
  import Chapter05Sv from './sections/chapter-05.sv.md?raw';
  import Chapter06Sv from './sections/chapter-06.sv.md?raw';
  import Chapter07Sv from './sections/chapter-07.sv.md?raw';
  import Chapter08Sv from './sections/chapter-08.sv.md?raw';
  import Chapter09Sv from './sections/chapter-09.sv.md?raw';
  import Chapter10Sv from './sections/chapter-10.sv.md?raw';
  import Chapter11Sv from './sections/chapter-11.sv.md?raw';
  import AppendixASv from './sections/appendix-a.sv.md?raw';
  import AppendixBSv from './sections/appendix-b.sv.md?raw';
  import AppendixCSv from './sections/appendix-c.sv.md?raw';

  // ── Raw content map ───────────────────────────────────────────
  const rawContent: Record<string, Record<string, string>> = {
    en: {
      frontmatter: FrontmatterEn,
      'chapter-01': Chapter01En,
      'chapter-02': Chapter02En,
      'chapter-03': Chapter03En,
      'chapter-04': Chapter04En,
      'chapter-05': Chapter05En,
      'chapter-06': Chapter06En,
      'chapter-07': Chapter07En,
      'chapter-08': Chapter08En,
      'chapter-09': Chapter09En,
      'chapter-10': Chapter10En,
      'chapter-11': Chapter11En,
      'appendix-a': AppendixAEn,
      'appendix-b': AppendixBEn,
      'appendix-c': AppendixCEn,
    },
    sv: {
      frontmatter: FrontmatterSv,
      'chapter-01': Chapter01Sv,
      'chapter-02': Chapter02Sv,
      'chapter-03': Chapter03Sv,
      'chapter-04': Chapter04Sv,
      'chapter-05': Chapter05Sv,
      'chapter-06': Chapter06Sv,
      'chapter-07': Chapter07Sv,
      'chapter-08': Chapter08Sv,
      'chapter-09': Chapter09Sv,
      'chapter-10': Chapter10Sv,
      'chapter-11': Chapter11Sv,
      'appendix-a': AppendixASv,
      'appendix-b': AppendixBSv,
      'appendix-c': AppendixCSv,
    },
  };

  // ── TOC definition (part headers reference $t.redrawingTheLinesBook.parts) ─
  const toc = [
    { partKey: 'front', isPartHeader: true },
    { id: 'frontmatter', titleKey: 'howToRead' },
    { partKey: 'part1', isPartHeader: true },
    { id: 'chapter-01', titleKey: 'chapter1' },
    { id: 'chapter-02', titleKey: 'chapter2' },
    { partKey: 'part2', isPartHeader: true },
    { id: 'chapter-03', titleKey: 'chapter3' },
    { id: 'chapter-04', titleKey: 'chapter4' },
    { id: 'chapter-05', titleKey: 'chapter5' },
    { id: 'chapter-06', titleKey: 'chapter6' },
    { id: 'chapter-07', titleKey: 'chapter7' },
    { id: 'chapter-08', titleKey: 'chapter8' },
    { partKey: 'part3', isPartHeader: true },
    { id: 'chapter-09', titleKey: 'chapter9' },
    { id: 'chapter-10', titleKey: 'chapter10' },
    { id: 'chapter-11', titleKey: 'chapter11' },
    { partKey: 'back', isPartHeader: true },
    { id: 'appendix-a', titleKey: 'appendixA' },
    { id: 'appendix-b', titleKey: 'appendixB' },
    { id: 'appendix-c', titleKey: 'appendixC' },
  ];

  // ── Cover & PDF paths ─────────────────────────────────────────
  const coverEn = '/resources/book-cover-redrawing-the-lines.svg';
  const coverSv = '/resources/book-cover-redrawing-the-lines-sv.svg';
  const pdfEn = '/books/Redrawing_the_Lines.pdf';
  const pdfSv = '/books/Redrawing_the_Lines_sv.pdf';

  let showLightbox = $state(false);
  let imageError = $state(false);

  let activeSection = $state('frontmatter');
  let activeIndex = $derived(toc.findIndex(s => s.id === activeSection));
  let currentLang = $derived($language);
  let currentCover = $derived(currentLang === 'sv' ? coverSv : coverEn);

  // ── Render markdown with KaTeX ──────────────────────────────
  function renderSectionMarkdown(rawMd: string): string {
    let content = rawMd.replace(/^---[\s\S]*?---\n/, '');

    const blocks: string[] = [];

    // Display math
    content = content.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
      const tex = (tex1 ?? tex2 ?? '').trim();
      try {
        const rendered = katex.renderToString(tex, { displayMode: true, throwOnError: false });
        blocks.push(rendered);
        return `%%MATH${blocks.length - 1}%%`;
      } catch (e) {
        console.warn('KaTeX display error:', e);
        blocks.push(match);
        return `%%MATH${blocks.length - 1}%%`;
      }
    });

    // Inline math
    content = content.replace(/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g, (match, tex1, tex2) => {
      const tex = (tex1 ?? tex2 ?? '').trim();
      try {
        const rendered = katex.renderToString(tex, { displayMode: false, throwOnError: false });
        blocks.push(rendered);
        return `%%MATH${blocks.length - 1}%%`;
      } catch (e) {
        console.warn('KaTeX inline error:', e);
        blocks.push(match);
        return `%%MATH${blocks.length - 1}%%`;
      }
    });

    let html = marked.parse(content, { breaks: false, gfm: true }) as string;
    html = html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');
    return html;
  }

  let sectionHtml = $derived(() => {
    const lang = currentLang as 'en' | 'sv';
    const raw = rawContent[lang]?.[activeSection] ?? '';
    return renderSectionMarkdown(raw);
  });

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
  title="{$t.redrawingTheLinesBook.meta.title} | Björn Kenneth Holmström"
  description={$t.redrawingTheLinesBook.meta.description}
  type="book"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOOLBAR (below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <a
      href={pdfEn}
      download
      class="flex items-center gap-1 text-xs font-bold text-[var(--color-page-bg)] bg-[var(--color-page-accent)] px-2.5 py-1.5 rounded hover:opacity-90 transition-opacity"
    >
      📥 {$t.redrawingTheLinesBook.ui.downloadPdfEn}
    </a>
    <a
      href={pdfSv}
      download
      class="flex items-center gap-1 text-xs font-bold border border-[var(--color-page-accent)] text-[var(--color-page-accent)] px-2.5 py-1.5 rounded hover:bg-[var(--color-card-bg)] transition-colors"
    >
      📥 {$t.redrawingTheLinesBook.ui.downloadPdfSv}
    </a>
  </div>

  <!-- Sidebar -->
  <aside
    class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto border-r border-[var(--color-separator)]"
  >
    <div class="mb-8">
      <a
        href="/books"
        class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
      >
        {$t.redrawingTheLinesBook.ui.backToBooks}
      </a>
    </div>

    <button
      onclick={() => (showLightbox = true)}
      class="mb-8 w-full aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg border border-[var(--color-separator)] hover:scale-105 transition-transform cursor-pointer group relative"
      aria-label="View cover in full size"
    >
      {#if !imageError}
        <img
          src={currentCover}
          alt="Book cover"
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
        href={pdfEn}
        download
        class="block w-full py-2 text-center text-sm font-bold text-[var(--color-page-bg)] bg-[var(--color-page-accent)] rounded hover:opacity-90 transition-opacity"
      >
        {$t.redrawingTheLinesBook.ui.downloadPdfEn}
      </a>
      <a
        href={pdfSv}
        download
        class="block w-full py-2 text-center text-sm font-bold border border-[var(--color-page-accent)] text-[var(--color-page-accent)] rounded hover:bg-[var(--color-card-bg)] transition-colors"
      >
        {$t.redrawingTheLinesBook.ui.downloadPdfSv}
      </a>
    </div>

    <nav class="space-y-1 pb-16">
      {#each toc as section}
        {#if section.isPartHeader}
          <div class="part-header">
            {$t.redrawingTheLinesBook.parts[section.partKey]}
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
            {$t.redrawingTheLinesBook.toc[section.titleKey]}
          </button>
        {/if}
      {/each}
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 min-w-0 px-4 md:px-12 pt-16 pb-24" id="book-content">
    <div class="lg:hidden mb-8">
      <h1 class="text-3xl font-bold text-[var(--color-page-accent)]">
        {$t.redrawingTheLinesBook.meta.title}
      </h1>
      {#if $t.redrawingTheLinesBook.meta.subtitle}
        <p class="text-sm opacity-70 mt-2">{$t.redrawingTheLinesBook.meta.subtitle}</p>
      {/if}
    </div>

    <article
      class="prose prose-lg max-w-none"
      style="
        --tw-prose-headings: var(--color-page-text);
        --tw-prose-body: var(--color-page-text);
        --tw-prose-bold: var(--color-page-text);
        --tw-prose-links: var(--color-page-accent);
        --tw-prose-quotes: var(--color-page-text);
        --tw-prose-code: var(--color-page-text);
      "
    >
      {@html sectionHtml()}
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
            ← {$t.redrawingTheLinesBook.ui.previous}
          </button>
        {/if}
      </div>

      <div class="text-xs opacity-50 hidden sm:block">
        {$t.redrawingTheLinesBook.meta.title}
      </div>

      <div>
        {#if activeIndex < toc.length - 1}
          <button
            onclick={nextChapter}
            class="text-sm font-bold text-[var(--color-page-accent)] hover:opacity-80 transition-colors"
          >
            {$t.redrawingTheLinesBook.ui.nextChapter}
          </button>
        {/if}
      </div>
    </div>
  </main>
</div>

<!-- Lightbox for cover -->
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
        src={currentCover}
        alt="Book cover - full view"
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
