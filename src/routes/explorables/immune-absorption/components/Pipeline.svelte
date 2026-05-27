<script lang="ts">
  import type { ReformState } from '../types';

  export let state: ReformState;

  $: stages = state.stages;
  $: current = state.currentStage;
  $: finished = state.finished;

  function cardClasses(stage: { result: string | null }, i: number): string {
    if (stage.result === 'passed') return 'bg-emerald-100';
    if (stage.result === 'diluted') return 'bg-red-100';
    if (stage.result === null && i === current && !finished) return 'bg-amber-100';
    return 'bg-white';
  }
</script>

<div class="overflow-x-auto">
  <div class="flex items-center gap-2 min-w-[600px]">
    {#each stages as stage, i}
      <div class="flex items-center">
        <!-- Stage card -->
        <div class="rounded border p-3 shadow-sm w-36 {cardClasses(stage, i)}">
          <p class="text-xs font-bold">{stage.name}</p>
          <p class="text-[10px] opacity-70">{stage.description}</p>
          {#if stage.result === 'passed'}
            <span class="text-xs text-emerald-600">✓ Passed</span>
          {:else if stage.result === 'diluted'}
            <span class="text-xs text-red-600">✗ Diluted</span>
          {:else if i === current && !finished}
            <span class="text-xs text-amber-600">● Active</span>
          {:else}
            <span class="text-xs opacity-50">Pending</span>
          {/if}
        </div>
        <!-- Arrow -->
        {#if i < stages.length - 1}
          <div class="mx-1 text-slate-400">→</div>
        {/if}
      </div>
    {/each}
  </div>
</div>
