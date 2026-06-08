<!-- src/routes/reports/switzerland-boundary-expansion-deficit/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, DE, FR, IT)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/executive-summary.en.md';
  import ExecutiveSummaryDe from './sections/executive-summary.de.md';
  import ExecutiveSummaryFr from './sections/executive-summary.fr.md';
  import ExecutiveSummaryIt from './sections/executive-summary.it.md';

  // 1. The Boundary Expansion Deficit
  import BoundaryExpansionEn from './sections/01-boundary-expansion-deficit.en.md';
  import BoundaryExpansionDe from './sections/01-boundary-expansion-deficit.de.md';
  import BoundaryExpansionFr from './sections/01-boundary-expansion-deficit.fr.md';
  import BoundaryExpansionIt from './sections/01-boundary-expansion-deficit.it.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsDe from './sections/02-structural-mechanisms.de.md';
  import StructuralMechanismsFr from './sections/02-structural-mechanisms.fr.md';
  import StructuralMechanismsIt from './sections/02-structural-mechanisms.it.md';

  // 3. Empirical Cases
  import EmpiricalCasesEn from './sections/03-empirical-cases.en.md';
  import EmpiricalCasesDe from './sections/03-empirical-cases.de.md';
  import EmpiricalCasesFr from './sections/03-empirical-cases.fr.md';
  import EmpiricalCasesIt from './sections/03-empirical-cases.it.md';

  // 4. Building Boundary Adequacy
  import BuildingAdequacyEn from './sections/04-building-boundary-adequacy.en.md';
  import BuildingAdequacyDe from './sections/04-building-boundary-adequacy.de.md';
  import BuildingAdequacyFr from './sections/04-building-boundary-adequacy.fr.md';
  import BuildingAdequacyIt from './sections/04-building-boundary-adequacy.it.md';

  // 5. A Concrete First Step
  import FirstStepEn from './sections/05-concrete-first-step.en.md';
  import FirstStepDe from './sections/05-concrete-first-step.de.md';
  import FirstStepFr from './sections/05-concrete-first-step.fr.md';
  import FirstStepIt from './sections/05-concrete-first-step.it.md';

  // 6. Coda
  import CodaEn from './sections/06-coda.en.md';
  import CodaDe from './sections/06-coda.de.md';
  import CodaFr from './sections/06-coda.fr.md';
  import CodaIt from './sections/06-coda.it.md';

  // Appendices
  import AppendixAEn from './sections/07-appendix-a.en.md';
  import AppendixADe from './sections/07-appendix-a.de.md';
  import AppendixAFr from './sections/07-appendix-a.fr.md';
  import AppendixAIt from './sections/07-appendix-a.it.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBDe from './sections/08-appendix-b.de.md';
  import AppendixBFr from './sections/08-appendix-b.fr.md';
  import AppendixBIt from './sections/08-appendix-b.it.md';

  import AppendixCEn from './sections/09-appendix-c.en.md';
  import AppendixCDe from './sections/09-appendix-c.de.md';
  import AppendixCFr from './sections/09-appendix-c.fr.md';
  import AppendixCIt from './sections/09-appendix-c.it.md';

  import AppendixDEn from './sections/10-appendix-d.en.md';
  import AppendixDDe from './sections/10-appendix-d.de.md';
  import AppendixDFr from './sections/10-appendix-d.fr.md';
  import AppendixDIt from './sections/10-appendix-d.it.md';

  import AppendixEEn from './sections/11-appendix-e.en.md';
  import AppendixEDe from './sections/11-appendix-e.de.md';
  import AppendixEFr from './sections/11-appendix-e.fr.md';
  import AppendixEIt from './sections/11-appendix-e.it.md';

  import AppendixFEn from './sections/12-appendix-f.en.md';
  import AppendixFDe from './sections/12-appendix-f.de.md';
  import AppendixFFr from './sections/12-appendix-f.fr.md';
  import AppendixFIt from './sections/12-appendix-f.it.md';


  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleDe: 'Zusammenfassung',
      titleFr: 'Résumé',
      titleIt: 'Sintesi',
      compEn: ExecutiveSummaryEn,
      compDe: ExecutiveSummaryDe,
      compFr: ExecutiveSummaryFr,
      compIt: ExecutiveSummaryIt,
    },
    {
      id: 'boundary-expansion-deficit',
      titleEn: '1. The Boundary Expansion Deficit',
      titleDe: '1. Das Grenzerweiterungsdefizit',
      titleFr: '1. Le déficit d\'expansion des frontières',
      titleIt: '1. Il deficit di espansione del confine',
      compEn: BoundaryExpansionEn,
      compDe: BoundaryExpansionDe,
      compFr: BoundaryExpansionFr,
      compIt: BoundaryExpansionIt,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. Structural Mechanisms',
      titleDe: '2. Strukturelle Mechanismen',
      titleFr: '2. Mécanismes structurels',
      titleIt: '2. Meccanismi strutturali',
      compEn: StructuralMechanismsEn,
      compDe: StructuralMechanismsDe,
      compFr: StructuralMechanismsFr,
      compIt: StructuralMechanismsIt,
    },
    {
      id: 'empirical-cases',
      titleEn: '3. Empirical Cases',
      titleDe: '3. Empirische Fälle',
      titleFr: '3. Cas empiriques',
      titleIt: '3. Casi empirici',
      compEn: EmpiricalCasesEn,
      compDe: EmpiricalCasesDe,
      compFr: EmpiricalCasesFr,
      compIt: EmpiricalCasesIt,
    },
    {
      id: 'building-boundary-adequacy',
      titleEn: '4. What Building Boundary Adequacy Would Look Like',
      titleDe: '4. Wie der Aufbau von Grenzadäquanz aussehen würde',
      titleFr: '4. À quoi ressemblerait l\'adéquation des frontières',
      titleIt: '4. Come sarebbe costruire l\'adeguatezza dei confini',
      compEn: BuildingAdequacyEn,
      compDe: BuildingAdequacyDe,
      compFr: BuildingAdequacyFr,
      compIt: BuildingAdequacyIt,
    },
    {
      id: 'first-step',
      titleEn: '5. A Concrete First Step: The Boundary Expansion Pilot',
      titleDe: '5. Ein konkreter erster Schritt: Das Grenzerweiterungspilotprojekt',
      titleFr: '5. Une première étape concrète : le projet pilote d\'expansion des frontières',
      titleIt: '5. Un primo passo concreto: il progetto pilota di espansione del confine',
      compEn: FirstStepEn,
      compDe: FirstStepDe,
      compFr: FirstStepFr,
      compIt: FirstStepIt,
    },
    {
      id: 'coda',
      titleEn: '6. Coda: The Prototype at the Boundary',
      titleDe: '6. Koda: Der Prototyp an der Grenze',
      titleFr: '6. Coda : le prototype à la frontière',
      titleIt: '6. Coda: Il prototipo al confine',
      compEn: CodaEn,
      compDe: CodaDe,
      compFr: CodaFr,
      compIt: CodaIt,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleDe: 'Anhang A: Wertesysteme und politische Denkweisen',
      titleFr: 'Annexe A : Systèmes de valeurs et mentalités politiques',
      titleIt: 'Appendice A: Sistemi di valori e mentalità politiche',
      compEn: AppendixAEn,
      compDe: AppendixADe,
      compFr: AppendixAFr,
      compIt: AppendixAIt,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues',
      titleDe: 'Anhang B: Internationale Analogien',
      titleFr: 'Annexe B : Analogies internationales',
      titleIt: 'Appendice B: Analogie internazionali',
      compEn: AppendixBEn,
      compDe: AppendixBDe,
      compFr: AppendixBFr,
      compIt: AppendixBIt,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleDe: 'Anhang C: Die Verbindung zu Governance as Engineering',
      titleFr: 'Annexe C : Le lien avec la gouvernance comme ingénierie',
      titleIt: 'Appendice C: Il collegamento con Governance as Engineering',
      compEn: AppendixCEn,
      compDe: AppendixCDe,
      compFr: AppendixCFr,
      compIt: AppendixCIt,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleDe: 'Anhang D: Erwartete Einwände',
      titleFr: 'Annexe D : Objections anticipées',
      titleIt: 'Appendice D: Obiezioni previste',
      compEn: AppendixDEn,
      compDe: AppendixDDe,
      compFr: AppendixDFr,
      compIt: AppendixDIt,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleDe: 'Anhang E: Über den Autor und die Methode',
      titleFr: 'Annexe E : À propos de l\'auteur et de la méthode',
      titleIt: 'Appendice E: L\'autore e il metodo',
      compEn: AppendixEEn,
      compDe: AppendixEDe,
      compFr: AppendixEFr,
      compIt: AppendixEIt,
    },
    {
      id: 'appendix-f',
      titleEn: 'Appendix F: Glossary',
      titleDe: 'Anhang F: Glossar',
      titleFr: 'Annexe F : Glossaire',
      titleIt: 'Appendice E: Glossario',
      compEn: AppendixFEn,
      compDe: AppendixFDe,
      compFr: AppendixFFr,
      compIt: AppendixFIt,
    },
  ];

  // ------------------------------------------
  // 3. Local report language (EN, DE, FR, IT)
  // ------------------------------------------
  let reportLang: 'en' | 'de' | 'fr' | 'it' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    const langs: Array<'en' | 'de' | 'fr' | 'it'> = ['en', 'de', 'fr', 'it'];
    const idx = langs.indexOf(reportLang);
    reportLang = langs[(idx + 1) % langs.length];
  }

  function sectionTitle(section: (typeof contentMap)[0]) {
    if (reportLang === 'de') return section.titleDe;
    if (reportLang === 'fr') return section.titleFr;
    if (reportLang === 'it') return section.titleIt;
    return section.titleEn;
  }

  function sectionComp(section: (typeof contentMap)[0]) {
    if (reportLang === 'de') return section.compDe;
    if (reportLang === 'fr') return section.compFr;
    if (reportLang === 'it') return section.compIt;
    return section.compEn;
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
      title: 'Switzerland: The Boundary Expansion Deficit — When Internal Excellence Meets Global Interdependence',
      subtitle: 'A governance-as-engineering diagnosis of the world’s most internally adaptive democracy — and the structural challenge of expanding the system boundary',
      description:
        'Switzerland does not lack governance capacity — it lacks the boundary adequacy to match its internal excellence to global interdependence. This report diagnoses the Boundary Expansion Deficit and proposes a Global Footprint Dashboard, a Cantonal Pilot Programme, and a Citizens\' Assembly on Switzerland\'s Global Role.',
    },
    de: {
      title: 'Schweiz: Das Grenzerweiterungsdefizit — Wenn interne Exzellenz auf globale Interdependenz trifft',
      subtitle: 'Eine Governance-as-Engineering-Diagnose der weltweit intern anpassungsfähigsten Demokratie — und die strukturelle Herausforderung, die Systemgrenze zu erweitern',
      description:
        'Die Schweiz leidet nicht an mangelnder Governance-Kapazität, sondern an unzureichender Grenzadäquanz, um ihre interne Exzellenz mit globaler Interdependenz in Einklang zu bringen. Dieser Bericht diagnostiziert das Grenzerweiterungsdefizit und schlägt ein Global-Footprint-Dashboard, ein kantonales Pilotprogramm und eine Bürgerversammlung zur globalen Rolle der Schweiz vor.',
    },
    fr: {
      title: 'Suisse : Le déficit d\'expansion des frontières — Quand l\'excellence interne rencontre l\'interdépendance mondiale',
      subtitle: 'Un diagnostic de la gouvernance comme ingénierie de la démocratie la plus adaptative au monde — et le défi structurel d\'élargir la frontière du système',
      description:
        'La Suisse ne manque pas de capacité de gouvernance — elle manque d’une adéquation des frontières pour aligner son excellence interne sur l’interdépendance mondiale. Ce rapport diagnostique le déficit d’expansion des frontières et propose un tableau de bord de l’empreinte mondiale, un programme pilote cantonal et une Assemblée citoyenne sur le rôle mondial de la Suisse.',
    },
    it: {
      title: 'Svizzera: Il deficit di espansione del confine — Quando l\'eccellenza interna incontra l\'interdipendenza globale',
      subtitle: 'Una diagnosi di governance come ingegneria della democrazia più adattiva al mondo — e la sfida strutturale di espandere il confine del sistema',
      description:
        'La Svizzera non manca di capacità di governance — le manca l\'adeguatezza del confine per allineare la sua eccellenza interna all\'interdipendenza globale. Questo rapporto diagnostica il deficit di espansione del confine e propone un Dashboard dell\'impronta globale, un programma pilota cantonale e un\'Assemblea dei cittadini sul ruolo globale della Svizzera.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Switzerland',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelDe: 'PDF (Deutsch)',
      pdfLabelFr: 'PDF (Français)',
      pdfLabelIt: 'PDF (Italiano)',
    },
    de: {
      tag: 'Länderbericht · Schweiz',
      allReports: '← Alle Berichte',
      downloads: 'Downloads',
      share: 'Teilen',
      cite: 'Zitieren',
      pdfLabelEn: 'PDF (English)',
      pdfLabelDe: 'PDF (Deutsch)',
      pdfLabelFr: 'PDF (Français)',
      pdfLabelIt: 'PDF (Italiano)',
    },
    fr: {
      tag: 'Rapport national · Suisse',
      allReports: '← Tous les rapports',
      downloads: 'Téléchargements',
      share: 'Partager',
      cite: 'Citer',
      pdfLabelEn: 'PDF (English)',
      pdfLabelDe: 'PDF (Deutsch)',
      pdfLabelFr: 'PDF (Français)',
      pdfLabelIt: 'PDF (Italiano)',
    },
    it: {
      tag: 'Rapporto nazionale · Svizzera',
      allReports: '← Tutti i rapporti',
      downloads: 'Download',
      share: 'Condividi',
      cite: 'Cita',
      pdfLabelEn: 'PDF (English)',
      pdfLabelDe: 'PDF (Deutsch)',
      pdfLabelFr: 'PDF (Français)',
      pdfLabelIt: 'PDF (Italiano)',
    },
  };

  const citations = {
    en: 'Holmström, B. K. (2026). Switzerland: The Boundary Expansion Deficit — When Internal Excellence Meets Global Interdependence. Strategic Country Report.',
    de: 'Holmström, B. K. (2026). Schweiz: Das Grenzerweiterungsdefizit — Wenn interne Exzellenz auf globale Interdependenz trifft. Strategischer Länderbericht.',
    fr: 'Holmström, B. K. (2026). Suisse : Le déficit d\'expansion des frontières — Quand l\'excellence interne rencontre l\'interdépendance mondiale. Rapport stratégique national.',
    it: 'Holmström, B. K. (2026). Svizzera: Il deficit di espansione del confine — Quando l\'eccellenza interna incontra l\'interdipendenza globale. Rapporto strategico nazionale.',
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
  let citeText = $derived(citations[reportLang] ?? citations.en);
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
    <!-- Language toggle (EN → DE → FR → IT → EN) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'de'} class:opacity-50={reportLang !== 'de'}>DE</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'fr'} class:opacity-50={reportLang !== 'fr'}>FR</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'it'} class:opacity-50={reportLang !== 'it'}>IT</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a href="/reports/switzerland-boundary-expansion-deficit-en.pdf" download class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> EN
      </a>
      <a href="/reports/switzerland-boundary-expansion-deficit-de.pdf" download class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> DE
      </a>
      <a href="/reports/switzerland-boundary-expansion-deficit-fr.pdf" download class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> FR
      </a>
      <a href="/reports/switzerland-boundary-expansion-deficit-it.pdf" download class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> IT
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => { navigator.clipboard.writeText(citeText); alert(reportLang === 'de' ? 'Zitat kopiert!' : reportLang === 'fr' ? 'Citation copiée !' : reportLang === 'it' ? 'Citazione copiata!' : 'Citation copied!'); }}
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
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50">/</span>
        <span class:font-bold={reportLang === 'de'} class:opacity-50={reportLang !== 'de'}>DE</span>
        <span class="opacity-50">/</span>
        <span class:font-bold={reportLang === 'fr'} class:opacity-50={reportLang !== 'fr'}>FR</span>
        <span class="opacity-50">/</span>
        <span class:font-bold={reportLang === 'it'} class:opacity-50={reportLang !== 'it'}>IT</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a href="/reports/switzerland-boundary-expansion-deficit-en.pdf" download class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a href="/reports/switzerland-boundary-expansion-deficit-de.pdf" download class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelDe}
        </a>
        <a href="/reports/switzerland-boundary-expansion-deficit-fr.pdf" download class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelFr}
        </a>
        <a href="/reports/switzerland-boundary-expansion-deficit-it.pdf" download class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelIt}
        </a>
      </div>
    </div>

    <!-- Citation -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => { navigator.clipboard.writeText(citeText); alert(reportLang === 'de' ? 'Zitat kopiert!' : reportLang === 'fr' ? 'Citation copiée !' : reportLang === 'it' ? 'Citazione copiata!' : 'Citation copied!'); }}
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
