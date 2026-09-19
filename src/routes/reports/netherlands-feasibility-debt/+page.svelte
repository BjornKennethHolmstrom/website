<!-- src/routes/reports/netherlands-feasibility-debt/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // ------------------------------------------
  // 1. Import all sections as raw text (EN, NL)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEnRaw from './sections/00-executive-summary.en.md?raw';
  import ExecutiveSummaryNlRaw from './sections/00-executive-summary.nl.md?raw';

  // 1. The Feasibility Debt
  import FeasibilityDebtEnRaw from './sections/01-feasibility-debt.en.md?raw';
  import FeasibilityDebtNlRaw from './sections/01-feasibility-debt.nl.md?raw';

  // 2. Structural Mechanisms
  import StructuralMechanismsEnRaw from './sections/02-structural-mechanisms.en.md?raw';
  import StructuralMechanismsNlRaw from './sections/02-structural-mechanisms.nl.md?raw';

  // 3. Building Recursive Feasibility
  import BuildingRecursiveFeasibilityEnRaw from './sections/03-building-recursive-feasibility.en.md?raw';
  import BuildingRecursiveFeasibilityNlRaw from './sections/03-building-recursive-feasibility.nl.md?raw';

  // 4. Political Immune System
  import PoliticalImmuneSystemEnRaw from './sections/04-political-immune-system.en.md?raw';
  import PoliticalImmuneSystemNlRaw from './sections/04-political-immune-system.nl.md?raw';

  // 5. Transition Architecture (note: filename has a typo 'transtition' — matched exactly)
  import TransitionArchitectureEnRaw from './sections/05-transtition-architecture.en.md?raw';
  import TransitionArchitectureNlRaw from './sections/05-transtition-architecture.nl.md?raw';

  // 6. First Step
  import FirstStepEnRaw from './sections/06-first-step.en.md?raw';
  import FirstStepNlRaw from './sections/06-first-step.nl.md?raw';

  // 7. Coda
  import CodaEnRaw from './sections/07-coda.en.md?raw';
  import CodaNlRaw from './sections/07-coda.nl.md?raw';

  // Appendices
  import AppendixAEnRaw from './sections/08-appendix-a.en.md?raw';
  import AppendixANlRaw from './sections/08-appendix-a.nl.md?raw';

  import AppendixBEnRaw from './sections/08-appendix-b.en.md?raw';
  import AppendixBNlRaw from './sections/08-appendix-b.nl.md?raw';

  import AppendixCEnRaw from './sections/08-appendix-c.en.md?raw';
  import AppendixCNlRaw from './sections/08-appendix-c.nl.md?raw';

  import AppendixDEnRaw from './sections/08-appendix-d.en.md?raw';
  import AppendixDNlRaw from './sections/08-appendix-d.nl.md?raw';

  import AppendixEEnRaw from './sections/08-appendix-e.en.md?raw';
  import AppendixENlRaw from './sections/08-appendix-e.nl.md?raw';

  import AppendixFEnRaw from './sections/08-appendix-f.en.md?raw';
  import AppendixFNlRaw from './sections/08-appendix-f.nl.md?raw';

  import AppendixGEnRaw from './sections/08-appendix-g.en.md?raw';
  import AppendixGNlRaw from './sections/08-appendix-g.nl.md?raw';

  // ------------------------------------------
  // 2. Raw text map
  // ------------------------------------------
  const rawText: Record<'en' | 'nl', Record<string, string>> = {
    en: {
      'executive-summary': ExecutiveSummaryEnRaw,
      'feasibility-debt': FeasibilityDebtEnRaw,
      'structural-mechanisms': StructuralMechanismsEnRaw,
      'building-recursive-feasibility': BuildingRecursiveFeasibilityEnRaw,
      'political-immune-system': PoliticalImmuneSystemEnRaw,
      'transition-architecture': TransitionArchitectureEnRaw,
      'first-step': FirstStepEnRaw,
      'coda': CodaEnRaw,
      'appendix-a': AppendixAEnRaw,
      'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw,
      'appendix-d': AppendixDEnRaw,
      'appendix-e': AppendixEEnRaw,
      'appendix-f': AppendixFEnRaw,
      'appendix-g': AppendixGEnRaw,
    },
    nl: {
      'executive-summary': ExecutiveSummaryNlRaw,
      'feasibility-debt': FeasibilityDebtNlRaw,
      'structural-mechanisms': StructuralMechanismsNlRaw,
      'building-recursive-feasibility': BuildingRecursiveFeasibilityNlRaw,
      'political-immune-system': PoliticalImmuneSystemNlRaw,
      'transition-architecture': TransitionArchitectureNlRaw,
      'first-step': FirstStepNlRaw,
      'coda': CodaNlRaw,
      'appendix-a': AppendixANlRaw,
      'appendix-b': AppendixBNlRaw,
      'appendix-c': AppendixCNlRaw,
      'appendix-d': AppendixDNlRaw,
      'appendix-e': AppendixENlRaw,
      'appendix-f': AppendixFNlRaw,
      'appendix-g': AppendixGNlRaw,
    },
  };

  // ------------------------------------------
  // 3. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleNl: 'Samenvatting',
    },
    {
      id: 'feasibility-debt',
      titleEn: '1. The Feasibility Debt',
      titleNl: '1. De Haalbaarheidsschuld',
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. The Feasibility Debt: Structural Mechanisms',
      titleNl: '2. De Haalbaarheidsschuld: Structurele Mechanismen',
    },
    {
      id: 'building-recursive-feasibility',
      titleEn: '3. What Building Recursive Feasibility Would Look Like',
      titleNl: '3. Hoe het Bouwen van Recursieve Haalbaarheid eruit zou zien',
    },
    {
      id: 'political-immune-system',
      titleEn: '4. The Political Immune System: What Keeps Producing Debt',
      titleNl: '4. Het Politieke Immuunsysteem: Wat Schulden Blijft Produceren',
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for the Netherlands',
      titleNl: '5. Met de Stroom Mee: Transitiearchitectuur voor Nederland',
    },
    {
      id: 'first-step',
      titleEn: '6. A Concrete First Step: The Feasibility Balance Sheet',
      titleNl: '6. Een Concrete Eerste Stap: De Haalbaarheidsbalans',
    },
    {
      id: 'coda',
      titleEn: '7. Coda: The Makers of Land at the Limit of Promise',
      titleNl: '7. Coda: De Landmakers op de Grens van de Belofte',
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems and Policy Mindsets',
      titleNl: 'Bijlage A: Waardesystemen en beleidsmindset',
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International and Domestic Analogues',
      titleNl: 'Bijlage B: Internationale en binnenlandse analogen',
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleNl: 'Bijlage C: De verbinding met Governance as Engineering',
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleNl: 'Bijlage D: Verwachte tegenwerpingen',
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author and Method',
      titleNl: 'Bijlage E: Over de auteur en de methode',
    },
    {
      id: 'appendix-f',
      titleEn: 'Appendix F: Case File — Nitrogen and the Renewable Subsidy Cohort',
      titleNl: 'Bijlage F: Dossier — Stikstof en het cohort hernieuwbare subsidies',
    },
    {
      id: 'appendix-g',
      titleEn: 'Appendix G: Case File — Schiphol and Lelystad',
      titleNl: 'Bijlage G: Dossier — Schiphol en Lelystad',
    },
  ];

  // ------------------------------------------
  // 4. Metadata & UI texts
  // ------------------------------------------
  const metadata = {
    en: {
      title:
        'The Netherlands: The Feasibility Debt — Commitment Before Durable Feasibility',
      subtitle:
        'A governance-as-engineering diagnosis of the country that taught the world to plan for an uncertain future — and sometimes commits to its own before securing it',
      description:
        'The Netherlands is not failing. It has built one of the most sophisticated systems in the world for governing an uncertain future, above all in water. Yet outside its mature water architecture, it has repeatedly committed to futures before securing them: nitrogen permits resting on ecological gains that had not yet occurred, renewable subsidies awarded before grid capacity was checked, and a national airport operating for roughly a decade ahead of the legal regime meant to govern it. This report diagnoses the Feasibility Debt and proposes a Feasibility Balance Sheet as the concrete first step.',
    },
    nl: {
      title:
        'Nederland: De Haalbaarheidsschuld — Toezegging vóór Duurzame Haalbaarheid',
      subtitle:
        'Een diagnose vanuit governance-as-engineering van het land dat de wereld leerde plannen voor een onzekere toekomst — en soms aan zijn eigen toekomst toezegt voordat deze is veiliggesteld',
      description:
        'Nederland faalt niet. Het heeft een van de meest geavanceerde systemen ter wereld gebouwd voor het besturen van een onzekere toekomst, bovenal in water. Maar buiten zijn volwassen waterarchitectuur heeft het herhaaldelijk aan toekomsten toegezegd voordat deze waren veiliggesteld: stikstofvergunningen die berustten op ecologische winsten die zich nog niet hadden voorgedaan, hernieuwbare subsidies verleend voordat netcapaciteit was gecontroleerd, en een nationale luchthaven die ongeveer een decennium vooruitliep op het juridische regime dat haar moest besturen. Dit rapport diagnosticeert de Haalbaarheidsschuld en stelt een Haalbaarheidsbalans voor als de concrete eerste stap.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Netherlands',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelNl: 'PDF (Nederlands)',
    },
    nl: {
      tag: 'Landenrapport · Nederland',
      allReports: '← Alle rapporten',
      downloads: 'Downloads',
      share: 'Delen',
      cite: 'Citeren',
      pdfLabelEn: 'PDF (English)',
      pdfLabelNl: 'PDF (Nederlands)',
    },
  };

  const citations = {
    en: 'Holmström, B. K. (2026). The Netherlands: The Feasibility Debt — Commitment Before Durable Feasibility. Strategic Country Report.',
    nl: 'Holmström, B. K. (2026). Nederland: De Haalbaarheidsschuld — Toezegging vóór Duurzame Haalbaarheid. Strategisch Landenrapport.',
  };

  // ------------------------------------------
  // 5. Reactive logic
  // ------------------------------------------
  let reportLang = $state<'en' | 'nl'>('en');
  let activeSection = $state('executive-summary');

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
  let citeText = $derived(citations[reportLang] ?? citations.en);

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'nl' : 'en';
  }

  function sectionTitle(section: (typeof contentMap)[0]) {
    return reportLang === 'nl' ? section.titleNl : section.titleEn;
  }

  function sectionHtml(section: (typeof contentMap)[0]): string {
    const lang = reportLang as 'en' | 'nl';
    const md = rawText[lang]?.[section.id] ?? '';
    let content = md.replace(/^---[\s\S]*?---\n/, '');

    const blocks: string[] = [];

    // Escape currency dollars so KaTeX does not treat them as math.
    // Handles US$539, US$200, US$5 billion, €24.3 billion with no $, etc.
    content = content.replace(/\$(\d)/g, (_, digit) => `\\$${digit}`);

    // Display math: $$ ... $$ and \[ ... \]
    content = content.replace(
      /\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g,
      (match, tex1, tex2) => {
        const tex = (tex1 ?? tex2 ?? '').trim();
        try {
          const rendered = katex.renderToString(tex, {
            displayMode: true,
            throwOnError: false,
          });
          blocks.push(rendered);
          return `%%MATH${blocks.length - 1}%%`;
        } catch (e) {
          console.warn('KaTeX display error:', e);
          blocks.push(match);
          return `%%MATH${blocks.length - 1}%%`;
        }
      },
    );

    // Inline math: $ ... $ and \( ... \)
    // Lookbehind rejects both '$' and '\$' to skip escaped currency dollars.
    content = content.replace(
      /(?<![\\$])\$(?!\$)([\s\S]*?)(?<![\\$])\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
      (match, tex1, tex2) => {
        const tex = (tex1 ?? tex2 ?? '').trim();
        try {
          const rendered = katex.renderToString(tex, {
            displayMode: false,
            throwOnError: false,
          });
          blocks.push(rendered);
          return `%%MATH${blocks.length - 1}%%`;
        } catch (e) {
          console.warn('KaTeX inline error:', e);
          blocks.push(match);
          return `%%MATH${blocks.length - 1}%%`;
        }
      },
    );

    let html = marked.parse(content, { breaks: false, gfm: true }) as string;
    html = html.replace(
      /%%MATH(\d+)%%/g,
      (_, idx) => blocks[parseInt(idx)] ?? '',
    );

    // Promote only truly standalone <em>…</em> paragraphs to .caption,
    // leaving inline emphasis inside prose untouched.
    html = html.replace(
      /<p>\s*<em>([\s\S]*?)<\/em>\s*<\/p>/g,
      (_, inner) => `<p class="caption"><em>${inner}</em></p>`,
    );

    return html;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function copyCitation() {
    navigator.clipboard.writeText(citeText).then(() => {
      alert(reportLang === 'nl' ? 'Citaat gekopieerd!' : 'Citation copied!');
    });
  }
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-09"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div
    class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6"
  >
    <!-- Language toggle (EN ↔ NL) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'nl'} class:opacity-50={reportLang !== 'nl'}>NL</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/netherlands-feasibility-debt-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
            points="7 10 12 15 17 10"
          /><line x1="12" x2="12" y1="15" y2="3" /></svg>
        EN
      </a>
      <a
        href="/reports/netherlands-feasibility-debt-nl.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
            points="7 10 12 15 17 10"
          /><line x1="12" x2="12" y1="15" y2="3" /></svg>
        NL
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={copyCitation}
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        /></svg>
      {t.cite}
    </button>
  </div>

  <!-- SIDEBAR -->
  <aside
    class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto"
  >
    <!-- Back link -->
    <div class="mb-8">
      <a
        href="/reports"
        class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
      >
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50">/</span>
        <span class:font-bold={reportLang === 'nl'} class:opacity-50={reportLang !== 'nl'}>NL</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/netherlands-feasibility-debt-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
              points="7 10 12 15 17 10"
            /><line x1="12" x2="12" y1="15" y2="3" /></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/netherlands-feasibility-debt-nl.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
              points="7 10 12 15 17 10"
            /><line x1="12" x2="12" y1="15" y2="3" /></svg>
          {t.pdfLabelNl}
        </a>
      </div>
    </div>

    <!-- Citation -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={copyCitation}
        class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path
            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
          /></svg>
        {t.cite}
      </button>
    </div>

    <!-- Section Navigation -->
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

  <!-- MAIN CONTENT -->
  <main class="flex-1 min-w-0 px-4 pt-16 pb-24">
    <header class="mb-12 text-center lg:text-left">
      <div
        class="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
        style="background-color: var(--color-card-bg); color: var(--color-page-accent);"
      >
        {t.tag}
      </div>
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        style="color: var(--color-page-text);"
      >
        {meta.title}
      </h1>
      <p
        class="text-xl md:text-2xl opacity-70 font-light leading-relaxed"
        style="color: var(--color-page-text);"
      >
        {meta.subtitle}
      </p>
    </header>

    <!-- Content Sections -->
    <div class="space-y-16">
      {#each contentMap as section}
        <div id={section.id} class="scroll-mt-24">
          <article
            class="prose prose-lg max-w-none"
            style="
              --tw-prose-headings: var(--color-page-text);
              --tw-prose-body: var(--color-page-text);
              --tw-prose-bold: var(--color-page-text);
              --tw-prose-links: var(--color-page-accent);
              --tw-prose-quotes: var(--color-page-text);
              --tw-prose-code: var(--color-page-text);
              --tw-prose-pre-bg: var(--color-card-bg);
              --tw-prose-pre-code: #1a1a1a;
            "
          >
            {@html sectionHtml(section)}
          </article>
        </div>
        {#if section.id !== 'appendix-g'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share (bottom) -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>
  </main>
</div>
