<!-- src/routes/reports/spain-transition-trap/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, ES, EU)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryEs from './sections/00-executive-summary.es.md';
  import ExecutiveSummaryEu from './sections/00-executive-summary.eu.md';

  // 1. The Transition Trap
  import TransitionTrapEn from './sections/01-transition-trap.en.md';
  import TransitionTrapEs from './sections/01-transition-trap.es.md';
  import TransitionTrapEu from './sections/01-transition-trap.eu.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsEs from './sections/02-structural-mechanisms.es.md';
  import StructuralMechanismsEu from './sections/02-structural-mechanisms.eu.md';

  // 3. Building Integrative Closure Capacity
  import BuildingCapacityEn from './sections/03-building-integrative-closure.en.md';
  import BuildingCapacityEs from './sections/03-building-integrative-closure.es.md';
  import BuildingCapacityEu from './sections/03-building-integrative-closure.eu.md';

  // 4. The Political Immune System: The Consensus Machine
  import ImmuneSystemEn from './sections/04-political-immune-system.en.md';
  import ImmuneSystemEs from './sections/04-political-immune-system.es.md';
  import ImmuneSystemEu from './sections/04-political-immune-system.eu.md';

  // 5. Working with the Grain: Transition Architecture for Spain
  import TransitionArchitectureEn from './sections/05-transition-architecture.en.md';
  import TransitionArchitectureEs from './sections/05-transition-architecture.es.md';
  import TransitionArchitectureEu from './sections/05-transition-architecture.eu.md';

  // 6. A Concrete First Step
  import FirstStepEn from './sections/06-first-step.en.md';
  import FirstStepEs from './sections/06-first-step.es.md';
  import FirstStepEu from './sections/06-first-step.eu.md';

  // 7. Coda
  import CodaEn from './sections/07-coda.en.md';
  import CodaEs from './sections/07-coda.es.md';
  import CodaEu from './sections/07-coda.eu.md';

  // Appendices
  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixAEs from './sections/08-appendix-a.es.md';
  import AppendixAEu from './sections/08-appendix-a.eu.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBEs from './sections/08-appendix-b.es.md';
  import AppendixBEu from './sections/08-appendix-b.eu.md';

  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCEs from './sections/08-appendix-c.es.md';
  import AppendixCEu from './sections/08-appendix-c.eu.md';

  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDEs from './sections/08-appendix-d.es.md';
  import AppendixDEu from './sections/08-appendix-d.eu.md';

  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixEEs from './sections/08-appendix-e.es.md';
  import AppendixEEu from './sections/08-appendix-e.eu.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleEs: 'Resumen Ejecutivo',
      titleEu: 'Laburpen Exekutiboa',
      compEn: ExecutiveSummaryEn,
      compEs: ExecutiveSummaryEs,
      compEu: ExecutiveSummaryEu,
    },
    {
      id: 'transition-trap',
      titleEn: '1. The Transition Trap',
      titleEs: '1. La Trampa de la Transición',
      titleEu: '1. Trantsizioaren Tranpa',
      compEn: TransitionTrapEn,
      compEs: TransitionTrapEs,
      compEu: TransitionTrapEu,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. The Integrative Closure Deficit: Structural Mechanisms',
      titleEs: '2. El Déficit de Cierre Integrativo: Mecanismos Estructurales',
      titleEu: '2. Itxiera Integratzailearen Defizita: Egiturazko Mekanismoak',
      compEn: StructuralMechanismsEn,
      compEs: StructuralMechanismsEs,
      compEu: StructuralMechanismsEu,
    },
    {
      id: 'building-capacity',
      titleEn: '3. What Building Integrative Closure Capacity Would Look Like',
      titleEs: '3. Cómo Sería Construir la Capacidad de Cierre Integrativo',
      titleEu: '3. Nolakoa Izango Litzateke Itxiera Integratzailerako Gaitasuna Eraikitzea',
      compEn: BuildingCapacityEn,
      compEs: BuildingCapacityEs,
      compEu: BuildingCapacityEu,
    },
    {
      id: 'immune-system',
      titleEn: '4. The Political Immune System: The Consensus Machine',
      titleEs: '4. El Sistema Inmunológico Político: La Máquina del Consenso',
      titleEu: '4. Sistema Immunologiko Politikoa: Adostasunaren Makina',
      compEn: ImmuneSystemEn,
      compEs: ImmuneSystemEs,
      compEu: ImmuneSystemEu,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for Spain',
      titleEs: '5. Trabajando con la Fibra: Arquitectura de Transición para España',
      titleEu: '5. Alearekin Lan Eginez: Trantsizio Arkitektura Espainiarentzat',
      compEn: TransitionArchitectureEn,
      compEs: TransitionArchitectureEs,
      compEu: TransitionArchitectureEu,
    },
    {
      id: 'first-step',
      titleEn: '6. A Concrete First Step: The Inter-Regional Compact Fund and the Citizens\' Assembly',
      titleEs: '6. Un Primer Paso Concreto: El Fondo de Pactos Interregionales y la Asamblea Ciudadana',
      titleEu: '6. Lehen Urrats Zehatz Bat: Eskualde Arteko Itunen Funtsa eta Herritarren Batzarra',
      compEn: FirstStepEn,
      compEs: FirstStepEs,
      compEu: FirstStepEu,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: The Limits of Constructive Ambiguity',
      titleEs: '7. Coda: Los Límites de la Ambigüedad Constructiva',
      titleEu: '7. Koda: Anbiguotasun Eraikitzailearen Mugak',
      compEn: CodaEn,
      compEs: CodaEs,
      compEu: CodaEu,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleEs: 'Apéndice A: Sistemas de Valores y Mentalidades Políticas',
      titleEu: 'A Eranskina: Balio-Sistemak eta Politika Mentalitateak',
      compEn: AppendixAEn,
      compEs: AppendixAEs,
      compEu: AppendixAEu,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titleEs: 'Apéndice B: Análogos y Precedentes Internacionales',
      titleEu: 'B Eranskina: Nazioarteko Analogiak eta Aurrekariak',
      compEn: AppendixBEn,
      compEs: AppendixBEs,
      compEu: AppendixBEu,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleEs: 'Apéndice C: La Conexión con la Gobernanza como Ingeniería',
      titleEu: 'C Eranskina: Gobernantza Ingeniaritza gisa Konexioa',
      compEn: AppendixCEn,
      compEs: AppendixCEs,
      compEu: AppendixCEu,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleEs: 'Apéndice D: Objeciones Anticipadas',
      titleEu: 'D Eranskina: Aurrez Aurreko Objekzioak',
      compEn: AppendixDEn,
      compEs: AppendixDEs,
      compEu: AppendixDEu,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleEs: 'Apéndice E: Sobre el Autor y el Método',
      titleEu: 'E Eranskina: Egileari eta Metodoari Buruz',
      compEn: AppendixEEn,
      compEs: AppendixEEs,
      compEu: AppendixEEu,
    },
  ];

  // ------------------------------------------
  // 3. Report language (en, es, eu)
  // ------------------------------------------
  let reportLang: 'en' | 'es' | 'eu' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    if (reportLang === 'en') reportLang = 'es';
    else if (reportLang === 'es') reportLang = 'eu';
    else reportLang = 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    if (reportLang === 'es') return section.titleEs;
    if (reportLang === 'eu') return section.titleEu;
    return section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    if (reportLang === 'es') return section.compEs;
    if (reportLang === 'eu') return section.compEu;
    return section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts (English, Spanish, Basque)
  // ------------------------------------------
  const metadata = {
    en: {
      title: "The Transition Trap: Why Spain's Mastery of Democratic Transition Prevents Constitutional Completion",
      subtitle:
        'A field guide to the Crisis–Centralisation–Peripheral Mobilisation–Accommodation Loop — and how Europe\'s most plurinational democracy can build the integrative closure capacity its constitution never provided',
      description:
        'Spain is not a failing state — it is a state that succeeded brilliantly at democratic transition and is now constrained by that success. This report diagnoses an Integrative Closure Deficit produced by the 1978 Constitution\'s frozen ambiguity and the fiscal-territorial trap.',
    },
    es: {
      title: 'La Trampa de la Transición: Por Qué el Dominio Español de la Transición Democrática Impide la Finalización Constitucional',
      subtitle:
        'Una guía de campo para el Bucle Crisis–Centralización–Movilización Periférica–Acomodación — y cómo la democracia más plurinacional de Europa puede construir la capacidad de cierre integrativo que su constitución nunca proporcionó',
      description:
        'España no es un estado fallido — es un estado que triunfó brillantemente en la transición democrática y ahora está limitado por ese mismo éxito. Este informe diagnostica un Déficit de Cierre Integrativo producido por la ambigüedad congelada de la Constitución de 1978 y la trampa fiscal-territorial.',
    },
    eu: {
      title: 'Trantsizioaren Tranpa: Zergatik Espainiak Trantsizio Demokratikoan duen Trebetasunak Konstituzioa Amaitzea eragozten duen',
      subtitle:
        'Land-gida bat Krisia–Zentralizazioa–Mobilizazio Periferikoa–Egokitze Begiztarako — eta nola Europako demokrazia plurinazionalenak bere konstituzioak inoiz eman ez zion itxiera integratzailerako gaitasuna eraiki dezakeen',
      description:
        'Espainia ez da estatu porrot bat — trantsizio demokratikoan bikain aritu zen estatua da, eta orain arrakasta horrek mugatzen du. Txosten honek 1978ko Konstituzioaren anbiguotasun izoztuak eta tranpa fiskal-territorialak sortutako Itxiera Integratzailearen Defizita diagnostikatzen du.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Spain',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelEs: 'PDF (Español)',
      pdfLabelEu: 'PDF (Euskara)',
      languageToggle: 'Español / Euskara',
    },
    es: {
      tag: 'Informe de País · España',
      allReports: '← Todos los Informes',
      downloads: 'Descargas',
      share: 'Compartir',
      cite: 'Cómo citar',
      pdfLabelEn: 'PDF (English)',
      pdfLabelEs: 'PDF (Español)',
      pdfLabelEu: 'PDF (Euskara)',
      languageToggle: 'English / Euskara',
    },
    eu: {
      tag: 'Herrialde Txostena · Espainia',
      allReports: '← Txosten Guztiak',
      downloads: 'Deskargak',
      share: 'Partekatu',
      cite: 'Nola aipatu',
      pdfLabelEn: 'PDF (English)',
      pdfLabelEs: 'PDF (Español)',
      pdfLabelEu: 'PDF (Euskara)',
      languageToggle: 'English / Español',
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
    <!-- Language toggle (EN / ES / EU) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'es'} class:opacity-50={reportLang !== 'es'}>ES</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'eu'} class:opacity-50={reportLang !== 'eu'}>EU</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/spain-transition-trap-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelEn}
      </a>
      <a
        href="/reports/spain-transition-trap-es.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelEs}
      </a>
      <a
        href="/reports/spain-transition-trap-eu.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelEu}
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'es'
          ? 'Holmström, B. K. (2026). La Trampa de la Transición: Por Qué el Dominio Español de la Transición Democrática Impide la Finalización Constitucional. Informe Estratégico de País.'
          : reportLang === 'eu'
          ? 'Holmström, B. K. (2026). Trantsizioaren Tranpa: Zergatik Espainiak Trantsizio Demokratikoan duen Trebetasunak Konstituzioa Amaitzea eragozten duen. Herrialde Txosten Estrategikoa.'
          : 'Holmström, B. K. (2026). The Transition Trap: Why Spain\'s Mastery of Democratic Transition Prevents Constitutional Completion. Strategic Country Report.';
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'es' ? '¡Cita copiada!' : reportLang === 'eu' ? 'Aipua kopiatu da!' : 'Citation copied!');
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

    <!-- Language toggle (EN / ES / EU) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'es'} class:opacity-50={reportLang !== 'es'}>ES</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'eu'} class:opacity-50={reportLang !== 'eu'}>EU</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/spain-transition-trap-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/spain-transition-trap-es.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEs}
        </a>
        <a
          href="/reports/spain-transition-trap-eu.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEu}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'es'
            ? 'Holmström, B. K. (2026). La Trampa de la Transición: Por Qué el Dominio Español de la Transición Democrática Impide la Finalización Constitucional. Informe Estratégico de País.'
            : reportLang === 'eu'
            ? 'Holmström, B. K. (2026). Trantsizioaren Tranpa: Zergatik Espainiak Trantsizio Demokratikoan duen Trebetasunak Konstituzioa Amaitzea eragozten duen. Herrialde Txosten Estrategikoa.'
            : 'Holmström, B. K. (2026). The Transition Trap: Why Spain\'s Mastery of Democratic Transition Prevents Constitutional Completion. Strategic Country Report.';
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'es' ? '¡Cita copiada!' : reportLang === 'eu' ? 'Aipua kopiatu da!' : 'Citation copied!');
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
