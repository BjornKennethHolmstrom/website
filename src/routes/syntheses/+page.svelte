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

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each $t.synthesesItems as synth}
      <div class="relative">
        <!-- Main card link -->
        <a
          href={`/syntheses/${synth.slug}`}
          class={`block rounded-xl p-6 border border-[var(--color-separator)] ${synth.color} hover:shadow-md transition-shadow h-full`}
        >
          <span class="block text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
            {synth.audience}
          </span>
          <h2 class="text-xl font-bold mb-2 text-[var(--color-page-text)]">
            {synth.title}
          </h2>
          <p class="text-sm opacity-80 text-[var(--color-page-text)]">
            {synth.description}
          </p>
        </a>

        <!-- PDF download link (positioned absolutely to avoid nesting links) -->
        <a
          href={`/syntheses/${synth.slug}.pdf`}
          download
          class="absolute bottom-4 right-4 inline-flex items-center text-xs font-medium opacity-50 hover:opacity-100 transition-opacity bg-white/80 dark:bg-slate-800/80 rounded-full px-2.5 py-1 shadow-sm"
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
