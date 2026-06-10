<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT ENGLISH CHAPTERS ---
  import Chapter1En from '$lib/content/syntheses/the-clouded-mirror/chapter-1.md';
  import Chapter2En from '$lib/content/syntheses/the-clouded-mirror/chapter-2.md';
  import Chapter3En from '$lib/content/syntheses/the-clouded-mirror/chapter-3.md';
  import Chapter4En from '$lib/content/syntheses/the-clouded-mirror/chapter-4.md';
  import Chapter5En from '$lib/content/syntheses/the-clouded-mirror/chapter-5.md';
  import Chapter6En from '$lib/content/syntheses/the-clouded-mirror/chapter-6.md';
  import Chapter7En from '$lib/content/syntheses/the-clouded-mirror/chapter-7.md';
  import Chapter8En from '$lib/content/syntheses/the-clouded-mirror/chapter-8.md';
  import Chapter9En from '$lib/content/syntheses/the-clouded-mirror/chapter-9.md';
  import Chapter10En from '$lib/content/syntheses/the-clouded-mirror/chapter-10.md';
  import Chapter11En from '$lib/content/syntheses/the-clouded-mirror/chapter-11.md';
  import Chapter12En from '$lib/content/syntheses/the-clouded-mirror/chapter-12.md';
  import SummaryEn from '$lib/content/syntheses/the-clouded-mirror/summary.md';

  // --- 2. IMPORT SWEDISH CHAPTERS ---
  import Chapter1Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-1-sv.md';
  import Chapter2Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-2-sv.md';
  import Chapter3Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-3-sv.md';
  import Chapter4Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-4-sv.md';
  import Chapter5Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-5-sv.md';
  import Chapter6Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-6-sv.md';
  import Chapter7Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-7-sv.md';
  import Chapter8Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-8-sv.md';
  import Chapter9Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-9-sv.md';
  import Chapter10Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-10-sv.md';
  import Chapter11Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-11-sv.md';
  import Chapter12Sv from '$lib/content/syntheses/the-clouded-mirror/chapter-12-sv.md';
  import SummarySv from '$lib/content/syntheses/the-clouded-mirror/summary-sv.md';

  // --- 3. BILINGUAL CONTENT STRUCTURES ---
  const contentEn = [
    { id: 'chapter-1',  title: '1. The Woman in Rio',                     comp: Chapter1En },
    { id: 'chapter-2',  title: '2. The Hidden Structure of Governance',   comp: Chapter2En },
    { id: 'chapter-3',  title: '3. Four Ways the Channel Breaks',         comp: Chapter3En },
    { id: 'chapter-4',  title: '4. The Paradox of Competent Blindness',   comp: Chapter4En },
    { id: 'chapter-5',  title: '5. The Variety Gap',                      comp: Chapter5En },
    { id: 'chapter-6',  title: '6. Why Failures Compound',                comp: Chapter6En },
    { id: 'chapter-7',  title: '7. The Meta‑Governance Imperative',       comp: Chapter7En },
    { id: 'chapter-8',  title: '8. The Fragments Are Already Here',       comp: Chapter8En },
    { id: 'chapter-9',  title: '9. A Sensory Prosthesis: What AI Could Be For', comp: Chapter9En },
    { id: 'chapter-10', title: '10. The Shared Mirror',                   comp: Chapter10En },
    { id: 'chapter-11', title: '11. The Civilizational Bet',              comp: Chapter11En },
    { id: 'chapter-12', title: '12. The Invitation',                      comp: Chapter12En },
    { id: 'summary',    title: 'Summary',                                 comp: SummaryEn },
  ];

  const contentSv = [
    { id: 'chapter-1',  title: '1. Kvinnan i Rio',                        comp: Chapter1Sv },
    { id: 'chapter-2',  title: '2. Styrningens dolda struktur',           comp: Chapter2Sv },
    { id: 'chapter-3',  title: '3. Fyra sätt kanalen bryts',              comp: Chapter3Sv },
    { id: 'chapter-4',  title: '4. Paradoxen med kompetent blindhet',     comp: Chapter4Sv },
    { id: 'chapter-5',  title: '5. Varietetsgapet',                       comp: Chapter5Sv },
    { id: 'chapter-6',  title: '6. Varför misslyckanden förvärras',       comp: Chapter6Sv },
    { id: 'chapter-7',  title: '7. Meta‑styrningsimperativet',            comp: Chapter7Sv },
    { id: 'chapter-8',  title: '8. Fragmenten finns redan här',           comp: Chapter8Sv },
    { id: 'chapter-9',  title: '9. En sensorisk protes: Vad AI skulle kunna vara till för', comp: Chapter9Sv },
    { id: 'chapter-10', title: '10. Den gemensamma spegeln',              comp: Chapter10Sv },
    { id: 'chapter-11', title: '11. Det civilisatoriska vadet',           comp: Chapter11Sv },
    { id: 'chapter-12', title: '12. Inbjudan',                            comp: Chapter12Sv },
    { id: 'summary',    title: 'Sammanfattning',                          comp: SummarySv },
  ];

  let contentMap = $derived($language === 'sv' ? contentSv : contentEn);

  // --- 4. BILINGUAL METADATA ---
  const meta = {
    en: {
      title: 'The Clouded Mirror',
      subtitle: 'Why Our Institutions Can’t See the Crises They Create—and What We Can Build Instead',
      description: 'The full public‑facing synthesis of the Governance as Engineering research programme. A journey from a woman in Rio to the structural blindness that haunts every institution on earth.',
      pdf: '/syntheses/the-clouded-mirror.pdf',
      tag: 'Public Synthesis',
    },
    sv: {
      title: 'Den grumlade spegeln',
      subtitle: 'Varför våra institutioner inte kan se kriserna de skapar – och vad vi kan bygga istället',
      description: 'Den fullständiga publika syntesen av forskningsprogrammet Governance as Engineering. En resa från en kvinna i Rio till den strukturella blindhet som hemsöker varje institution på jorden.',
      pdf: '/syntheses/the-clouded-mirror-sv.pdf',
      tag: 'Publikt syntes',
    },
  };

  let currentMeta = $derived(meta[$language]);

  // --- 5. REACTIVE STATE ---
  let activeSection = $state('chapter-1');

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<SEO
  title={`${currentMeta.title} | The Clouded Mirror`}
  description={currentMeta.description}
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOP BAR -->
  <div class="lg:hidden px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6 flex items-center justify-between">
    <a
      href="/syntheses"
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {$language === 'sv' ? 'Tillbaka till läsguiden' : 'Back to Reader\'s Guide'}
    </a>

    <a
      href={currentMeta.pdf}
      download
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
      PDF
    </a>
  </div>

  <!-- LEFT SIDEBAR (desktop) -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8 flex items-center justify-between">
      <a
        href="/syntheses"
        class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {$language === 'sv' ? 'Tillbaka till läsguiden' : 'Back to Reader\'s Guide'}
      </a>

      <a
        href={currentMeta.pdf}
        download
        class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        PDF
      </a>
    </div>

    <!-- Chapter Navigation -->
    <nav class="space-y-1">
      {#each contentMap as section}
        <button
          onclick={() => scrollTo(section.id)}
          class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
          {activeSection === section.id
            ? 'bg-[var(--color-page-accent)] text-white font-medium shadow-sm'
            : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-70 hover:opacity-100'}"
        >
          {section.title}
        </button>
      {/each}
    </nav>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="flex-1 min-w-0 px-4 pt-16 pb-24">
    <!-- Top bar (mobile only) already handled above, but include breadcrumb for desktop too? Actually the sidebar has it, so no need. We'll just keep the header. -->

    <header class="mb-12 text-center lg:text-left">
      <div
        class="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
        style="background-color: var(--color-card-bg); color: var(--color-page-accent);"
      >
        {currentMeta.tag}
      </div>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
        {currentMeta.title}
      </h1>
      <p class="text-xl md:text-2xl opacity-70 font-light leading-relaxed" style="color: var(--color-page-text);">
        {currentMeta.subtitle}
      </p>
    </header>

    <!-- Chapter Sections -->
    <div class="space-y-16">
      {#each contentMap as section, i}
        <div id={section.id} class="scroll-mt-24">
          <article
            class="prose prose-lg max-w-none"
            style="
              --tw-prose-headings: var(--color-page-text);
              --tw-prose-body: var(--color-page-text);
              --tw-prose-bold: var(--color-page-text);
              --tw-prose-links: var(--color-page-accent);
              --tw-prose-quotes: var(--color-page-text);
              --tw-prose-code: var(--color-page-text);
              --tw-prose-pre-bg: var(--color-card-bg);
              --tw-prose-pre-code: #1a1a1a;
            "
          >
            <svelte:component this={section.comp} />
          </article>
        </div>
        {#if i < contentMap.length - 1}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share Buttons -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={currentMeta.title} />
    </div>
  </main>
</div>
