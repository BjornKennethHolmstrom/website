<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. IMPORT ALL SECTIONS AS RAW TEXT ---
  // English
  import AbstractEnRaw   from './sections/abstract.en.md?raw';
  import Section01EnRaw  from './sections/section-01.en.md?raw';
  import Section02EnRaw  from './sections/section-02.en.md?raw';
  import Section03EnRaw  from './sections/section-03.en.md?raw';
  import Section04EnRaw  from './sections/section-04.en.md?raw';
  import Section05EnRaw  from './sections/section-05.en.md?raw';
  import Section06EnRaw  from './sections/section-06.en.md?raw';
  import Section07EnRaw  from './sections/section-07.en.md?raw';
  import Section08EnRaw  from './sections/section-08.en.md?raw';
  import Section09EnRaw  from './sections/section-09.en.md?raw';
  import Section10EnRaw  from './sections/section-10.en.md?raw';
  import Section11EnRaw  from './sections/section-11.en.md?raw';
  import AppendixAEnRaw  from './sections/appendix-a.en.md?raw';
  import AppendixBEnRaw  from './sections/appendix-b.en.md?raw';
  import AppendixCEnRaw  from './sections/appendix-c.en.md?raw';

  // Swedish
  import AbstractSvRaw   from './sections/abstract.sv.md?raw';
  import Section01SvRaw  from './sections/section-01.sv.md?raw';
  import Section02SvRaw  from './sections/section-02.sv.md?raw';
  import Section03SvRaw  from './sections/section-03.sv.md?raw';
  import Section04SvRaw  from './sections/section-04.sv.md?raw';
  import Section05SvRaw  from './sections/section-05.sv.md?raw';
  import Section06SvRaw  from './sections/section-06.sv.md?raw';
  import Section07SvRaw  from './sections/section-07.sv.md?raw';
  import Section08SvRaw  from './sections/section-08.sv.md?raw';
  import Section09SvRaw  from './sections/section-09.sv.md?raw';
  import Section10SvRaw  from './sections/section-10.sv.md?raw';
  import Section11SvRaw  from './sections/section-11.sv.md?raw';
  import AppendixASvRaw  from './sections/appendix-a.sv.md?raw';
  import AppendixBSvRaw  from './sections/appendix-b.sv.md?raw';
  import AppendixCSvRaw  from './sections/appendix-c.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText: Record<string, Record<string, string>> = {
    en: {
      'abstract':    AbstractEnRaw,
      'section-01': Section01EnRaw, 'section-02': Section02EnRaw,
      'section-03': Section03EnRaw, 'section-04': Section04EnRaw,
      'section-05': Section05EnRaw, 'section-06': Section06EnRaw,
      'section-07': Section07EnRaw, 'section-08': Section08EnRaw,
      'section-09': Section09EnRaw, 'section-10': Section10EnRaw,
      'section-11': Section11EnRaw,
      'appendix-a': AppendixAEnRaw, 'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw,
    },
    sv: {
      'abstract':    AbstractSvRaw,
      'section-01': Section01SvRaw, 'section-02': Section02SvRaw,
      'section-03': Section03SvRaw, 'section-04': Section04SvRaw,
      'section-05': Section05SvRaw, 'section-06': Section06SvRaw,
      'section-07': Section07SvRaw, 'section-08': Section08SvRaw,
      'section-09': Section09SvRaw, 'section-10': Section10SvRaw,
      'section-11': Section11SvRaw,
      'appendix-a': AppendixASvRaw, 'appendix-b': AppendixBSvRaw,
      'appendix-c': AppendixCSvRaw,
    },
  };

  // --- 3. CONTENT MAP ---
  const contentMap = [
    { id: 'abstract',    titleEn: 'Abstract',                                                          titleSv: 'Sammanfattning' },
    { id: 'section-01',  titleEn: '1. Introduction',                                                    titleSv: '1. Introduktion' },
    { id: 'section-02',  titleEn: '2. Conceptual model',                                                titleSv: '2. Konceptuell modell' },
    { id: 'section-03',  titleEn: '3. Experiment 1: a proxy that is a sensor but not an objective',    titleSv: '3. Experiment 1: en proxy som är en sensor men inte ett mål' },
    { id: 'section-04',  titleEn: '4. Experiment 2: resolution and access cost as controlled variables', titleSv: '4. Experiment 2: upplösning och åtkomstkostnad som kontrollerade variabler' },
    { id: 'section-05',  titleEn: '5. Experiment 3: the bias arises from the data',                    titleSv: '5. Experiment 3: biasen uppstår ur datan' },
    { id: 'section-06',  titleEn: '6. The mechanism: an excitation-starved observer',                   titleSv: '6. Mekanismen: en exciteringssvulten observatör' },
    { id: 'section-07',  titleEn: '7. A governance hypothesis',                                        titleSv: '7. En styrningshypotes' },
    { id: 'section-08',  titleEn: '8. What did not survive',                                           titleSv: '8. Vad som inte överlevde' },
    { id: 'section-09',  titleEn: '9. Limitations',                                                    titleSv: '9. Begränsningar' },
    { id: 'section-10',  titleEn: '10. Future work',                                                   titleSv: '10. Framtida arbete' },
    { id: 'section-11',  titleEn: '11. Conclusion',                                                    titleSv: '11. Slutsats' },
    { id: 'appendix-a',  titleEn: 'Appendix A: Environment, agent, and hyperparameters',               titleSv: 'Appendix A: Miljö, agent och hyperparametrar' },
    { id: 'appendix-b',  titleEn: 'Appendix B: Reproducibility manifest',                              titleSv: 'Appendix B: Reproducerbarhetsmanifest' },
    { id: 'appendix-c',  titleEn: 'Appendix C: Statistical methods',                                   titleSv: 'Appendix C: Statistiska metoder' },
  ];

  // --- 4. UI TRANSLATIONS & METADATA ---
  const ui = {
    en: {
      tag: 'Working Paper · Series XXIV',
      seriesNote: 'This is the twenty‑fourth paper in the Governance as Engineering series. It isolates a self‑reinforcing loop between an observer and the excitation that trains it.',
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
        { href: '/working-papers/boundary-selection-deficits',            label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/adaptation-bottleneck',                   label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization',     label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor',                    label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability',                    label: 'Paper XVIII: The Boundary Instability Principle →' },
        { href: '/working-papers/governors-sentinels-bridges',             label: 'Paper XIX: Governors, Sentinels, and Bridges →' },
        { href: '/working-papers/three-laws-from-one-bound',               label: 'Paper XX: Three Laws from One Bound →' },
        { href: '/working-papers/when-to-stop-learning',                   label: 'Paper XXI: When to Stop Learning, and When to Stop →' },
        { href: '/working-papers/what-cannot-be-guaranteed',               label: 'Paper XXII: What Cannot Be Guaranteed →' },
        { href: '/working-papers/shape-of-reform',                         label: 'Paper XXIII: The Shape of Reform →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'Governance increasingly proposes to measure adaptive capacity — resilience, pluralism, optionality — and to steer by the measurement. This paper asks, in a minimal adaptive system, what changes when such a measure is optimized rather than merely observed.',
      contextOutro: 'A diversity proxy built on a coarse‑grained observer tracks reachable options when used passively, but decouples entirely once optimized: the observer\'s resolution follows excitation, and task‑centred operation starves the periphery of the excitation the observer needs to resolve it. The blind spot is not imposed but maintained by the closed loop, and broader exploration does not break it. Only structural exposure that guarantees observation of the margin repairs the decoupling.',
      allWorkingpapers: '← All Working Papers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Serie XXIV',
      seriesNote: 'Detta är den tjugofjärde rapporten i serien Styrning som ingenjörskonst. Den isolerar en självförstärkande loop mellan en observatör och den excitering som tränar den.',
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
        { href: '/working-papers/boundary-selection-deficits',            label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain',             label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller',       label: 'Rapport XIV: Styrning som en adaptiv regulator →' },
        { href: '/working-papers/adaptation-bottleneck',                   label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization',     label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor',                    label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability',                    label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
        { href: '/working-papers/governors-sentinels-bridges',             label: 'Rapport XIX: Guvernörer, vaktposter och broar →' },
        { href: '/working-papers/three-laws-from-one-bound',               label: 'Rapport XX: Tre lagar från en gräns →' },
        { href: '/working-papers/when-to-stop-learning',                   label: 'Rapport XXI: När man ska sluta lära sig, och när man ska sluta →' },
        { href: '/working-papers/what-cannot-be-guaranteed',               label: 'Rapport XXII: Vad som inte kan garanteras →' },
        { href: '/working-papers/shape-of-reform',                         label: 'Rapport XXIII: Reformens form →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Styrning föreslår allt oftare att mäta adaptiv kapacitet — resiliens, pluralism, valfrihet — och att styra efter mätningen. Denna artikel frågar, i ett minimalt adaptivt system, vad som förändras när ett sådant mått optimeras snarare än bara observeras.',
      contextOutro: 'En diversitetsproxy byggd på en grovkornig observatör spårar nåbara alternativ när den används passivt, men kopplas helt ifrån så snart den optimeras: observatörens upplösning följer excitering, och uppgiftscentrerad verksamhet svälter periferin på den excitering observatören behöver för att upplösa den. Den blinda fläcken är inte påtvingad utan upprätthålls av den slutna loopen, och bredare utforskning bryter den inte. Endast strukturell exponering som garanterar observation av marginalen reparerar frånkopplingen.',
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
      title: 'The Observer You Cannot Afford to Excite',
      subtitle: 'Resolution bias, excitation, and reachable alternatives in a minimal adaptive system',
      description: 'Asks what changes when a diversity metric becomes an optimization target. A learned observer compresses the periphery; optimizing the proxy destroys reach while inflating the score. Only structural exposure repairs it. Paper XXIV in the Governance as Engineering series.',
    },
    sv: {
      title: 'Observatören du inte har råd att excitera',
      subtitle: 'Upplösningsbias, excitering och nåbara alternativ i ett minimalt adaptivt system',
      description: 'Frågar vad som förändras när ett diversitetsmått blir ett optimeringsmål. En inlärd observatör komprimerar periferin; optimering av proxyn förstör nåbarhet samtidigt som poängen stiger. Endast strukturell exponering reparerar det. Rapport XXIV i serien Styrning som ingenjörskonst.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'excitation-starved-observer-sv.pdf' : 'excitation-starved-observer.pdf');
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
      ? `Holmström, B. K. (2026). Observatören du inte har råd att excitera: Upplösningsbias, excitering och nåbara alternativ i ett minimalt adaptivt system. Styrning som ingenjörskonst, Rapport XXIV.`
      : `Holmström, B. K. (2026). The Observer You Cannot Afford to Excite: Resolution bias, excitation, and reachable alternatives in a minimal adaptive system. Governance as Engineering, Paper XXIV.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | GaE Working Paper"
  description={meta.description}
  type="article"
  publishedTime="2026-07"
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
