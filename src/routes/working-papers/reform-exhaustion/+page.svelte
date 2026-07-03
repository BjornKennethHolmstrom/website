<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';

  // --- 1. IMPORT MARKDOWN SECTIONS AS RAW TEXT ---

  import AbstractEnRaw from './sections/00-abstract.en.md?raw';
  import AbstractSvRaw from './sections/00-abstract.sv.md?raw';
  import Part1EnRaw from './sections/01-part-1.en.md?raw';
  import Part1SvRaw from './sections/01-part-1.sv.md?raw';
  import Part2EnRaw from './sections/02-part-2.en.md?raw';
  import Part2SvRaw from './sections/02-part-2.sv.md?raw';
  import Part3EnRaw from './sections/03-part-3.en.md?raw';
  import Part3SvRaw from './sections/03-part-3.sv.md?raw';
  import Part4EnRaw from './sections/04-part-4.en.md?raw';
  import Part4SvRaw from './sections/04-part-4.sv.md?raw';
  import Part5EnRaw from './sections/05-part-5.en.md?raw';
  import Part5SvRaw from './sections/05-part-5.sv.md?raw';
  import Part6EnRaw from './sections/06-part-6.en.md?raw';
  import Part6SvRaw from './sections/06-part-6.sv.md?raw';
  import Part7EnRaw from './sections/07-part-7.en.md?raw';
  import Part7SvRaw from './sections/07-part-7.sv.md?raw';
  import Part8EnRaw from './sections/08-part-8.en.md?raw';
  import Part8SvRaw from './sections/08-part-8.sv.md?raw';
  import AppendixAEnRaw from './sections/09-appendix-a.en.md?raw';
  import AppendixASvRaw from './sections/09-appendix-a.sv.md?raw';
  import AppendixBEnRaw from './sections/10-appendix-b.en.md?raw';
  import AppendixBSvRaw from './sections/10-appendix-b.sv.md?raw';
  import AppendixCEnRaw from './sections/11-appendix-c.en.md?raw';
  import AppendixCSvRaw from './sections/11-appendix-c.sv.md?raw';

  // --- 2. RAW TEXT MAP ---
  // Object mapping language to raw strings for each section
  const rawText = {
    en: {
      abstract: AbstractEnRaw,
      'part-1': Part1EnRaw,
      'part-2': Part2EnRaw,
      'part-3': Part3EnRaw,
      'part-4': Part4EnRaw,
      'part-5': Part5EnRaw,
      'part-6': Part6EnRaw,
      'part-7': Part7EnRaw,
      'part-8': Part8EnRaw,
      'appendix-a': AppendixAEnRaw,
      'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw,
    },
    sv: {
      abstract: AbstractSvRaw,
      'part-1': Part1SvRaw,
      'part-2': Part2SvRaw,
      'part-3': Part3SvRaw,
      'part-4': Part4SvRaw,
      'part-5': Part5SvRaw,
      'part-6': Part6SvRaw,
      'part-7': Part7SvRaw,
      'part-8': Part8SvRaw,
      'appendix-a': AppendixASvRaw,
      'appendix-b': AppendixBSvRaw,
      'appendix-c': AppendixCSvRaw,
    }
  };

  // --- 3. CONTENT STRUCTURE ---

  // --- 3. CONTENT STRUCTURE (titles and IDs, no components) ---
  const contentMap = [
    { id: 'abstract',      titleEn: 'Abstract',                                                                                            titleSv: 'Sammanfattning' },
    { id: 'part-1',        titleEn: 'Part I: The Problem — The Untreated Channel',                                                         titleSv: 'Del I: Problemet — Den obehandlade kanalen' },
    { id: 'part-2',        titleEn: 'Part II: Formal Framework',                                                                           titleSv: 'Del II: Formellt ramverk' },
    { id: 'part-3',        titleEn: 'Part III: Three Mechanisms, Each Paired With Its Evidence',                                           titleSv: 'Del III: Tre mekanismer, var och en med sin evidens' },
    { id: 'part-4',        titleEn: 'Part IV: Boundaries and Objections',                                                                  titleSv: 'Del IV: Gränser och invändningar' },
    { id: 'part-5',        titleEn: 'Part V: Simulation',                                                                                  titleSv: 'Del V: Simulering' },
    { id: 'part-6',        titleEn: 'Part VI: Empirical Anchor',                                                                           titleSv: 'Del VI: Empirisk förankring' },
    { id: 'part-7',        titleEn: 'Part VII: Design Implications',                                                                       titleSv: 'Del VII: Designkonsekvenser' },
    { id: 'part-8',        titleEn: 'Part VIII: Limitations and Conclusion',                                                               titleSv: 'Del VIII: Begränsningar och slutsats' },
    { id: 'appendix-a',    titleEn: 'Appendix A: Chain Model Derivations',                                                                 titleSv: 'Appendix A: Härledningar av kedjemodellen' },
    { id: 'appendix-b',    titleEn: 'Appendix B: Simulation Specification',                                                                titleSv: 'Appendix B: Simuleringsspecifikation' },
    { id: 'appendix-c',    titleEn: 'Appendix C: Case Coding Protocol',                                                                    titleSv: 'Appendix C: Protokoll för fallkodning' },
  ]; 

  // --- 4. TRANSLATIONS ---

  const ui = {
    en: {
      tag: 'Working Paper · Series XI',
      seriesNote: 'This is the eleventh paper in the Governance as Engineering series. It closes the first theoretical cycle.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator',          label: 'Paper I: Governance Stability Simulator →' },
        { href: '/working-papers/fractality-as-stability',                 label: 'Paper II: Fractality as Stability →' },
        { href: '/working-papers/observability-democracy-connection',      label: 'Paper III: The Observability-Democracy Connection →' },
        { href: '/working-papers/requisite-variety-and-the-commons',       label: 'Paper IV: Requisite Variety and the Commons →' },
        { href: '/working-papers/coordination-failure-tax',                label: 'Paper V: The Coordination Failure Tax →' },
        { href: '/working-papers/the-variety-gap',                         label: 'Paper VI: The Variety Gap →' },
        { href: '/working-papers/architecture-of-governance-failure',      label: 'Paper VII: The Architecture of Governance Failure →' },
        { href: '/working-papers/measuring-the-variety-gap',               label: 'Paper VIII: Measuring the Variety Gap →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Paper IX: The Political Economy of Requisite Governance →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Paper X: Requisite Observer Diversity →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Paper XII: Boundary Selection Deficits →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Paper XIII: Legitimacy as Emergent Gain →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Paper XIV: Governance as an Adaptive Controller →' },
        { href: '/working-papers/adaptation-bottleneck', label: 'Paper XV: The Adaptation Bottleneck →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Paper XVI: Why Diversity Resists Formalization →' },
        { href: '/working-papers/certification-floor', label: 'Paper XVII: The Certification Floor →' },
        { href: '/working-papers/boundary-instability', label: 'Paper XVIII: The Boundary Instability Principle →' },
      ],
      contextTitle: 'Context',
      contextIntro: 'This paper treats the channel the series has so far examined only under adversarial conditions — the actuation channel through which policy intent reaches the world. A directive formulated at the centre must traverse a delegation chain of ministries, agencies, regional offices, municipalities, and street‑level staff. Each layer projects the directive onto its own operational repertoire, adds latency, and injects noise — structural properties that hold even when every actor is competent, honest, and fully compliant.',
      relatedWork: 'Related work:',
      architectureLink: 'The Architecture of Stability',
      gsiLink: 'Global Subsidiarity Index',
      contextOutro: 'The central result is an energy law: the minimum control effort required to realise a policy target grows superlinearly with delegation depth. Deep chains do not refuse policy; they price it out — a condition the paper names reform exhaustion. It closes the series\' first theoretical cycle.',
      allWorkingpapers: '← All Working Papers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Source Code',
      citeThis: 'Cite This Work',
    },
    sv: {
      tag: 'Arbetsdokument · Serie XI',
      seriesNote: 'Detta är den elfte rapporten i serien Styrning som ingenjörskonst. Den avslutar den första teoretiska cykeln.',
      seriesLinks: [
        { href: '/working-papers/governance-stability-simulator',          label: 'Rapport I: Styrstabilitetssimulatorn →' },
        { href: '/working-papers/fractality-as-stability',                 label: 'Rapport II: Fraktalitet som stabilitet →' },
        { href: '/working-papers/observability-democracy-connection',      label: 'Rapport III: Observerbarhets-demokratikopplingen →' },
        { href: '/working-papers/requisite-variety-and-the-commons',       label: 'Rapport IV: Nödvändig variation och allmänningen →' },
        { href: '/working-papers/coordination-failure-tax',                label: 'Rapport V: Samordningsmisslyckandets skatt →' },
        { href: '/working-papers/the-variety-gap',                         label: 'Rapport VI: Varietetsgapet →' },
        { href: '/working-papers/architecture-of-governance-failure',      label: 'Rapport VII: Styrningsmisslyckandets arkitektur →' },
        { href: '/working-papers/measuring-the-variety-gap',               label: 'Rapport VIII: Att mäta varietetsgapet →' },
        { href: '/working-papers/political-economy-of-requisite-governance', label: 'Rapport IX: Den politiska ekonomin för nödvändig styrning →' },
        { href: '/working-papers/requisite-observer-diversity',            label: 'Rapport X: Nödvändig observatörsmångfald →' },
        { href: '/working-papers/boundary-selection-deficits', label: 'Rapport XII: Gränsdragningsunderskott →' },
        { href: '/working-papers/legitimacy-as-emergent-gain', label: 'Rapport XIII: Legitimitet som emergent förstärkning →' },
        { href: '/working-papers/governance-as-adaptive-controller', label: 'Rapport XIV: Styrning som en adaptiv kontrollant →' },
        { href: '/working-papers/adaptation-bottleneck', label: 'Rapport XV: Adaptationsflaskhalsen →' },
        { href: '/working-papers/why-diversity-resists-formalization', label: 'Rapport XVI: Varför mångfald motstår formalisering →' },
        { href: '/working-papers/certification-floor', label: 'Rapport XVII: Certifieringsgolvet →' },
        { href: '/working-papers/boundary-instability', label: 'Rapport XVIII: Principen om gränsinstabilitet →' },
      ],
      contextTitle: 'Kontext',
      contextIntro: 'Denna rapport behandlar den kanal som serien hittills endast undersökt under antagonistiska förhållanden — aktueringskanalen genom vilken policyintentioner når verkligheten. Ett direktiv formulerat i centrum måste passera en delegationskedja av departement, myndigheter, regionkontor, kommuner och frontpersonal. Varje lager projicerar direktivet på sin egen operativa repertoar, tillför latens och injicerar brus — strukturella egenskaper som kvarstår även när varje aktör är kompetent, ärlig och fullt följsam.',
      relatedWork: 'Relaterat arbete:',
      architectureLink: 'Stabilitetens arkitektur',
      gsiLink: 'Global subsidiaritetsindex',
      contextOutro: 'Det centrala resultatet är en energilag: den minsta kontrollansträngning som krävs för att realisera ett policymål växer superlinjärt med delegationsdjupet. Djupa kedjor vägrar inte policy; de prissätter den ur räckhåll — ett tillstånd rapporten kallar reformutmattning. Den avslutar seriens första teoretiska cykel.',
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
      title: 'Reform Exhaustion: Delegation Depth and the Controllability of Governance',
      subtitle: 'Delegation Depth and the Controllability of Governance',
      description: 'Models the actuation channel through which policy intent reaches the world. Shows that minimum control effort grows superlinearly with delegation depth — deep chains price reform out of reach even when all actors are competent and compliant. Closes the series\' first theoretical cycle.',
    },
    sv: {
      title: 'Reformutmattning: Delegationsdjup och styrningens styrbarhet',
      subtitle: 'Delegationsdjup och styrningens styrbarhet',
      description: 'Modellerar aktueringskanalen genom vilken policyintentioner når verkligheten. Visar att minsta kontrollansträngning växer superlinjärt med delegationsdjupet — djupa kedjor prissätter reformer ur räckhåll även när alla aktörer är kompetenta och följsamma. Avslutar seriens första teoretiska cykel.',
    },
  };

  // --- 5. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let currentLang = $derived($language);
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(currentLang === 'sv' ? 'reform-exhaustion-sv.pdf' : 'reform-exhaustion.pdf');

  function sectionTitle(section: { id: string; titleEn: string; titleSv: string }) {
    return currentLang === 'sv' ? section.titleSv : section.titleEn;
  }

  // Parse markdown and return HTML string
  function sectionHtml(section: { id: string }): string {
    const lang = currentLang as 'en' | 'sv';
    const md = rawText[lang][section.id] ?? '';
    // Remove frontmatter if present (as a precaution)
    const content = md.replace(/^---[\s\S]*?---\n/, '');
    return marked.parse(content, { breaks: false, gfm: true }) as string;
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
      ? `Holmström, B. K. (2026). Reformutmattning: Delegationsdjup och styrningens styrbarhet. Styrning som ingenjörskonst, Rapport XI.`
      : `Holmström, B. K. (2026). Reform Exhaustion: Delegation Depth and the Controllability of Governance. Governance as Engineering, Paper XI.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert(currentLang === 'sv' ? 'Citat kopierat!' : 'Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | GaE Working Paper"
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
        <!--
        <a
          href="https://github.com/BjornKennethHolmstrom/gae-reform-exhaustion"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          {t.viewCode}
        </a>
        -->
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
      <div class="prose prose-sm max-w-none" style="--tw-prose-body: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
        <p class="text-base">{t.contextIntro}</p>

        <div class="flex flex-wrap gap-4 my-6">
          <span class="text-sm font-bold opacity-70">{t.relatedWork}</span>
          <a
            href="/working-papers/architecture-of-stability"
            class="text-sm hover:underline"
            style="color: var(--color-page-accent);"
          >
            {t.architectureLink}
          </a>
          <a
            href="https://www.svensksubsidiaritet.se/ramverk/gsi/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-sm hover:underline"
            style="color: var(--color-page-accent);"
          >
            {t.gsiLink}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <p class="mt-4 opacity-80 leading-relaxed">
          {t.contextOutro}
        </p>
      </div>
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
