<script lang="ts">
  import ExplorableBreadcrumb from '$lib/components/ExplorableBreadcrumb.svelte';
  import { DEFAULT_MODES, type FailureMode } from './types';

  let modes: FailureMode[] = $state(DEFAULT_MODES.map(m => ({ ...m })));

  const ADDITIVE_FLOOR = 0;
  const MULTIPLICATIVE_BASELINE = 100;

  // Derived values
  const additiveCapacity = $derived(
    Math.max(ADDITIVE_FLOOR, MULTIPLICATIVE_BASELINE - modes.reduce((s, m) => s + m.value, 0))
  );
  const multiplicativeCapacity = $derived(
    modes.reduce((acc, m) => acc * (1 - m.value / 100), MULTIPLICATIVE_BASELINE)
  );
  const tax = $derived(additiveCapacity - multiplicativeCapacity);

  function resetDefaults() {
    modes = DEFAULT_MODES.map(m => ({ ...m }));
  }
</script>

<div class="mx-auto max-w-3xl px-4 py-12">
  <ExplorableBreadcrumb title="The Coordination Failure Tax" />

  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">The Coordination Failure Tax</h1>
    <p class="mt-2 text-lg opacity-70">
      Architectural failures don't add — they multiply.
    </p>
  </header>

  <div class="mb-8 space-y-4">
    {#each modes as mode, i}
      <fieldset class="rounded border border-slate-200 bg-white p-4 shadow-sm">
        <div class="flex items-center justify-between">
          <label for={mode.id} class="font-medium">{mode.label}</label>
          <span class="text-sm tabular-nums">{mode.value}% capacity loss</span>
        </div>
        <input
          id={mode.id}
          type="range"
          min="0"
          max="100"
          step="1"
          bind:value={mode.value}
          class="mt-1 w-full"
        />
        <p class="mt-1 text-xs opacity-60">{mode.description}</p>
      </fieldset>
    {/each}
  </div>

  <div class="grid gap-6 md:grid-cols-2">
    <!-- Additive expectation -->
    <div class="rounded border border-slate-200 bg-white p-6 shadow">
      <h2 class="mb-2 text-sm font-semibold uppercase tracking-wide opacity-70">Intuitive (Additive) Model</h2>
      <p class="text-4xl font-bold">{additiveCapacity.toFixed(1)}%</p>
      <p class="text-sm opacity-60">of baseline governance capacity</p>
      <div class="mt-2 h-4 w-full rounded-full bg-slate-200">
        <div
          class="h-full rounded-full bg-blue-500"
          style="width: {additiveCapacity}%"
        ></div>
      </div>
    </div>

    <!-- Actual (Multiplicative) outcome -->
    <div class="rounded border border-slate-200 bg-white p-6 shadow">
      <h2 class="mb-2 text-sm font-semibold uppercase tracking-wide opacity-70">Actual (Multiplicative) Outcome</h2>
      <p class="text-4xl font-bold">{multiplicativeCapacity.toFixed(2)}%</p>
      <p class="text-sm opacity-60">of baseline governance capacity</p>
      <div class="mt-2 h-4 w-full rounded-full bg-slate-200">
        <div
          class="h-full rounded-full bg-amber-500"
          style="width: {multiplicativeCapacity}%"
        ></div>
      </div>
    </div>
  </div>

  <!-- The Tax -->
  <div class="mt-6 rounded border border-red-300 bg-red-50 p-6 text-center">
    <p class="text-sm uppercase tracking-wide text-red-700">You are paying a hidden tax of</p>
    <p class="text-4xl font-bold text-red-600">{tax.toFixed(2)} percentage points</p>
    <p class="mt-1 text-sm text-red-700">
      The gap between what you think you lose and what you actually lose.
    </p>
  </div>

  <div class="mt-8 flex justify-center">
    <button
      on:click={resetDefaults}
      class="rounded border border-slate-400 px-4 py-2 text-slate-700 hover:bg-slate-100"
    >
      Reset to Defaults
    </button>
  </div>

  <details class="mt-8 rounded border border-slate-200 bg-slate-50 p-4">
    <summary class="cursor-pointer font-medium">How this works</summary>
    <div class="mt-2 space-y-2 text-sm opacity-80">
      <p>
        Each failure mode destroys a <strong>fraction</strong> of the capacity that
        <em>remains</em> after the previous failures have done their damage. The
        failures are sequential, not parallel.
      </p>
      <p>
        If each of four failures destroys 50% of capacity, the intuitive additive
        model says you lose 4 × 50% = 200% — you're at zero. The actual
        multiplicative result is 0.5⁴ = 6.25% of baseline.
      </p>
      <p>
        This is why institutions that look “a bit broken” in several ways
        simultaneously are often <em>categorically incapable</em> of the
        functions they claim to perform.
      </p>
    </div>
  </details>
</div>
