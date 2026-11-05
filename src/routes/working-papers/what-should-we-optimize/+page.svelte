<script lang="ts">
  import Provenance from '$lib/components/Provenance.svelte';
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // Matches the existing English filenames in this route, including
  // the original misspelling "refereneces.en.md".
  import FrontmatterEn from './sections/frontmatter.en.md?raw';
  import AbstractEn from './sections/abstract.en.md?raw';
  import S1En from './sections/section-1.en.md?raw';
  import S2En from './sections/section-2.en.md?raw';
  import S3En from './sections/section-3.en.md?raw';
  import S4En from './sections/section-4.en.md?raw';
  import S5En from './sections/section-5.en.md?raw';
  import S6En from './sections/section-6.en.md?raw';
  import S7En from './sections/section-7.en.md?raw';
  import S8En from './sections/section-8.en.md?raw';
  import S9En from './sections/section-9.en.md?raw';
  import AppendixEn from './sections/appendix-a.en.md?raw';
  import ReferencesEn from './sections/refereneces.en.md?raw';

  import FrontmatterSv from './sections/frontmatter.sv.md?raw';
  import AbstractSv from './sections/abstract.sv.md?raw';
  import S1Sv from './sections/section-1.sv.md?raw';
  import S2Sv from './sections/section-2.sv.md?raw';
  import S3Sv from './sections/section-3.sv.md?raw';
  import S4Sv from './sections/section-4.sv.md?raw';
  import S5Sv from './sections/section-5.sv.md?raw';
  import S6Sv from './sections/section-6.sv.md?raw';
  import S7Sv from './sections/section-7.sv.md?raw';
  import S8Sv from './sections/section-8.sv.md?raw';
  import S9Sv from './sections/section-9.sv.md?raw';
  import AppendixSv from './sections/appendix-a.sv.md?raw';
  import ReferencesSv from './sections/refereneces.sv.md?raw';

  type Lang = 'en' | 'sv';
  type SectionId =
    | 'abstract' | 'section-1' | 'section-2' | 'section-3'
    | 'section-4' | 'section-5' | 'section-6' | 'section-7'
    | 'section-8' | 'section-9' | 'appendix-a' | 'references';

  const rawText: Record<Lang, Record<SectionId | 'frontmatter', string>> = {
    en: {
      frontmatter: FrontmatterEn, abstract: AbstractEn,
      'section-1': S1En, 'section-2': S2En, 'section-3': S3En,
      'section-4': S4En, 'section-5': S5En, 'section-6': S6En,
      'section-7': S7En, 'section-8': S8En, 'section-9': S9En,
      'appendix-a': AppendixEn, references: ReferencesEn,
    },
    sv: {
      frontmatter: FrontmatterSv, abstract: AbstractSv,
      'section-1': S1Sv, 'section-2': S2Sv, 'section-3': S3Sv,
      'section-4': S4Sv, 'section-5': S5Sv, 'section-6': S6Sv,
      'section-7': S7Sv, 'section-8': S8Sv, 'section-9': S9Sv,
      'appendix-a': AppendixSv, references: ReferencesSv,
    },
  };

  const contentMap: { id: SectionId; titleEn: string; titleSv: string }[] = [
    { id: 'abstract', titleEn: 'Abstract', titleSv: 'Sammanfattning' },
    { id: 'section-1', titleEn: '1. The problem beneath the optimizer', titleSv: '1. Problemet som föregår optimeraren' },
    { id: 'section-2', titleEn: '2. Methods and evidential discipline', titleSv: '2. Metod och evidensdisciplin' },
    { id: 'section-3', titleEn: '3. Experiment A1: the world may be misrepresented', titleSv: '3. Experiment A1: världen kan vara felrepresenterad' },
    { id: 'section-4', titleEn: '4. Experiment B: future objectives may change', titleSv: '4. Experiment B: framtida mål kan förändras' },
    { id: 'section-5', titleEn: '5. Experiment B5: information is useful, but learning is an action', titleSv: '5. Experiment B5: information och lärande' },
    { id: 'section-6', titleEn: '6. What the experiments jointly say', titleSv: '6. Vad experimenten gemensamt säger' },
    { id: 'section-7', titleEn: '7. The unanswered question: mutual benefit', titleSv: '7. Den obesvarade frågan: ömsesidig nytta' },
    { id: 'section-8', titleEn: '8. Research agenda and Governance as Engineering', titleSv: '8. Forskningsagenda och relation till GaE' },
    { id: 'section-9', titleEn: '9. Conclusion', titleSv: '9. Slutsats' },
    { id: 'appendix-a', titleEn: 'Appendix A. Audit trail and reproducibility', titleSv: 'Bilaga A. Revisionsspår och reproducerbarhet' },
    { id: 'references', titleEn: 'References', titleSv: 'Referenser' },
  ];

  const ui = {
    en: {
      tag: 'Systemic Optimization · Working Paper 0',
      note: 'Draft v0.2 (4 November 2026) · AI-assisted research · Not peer-reviewed',
      contextTitle: 'About this paper',
      context: 'Three synthetic computational experiments investigate distinct sources of optimization failure: incorrect models of the world (A1), uncertainty about future goals (B), and the opportunity cost of acquiring information (B5). Their numerical effect sizes are not directly comparable.',
      evidence: 'Results within computational models [R], interpretive propositions [IP], and untested hypotheses [H] are distinguished throughout. The paper does not establish effects of real governance reforms.',
      back: '← All working papers', download: 'Download PDF', viewCode: 'Source and experiments', cite: 'Copy citation',
      copied: 'Citation copied', downloadNote: 'Full PDF', notes: 'Revision and evidence notes',
    },
    sv: {
      tag: 'Systemisk optimering · Arbetsrapport 0',
      note: 'Utkast v0.2 (4 november 2026) · AI-assisterad forskning · Ej sakkunniggranskad',
      contextTitle: 'Om rapporten',
      context: 'Tre syntetiska beräkningsexperiment undersöker skilda orsaker till att optimering kan misslyckas: felaktiga världsmodeller (A1), osäkerhet om framtida mål (B) och alternativkostnaden för informationsinhämtning (B5). De numeriska effektstorlekarna är inte direkt jämförbara.',
      evidence: 'Modellresultat [R], tolkande påståenden [IP] och oprövade hypoteser [H] hålls åtskilda. Rapporten fastställer inte effekter av verkliga styrningsreformer.',
      back: '← Alla arbetsrapporter', download: 'Ladda ner PDF', viewCode: 'Källkod och experiment', cite: 'Kopiera referens',
      copied: 'Referens kopierad', downloadNote: 'Fullständig PDF', notes: 'Revisions- och evidensanmärkningar',
    },
  };

  const metadata = {
    en: {
      title: 'What Should We Optimize, and What Must We Know?',
      subtitle: 'Three Computational Experiments on Model Error, Future Goals, and the Cost of Learning',
      description: 'Systemic Optimization Working Paper 0: experimental evidence about model misspecification, uncertain future goals, and the opportunity cost of learning.',
      pdf: '/working-papers/what-should-we-optimize/what-should-we-optimize-en.pdf',
    },
    sv: {
      title: 'Vad bör vi optimera, och vad måste vi veta?',
      subtitle: 'Tre beräkningsexperiment om modellfel, framtida mål och kostnaden för lärande',
      description: 'Systemisk optimering, arbetsrapport 0: beräkningsexperiment om modellfel, framtida mål och alternativkostnaden för lärande.',
      pdf: '/working-papers/what-should-we-optimize/what-should-we-optimize-sv.pdf',
    },
  };

  let activeSection = $state<SectionId>('abstract');
  let currentLang = $derived(($language === 'sv' ? 'sv' : 'en') as Lang);
  let t = $derived(ui[currentLang]);
  let meta = $derived(metadata[currentLang]);

  function titleOf(item: (typeof contentMap)[number]): string {
    return currentLang === 'sv' ? item.titleSv : item.titleEn;
  }

  function stripYaml(md: string): string {
    return md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  }

  function renderMarkdown(md: string): string {
    let content = stripYaml(md).replace(
      /\]\(figures\/(b5_learning_cost(?:_sv)?\.png)\)/g,
      (_match, filename) => `](/working-papers/what-should-we-optimize/figures/${filename})`
    );
    const mathBlocks: string[] = [];

    // Protect math from Markdown's underscore and backslash processing.
    content = content.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, a, b) => {
      try {
        const html = katex.renderToString((a ?? b).trim(), { displayMode: true, throwOnError: false });
        mathBlocks.push(html);
      } catch {
        mathBlocks.push(match);
      }
      return `MATHBLOCKPLACEHOLDER${mathBlocks.length - 1}END`;
    });
    content = content.replace(/(?<!\$)\$(?!\$)([^\n$]+?)\$(?!\$)|\\\(([^\n]+?)\\\)/g, (match, a, b) => {
      try {
        mathBlocks.push(katex.renderToString((a ?? b).trim(), { throwOnError: false }));
      } catch {
        mathBlocks.push(match);
      }
      return `MATHBLOCKPLACEHOLDER${mathBlocks.length - 1}END`;
    });
    let html = marked.parse(content, { gfm: true, breaks: false }) as string;
    // Display equations must not remain wrapped in <p> after substitution.
    html = html.replace(/<p>MATHBLOCKPLACEHOLDER(\d+)END<\/p>/g, (_, index) => mathBlocks[Number(index)] ?? '');
    return html.replace(/MATHBLOCKPLACEHOLDER(\d+)END/g, (_, index) => mathBlocks[Number(index)] ?? '');
  }

  function frontmatterNotes(): string {
    const content = stripYaml(rawText[currentLang].frontmatter);
    // The H1 and subtitle are already in the page header; retain the original
    // revision and evidentiary caveats, which start with blockquotes.
    const firstBlockquote = content.search(/^>/m);
    return firstBlockquote >= 0 ? renderMarkdown(content.slice(firstBlockquote)) : '';
  }

  function scrollTo(id: SectionId) {
    activeSection = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function copyCitation() {
    const citation = currentLang === 'sv'
      ? 'Holmström, B. K. (2026). Vad bör vi optimera, och vad måste vi veta? Tre beräkningsexperiment om modellfel, framtida mål och kostnaden för lärande. Systemisk optimering, arbetsrapport 0, utkast v0.2. Ej sakkunniggranskad.'
      : 'Holmström, B. K. (2026). What Should We Optimize, and What Must We Know? Three Computational Experiments on Model Error, Future Goals, and the Cost of Learning. Systemic Optimization, Working Paper 0, draft v0.2. Not peer-reviewed.';
    navigator.clipboard.writeText(citation).then(() => alert(t.copied));
  }
</script>

<SEO title={`${meta.title} | Systemic Optimization`} description={meta.description} type="article" />

<div class="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row">
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 font-medium">{t.back}</a>
    <div class="my-8 p-4 rounded-lg border border-[var(--color-separator)] text-sm leading-relaxed">
      <p class="font-semibold mb-2">{t.tag}</p>
      <p class="opacity-70 text-xs">{t.note}</p>
    </div>
    <div class="mb-8 pb-6 border-b border-[var(--color-separator)] flex flex-col gap-3 text-sm">
      <a class="text-[var(--color-page-accent)] hover:underline" href={meta.pdf} download>{t.download}</a>
      <a class="text-[var(--color-page-accent)] hover:underline" href="https://github.com/BjornKennethHolmstrom/systemic-optimization" target="_blank" rel="noopener noreferrer">{t.viewCode}</a>
      <button class="text-left text-[var(--color-page-accent)] hover:underline" onclick={copyCitation}>{t.cite}</button>
    </div>
    <nav class="space-y-1" aria-label="Sections">
      {#each contentMap as item (item.id)}
        <button onclick={() => scrollTo(item.id)} class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors {activeSection === item.id ? 'bg-[var(--color-page-accent)] text-white font-medium' : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-70 hover:opacity-100'}">{titleOf(item)}</button>
      {/each}
    </nav>
  </aside>

  <main class="flex-1 min-w-0 px-4 pt-12 lg:pt-16 pb-24">
    <a href="/working-papers" class="lg:hidden text-sm opacity-60 hover:opacity-100">{t.back}</a>
    <header class="mb-12 mt-4 lg:mt-0">
      <span class="inline-block mb-4 rounded-full bg-[var(--color-card-bg)] px-3 py-1 text-xs font-medium tracking-wide uppercase" style="color: var(--color-page-accent)">{t.tag}</span>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style="color: var(--color-page-text)">{meta.title}</h1>
      <p class="text-xl md:text-2xl opacity-70 font-light leading-relaxed" style="color: var(--color-page-text)">{meta.subtitle}</p>
      <p class="mt-4 text-sm opacity-60">{t.note}</p>
      <div class="mt-6"><Provenance align="start" paper /></div>
      <div class="lg:hidden mt-6 flex flex-wrap gap-4 text-sm">
        <a class="text-[var(--color-page-accent)] underline" href={meta.pdf} download>{t.download}</a>
        <a class="text-[var(--color-page-accent)] underline" href="https://github.com/BjornKennethHolmstrom/systemic-optimization" target="_blank" rel="noopener noreferrer">{t.viewCode}</a>
        <button class="text-[var(--color-page-accent)] underline" onclick={copyCitation}>{t.cite}</button>
      </div>
    </header>

    <section class="p-6 md:p-8 rounded-xl mb-12 border border-[var(--color-separator)] bg-[var(--color-card-bg)]">
      <h2 class="text-xs uppercase font-bold tracking-wider opacity-50 mb-4">{t.contextTitle}</h2>
      <p class="mb-3">{t.context}</p>
      <p class="opacity-80">{t.evidence}</p>
    </section>

    {#if frontmatterNotes()}
      <section class="mb-12" aria-label={t.notes}>
        <h2 class="text-xs uppercase font-bold opacity-50 tracking-wider mb-3">{t.notes}</h2>
        <div class="prose prose-sm max-w-none" style="--tw-prose-body: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
          {@html frontmatterNotes()}
        </div>
      </section>
    {/if}

    <nav aria-label="Sections" class="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-[var(--color-separator)]">
      {#each contentMap as item (item.id)}
        <button class="shrink-0 text-sm rounded-md px-3 py-2 bg-[var(--color-card-bg)]" onclick={() => scrollTo(item.id)}>{titleOf(item)}</button>
      {/each}
    </nav>

    <div class="space-y-12">
      {#each contentMap as item (item.id)}
        <section id={item.id} class="scroll-mt-24">
          <article class="prose prose-lg max-w-none overflow-x-auto" style="--tw-prose-headings: var(--color-page-text); --tw-prose-body: var(--color-page-text); --tw-prose-bold: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-quotes: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg);">
            {@html renderMarkdown(rawText[currentLang][item.id])}
          </article>
        </section>
        {#if item.id !== 'references'}
          <hr class="border-[var(--color-separator)] opacity-30" />
        {/if}
      {/each}
    </div>
    <div class="mt-20 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>
  </main>
</div>
