<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. IMPORT ALL SECTIONS AS RAW TEXT ---
  // English
  import AbstractEnRaw   from './sections/00-abstract.en.md?raw';
  import Section01EnRaw  from './sections/01-introduction.en.md?raw';
  import Section02EnRaw  from './sections/02-definition-interpretation.en.md?raw';
  import Section03EnRaw  from './sections/03-analytical-structure.en.md?raw';
  import Section04EnRaw  from './sections/04-phase-diagram-and-robustness.en.md?raw';
  import Section05EnRaw  from './sections/05-stochastic-dynamics.en.md?raw';
  import Section06EnRaw  from './sections/06-coupled-populations.en.md?raw';
  import Section07EnRaw  from './sections/07-governance-intervention.en.md?raw';
  import Section08EnRaw  from './sections/08-discussion.en.md?raw';
  import Section09EnRaw  from './sections/09-conclusion.en.md?raw';
  import AppendixAEnRaw  from './sections/10-appendix-a.en.md?raw';

  // Swedish
  import AbstractSvRaw   from './sections/00-abstract.sv.md?raw';
  import Section01SvRaw  from './sections/01-introduction.sv.md?raw';
  import Section02SvRaw  from './sections/02-definition-interpretation.sv.md?raw';
  import Section03SvRaw  from './sections/03-analytical-structure.sv.md?raw';
  import Section04SvRaw  from './sections/04-phase-diagram-and-robustness.sv.md?raw';
  import Section05SvRaw  from './sections/05-stochastic-dynamics.sv.md?raw';
  import Section06SvRaw  from './sections/06-coupled-populations.sv.md?raw';
  import Section07SvRaw  from './sections/07-governance-intervention.sv.md?raw';
  import Section08SvRaw  from './sections/08-discussion.sv.md?raw';
  import Section09SvRaw  from './sections/09-conclusion.sv.md?raw';
  import AppendixASvRaw  from './sections/10-appendix-a.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText: Record<string, Record<string, string>> = {
    en: {
      'abstract':    AbstractEnRaw,
      'section-01': Section01EnRaw, 'section-02': Section02EnRaw,
      'section-03': Section03EnRaw, 'section-04': Section04EnRaw,
      'section-05': Section05EnRaw, 'section-06': Section06EnRaw,
      'section-07': Section07EnRaw, 'section-08': Section08EnRaw,
      'section-09': Section09EnRaw, 'appendix-a': AppendixAEnRaw,
    },
    sv: {
      'abstract':    AbstractSvRaw,
      'section-01': Section01SvRaw, 'section-02': Section02SvRaw,
      'section-03': Section03SvRaw, 'section-04': Section04SvRaw,
      'section-05': Section05SvRaw, 'section-06': Section06SvRaw,
      'section-07': Section07SvRaw, 'section-08': Section08SvRaw,
      'section-09': Section09SvRaw, 'appendix-a': AppendixASvRaw,
    },
  };

  // --- 3. CONTENT MAP ---
  const contentMap = [
    { id: 'abstract',    titleEn: 'Abstract',                                                           titleSv: 'Sammanfattning' },
    { id: 'section-01',  titleEn: '1. Introduction',                                                    titleSv: '1. Introduktion' },
    { id: 'section-02',  titleEn: '2. Model Definition and Governance Interpretation',                   titleSv: '2. Modelldefinition och styrningstolkning' },
    { id: 'section-03',  titleEn: '3. Analytical Structure: Fast–Slow Decomposition and Attractor Regimes', titleSv: '3. Analytisk struktur: snabb–långsam dekomposition och attraktorregimer' },
    { id: 'section-04',  titleEn: '4. Phase Diagram and Robustness of the Closure Trap',                titleSv: '4. Fasdiagram och robusthet hos slutenhetsfällan' },
    { id: 'section-05',  titleEn: '5. Stochastic Dynamics: Noise-Induced Tipping and Residual Fragility', titleSv: '5. Stokastisk dynamik: brusinducerad tippning och kvarvarande skörhet' },
    { id: 'section-06',  titleEn: '6. Coupled Populations: Polarization and Cascade Collapse',          titleSv: '6. Kopplade populationer: polarisering och kaskadkollaps' },
    { id: 'section-07',  titleEn: '7. Governance Intervention: Constitutional Permeability Floor',      titleSv: '7. Styrningsintervention: konstitutionellt permeabilitetsgolv' },
    { id: 'section-08',  titleEn: '8. Discussion',                                                      titleSv: '8. Diskussion' },
    { id: 'section-09',  titleEn: '9. Conclusion',                                                      titleSv: '9. Slutsats' },
    { id: 'appendix-a',  titleEn: 'Appendix A: Simulation and Reproducibility Notes',                  titleSv: 'Appendix A: Simulerings- och reproducerbarhetsanteckningar' },
  ];

  // --- 4. UI TRANSLATIONS & METADATA ---
  const ui = {
    en: {
      tag: 'Working Paper · Series XXVIII',
      seriesNote: 'This is the twenty‑eighth paper in the Governance as Engineering series. It introduces a minimal dynamical model of institutional closure and adaptation under uncertainty.',
      seriesLinksShow: 'Show paper links',
      seriesLinksHide: 'Hide paper links',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator',          label: 'Paper I: Governance Stability Simulator →' },
        { href: '/working-papers/fractality-as-stability',                 label: 'Paper II: Fractality as Stability →' },
        { href: '/working-papers/observability-democracy-connection',      label: 'Paper III: The Observability‑Democracy Connection →' },
        { href: '/working-papers/requisite-variety-and-the-commons',       label: 'Paper IV: Requisite Variety and the Commons →' },
        { href: '/working-papers/coordination-failure-tax',                label: 'Paper V: The Coordination Failure Tax →' },
        { href: '/working-papers/the-variety-gap',                         label: 'Paper VI: The Variety Gap →' },
        { href: '/working-papers/architecture-of-governance-failure',      label: 'Paper VII: The Architecture of Governance Failure →' },
        { href: '/working-papers/measuring-the-variety-gap',               label: 'Paper VIII: Measuring the Variety Gap →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Paper IX: The Political Economy of Requisite Governance →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Paper X: Requisite Observer Diversity →' },
        { href: '/working-papers/reform-exhaustion',                       label: 'Paper XI: Reform Exhaustion →' },
        { href: '/working-papers/boundary-selection-deficits',             label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/adaptation-bottleneck',                   label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization',     label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor',                     label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability',                    label: 'Paper XVIII: The Boundary Instability Principle →' },
        { href: '/working-papers/governors-sentinels-bridges',             label: 'Paper XIX: Governors, Sentinels, and Bridges →' },
        { href: '/working-papers/three-laws-from-one-bound',               label: 'Paper XX: Three Laws from One Bound →' },
        { href: '/working-papers/when-to-stop-learning',                   label: 'Paper XXI: When to Stop Learning, and When to Stop →' },
        { href: '/working-papers/what-cannot-be-guaranteed',               label: 'Paper XXII: What Cannot Be Guaranteed →' },
        { href: '/working-papers/shape-of-reform',                         label: 'Paper XXIII: The Shape of Reform →' },
        { href: '/working-papers/excitation-starved-observer',             label: 'Paper XXIV: The Observer You Cannot Afford to Excite →' },
        { href: '/working-papers/where-reform-pushes-down',                label: 'Paper XXV: Where Reform Pushes Down, Strategy Pushes Back →' },
        { href: '/working-papers/cost-of-returning',                       label: 'Paper XXVI: The Cost of Returning →' },
        { href: '/working-papers/requisite-alignment',                     label: 'Paper XXVII: Requisite Alignment →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'The Governance as Engineering series diagnoses institutional failure as insufficient requisite variety — an observation architecture whose dimensionality falls below that of the disturbance environment it governs. This paper extends the analysis to the dynamics of institutional closure: when boundaries harden under felt uncertainty, they can destroy the very capacities—trust and exploration—that make adaptation possible.',
      contextOutro: 'A five‑variable model exhibits bistability, hysteresis, noise‑induced tipping, cascade collapse, and a critical constitutional permeability floor. The same environment can support an open, high‑trust, exploratory regime and a closed, low‑trust, non‑adaptive one, with the outcome determined by history. A floor on boundary permeability preserves the trust–exploration loop through crises and prevents permanent closure.',
      allWorkingpapers: '← All Working Papers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Serie XXVIII',
      seriesNote: 'Detta är den tjugoåttonde rapporten i serien Styrning som ingenjörskonst. Den introducerar en minimal dynamisk modell av institutionell slutenhet och anpassning under osäkerhet.',
      seriesLinksShow: 'Visa papperslänkar',
      seriesLinksHide: 'Dölj papperslänkar',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator',          label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/working-papers/fractality-as-stability',                 label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/working-papers/observability-democracy-connection',      label: 'Rapport III: Observerbarhets‑demokratikopplingen →' },
        { href: '/working-papers/requisite-variety-and-the-commons',       label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/working-papers/coordination-failure-tax',                label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/working-papers/the-variety-gap',                         label: 'Rapport VI: Varietetsgapet →' },
        { href: '/working-papers/architecture-of-governance-failure',      label: 'Rapport VII: Styrningsmisslyckandets arkitektur →' },
        { href: '/working-papers/measuring-the-variety-gap',               label: 'Rapport VIII: Att mäta varietetsgapet →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Rapport IX: Den politiska ekonomin för nödvändig styrning →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Rapport X: Nödvändig observatörsmångfald →' },
        { href: '/working-papers/reform-exhaustion',                       label: 'Rapport XI: Reformutmattning →' },
        { href: '/working-papers/boundary-selection-deficits',             label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Rapport XIV: Styrning som en adaptiv regulator →' },
        { href: '/working-papers/adaptation-bottleneck',                   label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization',     label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor',                     label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability',                    label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
        { href: '/working-papers/governors-sentinels-bridges',             label: 'Rapport XIX: Guvernörer, vaktposter och broar →' },
        { href: '/working-papers/three-laws-from-one-bound',               label: 'Rapport XX: Tre lagar från en gräns →' },
        { href: '/working-papers/when-to-stop-learning',                   label: 'Rapport XXI: När man ska sluta lära sig, och när man ska sluta →' },
        { href: '/working-papers/what-cannot-be-guaranteed',               label: 'Rapport XXII: Vad som inte kan garanteras →' },
        { href: '/working-papers/shape-of-reform',                         label: 'Rapport XXIII: Reformens form →' },
        { href: '/working-papers/excitation-starved-observer',             label: 'Rapport XXIV: Observatören du inte har råd att excitera →' },
        { href: '/working-papers/where-reform-pushes-down',                label: 'Rapport XXV: Där reform trycker ner, trycker strategi tillbaka →' },
        { href: '/working-papers/cost-of-returning',                       label: 'Rapport XXVI: Kostnaden för att återvända →' },
        { href: '/working-papers/requisite-alignment',                     label: 'Rapport XXVII: Nödvändig inriktning →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Serien Styrning som ingenjörskonst diagnostiserar institutionella misslyckanden som otillräcklig nödvändig variation — en observationsarkitektur vars dimensionalitet understiger den hos den störningsmiljö den reglerar. Denna rapport utvidgar analysen till dynamiken i institutionell slutenhet: när gränser hårdnar under upplevd osäkerhet kan de förstöra just de förmågor—tillit och utforskning—som gör anpassning möjlig.',
      contextOutro: 'En femvariabel modell uppvisar bistabilitet, hysteres, brusinducerad tippning, kaskadkollaps och ett kritiskt konstitutionellt permeabilitetsgolv. Samma miljö kan bära både en öppen regim med hög tillit och utforskning och en sluten, lågtillitsregim utan anpassning, där utfallet bestäms av historiken. Ett golv för gränspermeabilitet bevarar tillit–utforskningsloopen genom kriser och förhindrar permanent slutenhet.',
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
      title: 'Closure–Adaptation Dynamics',
      subtitle: 'A Minimal Model of Institutional Rigidification Under Uncertainty',
      description: 'Introduces a five‑variable dynamical model of institutional closure and adaptation under uncertainty. Shows bistability, hysteresis, noise‑induced tipping, cascade collapse, and a constitutional permeability floor that prevents permanent closure. Paper XXVIII in the Governance as Engineering series.',
    },
    sv: {
      title: 'Slutenhet–anpassningsdynamik',
      subtitle: 'En minimal modell av institutionell stelning under osäkerhet',
      description: 'Introducerar en femvariabel dynamisk modell av institutionell slutenhet och anpassning under osäkerhet. Visar bistabilitet, hysteres, brusinducerad tippning, kaskadkollaps och ett konstitutionellt permeabilitetsgolv som förhindrar permanent slutenhet. Rapport XXVIII i serien Styrning som ingenjörskonst.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'closure-adaptation-sv.pdf' : 'closure-adaptation.pdf');
  let seriesLinksOpen = $state(false);

  function sectionTitle(section: typeof contentMap[0]) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  function sectionHtml(section: typeof contentMap[0]): string {
    const lang = currentLang as 'en' | 'sv';
    const md = rawText[lang]?.[section.id] ?? '';
    let content = md.replace(/^---[\s\S]*?---\n/, '');

    const blocks: string[] = [];

    // Display math: $$ ... $$ and \[ ... \]
    content = content.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, tex1, tex2) => {
      const tex = (tex1 ?? tex2 ?? '').trim();
      try {
        const rendered = katex.renderToString(tex, { displayMode: true, throwOnError: false });
        blocks.push(rendered);
        return `%%MATH${blocks.length - 1}%%`;
      } catch (e) {
        console.warn('KaTeX display error:', e);
        blocks.push(match);
        return `%%MATH${blocks.length - 1}%%`;
      }
    });

    // Inline math: $ ... $ and \( ... \)
    content = content.replace(/(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g, (match, tex1, tex2) => {
      const tex = (tex1 ?? tex2 ?? '').trim();
      try {
        const rendered = katex.renderToString(tex, { displayMode: false, throwOnError: false });
        blocks.push(rendered);
        return `%%MATH${blocks.length - 1}%%`;
      } catch (e) {
        console.warn('KaTeX inline error:', e);
        blocks.push(match);
        return `%%MATH${blocks.length - 1}%%`;
      }
    });

    let html = marked.parse(content, { breaks: false, gfm: true }) as string;
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
      ? `Holmström, B. K. (2026). Slutenhet–anpassningsdynamik: En minimal modell av institutionell stelning under osäkerhet. Styrning som ingenjörskonst, Rapport XXVIII.`
      : `Holmström, B. K. (2026). Closure–Adaptation Dynamics: A Minimal Model of Institutional Rigidification Under Uncertainty. Governance as Engineering, Paper XXVIII.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | GaE Working Paper"
  description={meta.description}
  type="article"
  publishedTime="2026-09-01"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWorkingpapers}
      </a>
    </div>

    <!-- Series note + collapsible links -->
    <div class="mb-6 p-3 rounded-lg text-xs leading-relaxed border border-[var(--color-separator)] opacity-70">
      {t.seriesNote}

      <button
        onclick={() => seriesLinksOpen = !seriesLinksOpen}
        class="flex items-center gap-1.5 mt-2 text-xs font-medium hover:opacity-100 transition-opacity w-full text-left"
        style="color: var(--color-page-accent);"
      >
        <span>{seriesLinksOpen ? '▾' : '▸'}</span>
        <span>{seriesLinksOpen ? t.seriesLinksHide : t.seriesLinksShow}</span>
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
            {@html sectionHtml(section)}
          </article>
        </div>
        {#if section.id !== 'appendix-a'}
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
