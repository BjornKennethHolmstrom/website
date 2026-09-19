<!-- src/routes/reports/bhutan-interface-race/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // ------------------------------------------
  // 1. Import all sections as raw text (EN)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryRaw from './sections/00-executive-summary.en.md?raw';

  // 1. The Interface Race
  import InterfaceRaceRaw from './sections/01-the-interface-race.en.md?raw';

  // 2. Structural Mechanisms
  import StructuralMechanismsRaw from './sections/02-structural-mechanisms.en.md?raw';

  // 3. Building Interface Capacity
  import BuildingInterfaceCapacityRaw from './sections/03-building-interface-capacity.en.md?raw';

  // 4. What Slows Interface Building
  import WhatSlowsRaw from './sections/04-what-slows-interface-building.en.md?raw';

  // 5. Transition Architecture
  import TransitionArchitectureRaw from './sections/05-transition-architecture.en.md?raw';

  // 6. First Step
  import FirstStepRaw from './sections/06-first-step.en.md?raw';

  // 7. Coda
  import CodaRaw from './sections/07-coda.en.md?raw';

  // Appendices
  import AppendixARaw from './sections/08-appendix-a.en.md?raw';
  import AppendixBRaw from './sections/08-appendix-b.en.md?raw';
  import AppendixCRaw from './sections/08-appendix-c.en.md?raw';
  import AppendixDRaw from './sections/08-appendix-d.en.md?raw';
  import AppendixERaw from './sections/08-appendix-e.en.md?raw';
  import AppendixFRaw from './sections/08-appendix-f.en.md?raw';
  import AppendixGRaw from './sections/08-appendix-g.en.md?raw';

  // ------------------------------------------
  // 2. Raw text map
  // ------------------------------------------
  const rawText: Record<string, string> = {
    'executive-summary': ExecutiveSummaryRaw,
    'interface-race': InterfaceRaceRaw,
    'structural-mechanisms': StructuralMechanismsRaw,
    'building-interface-capacity': BuildingInterfaceCapacityRaw,
    'what-slows-interface-building': WhatSlowsRaw,
    'transition-architecture': TransitionArchitectureRaw,
    'first-step': FirstStepRaw,
    'coda': CodaRaw,
    'appendix-a': AppendixARaw,
    'appendix-b': AppendixBRaw,
    'appendix-c': AppendixCRaw,
    'appendix-d': AppendixDRaw,
    'appendix-e': AppendixERaw,
    'appendix-f': AppendixFRaw,
    'appendix-g': AppendixGRaw,
  };

  // ------------------------------------------
  // 3. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
    },
    {
      id: 'interface-race',
      title: '1. The Interface Race',
    },
    {
      id: 'structural-mechanisms',
      title: '2. The Interface Race: Structural Mechanisms',
    },
    {
      id: 'building-interface-capacity',
      title: '3. What Building Interface Capacity Would Look Like',
    },
    {
      id: 'what-slows-interface-building',
      title: '4. What Slows Interface Building',
    },
    {
      id: 'transition-architecture',
      title: '5. Working with the Grain: Transition Architecture for Bhutan',
    },
    {
      id: 'first-step',
      title: '6. A Concrete First Step: The Actuator Interface Register',
    },
    {
      id: 'coda',
      title: '7. Coda: The Keeper of the Whole at the Frontier of Speed',
    },
    {
      id: 'appendix-a',
      title: 'Appendix A: Value Systems and Policy Mindsets',
    },
    {
      id: 'appendix-b',
      title: 'Appendix B: International Analogues and Precedents',
    },
    {
      id: 'appendix-c',
      title: 'Appendix C: The Governance as Engineering Connection',
    },
    {
      id: 'appendix-d',
      title: 'Appendix D: Anticipated Objections',
    },
    {
      id: 'appendix-e',
      title: 'Appendix E: About the Author and Method',
    },
    {
      id: 'appendix-f',
      title: 'Appendix F: The Crypto–Pay Case File',
    },
    {
      id: 'appendix-g',
      title: 'Appendix G: The Gelephu Mindfulness City — Legal and Accountability Architecture',
    },
  ];

  // ------------------------------------------
  // 4. Metadata & UI texts
  // ------------------------------------------
  const meta = {
    title:
      'Bhutan: The Interface Race — Objective–Actuator Coupling Under Acceleration',
    subtitle:
      'A governance-as-engineering diagnosis of a country that decided what it values more carefully than almost any state — and must now build institutions fast enough to keep its people, without letting them outrun that knowledge',
    description:
      'Bhutan has not abandoned Gross National Happiness, and its institutions are not out of control. It is accelerating its economic machinery for good reasons — to create the opportunities that might persuade its educated young people to stay — while building the interfaces that connect that machinery to its constitutional objective. This report diagnoses the Interface Race and proposes an Actuator Interface Register as the concrete first step.',
  };

  const ui = {
    tag: 'Country Report · Bhutan',
    allReports: '← All Reports',
    downloads: 'Downloads',
    share: 'Share',
    cite: 'How to cite',
    pdfLabelEn: 'PDF (English)',
  };

  const citeText =
    'Holmström, B. K. (2026). Bhutan: The Interface Race — Objective–Actuator Coupling Under Acceleration. Strategic Country Report.';

  // ------------------------------------------
  // 5. Reactive logic
  // ------------------------------------------
  let activeSection = $state('executive-summary');

  function sectionHtml(section: (typeof contentMap)[0]): string {
    const md = rawText[section.id] ?? '';
    let content = md.replace(/^---[\s\S]*?---\n/, '');

    const blocks: string[] = [];

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
    content = content.replace(
      /(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
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
    return html;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function copyCitation() {
    navigator.clipboard.writeText(citeText).then(() => {
      alert('Citation copied!');
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
    <!-- PDF download -->
    <a
      href="/reports/bhutan-interface-race-en.pdf"
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
      {ui.pdfLabelEn}
    </a>

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
      {ui.cite}
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
        {ui.allReports}
      </a>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">
        {ui.downloads}
      </h3>
      <div class="space-y-3">
        <a
          href="/reports/bhutan-interface-race-en.pdf"
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
          {ui.pdfLabelEn}
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
        {ui.cite}
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
          {section.title}
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
        {ui.tag}
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
