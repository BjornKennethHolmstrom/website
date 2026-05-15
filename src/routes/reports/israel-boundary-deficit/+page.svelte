<!-- src/routes/reports/israel-boundary-deficit/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, HE)
  // ------------------------------------------

  // Author's Note
  import AuthorsNoteEn from './sections/00-authors-note.en.md';
  import AuthorsNoteHe from './sections/00-authors-note.he.md';

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryHe from './sections/00-executive-summary.he.md';

  // 1. The Boundary Deficit
  import BoundaryDeficitEn from './sections/01-boundary-deficit.en.md';
  import BoundaryDeficitHe from './sections/01-boundary-deficit.he.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsHe from './sections/02-structural-mechanisms.he.md';

  // 3. Building Boundary Resolution Capacity
  import BuildingCapacityEn from './sections/03-building-boundary-resolution-capacity.en.md';
  import BuildingCapacityHe from './sections/03-building-boundary-resolution-capacity.he.md';

  // 4. The Political Immune System: The Security First Responder
  import ImmuneSystemEn from './sections/04-political-immune-system.en.md';
  import ImmuneSystemHe from './sections/04-political-immune-system.he.md';

  // 5. Working with the Grain: Transition Architecture for Israel
  import TransitionArchitectureEn from './sections/05-transition-architecture.en.md';
  import TransitionArchitectureHe from './sections/05-transition-architecture.he.md';

  // 6. A Concrete First Step
  import FirstStepEn from './sections/06-first-step.en.md';
  import FirstStepHe from './sections/06-first-step.he.md';

  // 7. Coda
  import CodaEn from './sections/07-coda.en.md';
  import CodaHe from './sections/07-coda.he.md';

  // Appendices
  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixAHe from './sections/08-appendix-a.he.md';

  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBHe from './sections/08-appendix-b.he.md';

  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCHe from './sections/08-appendix-c.he.md';

  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDHe from './sections/08-appendix-d.he.md';

  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixEHe from './sections/08-appendix-e.he.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'authors-note',
      titleEn: 'A Note on Language and Audience',
      titleHe: 'הערה על שפה וקהל יעד',
      compEn: AuthorsNoteEn,
      compHe: AuthorsNoteHe,
    },
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleHe: 'תקציר מנהלים',
      compEn: ExecutiveSummaryEn,
      compHe: ExecutiveSummaryHe,
    },
    {
      id: 'boundary-deficit',
      titleEn: '1. The Boundary Deficit',
      titleHe: '1. גירעון הגבולות',
      compEn: BoundaryDeficitEn,
      compHe: BoundaryDeficitHe,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. The Boundary Deficit: Structural Mechanisms',
      titleHe: '2. גירעון הגבולות: מנגנונים מבניים',
      compEn: StructuralMechanismsEn,
      compHe: StructuralMechanismsHe,
    },
    {
      id: 'building-capacity',
      titleEn: '3. What Building Boundary Resolution Capacity Would Look Like',
      titleHe: '3. כיצד תיראה בניית יכולת ליישוב גבולות',
      compEn: BuildingCapacityEn,
      compHe: BuildingCapacityHe,
    },
    {
      id: 'immune-system',
      titleEn: '4. The Political Immune System: The Security First Responder',
      titleHe: '4. המערכת החיסונית הפוליטית: מגיב האבטחה הראשון',
      compEn: ImmuneSystemEn,
      compHe: ImmuneSystemHe,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for Israel',
      titleHe: '5. לעבוד עם התבואה: ארכיטקטורת מעבר לישראל',
      compEn: TransitionArchitectureEn,
      compHe: TransitionArchitectureHe,
    },
    {
      id: 'first-step',
      titleEn: '6. A Concrete First Step: The Basic Law: Equality and the National Deliberative Commission',
      titleHe: '6. צעד ראשון קונקרטי: חוק יסוד: שוויון והוועדה הדיונית הלאומית',
      compEn: FirstStepEn,
      compHe: FirstStepHe,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: The Resilience Paradox',
      titleHe: '7. קודה: פרדוקס החוסן',
      compEn: CodaEn,
      compHe: CodaHe,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleHe: 'נספח א׳: מערכות ערכים ודפוסי חשיבה מדינית',
      compEn: AppendixAEn,
      compHe: AppendixAHe,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titleHe: 'נספח ב׳: אנלוגיות ותקדימים בין-לאומיים',
      compEn: AppendixBEn,
      compHe: AppendixBHe,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleHe: 'נספח ג׳: הקשר לממשל כהנדסה',
      compEn: AppendixCEn,
      compHe: AppendixCHe,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleHe: 'נספח ד׳: התנגדויות צפויות',
      compEn: AppendixDEn,
      compHe: AppendixDHe,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleHe: 'נספח ה׳: על המחבר והשיטה',
      compEn: AppendixEEn,
      compHe: AppendixEHe,
    },
  ];

  // ------------------------------------------
  // 3. Report language (en, he)
  // ------------------------------------------
  let reportLang: 'en' | 'he' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    reportLang = reportLang === 'en' ? 'he' : 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    return reportLang === 'he' ? section.titleHe : section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    return reportLang === 'he' ? section.compHe : section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts (English & Hebrew)
  // ------------------------------------------
  const metadata = {
    en: {
      title: "The Boundary Deficit: Why Israel's Survival Architecture Cannot Generate Political Settlement",
      subtitle:
        'A field guide to the Threat–Mobilization–Securitization–Fragmentation Loop — and how the most adaptive state on earth can complete the governance architecture its founders left unfinished',
      description:
        'Israel is not a failing state — it is a state that mastered survival but cannot achieve normalcy. This report diagnoses a Boundary Deficit produced by the constitutional vacuum, the occupation paradox, and a cultural operating system that converts political questions into existential imperatives.',
    },
    he: {
      title: 'גירעון הגבולות: מדוע ארכיטקטורת ההישרדות של ישראל אינה יכולה לייצר הסדר מדיני',
      subtitle:
        'מדריך שטח ללולאת האיום–התגייסות–ביטחון–התפצלות — וכיצד המדינה המסתגלת ביותר עלי אדמות יכולה להשלים את ארכיטקטורת הממשל שמייסדיה השאירו בלתי גמורה',
      description:
        'ישראל אינה מדינה כושלת — היא מדינה ששלטה באמנות ההישרדות אך אינה יכולה להשיג נורמליות. דו"ח זה מאבחן גירעון גבולות הנובע מהוואקום החוקתי, פרדוקס הכיבוש ומערכת הפעלה תרבותית ההופכת שאלות פוליטיות לציוויים קיומיים.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Israel',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelHe: 'PDF (עברית)',
      languageToggle: 'עברית',
    },
    he: {
      tag: 'דו"ח מדינה · ישראל',
      allReports: '← כל הדו"חות',
      downloads: 'הורדות',
      share: 'שתף',
      cite: 'איך לצטט',
      pdfLabelEn: 'PDF (English)',
      pdfLabelHe: 'PDF (עברית)',
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

  <!-- MOBILE TOOLBAR (visible only below lg) -->
  <div class="lg:hidden flex flex-wrap items-center justify-between gap-3 px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <!-- Language toggle (EN / עברית) -->
    <button
      onclick={cycleLanguage}
      class="flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
    >
      <span class="opacity-50">🌐</span>
      <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
      <span class="opacity-50">/</span>
      <span class:font-bold={reportLang === 'he'} class:opacity-50={reportLang !== 'he'} dir="rtl">עברית</span>
    </button>

    <!-- PDF downloads -->
    <div class="flex items-center gap-3">
      <a
        href="/reports/israel-boundary-deficit-en.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelEn}
      </a>
      <a
        href="/reports/israel-boundary-deficit-he.pdf"
        download
        class="flex items-center gap-1 text-xs font-medium text-[var(--color-page-accent)] hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {t.pdfLabelHe}
      </a>
    </div>

    <!-- Cite button -->
    <button
      onclick={() => {
        const cite = reportLang === 'he'
          ? 'הולמסטרום, ב. ק. (2026). גירעון הגבולות: מדוע ארכיטקטורת ההישרדות של ישראל אינה יכולה לייצר הסדר מדיני. דו"ח אסטרטגי על מדינה.'
          : 'Holmström, B. K. (2026). The Boundary Deficit: Why Israel\'s Survival Architecture Cannot Generate Political Settlement. Strategic Country Report.';
        navigator.clipboard.writeText(cite);
        alert(reportLang === 'he' ? 'הציטוט הועתק!' : 'Citation copied!');
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

    <!-- Language toggle (EN / HE) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'he'} class:opacity-50={reportLang !== 'he'} dir="rtl">עברית</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/israel-boundary-deficit-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/israel-boundary-deficit-he.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelHe}
        </a>
      </div>
    </div>

    <!-- Citation in sidebar -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <button
        onclick={() => {
          const cite = reportLang === 'he'
            ? 'הולמסטרום, ב. ק. (2026). גירעון הגבולות: מדוע ארכיטקטורת ההישרדות של ישראל אינה יכולה לייצר הסדר מדיני. דו"ח אסטרטגי על מדינה.'
            : 'Holmström, B. K. (2026). The Boundary Deficit: Why Israel\'s Survival Architecture Cannot Generate Political Settlement. Strategic Country Report.';
          navigator.clipboard.writeText(cite);
          alert(reportLang === 'he' ? 'הציטוט הועתק!' : 'Citation copied!');
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
  <main class="flex-1 min-w-0 px-4 pt-16 pb-24" class:rtl={reportLang === 'he'}>
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
            class:rtl={reportLang === 'he'}
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

    <!-- Share (bottom) -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>
  </main>
</div>

<style>
  :global(.rtl) {
    direction: rtl;
    text-align: right;
  }
  :global(.rtl .prose) {
    text-align: right;
  }
</style>
