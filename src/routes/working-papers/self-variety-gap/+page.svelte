<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT MARKDOWN SECTIONS (Companion: Self-Variety Gap) ---

  import AbstractEn from './sections/abstract.en.md';
  import AbstractSv from './sections/abstract.sv.md';

  import Part1En from './sections/part-1.en.md';
  import Part1Sv from './sections/part-1.sv.md';

  import Part2En from './sections/part-2.en.md';
  import Part2Sv from './sections/part-2.sv.md';

  import Part3En from './sections/part-3.en.md';
  import Part3Sv from './sections/part-3.sv.md';

  import Part4En from './sections/part-4.en.md';
  import Part4Sv from './sections/part-4.sv.md';

  import Part5En from './sections/part-5.en.md';
  import Part5Sv from './sections/part-5.sv.md';

  import Part6En from './sections/part-6.en.md';
  import Part6Sv from './sections/part-6.sv.md';

  import Part7En from './sections/part-7.en.md';
  import Part7Sv from './sections/part-7.sv.md';

  import AppendixAEn from './sections/appendix-a.en.md';
  import AppendixASv from './sections/appendix-a.sv.md';

  import AppendixBEn from './sections/appendix-b.en.md';
  import AppendixBSv from './sections/appendix-b.sv.md';

  import AppendixCEn from './sections/appendix-c.en.md';
  import AppendixCSv from './sections/appendix-c.sv.md';

  import AppendixDEn from './sections/appendix-d.en.md';
  import AppendixDSv from './sections/appendix-d.sv.md';

  import AppendixEEn from './sections/appendix-e.en.md';
  import AppendixESv from './sections/appendix-e.sv.md';

  // --- 2. CONTENT STRUCTURE ---

  const contentMap = [
    {
      id: 'abstract',
      titleEn: 'Abstract',
      titleSv: 'Sammanfattning',
      compEn: AbstractEn,
      compSv: AbstractSv,
    },
    {
      id: 'part-1',
      titleEn: 'Part I: The Unifying Principle — How Narrow Values Destroy Self‑Observability',
      titleSv: 'Del I: Den enhetliga principen — Hur snäva värderingar förstör själv‑observerbarhet',
      compEn: Part1En,
      compSv: Part1Sv,
    },
    {
      id: 'part-2',
      titleEn: 'Part II: The Optimization Turn — Personal Values as Observation Architectures',
      titleSv: 'Del II: Optimeringens vändning — Personliga värderingar som observationsarkitekturer',
      compEn: Part2En,
      compSv: Part2Sv,
    },
    {
      id: 'part-3',
      titleEn: 'Part III: The Missing Dimensions — Truth, Meaning, Connection, and Health as Signal Channels',
      titleSv: 'Del III: De saknade dimensionerna — Sanning, mening, gemenskap och hälsa som signalkanaler',
      compEn: Part3En,
      compSv: Part3Sv,
    },
    {
      id: 'part-4',
      titleEn: 'Part IV: Evidence from Psychology and Neuroscience',
      titleSv: 'Del IV: Bevis från psykologi och neurovetenskap',
      compEn: Part4En,
      compSv: Part4Sv,
    },
    {
      id: 'part-5',
      titleEn: 'Part V: Meta‑Self‑Governance — Designing for Value Evolution',
      titleSv: 'Del V: Meta‑självstyrning — Design för värdeevolution',
      compEn: Part5En,
      compSv: Part5Sv,
    },
    {
      id: 'part-6',
      titleEn: 'Part VI: The Speculative Horizon — Transcendence, Nonduality, and the Limit G_self → 0',
      titleSv: 'Del VI: Den spekulativa horisonten — Transcendens, icke‑dualitet och gränsen G_self → 0',
      compEn: Part6En,
      compSv: Part6Sv,
    },
    {
      id: 'part-7',
      titleEn: 'Part VII: Conclusion — The Wholistic Imperative for the Self',
      titleSv: 'Del VII: Slutsats — Det holistiska imperativet för självet',
      compEn: Part7En,
      compSv: Part7Sv,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Formal Derivation of the Self‑Variety Gap (Static)',
      titleSv: 'Appendix A: Formell härledning av själv‑variationsgapet (statisk)',
      compEn: AppendixAEn,
      compSv: AppendixASv,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: Extension to Time‑Varying Personal Dimensionality',
      titleSv: 'Appendix B: Utvidgning till tidsvarierande personlig dimensionalitet',
      compEn: AppendixBEn,
      compSv: AppendixBSv,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: Psychological Evidence Summary Table',
      titleSv: 'Appendix C: Sammanfattningstabell över psykologiska bevis',
      compEn: AppendixCEn,
      compSv: AppendixCSv,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Simulation Architecture — The Self Stability Simulator',
      titleSv: 'Appendix D: Simuleringsarkitektur — Självstabilitetssimulatorn',
      compEn: AppendixDEn,
      compSv: AppendixDSv,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: Annotated Reference List',
      titleSv: 'Appendix E: Kommenterad referenslista',
      compEn: AppendixEEn,
      compSv: AppendixESv,
    },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Working Paper · Companion to the Governance as Engineering Series',
      companionLinksLabel: 'Self Series',
      companionLinks: [
        { href: '/working-papers/adaptive-self-governance', label: 'Self II: Adaptive Self Governance →' },
        { href: '/working-papers/self-operator', label: 'Self III: The Operator →'},
      ],
      seriesNote: 'This paper extends the Governance as Engineering framework to the architecture of the self. It is a companion to the main series.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization', label: 'Paper 0: Below the Factorization →' },
        { href: '/working-papers/governance-stability-simulator', label: 'Paper I: Governance Stability Simulator →' },
        { href: '/working-papers/fractality-as-stability', label: 'Paper II: Fractality as Stability →' },
        { href: '/working-papers/observability-democracy-connection', label: 'Paper III: The Observability‑Democracy Connection →' },
        { href: '/working-papers/requisite-variety-and-the-commons', label: 'Paper IV: Requisite Variety and the Commons →' },
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
      ],
      contextTitle: 'Context',
      contextIntro: 'This companion volume applies the variety‑gap framework — originally developed for governance institutions — to the individual self. The ego operates as a low‑dimensional controller; narrow personal values create blind spots that accumulate damage until crises (burnout, existential collapse) force recognition. Long‑term wellbeing requires not just broader values but a capacity for personal meta‑governance: consciously evolving one’s own value architecture.',
      contextOutro: 'Drawing on control theory, self‑regulation psychology, and contemplative neuroscience, the paper introduces the self‑variety gap (G_self) as a diagnostic for psychological blind spots and a guide to the practices — value audits, mindfulness, honest relationships — that can close it.',
      allWorkingpapers: '← All Working Papers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Arbetsdokument · Kompanjon till serien Styrning som ingenjörskonst',
      companionLinksLabel: 'Självserien',
      companionLinks: [
        { href: '/working-papers/adaptive-self-governance', label: 'Själv II: Adaptiv självstyrning →' },
        { href: '/working-papers/self-operator', label: 'Själv III: Operatören →'},
      ],
      seriesNote: 'Denna rapport utvidgar ramverket Styrning som ingenjörskonst till självets arkitektur. Den är en kompanjon till huvudserien.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization',           label: 'Rapport 0: Under faktoriseringen →' },
        { href: '/sv/working-papers/governance-stability-simulator', label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/sv/working-papers/fractality-as-stability', label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/sv/working-papers/observability-democracy-connection', label: 'Rapport III: Observerbarhets‑demokratikopplingen →' },
        { href: '/sv/working-papers/requisite-variety-and-the-commons', label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/sv/working-papers/coordination-failure-tax', label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/sv/working-papers/the-variety-gap', label: 'Rapport VI: Variationsgapet →' },
        { href: '/working-papers/architecture-of-governance-failure', label: 'Rapport VII: Styrningsmisslyckandets arkitektur →' },
        { href: '/working-papers/measuring-the-variety-gap', label: 'Rapport VIII: Att mäta varietetsgapet →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Rapport IX: Den politiska ekonomin för nödvändig styrning →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Rapport X: Nödvändig observatörsmångfald →' },
        { href: '/working-papers/reform-exhaustion', label: 'Rapport XI: Reformutmattning →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Denna kompanjonvolym tillämpar variationsgap-ramverket — ursprungligen utvecklat för styrningsinstitutioner — på det individuella självet. Egot fungerar som en lågdimensionell regulator; snäva personliga värderingar skapar blinda fläckar som ackumulerar skada tills kriser (utbrändhet, existentiell kollaps) tvingar fram insikt. Långsiktigt välbefinnande kräver inte bara bredare värderingar utan en förmåga till personlig meta-styrning: att medvetet utveckla sin egen värdearkitektur.',
      contextOutro: 'Med utgångspunkt i reglerteori, självregleringspsykologi och kontemplativ neurovetenskap introduceras själv-variationsgapet (G_self) som ett diagnostiskt verktyg för psykologiska blinda fläckar och en guide till de praktiker — värdegranskning, medveten närvaro, ärliga relationer — som kan minska det.',
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
      title: 'The Variety Gap in the Self',
      subtitle: 'What a Person Optimizes For Determines What They Can Perceive',
      description: 'Extends the Governance as Engineering framework from institutions to the self. The ego is a low‑dimensional controller; narrow personal values create blind spots that eventually return as crises. A companion to the Governance as Engineering series.',
    },
    sv: {
      title: 'Variationsgapet i självet',
      subtitle: 'Vad en person optimerar för avgör vad de kan uppfatta',
      description: 'Utvidgar ramverket Styrning som ingenjörskonst från institutioner till självet. Egot fungerar som en lågdimensionell regulator; snäva personliga värderingar skapar blinda fläckar som till slut återvänder som kriser. En kompanjon till serien Styrning som ingenjörskonst.',
    },
  };

  // --- 4. REACTIVE LOGIC ---

  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'self-variety-gap-sv.pdf' : 'self-variety-gap.pdf');

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
      ? `Holmström, B. K. (2026). Variationsgapet i självet: Vad en person optimerar för avgör vad de kan uppfatta. GGF Vitboksserie, kompanjonvolym.`
      : `Holmström, B. K. (2026). The Variety Gap in the Self: What a Person Optimizes For Determines What They Can Perceive. GaE Working Paper Series, companion volume.`;
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
  publishedTime="2026-05"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWorkingpapers}
      </a>
    </div>

    <!-- Companion note (Self I) -->
    <div class="mb-6 p-3 rounded-lg text-xs leading-relaxed border border-[var(--color-separator)] opacity-70">
      {t.companionNote}
      <div class="mt-2 space-y-1">
        <span class="font-semibold opacity-70">{t.companionLinksLabel}:</span>
        {#each t.companionLinks as link}
          <a href={link.href}
            class="block font-medium hover:opacity-100"
            style="color: var(--color-page-accent);">
            {link.label}
          </a>
        {/each}
      </div>
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
          href="https://github.com/BjornKennethHolmstrom/ggf-governance-simulator"
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
        {#if section.id !== 'appendix-e'}
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
