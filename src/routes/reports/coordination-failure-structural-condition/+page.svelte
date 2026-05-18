<!-- src/routes/reports/coordination-failure-structural-condition/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN only)
  // ------------------------------------------

  // Part I: The Core Condition
  import VarietyGapEn from './sections/01-variety-gap.en.md';
  import ResolutionLockInEn from './sections/02-resolution-lock-in.en.md';
  import ImmuneSystemEn from './sections/03-immune-system.en.md';

  // Between Parts I and II: Canonical Formula & Diagram
  import BetweenPartsEn from './sections/04-in-between-parts.en.md';

  // Part II: The Implications
  import HistoricalArgumentEn from './sections/05-historical-argument.en.md';
  import CivilisationalThresholdEn from './sections/06-civilisational-threshold-claim.en.md';

  // Part III: Design and Vision
  import CentralQuestionEn from './sections/07-central-question.en.md';
  import FromDiagnosisToDesignEn from './sections/08-from-diagnosis-to-design.en.md';
  import WhatTheSeriesDemonstratesEn from './sections/09-what-the-series-itself-demonstrates.en.md';
  import InvitationEn from './sections/10-invitation.en.md';

  // Appendices
  import AppendixAEn from './sections/11-appendix-a.en.md';
  import AppendixBEn from './sections/11-appendix-b.en.md';
  import AppendixCEn from './sections/11-appendix-c.en.md';
  import AppendixDEn from './sections/11-appendix-d.en.md';
  import AppendixEEn from './sections/11-appendix-e.en.md';
  import AppendixFEn from './sections/11-appendix-f.en.md';
  import AppendixGEn from './sections/11-appendix-g.en.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    // Part I
    {
      id: 'variety-gap',
      title: '1. The Variety Gap: The Structural Mismatch',
      comp: VarietyGapEn,
    },
    {
      id: 'resolution-lock-in',
      title: '2. Resolution Lock‑In: The Dynamic Trap',
      comp: ResolutionLockInEn,
    },
    {
      id: 'immune-system',
      title: '3. The Immune System: The Adaptive Stabiliser',
      comp: ImmuneSystemEn,
    },
    // Between Parts
    {
      id: 'canonical-formula-diagram',
      title: 'The Canonical Formula and Diagram',
      comp: BetweenPartsEn,
    },
    // Part II
    {
      id: 'historical-argument',
      title: '4. The Historical Argument: Why the Variety Gap Has Widened',
      comp: HistoricalArgumentEn,
    },
    {
      id: 'civilisational-threshold',
      title: '5. The Civilisational Threshold Claim',
      comp: CivilisationalThresholdEn,
    },
    // Part III
    {
      id: 'central-question',
      title: '6. The Central Question: Adaptive Coherence',
      comp: CentralQuestionEn,
    },
    {
      id: 'from-diagnosis-to-design',
      title: '7. From Diagnosis to Design',
      comp: FromDiagnosisToDesignEn,
    },
    {
      id: 'what-the-series-demonstrates',
      title: '8. What the Series Itself Demonstrates About the Framework’s Claims',
      comp: WhatTheSeriesDemonstratesEn,
    },
    {
      id: 'invitation',
      title: '9. The Invitation',
      comp: InvitationEn,
    },
    // Appendices
    {
      id: 'appendix-a',
      title: 'Appendix A: The Primitive Catalogue',
      comp: AppendixAEn,
    },
    {
      id: 'appendix-b',
      title: 'Appendix B: The Immune System Taxonomy',
      comp: AppendixBEn,
    },
    {
      id: 'appendix-c',
      title: 'Appendix C: The Resolution Lock‑In Table',
      comp: AppendixCEn,
    },
    {
      id: 'appendix-d',
      title: 'Appendix D: The Series Coherence Table',
      comp: AppendixDEn,
    },
    {
      id: 'appendix-e',
      title: 'Appendix E: The Governance as Engineering Connection',
      comp: AppendixEEn,
    },
    {
      id: 'appendix-f',
      title: 'Appendix F: Methodology and Limits',
      comp: AppendixFEn,
    },
    {
      id: 'appendix-g',
      title: 'Appendix G: Existence Proofs of Adaptive Coherence',
      comp: AppendixGEn,
    },
  ];

  // ------------------------------------------
  // 3. Active section tracking
  // ------------------------------------------
  let activeSection = $state('variety-gap');

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
    title: "Coordination Failure as Structural Condition: Why Competent Institutions Become Blind to Their Own Fragility",
    subtitle:
      'A unified diagnostic framework from twenty‑one governance analyses across nation‑states, organisations, and institutional domains',
    description:
      'The capstone synthesis of a series of twenty‑one reports. It identifies eight structural primitives, the Variety Gap, Resolution Lock‑In, and the immune system as the cross‑domain invariants of coordination failure — and provides design principles for building institutions that can perceive what they currently exclude.',
  };

  const ui = {
    tag: 'Capstone Report · Synthesis',
    allReports: '← All Reports',
    downloads: 'Downloads',
    share: 'Share',
    cite: 'How to cite',
    pdfLabelEn: 'PDF (English)',
  };
</script>

<SEO
  title="{metadata.title} | Capstone Report"
  description={metadata.description}
  type="article"
  publishedTime="2026-05"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- PDF download -->
    <a
      href="/reports/coordination-failure-structural-condition-en.pdf"
      download
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      {ui.pdfLabelEn}
    </a>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = 'Holmström, B. K. (2026). Coordination Failure as Structural Condition: Why Competent Institutions Become Blind to Their Own Fragility. Capstone Report.';
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
          href="/reports/coordination-failure-structural-condition-en.pdf"
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
          const cite = 'Holmström, B. K. (2026). Coordination Failure as Structural Condition: Why Competent Institutions Become Blind to Their Own Fragility. Capstone Report.';
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
        {#if section.id !== 'appendix-g'}
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
