<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let hasSunset: boolean;
  export let running: boolean;
  export let finished: boolean;

  const dispatch = createEventDispatcher();

  function toggleSunset() {
    hasSunset = !hasSunset;
    dispatch('sunsetChange', hasSunset);
  }

  function run() { dispatch('run'); }
  function pause() { dispatch('pause'); }
  function reset() { dispatch('reset'); }
</script>

<div class="flex flex-wrap items-center gap-4">
  <button
    on:click={toggleSunset}
    disabled={running || finished}
    class="rounded px-4 py-2 text-sm font-medium {hasSunset ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-300 text-slate-700 hover:bg-slate-400'} disabled:opacity-50"
  >
    Sunset Condition: {hasSunset ? 'ON' : 'OFF'}
  </button>
  {#if !finished}
    <button
      on:click={run}
      disabled={running}
      class="rounded bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 disabled:opacity-50"
    >
      Run
    </button>
    <button
      on:click={pause}
      disabled={!running}
      class="rounded bg-slate-400 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-500 disabled:opacity-50"
    >
      Pause
    </button>
  {/if}
  <button
    on:click={reset}
    class="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
  >
    Reset
  </button>
</div>
