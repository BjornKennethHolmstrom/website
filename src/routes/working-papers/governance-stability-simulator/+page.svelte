<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT MARKDOWN SECTIONS ---

  import ExecutiveSummaryEn from './sections/executive-summary.md';
  import ExecutiveSummarySv from './sections/executive-summary-sv.md';

  import Part1En from './sections/part-1.md';
  import Part1Sv from './sections/part-1-sv.md';

  import Part2En from './sections/part-2.md';
  import Part2Sv from './sections/part-2-sv.md';

  import Part3En from './sections/part-3.md';
  import Part3Sv from './sections/part-3-sv.md';

  import Part4En from './sections/part-4.md';
  import Part4Sv from './sections/part-4-sv.md';

  import Part5En from './sections/part-5.md';
  import Part5Sv from './sections/part-5-sv.md';

  import Part6En from './sections/part-6.md';
  import Part6Sv from './sections/part-6-sv.md';

  import Part7En from './sections/part-7.md';
  import Part7Sv from './sections/part-7-sv.md';

  import AppendixAEn from './sections/appendix-a.md';
  import AppendixASv from './sections/appendix-a-sv.md';

  import AppendixBEn from './sections/appendix-b.md';
  import AppendixBSv from './sections/appendix-b-sv.md';

  import AppendixCEn from './sections/appendix-c.md';
  import AppendixCSv from './sections/appendix-c-sv.md';

  // --- 2. CONTENT STRUCTURE ---

  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleSv: 'Sammanfattning',
      compEn: ExecutiveSummaryEn,
      compSv: ExecutiveSummarySv,
    },
    {
      id: 'part-1',
      titleEn: 'Part I: Governance as a Feedback System',
      titleSv: 'Del I: Styrning som ett återkopplingssystem',
      compEn: Part1En,
      compSv: Part1Sv,
    },
    {
      id: 'part-2',
      titleEn: 'Part II: A Formal Grammar for Governance',
      titleSv: 'Del II: En formell grammatik för styrning',
      compEn: Part2En,
      compSv: Part2Sv,
    },
    {
      id: 'part-3',
      titleEn: 'Part III: The Simulation',
      titleSv: 'Del III: Simuleringen',
      compEn: Part3En,
      compSv: Part3Sv,
    },
    {
      id: 'part-4',
      titleEn: 'Part IV: Structural Observations',
      titleSv: 'Del IV: Strukturella observationer',
      compEn: Part4En,
      compSv: Part4Sv,
    },
    {
      id: 'part-5',
      titleEn: 'Part V: Limitations',
      titleSv: 'Del V: Begränsningar',
      compEn: Part5En,
      compSv: Part5Sv,
    },
    {
      id: 'part-6',
      titleEn: 'Part VI: Implications',
      titleSv: 'Del VI: Implikationer',
      compEn: Part6En,
      compSv: Part6Sv,
    },
    {
      id: 'part-7',
      titleEn: 'Part VII: Conclusion',
      titleSv: 'Del VII: Slutsats',
      compEn: Part7En,
      compSv: Part7Sv,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Mathematical Formulations',
      titleSv: 'Appendix A: Matematiska formuleringar',
      compEn: AppendixAEn,
      compSv: AppendixASv,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: Code and Reproduction',
      titleSv: 'Appendix B: Kod och reproducerbarhet',
      compEn: AppendixBEn,
      compSv: AppendixBSv,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: References and Sources',
      titleSv: 'Appendix C: Referenser och källor',
      compEn: AppendixCEn,
      compSv: AppendixCSv,
    },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Working Paper · Series I',
      seriesNote: 'This is the first paper in the Governance as Engineering series.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization', label: 'Paper 0: Below the Factorization →' },
        { href: '/working-papers/fractality-as-stability',              label: 'Paper II: Fractality as Stability →' },
        { href: '/working-papers/observability-democracy-connection',   label: 'Paper III: The Observability-Democracy Connection →' },
        { href: '/working-papers/requisite-variety-and-the-commons',    label: 'Paper IV: Requisite Variety and the Commons →' },
        { href: '/working-papers/coordination-failure-tax', label: 'Paper V: The Coordination Failure Tax →' },
        { href: '/working-papers/the-variety-gap', label: 'Paper VI: The Variety Gap →' },
        { href: '/working-papers/architecture-of-governance-failure', label: 'Paper VII: The Architecture of Governance Failure →' },
        { href: '/working-papers/measuring-the-variety-gap', label: 'Paper VIII: Measuring the Variety Gap →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Paper IX: The Political Economy of Requisite Governance →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Paper X: Requisite Observer Diversity →' },
        { href: '/working-papers/reform-exhaustion', label: 'Paper XI: Reform Exhaustion →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/adaptation-bottleneck', label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor', label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability', label: 'Paper XVIII: The Boundary Instability Principle →' },
        { href: '/working-papers/governors-sentinels-bridges', label: 'Paper XIX: Governors, Sentinels, and Bridges →' },
        { href: '/working-papers/three-laws-from-one-bound', label: 'Paper XX: Three Laws from One Bound →' },
        { href: '/working-papers/when-to-stop-learning', label: 'Paper XXI: When to Stop Learning, and When to Stop →' },
        { href: '/working-papers/what-cannot-be-guaranteed', label: 'Paper XXII: What Cannot Be Guaranteed →' },
        { href: '/working-papers/shape-of-reform', label: 'Paper XXIII: The Shape of Reform →' },
        { href: '/working-papers/excitation-starved-observer', label: 'Paper XXIV: The Observer You Cannot Afford to Excite →' },
        { href: '/working-papers/where-reform-pushes-down', label: 'Paper XXV: Where Reform Pushes Down, Strategy Pushes Back →' },
        { href: '/working-papers/cost-of-returning', label: 'Paper XXVI: The Cost of Returning →' },
        { href: '/working-papers/requisite-alignment', label: 'Paper XXVII: Requisite Alignment →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'This paper introduces the Governance Stability Simulator — an open analytical framework that models governance institutions as feedback control systems. Using standard mathematics from control theory and cybernetics, it compares governance architectures by their measurable stability properties rather than their stated intentions.',
      relatedWork: 'Related work:',
      architectureLink: 'The Architecture of Stability',
      gsiLink: 'Global Subsidiarity Index',
      contextOutro: 'The core finding: high latency and low signal fidelity place hard mathematical ceilings on what any governance architecture can achieve. These ceilings are structural, not political.',
      allWorkingpapers: '← All Working Papers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Serie I',
      seriesNote: 'Detta är den första rapporten i serien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization', label: 'Rapport 0: Under faktoriseringen →' },
        { href: '/working-papers/fractality-as-stability',            label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/working-papers/observability-democracy-connection', label: 'Rapport III: Observerbarhets-demokratikopplingen →' },
        { href: '/working-papers/requisite-variety-and-the-commons',  label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/working-papers/coordination-failure-tax', label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/working-papers/the-variety-gap', label: 'Rapport VI: Varietetsgapet →' },
        { href: '/working-papers/architecture-of-governance-failure', label: 'Rapport VII: Styrningsmisslyckandets arkitektur →' },
        { href: '/working-papers/measuring-the-variety-gap', label: 'Rapport VIII: Att mäta varietetsgapet →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Rapport IX: Den politiska ekonomin för nödvändig styrning →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Rapport X: Nödvändig observatörsmångfald →' },
        { href: '/working-papers/reform-exhaustion', label: 'Rapport XI: Reformutmattning →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
        { href: '/working-papers/adaptation-bottleneck', label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor', label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability', label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
        { href: '/working-papers/governors-sentinels-bridges', label: 'Rapport XIX: Guvernörer, vaktposter och broar →' },
        { href: '/working-papers/three-laws-from-one-bound', label: 'Rapport XX: Tre lagar från en gräns →' },
        { href: '/working-papers/when-to-stop-learning', label: 'Rapport XXI: När man ska sluta lära sig, och när man ska sluta →' },
        { href: '/working-papers/what-cannot-be-guaranteed', label: 'Rapport XXII: Vad som inte kan garanteras →' },
        { href: '/working-papers/shape-of-reform', label: 'Rapport XXIII: Reformens form →' },
        { href: '/working-papers/excitation-starved-observer', label: 'Rapport XXIV: Observatören du inte har råd att excitera →' },
        { href: '/working-papers/where-reform-pushes-down', label: 'Rapport XXV: Där reform trycker ner, trycker strategi tillbaka →' },
        { href: '/working-papers/cost-of-returning', label: 'Rapport XXVI: Kostnaden för att återvända →' },
        { href: '/working-papers/requisite-alignment', label: 'Rapport XXVII: Nödvändig inriktning →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Denna vitbok introducerar styrstabilitetssimulatorn — ett öppet analytiskt ramverk som modellerar styrningsinstitutioner som återkopplingssystem. Med hjälp av standardmatematik från reglerteknik och cybernetik jämförs styrningsarkitekturer utifrån mätbara stabilitetsegenskaper snarare än uttalade intentioner.',
      relatedWork: 'Relaterat arbete:',
      architectureLink: 'Stabilitetens arkitektur',
      gsiLink: 'Global subsidiaritetsindex',
      contextOutro: 'Kärnresultatet: hög latens och låg signalfidelitet sätter hårda matematiska tak för vad en styrningsarkitektur kan uppnå. Dessa tak är strukturella, inte politiska.',
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
      title: 'Governance Stability Simulator',
      subtitle: 'A Control-Theoretic Model of Institutional Adaptation',
      description: 'An open analytical framework modelling governance as a feedback control system, demonstrating how latency and signal fidelity determine the structural stability limits of any institutional architecture.',
    },
    sv: {
      title: 'Styrstabilitetssimulatorn',
      subtitle: 'En reglerteoretisk modell för institutionell anpassning',
      description: 'Ett öppet analytiskt ramverk som modellerar styrning som ett återkopplingssystem och visar hur latens och signalfidelitet bestämmer de strukturella stabilitets­gränserna för varje institutionell arkitektur.',
    },
  };

  // --- 4. REACTIVE LOGIC ---

  let activeSection = $state('executive-summary');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'governance-stability-simulator-sv.pdf' : 'governance-stability-simulator.pdf');

  function sectionTitle(section: typeof contentMap[0]) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return currentLang === 'sv' ? section.compSv : section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function copyCitation() {
    const citation = currentLang === 'sv'
      ? `Holmström, B. K. (2026). Styrstabilitetssimulatorn: En reglerteoretisk modell för institutionell anpassning. Working paper series.`
      : `Holmström, B. K. (2026). Governance Stability Simulator: A Control-Theoretic Model of Institutional Adaptation. Working paper series.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }

  let seriesLinksOpen = $state(false);
</script>

<SEO
  title="{meta.title} | BKH Working paper"
  description={meta.description}
  type="article"
  publishedTime="2026-02"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWorkingpapers}
      </a>
    </div>

    <!-- Series note + collapsible links in one box -->
    <div class="mb-6 p-3 rounded-lg text-xs leading-relaxed border border-[var(--color-separator)] opacity-70">
      {t.seriesNote}

      <button
        onclick={() => seriesLinksOpen = !seriesLinksOpen}
        class="flex items-center gap-1.5 mt-2 text-xs font-medium hover:opacity-100 transition-opacity w-full text-left"
        style="color: var(--color-page-accent);"
      >
        <span>{seriesLinksOpen ? '▾' : '▸'}</span>
        <span>{seriesLinksOpen ? (currentLang === 'sv' ? 'Dölj papperslänkar' : 'Hide paper links') : (currentLang === 'sv' ? 'Visa papperslänkar' : 'Show paper links')}</span>
      </button>

      {#if seriesLinksOpen}
        <div class="mt-2 space-y-1">
          {#each t.seriesLinks as link}
            <a
              href={link.href}
              class="block font-medium hover:opacity-100"
              style="color: var(--color-page-accent);"
            >
              {link.label}
            </a>
          {/each}
        </div>
      {/if}
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
            <svelte:component this={sectionComp(section)} />
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
