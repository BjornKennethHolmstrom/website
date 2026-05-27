<script lang="ts">
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';
  import TimeChart from './components/TimeChart.svelte';
  import Controls from './components/Controls.svelte';
  import { createInitialState, simulateStep, DEFAULT_PARAMS } from './simulation';
  import type { BypassState, BypassParams } from './types';

  let params: BypassParams = { ...DEFAULT_PARAMS };
  let hasSunset = false;
  let state: BypassState = createInitialState(params, hasSunset);
  let running = false;
  let interval: ReturnType<typeof setInterval> | null = null;

  function reset() {
    stop();
    state = createInitialState(params, hasSunset);
    running = false;
  }

  function run() {
    if (running || state.gameOver) return;
    running = true;
    interval = setInterval(() => {
      state = simulateStep(state, params);
      if (state.gameOver) stop();
    }, 80);
  }

  function pause() {
    running = false;
    if (interval) { clearInterval(interval); interval = null; }
  }

  function stop() {
    running = false;
    if (interval) { clearInterval(interval); interval = null; }
  }

  function handleSunsetChange(val: boolean) {
    hasSunset = val;
    reset();
  }

  $: trapMessage = state.gameOver
    ? state.coreQuality >= 100
      ? 'Core reformed successfully — the bypass served as a catalyst.'
      : 'Core collapsed — the bypass became permanent, and the core was abandoned.'
    : '';
</script>

<div class="mx-auto max-w-3xl px-4 py-12">
  <ExplorableBreadcrumb title="The Bypass Trap" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">The Bypass Trap</h1>
    <p class="mt-2 text-lg opacity-70">
      When a workaround succeeds, pressure to fix the core disappears — unless you design a sunset.
    </p>
  </header>

  <div class="mb-6">
    <Controls {hasSunset} {running} finished={state.gameOver} on:sunsetChange={(e) => handleSunsetChange(e.detail)} on:run={run} on:pause={pause} on:reset={reset} />
  </div>

  <TimeChart {state} />

  <div class="mt-6 grid grid-cols-3 gap-4 text-center">
    <div class="rounded border bg-white p-3 shadow">
      <p class="text-xs opacity-60">Core Quality</p>
      <p class="text-2xl font-bold text-red-500">{state.coreQuality.toFixed(1)}</p>
    </div>
    <div class="rounded border bg-white p-3 shadow">
      <p class="text-xs opacity-60">Bypass Quality</p>
      <p class="text-2xl font-bold text-blue-500">{state.bypassQuality.toFixed(1)}</p>
    </div>
    <div class="rounded border bg-white p-3 shadow">
      <p class="text-xs opacity-60">Reform Pressure</p>
      <p class="text-2xl font-bold text-amber-500">{state.pressure.toFixed(1)}</p>
    </div>
  </div>

  {#if state.gameOver}
    <div class="mt-6 rounded border p-4 text-center {state.coreQuality >= 100 ? 'border-emerald-400 bg-emerald-50 text-emerald-900' : 'border-red-400 bg-red-50 text-red-900'}">
      <p class="font-bold">{trapMessage}</p>
      {#if !hasSunset && state.coreQuality <= 0}
        <p class="text-sm mt-1">Without a sunset condition, the bypass relieved pressure on the core — and the core withered.</p>
      {/if}
    </div>
  {/if}

  <details class="mt-8 rounded border border-slate-200 bg-slate-50 p-4">
    <summary class="cursor-pointer font-medium">How this works</summary>
    <div class="mt-2 space-y-2 text-sm opacity-80">
      <p>
        A dysfunctional <strong>core institution</strong> (red) starts with low quality.
        A <strong>bypass</strong> (blue) emerges with higher effectiveness.
      </p>
      <p>
        As the bypass succeeds, <strong>reform pressure</strong> (orange) drops.
        Without a sunset condition, pressure never returns, and the core is never reformed — it decays.
      </p>
      <p>
        <strong>Toggle Sunset Condition ON</strong> to see how a deliberate trigger can restore pressure
        and force core reform. The bypass then becomes a catalyst instead of a trap.
      </p>
    </div>
  </details>
</div>
