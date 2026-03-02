<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT MARKDOWN SECTIONS ---

  import AbstractEn from './sections/abstract.md';
  import AbstractSv from './sections/abstract-sv.md';

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

  // --- 2. CONTENT STRUCTURE ---

  const contentMap = [
    { id: 'abstract', titleEn: 'Abstract',                                           titleSv: 'Sammanfattning',                                   compEn: AbstractEn, compSv: AbstractSv },
    { id: 'part-1',   titleEn: 'Part I: What the Series Established',                titleSv: 'Del I: Vad serien fastslår',                        compEn: Part1En,    compSv: Part1Sv    },
    { id: 'part-2',   titleEn: 'Part II: Why Failures Compound',                     titleSv: 'Del II: Varför misslyckanden förstärker varandra',  compEn: Part2En,    compSv: Part2Sv    },
    { id: 'part-3',   titleEn: 'Part III: The GGF as a Structural Response',         titleSv: 'Del III: GGF som strukturellt svar',                compEn: Part3En,    compSv: Part3Sv    },
    { id: 'part-4',   titleEn: 'Part IV: Transition Pathways',                       titleSv: 'Del IV: Övergångsvägar',                            compEn: Part4En,    compSv: Part4Sv    },
    { id: 'part-5',   titleEn: 'Part V: What Remains Outside the Framework',         titleSv: 'Del V: Vad som ligger utanför ramverket',           compEn: Part5En,    compSv: Part5Sv    },
    { id: 'part-6',   titleEn: 'Part VI: Conclusion',                                titleSv: 'Del VI: Slutsats',                                  compEn: Part6En,    compSv: Part6Sv    },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Whitepaper · Series V',
      seriesNote: 'This is the fifth paper in the Governance as Engineering series.',
      seriesLinks: [
        { href: '/whitepapers/governance-stability-simulator',     label: 'Paper I: Governance Stability Simulator →' },
        { href: '/whitepapers/fractality-as-stability',            label: 'Paper II: Fractality as Stability →' },
        { href: '/whitepapers/observability-democracy-connection', label: 'Paper III: The Observability-Democracy Connection →' },
        { href: '/whitepapers/requisite-variety-and-the-commons', label: 'Paper IV: Requisite Variety and the Commons →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'Papers I–IV establish four distinct structural failure modes in governance architecture. Each paper demonstrates the same underlying mechanism in a different domain: aggregation destroys information, destroyed information cannot be recovered downstream, and institutional quality operates on the signal after it arrives — it cannot help if the signal is gone.',
      contextOutro: 'This paper makes explicit what the series implies but never states: these failure modes do not add — they multiply. A governance system exhibiting all four simultaneously is not four times worse than a well-designed one. It is categorically incapable of the functions it claims to perform. The paper introduces the coordination failure tax as a formal concept, shows how it compounds, maps the four structural constraints to the GGF\'s design principles, and identifies which categories of reform are architecturally capable of reducing the tax — and which are not.',
      allWhitepapers: '← All Whitepapers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Vitbok · Serie V',
      seriesNote: 'Detta är den femte rapporten i serien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/sv/whitepapers/governance-stability-simulator',     label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/sv/whitepapers/fractality-as-stability',            label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/sv/whitepapers/observability-democracy-connection', label: 'Rapport III: Observerbarhets-demokratikopplingen →' },
        { href: '/sv/whitepapers/requisite-variety-and-the-commons', label: 'Rapport IV: Nödvändig variation och allmänningen →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Rapporterna I–IV fastslår fyra distinkta strukturella felmönster i styrningsarkitektur. Varje rapport demonstrerar samma underliggande mekanism i ett annat domän: aggregering förstör information, förstörd information kan inte återhämtas nedströms, och institutionell kvalitet verkar på signalen efter att den anlänt — den kan inte hjälpa om signalen är borta.',
      contextOutro: 'Denna rapport gör explicit vad serien antyder men aldrig uttalar: dessa felmönster adderar inte — de multiplicerar. Ett styrningssystem som uppvisar alla fyra samtidigt är inte fyra gånger sämre än ett väldesignat system. Det är kategoriskt oförmöget att utföra de funktioner det påstår sig utföra. Rapporten introducerar samordningsmisslyckandets skatt som ett formellt begrepp, visar hur den förstärks, kartlägger de fyra strukturella begränsningarna mot GGF:s designprinciper och identifierar vilka reformkategorier som är arkitektoniskt kapabla att minska skatten — och vilka som inte är det.',
      allWhitepapers: '← Alla vitböcker',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      citeThis: 'Citera detta arbete',
      share: 'Dela detta dokument',
    },
  };

  const metadata = {
    en: {
      title: 'The Coordination Failure Tax',
      subtitle: 'Architectural Compounding and the Path to Requisite Governance',
      description: 'Four governance failure modes — spatial blindness, frequency gaps, preference invisibility, observational inadequacy — do not add. They multiply. This paper introduces the coordination failure tax, maps the compounding mechanism formally, grounds it in existing empirical data, and shows how the Global Governance Frameworks constitute a structural response to all four diagnosed constraints simultaneously. Paper V in the Governance as Engineering series.',
    },
    sv: {
      title: 'Samordningsmisslyckandets skatt',
      subtitle: 'Arkitektonisk förstärkning och vägen mot nödvändig styrning',
      description: 'Fyra styrningsfelmönster — rumslig blindhet, frekvensluckor, preferensosynlighet, observationsotillräcklighet — adderar inte. De multiplicerar. Denna rapport introducerar samordningsmisslyckandets skatt, kartlägger förstärkningsmekanismen formellt, förankrar den i befintliga empiriska data och visar hur Global Governance Frameworks utgör ett strukturellt svar på alla fyra diagnosticerade begränsningar samtidigt. Rapport V i serien Styrning som ingenjörskonst.',
    },
  };

  // --- 4. REACTIVE LOGIC ---

  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'coordination-failure-tax-sv.pdf' : 'coordination-failure-tax.pdf');

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
      ? `Holmström, B. K. (2026). Samordningsmisslyckandets skatt: Arkitektonisk förstärkning och vägen mot nödvändig styrning. GGF Vitboksserie, rapport V.`
      : `Holmström, B. K. (2026). The Coordination Failure Tax: Architectural Compounding and the Path to Requisite Governance. GGF Whitepaper Series, Paper V.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | GGF Whitepaper"
  description={meta.description}
  type="article"
  publishedTime="2026-03"
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

    <!-- Downloads -->
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
              --tw-prose-hr: var(--color-separator);
            ">
            <svelte:component this={sectionComp(section)} />
          </article>
        </div>
        {#if section.id !== 'part-6'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
