<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. IMPORT ALL SECTIONS AS RAW TEXT ---
  // English
  import AbstractContribEnRaw from './sections/00-abstract-contributions.en.md?raw';
  import Part0EnRaw   from './sections/00-part-0.en.md?raw';
  import Part1EnRaw   from './sections/01-part-1.en.md?raw';
  import Part2EnRaw   from './sections/02-part-2.en.md?raw';
  import Part3EnRaw   from './sections/03-part-3.en.md?raw';
  import Part4EnRaw   from './sections/04-part-4.en.md?raw';
  import Part5EnRaw   from './sections/05-part-5.en.md?raw';
  import Part6EnRaw   from './sections/06-part-6.en.md?raw';
  import Part7EnRaw   from './sections/07-part-7.en.md?raw';
  import Part8EnRaw   from './sections/08-part-8.en.md?raw';
  import Part9EnRaw   from './sections/09-part-9.en.md?raw';
  import AppendixAEnRaw from './sections/10-appendix-a.en.md?raw';
  import AppendixBEnRaw from './sections/10-appendix-b.en.md?raw';
  import AppendixCEnRaw from './sections/10-appendix-c.en.md?raw';
  import AppendixDEnRaw from './sections/10-appendix-d.en.md?raw';
  import AppendixEEnRaw from './sections/10-appendix-e.en.md?raw';

  // Swedish
  import AbstractContribSvRaw from './sections/00-abstract-contributions.sv.md?raw';
  import Part0SvRaw   from './sections/00-part-0.sv.md?raw';
  import Part1SvRaw   from './sections/01-part-1.sv.md?raw';
  import Part2SvRaw   from './sections/02-part-2.sv.md?raw';
  import Part3SvRaw   from './sections/03-part-3.sv.md?raw';
  import Part4SvRaw   from './sections/04-part-4.sv.md?raw';
  import Part5SvRaw   from './sections/05-part-5.sv.md?raw';
  import Part6SvRaw   from './sections/06-part-6.sv.md?raw';
  import Part7SvRaw   from './sections/07-part-7.sv.md?raw';
  import Part8SvRaw   from './sections/08-part-8.sv.md?raw';
  import Part9SvRaw   from './sections/09-part-9.sv.md?raw';
  import AppendixASvRaw from './sections/10-appendix-a.sv.md?raw';
  import AppendixBSvRaw from './sections/10-appendix-b.sv.md?raw';
  import AppendixCSvRaw from './sections/10-appendix-c.sv.md?raw';
  import AppendixDSvRaw from './sections/10-appendix-d.sv.md?raw';
  import AppendixESvRaw from './sections/10-appendix-e.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  const rawText: Record<string, Record<string, string>> = {
    en: {
      'abstract-contributions': AbstractContribEnRaw,
      'part-0': Part0EnRaw, 'part-1': Part1EnRaw, 'part-2': Part2EnRaw,
      'part-3': Part3EnRaw, 'part-4': Part4EnRaw, 'part-5': Part5EnRaw,
      'part-6': Part6EnRaw, 'part-7': Part7EnRaw, 'part-8': Part8EnRaw,
      'part-9': Part9EnRaw,
      'appendix-a': AppendixAEnRaw, 'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw, 'appendix-d': AppendixDEnRaw,
      'appendix-e': AppendixEEnRaw,
    },
    sv: {
      'abstract-contributions': AbstractContribSvRaw,
      'part-0': Part0SvRaw, 'part-1': Part1SvRaw, 'part-2': Part2SvRaw,
      'part-3': Part3SvRaw, 'part-4': Part4SvRaw, 'part-5': Part5SvRaw,
      'part-6': Part6SvRaw, 'part-7': Part7SvRaw, 'part-8': Part8SvRaw,
      'part-9': Part9SvRaw,
      'appendix-a': AppendixASvRaw, 'appendix-b': AppendixBSvRaw,
      'appendix-c': AppendixCSvRaw, 'appendix-d': AppendixDSvRaw,
      'appendix-e': AppendixESvRaw,
    }
  };

  // --- 3. CONTENT MAP ---
  const contentMap = [
    { id: 'abstract-contributions', titleEn: 'Abstract and Contributions',                          titleSv: 'Sammanfattning och bidrag' },
    { id: 'part-0',                 titleEn: 'Part 0: Epistemic Frame',                             titleSv: 'Del 0: Epistemisk ram' },
    { id: 'part-1',                 titleEn: 'Part I: The Adaptive Problem and the Reflexive Self', titleSv: 'Del I: Det adaptiva problemet och det reflexiva självet' },
    { id: 'part-2',                 titleEn: 'Part II: Observer Diversity',                         titleSv: 'Del II: Observatörsmångfald' },
    { id: 'part-3',                 titleEn: 'Part III: Actuation Integrity',                       titleSv: 'Del III: Aktueringsintegritet' },
    { id: 'part-4',                 titleEn: 'Part IV: Self‑Legitimacy',                            titleSv: 'Del IV: Själv‑legitimitet' },
    { id: 'part-5',                 titleEn: 'Part V: Boundary Calibration',                        titleSv: 'Del V: Gränskalibrering' },
    { id: 'part-6',                 titleEn: 'Part VI: Adaptive Learning',                          titleSv: 'Del VI: Adaptivt lärande' },
    { id: 'part-7',                 titleEn: 'Part VII: Composite Failure Modes',                   titleSv: 'Del VII: Sammansatta felmoder' },
    { id: 'part-8',                 titleEn: 'Part VIII: Design Principles',                        titleSv: 'Del VIII: Designprinciper' },
    { id: 'part-9',                 titleEn: 'Part IX: The Limit of the Framework',                 titleSv: 'Del IX: Ramverkets gräns' },
    { id: 'appendix-a',             titleEn: 'Appendix A: The Self‑Observation Ensemble and the Correlation Tax', titleSv: 'Appendix A: Självobservationsensemblen och korrelationsskatten' },
    { id: 'appendix-b',             titleEn: 'Appendix B: The Actuation Chain and the Energy Law',        titleSv: 'Appendix B: Aktiveringskedjan och energilagen' },
    { id: 'appendix-c',             titleEn: 'Appendix C: Self‑Legitimacy Dynamics',                titleSv: 'Appendix C: Själv‑legitimitetsdynamik' },
    { id: 'appendix-d',             titleEn: 'Appendix D: Adaptive Learning and the Two‑Sided Bound',     titleSv: 'Appendix D: Adaptivt lärande och den tvåsidiga gränsen' },
    { id: 'appendix-e',             titleEn: 'Appendix E: Observer–Plant Identity and the Measurement–Disturbance Coupling', titleSv: 'Appendix E: Observatör–anläggning‑identitet och mätning–störning‑kopplingen' },
  ];

  // --- 4. UI TRANSLATIONS & METADATA ---
  const ui = {
    en: {
      tag: 'Working Paper · Companion to the Governance as Engineering Series',
      companionNote: 'Companion to The Self‑Variety Gap and Cycle Two of the Governance as Engineering series.',
      companionLinksLabel: 'Self Series',
      companionLinks: [
        { href: '/working-papers/self-variety-gap', label: 'Self I: The Variety Gap in the Self →' },
        { href: '/working-papers/self-operator', label: 'Self III: The Operator →'},
      ],
      seriesNote: 'This paper applies the Cycle Two adaptation triad — observer diversity, actuation integrity, adaptive learning — to the self as a reflexive controller. It is a companion to the main Governance as Engineering series.',
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
      contextIntro: 'This companion volume takes the Cycle Two adaptation triad — observer diversity (Paper X), actuation integrity (Paper XI), boundary calibration (Paper XII), self‑legitimacy (Paper XIII), and adaptive learning (Paper XIV) — and applies it to the most intimate controller of all: the self. The self is a controller whose controller and plant are the same system; it must redesign itself while running, without destabilising the regime it is revising.',
      contextOutro: 'The paper models the correlation tax on self‑knowledge, delegation‑depth attenuation between intention and act, built vs. borrowed self‑trust, boundary calibration at the personal scale, and the reflexive risk of self‑revision. It includes formal appendices on self‑observer correlation, actuation chain attenuation, self‑legitimacy dynamics, and observer–plant identity.',
      allWorkingpapers: '← All Working Papers',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
      share: 'Share this paper',
    },
    sv: {
      tag: 'Arbetsdokument · Kompanjon till serien Styrning som ingenjörskonst',
      companionNote: 'Kompanjon till Själv‑variationsgapet och Cykel Två i serien Styrning som ingenjörskonst.',
      companionLinksLabel: 'Självserien',
      companionLinks: [
        { href: '/working-papers/self-variety-gap', label: 'Själv I: Variationsgapet i självet →' },
        { href: '/working-papers/self-operator', label: 'Själv III: Operatören →'},
      ],
      seriesNote: 'Denna rapport tillämpar Cykel Tvås adaptationstriad — observatörsmångfald, aktueringsintegritet, adaptivt lärande — på självet som en reflexiv kontrollant. Den är en kompanjon till huvudserien Styrning som ingenjörskonst.',
      seriesLinks: [
        { href: '/working-papers/below-the-factorization', label: 'Rapport 0: Under faktoriseringen →' },
        { href: '/working-papers/governance-stability-simulator', label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/working-papers/fractality-as-stability', label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/working-papers/observability-democracy-connection', label: 'Rapport III: Observerbarhets‑demokratikopplingen →' },
        { href: '/working-papers/requisite-variety-and-the-commons', label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/working-papers/coordination-failure-tax', label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/working-papers/the-variety-gap', label: 'Rapport VI: Varietetsgapet →' },
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
      contextIntro: 'Denna kompanjonvolym tar Cykel Tvås adaptationstriad — observatörsmångfald (Rapport X), aktueringsintegritet (Rapport XI), gränskalibrering (Rapport XII), själv‑legitimitet (Rapport XIII) och adaptivt lärande (Rapport XIV) — och tillämpar den på den mest intima kontrollanten av alla: självet. Självet är en kontrollant vars kontrollant och system är samma entitet; det måste omforma sig självt medan det körs, utan att destabilisera den regim det reviderar.',
      contextOutro: 'Rapporten modellerar korrelationsskatten på självkännedom, delegationsdjupets dämpning mellan intention och handling, byggd vs. lånad självtillit, gränskalibrering på den personliga skalan och den reflexiva risken med självrevision. Den innehåller formella appendix om själv‑observatörskorrelation, aktueringskedjans dämpning, själv‑legitimitetsdynamik och observatör–system‑identitet.',
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
      title: 'Adaptive Self‑Governance: The Reflexive Controller and the Limits of Self‑Revision',
      subtitle: 'The Reflexive Controller and the Limits of Self‑Revision',
      description: 'Companion to The Self‑Variety Gap and Cycle Two of the Governance as Engineering series. Applies the adaptation triad to the self as a reflexive controller that must redesign itself while running.',
    },
    sv: {
      title: 'Adaptiv självstyrning: Den reflexiva kontrollanten och självrevisionens gränser',
      subtitle: 'Den reflexiva kontrollanten och självrevisionens gränser',
      description: 'Kompanjon till Själv‑variationsgapet och Cykel Två i serien Styrning som ingenjörskonst. Tillämpar adaptationstriaden på självet som en reflexiv kontrollant som måste omforma sig själv medan det körs.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('abstract-contributions');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'adaptive-self-governance-sv.pdf' : 'adaptive-self-governance.pdf');

  function sectionTitle(section: typeof contentMap[0]) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  // Pre‑render LaTeX with KaTeX, then parse markdown
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

    // Inline math: $ ... $ (single, not double) and \( ... \)
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
      ? `Holmström, B. K. (2026). Adaptiv självstyrning: Den reflexiva kontrollanten och självrevisionens gränser. GGF Vitboksserie, kompanjonvolym.`
      : `Holmström, B. K. (2026). Adaptive Self‑Governance: The Reflexive Controller and the Limits of Self‑Revision. GaE Working Paper Series, companion volume.`;
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
