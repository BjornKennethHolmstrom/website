<!-- src/routes/reports/sweden-competence-trap/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN + SV)
  //    (SV files will be added when translations are ready; the imports are prepared)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummarySv from './sections/00-executive-summary.sv.md';

  // Main sections
  import CompetenceTrapEn from './sections/01-competence-trap.en.md';
  import CompetenceTrapSv from './sections/01-competence-trap.sv.md';

  import FeedbackDeficitEn from './sections/02-feedback-deficit.en.md';
  import FeedbackDeficitSv from './sections/02-feedback-deficit.sv.md';

  import FeedbackInfrastructureEn from './sections/03-feedback-infrastructure.en.md';
  import FeedbackInfrastructureSv from './sections/03-feedback-infrastructure.sv.md';

  import PoliticalImmuneEn from './sections/04-political-immune-system.en.md';
  import PoliticalImmuneSv from './sections/04-political-immune-system.sv.md';

  import TransitionArchitectureEn from './sections/05-transition-architecture.en.md';
  import TransitionArchitectureSv from './sections/05-transition-architecture.sv.md';

  import FramtidskommunerEn from './sections/06-framtidskommuner.en.md';
  import FramtidskommunerSv from './sections/06-framtidskommuner.sv.md';

  import CodaEn from './sections/07-coda.en.md';
  import CodaSv from './sections/07-coda.sv.md';

  // Appendices
  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixASv from './sections/08-appendix-a.sv.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBSv from './sections/08-appendix-b.sv.md';

  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCSv from './sections/08-appendix-c.sv.md';

  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDSv from './sections/08-appendix-d.sv.md';

  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixESv from './sections/08-appendix-e.sv.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleSv: 'Sammanfattning',
      compEn: ExecutiveSummaryEn,
      compSv: ExecutiveSummarySv,
    },
    {
      id: 'competence-trap',
      titleEn: '1. The Competence Trap',
      titleSv: '1. Kompetensfällan',
      compEn: CompetenceTrapEn,
      compSv: CompetenceTrapSv,
    },
    {
      id: 'feedback-deficit',
      titleEn: '2. The Feedback Deficit: A New Diagnosis',
      titleSv: '2. Återkopplingsunderskottet: En ny diagnos',
      compEn: FeedbackDeficitEn,
      compSv: FeedbackDeficitSv,
    },
    {
      id: 'feedback-infrastructure',
      titleEn: '3. What Building Feedback Infrastructure Looks Like',
      titleSv: '3. Hur byggandet av återkopplingsinfrastruktur ser ut',
      compEn: FeedbackInfrastructureEn,
      compSv: FeedbackInfrastructureSv,
    },
    {
      id: 'political-immune',
      titleEn: '4. The Political Immune System: Why Feedback Fails',
      titleSv: '4. Det politiska immunsystemet: Varför återkopplingen misslyckas',
      compEn: PoliticalImmuneEn,
      compSv: PoliticalImmuneSv,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for Sweden',
      titleSv: '5. Att arbeta med kornet: Övergångsarkitektur för Sverige',
      compEn: TransitionArchitectureEn,
      compSv: TransitionArchitectureSv,
    },
    {
      id: 'framtidskommuner',
      titleEn: '6. A Concrete First Step: Framtidskommuner',
      titleSv: '6. Ett konkret första steg: Framtidskommuner',
      compEn: FramtidskommunerEn,
      compSv: FramtidskommunerSv,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: From Competence to Adaptability',
      titleSv: '7. Koda: Från kompetens till anpassningsförmåga',
      compEn: CodaEn,
      compSv: CodaSv,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleSv: 'Bilaga A: Värderingssystem & policymentaliteter',
      compEn: AppendixAEn,
      compSv: AppendixASv,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues',
      titleSv: 'Bilaga B: Internationella analogier',
      compEn: AppendixBEn,
      compSv: AppendixBSv,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: Governance as Engineering Connection',
      titleSv: 'Bilaga C: Kopplingen till Governance as Engineering',
      compEn: AppendixCEn,
      compSv: AppendixCSv,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleSv: 'Bilaga D: Förväntade invändningar',
      compEn: AppendixDEn,
      compSv: AppendixDSv,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleSv: 'Bilaga E: Om författaren & metod',
      compEn: AppendixEEn,
      compSv: AppendixESv,
    },
  ];

  // ------------------------------------------
  // 3. Local report language (EN / SV, independent of site UI)
  // ------------------------------------------
  let reportLang: 'en' | 'sv' = $state('en');
  let activeSection = $state('executive-summary');

  function toggleReportLang() {
    reportLang = reportLang === 'en' ? 'sv' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'sv' ? section.titleSv : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'sv' ? section.compSv : section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts
  // ------------------------------------------
  const metadata = {
    en: {
      title: 'The Competence Trap',
      subtitle: 'Why Sweden\'s High-Trust Model Is Quietly Deprecating',
      description:
        'Sweden does not lack competence — it lacks the capacity to sense, share, and act on disturbing signals before they compound. A field guide to the feedback deficit and how to rebuild Sweden\'s capacity to adapt.',
    },
    sv: {
      title: 'Kompetensfällan',
      subtitle: 'Varför Sveriges högtillitsmodell tyst deprekeras',
      description:
        'Sverige saknar inte kompetens — det saknar kapacitet att upptäcka, dela och agera på oroande signaler innan de förvärras. En guide till återkopplingsunderskottet och hur Sveriges anpassningsförmåga kan återuppbyggas.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Sweden',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelSv: 'PDF (Svenska)',
    },
    sv: {
      tag: 'Landrapport · Sverige',
      allReports: '← Alla rapporter',
      downloads: 'Nedladdningar',
      share: 'Dela',
      cite: 'Citera',
      pdfLabelEn: 'PDF (English)',
      pdfLabelSv: 'PDF (Svenska)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-07"
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
      <span class:font-bold={reportLang === 'sv'} class:opacity-50={reportLang !== 'sv'}>SV</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/sweden-competence-trap-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        EN PDF
      </a>
      <a
        href="/reports/sweden-competence-trap-sv.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        SV PDF
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'sv'
          ? 'Holmström, B. K. (2026). Kompetensfällan: Varför Sveriges högtillitsmodell tyst deprekeras. Strategisk landrapport.'
          : 'Holmström, B. K. (2026). The Competence Trap: Why Sweden\'s High-Trust Model Is Quietly Deprecating. Strategic Country Report.';
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'sv' ? 'Citat kopierat!' : 'Citation copied!');
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
        <span class:font-bold={reportLang === 'sv'} class:opacity-50={reportLang !== 'sv'}>SV</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/sweden-competence-trap-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/sweden-competence-trap-sv.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelSv}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'sv'
            ? 'Holmström, B. K. (2026). Kompetensfällan: Varför Sveriges högtillitsmodell tyst deprekeras. Strategisk landrapport.'
            : 'Holmström, B. K. (2026). The Competence Trap: Why Sweden\'s High-Trust Model Is Quietly Deprecating. Strategic Country Report.';
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'sv' ? 'Citat kopierat!' : 'Citation copied!');
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
