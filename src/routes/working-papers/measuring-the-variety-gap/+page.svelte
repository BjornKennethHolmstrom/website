<script lang="ts">
  import Provenance from '$lib/components/Provenance.svelte';
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
    { id: '01-introduction',                      titleEn: "1. Introduction: From diagnosis to measurement",                titleSv: "1. Introduktion: Från diagnos till mätning" },
    { id: '02-dimensionality-estimation-problem', titleEn: "2. Task-relative distinctions",                     titleSv: "2. Uppgiftsrelativa distinktioner" },
    { id: '03-eight-parameters',                  titleEn: "3. The indicator families",                                      titleSv: "3. Indikatorfamiljerna" },
    { id: '04-measurement-paradox',               titleEn: "4. Evidence access and selective missingness",                                   titleSv: "4. Evidenstillgång och selektivt bortfall" },
    { id: '05-composite-variety-gap-index',       titleEn: "5. From composite index to diagnostic profile",                           titleSv: "5. Från sammansatt index till diagnosprofil" },
    { id: '06-dynamic-extension',                 titleEn: "6. Tracking change without predicting collapse",       titleSv: "6. Att följa förändring utan att förutsäga kollaps" },
    { id: '07-calibration',                       titleEn: "7. Historical calibration: reproducibility audit",                  titleSv: "7. Historisk kalibrering: reproducerbarhetsgranskning" },
    { id: '08-empirical-application',             titleEn: "8. From pilot claims to a prospective protocol",                 titleSv: "8. Från pilotanspråk till ett prospektivt protokoll" },
    { id: '09-limitations-and-next-steps',        titleEn: "9. Limitations and next steps",                                titleSv: "9. Begränsningar och nästa steg" },
    { id: 'appendix-a',                           titleEn: "Appendix A: Diagnostic profile worksheet",                       titleSv: "Appendix A: Arbetsblad för diagnosprofil" },
    { id: 'appendix-b',                           titleEn: "Appendix B: Historical score discrepancy",                        titleSv: "Appendix B: Historisk poängavvikelse" },
    { id: 'appendix-c',                           titleEn: "Appendix C: Candidate data sources",             titleSv: "Appendix C: Möjliga datakällor" },
    { id: 'appendix-d',                           titleEn: "Appendix D: Mathematical audit of the legacy index",                            titleSv: "Appendix D: Matematisk granskning av det tidigare indexet" },
  ];

  // --- 4. UI TRANSLATIONS & METADATA (unchanged) ---
  const ui = {
    en: {
      tag: 'AI-generated working paper · Series VIII',
      seriesNote: 'This is the eighth paper in the Governance as Engineering series.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization', label: 'Paper 0: Below the Factorization →' },
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
        { href: '/working-papers/adaptation-bottleneck', label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor', label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability', label: 'Paper XVIII: The Boundary Instability Principle →' },
        { href: '/working-papers/governors-sentinels-bridges', label: 'Paper XIX: Governors, Sentinels, and Bridges →' },
        { href: '/working-papers/three-laws-from-one-bound',               label: 'Paper XX: Three Laws from One Bound →' },
        { href: '/working-papers/when-to-stop-learning',                   label: 'Paper XXI: When to Stop Learning, and When to Stop →' },
        { href: '/working-papers/what-cannot-be-guaranteed',               label: 'Paper XXII: What Cannot Be Guaranteed →' },
        { href: '/working-papers/shape-of-reform',                         label: 'Paper XXIII: The Shape of Reform →' },
        { href: '/working-papers/excitation-starved-observer',             label: 'Paper XXIV: The Observer You Cannot Afford to Excite →' },
        { href: '/working-papers/where-reform-pushes-down',                label: 'Paper XXV: Where Reform Pushes Down, Strategy Pushes Back →' },
        { href: '/working-papers/cost-of-returning',                       label: 'Paper XXVI: The Cost of Returning →' },
        { href: '/working-papers/requisite-alignment',                     label: 'Paper XXVII: Requisite Alignment →' },
        { href: '/working-papers/closure-adaptation',                      label: 'Paper XXVIII: Closure–Adaptation Dynamics →' },
      ],
      contextTitle: 'Context',
      contextIntro: "Paper VIII proposes a task-relative diagnostic profile. Historical composite scores and threshold claims are withdrawn; the profile remains unvalidated.",
      contextOutro: "The revised methodology keeps the indicator families separate and documents task, provenance and uncertainty. The historical formula discrepancy is retained for audit, not ranking.",
      allWorkingpapers: '← All Working Papers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'AI-genererat arbetsdokument · Serie VIII',
      seriesNote: 'Detta är den åttonde rapporten i serien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization', label: 'Rapport 0: Under faktoriseringen →' },
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
        { href: '/working-papers/adaptation-bottleneck', label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor', label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability', label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
        { href: '/working-papers/governors-sentinels-bridges', label: 'Rapport XIX: Guvernörer, vaktposter och broar →' },
        { href: '/working-papers/three-laws-from-one-bound',               label: 'Rapport XX: Tre lagar från en gräns →' },
        { href: '/working-papers/when-to-stop-learning',                   label: 'Rapport XXI: När man ska sluta lära sig, och när man ska sluta →' },
        { href: '/working-papers/what-cannot-be-guaranteed',               label: 'Rapport XXII: Vad som inte kan garanteras →' },
        { href: '/working-papers/shape-of-reform',                         label: 'Rapport XXIII: Reformens form →' },
        { href: '/working-papers/excitation-starved-observer',             label: 'Rapport XXIV: Observatören du inte har råd att excitera →' },
        { href: '/working-papers/where-reform-pushes-down',                label: 'Rapport XXV: Där reform trycker ner, trycker strategi tillbaka →' },
        { href: '/working-papers/cost-of-returning',                       label: 'Rapport XXVI: Kostnaden för att återvända →' },
        { href: '/working-papers/requisite-alignment',                     label: 'Rapport XXVII: Nödvändig inriktning →' },
        { href: '/working-papers/closure-adaptation',                      label: 'Rapport XXVIII: Slutenhet–anpassningsdynamik →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: "Rapport VIII föreslår en uppgiftsrelativ diagnosprofil. Historiska sammansatta poäng och tröskelanspråk dras tillbaka; profilen är ännu inte validerad.",
      contextOutro: "Den reviderade metodiken håller indikatorfamiljerna åtskilda och dokumenterar uppgift, proveniens och osäkerhet. Den historiska formelavvikelsen bevaras för granskning, inte rangordning.",
      allWorkingpapers: '← Alla arbetsdokument',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      citeThis: 'Citera detta arbete',
      share: 'Dela detta dokument',
    },
  };

  const metadata = {
    en: {
      title: "Measuring the Variety Gap",
      subtitle: "Task-relative diagnostic profiles and the limits of composite measurement",
      description: "Paper VIII proposes a task-relative diagnostic profile. Historical composite scores and threshold claims are withdrawn; the profile remains unvalidated.",
    },
    sv: {
      title: "Att mäta variationsgapet",
      subtitle: "Uppgiftsrelativa diagnosprofiler och den sammansatta mätningens gränser",
      description: "Rapport VIII föreslår en uppgiftsrelativ diagnosprofil. Historiska sammansatta poäng och tröskelanspråk dras tillbaka; profilen är ännu inte validerad.",
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
      ? `Holmström, B. K. (2026). ${meta.title}: ${meta.subtitle}. Reviderad november 2026. Styrning som ingenjörskonst. AI-genererat arbetsdokument; ej fackgranskat.`
      : `Holmström, B. K. (2026). ${meta.title}: ${meta.subtitle}. Revised November 2026. Governance as Engineering. AI-generated working paper; not peer-reviewed.`;
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
      <Provenance align="start" paper />
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
