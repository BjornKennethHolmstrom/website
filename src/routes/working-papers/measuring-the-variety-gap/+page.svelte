<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. IMPORT ALL SECTIONS AS RAW TEXT ---
  import Section01EnRaw from './sections/01-introduction.en.md?raw';
  import Section01SvRaw from './sections/01-introduction.sv.md?raw';
  import Section02EnRaw from './sections/02-dimensionality-estimation-problem.en.md?raw';
  import Section02SvRaw from './sections/02-dimensionality-estimation-problem.sv.md?raw';
  import Section03EnRaw from './sections/03-eight-parameters.en.md?raw';
  import Section03SvRaw from './sections/03-eight-parameters.sv.md?raw';
  import Section04EnRaw from './sections/04-measurement-paradox.en.md?raw';
  import Section04SvRaw from './sections/04-measurement-paradox.sv.md?raw';
  import Section05EnRaw from './sections/05-composite-variety-gap-index.en.md?raw';
  import Section05SvRaw from './sections/05-composite-variety-gap-index.sv.md?raw';
  import Section06EnRaw from './sections/06-dynamic-extension.en.md?raw';
  import Section06SvRaw from './sections/06-dynamic-extension.sv.md?raw';
  import Section07EnRaw from './sections/07-calibration.en.md?raw';
  import Section07SvRaw from './sections/07-calibration.sv.md?raw';
  import Section08EnRaw from './sections/08-empirical-application.en.md?raw';
  import Section08SvRaw from './sections/08-empirical-application.sv.md?raw';
  import Section09EnRaw from './sections/09-limitations-and-next-steps.en.md?raw';
  import Section09SvRaw from './sections/09-limitations-and-next-steps.sv.md?raw';
  import AppendixAEnRaw from './sections/10-appendix-a.en.md?raw';
  import AppendixASvRaw from './sections/10-appendix-a.sv.md?raw';
  import AppendixBEnRaw from './sections/10-appendix-b.en.md?raw';
  import AppendixBSvRaw from './sections/10-appendix-b.sv.md?raw';
  import AppendixCEnRaw from './sections/10-appendix-c.en.md?raw';
  import AppendixCSvRaw from './sections/10-appendix-c.sv.md?raw';
  import AppendixDEnRaw from './sections/10-appendix-d.en.md?raw';
  import AppendixDSvRaw from './sections/10-appendix-d.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText: Record<string, Record<string, string>> = {
    en: {
      '01-introduction': Section01EnRaw,
      '02-dimensionality-estimation-problem': Section02EnRaw,
      '03-eight-parameters': Section03EnRaw,
      '04-measurement-paradox': Section04EnRaw,
      '05-composite-variety-gap-index': Section05EnRaw,
      '06-dynamic-extension': Section06EnRaw,
      '07-calibration': Section07EnRaw,
      '08-empirical-application': Section08EnRaw,
      '09-limitations-and-next-steps': Section09EnRaw,
      'appendix-a': AppendixAEnRaw,
      'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw,
      'appendix-d': AppendixDEnRaw,
    },
    sv: {
      '01-introduction': Section01SvRaw,
      '02-dimensionality-estimation-problem': Section02SvRaw,
      '03-eight-parameters': Section03SvRaw,
      '04-measurement-paradox': Section04SvRaw,
      '05-composite-variety-gap-index': Section05SvRaw,
      '06-dynamic-extension': Section06SvRaw,
      '07-calibration': Section07SvRaw,
      '08-empirical-application': Section08SvRaw,
      '09-limitations-and-next-steps': Section09SvRaw,
      'appendix-a': AppendixASvRaw,
      'appendix-b': AppendixBSvRaw,
      'appendix-c': AppendixCSvRaw,
      'appendix-d': AppendixDSvRaw,
    },
  };

  // --- 3. CONTENT MAP (titles only – no components) ---
  const contentMap = [
    { id: '01-introduction',                      titleEn: '1. Introduction: From Diagnosis to Measurement',                titleSv: '1. Introduktion: Från diagnos till mätning' },
    { id: '02-dimensionality-estimation-problem', titleEn: '2. The Dimensionality Estimation Problem',                     titleSv: '2. Dimensionalitetsuppskattningsproblemet' },
    { id: '03-eight-parameters',                  titleEn: '3. The Eight Parameters',                                      titleSv: '3. De åtta parametrarna' },
    { id: '04-measurement-paradox',               titleEn: '4. The Measurement Paradox',                                   titleSv: '4. Mätparadoxen' },
    { id: '05-composite-variety-gap-index',       titleEn: '5. The Composite Variety Gap Index',                           titleSv: '5. Det sammansatta varietetsgap-indexet' },
    { id: '06-dynamic-extension',                 titleEn: '6. Dynamic Extension: Measuring the Rate of Gap Change',       titleSv: '6. Dynamisk utvidgning: Mätning av gapets förändringshastighet' },
    { id: '07-calibration',                       titleEn: '7. Calibration Against the Twenty-One Cases',                  titleSv: '7. Kalibrering mot de tjugoen fallen' },
    { id: '08-empirical-application',             titleEn: '8. Empirical Application: A Pilot Validation',                 titleSv: '8. Empirisk tillämpning: En pilotvalidering' },
    { id: '09-limitations-and-next-steps',        titleEn: '9. Limitations and Next Steps',                                titleSv: '9. Begränsningar och nästa steg' },
    { id: 'appendix-a',                           titleEn: 'Appendix A: Parameter Estimation Guide',                       titleSv: 'Appendix A: Guide för parameteruppskattning' },
    { id: 'appendix-b',                           titleEn: 'Appendix B: Country Calibration Table',                        titleSv: 'Appendix B: Landkalibreringstabell' },
    { id: 'appendix-c',                           titleEn: 'Appendix C: Data Sources and Availability Matrix',             titleSv: 'Appendix C: Datakällor och tillgänglighetsmatris' },
    { id: 'appendix-d',                           titleEn: 'Appendix D: Mathematical Appendix',                            titleSv: 'Appendix D: Matematiskt appendix' },
  ];

  // --- 4. UI TRANSLATIONS & METADATA (unchanged) ---
  const ui = {
    en: {
      tag: 'Working Paper · Series VIII',
      seriesNote: 'This is the eighth paper in the Governance as Engineering series.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator', label: 'Paper I: Governance Stability Simulator →' },
        { href: '/working-papers/fractality-as-stability', label: 'Paper II: Fractality as Stability →' },
        { href: '/working-papers/observability-democracy-connection', label: 'Paper III: The Observability-Democracy Connection →' },
        { href: '/working-papers/requisite-variety-and-the-commons', label: 'Paper IV: Requisite Variety and the Commons →' },
        { href: '/working-papers/coordination-failure-tax', label: 'Paper V: The Coordination Failure Tax →' },
        { href: '/working-papers/the-variety-gap', label: 'Paper VI: The Variety Gap →' },
        { href: '/working-papers/architecture-of-governance-failure', label: 'Paper VII: The Architecture of Governance Failure →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Paper IX: The Political Economy of Requisite Governance →' },
        { href: '/working-papers/requisite-observer-diversity', label: 'Paper X: Requisite Observer Diversity →' },
        { href: '/working-papers/reform-exhaustion', label: 'Paper XI: Reform Exhaustion →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Paper XIV: Governance as an Adaptive Controller →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'The Governance as Engineering series has established that governance failure follows structural constraints — but has not provided a systematic method for measuring the central diagnostic concept: the Variety Gap. This paper provides that method.',
      contextOutro: 'The paper develops a parametric framework that maps observable governance characteristics to the eight structural primitives, constructs a composite Variety Gap Index, and tests it against the twenty-one cases in the series. It is not a predictive model — it is a diagnostic instrument, offered as an open invitation for empirical testing and refinement.',
      allWorkingpapers: '← All Working Papers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Arbetsdokument · Serie VIII',
      seriesNote: 'Detta är den åttonde rapporten i serien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator', label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/working-papers/fractality-as-stability', label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/working-papers/observability-democracy-connection', label: 'Rapport III: Observerbarhets-demokratikopplingen →' },
        { href: '/working-papers/requisite-variety-and-the-commons', label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/working-papers/coordination-failure-tax', label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/working-papers/the-variety-gap', label: 'Rapport VI: Variationsgapet →' },
        { href: '/working-papers/architecture-of-governance-failure', label: 'Rapport VII: Styrningsmisslyckandets arkitektur →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Rapport IX: Den politiska ekonomin för nödvändig styrning →' },
        { href: '/working-papers/requisite-observer-diversity', label: 'Rapport X: Nödvändig observatörsmångfald →' },
        { href: '/working-papers/reform-exhaustion', label: 'Rapport XI: Reformutmattning →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Serien Styrning som ingenjörskonst har fastställt att styrningsmisslyckanden följer strukturella begränsningar — men har inte tillhandahållit en systematisk metod för att mäta det centrala diagnostiska konceptet: varietetsgapet. Denna rapport tillhandahåller den metoden.',
      contextOutro: 'Rapporten utvecklar ett parametriskt ramverk som kartlägger observerbara styrningsegenskaper till de åtta strukturella primitiverna, konstruerar ett sammansatt varietetsgap-index och testar det mot de tjugoen fallen i serien. Det är inte en prediktiv modell — det är ett diagnostiskt instrument, erbjudet som en öppen inbjudan till empirisk testning och förfining.',
      allWorkingpapers: '← Alla arbetsdokument',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      citeThis: 'Citera detta arbete',
      share: 'Dela detta dokument',
    },
  };

  const metadata = {
    en: {
      title: 'Measuring the Variety Gap',
      subtitle: 'A Parametric Framework for Diagnosing Governance Failure',
      description: 'Paper VIII in the Governance as Engineering series. Develops a systematic method for measuring the Variety Gap in governance systems, mapping observable characteristics to structural primitives and constructing a composite diagnostic index.',
    },
    sv: {
      title: 'Att mäta varietetsgapet',
      subtitle: 'Ett parametriskt ramverk för att diagnostisera styrningsmisslyckanden',
      description: 'Rapport VIII i serien Styrning som ingenjörskonst. Utvecklar en systematisk metod för att mäta varietetsgapet i styrsystem, kartlägger observerbara egenskaper till strukturella primitiver och konstruerar ett sammansatt diagnostiskt index.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('01-introduction');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'measuring-the-variety-gap-sv.pdf' : 'measuring-the-variety-gap.pdf');

  function sectionTitle(section: typeof contentMap[0]) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  // Pre‑render LaTeX with KaTeX, then parse markdown
  function sectionHtml(section: typeof contentMap[0]): string {
    const lang = currentLang as 'en' | 'sv';
    const md = rawText[lang]?.[section.id] ?? '';
    let content = md.replace(/^---[\s\S]*?---\n/, '');

    const blocks: string[] = [];

    // Display math \[ ... \]
    content = content.replace(/\\\[([\s\S]*?)\\\]/g, (match, tex) => {
      try {
        const rendered = katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false });
        blocks.push(rendered);
        return `%%MATH${blocks.length - 1}%%`;
      } catch (e) {
        console.warn('KaTeX display error:', e);
        blocks.push(match);
        return `%%MATH${blocks.length - 1}%%`;
      }
    });

    // Inline math \( ... \)
    content = content.replace(/\\\(([\s\S]*?)\\\)/g, (match, tex) => {
      try {
        const rendered = katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false });
        blocks.push(rendered);
        return `%%MATH${blocks.length - 1}%%`;
      } catch (e) {
        console.warn('KaTeX inline error:', e);
        blocks.push(match);
        return `%%MATH${blocks.length - 1}%%`;
      }
    });

    // Convert markdown to HTML
    let html = marked.parse(content, { breaks: false, gfm: true }) as string;

    // Restore pre‑rendered KaTeX HTML
    html = html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');

    return html;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function copyCitation() {
    const citation = currentLang === 'sv'
      ? `Holmström, B. K. (2026). Att mäta varietetsgapet: Ett parametriskt ramverk för att diagnostisera styrningsmisslyckanden. Serien Styrning som ingenjörskonst, rapport VIII.`
      : `Holmström, B. K. (2026). Measuring the Variety Gap: A Parametric Framework for Diagnosing Governance Failure. Governance as Engineering Series, Paper VIII.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
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
            {@html sectionHtml(section)}
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
