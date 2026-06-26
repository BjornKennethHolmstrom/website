<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. IMPORT ALL SECTIONS AS RAW TEXT ---
  // English
  import AbstractEnRaw  from './sections/00-abstract.en.md?raw';
  import Part0EnRaw     from './sections/01-part-0.en.md?raw';
  import Part1EnRaw     from './sections/02-part-1.en.md?raw';
  import Part2EnRaw     from './sections/03-part-2.en.md?raw';
  import Part3EnRaw     from './sections/04-part-3.en.md?raw';
  import Part4EnRaw     from './sections/05-part-4.en.md?raw';
  import Part5EnRaw     from './sections/06-part-5.en.md?raw';
  import Part6EnRaw     from './sections/07-part-6.en.md?raw';
  import Part7EnRaw     from './sections/08-part-7.en.md?raw';
  import Part8EnRaw     from './sections/09-part-8.en.md?raw';
  import AppendixAEnRaw from './sections/10-appendix-a.en.md?raw';
  import AppendixBEnRaw from './sections/10-appendix-b.en.md?raw';

  // Swedish
  import AbstractSvRaw  from './sections/00-abstract.sv.md?raw';
  import Part0SvRaw     from './sections/01-part-0.sv.md?raw';
  import Part1SvRaw     from './sections/02-part-1.sv.md?raw';
  import Part2SvRaw     from './sections/03-part-2.sv.md?raw';
  import Part3SvRaw     from './sections/04-part-3.sv.md?raw';
  import Part4SvRaw     from './sections/05-part-4.sv.md?raw';
  import Part5SvRaw     from './sections/06-part-5.sv.md?raw';
  import Part6SvRaw     from './sections/07-part-6.sv.md?raw';
  import Part7SvRaw     from './sections/08-part-7.sv.md?raw';
  import Part8SvRaw     from './sections/09-part-8.sv.md?raw';
  import AppendixASvRaw from './sections/10-appendix-a.sv.md?raw';
  import AppendixBSvRaw from './sections/10-appendix-b.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText: Record<string, Record<string, string>> = {
    en: {
      'abstract': AbstractEnRaw,
      'part-0': Part0EnRaw, 'part-1': Part1EnRaw, 'part-2': Part2EnRaw,
      'part-3': Part3EnRaw, 'part-4': Part4EnRaw, 'part-5': Part5EnRaw,
      'part-6': Part6EnRaw, 'part-7': Part7EnRaw, 'part-8': Part8EnRaw,
      'appendix-a': AppendixAEnRaw, 'appendix-b': AppendixBEnRaw,
    },
    sv: {
      'abstract': AbstractSvRaw,
      'part-0': Part0SvRaw, 'part-1': Part1SvRaw, 'part-2': Part2SvRaw,
      'part-3': Part3SvRaw, 'part-4': Part4SvRaw, 'part-5': Part5SvRaw,
      'part-6': Part6SvRaw, 'part-7': Part7SvRaw, 'part-8': Part8SvRaw, 
      'appendix-a': AppendixASvRaw, 'appendix-b': AppendixBSvRaw,
    },
  };

  // --- 3. CONTENT MAP ---
  const contentMap = [
    { id: 'abstract', titleEn: 'Abstract',                                                titleSv: 'Sammanfattning' },
    { id: 'part-0',   titleEn: 'Part 0: The Operator Seam',                               titleSv: 'Del 0: Operatörssömmen' },
    { id: 'part-1',   titleEn: 'Part I: Inherited Unobservability',                       titleSv: 'Del I: Ärvd oobserverbarhet' },
    { id: 'part-2',   titleEn: 'Part II: One State Vector',                               titleSv: 'Del II: En tillståndsvektor' },
    { id: 'part-3',   titleEn: 'Part III: The Self-to-Other Distortion',                  titleSv: 'Del III: Själv-till-andra-förvrängningen' },
    { id: 'part-4',   titleEn: 'Part IV: The Operator-Seeded Legitimacy Spiral',          titleSv: 'Del IV: Den operatörssådda legitimitetsnedåtgående spiralen' },
    { id: 'part-5',   titleEn: 'Part V: Against Borrowed Formal Authority',               titleSv: 'Del V: Mot lånad formell auktoritet' },
    { id: 'part-6',   titleEn: 'Part VI: Compassion as Consequence, and the Limit of Compensation', titleSv: 'Del VI: Medkänsla som konsekvens, och kompensationens gräns' },
    { id: 'part-7',   titleEn: 'Part VII: The Boundary at the Operator',                  titleSv: 'Del VII: Gränsen vid operatören' },
    { id: 'part-8',   titleEn: 'Part VIII: The Formation of the Observer',                  titleSv: 'Del VIII: Observatörens formation' },
    { id: 'appendix-a', titleEn: 'Appendix A: Simulation Specification',                  titleSv: 'Bilaga A: Simuleringsspecifikation' },
    { id: 'appendix-b', titleEn: 'Appendix B: The Inheritance Asymmetry',                  titleSv: 'Bilaga B: Arvsasymmetrin' },
  ];

  // --- 4. UI TRANSLATIONS & METADATA ---
  const ui = {
    en: {
      tag: 'Working Paper · Self III — Companion to the Governance as Engineering Series',
      companionNote: 'Third paper in the Self trilogy, bridging personal and institutional architecture.',
      companionLinksLabel: 'Self Series',
      companionLinks: [
        { href: '/working-papers/self-variety-gap',         label: 'Self I: The Variety Gap in the Self →' },
        { href: '/working-papers/adaptive-self-governance',  label: 'Self II: Adaptive Self‑Governance →' },
      ],
      seriesNote: 'This paper closes the seam between the Governance as Engineering series and the Self papers. It derives Inherited Unobservability and the operator‑seeded legitimacy spiral.',
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
        { href: '/working-papers/boundary-selection-deficits',            label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/adaptation-bottleneck',                   label: 'Paper XV: The Adaptation Bottleneck →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'The Governance as Engineering series and the Self papers have run as parallel inquiries — one on institutions, one on individuals. This paper closes the seam between them. It locates the operator, the human being at the institution\'s decision node, as the point where the limits of personal architecture are inherited by the governance system.',
      contextOutro: 'The central result is Inherited Unobservability: for interior dimensions of the governed, an institution\'s capacity to perceive is upper‑bounded by the perceptual capacity of the human operators through whom those dimensions must pass. The paper couples this to the Self I and II results, identifies an operator‑seeded legitimacy spiral, and marks the boundary between specifying the operator an architecture requires and producing the operator who meets the specification.',
      allWorkingpapers: '← All Working Papers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Själv III — Kompanjon till serien Styrning som ingenjörskonst',
      companionNote: 'Tredje rapporten i Själv‑trilogin, som överbryggar personlig och institutionell arkitektur.',
      companionLinksLabel: 'Självserien',
      companionLinks: [
        { href: '/working-papers/self-variety-gap',         label: 'Själv I: Variationsgapet i självet →' },
        { href: '/working-papers/adaptive-self-governance',  label: 'Själv II: Adaptiv självstyrning →' },
      ],
      seriesNote: 'Denna rapport stänger sömmen mellan serien Styrning som ingenjörskonst och Själv‑artiklarna. Den härleder Ärvd oobserverbarhet och den operatörssådda legitimitetsnedåtgående spiralen.',
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
        { href: '/working-papers/boundary-selection-deficits',            label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
        { href: '/working-papers/adaptation-bottleneck',                   label: 'Rapport XV: Adaptationsflaskhalsen →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Serien Styrning som ingenjörskonst och Själv‑artiklarna har löpt som parallella undersökningar — en om institutioner, en om individer. Denna rapport stänger sömmen mellan dem. Den lokaliserar operatören, människan vid institutionens beslutsnod, som den punkt där den personliga arkitekturens begränsningar ärvs av styrningssystemet.',
      contextOutro: 'Det centrala resultatet är Ärvd oobserverbarhet: för de styrdas inre dimensioner begränsas institutionens perceptionsförmåga uppåt av den perceptuella kapaciteten hos de mänskliga operatörer genom vilka dessa dimensioner måste passera. Rapporten kopplar detta till resultaten i Själv I och II, identifierar en operatörssådd legitimitetsnedåtgående spiral och markerar gränsen mellan att specificera den operatör en arkitektur kräver och att producera den operatör som möter specifikationen.',
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
      title: 'Self III: The Operator',
      subtitle: 'How Institutions Inherit the Limits of Their Nodes',
      description: 'Closes the seam between the Governance as Engineering series and the Self papers. Derives Inherited Unobservability and the operator‑seeded legitimacy spiral. The final paper in the Self trilogy.',
    },
    sv: {
      title: 'Själv III: Operatören',
      subtitle: 'Hur institutioner ärver sina noders begränsningar',
      description: 'Stänger sömmen mellan serien Styrning som ingenjörskonst och Själv‑artiklarna. Härleder Ärvd oobserverbarhet och den operatörssådda legitimitetsnedåtgående spiralen. Den avslutande rapporten i Själv‑trilogin.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'self-operator-sv.pdf' : 'self-operator.pdf');

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
      ? `Holmström, B. K. (2026). Själv III: Operatören — Hur institutioner ärver sina noders begränsningar. GGF Vitboksserie, kompanjonvolym.`
      : `Holmström, B. K. (2026). Self III: The Operator — How Institutions Inherit the Limits of Their Nodes. GaE Working Paper Series, companion volume.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
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
        {t.allWorkingpapers}
      </a>
    </div>

    <!-- Companion note (Self series) -->
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

    <!-- Series note (main GaE) -->
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
        {#if section.id !== 'part-7'}
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
