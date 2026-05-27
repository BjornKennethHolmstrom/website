<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let immunePermeability: number;
  export let running: boolean;
  export let finished: boolean;

  const dispatch = createEventDispatcher();

  function step() { dispatch('step'); }
  function runAll() { dispatch('runAll'); }
  function reset() { dispatch('reset'); }
</script>

<div class="flex flex-wrap items-center gap-4">
  <label class="flex items-center gap-2 text-sm">
    Immune Permeability:
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      bind:value={immunePermeability}
      disabled={running || finished}
    />
    <span class="w-10 text-xs">{immunePermeability.toFixed(2)}</span>
  </label>
  <button
    on:click={step}
    disabled={finished || running}
    class="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 disabled:opacity-50"
  >
    Step
  </button>
  <button
    on:click={runAll}
    disabled={finished || running}
    class="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-50"
  >
    Run All
  </button>
  <button
    on:click={reset}
    class="rounded border border-slate-400 px-4 py-2 text-slate-700 hover:bg-slate-100"
  >
    Reset
  </button>
</div>
