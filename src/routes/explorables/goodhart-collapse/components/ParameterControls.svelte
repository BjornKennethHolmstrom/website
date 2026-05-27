<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { SimulationParams } from '../types';
  import { DEFAULT_PARAMS } from '../simulation';

  export let params: SimulationParams;

  const dispatch = createEventDispatcher();

  function resetToDefaults() {
    Object.assign(params, { ...DEFAULT_PARAMS });
    dispatch('reset');
  }

  function randomize() {
    params.alpha = rand(0.1, 0.5);
    params.beta = rand(0.1, 0.4);
    params.gamma = rand(0.05, 0.2);
    params.eta = rand(0, 0.05);
    params.gain = rand(0.5, 3.0);
    dispatch('reset');
  }

  function rand(min: number, max: number) {
    return Math.round((Math.random() * (max - min) + min) * 100) / 100;
  }
</script>

<details class="mt-4 rounded border border-slate-200 bg-slate-50 p-4">
  <summary class="cursor-pointer font-medium">Adjust Simulation Parameters</summary>
  <div class="mt-4 grid gap-4 sm:grid-cols-2">
    <label class="flex flex-col gap-1 text-sm">
      α (investment productivity)
      <input type="range" min="0.1" max="0.5" step="0.01" bind:value={params.alpha} />
      <span class="text-xs opacity-60">{params.alpha.toFixed(2)}</span>
    </label>
    <label class="flex flex-col gap-1 text-sm">
      β (environmental cost of investment)
      <input type="range" min="0.1" max="0.5" step="0.01" bind:value={params.beta} />
      <span class="text-xs opacity-60">{params.beta.toFixed(2)}</span>
    </label>
    <label class="flex flex-col gap-1 text-sm">
      γ (environmental regeneration)
      <input type="range" min="0.01" max="0.3" step="0.01" bind:value={params.gamma} />
      <span class="text-xs opacity-60">{params.gamma.toFixed(2)}</span>
    </label>
    <label class="flex flex-col gap-1 text-sm">
      η (delayed damage from past wealth)
      <input type="range" min="0" max="0.1" step="0.005" bind:value={params.eta} />
      <span class="text-xs opacity-60">{params.eta.toFixed(3)}</span>
    </label>
    <label class="flex flex-col gap-1 text-sm">
      Controller Gain
      <input type="range" min="0.5" max="4" step="0.1" bind:value={params.gain} />
      <span class="text-xs opacity-60">{params.gain.toFixed(1)}</span>
    </label>
    <label class="flex flex-col gap-1 text-sm">
      Dashboard Noise (σ)
      <input type="range" min="0" max="5" step="0.1" bind:value={params.noiseSigmaW} />
      <span class="text-xs opacity-60">{params.noiseSigmaW.toFixed(1)}</span>
    </label>
  </div>
  <div class="mt-4 flex gap-4">
    <button
      on:click={resetToDefaults}
      class="rounded border border-slate-400 px-3 py-1 text-sm hover:bg-slate-100"
    >
      Reset Defaults
    </button>
    <button
      on:click={randomize}
      class="rounded border border-slate-400 px-3 py-1 text-sm hover:bg-slate-100"
    >
      Randomize
    </button>
  </div>
</details>
