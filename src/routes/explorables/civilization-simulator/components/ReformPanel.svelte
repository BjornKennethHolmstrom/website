<script lang="ts">
  import type { CivilizationState, ReformType } from '../types';

  let { civ, disabled, onreform }: {
    civ: CivilizationState;
    disabled: boolean;
    onreform: (type: ReformType) => void;
  } = $props();

  const reforms: { type: ReformType; label: string; desc: string; cost: number }[] = [
    { type: 'expand_observation', label: 'Expand Observation', desc: 'Add one hidden dimension to the dashboard.', cost: 25 },
    { type: 'reduce_latency',     label: 'Reduce Latency',     desc: 'Halve the observation delay.', cost: 25 },
    { type: 'regulate_finance',   label: 'Regulate Finance',   desc: 'Cap financial fragility growth.', cost: 25 },
    { type: 'invest_social',      label: 'Invest in Society',  desc: 'Direct boost to social trust.', cost: 12 },
    { type: 'meta_governance_audit', label: 'Meta‑Governance Audit', desc: 'Reveal all hidden variables for one step.', cost: 12 },
  ];

  function canAfford(cost: number): boolean {
    return civ.politicalCapital >= cost;
  }

  let onCooldown = $derived(civ.immune.cooldownRemaining > 0);
  let clickedType = $state<ReformType | null>(null);

  function handleClick(type: ReformType) {
    clickedType = type;
    onreform(type);
    setTimeout(() => { clickedType = null; }, 600);
  }
</script>

<div class="rounded border bg-white p-4 shadow">
  <div class="mb-3 flex items-center justify-between">
    <h3 class="text-sm font-semibold">Reforms</h3>
    <span class="text-xs opacity-60">PC: {civ.politicalCapital.toFixed(0)} | Cooldown: {civ.immune.cooldownRemaining}</span>
  </div>
  <div class="space-y-2">
    {#each reforms as r}
      {@const affordable = canAfford(r.cost)}
      <button
        onclick={() => handleClick(r.type)}
        disabled={disabled || !affordable || onCooldown}
        class="w-full rounded border px-3 py-2 text-left text-sm transition-all duration-200
          {clickedType === r.type ? 'border-amber-400 bg-amber-50 shadow-inner' : ''}
          {affordable && !onCooldown && !disabled ? 'border-slate-300 hover:bg-slate-50 hover:border-slate-400' : 'border-slate-200 bg-slate-50 opacity-50'}
          disabled:cursor-not-allowed"
        title={!affordable ? `Need ${r.cost} political capital (have ${civ.politicalCapital.toFixed(0)})` : onCooldown ? 'On cooldown' : disabled ? 'Pause to queue reforms' : r.desc}
      >
        <div class="flex items-center justify-between">
          <span>{r.label}</span>
          <span class="text-xs opacity-60">{r.cost} PC</span>
        </div>
      </button>
    {/each}
  </div>
  {#if disabled && !civ.collapsed}
    <p class="mt-2 text-xs text-amber-600">⏸ Pause the simulation to queue reforms.</p>
  {/if}
</div>
