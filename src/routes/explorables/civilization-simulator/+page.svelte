<script lang="ts">
  import { createCivState, stepCivilization } from './simulation';
  import type { HistoryEntry, SimulationParams, ReformType, ReformEvent } from './types';
  import CivilizationView from './components/CivilizationView.svelte';
  import ComparisonChart from './components/ComparisonChart.svelte';
  import ParameterControls from './components/ParameterControls.svelte';
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';
  import ReformPanel from './components/ReformPanel.svelte';

  const defaultLegacyParams: SimulationParams = {
    type: 'legacy',
    latency: 6,
    noise: 8,
    gain: 1.5,
  };
  const defaultAdaptiveParams: SimulationParams = {
    type: 'adaptive',
    latency: 1,
    noise: 1,
    gain: 0.8,
  };

  let legacyParams   = $state({ ...defaultLegacyParams });
  let adaptiveParams = $state({ ...defaultAdaptiveParams });
  let legacyCiv      = $state(createCivState('legacy'));
  let adaptiveCiv    = $state(createCivState('adaptive'));
  let time           = $state(0);
  let history        = $state<HistoryEntry[]>([]);
  let running        = $state(false);
  let interval: ReturnType<typeof setInterval> | null = null;
  let legacyReforms = $state<ReformType[]>([]);
  let adaptiveReforms = $state<ReformType[]>([]);
  let reformEvents = $state<ReformEvent[]>([]);

  function stepOnce() {
    const shocks = {
      envShock: time === 30 ? -30 : 0,
      finShock: time === 50 ?  30 : 0,
    };
    const legacyResult = stepCivilization(legacyCiv, legacyParams, shocks, legacyReforms);
    const adaptiveResult = stepCivilization(adaptiveCiv, adaptiveParams, shocks, adaptiveReforms);

    // apply param changes
    if (legacyResult.paramsChanged && legacyResult.newParams) legacyParams = legacyResult.newParams;
    if (adaptiveResult.paramsChanged && adaptiveResult.newParams) adaptiveParams = adaptiveResult.newParams;

    legacyCiv = legacyResult.newState;
    adaptiveCiv = adaptiveResult.newState;

    const newEvents = [
      ...legacyResult.events.map(e => ({ ...e, step: time, target: 'legacy' as const })),
      ...adaptiveResult.events.map(e => ({ ...e, step: time, target: 'adaptive' as const })),
    ];
    reformEvents = [...reformEvents, ...newEvents];

    history = [...history, { time, legacyWealth: legacyCiv.wealth, adaptiveWealth: adaptiveCiv.wealth, legacyEnv: legacyCiv.environment, adaptiveEnv: adaptiveCiv.environment, legacyTrust: legacyCiv.socialTrust, adaptiveTrust: adaptiveCiv.socialTrust, legacyFragility: legacyCiv.financialFragility, adaptiveFragility: adaptiveCiv.financialFragility }];
    time++;
    legacyReforms = []; adaptiveReforms = [];

    // Auto-pause on shock steps
    if ((time === 31 || time === 51) && running) {
      stop();
    }

    if (legacyCiv.collapsed || adaptiveCiv.collapsed) stop();
  }

  function run() {
    if (running) return;
    running = true;
    interval = setInterval(stepOnce, 100);
  }

  function stop() {
    running = false;
    if (interval) { clearInterval(interval); interval = null; }
  }

  function reset() {
    stop();
    legacyParams   = { ...defaultLegacyParams };
    adaptiveParams = { ...defaultAdaptiveParams };
    legacyCiv      = createCivState('legacy');
    adaptiveCiv    = createCivState('adaptive');
    time    = 0;
    history = [];
    reformEvents = [];
  }

  function handleReform(target: 'legacy' | 'adaptive', type: ReformType) {
    if (target === 'legacy') legacyReforms = [...legacyReforms, type];
    else adaptiveReforms = [...adaptiveReforms, type];
  }
</script>

<div class="mx-auto max-w-6xl px-4 py-12">
  <ExplorableBreadcrumb title="Two Civilizations Simulator" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">Two Civilizations, One Environment</h1>
    <p class="mt-2 text-lg opacity-70">
      Legacy Governance vs. Adaptive Coherence — same disturbances, different architectures.
    </p>
  </header>

  <ParameterControls bind:legacyParams bind:adaptiveParams onreset={reset} />

  <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
    <button onclick={stepOnce} disabled={running} class="rounded bg-amber-600 px-4 py-2 text-white disabled:opacity-50">Step</button>
    <button onclick={run}      disabled={running} class="rounded bg-emerald-600 px-4 py-2 text-white disabled:opacity-50">Run</button>
    <button onclick={stop}     disabled={!running} class="rounded bg-slate-500 px-4 py-2 text-white disabled:opacity-50">Pause</button>
    <button onclick={reset}    class="rounded border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Reset</button>
    <span class="text-sm font-medium">Time: {time}</span>
  </div>

  {#if (time === 31 || time === 51) && !running}
    <div class="mt-4 rounded border border-amber-300 bg-amber-50 p-3 text-center text-amber-800">
      ⚠ A shock just hit. The system is paused — consider reforms before continuing.
    </div>
  {/if}

  <!-- Queued reforms indicator -->
  {#if legacyReforms.length > 0 || adaptiveReforms.length > 0}
    <div class="mt-3 rounded border border-amber-300 bg-amber-50 p-3 text-sm">
      <p class="font-medium text-amber-800">Reforms queued for next step:</p>
      {#if legacyReforms.length > 0}
        <p class="text-amber-700">Legacy: {legacyReforms.join(', ')}</p>
      {/if}
      {#if adaptiveReforms.length > 0}
        <p class="text-amber-700">Adaptive: {adaptiveReforms.join(', ')}</p>
      {/if}
      <p class="mt-1 text-xs text-amber-600">Press Step or Run to execute.</p>
    </div>
  {/if}


  <div class="mt-6 grid gap-4 md:grid-cols-2">
    <ReformPanel civ={legacyCiv} target="legacy" disabled={running || legacyCiv.collapsed} onreform={(t) => handleReform('legacy', t)} />
    <div class="rounded border bg-white p-4 shadow">
      <h3 class="mb-2 text-sm font-semibold">Adaptive Coherence</h3>
      <p class="text-xs opacity-60">This architecture already has built-in adaptive capacity — all dimensions are observed, latency is low, and the immune system is permeable to feedback.</p>
    </div>
  </div>

  <!-- Show reform events -->
  {#if reformEvents.length > 0}
    <div class="mt-4 max-h-40 overflow-y-auto rounded border bg-white p-3 text-sm">
      {#each reformEvents.slice(-10) as ev}
        <div class="flex gap-2 {ev.result === 'absorbed' ? 'text-red-600' : 'text-emerald-600'}">
          <span>[{ev.step}]</span>
          <span class="font-bold">{ev.target}</span>
          <span>{ev.description}</span>
        </div>
      {/each}
    </div>
  {/if}

  <div class="mt-8 grid gap-8 md:grid-cols-2">
    <CivilizationView civ={legacyCiv}   label="Legacy Governance"   type="legacy" />
    <CivilizationView civ={adaptiveCiv} label="Adaptive Coherence"  type="adaptive" />
  </div>

  <div class="mt-8">
    <ComparisonChart {history} />
  </div>
</div>
