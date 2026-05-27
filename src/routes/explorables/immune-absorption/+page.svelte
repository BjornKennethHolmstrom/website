<script lang="ts">
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';
  import Pipeline from './components/Pipeline.svelte';
  import ControlPanel from './components/ControlPanel.svelte';
  import { createInitialState, processStage, runFullSimulation } from './simulation';
  import type { ReformState } from './types';

  let immunePermeability = 0.7;
  let state: ReformState = createInitialState(immunePermeability);
  let running = false;

  function step() {
    state = processStage(state);
  }

  function runAll() {
    running = true;
    state = runFullSimulation(state);
    running = false;
  }

  function reset() {
    state = createInitialState(immunePermeability);
    running = false;
  }

  $: outcomeMessage = state.outcome === 'structural_reform'
    ? 'Structural Reform achieved! (Very unlikely at high immune permeability)'
    : state.outcome === 'symbolic_adaptation'
      ? 'Symbolic Adaptation — reform absorbed, appearance of change without substance'
      : state.outcome === 'complete_rejection'
        ? 'Complete Rejection — reform never made it past the proposal stage'
        : '';
</script>

<div class="mx-auto max-w-5xl px-4 py-12">
  <ExplorableBreadcrumb title="The Immune Absorption Cycle" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">The Immune Absorption Cycle</h1>
    <p class="mt-2 text-lg opacity-70">
      Watch a reform proposal get absorbed at each institutional layer — and emerge as symbolic change.
    </p>
  </header>

  <div class="mb-6">
    <ControlPanel bind:immunePermeability {running} finished={state.finished} on:step={step} on:runAll={runAll} on:reset={reset} />
  </div>

  <Pipeline {state} />

  {#if state.finished}
    {@const outcomeClasses = state.outcome === 'structural_reform'
      ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
      : state.outcome === 'symbolic_adaptation'
        ? 'border-amber-400 bg-amber-50 text-amber-900'
        : 'border-red-400 bg-red-50 text-red-900'}
    <div class="mt-6 rounded border p-4 text-center {outcomeClasses}">
      <p class="font-bold">{outcomeMessage}</p>
      {#if state.outcome === 'symbolic_adaptation'}
        <p class="text-sm mt-1">
          The reform was publicly celebrated, but the underlying architecture remains unchanged.
        </p>
      {/if}
    </div>
  {/if}

  <details class="mt-8 rounded border border-slate-200 bg-slate-50 p-4">
    <summary class="cursor-pointer font-medium">How this works</summary>
    <div class="mt-2 space-y-2 text-sm opacity-80">
      <p>
        A reform must pass through <strong>six institutional stages</strong>. At each stage, there is a chance of dilution.
        The <strong>immune permeability</strong> slider controls how likely dilution is at each stage.
      </p>
      <p>
        Low permeability = reform passes easily. High permeability = reform gets absorbed into symbolic adaptation.
        The default setting (0.7) reflects a typical mature institution with strong immune defenses.
      </p>
      <p>
        In most runs, the reform will be diluted long before reaching implementation. That's the cycle.
      </p>
    </div>
  </details>
</div>
