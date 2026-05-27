<script lang="ts">
  import type { SimulationState } from '../types';

  export let state: SimulationState;

  $: deficits = state.nodes.map((node, i) => {
    const hist = state.history[i] ?? [];
    return hist.reduce((sum, val) => sum + Math.max(0, state.params.targetStability - val), 0);
  });
  $: totalDeficit = deficits.reduce((a, b) => a + b, 0);
</script>

<div class="rounded border bg-white p-4 shadow">
  <h3 class="mb-2 text-lg font-semibold">Cumulative Stability Deficit</h3>
  <p class="text-sm opacity-70">Total deficit: {totalDeficit.toFixed(0)}</p>
  <div class="mt-2 space-y-1">
    {#each deficits as def, i}
      <div class="flex items-center gap-2">
        <span class="w-6 text-xs">{i}</span>
        <div class="h-4 flex-1 rounded bg-slate-200">
          <div class="h-full rounded bg-red-400" style="width: {Math.min(100, (def / (totalDeficit || 1)) * 100)}%"></div>
        </div>
        <span class="text-xs">{def.toFixed(0)}</span>
      </div>
    {/each}
  </div>
</div>
