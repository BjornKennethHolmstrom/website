<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { language } from '$lib/stores/languageStore';
  import { varietyGapTranslations } from '$lib/i18n/translations/variety-gap';
  import DiagnosticFieldGuideEn from './diagnostic-field-guide.en.md';
  import DiagnosticFieldGuideSv from './diagnostic-field-guide.sv.md';
  import StableGlossaryEn from '$lib/content/stable-glossary-v1.0.md';
  import StableGlossarySv from '$lib/content/stable-glossary-v1.0-sv.md';

  let lang = $derived($language === 'sv' ? 'sv' : 'en');
  let t = $derived(varietyGapTranslations[lang]);

  // Tab state
  let activeTab = $state<'field-guide' | 'glossary'>('field-guide');

  const reports = [
    { slug: 'germany-spending-mirage',        emoji: '🇩🇪', key: 'germany' },
    { slug: 'france-decisiveness-mirage',      emoji: '🇫🇷', key: 'france' },
    { slug: 'sweden-competence-trap',          emoji: '🇸🇪', key: 'sweden' },
    { slug: 'india-leap-lag-cycle',            emoji: '🇮🇳', key: 'india' },
    { slug: 'eu-coherence-mirage',             emoji: '🇪🇺', key: 'eu' },
    { slug: 'uk-control-mirage',               emoji: '🇬🇧', key: 'uk' },
    { slug: 'brazil-accumulation-deficit',     emoji: '🇧🇷', key: 'brazil' },
    { slug: 'russia-legibility-deficit',       emoji: '🇷🇺', key: 'russia' },
    { slug: 'us-integration-deficit',          emoji: '🇺🇸', key: 'usa' },
    { slug: 'finland-throughput-constraint',   emoji: '🇫🇮', key: 'finland' },
    { slug: 'japan-continuity-trap',           emoji: '🇯🇵', key: 'japan' },
    { slug: 'nigeria-substrate-deficit',       emoji: '🇳🇬', key: 'nigeria' },
    { slug: 'israel-boundary-deficit',         emoji: '🇮🇱', key: 'israel' },
    { slug: 'china-calibration-deficit',       emoji: '🇨🇳', key: 'china' },
    { slug: 'subsidiarity-deficit',            emoji: '🧩', key: 'synthesis' },
  ];

  const orgReports = [
    { slug: 'ai-coherence-velocity-trap',           emoji: '🤖', key: 'ai' },
    { slug: 'healthcare-clinical-observability-gap', emoji: '🏥', key: 'healthcare' },
    { slug: 'universities-integration-deficit',      emoji: '🎓', key: 'universities' },
  ];

  const papers = [
    { href: '/working-papers/governance-stability-simulator',          key: 'paperI' },
    { href: '/working-papers/fractality-as-stability',                 key: 'fractality' },
    { href: '/working-papers/observability-democracy-connection',      key: 'observability' },
    { href: '/working-papers/requisite-variety-and-the-commons',       key: 'requisite' },
    { href: '/working-papers/coordination-failure-tax',                key: 'coordination' },
    { href: '/working-papers/the-variety-gap',                         key: 'varietyGap' },
    { href: '/working-papers/architecture-of-governance-failure',      key: 'architectureOfFailure' },
  ];
</script>

<SEO
  title={lang === 'sv' ? 'Varietetsgapet – ramverket | Björn Kenneth Holmström' : 'The Variety Gap Framework | Björn Kenneth Holmström'}
  description={lang === 'sv'
    ? 'En cybernetisk diagnos för varför styrsystem blir blinda för sin egen skörhet. Innehåller den diagnostiska fältguiden för landrapporter.'
    : 'A cybernetic diagnostic for why governance systems become blind to their own fragility. Includes the Country Reports Diagnostic Field Guide.'}
/>

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
            {t.explore.reportsTitle}
          </h3>
          <p class="text-[var(--color-page-text)] opacity-70">
            {t.explore.reportsDesc}
          </p>
        </div>
        <a href="/reports" class="text-sm font-medium text-[var(--color-page-accent)] hover:underline whitespace-nowrap">
          {t.explore.reportsOverview}
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {#each reports as report}
          <a
            href={`/reports/${report.slug}`}
            class="flex items-center gap-2 rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-3 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-lg">{report.emoji}</span>
            <span class="truncate">{t.varietyReports[report.key]}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Organizational Reports -->
    <div class="mb-12">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="text-2xl font-semibold text-[var(--color-page-text)] mb-1">
            {t.explore.orgReportsTitle}
          </h3>
          <p class="text-[var(--color-page-text)] opacity-70">
            {t.explore.orgReportsDesc}
          </p>
        </div>
      </div>
      <div class="space-y-2">
        {#each orgReports as report}
          <a
            href={`/reports/${report.slug}`}
            class="flex items-center gap-3 rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-3 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="text-lg">{report.emoji}</span>
            <span>{t.orgReports[report.key]}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Governance as Engineering Papers -->
    <div>
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="text-2xl font-semibold text-[var(--color-page-text)] mb-1">
            {t.explore.papersTitle}
          </h3>
          <p class="text-[var(--color-page-text)] opacity-70">
            {t.explore.papersDesc}
          </p>
        </div>
        <a href="/working-papers" class="text-sm font-medium text-[var(--color-page-accent)] hover:underline whitespace-nowrap">
          {t.explore.papersOverview}
        </a>
      </div>
      <div class="space-y-2">
        <a href="/working-papers/governance-stability-simulator" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'I: Styrstabilitetssimulatorn' : 'I: Governance Stability Simulator'}
        </a>
        <a href="/working-papers/fractality-as-stability" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'II: Fraktalitet som stabilitet' : 'II: Fractality as Stability'}
        </a>
        <a href="/working-papers/observability-democracy-connection" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'III: Observerbarhets‑demokratikopplingen' : 'III: The Observability‑Democracy Connection'}
        </a>
        <a href="/working-papers/requisite-variety-and-the-commons" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'IV: Nödvändig variation och allmänningen' : 'IV: Requisite Variety and the Commons'}
        </a>
        <a href="/working-papers/coordination-failure-tax" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'V: Samordningsmisslyckandets skatt' : 'V: The Coordination Failure Tax'}
        </a>
        <a href="/working-papers/the-variety-gap" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'VI: Varietetsgapet' : 'VI: The Variety Gap'}
        </a>
        <a href="/working-papers/architecture-of-governance-failure" class="block rounded-md border border-[var(--color-separator)] bg-[var(--color-card-bg)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] shadow-sm transition-shadow hover:shadow-md">
          📄 {lang === 'sv' ? 'VII: Styrningens misslyckandes arkitektur (Syntes)' : 'VII: The Architecture of Governance Failure (Synthesis)'}
        </a>
      </div>
    </div>
  </section>

  <!-- Tabs: Diagnostic Field Guide / Stable Glossary -->
  <section class="mb-16">
    <!-- Tab buttons -->
    <div class="flex border-b border-[var(--color-separator)] mb-8">
      <button
        onclick={() => activeTab = 'field-guide'}
        class="px-6 py-3 text-sm font-medium border-b-2 transition-colors
          {activeTab === 'field-guide'
            ? 'border-[var(--color-page-accent)] text-[var(--color-page-accent)]'
            : 'border-transparent text-[var(--color-page-text)] opacity-60 hover:opacity-100'}"
      >
        {t.fieldGuideTab ?? 'Diagnostic Field Guide'}
      </button>
      <button
        onclick={() => activeTab = 'glossary'}
        class="px-6 py-3 text-sm font-medium border-b-2 transition-colors
          {activeTab === 'glossary'
            ? 'border-[var(--color-page-accent)] text-[var(--color-page-accent)]'
            : 'border-transparent text-[var(--color-page-text)] opacity-60 hover:opacity-100'}"
      >
        {t.glossaryTab ?? 'Stable Glossary'}
      </button>
    </div>

    <!-- Field Guide panel -->
    {#if activeTab === 'field-guide'}
      <div>
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold text-[var(--color-page-text)]">
            {t.fieldGuide.heading}
          </h2>
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
        <div class="flex items-center justify-between mb-8">
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
              {t.glossary.downloadPdf}
            </a>
          </div>
        </div>

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
