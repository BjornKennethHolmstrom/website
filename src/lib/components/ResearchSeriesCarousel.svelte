<script lang="ts" module>
  export type SeriesPaper = {
    key: string;
    url: string;
    coverImage: string;
    title: string;
    description: string;
    number?: string;
  };

  export type ResearchSeries = {
    id: string;
    title: string;
    subtitle: string;
    cta: string;
    tone: 'amber' | 'indigo';
    isNew?: boolean;
    /** Shown in the control bar when the series has a single paper. */
    note?: string;
    items: readonly SeriesPaper[];
    initialIndex?: number;
  };
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  type Props = {
    series: readonly ResearchSeries[];
    heading: string;
    subtitle: string;
    labels: { paper: string; previous: string; next: string; preview: string; isNew: string };
    interval?: number;
    onPreview?: (src: string) => void;
  };

  let { series, heading, subtitle, labels, interval = 9000, onPreview }: Props = $props();

  const uid = 'research-series';

  // Literal class strings so Tailwind picks them up.
  const TONES = {
    amber: {
      dot: 'bg-amber-500',
      bar: 'bg-amber-500',
      chip: 'bg-amber-500/10 text-amber-700 ring-amber-500/30 dark:text-amber-300',
      cta: 'bg-amber-600 hover:bg-amber-700 focus-visible:outline-amber-600',
      cover: 'hover:ring-amber-400 focus-visible:outline-amber-500'
    },
    indigo: {
      dot: 'bg-indigo-500',
      bar: 'bg-indigo-500',
      chip: 'bg-indigo-500/10 text-indigo-700 ring-indigo-500/30 dark:text-indigo-300',
      cta: 'bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600',
      cover: 'hover:ring-indigo-400 focus-visible:outline-indigo-500'
    }
  } as const;

  const clamp = (i: number, n: number) => Math.min(Math.max(i, 0), Math.max(0, n - 1));

  let seriesIndex = $state(0);
  // Each series remembers its own position when switching tabs.
  let indices = $state(series.map((s) => clamp(s.initialIndex ?? 0, s.items.length)));
  let direction = $state(0); // 1 next, -1 previous, 0 series switch
  let paused = $state(false);
  let reducedMotion = $state(false);
  let lastMove = Date.now();

  const active = $derived(series[seriesIndex]);
  const items = $derived(active.items);
  const index = $derived(clamp(indices[seriesIndex] ?? 0, items.length));
  const paper = $derived(items[index]);
  const tone = $derived(TONES[active.tone]);

  function go(to: number, dir: number) {
    const n = items.length;
    if (n < 2) return;
    direction = dir;
    indices[seriesIndex] = ((to % n) + n) % n;
    lastMove = Date.now();
  }
  const step = (d: number) => go(index + d, d);

  function selectSeries(i: number) {
    if (i === seriesIndex) return;
    direction = 0;
    seriesIndex = i;
    lastMove = Date.now();
  }

  function onTabKeydown(e: KeyboardEvent, i: number) {
    const last = series.length - 1;
    const target =
      e.key === 'ArrowRight' ? (i === last ? 0 : i + 1) :
      e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1) :
      e.key === 'Home' ? 0 :
      e.key === 'End' ? last : -1;
    if (target < 0) return;
    e.preventDefault();
    selectSeries(target);
    document.getElementById(`${uid}-tab-${target}`)?.focus();
  }

  let touchX: number | null = null;
  function onTouchEnd(e: TouchEvent) {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }

  onMount(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const id = window.setInterval(() => {
      if (reducedMotion || paused || document.hidden || items.length < 2) return;
      if (Date.now() - lastMove >= interval) step(1);
    }, 500);
    return () => window.clearInterval(id);
  });

  // Warm the next cover so it doesn't pop in late.
  $effect(() => {
    if (items.length < 2) return;
    const img = new Image();
    img.src = items[(index + 1) % items.length].coverImage;
  });

  const inParams = $derived({
    x: direction * 40,
    y: direction === 0 ? 10 : 0,
    duration: reducedMotion ? 0 : 320,
    delay: reducedMotion ? 0 : 80
  });
  const outParams = $derived({ x: -direction * 40, duration: reducedMotion ? 0 : 200 });
</script>

<section
  class="border-b border-[var(--color-separator)] bg-[var(--color-page-bg)] py-10 md:py-14"
  aria-labelledby="{uid}-heading"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl">
        <h2 id="{uid}-heading" class="mb-2 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
          {heading}
        </h2>
        <p class="text-[var(--color-page-text)] opacity-70">{subtitle}</p>
      </div>

      <div
        role="tablist"
        aria-label={heading}
        class="flex w-full gap-1 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-1 lg:w-auto"
      >
        {#each series as s, i (s.id)}
          {@const selected = i === seriesIndex}
          <button
            type="button"
            role="tab"
            id="{uid}-tab-{i}"
            aria-selected={selected}
            aria-controls="{uid}-panel"
            tabindex={selected ? 0 : -1}
            class="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold leading-tight text-[var(--color-card-text)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 lg:flex-none {selected
              ? 'bg-[var(--color-page-bg)] shadow-sm ring-1 ring-[var(--color-separator)]'
              : 'opacity-60 hover:opacity-100'}"
            onclick={() => selectSeries(i)}
            onkeydown={(e) => onTabKeydown(e, i)}
          >
            <span aria-hidden="true" class="h-2 w-2 shrink-0 rounded-full {TONES[s.tone].dot}"></span>
            <span>{s.title}</span>
            <span class="text-xs font-medium tabular-nums opacity-60">{s.items.length}</span>
            {#if s.isNew}
              <span class="shrink-0 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-900">
                {labels.isNew}
              </span>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <div
      id="{uid}-panel"
      role="tabpanel"
      aria-labelledby="{uid}-tab-{seriesIndex}"
      aria-roledescription="carousel"
      class="overflow-hidden rounded-2xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] text-[var(--color-card-text)] shadow-sm"
      onpointerenter={() => (paused = true)}
      onpointerleave={() => (paused = false)}
      onfocusin={() => (paused = true)}
      onfocusout={() => (paused = false)}
      ontouchstart={(e) => (touchX = e.touches[0].clientX)}
      ontouchend={onTouchEnd}
    >
      <div aria-hidden="true" class="h-1 transition-colors duration-300 {tone.bar}"></div>

      <p class="border-b border-[var(--color-separator)] px-6 py-3 text-sm opacity-70 sm:px-10">
        {active.subtitle}
      </p>

      <!-- Single grid cell: outgoing and incoming slides overlap, and the
           card grows for long abstracts instead of clipping them. -->
      <div class="grid min-h-[30rem] grid-cols-1 content-center px-6 py-8 sm:min-h-[24rem] sm:px-10 md:min-h-[20rem]">
        {#if paper}
          {#key `${active.id}:${paper.key}`}
            <div
              class="col-start-1 row-start-1 flex flex-col items-center gap-6 md:flex-row md:gap-10"
              in:fly={inParams}
              out:fly={outParams}
            >
              <div class="min-w-0 flex-1 text-center md:text-left">
                <span class="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 {tone.chip}">
                  {labels.paper}{paper.number ? ` ${paper.number}` : ''}
                </span>
                <h3 class="mb-3 text-xl font-extrabold leading-tight sm:text-2xl md:text-3xl">
                  {paper.title}
                </h3>
                <p class="mx-auto mb-6 max-w-2xl text-sm leading-relaxed opacity-80 sm:text-base md:mx-0">
                  {paper.description}
                </p>
                <a
                  href={paper.url}
                  class="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 {tone.cta}"
                >
                  {active.cta.trim()}
                  <svg aria-hidden="true" class="-mr-1 ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <button
                type="button"
                class="order-first block w-28 shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-36 md:order-none md:w-44 lg:w-48 {tone.cover}"
                aria-label="{labels.preview}: {paper.title}"
                onclick={() => onPreview?.(paper.coverImage)}
              >
                <img
                  src={paper.coverImage}
                  alt=""
                  class="block h-auto max-h-72 w-full rounded-md object-contain shadow-md ring-1 ring-black/10 transition hover:ring-2 dark:ring-white/15"
                />
              </button>
            </div>
          {/key}
        {/if}
      </div>

      <div class="flex min-h-[3.75rem] items-center gap-4 border-t border-[var(--color-separator)] px-4 py-3 sm:px-6">
        {#if items.length > 1}
          <button
            type="button"
            class="rounded-full bg-slate-500/10 p-2 transition-colors hover:bg-slate-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            aria-label={labels.previous}
            onclick={() => step(-1)}
          >
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <div class="flex min-w-0 flex-1 items-center justify-center gap-3">
            {#if items.length <= 12}
              <div class="flex flex-wrap justify-center gap-2">
                {#each items as item, i (item.key)}
                  <button
                    type="button"
                    class="h-2.5 w-2.5 rounded-full transition-colors {i === index ? tone.dot : 'bg-slate-300 dark:bg-slate-600'}"
                    aria-label="{labels.paper} {i + 1}"
                    aria-current={i === index ? 'true' : undefined}
                    onclick={() => go(i, i > index ? 1 : -1)}
                  ></button>
                {/each}
              </div>
            {:else}
              <div aria-hidden="true" class="h-1 w-full max-w-xs overflow-hidden rounded-full bg-slate-500/20">
                <div class="h-full rounded-full transition-[width] duration-300 {tone.bar}" style="width: {((index + 1) / items.length) * 100}%"></div>
              </div>
            {/if}
            <span class="shrink-0 text-sm tabular-nums opacity-70" aria-live={paused ? 'polite' : 'off'}>
              {index + 1} / {items.length}
            </span>
          </div>

          <button
            type="button"
            class="rounded-full bg-slate-500/10 p-2 transition-colors hover:bg-slate-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            aria-label={labels.next}
            onclick={() => step(1)}
          >
            <svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        {:else}
          <p class="w-full text-center text-sm opacity-70">{active.note ?? ''}</p>
        {/if}
      </div>
    </div>
  </div>
</section>
