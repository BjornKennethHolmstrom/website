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
  import Part1EnRaw      from './sections/01-part-1.en.md?raw';
  import Part2EnRaw      from './sections/02-part-2.en.md?raw';
  import Part3EnRaw      from './sections/03-part-3.en.md?raw';
  import Part4EnRaw      from './sections/04-part-4.en.md?raw';
  import Part5EnRaw      from './sections/05-part-5.en.md?raw';
  import Part6EnRaw      from './sections/06-part-6.en.md?raw';
  import AppendixAEnRaw  from './sections/07-appendix-a.en.md?raw';
  import AppendixBEnRaw  from './sections/07-appendix-b.en.md?raw';

  // Swedish
  import AbstractSvRaw   from './sections/00-abstract.sv.md?raw';
  import Part1SvRaw      from './sections/01-part-1.sv.md?raw';
  import Part2SvRaw      from './sections/02-part-2.sv.md?raw';
  import Part3SvRaw      from './sections/03-part-3.sv.md?raw';
  import Part4SvRaw      from './sections/04-part-4.sv.md?raw';
  import Part5SvRaw      from './sections/05-part-5.sv.md?raw';
  import Part6SvRaw      from './sections/06-part-6.sv.md?raw';
  import AppendixASvRaw  from './sections/07-appendix-a.sv.md?raw';
  import AppendixBSvRaw  from './sections/07-appendix-b.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText: Record<string, Record<string, string>> = {
    en: {
      'abstract':      AbstractEnRaw,
      'part-1': Part1EnRaw, 'part-2': Part2EnRaw, 'part-3': Part3EnRaw,
      'part-4': Part4EnRaw, 'part-5': Part5EnRaw, 'part-6': Part6EnRaw,
      'appendix-a': AppendixAEnRaw, 'appendix-b': AppendixBEnRaw,
    },
    sv: {
      'abstract':      AbstractSvRaw,
      'part-1': Part1SvRaw, 'part-2': Part2SvRaw, 'part-3': Part3SvRaw,
      'part-4': Part4SvRaw, 'part-5': Part5SvRaw, 'part-6': Part6SvRaw,
      'appendix-a': AppendixASvRaw, 'appendix-b': AppendixBSvRaw,
    },
  };

  // --- 3. CONTENT MAP ---
  const contentMap = [
    { id: 'abstract',    titleEn: 'Abstract',                                                         titleSv: 'Sammanfattning' },
    { id: 'part-1',      titleEn: 'Part I: The Problem — The Triad Was Never Costed',                 titleSv: 'Del I: Problemet — Triaden var aldrig kostnadsberäknad' },
    { id: 'part-2',      titleEn: 'Part II: Formal Framework',                                        titleSv: 'Del II: Formellt ramverk' },
    { id: 'part-3',      titleEn: 'Part III: The Three Backlogs, and Where They Are Documented',      titleSv: 'Del III: De tre eftersläpningarna, och var de är dokumenterade' },
    { id: 'part-4',      titleEn: 'Part IV: Boundaries and Objections',                               titleSv: 'Del IV: Gränser och invändningar' },
    { id: 'part-5',      titleEn: 'Part V: Simulation',                                               titleSv: 'Del V: Simulering' },
    { id: 'part-6',      titleEn: 'Part VI: Design Implications, and What the Series Does Next',      titleSv: 'Del VI: Designimplikationer, och vad serien gör härnäst' },
    { id: 'appendix-a',  titleEn: 'Appendix A: Formal Derivations',                                   titleSv: 'Appendix A: Formella härledningar' },
    { id: 'appendix-b',  titleEn: 'Appendix B: Simulation Specification',                             titleSv: 'Appendix B: Simuleringsspecifikation' },
  ];

  // --- 4. UI TRANSLATIONS & METADATA ---
  const ui = {
    en: {
      tag: 'Working Paper · Series XV',
      seriesNote: 'This is the fifteenth paper in the Governance as Engineering series. It closes the loop on Cycle Two.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization',                 label: 'Paper 0: Below the Factorization →' },
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
        { href: '/working-papers/boundary-selection-deficits',            label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor', label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability', label: 'Paper XVIII: The Boundary Instability Principle →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'The Sense–Learn–Execute triad was established across Cycle Two as three separately justified requirements — but never as three simultaneous claims on finite processing capacity. This paper treats the loop as a recursive, lossy pipeline and asks: what happens when the three legs compete for resources?',
      contextOutro: 'The answer is a bottleneck theorem: effective adaptive throughput is gated by the slowest stage. Spend on any non‑bottleneck stage accumulates backlog rather than accelerating adaptation. Three backlogs are identified — information, innovation, reality — each with a documented governance instance. The dynamic dual of Paper V: where static failures multiply, dynamic capacities are throttled by their minimum.',
      allWhitepapers: '← All Whitepapers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Serie XV',
      seriesNote: 'Detta är den femtonde rapporten i serien Styrning som ingenjörskonst. Den stänger loopen för Cykel Två.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization',                 label: 'Rapport 0: Under faktoriseringen →' },
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
        { href: '/working-papers/boundary-selection-deficits',            label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor', label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability', label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Sense–Learn–Execute-triaden etablerades under Cykel Två som tre separat motiverade krav — men aldrig som tre samtidiga anspråk på ändlig processorkapacitet. Denna rapport behandlar loopen som en rekursiv, förlustfylld pipeline och frågar: vad händer när de tre benen konkurrerar om resurser?',
      contextOutro: 'Svaret är en flaskhalsteorem: effektiv adaptiv genomströmning begränsas av det långsammaste steget. Resurser på icke‑flaskhalssteg ackumulerar eftersläpning snarare än att accelerera anpassning. Tre eftersläpningar identifieras — information, innovation, verklighet — var och en med en dokumenterad styrningsinstans. Den dynamiska dualen till Rapport V: där statiska tillkortakommanden multipliceras, stryps dynamiska kapaciteter av sitt minimum.',
      allWhitepapers: '← Alla vitböcker',
      share: 'Dela detta dokument',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      viewCode: 'Visa källkod',
      citeThis: 'Citera detta arbete',
    },
  };

  const metadata = {
    en: {
      title: 'The Adaptation Bottleneck',
      subtitle: 'Throughput Constraints on the Sense–Learn–Execute Loop',
      description: 'Treats the Sense–Learn–Execute triad as simultaneous claims on finite processing capacity. Shows that effective adaptive throughput is gated by the slowest stage. Identifies three backlogs and derives the dynamic dual of Paper V.',
    },
    sv: {
      title: 'Adaptationsflaskhalsen',
      subtitle: 'Genomströmningsbegränsningar i Sense–Learn–Execute-loopen',
      description: 'Behandlar Sense–Learn–Execute-triaden som samtidiga anspråk på ändlig processorkapacitet. Visar att effektiv adaptiv genomströmning begränsas av det långsammaste steget. Identifierar tre eftersläpningar och härleder den dynamiska dualen till Rapport V.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'adaptation-bottleneck-sv.pdf' : 'adaptation-bottleneck.pdf');

  function sectionTitle(section: typeof contentMap[0]) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  // Pre‑render LaTeX with KaTeX (supports $…$, $$…$$, \(…\), \[…\])
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
      ? `Holmström, B. K. (2026). Adaptationsflaskhalsen: Genomströmningsbegränsningar i Sense–Learn–Execute-loopen. Styrning som ingenjörskonst, Rapport XV.`
      : `Holmström, B. K. (2026). The Adaptation Bottleneck: Throughput Constraints on the Sense–Learn–Execute Loop. Governance as Engineering, Paper XV.`;
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
  publishedTime="2026-06"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWhitepapers}
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
            {@html sectionHtml(section)}
          </article>
        </div>
        {#if section.id !== 'appendix-b'}
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
