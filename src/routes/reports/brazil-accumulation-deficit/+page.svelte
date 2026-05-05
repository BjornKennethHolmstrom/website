<!-- src/routes/reports/brazil-accumulation-deficit/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN + PT‑BR)
  // ------------------------------------------
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryPt from './sections/00-executive-summary.pt_br.md';

  import AccumulationDeficitEn from './sections/01-accumulation-deficit.en.md';
  import AccumulationDeficitPt from './sections/01-accumulation-deficit.pt_br.md';

  import CaptureEquilibriumEn from './sections/02-capture-equilibrium.en.md';
  import CaptureEquilibriumPt from './sections/02-capture-equilibrium.pt_br.md';

  import BuildingCapacityEn from './sections/03-building-accumulation-capacity.en.md';
  import BuildingCapacityPt from './sections/03-building-accumulation-capacity.pt_br.md';

  import PoliticalImmuneEn from './sections/04-political-immune-system.en.md';
  import PoliticalImmunePt from './sections/04-political-immune-system.pt_br.md';

  import TransitionArchitectureEn from './sections/05-transition-architecture.en.md';
  import TransitionArchitecturePt from './sections/05-transition-architecture.pt_br.md';

  import FirstStepEn from './sections/06-first-step.en.md';
  import FirstStepPt from './sections/06-first-step.pt_br.md';

  import CodaEn from './sections/07-coda.en.md';
  import CodaPt from './sections/07-coda.pt_br.md';

  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixAPt from './sections/08-appendix-a.pt_br.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBPt from './sections/08-appendix-b.pt_br.md';

  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCPt from './sections/08-appendix-c.pt_br.md';

  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDPt from './sections/08-appendix-d.pt_br.md';

  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixEPt from './sections/08-appendix-e.pt_br.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titlePt: 'Sumário Executivo',
      compEn: ExecutiveSummaryEn,
      compPt: ExecutiveSummaryPt,
    },
    {
      id: 'accumulation-deficit',
      titleEn: '1. The Accumulation Deficit',
      titlePt: '1. O Déficit de Acumulação',
      compEn: AccumulationDeficitEn,
      compPt: AccumulationDeficitPt,
    },
    {
      id: 'capture-equilibrium',
      titleEn: '2. The Capture Equilibrium: A New Diagnosis',
      titlePt: '2. O Equilíbrio de Captura: Um Novo Diagnóstico',
      compEn: CaptureEquilibriumEn,
      compPt: CaptureEquilibriumPt,
    },
    {
      id: 'building-capacity',
      titleEn: '3. What Building Accumulation Capacity Looks Like',
      titlePt: '3. Como Construir a Capacidade de Acumulação',
      compEn: BuildingCapacityEn,
      compPt: BuildingCapacityPt,
    },
    {
      id: 'political-immune',
      titleEn: '4. The Political Immune System',
      titlePt: '4. O Sistema Imunológico Político',
      compEn: PoliticalImmuneEn,
      compPt: PoliticalImmunePt,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for Brazil',
      titlePt: '5. Trabalhando com a Estrutura: Arquitetura de Transição para o Brasil',
      compEn: TransitionArchitectureEn,
      compPt: TransitionArchitecturePt,
    },
    {
      id: 'first-step',
      titleEn: '6. A Concrete First Step: The Algorithmic Bypass and Municipal Laboratories',
      titlePt: '6. Um Primeiro Passo Concreto: O Bypass Algorítmico e os Laboratórios Municipais',
      compEn: FirstStepEn,
      compPt: FirstStepPt,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: From Breakthrough-Capture to Breakthrough-Compound',
      titlePt: '7. Coda: Da Captura de Avanços à Composição de Avanços',
      compEn: CodaEn,
      compPt: CodaPt,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titlePt: 'Apêndice A: Sistemas de Valores e Mentalidades Políticas',
      compEn: AppendixAEn,
      compPt: AppendixAPt,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titlePt: 'Apêndice B: Analogias Internacionais e Precedentes',
      compEn: AppendixBEn,
      compPt: AppendixBPt,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titlePt: 'Apêndice C: A Conexão com a Série Governance as Engineering',
      compEn: AppendixCEn,
      compPt: AppendixCPt,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titlePt: 'Apêndice D: Objeções Antecipadas',
      compEn: AppendixDEn,
      compPt: AppendixDPt,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titlePt: 'Apêndice E: Sobre o Autor e o Método',
      compEn: AppendixEEn,
      compPt: AppendixEPt,
    },
  ];

  // ------------------------------------------
  // 3. Local report language (EN / PT‑BR)
  // ------------------------------------------
  let reportLang: 'en' | 'pt_br' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'pt_br' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'pt_br' ? section.titlePt : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'pt_br' ? section.compPt : section.compEn;
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
      title: 'The Accumulation Deficit: Why Brazil\'s Brilliant Breakthroughs Cannot Compound',
      subtitle: 'A field guide to the capture equilibrium — and how Brazil can build the integration layer that converts its genius into durable capacity',
      description:
        'Brazil does not lack capacity — it lacks the ability to compound its breakthroughs into durable, system‑wide capacity. This report diagnoses a capture equilibrium produced by coalitional presidentialism and proposes an Algorithmic Bypass as the concrete first step.',
    },
    pt_br: {
      title: 'O Déficit de Acumulação: Por que os Avanços Brilhantes do Brasil Não Conseguem se Consolidar',
      subtitle: 'Um guia para o equilíbrio de captura — e como o Brasil pode construir a camada de integração que transforma sua genialidade em capacidade duradoura',
      description:
        'O Brasil não carece de capacidade — carece da habilidade de transformar seus avanços em capacidade sistêmica e duradoura. Este relatório diagnostica um equilíbrio de captura gerado pelo presidencialismo de coalizão e propõe um Bypass Algorítmico como primeiro passo concreto.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Brazil',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelPt: 'PDF (Português)',
    },
    pt_br: {
      tag: 'Relatório de País · Brasil',
      allReports: '← Todos os Relatórios',
      downloads: 'Downloads',
      share: 'Compartilhar',
      cite: 'Como citar',
      pdfLabelEn: 'PDF (English)',
      pdfLabelPt: 'PDF (Português)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-11"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- SIDEBAR -->
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <!-- Back link -->
    <div class="mb-8">
      <a href="/reports" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle (EN / PT) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'pt_br'} class:opacity-50={reportLang !== 'pt_br'}>PT</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/brazil-accumulation-deficit-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/brazil-accumulation-deficit-pt_br.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelPt}
        </a>
      </div>
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

    <!-- Share & Citation -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <ShareButtons title={meta.title} />
        <button
          onclick={() => {
            const cite = reportLang === 'pt_br'
              ? 'Holmström, B. K. (2026). O Déficit de Acumulação: Por que os Avanços Brilhantes do Brasil Não Conseguem se Consolidar. Relatório Estratégico de País.'
              : 'Holmström, B. K. (2026). The Accumulation Deficit: Why Brazil\'s Brilliant Breakthroughs Cannot Compound. Strategic Country Report.';
            navigator.clipboard.writeText(cite);
            alert(reportLang === 'pt_br' ? 'Citação copiada!' : 'Citation copied!');
          }}
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {t.cite}
        </button>
      </div>
    </div>
  </main>
</div>
