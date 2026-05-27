<script lang="ts">
  import type { SimulationParams } from '../types';

  let { legacyParams, adaptiveParams, onreset }: {
    legacyParams: SimulationParams;
    adaptiveParams: SimulationParams;
    onreset: () => void;
  } = $props();
</script>

<div class="space-y-6 rounded border bg-white p-4 shadow">
  <h3 class="text-sm font-semibold">Simulation Parameters</h3>
  <div class="grid gap-6 md:grid-cols-2">

    <fieldset class="rounded border border-slate-200 p-4">
      <legend class="text-sm font-bold text-red-500">Legacy Governance</legend>
      <label class="mt-2 flex flex-col gap-1 text-sm">
        Latency (τ)
        <input type="range" min="1" max="12" step="1" bind:value={legacyParams.latency} />
        <span class="text-xs opacity-60">{legacyParams.latency} steps</span>
      </label>
      <label class="mt-3 flex flex-col gap-1 text-sm">
        Observation Noise (σ)
        <input type="range" min="0" max="15" step="0.5" bind:value={legacyParams.noise} />
        <span class="text-xs opacity-60">{legacyParams.noise.toFixed(1)}</span>
      </label>
      <label class="mt-3 flex flex-col gap-1 text-sm">
        Control Gain (K)
        <input type="range" min="0.5" max="3" step="0.1" bind:value={legacyParams.gain} />
        <span class="text-xs opacity-60">{legacyParams.gain.toFixed(1)}</span>
      </label>
    </fieldset>

    <fieldset class="rounded border border-slate-200 p-4">
      <legend class="text-sm font-bold text-blue-500">Adaptive Coherence</legend>
      <label class="mt-2 flex flex-col gap-1 text-sm">
        Latency (τ)
        <input type="range" min="1" max="6" step="1" bind:value={adaptiveParams.latency} />
        <span class="text-xs opacity-60">{adaptiveParams.latency} steps</span>
      </label>
      <label class="mt-3 flex flex-col gap-1 text-sm">
        Observation Noise (σ)
        <input type="range" min="0" max="5" step="0.5" bind:value={adaptiveParams.noise} />
        <span class="text-xs opacity-60">{adaptiveParams.noise.toFixed(1)}</span>
      </label>
      <label class="mt-3 flex flex-col gap-1 text-sm">
        Control Gain (K)
        <input type="range" min="0.2" max="2" step="0.1" bind:value={adaptiveParams.gain} />
        <span class="text-xs opacity-60">{adaptiveParams.gain.toFixed(1)}</span>
      </label>
    </fieldset>

  </div>
  <button
    onclick={onreset}
    class="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
  >
    Reset Parameters
  </button>
</div>
