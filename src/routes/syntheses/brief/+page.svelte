<script lang="ts">
  import { language, t } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  import ContentEn from '$lib/content/syntheses/brief.md';
  import ContentSv from '$lib/content/syntheses/brief-sv.md';

  const meta = {
    en: {
      title: 'The Synthesis Brief',
      subtitle:
        'The fourteen-paper grammar of Governance as Engineering — what it claims, how strongly, and what it does not',
      description:
        'A compact, honest map of the whole series for collaborators and reviewers: the structural thesis, the two theory cycles, the first preregistered empirical result, and a visible three-tier system marking how strongly each claim is made.',
      audience: 'Collaborators, reviewers, and anyone evaluating the framework',
      pdf: '/syntheses/brief.pdf',
    },
    sv: {
      title: 'Syntesöversikten',
      subtitle:
        'Grammatiken i Styrning som ingenjörskonsts fjorton arbetsdokument — vad den hävdar, hur starkt, och vad den inte gör',
      description:
        'En kompakt, ärlig karta över hela serien för medarbetare och granskare: den strukturella tesen, de två teoricyklerna, det första förregistrerade empiriska resultatet, och ett synligt trenivåsystem som markerar hur starkt varje anspråk görs.',
      audience: 'Medarbetare, granskare och alla som utvärderar ramverket',
      pdf: '/syntheses/brief-sv.pdf',
    },
  };

  $: currentMeta = meta[$language];
  $: Content = $language === 'sv' ? ContentSv : ContentEn;
</script>

<SEO
  title={`${currentMeta.title} | The Clouded Mirror — Reader's Guide`}
  description={currentMeta.description}
/>

<div class="max-w-3xl mx-auto px-4 py-16">
  <div class="mb-8 flex items-center justify-between">
    <a
      href="/syntheses"
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {$language === 'sv' ? 'Tillbaka till läsguiden' : 'Back to Reader\'s Guide'}
    </a>

    <a
      href={currentMeta.pdf}
      download
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
      PDF
    </a>
  </div>

  <header class="mb-12 text-center">
    <span
      class="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 mb-4"
    >
      {$language === 'sv' ? 'För' : 'For'}: {currentMeta.audience}
    </span>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">{currentMeta.title}</h1>
    <p class="text-xl opacity-70">{currentMeta.subtitle}</p>
  </header>

  <article class="prose prose-lg max-w-none"
    style="
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-body: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
      --tw-prose-links: var(--color-page-accent);
      --tw-prose-quotes: var(--color-page-text);
    ">
    <svelte:component this={Content} />
  </article>

  <section class="mt-16 pt-8 border-t border-[var(--color-separator)]">
    <h3 class="text-xl font-bold mb-4">{$language === 'sv' ? 'Läs vidare' : 'Read on'}</h3>
    <ul class="space-y-5">
      <li>
        <a href="/syntheses/the-clouded-mirror" class="font-medium text-[var(--color-page-accent)] hover:underline">
          {$language === 'sv' ? 'Den grumlade spegeln — den fullständiga syntesen' : 'The Clouded Mirror — the full synthesis'} →
        </a>
        <p class="text-sm opacity-70 mt-1">
          {$language === 'sv'
            ? 'Samma diagnos i sin helhet, för läsaren som vill ha hela argumentet snarare än kartan.'
            : 'The same diagnosis at full length, for the reader who wants the whole argument rather than the map.'}
        </p>
      </li>
      <li>
        <a href="/working-papers" class="font-medium text-[var(--color-page-accent)] hover:underline">
          {$language === 'sv' ? 'De fjorton arbetsdokumenten' : 'The fourteen working papers'} →
        </a>
        <p class="text-sm opacity-70 mt-1">
          {$language === 'sv'
            ? 'De formella resultaten bakom varje rad i grammatiken, med härledningar och osäkerheter.'
            : 'The formal results behind each row of the grammar, with derivations and stated uncertainties.'}
        </p>
      </li>
    </ul>
  </section>

  <div class="mt-16 pt-8 border-t border-[var(--color-separator)]">
    <a href="/syntheses" class="text-sm opacity-60 hover:opacity-100 transition-opacity">
      {$language === 'sv' ? '← Tillbaka till läsguiden' : '← Back to Reader\'s Guide'}
    </a>
    <div class="mt-8">
      <ShareButtons title={currentMeta.title} />
    </div>
  </div>
</div>
