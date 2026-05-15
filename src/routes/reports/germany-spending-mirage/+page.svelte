<!-- src/routes/reports/germany-spending-mirage/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN + DE)
  // ------------------------------------------
  import ExecutiveSummaryEn from './sections/executive-summary.en.md';
  import ExecutiveSummaryDe from './sections/executive-summary.de.md';

  import InvisibleDeficitEn from './sections/01-invisible-deficit.en.md';
  import InvisibleDeficitDe from './sections/01-invisible-deficit.de.md';

  import SpendingMirageEn from './sections/02-spending-mirage.en.md';
  import SpendingMirageDe from './sections/02-spending-mirage.de.md';

  import TwinDeficitEn from './sections/03-twin-deficit.en.md';
  import TwinDeficitDe from './sections/03-twin-deficit.de.md';

  import CapacityBuildingEn from './sections/04-capacity-building.en.md';
  import CapacityBuildingDe from './sections/04-capacity-building.de.md';

  import PoliticalImmuneEn from './sections/05-political-immune.en.md';
  import PoliticalImmuneDe from './sections/05-political-immune.de.md';

  import TransitionEn from './sections/06-transition.en.md';
  import TransitionDe from './sections/06-transition.de.md';

  import PilotEn from './sections/07-pilot.en.md';
  import PilotDe from './sections/07-pilot.de.md';

  import CodaEn from './sections/08-coda.en.md';
  import CodaDe from './sections/08-coda.de.md';

  import AppendixAEn from './sections/09-appendix-a.en.md';
  import AppendixADe from './sections/09-appendix-a.de.md';

  import AppendixBEn from './sections/09-appendix-b.en.md';
  import AppendixBDe from './sections/09-appendix-b.de.md';

  import AppendixCEn from './sections/09-appendix-c.en.md';
  import AppendixCDe from './sections/09-appendix-c.de.md';

  import AppendixDEn from './sections/09-appendix-d.en.md';
  import AppendixDDe from './sections/09-appendix-d.de.md';

  import AppendixEEn from './sections/09-appendix-e.en.md';
  import AppendixEDe from './sections/09-appendix-e.de.md';

  // ------------------------------------------
  // 2. Section map (one definition, two languages)
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleDe: 'Zusammenfassung',
      compEn: ExecutiveSummaryEn,
      compDe: ExecutiveSummaryDe,
    },
    {
      id: 'invisible-deficit',
      titleEn: '1. The Invisible Deficit',
      titleDe: '1. Das unsichtbare Defizit',
      compEn: InvisibleDeficitEn,
      compDe: InvisibleDeficitDe,
    },
    {
      id: 'spending-mirage',
      titleEn: '2. The Spending Mirage',
      titleDe: '2. Die Ausgabenmirage',
      compEn: SpendingMirageEn,
      compDe: SpendingMirageDe,
    },
    {
      id: 'twin-deficit',
      titleEn: '3. The Twin Deficit: A New Diagnosis',
      titleDe: '3. Das doppelte Defizit: Eine neue Diagnose',
      compEn: TwinDeficitEn,
      compDe: TwinDeficitDe,
    },
    {
      id: 'capacity-building',
      titleEn: '4. What Building Capacity Actually Looks Like',
      titleDe: '4. Wie Kapazitätsaufbau tatsächlich aussieht',
      compEn: CapacityBuildingEn,
      compDe: CapacityBuildingDe,
    },
    {
      id: 'political-immune',
      titleEn: '5. The Political Immune System',
      titleDe: '5. Das politische Immunsystem',
      compEn: PoliticalImmuneEn,
      compDe: PoliticalImmuneDe,
    },
    {
      id: 'transition',
      titleEn: '6. Working with the Grain: Transition Architecture',
      titleDe: '6. Mit dem System arbeiten: Übergangsarchitektur',
      compEn: TransitionEn,
      compDe: TransitionDe,
    },
    {
      id: 'pilot',
      titleEn: '7. A Concrete First Step: The Adaptive Governance Pilot Regions',
      titleDe: '7. Ein konkreter erster Schritt: Die adaptiven Governance-Pilotregionen',
      compEn: PilotEn,
      compDe: PilotDe,
    },
    {
      id: 'coda',
      titleEn: '8. Coda: From Spending to Sensing',
      titleDe: '8. Koda: Vom Ausgeben zum Wahrnehmen',
      compEn: CodaEn,
      compDe: CodaDe,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleDe: 'Anhang A: Wertesysteme & Politiklogiken',
      compEn: AppendixAEn,
      compDe: AppendixADe,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titleDe: 'Anhang B: Internationale Analogien & Präzedenzfälle',
      compEn: AppendixBEn,
      compDe: AppendixBDe,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: Bibliography & Source Notes',
      titleDe: 'Anhang C: Bibliographie & Quellenangaben',
      compEn: AppendixCEn,
      compDe: AppendixCDe,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Frequently Anticipated Questions',
      titleDe: 'Anhang D: Häufig erwartete Fragen',
      compEn: AppendixDEn,
      compDe: AppendixDDe,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author',
      titleDe: 'Anhang E: Über den Autor',
      compEn: AppendixEEn,
      compDe: AppendixEDe,
    },
  ];

  // ------------------------------------------
  // 3. Local report language (independent of site)
  // ------------------------------------------
  let reportLang: 'en' | 'de' = $state('en');
  let activeSection = $state('executive-summary');

  function toggleReportLang() {
    reportLang = reportLang === 'en' ? 'de' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'de' ? section.titleDe : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'de' ? section.compDe : section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts (only English / German)
  // ------------------------------------------
  const metadata = {
    en: {
      title: 'The Spending Mirage',
      subtitle: 'Why Germany Has Money but No Capacity to Decide',
      description: '...',
    },
    de: {
      title: 'Die Ausgabenmirage',
      subtitle: 'Warum Deutschland Geld hat, aber nicht entscheiden kann',
      description: '...',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Germany',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabel: 'PDF (English)',
      pdfLabelDe: 'PDF (Deutsch)',
    },
    de: {
      tag: 'Länderbericht · Deutschland',
      allReports: '← Alle Berichte',
      downloads: 'Downloads',
      share: 'Teilen',
      cite: 'Zitieren',
      pdfLabel: 'PDF (English)',
      pdfLabelDe: 'PDF (Deutsch)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-05"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- Language toggle -->
    <button
      onclick={toggleReportLang}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'de'} class:opacity-50={reportLang !== 'de'}>DE</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/germany-spending-mirage-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        EN PDF
      </a>
      <a
        href="/reports/germany-spending-mirage-de.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        DE PDF
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'de'
          ? 'Holmström, B. K. (2026). Die Ausgabenmirage: Warum Deutschland Geld hat, aber nicht entscheiden kann. Strategischer Länderbericht.'
          : 'Holmström, B. K. (2026). The Spending Mirage: Why Germany Has Money but No Capacity to Decide. Strategic Country Report.';
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'de' ? 'Zitat kopiert!' : 'Citation copied!');
      }}
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      {t.cite}
    </button>
  </div>

  <!-- SIDEBAR -->
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <!-- Back link -->
    <div class="mb-8">
      <a href="/reports" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle -->
    <div class="mb-6">
      <button
        onclick={toggleReportLang}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'de'} class:opacity-50={reportLang !== 'de'}>DE</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/germany-spending-mirage-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabel}
        </a>
        <a
          href="/reports/germany-spending-mirage-de.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelDe}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'de'
            ? 'Holmström, B. K. (2026). Die Ausgabenmirage: Warum Deutschland Geld hat, aber nicht entscheiden kann. Strategischer Länderbericht.'
            : 'Holmström, B. K. (2026). The Spending Mirage: Why Germany Has Money but No Capacity to Decide. Strategic Country Report.';
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'de' ? 'Zitat kopiert!' : 'Citation copied!');
        }}
        class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        {t.cite}
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
        {t.tag}
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
            <svelte:component this={sectionComp(section)} />
          </article>
        </div>
        {#if section.id !== 'appendix-c'}
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
