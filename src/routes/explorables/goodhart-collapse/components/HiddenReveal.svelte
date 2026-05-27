<script lang="ts">
  import type { SimulationState, SimulationParams } from '../types';

  export let state: SimulationState;
  export let params: SimulationParams;
  export let toggleReveal: () => void;

  $: ePercentage = Math.min(100, (state.E / params.E0) * 100);
  $: eColor =
    ePercentage > 50
      ? 'bg-emerald-500'
      : ePercentage > 20
        ? 'bg-amber-500'
        : 'bg-red-500';
</script>

<div class="rounded border border-slate-200 bg-white p-6 shadow">
  <h2 class="mb-4 text-lg font-bold">
    {state.revealed ? 'Hidden Dimension (Revealed)' : 'Hidden Dimension'}
  </h2>

  {#if state.revealed}
    <div class="mb-4">
      <p class="text-sm opacity-60">Environmental Integrity (E)</p>
      <p class="text-4xl font-bold">{state.E.toFixed(1)}</p>
      <p class="text-xs opacity-50">Baseline: {params.E0}</p>
    </div>
    <div class="mb-4 h-4 w-full rounded-full bg-slate-200">
      <div
        class="h-full rounded-full transition-all {eColor}"
        style="width: {ePercentage}%"
      ></div>
    </div>
    <p class="text-sm opacity-70">
      E provides the productivity of your investments. When E falls, the same
      investment yields less W — and eventually, collapse.
    </p>
  {:else}
    <div class="flex flex-col items-center justify-center py-12">
      <p class="mb-4 text-center text-sm opacity-60">
        This dimension is hidden from your observation channel.
      </p>
      <button
        on:click={toggleReveal}
        class="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
      >
        Reveal Hidden Dimensions
      </button>
    </div>
  {/if}
</div>
