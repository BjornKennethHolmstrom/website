<!-- src/routes/reports/standard-setting-variety-gap/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN only)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';

  // 1. The Standard-Setting Variety Gap
  import StandardSettingVarietyGapEn from './sections/01-the-standard-setting-variety-gap.en.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';

  // 3. Building Requisite Standard-Setting Architecture
  import BuildingRequisiteArchitectureEn from './sections/03-building-requisite-standard-setting-architecture.en.md';

  // 4. The Political Immune System
  import PoliticalImmuneSystemEn from './sections/04-political-immune-system.en.md';

  // 5. A Concrete First Step
  import FirstStepEn from './sections/05-first-step.en.md';

  // 6. Coda
  import CodaEn from './sections/06-coda.en.md';

  // Appendices
  import AppendixAEn from './sections/07-appendix-a.en.md';
  import AppendixBEn from './sections/07-appendix-b.en.md';
  import AppendixCEn from './sections/07-appendix-c.en.md';
  import AppendixDEn from './sections/07-appendix-d.en.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      comp: ExecutiveSummaryEn,
    },
    {
      id: 'standard-setting-variety-gap',
      title: '1. The Standard‑Setting Variety Gap',
      comp: StandardSettingVarietyGapEn,
    },
    {
      id: 'structural-mechanisms',
      title: '2. Structural Mechanisms: How Standard‑Setting Bodies Become Blind to the Economies They Govern',
      comp: StructuralMechanismsEn,
    },
    {
      id: 'building-requisite-architecture',
      title: '3. What Building Requisite Standard‑Setting Architecture Would Look Like',
      comp: BuildingRequisiteArchitectureEn,
    },
    {
      id: 'immune-system',
      title: '4. The Political Immune System: Investor Primacy and the Pretence of Objectivity',
      comp: PoliticalImmuneSystemEn,
    },
    {
      id: 'first-step',
      title: '5. A Concrete First Step: The Multi‑Capital Materiality Audit and the Integrated Reporting Sandbox',
      comp: FirstStepEn,
    },
    {
      id: 'coda',
      title: '6. Coda: The Cost of Invisible Capital',
      comp: CodaEn,
    },
    {
      id: 'appendix-a',
      title: 'Appendix A: Value Systems & Policy Mindsets',
      comp: AppendixAEn,
    },
    {
      id: 'appendix-b',
      title: 'Appendix B: International Analogues & Precedents',
      comp: AppendixBEn,
    },
    {
      id: 'appendix-c',
      title: 'Appendix C: The Governance as Engineering Connection',
      comp: AppendixCEn,
    },
    {
      id: 'appendix-d',
      title: 'Appendix D: Anticipated Objections',
      comp: AppendixDEn,
    },
  ];

  // ------------------------------------------
  // 3. Active section tracking
  // ------------------------------------------
  let activeSection = $state('executive-summary');

  function sectionTitle(section: typeof contentMap[0]) {
    return section.title;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return section.comp;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts (English only)
  // ------------------------------------------
  const metadata = {
    title: "The Standard‑Setting Variety Gap: Why the Institutions That Define What Others Can See Are Themselves Structurally Blind",
    subtitle:
      'A cybernetic diagnosis of the protocol layer of global governance — and how to build observation architectures that perceive all forms of capital, not just the financial',
    description:
      'Standard‑setting bodies are the protocol layer of global governance, determining what the world can officially perceive about corporate reality — yet their observation architecture systematically excludes natural, human, and social capital. This report diagnoses a Standard‑Setting Variety Gap and proposes a Multi‑Capital Materiality Audit and Integrated Reporting Sandbox as the concrete first step.',
  };

  const ui = {
    tag: 'Organizational Report · Standard‑Setting Bodies',
    allReports: '← All Reports',
    downloads: 'Downloads',
    share: 'Share',
    cite: 'How to cite',
    pdfLabelEn: 'PDF (English)',
  };
</script>

<SEO
  title="{metadata.title} | Organizational Report"
  description={metadata.description}
  type="article"
  publishedTime="2026-05"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- PDF download -->
    <a
      href="/reports/standard-setting-variety-gap-en.pdf"
      download
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      {ui.pdfLabelEn}
    </a>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = 'Holmström, B. K. (2026). The Standard‑Setting Variety Gap: Why the Institutions That Define What Others Can See Are Themselves Structurally Blind. Organizational Report.';
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

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{ui.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/standard-setting-variety-gap-en.pdf"
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
          const cite = 'Holmström, B. K. (2026). The Standard‑Setting Variety Gap: Why the Institutions That Define What Others Can See Are Themselves Structurally Blind. Organizational Report.';
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
          {sectionTitle(section)}
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
        {metadata.title}
      </h1>
      <p class="text-xl md:text-2xl opacity-70 font-light leading-relaxed" style="color: var(--color-page-text);">
        {metadata.subtitle}
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
            <svelte:component this={sectionComp(section)} />
          </article>
        </div>
        {#if section.id !== 'appendix-d'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share (bottom) -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={metadata.title} />
    </div>
  </main>
</div>
