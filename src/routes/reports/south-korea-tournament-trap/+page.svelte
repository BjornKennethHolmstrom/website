<!-- src/routes/reports/south-korea-tournament-trap/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // ------------------------------------------
  // 1. Import all sections as raw text (EN, KO)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEnRaw from './sections/00-executive-summary.en.md?raw';
  import ExecutiveSummaryKoRaw from './sections/00-executive-summary.ko.md?raw';

  // 1. The Tournament Trap
  import TournamentTrapEnRaw from './sections/01-tournament-trap.en.md?raw';
  import TournamentTrapKoRaw from './sections/01-tournament-trap.ko.md?raw';

  // 2. Structural Mechanisms
  import StructuralMechanismsEnRaw from './sections/02-structural-mechanisms.en.md?raw';
  import StructuralMechanismsKoRaw from './sections/02-structural-mechanisms.ko.md?raw';

  // 3. Opportunity Architecture
  import OpportunityArchitectureEnRaw from './sections/03-opportunity-architecture.en.md?raw';
  import OpportunityArchitectureKoRaw from './sections/03-opportunity-architecture.ko.md?raw';

  // 4. Political Immune System
  import PoliticalImmuneSystemEnRaw from './sections/04-political-immune-system.en.md?raw';
  import PoliticalImmuneSystemKoRaw from './sections/04-political-immune-system.ko.md?raw';

  // 5. Transition Architecture
  import TransitionArchitectureEnRaw from './sections/05-transition-architecture.en.md?raw';
  import TransitionArchitectureKoRaw from './sections/05-transition-architecture.ko.md?raw';

  // 6. First Step
  import FirstStepEnRaw from './sections/06-first-step.en.md?raw';
  import FirstStepKoRaw from './sections/06-first-step.ko.md?raw';

  // 7. Coda
  import CodaEnRaw from './sections/07-coda.en.md?raw';
  import CodaKoRaw from './sections/07-coda.ko.md?raw';

  // Appendices
  import AppendixAEnRaw from './sections/08-appendix-a.en.md?raw';
  import AppendixAKoRaw from './sections/08-appendix-a.ko.md?raw';

  import AppendixBEnRaw from './sections/08-appendix-b.en.md?raw';
  import AppendixBKoRaw from './sections/08-appendix-b.ko.md?raw';

  import AppendixCEnRaw from './sections/08-appendix-c.en.md?raw';
  import AppendixCKoRaw from './sections/08-appendix-c.ko.md?raw';

  import AppendixDEnRaw from './sections/08-appendix-d.en.md?raw';
  import AppendixDKoRaw from './sections/08-appendix-d.ko.md?raw';

  import AppendixEEnRaw from './sections/08-appendix-e.en.md?raw';
  import AppendixEKoRaw from './sections/08-appendix-e.ko.md?raw';

  import AppendixFEnRaw from './sections/08-appendix-f.en.md?raw';
  import AppendixFKoRaw from './sections/08-appendix-f.ko.md?raw';

  // ------------------------------------------
  // 2. Raw text map
  // ------------------------------------------
  const rawText: Record<'en' | 'ko', Record<string, string>> = {
    en: {
      'executive-summary': ExecutiveSummaryEnRaw,
      'tournament-trap': TournamentTrapEnRaw,
      'structural-mechanisms': StructuralMechanismsEnRaw,
      'opportunity-architecture': OpportunityArchitectureEnRaw,
      'political-immune-system': PoliticalImmuneSystemEnRaw,
      'transition-architecture': TransitionArchitectureEnRaw,
      'first-step': FirstStepEnRaw,
      'coda': CodaEnRaw,
      'appendix-a': AppendixAEnRaw,
      'appendix-b': AppendixBEnRaw,
      'appendix-c': AppendixCEnRaw,
      'appendix-d': AppendixDEnRaw,
      'appendix-e': AppendixEEnRaw,
      'appendix-f': AppendixFEnRaw,
    },
    ko: {
      'executive-summary': ExecutiveSummaryKoRaw,
      'tournament-trap': TournamentTrapKoRaw,
      'structural-mechanisms': StructuralMechanismsKoRaw,
      'opportunity-architecture': OpportunityArchitectureKoRaw,
      'political-immune-system': PoliticalImmuneSystemKoRaw,
      'transition-architecture': TransitionArchitectureKoRaw,
      'first-step': FirstStepKoRaw,
      'coda': CodaKoRaw,
      'appendix-a': AppendixAKoRaw,
      'appendix-b': AppendixBKoRaw,
      'appendix-c': AppendixCKoRaw,
      'appendix-d': AppendixDKoRaw,
      'appendix-e': AppendixEKoRaw,
      'appendix-f': AppendixFKoRaw,
    },
  };

  // ------------------------------------------
  // 3. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleKo: '요약',
    },
    {
      id: 'tournament-trap',
      titleEn: '1. The Tournament Trap',
      titleKo: '1. 토너먼트 함정',
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. Structural Mechanisms',
      titleKo: '2. 구조적 메커니즘',
    },
    {
      id: 'opportunity-architecture',
      titleEn: '3. What Building an Opportunity Architecture Would Look Like',
      titleKo: '3. 기회 아키텍처 구축은 어떤 모습일까',
    },
    {
      id: 'political-immune-system',
      titleEn: '4. The Political Immune System: The Legitimacy Lock',
      titleKo: '4. 정치적 면역체계: 정당성 잠금',
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for South Korea',
      titleKo: '5. 결을 따라 일하기: 한국을 위한 전환 아키텍처',
    },
    {
      id: 'first-step',
      titleEn: '6. A Concrete First Step: The Tournament Audit',
      titleKo: '6. 구체적 첫 단계: 토너먼트 감사',
    },
    {
      id: 'coda',
      titleEn: '7. Coda: The Champion of the Tournament at the Frontier of Plurality',
      titleKo: '7. 코다: 다원성의 최전선에 선 토너먼트의 챔피언',
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems and Policy Mindsets',
      titleKo: '부록 A: 가치 체계와 정책 사고방식',
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues and Precedents',
      titleKo: '부록 B: 국제적 유사 사례와 선례',
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleKo: '부록 C: 공학으로서의 거버넌스 연결',
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleKo: '부록 D: 예상되는 반론',
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author and Method',
      titleKo: '부록 E: 저자와 방법에 관하여',
    },
    {
      id: 'appendix-f',
      titleEn: 'Appendix F: The Medical-School Capacity Case',
      titleKo: '부록 F: 의과대학 정원 사례',
    },
  ];

  // ------------------------------------------
  // 4. Metadata & UI texts
  // ------------------------------------------
  const metadata = {
    en: {
      title:
        'South Korea: The Tournament Trap — Consequence Coupling Under Effective Scarcity',
      subtitle:
        'A governance-as-engineering diagnosis of a society that became the world’s most accomplished tournament — and the structural challenge of turning capability into plurality',
      description:
        'South Korea is not failing. It observes well, acts fast and has shown that its democracy can correct even a president who turns on the constitution. Yet on one Thursday every November the country grounds its aircraft for an eight-hour examination, and too many futures depend on winning it. This report diagnoses the Tournament Trap—consequence coupling under effective scarcity—and proposes a transition architecture that lowers what winning buys, so that losing one tournament becomes survivable.',
    },
    ko: {
      title:
        '한국: 토너먼트 함정 — 유효 희소성 아래의 결과 연동',
      subtitle:
        '세계에서 가장 뛰어난 토너먼트가 된 사회에 대한 공학으로서의 거버넌스 진단 — 그리고 능력을 다원성으로 바꾸는 구조적 과제',
      description:
        '한국은 실패하고 있지 않다. 한국은 잘 관찰하고, 빠르게 행동하며, 헌법에 등을 돌린 대통령조차 바로잡을 수 있음을 보여주었다. 그런데도 매년 11월 어느 목요일이면 나라는 8시간짜리 시험을 위해 항공기를 착륙시키고, 너무 많은 미래가 그 시험에서 이기는 데 달려 있다. 이 보고서는 토너먼트 함정—유효 희소성 아래의 결과 연동—을 진단하고, 이기는 것이 사들이는 것을 낮추어 하나의 토너먼트에서 지는 것이 생존 가능해지도록 하는 전환 아키텍처를 제안한다.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · South Korea',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelKo: 'PDF (한국어)',
    },
    ko: {
      tag: '국가 보고서 · 한국',
      allReports: '← 모든 보고서',
      downloads: '다운로드',
      share: '공유',
      cite: '인용 방법',
      pdfLabelEn: 'PDF (English)',
      pdfLabelKo: 'PDF (한국어)',
    },
  };

  const citations = {
    en: 'Holmström, B. K. (2026). South Korea: The Tournament Trap — Consequence Coupling Under Effective Scarcity. Strategic Country Report.',
    ko: 'Holmström, B. K. (2026). 한국: 토너먼트 함정 — 유효 희소성 아래의 결과 연동. 전략적 국가 보고서.',
  };

  // ------------------------------------------
  // 5. Reactive logic
  // ------------------------------------------
  let reportLang = $state<'en' | 'ko'>('en');
  let activeSection = $state('executive-summary');

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
  let citeText = $derived(citations[reportLang] ?? citations.en);

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'ko' : 'en';
  }

  function sectionTitle(section: (typeof contentMap)[0]) {
    return reportLang === 'ko' ? section.titleKo : section.titleEn;
  }

  function sectionHtml(section: (typeof contentMap)[0]): string {
    const lang = reportLang as 'en' | 'ko';
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
    content = content.replace(
      /(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
      (match, tex1, tex2) => {
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
      },
    );

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
    navigator.clipboard.writeText(citeText).then(() => {
      alert(reportLang === 'ko' ? '인용이 복사되었습니다!' : 'Citation copied!');
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
    <!-- Language toggle (EN → KO → EN) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'ko'} class:opacity-50={reportLang !== 'ko'}>KO</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/south-korea-tournament-trap-en.pdf"
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
        EN
      </a>
      <a
        href="/reports/south-korea-tournament-trap-ko.pdf"
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
        KO
      </a>
    </div>

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
      {t.cite}
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
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50">/</span>
        <span class:font-bold={reportLang === 'ko'} class:opacity-50={reportLang !== 'ko'}>KO</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/south-korea-tournament-trap-en.pdf"
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
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/south-korea-tournament-trap-ko.pdf"
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
          {t.pdfLabelKo}
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
        {t.cite}
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
          {sectionTitle(section)}
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
        {t.tag}
      </div>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
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
        {#if section.id !== 'appendix-f'}
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
