<script lang="ts">
  import Provenance from '$lib/components/Provenance.svelte';
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
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
  import AppendixAEn from './sections/appendix-a.en.md?raw';
  import AppendixBEn from './sections/appendix-b.en.md?raw';
  import AppendixCEn from './sections/appendix-c.en.md?raw';
  import ReferencesEn from './sections/references.en.md?raw';
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
  import AppendixASv from './sections/appendix-a.sv.md?raw';
  import AppendixBSv from './sections/appendix-b.sv.md?raw';
  import AppendixCSv from './sections/appendix-c.sv.md?raw';
  import ReferencesSv from './sections/references.sv.md?raw';

  type Lang = 'en' | 'sv';
  type SectionId = 'abstract' | 'section-1' | 'section-2' | 'section-3' | 'section-4' | 'section-5' | 'section-6' | 'section-7' | 'section-8' | 'appendix-a' | 'appendix-b' | 'appendix-c' | 'references';

  const rawText: Record<Lang, Record<SectionId | 'frontmatter', string>> = {
    en: { frontmatter: FrontmatterEn, 'abstract': AbstractEn, 'section-1': S1En, 'section-2': S2En, 'section-3': S3En, 'section-4': S4En, 'section-5': S5En, 'section-6': S6En, 'section-7': S7En, 'section-8': S8En, 'appendix-a': AppendixAEn, 'appendix-b': AppendixBEn, 'appendix-c': AppendixCEn, 'references': ReferencesEn },
    sv: { frontmatter: FrontmatterSv, 'abstract': AbstractSv, 'section-1': S1Sv, 'section-2': S2Sv, 'section-3': S3Sv, 'section-4': S4Sv, 'section-5': S5Sv, 'section-6': S6Sv, 'section-7': S7Sv, 'section-8': S8Sv, 'appendix-a': AppendixASv, 'appendix-b': AppendixBSv, 'appendix-c': AppendixCSv, 'references': ReferencesSv },
  };

  const contentMap: { id: SectionId; titleEn: string; titleSv: string }[] = [
    { id: 'abstract', titleEn: "Abstract", titleSv: "Sammanfattning" },
    { id: 'section-1', titleEn: "1. A correct solution to an incomplete problem", titleSv: "1. En korrekt lösning på ett ofullständigt problem" },
    { id: 'section-2', titleEn: "2. What is represented, what is optimized, what is observed", titleSv: "2. Vad som representeras, optimeras och observeras" },
    { id: 'section-3', titleEn: "3. What the confirmatory comparison shows", titleSv: "3. Vad den konfirmatoriska jämförelsen visar" },
    { id: 'section-4', titleEn: "4. Why objective robustness has a price", titleSv: "4. Varför robusthet genom målet har ett pris" },
    { id: 'section-5', titleEn: "5. Why exposure does not guarantee learning", titleSv: "5. Varför exponering inte garanterar lärande" },
    { id: 'section-6', titleEn: "6. Three responses, one coupled decision problem", titleSv: "6. Tre svar, ett sammanflätat beslutsproblem" },
    { id: 'section-7', titleEn: "7. Unanswered questions and limits", titleSv: "7. Obesvarade frågor och begränsningar" },
    { id: 'section-8', titleEn: "8. Conclusion", titleSv: "8. Slutsats" },
    { id: 'appendix-a', titleEn: "Appendix A. Evidence-status matrix", titleSv: "Bilaga A. Evidensstatus för varje påstående" },
    { id: 'appendix-b', titleEn: "Appendix B. Exploratory tables from the frozen confirmatory factorial", titleSv: "Bilaga B. Explorativa tabeller ur den frysta konfirmatoriska faktorialen" },
    { id: 'appendix-c', titleEn: "Appendix C. Reproducibility, numerical methods and provenance", titleSv: "Bilaga C. Reproducerbarhet, numeriska metoder och proveniens" },
    { id: 'references', titleEn: "References", titleSv: "Referenser" },
  ];

  const ui = {
    en: {
      tag: 'Systemic Optimization · Working Paper 1',
      note: 'Draft v0.2 (6 November 2026) · AI-assisted research · Not peer-reviewed',
      contextTitle: 'About this paper',
      context: 'A follow-up to Working Paper 0: a synthetic flood-management study comparing causal-model assumptions, ecological objectives and the opportunities a policy creates for learning.',
      evidence: 'The 40-world policy-package comparison is confirmatory. Mechanism exposure, learning, parameter-error and alternative-policy findings are structural, descriptive or exploratory as marked. None establishes effects in real catchments.',
      back: '← All working papers', download: 'Download English PDF', viewCode: 'Source and experiments', cite: 'Copy citation',
      copied: 'Citation copied', notes: 'Revision and evidence notes',
    },
    sv: {
      tag: 'Systemisk optimering · Arbetsrapport 1',
      note: 'Utkast v0.2 (6 november 2026) · AI-assisterad forskning · Ej sakkunniggranskad',
      contextTitle: 'Om rapporten',
      context: 'En fortsättning på arbetsrapport 0: en syntetisk översvämningsstudie som jämför kausala modellantaganden, ekologiska mål och möjligheterna till lärande som en policy skapar.',
      evidence: 'Policypaketsjämförelsen på 40 världar är konfirmatorisk. Exponering, lärande, parameterfel och alternativa policyer redovisas separat som strukturella, deskriptiva eller explorativa. Inget resultat visar direkta effekter i verkliga avrinningsområden.',
      back: '← Alla arbetsrapporter', download: 'Ladda ned engelsk PDF', viewCode: 'Källkod och experiment', cite: 'Kopiera referens',
      copied: 'Referens kopierad', notes: 'Revisions- och evidensanmärkningar',
    },
  };

  const metadata = {
    en: {
      title: 'What If the Model Is Incomplete?',
      subtitle: 'Computational Experiments on Causal Representation, Ecological Objectives, and the Limits of Learning',
      description: 'Systemic Optimization Working Paper 1: model representation, ecological objective trade-offs, and policy-dependent learning in a synthetic three-municipality flood system.',
      pdf: '/working-papers/what-if-the-model-is-incomplete/what-if-the-model-is-incomplete-en.pdf',
    },
    sv: {
      title: 'Vad händer om modellen är ofullständig?',
      subtitle: 'Beräkningsexperiment om kausal representation, ekologiska mål och lärandets begränsningar',
      description: 'Systemisk optimering, arbetsrapport 1: kausal modellrepresentation, ekologiska målkonflikter och policyberoende lärande i en syntetisk översvämningsmodell.',
      pdf: '/working-papers/what-if-the-model-is-incomplete/what-if-the-model-is-incomplete-en.pdf',
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
      /\]\(figures\/(wp1_fig[1-5]_[^)]*\.png)\)/g,
      (_match, filename) => `](/working-papers/what-if-the-model-is-incomplete/figures/${filename})`
    );
    const mathBlocks: string[] = [];
    // Preserve TeX from Markdown escaping and render it through KaTeX.
    content = content.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (match, a, b) => {
      try {
        mathBlocks.push(katex.renderToString((a ?? b).trim(), { displayMode: true, throwOnError: false }));
      } catch { mathBlocks.push(match); }
      return `MATHBLOCKPLACEHOLDER${mathBlocks.length - 1}END`;
    });
    content = content.replace(/(?<!\$)\$(?!\$)([^\n$]+?)\$(?!\$)|\\\(([^\n]+?)\\\)/g, (match, a, b) => {
      try {
        mathBlocks.push(katex.renderToString((a ?? b).trim(), { throwOnError: false }));
      } catch { mathBlocks.push(match); }
      return `MATHBLOCKPLACEHOLDER${mathBlocks.length - 1}END`;
    });
    let html = marked.parse(content, { gfm: true, breaks: false }) as string;
    html = html.replace(/<p>MATHBLOCKPLACEHOLDER(\d+)END<\/p>/g, (_, n) => mathBlocks[Number(n)] ?? '');
    return html.replace(/MATHBLOCKPLACEHOLDER(\d+)END/g, (_, n) => mathBlocks[Number(n)] ?? '');
  }

  function frontmatterNotes(): string {
    return renderMarkdown(rawText[currentLang].frontmatter);
  }

  function scrollTo(id: SectionId) {
    activeSection = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function copyCitation() {
    const citation = currentLang === 'sv'
      ? 'Holmström, B. K. (2026). Vad händer om modellen är ofullständig? Beräkningsexperiment om kausal representation, ekologiska mål och lärandets begränsningar. Systemisk optimering, arbetsrapport 1, utkast v0.2. Ej sakkunniggranskad.'
      : 'Holmström, B. K. (2026). What If the Model Is Incomplete? Computational Experiments on Causal Representation, Ecological Objectives, and the Limits of Learning. Systemic Optimization, Working Paper 1, draft v0.2. Not peer-reviewed.';
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
