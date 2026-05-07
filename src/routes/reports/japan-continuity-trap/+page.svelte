<!-- src/routes/reports/japan-continuity-trap/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, JA)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryJa from './sections/00-executive-summary.ja.md';

  // 1. The Continuity Trap
  import ContinuityTrapEn from './sections/01-continuity-trap.en.md';
  import ContinuityTrapJa from './sections/01-continuity-trap.ja.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsJa from './sections/02-structural-mechanisms.ja.md';

  // 3. Building Paradigm Replacement Capacity
  import BuildingCapacityEn from './sections/03-building-paradigm-replacement.en.md';
  import BuildingCapacityJa from './sections/03-building-paradigm-replacement.ja.md';

  // 4. The Political Immune System: The Stability Bias
  import StabilityBiasEn from './sections/04-political-immune-system.en.md';
  import StabilityBiasJa from './sections/04-political-immune-system.ja.md';

  // 5. Working with the Grain: Transition Architecture
  import TransitionArchitectureEn from './sections/05-transition-architecture.en.md';
  import TransitionArchitectureJa from './sections/05-transition-architecture.ja.md';

  // 6. A Concrete First Step
  import FirstStepEn from './sections/06-concrete-first-step.en.md';
  import FirstStepJa from './sections/06-concrete-first-step.ja.md';

  // 7. Coda
  import CodaEn from './sections/07-coda.en.md';
  import CodaJa from './sections/07-coda.ja.md';

  // Appendices
  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixAJa from './sections/08-appendix-a.ja.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBJa from './sections/08-appendix-b.ja.md';

  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCJa from './sections/08-appendix-c.ja.md';

  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDJa from './sections/08-appendix-d.ja.md';

  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixEJa from './sections/08-appendix-e.ja.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleJa: 'エグゼクティブ・サマリー',
      compEn: ExecutiveSummaryEn,
      compJa: ExecutiveSummaryJa,
    },
    {
      id: 'continuity-trap',
      titleEn: '1. The Continuity Trap',
      titleJa: '1. 連続性の罠',
      compEn: ContinuityTrapEn,
      compJa: ContinuityTrapJa,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. The Continuity Trap: Structural Mechanisms',
      titleJa: '2. 連続性の罠：構造的メカニズム',
      compEn: StructuralMechanismsEn,
      compJa: StructuralMechanismsJa,
    },
    {
      id: 'building-capacity',
      titleEn: '3. What Building Paradigm Replacement Capacity Would Look Like',
      titleJa: '3. パラダイム置換能力の構築とは',
      compEn: BuildingCapacityEn,
      compJa: BuildingCapacityJa,
    },
    {
      id: 'stability-bias',
      titleEn: '4. The Political Immune System: The Stability Bias',
      titleJa: '4. 政治免疫システム：安定性バイアス',
      compEn: StabilityBiasEn,
      compJa: StabilityBiasJa,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for Japan',
      titleJa: '5. 日本の特性に沿った移行アーキテクチャ',
      compEn: TransitionArchitectureEn,
      compJa: TransitionArchitectureJa,
    },
    {
      id: 'first-step',
      titleEn: '6. A Concrete First Step: The Sunset Legislation and a Demography Commission',
      titleJa: '6. 具体的な第一歩：サンセット法と人口統計委員会',
      compEn: FirstStepEn,
      compJa: FirstStepJa,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: The Master of Continuity at the Frontier of Renewal',
      titleJa: '7. コーダ：再生の最前線に立つ連続性の達人',
      compEn: CodaEn,
      compJa: CodaJa,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleJa: '付録A：価値体系と政策マインドセット',
      compEn: AppendixAEn,
      compJa: AppendixAJa,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titleJa: '付録B：国際的な類似例と先例',
      compEn: AppendixBEn,
      compJa: AppendixBJa,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleJa: '付録C：ガバナンス・アズ・エンジニアリングとの関連',
      compEn: AppendixCEn,
      compJa: AppendixCJa,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleJa: '付録D：想定される反論',
      compEn: AppendixDEn,
      compJa: AppendixDJa,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleJa: '付録E：著者と方法について',
      compEn: AppendixEEn,
      compJa: AppendixEJa,
    },
  ];

  // ------------------------------------------
  // 3. Report language (en, ja)
  // ------------------------------------------
  let reportLang: 'en' | 'ja' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'ja' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'ja' ? section.titleJa : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'ja' ? section.compJa : section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts
  // ------------------------------------------
  const metadata = {
    en: {
      title: "The Continuity Trap: Why Japan's Civilizational Miracle Cannot Renew Itself",
      subtitle:
        'A field guide to the Pressure–Accommodate–Preserve–Defer Loop — and how the world’s most coherent society can learn to let go of the paradigm that saved it',
      description:
        'Japan is not failing — it has perfected continuity. This report diagnoses a Continuity Trap produced by the Iron Triangle, the fiscal‑demographic trap, and a cultural operating system that converts systemic failure into individual endurance, and proposes Institutional Kaizen and a Demography Commission as the concrete first step.',
    },
    ja: {
      title: '連続性の罠：日本の文明的奇跡が自己再生できない理由',
      subtitle:
        '「圧力→適応→保存→延期」ループの実地ガイド — そして世界で最も結束力の高い社会が、自らを救ったパラダイムを手放す術をどう学ぶか',
      description:
        '日本は失敗しているのではない — 連続性を極めすぎたのだ。本報告書は、鉄の三角形、財政・人口動態の罠、そしてシステムの失敗を個人の耐久力へと変換する文化的オペレーティング・システムによって生み出される「連続性の罠」を診断し、具体的な第一歩として「制度的カイゼン」と「人口統計委員会」を提案する。',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Japan',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelJa: 'PDF (日本語)',
      languageToggle: '日本語',
    },
    ja: {
      tag: '国別報告書 · 日本',
      allReports: '← すべての報告書',
      downloads: 'ダウンロード',
      share: '共有',
      cite: '引用方法',
      pdfLabelEn: 'PDF (English)',
      pdfLabelJa: 'PDF (日本語)',
      languageToggle: 'English',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-05"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- SIDEBAR -->
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <!-- Back link -->
    <div class="mb-8">
      <a href="/reports" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle (EN / JA) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'ja'} class:opacity-50={reportLang !== 'ja'}>日本語</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/japan-continuity-trap-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/japan-continuity-trap-ja.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelJa}
        </a>
      </div>
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
            <svelte:component this={sectionComp(section)} />
          </article>
        </div>
        {#if section.id !== 'appendix-e'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share & Citation -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <ShareButtons title={meta.title} />
        <button
          onclick={() => {
            const cite = reportLang === 'ja'
              ? 'Holmström, B. K. (2026). 連続性の罠：日本の文明的奇跡が自己再生できない理由. 戦略的国別報告書.'
              : 'Holmström, B. K. (2026). The Continuity Trap: Why Japan\'s Civilizational Miracle Cannot Renew Itself. Strategic Country Report.';
            navigator.clipboard.writeText(cite);
            alert(reportLang === 'ja' ? '引用をコピーしました！' : 'Citation copied!');
          }}
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {t.cite}
        </button>
      </div>
    </div>
  </main>
</div>
