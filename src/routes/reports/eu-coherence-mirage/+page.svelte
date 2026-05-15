<!-- src/routes/reports/eu-coherence-mirage/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (English only)
  // ------------------------------------------
  import ExecutiveSummary from './sections/00-executive-summary.en.md';
  import CoherenceMirage from './sections/01-coherence-mirage.en.md';
  import Diagnosis from './sections/02-diagnosis.en.md';
  import CompoundDeficit from './sections/03-compound-deficit.en.md';
  import BuildingCoherence from './sections/04-building-coherence-capacity.en.md';
  import PoliticalImmune from './sections/05-political-immune-system.en.md';
  import TransitionArchitecture from './sections/06-transition-architecture.en.md';
  import CoherenceRegions from './sections/07-coherence-regions.en.md';
  import Coda from './sections/08-coda.en.md';
  import AppendixA from './sections/09-appendix-a.en.md';
  import AppendixB from './sections/09-appendix-b.en.md';
  import AppendixC from './sections/09-appendix-c.en.md';
  import AppendixD from './sections/09-appendix-d.en.md';
  import AppendixE from './sections/09-appendix-e.en.md';

  // ------------------------------------------
  // 2. Section map (English only)
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      comp: ExecutiveSummary,
    },
    {
      id: 'coherence-mirage',
      title: '1. The Coherence Mirage',
      comp: CoherenceMirage,
    },
    {
      id: 'diagnosis',
      title: '2. The Coherence Deficit: A New Diagnosis',
      comp: Diagnosis,
    },
    {
      id: 'compound-deficit',
      title: '3. The Compound Deficit: Why the EU\'s Problem Is Harder Than Any Member State\'s',
      comp: CompoundDeficit,
    },
    {
      id: 'building-coherence',
      title: '4. What Building Coherence Capacity Looks Like',
      comp: BuildingCoherence,
    },
    {
      id: 'political-immune',
      title: '5. The Political Immune System: Why Coherence Fails',
      comp: PoliticalImmune,
    },
    {
      id: 'transition-architecture',
      title: '6. Working with the Grain: Transition Architecture for the EU',
      comp: TransitionArchitecture,
    },
    {
      id: 'coherence-regions',
      title: '7. A Concrete First Step: Coherence Regions',
      comp: CoherenceRegions,
    },
    {
      id: 'coda',
      title: '8. Coda: From Agreeing to Arriving',
      comp: Coda,
    },
    {
      id: 'appendix-a',
      title: 'Appendix A: Value Systems & Policy Mindsets',
      comp: AppendixA,
    },
    {
      id: 'appendix-b',
      title: 'Appendix B: International Analogues & Precedents',
      comp: AppendixB,
    },
    {
      id: 'appendix-c',
      title: 'Appendix C: The Governance as Engineering Connection',
      comp: AppendixC,
    },
    {
      id: 'appendix-d',
      title: 'Appendix D: Anticipated Objections',
      comp: AppendixD,
    },
    {
      id: 'appendix-e',
      title: 'Appendix E: About the Author & Method',
      comp: AppendixE,
    },
  ];

  // ------------------------------------------
  // 3. Reactive state
  // ------------------------------------------
  let activeSection = $state('executive-summary');

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts (English only)
  // ------------------------------------------
  const meta = {
    title: 'The Coherence Mirage: Why the European Union Agrees on Everything and Aligns on Nothing',
    subtitle: 'A field guide to the compound deficit — and how the EU can learn to arrive together, in time',
    description:
      'The EU does not lack decisions — it lacks the capacity to arrive together, in time. This report diagnoses a compound coherence deficit produced by sovereignty fragmentation, the translation gap, asymmetric capacity, and time‑scale mismatch, and proposes Coherence Regions as the concrete first step.',
  };

  const ui = {
    tag: 'Country Report · European Union',
    allReports: '← All Reports',
    downloads: 'Downloads',
    share: 'Share',
    cite: 'How to cite',
    pdfLabelEn: 'PDF (English)',
  };
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-08"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- PDF download -->
    <a
      href="/reports/eu-coherence-mirage-en.pdf"
      download
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      {ui.pdfLabelEn}
    </a>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = 'Holmström, B. K. (2026). The Coherence Mirage: Why the European Union Agrees on Everything and Aligns on Nothing. Strategic Country Report.';
        navigator.clipboard.writeText(cite);
        alert('Citation copied!');
      }}
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      {ui.cite}
    </button>
  </div>

  <!-- SIDEBAR -->
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <!-- Back link -->
    <div class="mb-8">
      <a href="/reports" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {ui.allReports}
      </a>
    </div>

    <!-- Language indicator (English only) -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)]">
        <span class="opacity-50">🌐</span>
        <span class="font-bold">EN</span>
        <span class="opacity-50 text-xs ml-1">(only)</span>
      </div>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{ui.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/eu-coherence-mirage-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {ui.pdfLabelEn}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = 'Holmström, B. K. (2026). The Coherence Mirage: Why the European Union Agrees on Everything and Aligns on Nothing. Strategic Country Report.';
          navigator.clipboard.writeText(cite);
          alert('Citation copied!');
        }}
        class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        {ui.cite}
      </button>
    </div>

    <!-- Section Navigation -->
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
    <header class="mb-12 text-center lg:text-left">
      <div class="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
        style="background-color: var(--color-card-bg); color: var(--color-page-accent);">
        {ui.tag}
      </div>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
        {meta.title}
      </h1>
      <p class="text-xl md:text-2xl opacity-70 font-light leading-relaxed" style="color: var(--color-page-text);">
        {meta.subtitle}
      </p>
    </header>

    <!-- Content Sections -->
    <div class="space-y-16">
      {#each contentMap as section}
        <div id={section.id} class="scroll-mt-24">
          <article class="prose prose-lg max-w-none"
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
            <svelte:component this={section.comp} />
          </article>
        </div>
        {#if section.id !== 'appendix-e'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share (bottom) -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>
  </main>
</div>
