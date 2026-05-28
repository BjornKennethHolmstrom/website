<script lang="ts">
  import { createCivState, stepCivilization } from './simulation';
  import type { HistoryEntry, SimulationParams, ReformType, ReformEvent } from './types';
  import { SCENARIOS, type Scenario } from './scenarios';
  import CivilizationView from './components/CivilizationView.svelte';
  import ComparisonChart from './components/ComparisonChart.svelte';
  import ParameterControls from './components/ParameterControls.svelte';
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';
  import ReformPanel from './components/ReformPanel.svelte';

  // --- State ---
  let selectedScenario = $state('default');
  let legacyParams   = $state({ ...SCENARIOS[0].legacyParams });
  let adaptiveParams = $state({ ...SCENARIOS[0].adaptiveParams });
  let legacyCiv      = $state(createCivState('legacy'));
  let adaptiveCiv    = $state(createCivState('adaptive'));
  let time           = $state(0);
  let history        = $state<HistoryEntry[]>([]);
  let running        = $state(false);
  let interval: ReturnType<typeof setInterval> | null = null;
  let legacyReforms  = $state<ReformType[]>([]);
  let reformEvents   = $state<ReformEvent[]>([]);
  let shockQueue     = $state<{ time: number; envShock: number; finShock: number }[]>([]);
  let shockJustHit   = $state(false); // drives the pause banner

  // --- Load scenario ---
  function loadScenario(id: string) {
    stop();
    const scenario = SCENARIOS.find(s => s.id === id) || SCENARIOS[0];
    selectedScenario  = id;
    legacyParams      = { ...scenario.legacyParams };
    adaptiveParams    = { ...scenario.adaptiveParams };
    shockQueue        = [...scenario.shocks];
    legacyCiv         = createCivState('legacy');
    adaptiveCiv       = createCivState('adaptive');
    if (scenario.special?.includes('immune permeability')) {
      if (id === 'russia-legibility-deficit') legacyCiv.immune.permeability = 0.95;
      else if (id === 'sweden-drift-loop')     legacyCiv.immune.permeability = 0.7;
      else if (id === 'us-integration-deficit') legacyCiv.immune.permeability = 0.4;
    }
    time         = 0;
    history      = [];
    reformEvents = [];
    legacyReforms  = [];
    shockJustHit = false;
  }

  // --- Step once ---
  function stepOnce() {
    shockJustHit = false;

    const activeShocks = shockQueue.filter(s => s.time === time);
    const envShock = activeShocks.reduce((sum, s) => sum + s.envShock, 0);
    const finShock = activeShocks.reduce((sum, s) => sum + s.finShock, 0);
    const shocks = { envShock, finShock };

    const scenario = SCENARIOS.find(s => s.id === selectedScenario);
    if (scenario?.id === 'brazil-breakthrough-capture') {
      legacyCiv.immune.permeability = (time >= 30 && time <= 40) || (time >= 60 && time <= 70) ? 0.2 : 0.8;
    }
    if (scenario?.id === 'china-calibration-deficit' && time % 20 === 0 && time > 0) {
      legacyParams.gain = 2.5 + Math.random() * 1.5;
      setTimeout(() => { legacyParams.gain = 2.5; }, 3000);
    }

    const legacyResult   = stepCivilization(legacyCiv,   legacyParams,   shocks, legacyReforms);
    const adaptiveResult = stepCivilization(adaptiveCiv, adaptiveParams, shocks);

    if (legacyResult.paramsChanged && legacyResult.newParams) legacyParams = legacyResult.newParams;

    legacyCiv   = legacyResult.newState;
    adaptiveCiv = adaptiveResult.newState;

    reformEvents = [
      ...reformEvents,
      ...legacyResult.events.map(e => ({ ...e, step: time, target: 'legacy' as const })),
    ];

    history = [...history, {
      time,
      legacyWealth:      legacyCiv.wealth,
      adaptiveWealth:    adaptiveCiv.wealth,
      legacyEnv:         legacyCiv.environment,
      adaptiveEnv:       adaptiveCiv.environment,
      legacyTrust:       legacyCiv.socialTrust,
      adaptiveTrust:     adaptiveCiv.socialTrust,
      legacyFragility:   legacyCiv.financialFragility,
      adaptiveFragility: adaptiveCiv.financialFragility,
    }];

    time++;
    legacyReforms = [];

    if (activeShocks.length > 0 && running) {
      shockJustHit = true;
      stop();
    }
    if (legacyCiv.collapsed || adaptiveCiv.collapsed) stop();
  }

  // --- Controls ---
  function run()   { shockJustHit = false; if (!running) { running = true; interval = setInterval(stepOnce, 100); } }
  function stop()  { running = false; if (interval) { clearInterval(interval); interval = null; } }
  function reset() { loadScenario(selectedScenario); }

  let currentScenario = $derived(SCENARIOS.find(s => s.id === selectedScenario) ?? SCENARIOS[0]);

  loadScenario('default');
</script>

<div class="mx-auto max-w-6xl px-4 py-12">
  <ExplorableBreadcrumb title="Two Civilizations Simulator" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">Two Civilizations, One Environment</h1>
    <p class="mt-2 text-lg opacity-70">
      Legacy Governance vs. Adaptive Coherence — same disturbances, different architectures.
    </p>
  </header>

  <!-- Scenario Selector -->
  <div class="mb-2 flex justify-center">
    <select
      bind:value={selectedScenario}
      onchange={() => loadScenario(selectedScenario)}
      class="rounded border border-slate-300 px-4 py-2 text-sm"
    >
      {#each SCENARIOS as s}
        <option value={s.id}>{s.label}</option>
      {/each}
    </select>
  </div>
  <p class="mb-6 text-center text-sm text-slate-500">{currentScenario.description}</p>

  <ParameterControls bind:legacyParams bind:adaptiveParams onreset={reset} />

  <div class="mt-6 flex flex-wrap items-center justify-center gap-4">
    <button onclick={stepOnce} disabled={running} class="rounded bg-amber-600 px-4 py-2 text-white disabled:opacity-50">Step</button>
    <button onclick={run}      disabled={running} class="rounded bg-emerald-600 px-4 py-2 text-white disabled:opacity-50">Run</button>
    <button onclick={stop}     disabled={!running} class="rounded bg-slate-500 px-4 py-2 text-white disabled:opacity-50">Pause</button>
    <button onclick={reset}    class="rounded border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Reset</button>
    <span class="text-sm font-medium">Time: {time}</span>
  </div>

  <!-- Shock notification banner — keyed to shockJustHit, not hardcoded times -->
  {#if shockJustHit && !running}
    <div class="mt-4 rounded border border-amber-300 bg-amber-50 p-3 text-center text-amber-800">
      ⚠ A shock just hit. The simulation is paused — consider queuing reforms before continuing.
    </div>
  {/if}

  <!-- Queued reforms indicator -->
  {#if legacyReforms.length > 0}
    <div class="mt-3 rounded border border-amber-300 bg-amber-50 p-3 text-sm">
      <p class="font-medium text-amber-800">Reforms queued for next step:</p>
      <p class="text-amber-700">{legacyReforms.join(', ')}</p>
      <p class="mt-1 text-xs text-amber-600">Press Step or Run to execute.</p>
    </div>
  {/if}

  <div class="mt-6 grid gap-4 md:grid-cols-2">
    <ReformPanel
      civ={legacyCiv}
      disabled={running || legacyCiv.collapsed}
      onreform={(t) => { legacyReforms = [t]; }}
    />
    <div class="rounded border bg-white p-4 shadow">
      <h3 class="mb-2 text-sm font-semibold">Adaptive Coherence</h3>
      <p class="text-xs opacity-60">
        This architecture already has built-in adaptive capacity — all dimensions are observed,
        latency is low, and the immune system is permeable to feedback.
      </p>
    </div>
  </div>

  <!-- Meta-governance audit: shows true vs. observed values for one step -->
  {#if legacyCiv.auditRevealed}
    <div class="mt-4 rounded border border-violet-300 bg-violet-50 p-4 text-sm">
      <p class="mb-2 font-semibold text-violet-800">🔍 Meta-Governance Audit — True State Revealed</p>
      <div class="grid grid-cols-2 gap-x-8 gap-y-1 text-xs">
        {#each [
          { label: 'Environment',        obs: legacyCiv.observedEnvironment,        true: legacyCiv.environment },
          { label: 'Social Trust',        obs: legacyCiv.observedSocialTrust,        true: legacyCiv.socialTrust },
          { label: 'Financial Fragility', obs: legacyCiv.observedFinancialFragility, true: legacyCiv.financialFragility },
          { label: 'Adaptive Capacity',   obs: legacyCiv.observedAdaptiveCapacity,   true: legacyCiv.adaptiveCapacity },
        ] as row}
          <span class="text-violet-700 font-medium">{row.label}</span>
          <span>
            observed: <span class="font-mono">{row.obs === 0 ? '—' : row.obs.toFixed(1)}</span>
            → true: <span class="font-mono text-violet-900">{row.true.toFixed(1)}</span>
          </span>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Reform event log -->
  {#if reformEvents.length > 0}
    <div class="mt-4 max-h-40 overflow-y-auto rounded border bg-white p-3 text-sm">
      {#each reformEvents.slice(-10) as ev}
        <div class="flex gap-2 {ev.result === 'absorbed' ? 'text-red-600' : ev.result === 'rejected' ? 'text-slate-400 italic' : 'text-emerald-600'}">
          <span class="shrink-0">[{ev.step}]</span>
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
