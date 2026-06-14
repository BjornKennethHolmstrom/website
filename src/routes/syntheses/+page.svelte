<script lang="ts">
  import { t } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
  title="The Clouded Mirror — Reader's Guide"
  description="Eight accessible pathways into a unified diagnosis of why our institutions can't see the crises they create—and what we can build instead."
/>

<div class="max-w-5xl mx-auto px-4 py-16">
  <header class="mb-16 text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">{$t.synthesesHubTitle}</h1>
    <p class="text-xl md:text-2xl opacity-70 font-light">{$t.synthesesHubSubtitle}</p>
    <p class="mt-6 text-base opacity-60 max-w-2xl mx-auto">{$t.synthesesHubIntro}</p>
  </header>

  <a  
    href="/syntheses/brief"
    class="relative block mb-10 rounded-2xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 md:p-8 hover:shadow-md transition-shadow border-l-4 border-l-amber-500 dark:border-l-amber-400"
  >
    <span class="absolute -top-3 left-5 inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
      {$t.briefFeature.badge}
    </span>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="flex-1">
        <h2 class="text-2xl font-bold mb-2 text-[var(--color-card-text)]">{$t.briefFeature.title}</h2>
        <p class="text-sm md:text-base opacity-80 text-[var(--color-card-text)] max-w-2xl">{$t.briefFeature.desc}</p>
      </div>
      <span class="inline-flex items-center whitespace-nowrap text-sm font-medium text-[var(--color-page-accent)]">
        {$t.briefFeature.cta}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </span>
    </div>
  </a>

  <details class="mb-12 rounded-lg border border-[var(--color-separator)] group">
    <summary class="cursor-pointer select-none px-4 py-3 font-medium flex items-center justify-between">
      {$t.digestTitle}
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 opacity-60 transition-transform group-open:rotate-180"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <ol class="px-4 pb-4 pt-1 space-y-4">
      {#each $t.papersDigest as p}
        <li>
          <a href={p.href} class="font-medium text-[var(--color-page-accent)] hover:underline">{p.label}</a>
          <p class="text-sm opacity-70 mt-1">{p.digest}</p>
        </li>
      {/each}
    </ol>
  </details>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each $t.synthesesItems as synth}
      <div class="relative">
        <!-- Main card: uses the same background as other site cards, thick colored left border -->
        <a
          href={`/syntheses/${synth.slug}`}
          class="block rounded-xl p-6 border border-[var(--color-separator)] bg-[var(--color-card-bg)] hover:shadow-md transition-shadow h-full border-l-4 {synth.borderColor}"
        >
          <span class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-80 text-[var(--color-card-text)]">
            {synth.audience}
          </span>
          <h2 class="text-xl font-bold mb-2 text-[var(--color-card-text)]">
            {synth.title}
          </h2>
          <p class="text-sm opacity-90 text-[var(--color-card-text)]">
            {synth.description}
          </p>
        </a>

        <!-- PDF download link – better contrast -->
        <a
          href={`/syntheses/${synth.slug}.pdf`}
          download
          class="absolute bottom-4 right-4 inline-flex items-center text-xs font-medium rounded-full px-2.5 py-1 shadow-sm
                 bg-white/90 dark:bg-slate-700/90
                 text-amber-600 dark:text-amber-400
                 hover:bg-white dark:hover:bg-slate-600
                 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 h-3.5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          PDF
        </a>
      </div>
    {/each}
  </div>

  <div class="mt-16 pt-8 border-t border-[var(--color-separator)] text-center">
    <p class="text-sm opacity-50">
      {$t.synthesesHubFooter}{' '}
      <a href="/working-papers" class="underline">{$t.synthesesHubFooterLinkLabel}</a>.
    </p>
  </div>
</div>
