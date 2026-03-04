<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { t, language } from '$lib/stores/languageStore.ts';

  import ContentEn from '$lib/content/the-coordination-imperative-v0.2.md';
  import ContentSv from '$lib/content/the-coordination-imperative-v0.2-sv.md';

  let Content = $derived($language === 'sv' ? ContentSv : ContentEn);
  let pdfHref = $derived(
    $language === 'sv'
      ? '/downloads/coordination-imperative/The-Coordination-Imperative-v0.2-sv.pdf'
      : '/downloads/coordination-imperative/The-Coordination-Imperative-v0.2.pdf'
  );
</script>

<SEO
  title={$t.coordination.meta.title}
  description={$t.coordination.meta.description}
  keywords="global governance, coordination, systems thinking, polycrisis, protocol, requisite variety"
  type="article"
/>

<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

  <!-- ── Header ───────────────────────────────────────────────────── -->
  <header class="mb-16 text-center">
    <div class="mb-4 flex items-center justify-center space-x-2">
      <span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-0.5 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
        {$t.coordination.badges.version}
      </span>
      <span class="inline-flex items-center rounded-full bg-slate-100 px-3 py-0.5 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-300">
        {$t.coordination.badges.openSource}
      </span>
    </div>
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl font-['Inter']">
      {$t.coordination.hero.title}
    </h1>
    <p class="mx-auto mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
      {$t.coordination.hero.subtitle}
    </p>
  </header>

  <!-- ── Abstract ─────────────────────────────────────────────────── -->
  <div class="prose prose-lg prose-slate dark:prose-invert mx-auto mb-16 max-w-3xl">
    <p class="lead">{$t.coordination.abstract.p1}</p>
    <p>{$t.coordination.abstract.p2}</p>
    <p>{$t.coordination.abstract.p3}</p>
  </div>

  <!-- ── Actions ──────────────────────────────────────────────────── -->
  <div class="mx-auto max-w-3xl">
    <h2 class="mb-6 text-2xl font-bold text-slate-900 dark:text-white">{$t.coordination.actions.title}</h2>
    <div class="grid gap-6 sm:grid-cols-2">

      <a
        href={pdfHref}
        target="_blank"
        rel="noopener noreferrer"
        class="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
      >
        <div>
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{$t.coordination.actions.pdf.title}</h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{$t.coordination.actions.pdf.desc}</p>
        </div>
      </a>

      <a
        href="https://github.com/BjornKennethHolmstrom/website/tree/main/src/lib/content/the-coordination-imperative-v0.2.md"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
      >
        <div>
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-900/50 dark:text-slate-400">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{$t.coordination.actions.github.title}</h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{$t.coordination.actions.github.desc}</p>
        </div>
      </a>
    </div>

    <div class="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800/50">
      <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{$t.coordination.translationsNotice.title}</h3>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {$t.coordination.translationsNotice.desc}
      </p>
    </div>
  </div>

  <!-- ── Full document ─────────────────────────────────────────────── -->
  <div class="mx-auto mt-24 max-w-3xl border-t border-slate-200 dark:border-slate-700 pt-16">
    <article class="prose prose-lg prose-slate dark:prose-invert max-w-none
      prose-headings:font-['Inter'] prose-headings:tracking-tight
      prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
      prose-a:text-amber-600 dark:prose-a:text-amber-400
      prose-strong:text-slate-900 dark:prose-strong:text-white
      prose-hr:border-slate-300 dark:prose-hr:border-slate-600">
      <Content />
    </article>
  </div>

</div>
