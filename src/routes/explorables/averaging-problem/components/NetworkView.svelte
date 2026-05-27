<script lang="ts">
  import type { SimulationState } from '../types';

  export let state: SimulationState;
  export let currentStep: number = 0; // which step of history to display

  $: nodes = state.nodes.map((n, i) => ({
    id: n.id,
    stability: state.history[i]?.[currentStep] ?? n.stability,
  }));
  $: mean = state.meanHistory[currentStep] ?? state.nodes.reduce((s, n) => s + n.stability, 0) / state.nodes.length;
  $: revealed = state.revealed;
  $: isCentralized = state.params.architecture === 'centralized';

  function stabilityColor(val: number): string {
    if (val >= 90) return '#4ade80';
    if (val >= 70) return '#facc15';
    if (val >= 50) return '#f97316';
    return '#ef4444';
  }
</script>

<div class="rounded border bg-white p-4 shadow">
  <h3 class="mb-3 text-lg font-semibold">
    {isCentralized ? 'Centralized Controller View' : 'Distributed Node View'}
  </h3>

  {#if isCentralized && !revealed}
    <div class="flex flex-col items-center justify-center py-12">
      <p class="mb-2 text-4xl font-bold">{mean.toFixed(1)}</p>
      <p class="text-sm opacity-60">System Mean Stability</p>
      <p class="mt-4 text-xs italic opacity-50">Node-level data is hidden — you see only the average.</p>
    </div>
  {:else}
    <div class="grid grid-cols-5 gap-2">
      {#each nodes as node}
        <div class="flex flex-col items-center">
          <div
            class="h-10 w-10 rounded-full border-2 border-slate-300"
            style="background-color: {stabilityColor(node.stability)}"
          ></div>
          <span class="mt-1 text-xs">{node.id}</span>
          <span class="text-xs">{node.stability.toFixed(0)}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
