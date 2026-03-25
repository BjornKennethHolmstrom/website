<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';

  // Import markdown spec
  import SpecV0_3 from './sections/v0.3.md';

  // State for progressive disclosure
  let showTechnicalDocs = false;

  function toggleDocs() {
    showTechnicalDocs = !showTechnicalDocs;
  }
</script>

<SEO 
  title="DPI 2.0: The Subsidiarity Layer" 
  description="A governance routing protocol for India Stack — reducing disaster response latency through precision subsidiarity." 
/>

<main class="mx-auto max-w-4xl px-6 py-16">
  
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl" style="color: var(--color-page-text);">
      DPI 2.0: The Subsidiarity Layer
    </h1>
    <p class="text-xl leading-relaxed opacity-80" style="color: var(--color-page-text);">
      A governance routing protocol for India Stack — reducing disaster response latency through precision subsidiarity.
    </p>
  </header>

  <section class="prose prose-lg mb-16 max-w-none"
    style="
      --tw-prose-body: var(--color-page-text);
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
    ">
    <h2>The structural problem</h2>
    <p>
      India has built the most successful Digital Public Infrastructure in the world — Aadhaar, UPI, DEPA, ONDC. What it lacks is the <strong>governance routing layer</strong> that determines where decisions should be made and how resources should flow. The result: hyper-efficient digital plumbing serving a centralized governance architecture that cannot match the variety of 1.4 billion people across 28 states.
    </p>
    <p>
      The cost is measurable. In the 2018 Kerala floods, central relief reached many districts only after 72+ hours. In the 2024 Wayanad landslides, NDRF deployment required central authorization while local knowledge of vulnerable populations remained inaccessible to formal systems. Governance latency is not an abstraction — it is counted in lives lost.
    </p>

    <h2>The solution: precision routing on India Stack</h2>
    <p>
      DPI 2.0 adds a governance routing layer on top of India Stack. The <strong>Global Subsidiarity Index (GSI)</strong> is a diagnostic algorithm that identifies the optimal governance scale — national, state, district, or community — for disaster response. It uses specific indicators (event magnitude from IMD, state capacity from SDMAs, vulnerable population density from Census/NFHS, infrastructure damage from ISRO imagery) to produce routing recommendations that update every 6 hours.
    </p>
    <p>
      This is not a political argument for decentralization. It is a technical solution to measurable governance problems. The center gains faster, more visible outcomes — measurable reduction in disaster mortality, strategic visibility into the informal economy, and improved welfare delivery metrics.
    </p>
  </section>

  <section class="mb-16 rounded-xl border border-[var(--color-separator)] p-8 shadow-sm" style="background-color: var(--color-card-bg);">
    <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-page-text);">Core briefing materials</h2>
    <div class="flex flex-col gap-4 sm:flex-row">
      <a 
        href="/pdfs/india-dpi-2.0-executive-briefing.pdf" 
        target="_blank" 
        class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-card-text);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Executive Briefing (PDF)
      </a>
      <a 
        href="/pdfs/india-dpi-2.0-architecture-map.pdf" 
        target="_blank" 
        class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-card-text);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Architecture Map (PDF)
      </a>
    </div>
  </section>

  <section class="border-t border-[var(--color-separator)] pt-12">
    
    <div class="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <h2 class="text-3xl font-bold" style="color: var(--color-page-text);">Technical specification</h2>
        <p class="mt-2 opacity-80" style="color: var(--color-page-text);">Full deployment-ready specification for the governance routing protocol.</p>
      </div>
      
      <a 
        href="/pdfs/india-dpi-2.0-v0.3.pdf" 
        target="_blank"
        class="flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-page-text)] px-5 py-2.5 text-sm font-semibold text-[var(--color-card-bg)] transition-opacity hover:opacity-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Download Full Specification (PDF)
      </a>
    </div>

    {#if !showTechnicalDocs}
      <button 
        on:click={toggleDocs} 
        class="w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        Expand full technical specification ↓
      </button>
    {:else}
      <button 
        on:click={toggleDocs} 
        class="mb-8 w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        Collapse technical specification ↑
      </button>

      <div class="prose prose-lg max-w-none"
        style="
          --tw-prose-headings: var(--color-page-text);
          --tw-prose-body: var(--color-page-text);
          --tw-prose-bold: var(--color-page-text);
          --tw-prose-links: var(--color-page-accent);
          --tw-prose-quotes: var(--color-page-text);
          --tw-prose-code: var(--color-page-text);
          --tw-prose-pre-bg: var(--color-card-bg);
          --tw-prose-pre-code: #1a1a1a;
        ">
        <SpecV0_3 />
      </div>

      <div class="mt-12 flex justify-center border-t border-[var(--color-separator)] pt-8">
         <a 
           href="/pdfs/india-dpi-2.0-v0.3.pdf" 
           target="_blank"
           class="text-sm font-medium transition-opacity hover:opacity-70"
           style="color: var(--color-page-text);"
         >
            Download Full Specification (PDF)
         </a>
      </div>
    {/if}
  </section>

</main>
