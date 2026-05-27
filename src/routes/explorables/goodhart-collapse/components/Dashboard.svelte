<script lang="ts">
  import type { SimulationState, SimulationParams } from '../types';

  export let state: SimulationState;
  export let params: SimulationParams;

  $: observedW = Math.max(0, state.W);
  $: targetW = params.WTarget;
  $: percentage = Math.min(100, (observedW / targetW) * 100);
  $: color = percentage > 80 ? 'bg-green-500' : percentage > 50 ? 'bg-yellow-500' : 'bg-red-500';
</script>

<div class="rounded border border-slate-200 bg-white p-6 shadow">
  <h2 class="mb-4 text-lg font-bold">Dashboard</h2>
  <div class="mb-4">
    <p class="text-sm opacity-60">Wealth (W)</p>
    <p class="text-4xl font-bold">{observedW.toFixed(1)}</p>
    <p class="text-xs opacity-50">Target: {targetW}</p>
  </div>
  <div class="mb-4 h-4 w-full rounded-full bg-slate-200">
    <div
      class="h-full rounded-full transition-all {color}"
      style="width: {percentage}%"
    ></div>
  </div>
  <div class="space-y-2 text-sm">
    <p>Investment: <strong>{state.I.toFixed(1)}</strong></p>
    <p>Time: <strong>{state.t}</strong></p>
    {#if state.collapsed}
      <p class="font-bold text-red-600">⚠ Collapsed</p>
    {:else if observedW >= targetW}
      <p class="font-bold text-green-600">✓ Target reached</p>
    {:else}
      <p class="text-amber-600">Adjusting investment...</p>
    {/if}
  </div>
</div>
