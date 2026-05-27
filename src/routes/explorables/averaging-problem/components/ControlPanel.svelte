<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Architecture } from '../types';

  export let architecture: Architecture;
  export let running: boolean;
  export let finished: boolean;
  export let revealed: boolean;

  const dispatch = createEventDispatcher();

  function toggleArch() {
    architecture = architecture === 'centralized' ? 'distributed' : 'centralized';
    dispatch('architectureChange', architecture);
  }

  function run() { dispatch('run'); }
  function pause() { dispatch('pause'); }
  function reset() { dispatch('reset'); }
  function reveal() { dispatch('reveal'); }
</script>

<div class="flex flex-wrap items-center gap-4">
  <button on:click={toggleArch} class="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
    {architecture === 'centralized' ? 'Switch to Distributed' : 'Switch to Centralized'}
  </button>
  {#if !finished}
    <button on:click={run} disabled={running} class="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:opacity-50">
      Run
    </button>
    <button on:click={pause} disabled={!running} class="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 disabled:opacity-50">
      Pause
    </button>
  {/if}
  <button on:click={reset} class="rounded border border-slate-400 px-4 py-2 text-slate-700 hover:bg-slate-100">
    Reset
  </button>
  {#if finished && !revealed && architecture === 'centralized'}
    <button on:click={reveal} class="rounded bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
      Reveal Node Details
    </button>
  {/if}
</div>
