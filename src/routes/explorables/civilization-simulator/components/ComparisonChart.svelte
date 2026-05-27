<script lang="ts">
  let { history }: {
    history: {
      time: number;
      legacyWealth: number;
      adaptiveWealth: number;
      legacyEnv: number;
      adaptiveEnv: number;
    }[];
  } = $props();

  const width = 600;
  const height = 200;
  const pad = { top: 20, right: 20, bottom: 30, left: 45 };

  let hasData = $derived(history.length > 0);
  let maxTime = $derived(hasData ? Math.max(...history.map(d => d.time), 1) : 1);

  function x(t: number) {
    return pad.left + (t / maxTime) * (width - pad.left - pad.right);
  }

  function y(v: number, maxVal = 120) {
    return pad.top + ((maxVal - v) / maxVal) * (height - pad.top - pad.bottom);
  }

  function makePath(
    field: 'legacyWealth' | 'adaptiveWealth' | 'legacyEnv' | 'adaptiveEnv'
  ): string {
    if (history.length < 2) return '';
    return history
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(d.time).toFixed(1)} ${y(d[field], field.includes('Env') ? 110 : 120).toFixed(1)}`)
      .join(' ');
  }

  const colors = {
    legacyWealth: '#ef4444',
    adaptiveWealth: '#3b82f6',
    legacyEnv: '#f97316',
    adaptiveEnv: '#06b6d4',
  };
</script>

<div class="space-y-6">
  <!-- Wealth Chart -->
  <div class="rounded border bg-white p-4 shadow">
    <h3 class="mb-2 text-sm font-semibold">Wealth</h3>
    {#if hasData}
      <svg viewBox={`0 0 ${width} ${height}`} class="w-full h-auto">
        {#each [0, 30, 60, 90, 120] as val}
          <line x1={pad.left} y1={y(val, 120)} x2={width - pad.right} y2={y(val, 120)} stroke="#e5e7eb" stroke-width="1"/>
          <text x={pad.left - 5} y={y(val, 120) + 4} text-anchor="end" class="text-[8px] fill-slate-400">{val}</text>
        {/each}
        <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} stroke="#cbd5e1"/>
        <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} stroke="#cbd5e1"/>
        <path d={makePath('legacyWealth')} fill="none" stroke={colors.legacyWealth} stroke-width="2"/>
        <path d={makePath('adaptiveWealth')} fill="none" stroke={colors.adaptiveWealth} stroke-width="2"/>
      </svg>
    {:else}
      <div class="flex h-[200px] items-center justify-center text-sm text-slate-400">No data yet.</div>
    {/if}
    <div class="mt-2 flex justify-center gap-4 text-xs">
      <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:{colors.legacyWealth}"></span> Legacy</span>
      <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:{colors.adaptiveWealth}"></span> Adaptive</span>
    </div>
  </div>

  <!-- Environment Chart -->
  <div class="rounded border bg-white p-4 shadow">
    <h3 class="mb-2 text-sm font-semibold">Environment</h3>
    {#if hasData}
      <svg viewBox={`0 0 ${width} ${height}`} class="w-full h-auto">
        {#each [0, 30, 60, 90, 110] as val}
          <line x1={pad.left} y1={y(val, 110)} x2={width - pad.right} y2={y(val, 110)} stroke="#e5e7eb" stroke-width="1"/>
          <text x={pad.left - 5} y={y(val, 110) + 4} text-anchor="end" class="text-[8px] fill-slate-400">{val}</text>
        {/each}
        <line x1={pad.left} y1={pad.top} x2={pad.left} y2={height - pad.bottom} stroke="#cbd5e1"/>
        <line x1={pad.left} y1={height - pad.bottom} x2={width - pad.right} y2={height - pad.bottom} stroke="#cbd5e1"/>
        <path d={makePath('legacyEnv')} fill="none" stroke={colors.legacyEnv} stroke-width="2"/>
        <path d={makePath('adaptiveEnv')} fill="none" stroke={colors.adaptiveEnv} stroke-width="2"/>
      </svg>
    {:else}
      <div class="flex h-[200px] items-center justify-center text-sm text-slate-400">No data yet.</div>
    {/if}
    <div class="mt-2 flex justify-center gap-4 text-xs">
      <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:{colors.legacyEnv}"></span> Legacy</span>
      <span class="flex items-center gap-1"><span class="h-2 w-4 rounded" style="background:{colors.adaptiveEnv}"></span> Adaptive</span>
    </div>
  </div>
</div>
