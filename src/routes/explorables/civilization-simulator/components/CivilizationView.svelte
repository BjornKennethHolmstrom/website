<script lang="ts">
  import type { CivilizationState } from '../types';

  let { civ, label, type }: {
    civ: CivilizationState;
    label: string;
    type: 'legacy' | 'adaptive';
  } = $props();

  let showHidden = $state(false);

  function toggleHidden() {
    showHidden = !showHidden;
  }

  function fmt(v: number): string {
    return v.toFixed(1);
  }

  let visibleMetrics = $derived(
    type === 'legacy'
      ? [{ name: 'Wealth', value: civ.observedWealth, unit: '' }]
      : [
          { name: 'Wealth', value: civ.observedWealth, unit: '' },
          { name: 'Environment', value: civ.observedEnvironment, unit: '%' },
          { name: 'Social Trust', value: civ.observedSocialTrust, unit: '%' },
          { name: 'Financial Fragility', value: civ.observedFinancialFragility, unit: '%' },
          { name: 'Adaptive Capacity', value: civ.observedAdaptiveCapacity, unit: '%' },
        ]
  );

  let hiddenMetrics = $derived(
    type === 'legacy'
      ? [
          { name: 'Environment', value: civ.environment, unit: '%' },
          { name: 'Social Trust', value: civ.socialTrust, unit: '%' },
          { name: 'Financial Fragility', value: civ.financialFragility, unit: '%' },
          { name: 'Adaptive Capacity', value: civ.adaptiveCapacity, unit: '%' },
        ]
      : []
  );

  let effectiveHiddenMetrics = $derived(
    type === 'legacy'
      ? (civ.auditRevealed
          ? [] // audit reveals all, so nothing is hidden this step
          : [
              { name: 'Environment', value: civ.environment, unit: '%' },
              { name: 'Social Trust', value: civ.socialTrust, unit: '%' },
              { name: 'Financial Fragility', value: civ.financialFragility, unit: '%' },
              { name: 'Adaptive Capacity', value: civ.adaptiveCapacity, unit: '%' },
            ].filter(m => !civ.observedDimensions.has(m.name.toLowerCase().replace(' ', ''))))
      : []
  );
</script>

<div class="rounded border bg-white p-6 shadow">
  <h2 class="mb-4 text-lg font-bold">{label}</h2>

  <div class="space-y-3">
    {#if civ.auditRevealed && type === 'legacy'}
      <div class="mb-3 rounded bg-indigo-50 px-3 py-2 text-xs text-indigo-700">
        ⚡ Audit active — all dimensions visible this step
      </div>
    {/if}
    {#each visibleMetrics as metric}
      <div>
        <p class="text-sm opacity-60">{metric.name}</p>
        <p class="text-3xl font-bold">{fmt(metric.value)}{metric.unit}</p>
      </div>
    {/each}
  </div>

  {#if type === 'legacy'}
    <div class="mt-6 border-t pt-4">
      <button
        on:click={toggleHidden}
        class="flex w-full items-center justify-between text-sm font-medium text-amber-600 hover:text-amber-700"
      >
        <span>{showHidden ? 'Hide Hidden Dimensions' : 'Reveal Hidden Dimensions'}</span>
        <span class="text-lg">{showHidden ? '▲' : '▼'}</span>
      </button>

      {#if showHidden}
        <div class="mt-3 space-y-3 border-l-4 border-amber-400 pl-4">
          <p class="text-xs italic opacity-60">These are the true states of the system — invisible to the Legacy dashboard.</p>
          {#each hiddenMetrics as metric}
            <div>
              <p class="text-sm opacity-60">{metric.name}</p>
              <p class="text-2xl font-bold text-amber-700">{fmt(metric.value)}{metric.unit}</p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  {#if type === 'adaptive'}
    <div class="mt-6 border-t pt-4 text-sm text-emerald-600">
      This architecture perceives all five dimensions.
    </div>
  {/if}

  {#if civ.collapsed}
    <div class="mt-4 rounded bg-red-100 p-3 text-sm font-bold text-red-800">
      ⚠ COLLAPSED — {civ.collapseReason || 'Unknown reason'}
    </div>
  {/if}
</div>
