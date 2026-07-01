<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';

  // --- 1. IMPORT MARKDOWN SECTIONS AS RAW TEXT ---

  import ExecSummaryEnRaw from './sections/00-executive-summary.en.md?raw';
  import ExecSummarySvRaw from './sections/00-executive-summary.sv.md?raw';

  import Part1EnRaw from './sections/01-part-1.en.md?raw';
  import Part1SvRaw from './sections/01-part-1.sv.md?raw';
  import Part2EnRaw from './sections/02-part-2.en.md?raw';
  import Part2SvRaw from './sections/02-part-2.sv.md?raw';
  import Part3EnRaw from './sections/03-part-3.en.md?raw';
  import Part3SvRaw from './sections/03-part-3.sv.md?raw';
  import Part4EnRaw from './sections/04-part-4.en.md?raw';
  import Part4SvRaw from './sections/04-part-4.sv.md?raw';
  import Part5EnRaw from './sections/05-part-5.en.md?raw';
  import Part5SvRaw from './sections/05-part-5.sv.md?raw';
  import Part6EnRaw from './sections/06-part-6.en.md?raw';
  import Part6SvRaw from './sections/06-part-6.sv.md?raw';
  import Part7EnRaw from './sections/07-part-7.en.md?raw';
  import Part7SvRaw from './sections/07-part-7.sv.md?raw';
  import Part8EnRaw from './sections/08-part-8.en.md?raw';
  import Part8SvRaw from './sections/08-part-8.sv.md?raw';

  import AppendixAEnRaw from './sections/09-appendix-a.en.md?raw';
  import AppendixASvRaw from './sections/09-appendix-a.sv.md?raw';
  import AppendixBEnRaw from './sections/09-appendix-b.en.md?raw';
  import AppendixBSvRaw from './sections/09-appendix-b.sv.md?raw';
  import AppendixCEnRaw from './sections/09-appendix-c.en.md?raw';
  import AppendixCSvRaw from './sections/09-appendix-c.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText = {
    en: {
      'executive-summary': ExecSummaryEnRaw,
      'part-1': Part1EnRaw,
      'part-2': Part2EnRaw,
      'part-3': Part3EnRaw,
      'part-4': Part4EnRaw,
      'part-5': Part5EnRaw,
      'part-6': Part6EnRaw,
      'part-7': Part7EnRaw,
      'part-8': Part8EnRaw,
      'appendix-a': AppendixAEnRaw,
      'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw,
    },
    sv: {
      'executive-summary': ExecSummarySvRaw,
      'part-1': Part1SvRaw,
      'part-2': Part2SvRaw,
      'part-3': Part3SvRaw,
      'part-4': Part4SvRaw,
      'part-5': Part5SvRaw,
      'part-6': Part6SvRaw,
      'part-7': Part7SvRaw,
      'part-8': Part8SvRaw,
      'appendix-a': AppendixASvRaw,
      'appendix-b': AppendixBSvRaw,
      'appendix-c': AppendixCSvRaw,
    }
  };

  // --- 3. CONTENT STRUCTURE (IDs and titles) ---
  const contentMap = [
    { id: 'executive-summary', titleEn: 'Executive Summary',                                                titleSv: 'Sammanfattning' },
    { id: 'part-1',             titleEn: 'Part I: The Boundary Problem',                                     titleSv: 'Del I: Gränsproblemet' },
    { id: 'part-2',             titleEn: 'Part II: Formal Framework',                                        titleSv: 'Del II: Formellt ramverk' },
    { id: 'part-3',             titleEn: 'Part III: Failure Modes',                                          titleSv: 'Del III: Felmoder' },
    { id: 'part-4',             titleEn: 'Part IV: Simulation: Boundary Mismatch and Stability',             titleSv: 'Del IV: Simulering: Gränsmatchningsfel och stabilitet' },
    { id: 'part-5',             titleEn: 'Part V: Empirical Illustrations',                                  titleSv: 'Del V: Empiriska illustrationer' },
    { id: 'part-6',             titleEn: 'Part VI: Design Principles',                                       titleSv: 'Del VI: Designprinciper' },
    { id: 'part-7',             titleEn: 'Part VII: Connection to the Series',                               titleSv: 'Del VII: Koppling till serien' },
    { id: 'part-8',             titleEn: 'Part VIII: Limitations and Conclusion',                            titleSv: 'Del VIII: Begränsningar och slutsats' },
    { id: 'appendix-a',         titleEn: 'Appendix A: M-Δ Derivation and Stability Conditions',              titleSv: 'Appendix A: Härledning av M-Δ och stabilitetsvillkor' },
    { id: 'appendix-b',         titleEn: 'Appendix B: Simulation Specification',                             titleSv: 'Appendix B: Simuleringsspecifikation' },
    { id: 'appendix-c',         titleEn: 'Appendix C: Case Coding Notes',                                    titleSv: 'Appendix C: Kodningsanteckningar för fallen' },
  ];

  // --- 4. TRANSLATIONS ---
  const ui = {
    en: {
      tag: 'Working Paper · Series XII',
      seriesNote: 'This is the twelfth paper in the Governance as Engineering series. It opens Cycle Two.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator',          label: 'Paper I: Governance Stability Simulator →' },
        { href: '/working-papers/fractality-as-stability',                 label: 'Paper II: Fractality as Stability →' },
        { href: '/working-papers/observability-democracy-connection',      label: 'Paper III: The Observability-Democracy Connection →' },
        { href: '/working-papers/requisite-variety-and-the-commons',       label: 'Paper IV: Requisite Variety and the Commons →' },
        { href: '/working-papers/coordination-failure-tax',                label: 'Paper V: The Coordination Failure Tax →' },
        { href: '/working-papers/the-variety-gap',                         label: 'Paper VI: The Variety Gap →' },
        { href: '/working-papers/architecture-of-governance-failure',      label: 'Paper VII: The Architecture of Governance Failure →' },
        { href: '/working-papers/measuring-the-variety-gap',               label: 'Paper VIII: Measuring the Variety Gap →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Paper IX: The Political Economy of Requisite Governance →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Paper X: Requisite Observer Diversity →' },
        { href: '/working-papers/reform-exhaustion',                       label: 'Paper XI: Reform Exhaustion →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/adaptation-bottleneck', label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor', label: 'Paper XVII: The Certification Floor →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'This paper asks whether a controller with perfect internal observation and actuation can still fail — and answers yes, if it has drawn the wrong system boundary. When causally relevant dynamics fall outside a controller\'s jurisdictional perimeter, they become unmodeled disturbances that feed back through the M-Δ loop, destabilising the system from outside any internal dashboard\'s view.',
      relatedWork: 'Related work:',
      architectureLink: 'The Architecture of Stability',
      gsiLink: 'Global Subsidiarity Index',
      contextOutro: 'The paper introduces the boundary mismatch index B, the pooling paradox, and the Information-Actuation Frontier connecting boundary selection to delegation depth. The design response is polycentric, functionally specific jurisdictional geometries that match governance scale to the coupling structure of the dynamics they govern. Paper XII opens Cycle Two of the series.',
      allWorkingpapers: '← All Working Papers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Serie XII',
      seriesNote: 'Detta är den tolfte rapporten i serien Styrning som ingenjörskonst. Den inleder Cykel Två.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator',          label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/working-papers/fractality-as-stability',                 label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/working-papers/observability-democracy-connection',      label: 'Rapport III: Observerbarhets-demokratikopplingen →' },
        { href: '/working-papers/requisite-variety-and-the-commons',       label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/working-papers/coordination-failure-tax',                label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/working-papers/the-variety-gap',                         label: 'Rapport VI: Varietetsgapet →' },
        { href: '/working-papers/architecture-of-governance-failure',      label: 'Rapport VII: Styrningsmisslyckandets arkitektur →' },
        { href: '/working-papers/measuring-the-variety-gap',               label: 'Rapport VIII: Att mäta varietetsgapet →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Rapport IX: Den politiska ekonomin för nödvändig styrning →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Rapport X: Nödvändig observatörsmångfald →' },
        { href: '/working-papers/reform-exhaustion',                       label: 'Rapport XI: Reformutmattning →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
        { href: '/working-papers/adaptation-bottleneck', label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor', label: 'Rapport XVII: Certifieringsgolvet →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Denna rapport frågar om en kontrollant med perfekt intern observation och aktivering ändå kan misslyckas — och svarar ja, om den har dragit fel systemgräns. När kausalt relevanta dynamiker faller utanför kontrollantens jurisdiktionella gräns blir de omodellerade störningar som återkopplas genom M-Δ-loopen och destabiliserar systemet utom synhåll för interna instrumentpaneler.',
      relatedWork: 'Relaterat arbete:',
      architectureLink: 'Stabilitetens arkitektur',
      gsiLink: 'Global subsidiaritetsindex',
      contextOutro: 'Rapporten introducerar gränsmatchningsindexet B, poolningsparadoxen och informations-aktiveringsfronten som kopplar gränsval till delegationsdjup. Designsvaret är polycentriska, funktionsspecifika jurisdiktionella geometrier som matchar styrningsskalan till kopplingsstrukturen hos de dynamiker som styrs. Rapport XII inleder seriens andra cykel.',
      allWorkingpapers: '← Alla arbetsdokument',
      share: 'Dela detta dokument',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      viewCode: 'Visa källkod',
      citeThis: 'Citera detta arbete',
    },
  };

  const metadata = {
    en: {
      title: 'Boundary Selection Deficits: How the Wrong System Boundary Defeats Perfect Internal Governance',
      subtitle: 'How the Wrong System Boundary Defeats Perfect Internal Governance',
      description: 'A controller with perfect internal observation and actuation can still fail if its boundary excludes causally relevant dynamics. Models the M-Δ loop, the pooling paradox, and the Information-Actuation Frontier. With simulation and empirical illustrations. Opens Cycle Two of the Governance as Engineering series.',
    },
    sv: {
      title: 'Gränsdragningsunderskott: Hur fel systemgräns besegrar perfekt intern styrning',
      subtitle: 'Hur fel systemgräns besegrar perfekt intern styrning',
      description: 'En kontrollant med perfekt intern observation och aktivering kan ändå misslyckas om dess gräns utesluter kausalt relevanta dynamiker. Modellerar M-Δ-loopen, poolningsparadoxen och informations-aktiveringsfronten. Med simulering och empiriska illustrationer. Inleder Cykel Två i serien Styrning som ingenjörskonst.',
    },
  };

  // --- 5. REACTIVE LOGIC ---

  let activeSection = $state('executive-summary');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'boundary-selection-deficits-sv.pdf' : 'boundary-selection-deficits.pdf');

  function sectionTitle(section: { id: string; titleEn: string; titleSv: string }) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  function sectionHtml(section: { id: string }): string {
    const lang = currentLang as 'en' | 'sv';
    const md = rawText[lang][section.id] ?? '';
    const content = md.replace(/^---[\s\S]*?---\n/, '');
    return marked.parse(content, { breaks: false, gfm: true }) as string;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function copyCitation() {
    const citation = currentLang === 'sv'
      ? `Holmström, B. K. (2026). Gränsdragningsunderskott: Hur fel systemgräns besegrar perfekt intern styrning. Styrning som ingenjörskonst, Rapport XII.`
      : `Holmström, B. K. (2026). Boundary Selection Deficits: How the Wrong System Boundary Defeats Perfect Internal Governance. Governance as Engineering, Paper XII.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | GaE Working Paper"
  description={meta.description}
  type="article"
  publishedTime="2026-06"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWorkingpapers}
      </a>
    </div>

    <!-- Series note -->
    <div class="mb-6 p-3 rounded-lg text-xs leading-relaxed border border-[var(--color-separator)] opacity-70">
      {t.seriesNote}
      <div class="mt-2 space-y-1">
        {#each t.seriesLinks as link}
          <a href={link.href}
            class="block font-medium hover:opacity-100"
            style="color: var(--color-page-accent);">
            {link.label}
          </a>
        {/each}
      </div>
    </div>

    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/working-papers/{pdfFilename}"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.downloadPDF}
        </a>
        <a
          href="https://github.com/BjornKennethHolmstrom/gae-governance-simulator"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          {t.viewCode}
        </a>
        <button
          onclick={copyCitation}
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline w-full text-left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {t.citeThis}
        </button>
      </div>
    </div>

    <!-- Navigation -->
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

  <!-- Main Content -->
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

    <!-- Context Card -->
    <div class="mb-16 p-8 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-sm">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.contextTitle}</h3>
      <div class="prose prose-sm max-w-none" style="--tw-prose-body: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
        <p class="text-base">{t.contextIntro}</p>

        <div class="flex flex-wrap gap-4 my-6">
          <span class="text-sm font-bold opacity-70">{t.relatedWork}</span>
          <a
            href="/working-papers/architecture-of-stability"
            class="text-sm hover:underline"
            style="color: var(--color-page-accent);"
          >
            {t.architectureLink}
          </a>
          <a
            href="https://www.svensksubsidiaritet.se/ramverk/gsi/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-sm hover:underline"
            style="color: var(--color-page-accent);"
          >
            {t.gsiLink}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <p class="mt-4 opacity-80 leading-relaxed">
          {t.contextOutro}
        </p>
      </div>
    </div>

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
            {@html sectionHtml(section)}
          </article>
        </div>
        {#if section.id !== 'appendix-c'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share Buttons -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
