<script lang="ts">
  // Publication companion to Systemic Optimization Working Paper B1 v0.5.1.
  // Follows the bilingual section-reader pattern in existing working-paper routes.
  import Provenance from '$lib/components/Provenance.svelte';
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';
  import FrontmatterEn from './sections/frontmatter.en.md?raw';
  import AbstractEn from './sections/abstract.en.md?raw';
  import Section1En from './sections/section-1.en.md?raw';
  import Section2En from './sections/section-2.en.md?raw';
  import Section3En from './sections/section-3.en.md?raw';
  import Section4En from './sections/section-4.en.md?raw';
  import Section5En from './sections/section-5.en.md?raw';
  import Section6En from './sections/section-6.en.md?raw';
  import Section7En from './sections/section-7.en.md?raw';
  import Section8En from './sections/section-8.en.md?raw';
  import Section9En from './sections/section-9.en.md?raw';
  import ReferencesEn from './sections/references.en.md?raw';
  import ResearchStatusEn from './sections/research-status.en.md?raw';
  import FrontmatterSv from './sections/frontmatter.sv.md?raw';
  import AbstractSv from './sections/abstract.sv.md?raw';
  import Section1Sv from './sections/section-1.sv.md?raw';
  import Section2Sv from './sections/section-2.sv.md?raw';
  import Section3Sv from './sections/section-3.sv.md?raw';
  import Section4Sv from './sections/section-4.sv.md?raw';
  import Section5Sv from './sections/section-5.sv.md?raw';
  import Section6Sv from './sections/section-6.sv.md?raw';
  import Section7Sv from './sections/section-7.sv.md?raw';
  import Section8Sv from './sections/section-8.sv.md?raw';
  import Section9Sv from './sections/section-9.sv.md?raw';
  import ReferencesSv from './sections/references.sv.md?raw';
  import ResearchStatusSv from './sections/research-status.sv.md?raw';

  type Lang = 'en' | 'sv';
  type SectionId = 'abstract' | 'section-1' | 'section-2' | 'section-3' | 'section-4' | 'section-5' | 'section-6' | 'section-7' | 'section-8' | 'section-9' | 'references' | 'research-status';
  const contentMap: { id: SectionId; titleEn: string; titleSv: string }[] = [
    { id: 'abstract', titleEn: 'Abstract', titleSv: 'Sammanfattning' },
    { id: 'section-1', titleEn: '1. The evaluation problem', titleSv: '1. Utvärderingsproblemet' },
    { id: 'section-2', titleEn: '2. Three properties of cooperation', titleSv: '2. Tre egenskaper hos samverkan' },
    { id: 'section-3', titleEn: '3. Evidence and the remaining gap', titleSv: '3. Evidens och den kvarstående luckan' },
    { id: 'section-4', titleEn: '4. Evaluation changes what it measures', titleSv: '4. Utvärdering förändrar det som mäts' },
    { id: 'section-5', titleEn: '5. Normative floor and corrective trajectory', titleSv: '5. Normativ miniminivå och utvecklingsbana' },
    { id: 'section-6', titleEn: '6. The Contestability Module', titleSv: '6. Prövbarhetsmodulen' },
    { id: 'section-7', titleEn: '7. Difficult worked case', titleSv: '7. Svårt genomarbetat fall' },
    { id: 'section-8', titleEn: '8. Testing and limitations', titleSv: '8. Prövning och begränsningar' },
    { id: 'section-9', titleEn: '9. Conclusion', titleSv: '9. Slutsats' },
    { id: 'references', titleEn: 'References', titleSv: 'Referenser' },
    { id: 'research-status', titleEn: 'Research status', titleSv: 'Forskningsstatus' }
  ];
  const rawText: Record<Lang, Record<SectionId | 'frontmatter', string>> = {
    en: { 'frontmatter': FrontmatterEn, 'abstract': AbstractEn, 'section-1': Section1En, 'section-2': Section2En, 'section-3': Section3En, 'section-4': Section4En, 'section-5': Section5En, 'section-6': Section6En, 'section-7': Section7En, 'section-8': Section8En, 'section-9': Section9En, 'references': ReferencesEn, 'research-status': ResearchStatusEn },
    sv: { 'frontmatter': FrontmatterSv, 'abstract': AbstractSv, 'section-1': Section1Sv, 'section-2': Section2Sv, 'section-3': Section3Sv, 'section-4': Section4Sv, 'section-5': Section5Sv, 'section-6': Section6Sv, 'section-7': Section7Sv, 'section-8': Section8Sv, 'section-9': Section9Sv, 'references': ReferencesSv, 'research-status': ResearchStatusSv },
  };
  const meta = {
    en: {
      title: 'Contestable Cooperation',
      subtitle: 'Operational capacity, corrective capacity, and the politics of evaluation',
      description: 'Conceptual Systemic Optimization Working Paper B1 on cooperative performance, legitimate contestation, grievance interpretation, and institutional correction.',
      pdf: '/working-papers/contestable-cooperation/contestable-cooperation-en.pdf',
      tag: 'Systemic Optimization · Working Paper B1',
      note: 'Discussion draft v0.5.1 · 11 November 2026 · AI-assisted · Not peer-reviewed',
      context: 'A conceptual working paper, not an empirical validation. The proposed Contestability Module has not been independently tested against established conflict-sensitive assessments.',
      back: '← All working papers',
      download: 'Download English PDF',
      citation: 'Copy citation',
      copied: 'Citation copied',
      notes: 'Research and revision notes',
      paperContext: 'About this paper',
      source: 'Related research repository'
    },
    sv: {
      title: 'Prövbar samverkan',
      subtitle: 'Operativ förmåga, korrigeringsförmåga och utvärderingens politik',
      description: 'Systemisk optimering, arbetsrapport B1: operativa resultat, legitimt ifrågasättande, tolkning av klagomål och institutionell korrigering.',
      pdf: '/working-papers/contestable-cooperation/contestable-cooperation-sv.pdf',
      tag: 'Systemisk optimering · Arbetsrapport B1',
      note: 'Diskussionsutkast v0.5.1 · 11 november 2026 · AI-assisterad · Ej sakkunniggranskad',
      context: 'En begreppslig arbetsrapport, inte en empirisk validering. Den föreslagna prövbarhetsmodulen har inte prövats oberoende mot etablerad konfliktkänslig utvärdering.',
      back: '← Alla arbetsrapporter',
      download: 'Ladda ned svensk PDF',
      citation: 'Kopiera referens',
      copied: 'Referensen kopierad',
      notes: 'Forsknings- och versionsanmärkningar',
      paperContext: 'Om rapporten',
      source: 'Relaterat forskningsarkiv'
    }
  } as const;

  let currentLang = $derived(($language === 'sv' ? 'sv' : 'en') as Lang);
  let m = $derived(meta[currentLang]);
  let activeSection = $state<SectionId>('abstract');
  function titleOf(item: (typeof contentMap)[number]) {
    return currentLang === 'sv' ? item.titleSv : item.titleEn;
  }
  function renderMarkdown(src: string): string {
    let content = src.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
    // The present manuscript contains no TeX, but keep parity with existing reader routes.
    const math: string[] = [];
    content = content.replace(/\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g, (full, a, b) => {
      try { math.push(katex.renderToString((a ?? b).trim(), { displayMode: true, throwOnError: false })); }
      catch { math.push(full); }
      return `CCMATH${math.length - 1}END`;
    });
    const html = marked.parse(content, { gfm: true, breaks: false }) as string;
    return html.replace(/<p>CCMATH(\d+)END<\/p>|CCMATH(\d+)END/g, (_, a, b) => math[Number(a ?? b)] ?? '');
  }
  function scrollTo(id: SectionId) {
    activeSection = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function copyCitation() {
    const citation = currentLang === 'sv'
      ? 'Holmström, B. K. (2026). Prövbar samverkan: Operativ förmåga, korrigeringsförmåga och utvärderingens politik. Systemisk optimering, arbetsrapport B1, v0.5.1 (diskussionsutkast). Ej sakkunniggranskad.'
      : 'Holmström, B. K. (2026). Contestable Cooperation: Operational capacity, corrective capacity, and the politics of evaluation. Systemic Optimization, Working Paper B1, v0.5.1 (discussion draft). Not peer-reviewed.';
    navigator.clipboard.writeText(citation).then(() => alert(m.copied));
  }
</script>

<SEO title={`${m.title} | Systemic Optimization`} description={m.description} type="article" />

<div class="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
  <aside class="hidden h-screen w-80 flex-shrink-0 overflow-y-auto pr-8 pt-16 lg:sticky lg:top-0 lg:block">
    <a href="/working-papers" class="text-sm font-medium opacity-60 hover:opacity-100">{m.back}</a>
    <div class="my-8 rounded-lg border border-[var(--color-separator)] p-4 text-sm leading-relaxed">
      <p class="mb-2 font-semibold">{m.tag}</p><p class="text-xs opacity-70">{m.note}</p>
    </div>
    <div class="mb-8 flex flex-col gap-3 border-b border-[var(--color-separator)] pb-6 text-sm">
      <a class="text-[var(--color-page-accent)] hover:underline" href={m.pdf} download>{m.download}</a>
      <a class="text-[var(--color-page-accent)] hover:underline" href="https://github.com/BjornKennethHolmstrom/systemic-optimization" target="_blank" rel="noopener noreferrer">{m.source}</a>
      <button class="text-left text-[var(--color-page-accent)] hover:underline" onclick={copyCitation}>{m.citation}</button>
    </div>
    <nav class="space-y-1" aria-label="Sections">
      {#each contentMap as item (item.id)}
        <button onclick={() => scrollTo(item.id)} class="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors {activeSection === item.id ? 'bg-[var(--color-page-accent)] font-medium text-white' : 'text-[var(--color-page-text)] opacity-70 hover:bg-[var(--color-card-bg)] hover:opacity-100'}">{titleOf(item)}</button>
      {/each}
    </nav>
  </aside>
  <main class="min-w-0 flex-1 px-4 pb-24 pt-12 lg:pt-16">
    <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 lg:hidden">{m.back}</a>
    <header class="mb-12 mt-4 lg:mt-0">
      <span class="mb-4 inline-block rounded-full bg-[var(--color-card-bg)] px-3 py-1 text-xs font-medium uppercase tracking-wide" style="color: var(--color-page-accent)">{m.tag}</span>
      <h1 class="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{m.title}</h1>
      <p class="text-xl font-light leading-relaxed opacity-70 md:text-2xl">{m.subtitle}</p>
      <p class="mt-4 text-sm opacity-60">{m.note}</p>
      <div class="mt-6"><Provenance align="start" paper /></div>
      <div class="mt-6 flex flex-wrap gap-4 text-sm lg:hidden">
        <a class="text-[var(--color-page-accent)] underline" href={m.pdf} download>{m.download}</a>
        <button class="text-[var(--color-page-accent)] underline" onclick={copyCitation}>{m.citation}</button>
      </div>
    </header>
    <section class="mb-12 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 md:p-8">
      <h2 class="mb-4 text-xs font-bold uppercase tracking-wider opacity-50">{m.paperContext}</h2>
      <p>{m.context}</p>
    </section>
    <section class="mb-12" aria-label={m.notes}>
      <h2 class="mb-3 text-xs font-bold uppercase tracking-wider opacity-50">{m.notes}</h2>
      <div class="prose prose-sm max-w-none" style="--tw-prose-body: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
        {@html renderMarkdown(rawText[currentLang].frontmatter)}
      </div>
    </section>
    <nav aria-label="Sections" class="mb-8 flex gap-2 overflow-x-auto border-b border-[var(--color-separator)] pb-4 lg:hidden">
      {#each contentMap as item (item.id)}
        <button class="shrink-0 rounded-md bg-[var(--color-card-bg)] px-3 py-2 text-sm" onclick={() => scrollTo(item.id)}>{titleOf(item)}</button>
      {/each}
    </nav>
    <div class="space-y-12">
      {#each contentMap as item (item.id)}
        <section id={item.id} class="scroll-mt-24">
          <article class="prose prose-lg max-w-none overflow-x-auto" style="--tw-prose-headings: var(--color-page-text); --tw-prose-body: var(--color-page-text); --tw-prose-bold: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
            {@html renderMarkdown(rawText[currentLang][item.id])}
          </article>
        </section>
        {#if item.id !== 'research-status'}<hr class="border-[var(--color-separator)] opacity-30" />{/if}
      {/each}
    </div>
    <div class="mt-20 border-t border-[var(--color-separator)] pt-8"><ShareButtons title={m.title} /></div>
  </main>
</div>
