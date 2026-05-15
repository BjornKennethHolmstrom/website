<!-- src/routes/reports/russia-legibility-deficit/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN + RU)
  // ------------------------------------------
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryRu from './sections/00-executive-summary.ru.md';

  import LegibilityDeficitEn from './sections/01-legibility-deficit.en.md';
  import LegibilityDeficitRu from './sections/01-legibility-deficit.ru.md';

  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsRu from './sections/02-structural-mechanisms.ru.md';

  import ReformImpossibleEn from './sections/03-reform-is-impossible.en.md';
  import ReformImpossibleRu from './sections/03-reform-is-impossible.ru.md';

  import DarkMirrorEn from './sections/04-dark-mirror.en.md';
  import DarkMirrorRu from './sections/04-dark-mirror.ru.md';

  import AppendixAEn from './sections/05-appendix-a.en.md';
  import AppendixARu from './sections/05-appendix-a.ru.md';

  import AppendixBEn from './sections/05-appendix-b.en.md';
  import AppendixBRu from './sections/05-appendix-b.ru.md';

  import AppendixCEn from './sections/05-appendix-c.en.md';
  import AppendixCRu from './sections/05-appendix-c.ru.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleRu: 'Аннотация',
      compEn: ExecutiveSummaryEn,
      compRu: ExecutiveSummaryRu,
    },
    {
      id: 'legibility-deficit',
      titleEn: '1. The Legibility Deficit',
      titleRu: '1. Дефицит читаемости',
      compEn: LegibilityDeficitEn,
      compRu: LegibilityDeficitRu,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. The Structural Mechanisms',
      titleRu: '2. Структурные механизмы',
      compEn: StructuralMechanismsEn,
      compRu: StructuralMechanismsRu,
    },
    {
      id: 'reform-impossible',
      titleEn: '3. Why Reform Is Impossible Under the Current Regime — and What Might Follow',
      titleRu: '3. Почему реформы невозможны при текущем режиме — и что может последовать',
      compEn: ReformImpossibleEn,
      compRu: ReformImpossibleRu,
    },
    {
      id: 'dark-mirror',
      titleEn: '4. Coda: The Dark Mirror',
      titleRu: '4. Кода: Тёмное зеркало',
      compEn: DarkMirrorEn,
      compRu: DarkMirrorRu,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleRu: 'Приложение A: Системы ценностей и политические установки',
      compEn: AppendixAEn,
      compRu: AppendixARu,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: The Governance as Engineering Connection',
      titleRu: 'Приложение B: Связь с Governance as Engineering',
      compEn: AppendixBEn,
      compRu: AppendixBRu,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: About the Author & Method',
      titleRu: 'Приложение C: Об авторе и методе',
      compEn: AppendixCEn,
      compRu: AppendixCRu,
    },
  ];

  // ------------------------------------------
  // 3. Report language (en / ru)
  // ------------------------------------------
  let reportLang: 'en' | 'ru' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'ru' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'ru' ? section.titleRu : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'ru' ? section.compRu : section.compEn;
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
      title: "The Legibility Deficit: When Governance Architecture Eliminates the Possibility of Governance",
      subtitle:
        'A boundary case for the Country Reports for Systemic Change — and what Russia reveals about the limits of adaptive governance',
      description:
        'Russia is not another failure mode — it is a different category of system. This boundary case diagnoses a Legibility Deficit in an architecture that makes accurate perception a threat to its own survival, and reveals the limits of adaptive governance.',
    },
    ru: {
      title: 'Дефицит читаемости: Когда архитектура управления уничтожает возможность управлять',
      subtitle:
        'Граничный случай для серии «Страновые доклады о системных изменениях» — и что Россия показывает о пределах адаптивного управления',
      description:
        'Россия — это не очередной вид дисфункции, а иная категория системы. Этот граничный случай диагностирует дефицит читаемости в архитектуре, которая превращает точное восприятие в угрозу собственному существованию, и раскрывает границы адаптивного управления.',
    },
  };

  const ui = {
    en: {
      tag: 'Boundary Case · Russia',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelRu: 'PDF (Русский)',
    },
    ru: {
      tag: 'Граничный случай · Россия',
      allReports: '← Все доклады',
      downloads: 'Скачать',
      share: 'Поделиться',
      cite: 'Как цитировать',
      pdfLabelEn: 'PDF (English)',
      pdfLabelRu: 'PDF (Русский)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-12"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- Language toggle (EN / RU) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'ru'} class:opacity-50={reportLang !== 'ru'}>RU</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/russia-legibility-deficit-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelEn}
      </a>
      <a
        href="/reports/russia-legibility-deficit-ru.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelRu}
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'ru'
          ? 'Хольмстрём, Б. К. (2026). Дефицит читаемости: Когда архитектура управления уничтожает возможность управлять. Граничный случай стратегических страновых докладов.'
          : 'Holmström, B. K. (2026). The Legibility Deficit: When Governance Architecture Eliminates the Possibility of Governance. Boundary Case, Strategic Country Reports.';
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'ru' ? 'Цитата скопирована!' : 'Citation copied!');
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
      <a href="/reports" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle (EN / RU) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'ru'} class:opacity-50={reportLang !== 'ru'}>RU</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/russia-legibility-deficit-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/russia-legibility-deficit-ru.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelRu}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'ru'
            ? 'Хольмстрём, Б. К. (2026). Дефицит читаемости: Когда архитектура управления уничтожает возможность управлять. Граничный случай стратегических страновых докладов.'
            : 'Holmström, B. K. (2026). The Legibility Deficit: When Governance Architecture Eliminates the Possibility of Governance. Boundary Case, Strategic Country Reports.';
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'ru' ? 'Цитата скопирована!' : 'Citation copied!');
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
        {#if section.id !== 'appendix-c'}
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
