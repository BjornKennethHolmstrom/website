<!-- src/routes/reports/china-calibration-deficit/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, ZH)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryZh from './sections/00-executive-summary.zh.md';

  // 1. The Calibration Deficit
  import CalibrationDeficitEn from './sections/01-calibration-deficit.en.md';
  import CalibrationDeficitZh from './sections/01-calibration-deficit.zh.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsZh from './sections/02-structural-mechanisms.zh.md';

  // 3. Functional Calibration
  import FunctionalCalibrationEn from './sections/03-functional-calibration.en.md';
  import FunctionalCalibrationZh from './sections/03-functional-calibration.zh.md';

  // 4. Political Immune System
  import PoliticalImmuneSystemEn from './sections/04-political-immune-system.en.md';
  import PoliticalImmuneSystemZh from './sections/04-political-immune-system.zh.md';

  // 5. First Step
  import FirstStepEn from './sections/05-first-step.en.md';
  import FirstStepZh from './sections/05-first-step.zh.md';

  // 6. Coda
  import CodaEn from './sections/06-coda.en.md';
  import CodaZh from './sections/06-coda.zh.md';

  // Appendices
  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixAZh from './sections/08-appendix-a.zh.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBZh from './sections/08-appendix-b.zh.md';

  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCZh from './sections/08-appendix-c.zh.md';

  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDZh from './sections/08-appendix-d.zh.md';

  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixEZh from './sections/08-appendix-e.zh.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------

  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleZh: '执行摘要',
      compEn: ExecutiveSummaryEn,
      compZh: ExecutiveSummaryZh,
    },
    {
      id: 'calibration-deficit',
      titleEn: '1. The Calibration Deficit',
      titleZh: '1. 校准赤字',
      compEn: CalibrationDeficitEn,
      compZh: CalibrationDeficitZh,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. Structural Mechanisms',
      titleZh: '2. 结构性机制',
      compEn: StructuralMechanismsEn,
      compZh: StructuralMechanismsZh,
    },
    {
      id: 'functional-calibration',
      titleEn: '3. What Functional Calibration Would Require',
      titleZh: '3. 真正的功能性校准需要什么',
      compEn: FunctionalCalibrationEn,
      compZh: FunctionalCalibrationZh,
    },
    {
      id: 'political-immune-system',
      titleEn: '4. The Political Immune System',
      titleZh: '4. 政治免疫系统',
      compEn: PoliticalImmuneSystemEn,
      compZh: PoliticalImmuneSystemZh,
    },
    {
      id: 'first-step',
      titleEn: '5. A Concrete First Step: The Experimental Federalism Revival',
      titleZh: '5. 一个具体的第一步：实验性联邦主义的复兴',
      compEn: FirstStepEn,
      compZh: FirstStepZh,
    },
    {
      id: 'coda',
      titleEn: '6. Coda: The Simulation and the Territory',
      titleZh: '6. 尾声：模拟与现实',
      compEn: CodaEn,
      compZh: CodaZh,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleZh: '附录 A：价值体系与政策思维',
      compEn: AppendixAEn,
      compZh: AppendixAZh,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues',
      titleZh: '附录 B：国际类比',
      compEn: AppendixBEn,
      compZh: AppendixBZh,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Subsidiarity Lens',
      titleZh: '附录 C：辅助性原则视角',
      compEn: AppendixCEn,
      compZh: AppendixCZh,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleZh: '附录 D：预期反对意见',
      compEn: AppendixDEn,
      compZh: AppendixDZh,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleZh: '附录 E：关于作者与方法',
      compEn: AppendixEEn,
      compZh: AppendixEZh,
    },
  ];

  // ------------------------------------------
  // 3. Report language (en, zh)
  // ------------------------------------------

  let reportLang: 'en' | 'zh' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'zh' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    if (reportLang === 'zh') return section.titleZh;
    return section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    if (reportLang === 'zh') return section.compZh;
    return section.compEn;
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
      title:
        "The Calibration Deficit: Why China's Extraordinary Capacity Cannot Correct Its Own Course",
      subtitle:
        'A systems diagnosis of the world’s most sophisticated authoritarian governance architecture — and what genuine adaptive capacity would require',
      description:
        'China does not lack capacity, coordination, or long-term planning. What it lacks is the ability to update what it believes to be true at the speed increasing complexity requires.',
    },
    zh: {
      title:
        '校准赤字：为什么中国非凡的治理能力无法纠正自身航向',
      subtitle:
        '对世界上最复杂的威权治理架构的系统性诊断——以及真正的适应能力需要什么',
      description:
        '中国并不缺乏能力、协调性或长期规划。它缺乏的是：在复杂性不断增加的时代，以足够速度更新其现实模型的能力。',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · China',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelZh: 'PDF (中文)',
    },
    zh: {
      tag: '国家报告 · 中国',
      allReports: '← 所有报告',
      downloads: '下载',
      share: '分享',
      cite: '引用方式',
      pdfLabelEn: 'PDF (English)',
      pdfLabelZh: 'PDF (中文)',
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

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- Language toggle (EN / 中文) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'zh'} class:opacity-50={reportLang !== 'zh'}>中文</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      
        href="/reports/china-calibration-deficit-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelEn}
      </a>
      
        href="/reports/china-calibration-deficit-zh.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelZh}
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'zh'
          ? 'Holmström, B. K. (2026). 校准赤字：为什么中国非凡的治理能力无法纠正自身航向. 战略国家报告.'
          : "Holmström, B. K. (2026). The Calibration Deficit: Why China's Extraordinary Capacity Cannot Correct Its Own Course. Strategic Country Report.";
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'zh' ? '引用已复制！' : 'Citation copied!');
      }}
      class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      {t.cite}
    </button>
  </div>

  <!-- SIDEBAR -->
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">

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

        <span
          class:font-bold={reportLang === 'en'}
          class:opacity-50={reportLang !== 'en'}
        >
          EN
        </span>

        <span class="opacity-50 mx-1">/</span>

        <span
          class:font-bold={reportLang === 'zh'}
          class:opacity-50={reportLang !== 'zh'}
        >
          中文
        </span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">
        {t.downloads}
      </h3>

      <div class="space-y-3">
        <a
          href="/reports/china-calibration-deficit-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" x2="12" y1="15" y2="3"/>
          </svg>

          {t.pdfLabelEn}
        </a>

        <a
          href="/reports/china-calibration-deficit-zh.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" x2="12" y1="15" y2="3"/>
          </svg>

          {t.pdfLabelZh}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'zh'
            ? 'Holmström, B. K. (2026). 校准赤字：为什么中国非凡的治理能力无法纠正自身航向. 战略国家报告.'
            : "Holmström, B. K. (2026). The Calibration Deficit: Why China's Extraordinary Capacity Cannot Correct Its Own Course. Strategic Country Report.";
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'zh' ? '引用已复制！' : 'Citation copied!');
        }}
        class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
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
            <svelte:component this={sectionComp(section)} />
          </article>

        </div>

        {#if section.id !== 'appendix-e'}
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
