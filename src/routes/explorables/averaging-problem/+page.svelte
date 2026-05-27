<script lang="ts">
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';  
  import NetworkView from './components/NetworkView.svelte';
  import ControlPanel from './components/ControlPanel.svelte';
  import MetricsPanel from './components/MetricsPanel.svelte';
  import { runFullSimulation, createInitialState } from './simulation';
  import { DEFAULT_PARAMS } from './types';
  import type { SimulationState, SimulationParams, Architecture } from './types';

  let params: SimulationParams = { ...DEFAULT_PARAMS };
  let state: SimulationState = createInitialState(params);
  let currentStep = 0;
  let running = false;
  let interval: ReturnType<typeof setInterval> | null = null;

  function reset() {
    stop();
    state = createInitialState(params);
    currentStep = 0;
    running = false;
  }

  function run() {
    if (running || state.finished) return;
    // If simulation not pre-run, run it now (or we could step). Here we pre-run full sim and then animate through history.
    if (!state.finished) {
      state = runFullSimulation(params);
      state.finished = true;
    }
    running = true;
    interval = setInterval(() => {
      if (currentStep < params.steps - 1) {
        currentStep++;
      } else {
        stop();
      }
    }, 50);
  }

  function pause() {
    running = false;
    if (interval) { clearInterval(interval); interval = null; }
  }

  function stop() {
    running = false;
    if (interval) { clearInterval(interval); interval = null; }
  }

  function handleArchChange(arch: Architecture) {
    params.architecture = arch;
    reset();
  }

  function reveal() {
    state = { ...state, revealed: true };
  }

  function handleReset() {
    reset();
  }
</script>

<div class="mx-auto max-w-5xl px-4 py-12">
  <ExplorableBreadcrumb title="The Averaging Problem" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">The Averaging Problem</h1>
    <p class="mt-2 text-lg opacity-70">
      When a centralised controller sees only the mean, local crises become invisible — and the response makes things worse.
    </p>
  </header>

  <div class="mb-6">
    <ControlPanel
      architecture={params.architecture}
      {running}
      finished={state.finished}
      revealed={state.revealed}
      on:architectureChange={(e) => handleArchChange(e.detail)}
      on:run={run}
      on:pause={pause}
      on:reset={handleReset}
      on:reveal={reveal}
    />
  </div>

  <div class="grid gap-6 md:grid-cols-2">
    <NetworkView {state} {currentStep} />
    <MetricsPanel {state} />
  </div>

  {#if state.finished && state.revealed && params.architecture === 'centralized'}
    <div class="mt-6 rounded border border-amber-300 bg-amber-50 p-4 text-amber-900">
      <p class="font-bold">You were flying blind.</p>
      <p class="text-sm">
        The system mean stayed relatively stable while nodes 2 and 7 were in crisis.
        Your uniform response was too weak for the crisis nodes and disruptive for healthy ones.
      </p>
    </div>
  {/if}

  <details class="mt-8 rounded border border-slate-200 bg-slate-50 p-4">
    <summary class="cursor-pointer font-medium">How this works</summary>
    <div class="mt-2 space-y-2 text-sm opacity-80">
      <p>
        A shock hits nodes 2 and 7 at time step 20. In <strong>centralized</strong> mode, the controller sees only the national mean (with noise) and applies a uniform policy with long latency. The mean barely moves, so the response is weak — while healthy nodes are disrupted.
      </p>
      <p>
        In <strong>distributed</strong> mode, each node observes its own local state with low latency and applies its own correction. The crisis is contained, and healthy nodes remain stable.
      </p>
      <p>
        Press <strong>Run</strong> to see the simulation. In centralized mode, after it finishes, click <strong>Reveal Node Details</strong> to see what the dashboard hid.
      </p>
    </div>
  </details>
</div>
