<script lang="ts">
  import { onMount, tick } from 'svelte';
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';
  import Dashboard from './components/Dashboard.svelte';
  import HiddenReveal from './components/HiddenReveal.svelte';
  import ParameterControls from './components/ParameterControls.svelte';
  import {
    createInitialState,
    simulateStep,
    DEFAULT_PARAMS,
  } from './simulation';
  import type { SimulationState, SimulationParams } from './types';

  let params: SimulationParams = { ...DEFAULT_PARAMS };
  let state: SimulationState = createInitialState(params);
  let running = false;
  let speed = 200; // ms per step
  let interval: ReturnType<typeof setInterval> | null = null;

  function reset() {
    stop();
    state = createInitialState(params);
    running = false;
  }

  function step() {
    state = simulateStep(state, params);
  }

  function run() {
    if (running) return;
    running = true;
    interval = setInterval(() => {
      state = simulateStep(state, params);
      if (state.gameOver) stop();
    }, speed);
  }

  function stop() {
    running = false;
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function toggleReveal() {
    state = { ...state, revealed: !state.revealed };
  }

  onMount(() => {
    return () => stop();
  });

  $: if (state.gameOver && running) stop();
</script>

<div class="mx-auto max-w-4xl px-4 py-12">
  <ExplorableBreadcrumb title="The Goodhart Collapse" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">The Goodhart Collapse</h1>
    <p class="mt-2 text-lg opacity-70">
      When a measure becomes a target, it ceases to be a good measure
    </p>
  </header>

  <div class="grid gap-8 md:grid-cols-2">
    <Dashboard {state} {params} />
    <HiddenReveal {state} {params} {toggleReveal} />
  </div>

  <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
    <button
      on:click={step}
      disabled={state.gameOver}
      class="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 disabled:opacity-50"
    >
      Step
    </button>
    <button
      on:click={run}
      disabled={running || state.gameOver}
      class="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 disabled:opacity-50"
    >
      Run
    </button>
    <button
      on:click={stop}
      disabled={!running}
      class="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700 disabled:opacity-50"
    >
      Stop
    </button>
    <button
      on:click={reset}
      class="rounded border border-slate-400 px-4 py-2 text-slate-700 hover:bg-slate-100"
    >
      Reset
    </button>
    <label class="flex items-center gap-2 text-sm">
      Speed:
      <input
        type="range"
        min="50"
        max="1000"
        bind:value={speed}
        class="w-24"
      />
      {speed}ms
    </label>
  </div>

  {#if state.gameOver}
    <div class="mt-6 rounded border border-red-400 bg-red-50 p-4 text-center text-red-800">
      <p class="font-bold">The system has collapsed.</p>
      <p class="text-sm">
        Your dashboard was green. The hidden dimension destroyed you.
      </p>
    </div>
  {/if}

  <details class="mt-8 rounded border border-slate-200 bg-slate-50 p-4">
    <summary class="cursor-pointer font-medium">How this works</summary>
    <div class="mt-2 space-y-2 text-sm opacity-80">
      <p>
        You are a 1D controller — you see only <strong>Wealth (W)</strong>.
        Your job is to maximise it by adjusting investment.
      </p>
      <p>
        <strong>Environmental Integrity (E)</strong> is hidden. It provides the
        productivity that makes your investments work. As E degrades, investment
        becomes less effective. But you can't see E — only the dashboard.
      </p>
      <p>
        When you hit the <strong>Reveal Hidden Dimensions</strong> button (or when
        collapse forces it), you'll see what your dashboard was missing.
      </p>
      <p>
        Adjust the parameters below to explore different scenarios.
      </p>
    </div>
  </details>

  <ParameterControls bind:params on:reset={reset} />
</div>
