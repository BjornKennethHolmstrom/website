<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { language } from '$lib/stores/languageStore';
  import { varietyGapTranslations } from '$lib/i18n/translations/variety-gap';
  import { reportsData } from '$lib/data/reports';
  import { reportsTranslations } from '$lib/i18n/translations/reports';
  import { papersEn, papersSv } from '$lib/data/syntheses';
  import DiagnosticFieldGuideEn from './diagnostic-field-guide.en.md';
  import DiagnosticFieldGuideSv from './diagnostic-field-guide.sv.md';
  import StableGlossaryEn from '$lib/content/stable-glossary-v1.0.md';
  import StableGlossarySv from '$lib/content/stable-glossary-v1.0-sv.md';

  let lang = $derived<'en' | 'sv'>($language === 'sv' ? 'sv' : 'en');
  let t = $derived(varietyGapTranslations[lang]);

  // Tab state
  let activeTab = $state<'field-guide' | 'glossary'>('field-guide');

  // Use the shared registries rather than maintaining duplicate lists of URLs.
  const reports = reportsData.filter(report => report.category === 'country');
  const orgReports = reportsData.filter(report => report.category === 'organization');
  const synthesisReports = reportsData.filter(report => report.category === 'synthesis');
  let papers = $derived(Object.values(lang === 'sv' ? papersSv : papersEn));
  let reportLabels = $derived(reportsTranslations[lang].reports);

  function reportTitle(key: string, fallback: string): string {
    // The registry's key is a string. Future missing translations fall back to the ID.
    if (!Object.prototype.hasOwnProperty.call(reportLabels, key)) return fallback;
    const entry = reportLabels[key as keyof typeof reportLabels];
    return 'title' in entry ? entry.title : fallback;
  }
</script>

<SEO title={`${t.hero.title} | Björn Kenneth Holmström`} description={t.seoDescription} />

<div class="max-w-4xl mx-auto px-4 py-16">

  <!-- Hero -->
  <header class="mb-16 text-center">
    <h1 class="text-4xl font-bold text-[var(--color-page-text)] mb-4">
      {t.hero.title}
    </h1>
    <p class="text-xl text-[var(--color-page-text)] opacity-70 max-w-2xl mx-auto">
      {t.hero.subtitle}
    </p>
  </header>

  <!-- Explanation -->
  <section class="mb-16 prose prose-lg max-w-none">
    <h2>{t.intro.heading}</h2>
    <p>{@html t.intro.p1}</p>
    <p>{@html t.intro.p2}</p>
    <aside class="not-prose mt-6 rounded-lg border border-[var(--color-separator)] p-5 text-[var(--color-page-text)]">
      <h3 class="font-semibold mb-2">{t.statusHeading}</h3>
      <p class="text-sm leading-relaxed">{t.statusText}</p>
      <div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[var(--color-page-accent)]">
        <a href="#diagnostic-field-guide" onclick={() => activeTab = 'field-guide'} class="underline">{t.guideJump}</a>
        <a href="/syntheses/brief" class="underline">{t.briefLink}</a>
      </div>
    </aside>
  </section>

  <!-- Explore the Series (appears BEFORE the field guide) -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-[var(--color-page-text)] mb-8">
      {t.explore.heading}
    </h2>

    <!-- Country Reports -->
    <div class="mb-12">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="text-2xl font-semibold text-[var(--color-page-text)] mb-1">
            {t.explore.reportsTitle} ({reports.length})
          </h3>
          <p class="text-[var(--color-page-text)] opacity-70">
            {t.explore.reportsDesc}
          </p>
        </div>
        <a href="/reports" class="text-sm font-medium text-[var(--color-page-accent)] hover:underline whitespace-nowrap">
          {t.explore.reportsOverview}
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {#each reports as report (report.id)}
          <a
            href={report.readOnlinePath}
            class="flex items-center gap-2 rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-3 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-lg">{report.emoji ?? '📄'}</span>
            <span class="leading-snug break-words">{reportTitle(report.key, report.id)}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Organizational Reports -->
    <div class="mb-12">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="text-2xl font-semibold text-[var(--color-page-text)] mb-1">
            {t.explore.orgReportsTitle} ({orgReports.length})
          </h3>
          <p class="text-[var(--color-page-text)] opacity-70">
            {t.explore.orgReportsDesc}
          </p>
        </div>
      </div>
      <div class="space-y-2">
        {#each orgReports as report (report.id)}
          <a
            href={report.readOnlinePath}
            class="flex items-center gap-3 rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-3 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-lg">{report.emoji ?? '📄'}</span>
            <span>{reportTitle(report.key, report.id)}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Report syntheses are not countries. -->
    <div class="mb-12">
      <h3 class="text-2xl font-semibold text-[var(--color-page-text)] mb-1">{t.synthesisTitle} ({synthesisReports.length})</h3>
      <p class="text-[var(--color-page-text)] opacity-70 mb-6">{t.synthesisDesc}</p>
      <div class="space-y-2">
        {#each synthesisReports as report (report.id)}
          <a href={report.readOnlinePath} class="flex items-center gap-3 rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-3 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
            <span class="text-lg">{report.emoji ?? '📄'}</span>
            <span>{reportTitle(report.key, report.id)}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Governance as Engineering Papers -->
    <div>
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="text-2xl font-semibold text-[var(--color-page-text)] mb-1">
            {t.explore.papersTitle} ({papers.length})
          </h3>
          <p class="text-[var(--color-page-text)] opacity-70">
            {t.explore.papersDesc}
          </p>
        </div>
        <a href="/working-papers" class="text-sm font-medium text-[var(--color-page-accent)] hover:underline whitespace-nowrap">
          {t.explore.papersOverview}
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {#each papers as paper (paper.href)}
          <a href={paper.href} class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-3 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
            📄 {paper.label}
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Tabs: Diagnostic Field Guide / Stable Glossary -->
  <section id="diagnostic-field-guide" class="mb-16 scroll-mt-8">
    <!-- Tab buttons -->
    <div class="flex border-b border-[var(--color-separator)] mb-8">
      <button
        onclick={() => activeTab = 'field-guide'}
        class="px-6 py-3 text-sm font-medium border-b-2 transition-colors
          {activeTab === 'field-guide'
            ? 'border-[var(--color-page-accent)] text-[var(--color-page-accent)]'
            : 'border-transparent text-[var(--color-page-text)] opacity-60 hover:opacity-100'}"
      >
        {t.fieldGuideTab}
      </button>
      <button
        onclick={() => activeTab = 'glossary'}
        class="px-6 py-3 text-sm font-medium border-b-2 transition-colors
          {activeTab === 'glossary'
            ? 'border-[var(--color-page-accent)] text-[var(--color-page-accent)]'
            : 'border-transparent text-[var(--color-page-text)] opacity-60 hover:opacity-100'}"
      >
        {t.glossaryTab}
      </button>
    </div>

    <!-- Field Guide panel -->
    {#if activeTab === 'field-guide'}
      <div>
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 class="text-3xl font-bold text-[var(--color-page-text)]">{t.fieldGuide.heading}</h2>
            <p class="text-sm opacity-70 mt-2">{t.guideVersion}</p>
          </div>
          <a
            href={`/variety-gap-framework/diagnostic-field-guide-${lang}.pdf`}
            download
            class="inline-flex items-center gap-2 rounded-md bg-[var(--color-page-accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            {t.fieldGuide.downloadPdf}
          </a>
        </div>

        <article class="prose prose-lg max-w-none">
          {#if lang === 'sv'}
            <DiagnosticFieldGuideSv />
          {:else}
            <DiagnosticFieldGuideEn />
          {/if}
        </article>
      </div>
    {/if}

    <!-- Glossary panel -->
    {#if activeTab === 'glossary'}
      <div>
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 class="text-3xl font-bold text-[var(--color-page-text)]">
              {t.glossary.heading}
            </h2>
            <p class="text-[var(--color-page-text)] opacity-70 mt-2">
              {t.glossary.description}
            </p>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-xs text-[var(--color-page-text)] opacity-50">{t.glossary.version}</span>
            <a
              href={`/variety-gap-framework/stable-glossary-${lang}.pdf`}
              download
              class="inline-flex items-center gap-2 rounded-md bg-[var(--color-page-accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              {t.glossaryPdf}
            </a>
          </div>
        </div>

        <p class="mb-6 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium text-[var(--color-page-text)]">{t.glossaryWarning}</p>
        <article class="prose prose-lg max-w-none">
          {#if lang === 'sv'}
            <StableGlossarySv />
          {:else}
            <StableGlossaryEn />
          {/if}
        </article>
      </div>
    {/if}
  </section>

</div>
