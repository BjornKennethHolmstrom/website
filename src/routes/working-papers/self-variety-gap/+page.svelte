<script lang="ts">
  import Provenance from '$lib/components/Provenance.svelte';
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. IMPORT MARKDOWN SECTIONS (Companion: Self-Variety Gap) ---

  import AbstractEn from './sections/abstract.en.md?raw';
  import AbstractSv from './sections/abstract.sv.md?raw';

  import Part1En from './sections/part-1.en.md?raw';
  import Part1Sv from './sections/part-1.sv.md?raw';

  import Part2En from './sections/part-2.en.md?raw';
  import Part2Sv from './sections/part-2.sv.md?raw';

  import Part3En from './sections/part-3.en.md?raw';
  import Part3Sv from './sections/part-3.sv.md?raw';

  import Part4En from './sections/part-4.en.md?raw';
  import Part4Sv from './sections/part-4.sv.md?raw';

  import Part5En from './sections/part-5.en.md?raw';
  import Part5Sv from './sections/part-5.sv.md?raw';

  import Part6En from './sections/part-6.en.md?raw';
  import Part6Sv from './sections/part-6.sv.md?raw';

  import Part7En from './sections/part-7.en.md?raw';
  import Part7Sv from './sections/part-7.sv.md?raw';

  import AppendixAEn from './sections/appendix-a.en.md?raw';
  import AppendixASv from './sections/appendix-a.sv.md?raw';

  import AppendixBEn from './sections/appendix-b.en.md?raw';
  import AppendixBSv from './sections/appendix-b.sv.md?raw';

  import AppendixCEn from './sections/appendix-c.en.md?raw';
  import AppendixCSv from './sections/appendix-c.sv.md?raw';

  import AppendixDEn from './sections/appendix-d.en.md?raw';
  import AppendixDSv from './sections/appendix-d.sv.md?raw';

  import AppendixEEn from './sections/appendix-e.en.md?raw';
  import AppendixESv from './sections/appendix-e.sv.md?raw';

  // --- 2. CONTENT STRUCTURE ---

  const contentMap = [
    {
      id: 'abstract',
      titleEn: "Abstract",
      titleSv: "Sammanfattning",
      compEn: AbstractEn,
      compSv: AbstractSv,
    },
    {
      id: 'part-1',
      titleEn: "Part I: The self as a conditional feedback analogy",
      titleSv: "Del I: Självet som en villkorad återkopplingsanalogi",
      compEn: Part1En,
      compSv: Part1Sv,
    },
    {
      id: 'part-2',
      titleEn: "Part II: Values, observation and feasible action",
      titleSv: "Del II: Värderingar, observation och genomförbar handling",
      compEn: Part2En,
      compSv: Part2Sv,
    },
    {
      id: 'part-3',
      titleEn: "Part III: Domains of reflection",
      titleSv: "Del III: Områden för reflektion",
      compEn: Part3En,
      compSv: Part3Sv,
    },
    {
      id: 'part-4',
      titleEn: "Part IV: Psychological hypotheses and evidential limits",
      titleSv: "Del IV: Psykologiska hypoteser och evidensens gränser",
      compEn: Part4En,
      compSv: Part4Sv,
    },
    {
      id: 'part-5',
      titleEn: "Part V: Personal meta-governance as a voluntary practice",
      titleSv: "Del V: Personlig metastyrning som frivillig praktik",
      compEn: Part5En,
      compSv: Part5Sv,
    },
    {
      id: 'part-6',
      titleEn: "Part VI: The speculative horizon — transcendence and nonduality",
      titleSv: "Del VI: Den spekulativa horisonten — transcendens och icke-dualitet",
      compEn: Part6En,
      compSv: Part6Sv,
    },
    {
      id: 'part-7',
      titleEn: "Part VII: Conclusion — adequacy without an imperative",
      titleSv: "Del VII: Slutsats — tillräcklighet utan imperativ",
      compEn: Part7En,
      compSv: Part7Sv,
    },
    {
      id: 'appendix-a',
      titleEn: "Appendix A: Static task-relative adequacy",
      titleSv: "Appendix A: Statisk uppgiftsrelativ tillräcklighet",
      compEn: AppendixAEn,
      compSv: AppendixASv,
    },
    {
      id: 'appendix-b',
      titleEn: "Appendix B: Changing tasks and the limits of timing",
      titleSv: "Appendix B: Föränderliga uppgifter och tidsberäkningens gränser",
      compEn: AppendixBEn,
      compSv: AppendixBSv,
    },
    {
      id: 'appendix-c',
      titleEn: "Appendix C: Research leads, not validation",
      titleSv: "Appendix C: Forskningsuppslag, inte validering",
      compEn: AppendixCEn,
      compSv: AppendixCSv,
    },
    {
      id: 'appendix-d',
      titleEn: "Appendix D: Legacy simulator and controlled replay",
      titleSv: "Appendix D: Tidigare simulator och kontrollerad återkörning",
      compEn: AppendixDEn,
      compSv: AppendixDSv,
    },
    {
      id: 'appendix-e',
      titleEn: "Appendix E: Bibliographic leads",
      titleSv: "Appendix E: Bibliografiska uppslag",
      compEn: AppendixEEn,
      compSv: AppendixESv,
    },
  ];

  // --- 3. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'AI-generated working paper · Companion to the Governance as Engineering Series',
      companionLinksLabel: 'Self Series',
      companionLinks: [
        { href: '/working-papers/adaptive-self-governance', label: 'Self II: Adaptive Self Governance →' },
        { href: '/working-papers/self-operator', label: 'Self III: The Operator →'},
      ],
      companionNote: 'Self I: a conditional personal analogy, not a psychological diagnostic.',
      seriesNote: 'Companion to Governance as Engineering; revised November 2026.',
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
        { href: '/working-papers/adaptation-bottleneck', label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor', label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability', label: 'Paper XVIII: The Boundary Instability Principle →' },
        { href: '/working-papers/governors-sentinels-bridges', label: 'Paper XIX: Governors, Sentinels, and Bridges →' },
        { href: '/working-papers/three-laws-from-one-bound', label: 'Paper XX: Three Laws from One Bound →' },
        { href: '/working-papers/when-to-stop-learning', label: 'Paper XXI: When to Stop Learning, and When to Stop →' },
        { href: '/working-papers/what-cannot-be-guaranteed', label: 'Paper XXII: What Cannot Be Guaranteed →' },
        { href: '/working-papers/shape-of-reform', label: 'Paper XXIII: The Shape of Reform →' },
        { href: '/working-papers/excitation-starved-observer', label: 'Paper XXIV: The Observer You Cannot Afford to Excite →' },
        { href: '/working-papers/where-reform-pushes-down', label: 'Paper XXV: Where Reform Pushes Down, Strategy Pushes Back →' },
        { href: '/working-papers/cost-of-returning', label: 'Paper XXVI: The Cost of Returning →' },
      ],
      contextTitle: 'Context',
      contextIntro: "A philosophical and model-scoped exploration of values, awareness and feasible action. The former personal gap index and dissolution predictions are withdrawn.",
      contextOutro: "The legacy simulation is replayed with its original assumptions and a small matched-seed sensitivity check. Neither establishes a clinical or causal result about people.",
      allWorkingpapers: '← All Working Papers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'AI-genererat arbetsdokument · Kompanjon till serien Styrning som ingenjörskonst',
      companionLinksLabel: 'Självserien',
      companionLinks: [
        { href: '/working-papers/adaptive-self-governance', label: 'Själv II: Adaptiv självstyrning →' },
        { href: '/working-papers/self-operator', label: 'Själv III: Operatören →'},
      ],
      companionNote: 'Själv I: en villkorad personlig analogi, inte ett psykologiskt diagnosverktyg.',
      seriesNote: 'Kompanjon till Styrning som ingenjörskonst; reviderad november 2026.',
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
        { href: '/working-papers/adaptation-bottleneck', label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor', label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability', label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
        { href: '/working-papers/governors-sentinels-bridges', label: 'Rapport XIX: Guvernörer, vaktposter och broar →' },
        { href: '/working-papers/three-laws-from-one-bound', label: 'Rapport XX: Tre lagar från en gräns →' },
        { href: '/working-papers/when-to-stop-learning', label: 'Rapport XXI: När man ska sluta lära sig, och när man ska sluta →' },
        { href: '/working-papers/what-cannot-be-guaranteed', label: 'Rapport XXII: Vad som inte kan garanteras →' },
        { href: '/working-papers/shape-of-reform', label: 'Rapport XXIII: Reformens form →' },
        { href: '/working-papers/excitation-starved-observer', label: 'Rapport XXIV: Observatören du inte har råd att excitera →' },
        { href: '/working-papers/where-reform-pushes-down', label: 'Rapport XXV: Där reform trycker ner, trycker strategi tillbaka →' },
        { href: '/working-papers/cost-of-returning', label: 'Rapport XXVI: Kostnaden för att återvända →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: "En filosofisk och modellavgränsad undersökning av värderingar, medvetenhet och genomförbar handling. Det tidigare personliga gapindexet och upplösningsprediktionerna dras tillbaka.",
      contextOutro: "Den tidigare simuleringen återkörs med ursprungliga antaganden och en liten känslighetskontroll med matchade frön. Ingetdera fastställer ett kliniskt eller kausalt resultat om människor.",
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
      title: "The Variety Gap in the Self",
      subtitle: "Values, awareness and the limits of a feedback analogy",
      description: "A philosophical and model-scoped exploration of values, awareness and feasible action. The former personal gap index and dissolution predictions are withdrawn.",
    },
    sv: {
      title: "Variationsgapet i självet",
      subtitle: "Värderingar, medvetenhet och återkopplingsanalogins gränser",
      description: "En filosofisk och modellavgränsad undersökning av värderingar, medvetenhet och genomförbar handling. Det tidigare personliga gapindexet och upplösningsprediktionerna dras tillbaka.",
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

  function sectionHtml(section: typeof contentMap[0]): string {
    let content = currentLang === 'sv' ? section.compSv : section.compEn;
    const blocks: string[] = [];
    content = content.replace(/\\\[([\s\S]*?)\\\]/g, (_, tex) => {
      blocks.push(katex.renderToString(tex.trim(), {displayMode: true, throwOnError: true}));
      return `%%MATH${blocks.length - 1}%%`;
    });
    content = content.replace(/\\\(([\s\S]*?)\\\)/g, (_, tex) => {
      blocks.push(katex.renderToString(tex.trim(), {displayMode: false, throwOnError: true}));
      return `%%MATH${blocks.length - 1}%%`;
    });
    const html = marked.parse(content, {breaks: false, gfm: true}) as string;
    return html.replace(/%%MATH(\d+)%%/g, (_, i) => blocks[Number(i)] ?? '');
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
