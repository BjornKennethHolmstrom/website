<script lang="ts">
  import type { HistoryEntry } from '../types';

  let { history, auditEverRevealed = false }: {
    history: HistoryEntry[];
    auditEverRevealed?: boolean;
  } = $props();

  const W = 600, H = 160;
  const pad = { t: 15, r: 20, b: 28, l: 40 };

  // Scale to the latest recorded time, with a minimum so axes render before data arrives
  let maxTime = $derived(history.length > 1 ? history[history.length - 1].time : 100);

  function xv(t: number) { return pad.l + (t / maxTime) * (W - pad.l - pad.r); }
  function yv(v: number, max: number) { return pad.t + ((max - v) / max) * (H - pad.t - pad.b); }

  // Standard path for fields that are always non-null
  function makePath(hist: HistoryEntry[], field: keyof HistoryEntry, maxVal: number): string {
    if (hist.length < 2) return '';
    return hist
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${xv(d.time).toFixed(1)} ${yv(d[field] as number, maxVal).toFixed(1)}`)
      .join(' ');
  }

  // Path for nullable observed fields — starts a new subpath after each null gap
  function makeNullablePath(
    hist: HistoryEntry[],
    field: 'legacyObsEnv' | 'legacyObsTrust' | 'legacyObsFragility',
    maxVal: number,
  ): string {
    if (hist.length < 2) return '';
    let path = '', inSeg = false;
    for (const d of hist) {
      const v = d[field];
      if (v === null) { inSeg = false; continue; }
      const px = xv(d.time).toFixed(1), py = yv(v, maxVal).toFixed(1);
      path += inSeg ? ` L ${px} ${py}` : ` M ${px} ${py}`;
      inSeg = true;
    }
    return path.trim();
  }

  // Whether any observed data exists for a given nullable field
  function hasObservedData(field: 'legacyObsEnv' | 'legacyObsTrust' | 'legacyObsFragility'): boolean {
    return history.some(d => d[field] !== null);
  }

  type Panel = {
    title: string;
    adaptiveField: keyof HistoryEntry;
    legacyTrueField: keyof HistoryEntry;
    legacyObsField: 'legacyObsEnv' | 'legacyObsTrust' | 'legacyObsFragility' | null;
    maxVal: number;
    gridVals: number[];
    dangerLine?: number;
  };

  const panels: Panel[] = [
    {
      title: 'Wealth',
      adaptiveField: 'adaptiveWealth', legacyTrueField: 'legacyWealth',
      legacyObsField: null,  // wealth is always observed; show true value for both
      maxVal: 150, gridVals: [0, 50, 100, 150],
    },
    {
      title: 'Environment',
      adaptiveField: 'adaptiveEnv', legacyTrueField: 'legacyEnv',
      legacyObsField: 'legacyObsEnv',
      maxVal: 110, gridVals: [0, 25, 50, 75, 100],
    },
    {
      title: 'Social Trust',
      adaptiveField: 'adaptiveTrust', legacyTrueField: 'legacyTrust',
      legacyObsField: 'legacyObsTrust',
      maxVal: 100, gridVals: [0, 25, 50, 75, 100],
    },
    {
      title: 'Financial Fragility',
      adaptiveField: 'adaptiveFragility', legacyTrueField: 'legacyFragility',
      legacyObsField: 'legacyObsFragility',
      maxVal: 100, gridVals: [0, 25, 50, 75, 100],
      dangerLine: 90,
    },
  ];
</script>

<div class="space-y-4">
  {#each panels as panel}
    {@const isBlind = panel.legacyObsField !== null}
    {@const obsData = isBlind && panel.legacyObsField ? hasObservedData(panel.legacyObsField) : true}

    <div class="rounded border bg-white p-4 shadow">
      <div class="mb-1 flex items-center justify-between">
        <h3 class="text-sm font-semibold">{panel.title}</h3>
        {#if isBlind}
          {#if auditEverRevealed}
            <span class="text-xs text-red-500 italic">⚠ Audit: true legacy history now visible (dashed)</span>
          {:else if !obsData}
            <span class="text-xs text-slate-400 italic">Legacy: dimension unobserved</span>
          {:else}
            <span class="text-xs text-slate-400 italic">Legacy: showing observed values only</span>
          {/if}
        {/if}
      </div>

      {#if history.length > 1}
        <svg viewBox="0 0 {W} {H}" class="h-auto w-full">

          <!-- Grid lines -->
          {#each panel.gridVals as val}
            <line
              x1={pad.l} y1={yv(val, panel.maxVal)}
              x2={W - pad.r} y2={yv(val, panel.maxVal)}
              stroke="#f1f5f9" stroke-width="1"
            />
            <text x={pad.l - 4} y={yv(val, panel.maxVal) + 3} text-anchor="end" font-size="7" fill="#94a3b8">{val}</text>
          {/each}

          <!-- Collapse threshold line -->
          {#if panel.dangerLine}
            <line
              x1={pad.l} y1={yv(panel.dangerLine, panel.maxVal)}
              x2={W - pad.r} y2={yv(panel.dangerLine, panel.maxVal)}
              stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"
            />
          {/if}

          <!-- Axes -->
          <line x1={pad.l} y1={pad.t}     x2={pad.l}     y2={H - pad.b} stroke="#e2e8f0"/>
          <line x1={pad.l} y1={H - pad.b} x2={W - pad.r} y2={H - pad.b} stroke="#e2e8f0"/>

          <!-- Adaptive (always true values, blue) -->
          <path
            d={makePath(history, panel.adaptiveField, panel.maxVal)}
            fill="none" stroke="#3b82f6" stroke-width="2"
          />

          {#if !isBlind}
            <!-- Wealth: both always visible as true values -->
            <path
              d={makePath(history, panel.legacyTrueField, panel.maxVal)}
              fill="none" stroke="#ef4444" stroke-width="2"
            />
          {:else}
            <!-- True legacy history — only revealed after a successful audit -->
            {#if auditEverRevealed}
              <path
                d={makePath(history, panel.legacyTrueField, panel.maxVal)}
                fill="none" stroke="#ef4444" stroke-width="1.5"
                stroke-dasharray="5,3" opacity="0.45"
              />
            {/if}

            <!-- Legacy observed data (solid red, only where non-null) -->
            {#if panel.legacyObsField}
              {#if obsData}
                <path
                  d={makeNullablePath(history, panel.legacyObsField, panel.maxVal)}
                  fill="none" stroke="#ef4444" stroke-width="2"
                />
              {:else}
                <!-- Dimension entirely unobserved: show watermark -->
                <text
                  x={(W + pad.l) / 2} y={H / 2 + 4}
                  text-anchor="middle" font-size="10" fill="#e2e8f0"
                >unobserved by Legacy</text>
              {/if}
            {/if}
          {/if}

        </svg>
      {:else}
        <div class="flex h-[160px] items-center justify-center text-sm text-slate-400">No data yet.</div>
      {/if}

      <!-- Legend -->
      <div class="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
        <span class="flex items-center gap-1">
          <span class="inline-block h-2 w-4 rounded" style="background:#3b82f6"></span>
          Adaptive (true)
        </span>
        {#if !isBlind}
          <span class="flex items-center gap-1">
            <span class="inline-block h-2 w-4 rounded" style="background:#ef4444"></span>
            Legacy
          </span>
        {:else}
          {#if obsData}
            <span class="flex items-center gap-1">
              <span class="inline-block h-2 w-4 rounded" style="background:#ef4444"></span>
              Legacy (observed)
            </span>
          {/if}
          {#if auditEverRevealed}
            <span class="flex items-center gap-1 opacity-60">
              <svg width="16" height="8" style="display:inline-block">
                <line x1="0" y1="4" x2="16" y2="4" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3"/>
              </svg>
              Legacy (true — was hidden)
            </span>
          {/if}
        {/if}
        {#if panel.dangerLine}
          <span class="flex items-center gap-1 opacity-60">
            <svg width="16" height="8" style="display:inline-block">
              <line x1="0" y1="4" x2="16" y2="4" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3"/>
            </svg>
            Failure threshold
          </span>
        {/if}
      </div>

    </div>
  {/each}
</div>
