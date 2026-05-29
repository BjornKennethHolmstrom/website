<script lang="ts">
  import type { RunSummary } from '../simulation';

  let { summary }: { summary: RunSummary | null } = $props();
</script>

{#if summary}
  <div class="mt-8 rounded border bg-white p-6 shadow">
    <h2 class="mb-4 text-xl font-bold">Run Summary</h2>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded border border-red-200 bg-red-50 p-4">
        <h3 class="font-bold text-red-700">Legacy Governance</h3>
        <p>Peak Wealth: <strong>{summary.legacyPeakWealth.toFixed(1)}</strong></p>
        <p>Governance Failure: <strong>{summary.legacyCollapseStep ? `Step ${summary.legacyCollapseStep}` : 'Survived'}</strong>
          {#if summary.legacyCollapseReason} ({summary.legacyCollapseReason}) {/if}
        </p>
        <p>Reforms: <strong>{summary.legacyReformsSucceeded}/{summary.legacyReformsAttempted} succeeded</strong></p>
        <p>Hidden Damage: <strong>{summary.legacyHiddenDamage.toFixed(0)}</strong></p>
      </div>
      <div class="rounded border border-blue-200 bg-blue-50 p-4">
        <h3 class="font-bold text-blue-700">Adaptive Coherence</h3>
        <p>Peak Wealth: <strong>{summary.adaptivePeakWealth.toFixed(1)}</strong></p>
        <p>Governance Failure: <strong>{summary.adaptiveCollapseStep ? `Step ${summary.adaptiveCollapseStep}` : 'Survived'}</strong>
          {#if summary.adaptiveCollapseReason} ({summary.adaptiveCollapseReason}) {/if}
        </p>
        <p>Hidden Damage: <strong>{summary.adaptiveHiddenDamage.toFixed(0)}</strong></p>
      </div>
    </div>

    <div class="mt-4 rounded border border-slate-200 bg-slate-50 p-4">
      <h3 class="font-bold">Diagnosis</h3>
      <p class="text-sm">{summary.narrative}</p>
      <p class="mt-2 text-xs text-slate-500">
        Hidden damage measures the cumulative gap between the true state of environment and social trust
        and their ideal values. Legacy's higher hidden damage reflects the cost of unobserved dimensions.
      </p>
    </div>
  </div>
{/if}
