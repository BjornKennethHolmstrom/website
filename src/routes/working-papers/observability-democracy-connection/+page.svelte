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

  import AppendixAEn from './sections/appendix-a.md';
  import AppendixASv from './sections/appendix-a-sv.md';

  import AppendixBEn from './sections/appendix-b.md';
  import AppendixBSv from './sections/appendix-b-sv.md';

  import AppendixCEn from './sections/appendix-c.md';
  import AppendixCSv from './sections/appendix-c-sv.md';

  import AppendixDEn from './sections/appendix-d.md';
  import AppendixDSv from './sections/appendix-d-sv.md';

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
      titleEn: 'Part I: The Observability Problem',
      titleSv: 'Del I: Observerbarhetsproblemet',
      compEn: Part1En,
      compSv: Part1Sv,
    },
    {
      id: 'part-2',
      titleEn: 'Part II: The Simulation',
      titleSv: 'Del II: Simuleringen',
      compEn: Part2En,
      compSv: Part2Sv,
    },
    {
      id: 'part-3',
      titleEn: 'Part III: Structural Observations',
      titleSv: 'Del III: Strukturella observationer',
      compEn: Part3En,
      compSv: Part3Sv,
    },
    {
      id: 'part-4',
      titleEn: 'Part IV: Limitations',
      titleSv: 'Del IV: Begränsningar',
      compEn: Part4En,
      compSv: Part4Sv,
    },
    {
      id: 'part-5',
      titleEn: 'Part V: Implications',
      titleSv: 'Del V: Implikationer',
      compEn: Part5En,
      compSv: Part5Sv,
    },
    {
      id: 'part-6',
      titleEn: 'Part VI: Conclusion',
      titleSv: 'Del VI: Slutsats',
      compEn: Part6En,
      compSv: Part6Sv,
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
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Endogenous Preferences: A Limitation Acknowledgment',
      titleSv: 'Appendix D: Endogena preferenser: Ett erkännande av en begränsning',
      compEn: AppendixDEn,
      compSv: AppendixDSv,
    },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Working Paper · Series III',
      seriesNote: 'This is the third paper in the Governance as Engineering series.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator', label: 'Paper I: Governance Stability Simulator →' },
        { href: '/working-papers/fractality-as-stability',        label: 'Paper II: Fractality as Stability →' },
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
      ],
      contextTitle: 'Context',
      contextIntro: 'Democratic governance claims to transmit citizen preferences into policy through representative institutions. This paper asks whether that transmission is technically possible — not whether institutions are well-designed, but whether the information-theoretic properties of representation chains allow citizen preferences to survive to the policy layer at all.',
      contextOutro: 'The finding: representation chains with three or more layers are constitutionally unobservable. Noise variance exceeds surviving signal variance. The policy layer cannot recover true citizen preferences regardless of institutional quality. This is a diagnosis, not a prescription.',
      allWorkingpapers: '← All Working Papers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Arbetsdokument · Serie III',
      seriesNote: 'Detta är den tredje rapporten i serien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator', label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/working-papers/fractality-as-stability',        label: 'Rapport II: Fraktalitet som stabilitet →' },
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
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Demokratisk styrning hävdar att medborgarnas preferenser förmedlas till politiken via representativa institutioner. Denna artikel frågar om den överföringen är tekniskt möjlig — inte om institutionerna är väldesignade, utan om representationskedjornas informationsteoretiska egenskaper tillåter medborgerliga preferenser att överleva till politiklagret.',
      contextOutro: 'Resultatet: representationskedjor med tre eller fler lager är konstitutionellt iakttagbara. Brusvariansen överstiger den kvarvarande signalvariansen. Politiklagret kan inte återskapa sanna medborgarpreferenser oavsett institutionell kvalitet. Detta är en diagnos, inte ett recept.',
      allWorkingpapers: '← Alla arbetsdokument',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      viewCode: 'Visa källkod',
      citeThis: 'Citera detta arbete',
      share: 'Dela detta dokument',
    },
  };

  const metadata = {
    en: {
      title: 'The Observability-Democracy Connection',
      subtitle: 'How Representation Chains Destroy the Signal They Are Meant to Transmit',
      description: 'Representation chains with three or more layers are constitutionally unobservable: noise variance exceeds surviving signal variance at the policy layer, and no institutional reform within the existing architecture can restore preference transmission fidelity. Paper III in the Governance as Engineering series.',
    },
    sv: {
      title: 'Observerbarhets-demokratikopplingen',
      subtitle: 'Hur representationskedjor förstör den signal de är avsedda att förmedla',
      description: 'Representationskedjor med tre eller fler lager är konstitutionellt icke-observerbara: brusvariansen överstiger den kvarvarande signalvariansen i politiklagret, och ingen institutionell reform inom den befintliga arkitekturen kan återställa preferensöverföringens trohet. Rapport III i serien Styrning som ingenjörskonst.',
    },
  };

  // --- 4. REACTIVE LOGIC ---

  let activeSection = $state('executive-summary');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'observability-democracy-connection-sv.pdf' : 'observability-democracy-connection.pdf');

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
      ? `Holmström, B. K. (2026). Observerbarhets-demokratikopplingen: Hur representationskedjor förstör den signal de är avsedda att förmedla. Serien Styrning som ingenjörskonst, rapport III.`
      : `Holmström, B. K. (2026). The Observability-Democracy Connection: How Representation Chains Destroy the Signal They Are Meant to Transmit. Governance as Engineering Series, Paper III.`;
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
      <p class="text-base mb-4" style="color: var(--color-page-text);">{t.contextIntro}</p>
      <p class="opacity-80 leading-relaxed" style="color: var(--color-page-text);">{t.contextOutro}</p>
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
