<script lang="ts">
  import { createCivState, stepCivilization } from './simulation';
  import type { HistoryEntry, SimulationParams } from './types';
  import CivilizationView from './components/CivilizationView.svelte';
  import ComparisonChart from './components/ComparisonChart.svelte';
  import ParameterControls from './components/ParameterControls.svelte';
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';

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

  function stepOnce() {
    const shocks = {
      envShock: time === 30 ? -30 : 0,
      finShock: time === 50 ?  30 : 0,
    };
    legacyCiv   = stepCivilization(legacyCiv,   legacyParams,   shocks);
    adaptiveCiv = stepCivilization(adaptiveCiv, adaptiveParams, shocks);
    history = [
      ...history,
      {
        time,
        legacyWealth:     legacyCiv.wealth,
        adaptiveWealth:   adaptiveCiv.wealth,
        legacyEnv:        legacyCiv.environment,
        adaptiveEnv:      adaptiveCiv.environment,
        legacyTrust:      legacyCiv.socialTrust,
        adaptiveTrust:    adaptiveCiv.socialTrust,
        legacyFragility:  legacyCiv.financialFragility,
        adaptiveFragility: adaptiveCiv.financialFragility,
      },
    ];
    time++;
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

  <div class="mt-8 grid gap-8 md:grid-cols-2">
    <CivilizationView civ={legacyCiv}   label="Legacy Governance"   type="legacy" />
    <CivilizationView civ={adaptiveCiv} label="Adaptive Coherence"  type="adaptive" />
  </div>

  <div class="mt-8">
    <ComparisonChart {history} />
  </div>
</div>
