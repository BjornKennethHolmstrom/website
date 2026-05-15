<!-- src/routes/reports/france-decisiveness-mirage/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN + FR)
  // ------------------------------------------
  import ExecutiveSummaryEn from './sections/01-executive-summary.en.md';
  import ExecutiveSummaryFr from './sections/01-executive-summary.fr.md';

  import DecisivenessMirageEn from './sections/02-decisiveness-mirage.en.md';
  import DecisivenessMirageFr from './sections/02-decisiveness-mirage.fr.md';

  import IntegrationDeficitEn from './sections/03-integration-deficit.en.md';
  import IntegrationDeficitFr from './sections/03-integration-deficit.fr.md';

  import BuildingIntegrationEn from './sections/04-building-integration.en.md';
  import BuildingIntegrationFr from './sections/04-building-integration.fr.md';

  import PoliticalImmuneEn from './sections/05-political-immune-system.en.md';
  import PoliticalImmuneFr from './sections/05-political-immune-system.fr.md';

  import TransitionArchitectureEn from './sections/06-transition-architecture.en.md';
  import TransitionArchitectureFr from './sections/06-transition-architecture.fr.md';

  import PilotsEn from './sections/07-pilots.en.md';
  import PilotsFr from './sections/07-pilots.fr.md';

  import CodaEn from './sections/08-coda.en.md';
  import CodaFr from './sections/08-coda.fr.md';

  import AppendixAEn from './sections/09-appendix-a.en.md';
  import AppendixAFr from './sections/09-appendix-a.fr.md';

  import AppendixBEn from './sections/09-appendix-b.en.md';
  import AppendixBFr from './sections/09-appendix-b.fr.md';

  import AppendixCEn from './sections/09-appendix-c.en.md';
  import AppendixCFr from './sections/09-appendix-c.fr.md';

  import AppendixDEn from './sections/09-appendix-d.en.md';
  import AppendixDFr from './sections/09-appendix-d.fr.md';

  import AppendixEEn from './sections/09-appendix-e.en.md';
  import AppendixEFr from './sections/09-appendix-e.fr.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleFr: 'Résumé exécutif',
      compEn: ExecutiveSummaryEn,
      compFr: ExecutiveSummaryFr,
    },
    {
      id: 'decisiveness-mirage',
      titleEn: '1. The Decisiveness Mirage',
      titleFr: '1. Le mirage de la décision',
      compEn: DecisivenessMirageEn,
      compFr: DecisivenessMirageFr,
    },
    {
      id: 'integration-deficit',
      titleEn: '2. The Integration Deficit: A New Diagnosis',
      titleFr: '2. Le déficit d\'intégration : Un nouveau diagnostic',
      compEn: IntegrationDeficitEn,
      compFr: IntegrationDeficitFr,
    },
    {
      id: 'building-integration',
      titleEn: '3. What Building Integration Capacity Looks Like',
      titleFr: '3. À quoi ressemble la construction de la capacité d\'intégration',
      compEn: BuildingIntegrationEn,
      compFr: BuildingIntegrationFr,
    },
    {
      id: 'political-immune',
      titleEn: '4. The Political Immune System: Why Integration Fails',
      titleFr: '4. Le système immunitaire politique : Pourquoi l\'intégration échoue',
      compEn: PoliticalImmuneEn,
      compFr: PoliticalImmuneFr,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for France',
      titleFr: '5. Travailler avec le système : Architecture de transition pour la France',
      compEn: TransitionArchitectureEn,
      compFr: TransitionArchitectureFr,
    },
    {
      id: 'pilots',
      titleEn: '6. A Concrete First Step: Territorial Integration Pilots',
      titleFr: '6. Un premier pas concret : Les territoires d\'intégration adaptative',
      compEn: PilotsEn,
      compFr: PilotsFr,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: From Deciding to Integrating',
      titleFr: '7. Coda : De la décision à l\'intégration',
      compEn: CodaEn,
      compFr: CodaFr,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleFr: 'Annexe A : Systèmes de valeurs & logiques politiques',
      compEn: AppendixAEn,
      compFr: AppendixAFr,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titleFr: 'Annexe B : Analogies internationales & précédents',
      compEn: AppendixBEn,
      compFr: AppendixBFr,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: Bibliography & Source Notes',
      titleFr: 'Annexe C : Bibliographie & sources',
      compEn: AppendixCEn,
      compFr: AppendixCFr,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleFr: 'Annexe D : Objections anticipées',
      compEn: AppendixDEn,
      compFr: AppendixDFr,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleFr: 'Annexe E : À propos de l\'auteur & méthode',
      compEn: AppendixEEn,
      compFr: AppendixEFr,
    },
  ];

  // ------------------------------------------
  // 3. Local report language (independent of site)
  // ------------------------------------------
  let reportLang: 'en' | 'fr' = $state('en');
  let activeSection = $state('executive-summary');

  function toggleReportLang() {
    reportLang = reportLang === 'en' ? 'fr' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'fr' ? section.titleFr : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'fr' ? section.compFr : section.compEn;
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
      title: 'The Decisiveness Mirage',
      subtitle: 'Why France Governs by Decree but Cannot Make Decisions Stick',
      description:
        'France does not lack decisions — it lacks the capacity to make decisions that integrate. A field guide to the integration deficit and how to reconnect decision with legitimacy.',
    },
    fr: {
      title: 'Le mirage de la décision',
      subtitle: 'Pourquoi la France gouverne par décret mais ne parvient pas à faire tenir ses décisions',
      description:
        'La France ne manque pas de décisions — elle manque de la capacité à prendre des décisions qui s\'intègrent. Un guide sur le déficit d\'intégration et comment reconnecter la décision à la légitimité.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · France',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelFr: 'PDF (Français)',
    },
    fr: {
      tag: 'Rapport Pays · France',
      allReports: '← Tous les Rapports',
      downloads: 'Téléchargements',
      share: 'Partager',
      cite: 'Citer',
      pdfLabelEn: 'PDF (English)',
      pdfLabelFr: 'PDF (Français)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-06"
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
      <span class:font-bold={reportLang === 'fr'} class:opacity-50={reportLang !== 'fr'}>FR</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/france-decisiveness-mirage-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        EN PDF
      </a>
      <a
        href="/reports/france-decisiveness-mirage-fr.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        FR PDF
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'fr'
          ? 'Holmström, B. K. (2026). Le mirage de la décision : Pourquoi la France gouverne par décret mais ne parvient pas à faire tenir ses décisions. Rapport stratégique pays.'
          : 'Holmström, B. K. (2026). The Decisiveness Mirage: Why France Governs by Decree but Cannot Make Decisions Stick. Strategic Country Report.';
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'fr' ? 'Citation copiée !' : 'Citation copied!');
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
        <span class:font-bold={reportLang === 'fr'} class:opacity-50={reportLang !== 'fr'}>FR</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/france-decisiveness-mirage-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/france-decisiveness-mirage-fr.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelFr}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'fr'
            ? 'Holmström, B. K. (2026). Le mirage de la décision : Pourquoi la France gouverne par décret mais ne parvient pas à faire tenir ses décisions. Rapport stratégique pays.'
            : 'Holmström, B. K. (2026). The Decisiveness Mirage: Why France Governs by Decree but Cannot Make Decisions Stick. Strategic Country Report.';
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'fr' ? 'Citation copiée !' : 'Citation copied!');
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
