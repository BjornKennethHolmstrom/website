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
    { id: 'executive-summary', titleEn: 'Executive Summary',                         titleSv: 'Sammanfattning',                              compEn: ExecutiveSummaryEn, compSv: ExecutiveSummarySv },
    { id: 'part-1',            titleEn: 'Part I: The Feedback Loop Problem',          titleSv: 'Del I: Återkopplingsproblemet',                compEn: Part1En,            compSv: Part1Sv            },
    { id: 'part-2',            titleEn: 'Part II: Requisite Variety',                 titleSv: 'Del II: Nödvändig variation',                 compEn: Part2En,            compSv: Part2Sv            },
    { id: 'part-3',            titleEn: 'Part III: The Simulation',                   titleSv: 'Del III: Simuleringen',                       compEn: Part3En,            compSv: Part3Sv            },
    { id: 'part-4',            titleEn: 'Part IV: Structural Observations',           titleSv: 'Del IV: Strukturella observationer',           compEn: Part4En,            compSv: Part4Sv            },
    { id: 'part-5',            titleEn: 'Part V: Limitations',                        titleSv: 'Del V: Begränsningar',                        compEn: Part5En,            compSv: Part5Sv            },
    { id: 'part-6',            titleEn: 'Part VI: Implications',                      titleSv: 'Del VI: Implikationer',                       compEn: Part6En,            compSv: Part6Sv            },
    { id: 'part-7',            titleEn: 'Part VII: Conclusion',                       titleSv: 'Del VII: Slutsats',                           compEn: Part7En,            compSv: Part7Sv            },
    { id: 'appendix-a',        titleEn: 'Appendix A: Mathematical Formulations',      titleSv: 'Appendix A: Matematiska formuleringar',       compEn: AppendixAEn,        compSv: AppendixASv        },
    { id: 'appendix-b',        titleEn: 'Appendix B: Code and Reproduction',          titleSv: 'Appendix B: Kod och reproducerbarhet',        compEn: AppendixBEn,        compSv: AppendixBSv        },
    { id: 'appendix-c',        titleEn: 'Appendix C: References and Sources',         titleSv: 'Appendix C: Referenser och källor',           compEn: AppendixCEn,        compSv: AppendixCSv        },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Whitepaper · Series IV',
      seriesNote: 'This is the fourth paper in the Governance as Engineering series.',
      seriesLinks: [
        { href: '/whitepapers/governance-stability-simulator',      label: 'Paper I: Governance Stability Simulator →' },
        { href: '/whitepapers/fractality-as-stability',             label: 'Paper II: Fractality as Stability →' },
        { href: '/whitepapers/observability-democracy-connection',  label: 'Paper III: The Observability-Democracy Connection →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'The tragedy of the commons has a standard explanation: individual incentives to extract exceed collective incentives to conserve. This paper offers a different diagnosis: the tragedy of the commons is an architectural failure before it is a motivational one. Individual extraction decisions made without feedback from the collective resource state constitute an open-loop system — an actuator with no sensor.',
      contextOutro: 'Ashby\'s Law of Requisite Variety is the central tool: a governance system must observe at least as many signal dimensions as the resource system has disturbance bands. Physical, seasonal, and relational proximity is the mechanism by which communities acquire that variety. State management is shown to perform worse than open access. Recognition of indigenous resource sovereignty is not an act of cultural generosity — it is a structural observation about which governance systems have the requisite variety to do the job.',
      allWhitepapers: '← All Whitepapers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Vitbok · Serie IV',
      seriesNote: 'Detta är den fjärde rapporten i serien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/whitepapers/governance-stability-simulator',     label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/whitepapers/fractality-as-stability',            label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/whitepapers/observability-democracy-connection', label: 'Rapport III: Observerbarhets-demokratikopplingen →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Allmänningens tragedi har en standardförklaring: individuella incitament att utvinna överstiger kollektiva incitament att bevara. Denna vitbok erbjuder en annan diagnos: allmänningens tragedi är ett arkitektoniskt misslyckande innan det är ett motivationsmisslyckande. Individuella utvinningsbeslut utan återkoppling från det kollektiva resurstillståndet utgör ett öppet system — ett styrorgan utan sensor.',
      contextOutro: 'Ashbys lag om nödvändig variation är det centrala verktyget: ett styrningssystem måste observera minst lika många signaldimensioner som resurssystemet har störningsband. Fysisk, säsongsmässig och relationell närhet är mekanismen genom vilken samhällen förvärvar denna variation. Statlig förvaltning visas prestera sämre än fri tillgång. Erkännandet av ursprungsbefolkningars resurssouveränitet är inte en akt av kulturell generositet — det är en strukturell observation om vilka styrningssystem som har den nödvändiga variationen för att utföra arbetet.',
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
      title: 'Requisite Variety and the Commons',
      subtitle: 'Why Proximity Governs: Observation Dimensionality and Resource Sovereignty',
      description: 'The tragedy of the commons is an architectural failure — a missing feedback loop — not a motivational one. Ashby\'s Law of Requisite Variety determines which governance systems can stabilize renewable resources. State management performs worse than open access. Indigenous resource sovereignty is a structural engineering requirement. Paper IV in the Governance as Engineering series.',
    },
    sv: {
      title: 'Nödvändig variation och allmänningen',
      subtitle: 'Varför närhet styr: Observationsdimensionalitet och resurssouveränitet',
      description: 'Allmänningens tragedi är ett arkitektoniskt misslyckande — en saknad återkopplingsslinga — inte ett motivationsmisslyckande. Ashbys lag om nödvändig variation avgör vilka styrningssystem som kan stabilisera förnybara resurser. Statlig förvaltning presterar sämre än fri tillgång. Ursprungsbefolkningars resurssouveränitet är ett strukturellt ingenjörskrav. Rapport IV i serien Styrning som ingenjörskonst.',
    },
  };

  // --- 4. REACTIVE LOGIC ---

  let activeSection = $state('executive-summary');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = 'requisite-variety-and-the-commons.pdf';

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
      ? `Holmström, B. K. (2026). Nödvändig variation och allmänningen: Varför närhet styr. GGF Vitboksserie, rapport IV.`
      : `Holmström, B. K. (2026). Requisite Variety and the Commons: Why Proximity Governs. GGF Whitepaper Series, Paper IV.`;
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
