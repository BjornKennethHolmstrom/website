<script lang="ts">
  import type { BypassState } from '../types';

  export let state: BypassState;

  const width = 600;
  const height = 250;
  const pad = { top: 20, right: 20, bottom: 30, left: 45 };

  $: history = state.history;
  $: hasData = history.length > 0;
  $: maxTime = hasData ? Math.max(...history.map(d => d.time), 1) : 1;

  function x(t: number) {
    return pad.left + (t / maxTime) * (width - pad.left - pad.right);
  }
  function y(v: number) {
    return pad.top + ((100 - v) / 100) * (height - pad.top - pad.bottom);
  }

  function makePath(hist: typeof state.history, field: 'core' | 'bypass' | 'pressure'): string {
    if (hist.length < 2) return '';
    return hist
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(d.time).toFixed(1)} ${y(d[field]).toFixed(1)}`)
      .join(' ');
  }

  $: corePath = makePath(history, 'core');
  $: bypassPath = makePath(history, 'bypass');
  $: pressurePath = makePath(history, 'pressure');
</script>

<div class="rounded border bg-white p-4 shadow">
  {#if hasData}
    <svg viewBox={`0 0 ${width} ${height}`} class="w-full h-auto">
      <!-- grid lines -->
      {#each [0, 25, 50, 75, 100] as val}
        <line x1={pad.left} y1={y(val)} x2={width - pad.right} y2={y(val)} stroke="#e5e7eb" stroke-width="1"/>
        <text x={pad.left - 5} y={y(val) + 4} text-anchor="end" class="text-[8px] fill-slate-400">{val}</text>
      {/each}
      <!-- axes -->
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} stroke="#cbd5e1"/>
      <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} stroke="#cbd5e1"/>
      <!-- x labels -->
      {#each [0, Math.floor(maxTime / 2), maxTime] as t}
        <text x={x(t)} y={height - pad.bottom + 15} text-anchor="middle" class="text-[8px] fill-slate-400">{t}</text>
      {/each}
      <!-- lines -->
      {#if corePath}
        <path d={corePath} fill="none" stroke="#ef4444" stroke-width="2"/>
      {/if}
      {#if bypassPath}
        <path d={bypassPath} fill="none" stroke="#3b82f6" stroke-width="2"/>
      {/if}
      {#if pressurePath}
        <path d={pressurePath} fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
      {/if}
    </svg>
  {:else}
    <div class="flex h-[250px] items-center justify-center text-sm text-slate-400">
      Run the simulation to see the chart.
    </div>
  {/if}
  <div class="mt-2 flex justify-center gap-4 text-xs">
    <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:#ef4444"></span> Core Quality</span>
    <span class="inline-block h-2 w-4 rounded" style="background:#ef4444"></span>
    <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:#3b82f6"></span> Bypass Quality</span>
    <span class="inline-block h-2 w-4 rounded" style="background:#3b82f6"></span>
    <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:#f59e0b; opacity:0.6"></span> Pressure</span>
    <span class="inline-block h-2 w-4 rounded" style="background:#f59e0b; opacity:0.6"></span>
  </div>
</div>
