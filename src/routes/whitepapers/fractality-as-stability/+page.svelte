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
      titleEn: 'Part I: The Multi-Scale Problem',
      titleSv: 'Del I: Flerskaliga problemet',
      compEn: Part1En,
      compSv: Part1Sv,
    },
    {
      id: 'part-2',
      titleEn: 'Part II: Fractal Architecture as the Formal Solution',
      titleSv: 'Del II: Fraktal arkitektur som den formella lösningen',
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
      titleEn: 'Appendix C: Disturbance Timescale Reference Table',
      titleSv: 'Appendix C: Referenstabell för störningstidsskalor',
      compEn: AppendixCEn,
      compSv: AppendixCSv,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: References and Sources',
      titleSv: 'Appendix D: Referenser och källor',
      compEn: AppendixDEn,
      compSv: AppendixDSv,
    },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Whitepaper · Series II',
      seriesNote: 'This is the second paper in the Governance as Engineering series.',
      seriesLink: 'Read Paper I: Governance Stability Simulator →',
      contextTitle: 'Context',
      contextIntro: 'This paper extends the control-theoretic governance framework from paper one to multi-scale disturbance environments. The core finding: no single-scale controller can stabilize a system facing simultaneous fast, medium, and slow disturbances. Fractal architectures — nested hierarchies of controllers matched to their disturbance timescale — are the stability-optimal solution.',
      contextOutro: 'The frequency-latency constraint (f_max ≈ 1/2τ) places a hard ceiling on what any single-scale controller can achieve. Fractality closes all frequency gaps simultaneously. This is not a governance preference. It is a structural result.',
      allWhitepapers: '← All Whitepapers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Vitbok · Serie II',
      seriesNote: 'Detta är den andra rapporten i serien Styrning som ingenjörskonst.',
      seriesLink: 'Läs rapport I: Styrstabilitetssimulatorn →',
      contextTitle: 'Kontext',
      contextIntro: 'Denna vitbok utvidgar det reglerteoretiska styrningsramverket från rapport ett till flerskaliga störningsmiljöer. Kärnresultatet: ingen enskild skalregulator kan stabilisera ett system som möter samtidiga snabba, mellanliggande och långsamma störningar. Fraktala arkitekturer — nästlade hierarkier av regulatorer anpassade till sin störningstidsskala — är den stabilitetsoptimala lösningen.',
      contextOutro: 'Frekvens-latensbegränsningen (f_max ≈ 1/2τ) sätter ett hårt tak för vad en enskild skalregulator kan uppnå. Fraktalitet stänger alla frekvensgap samtidigt. Detta är inte en styrningspreferens. Det är ett strukturellt resultat.',
      allWhitepapers: '← Alla vitböcker',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      viewCode: 'Visa källkod',
      citeThis: 'Citera detta arbete',
      share: 'Dela detta dokument',
    },
  };

  const metadata = {
    en: {
      title: 'Fractality as Stability',
      subtitle: 'A Multi-Scale Control-Theoretic Proof',
      description: 'Extending the governance-as-engineering framework to multi-scale disturbance environments. No single-scale controller can stabilize a multi-frequency disturbance environment. Fractal architectures are the stability-optimal solution — for the same reasons the nervous system, immune system, and internet are fractal.',
    },
    sv: {
      title: 'Fraktalitet som stabilitet',
      subtitle: 'Ett flerskaligt reglerteoretiskt bevis',
      description: 'Utvidgar styrning-som-ingenjörskonst-ramverket till flerskaliga störningsmiljöer. Ingen enskild skalregulator kan stabilisera en flerfrekvent störningsmiljö. Fraktala arkitekturer är den stabilitetsoptimala lösningen — av samma skäl som nervsystemet, immunsystemet och internet är fraktala.',
    },
  };

  // --- 4. REACTIVE LOGIC ---

  let activeSection = $state('executive-summary');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = 'fractality-as-stability.pdf';

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
      ? `Holmström, B. K. (2026). Fraktalitet som stabilitet: Ett flerskaligt reglerteoretiskt bevis. GGF Vitboksserie, rapport II.`
      : `Holmström, B. K. (2026). Fractality as Stability: A Multi-Scale Control-Theoretic Proof. GGF Whitepaper Series, Paper II.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | GGF Whitepaper"
  description={meta.description}
  type="article"
  publishedTime="2026-02"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/whitepapers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWhitepapers}
      </a>
    </div>

    <!-- Series note -->
    <div class="mb-6 p-3 rounded-lg text-xs leading-relaxed border border-[var(--color-separator)] opacity-70">
      {t.seriesNote}
      <a href="/whitepapers/governance-stability-simulator"
        class="block mt-2 font-medium hover:opacity-100"
        style="color: var(--color-page-accent);">
        {t.seriesLink}
      </a>
    </div>

    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/whitepapers/{pdfFilename}"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.downloadPDF}
        </a>
        <a
          href="https://github.com/pwnytale/ggf-governance-simulator"
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
        {#if section.id !== 'appendix-d'}
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
