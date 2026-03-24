<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';

  // Import your markdown file as a Svelte component
  import ITL_Protocol from './sections/v0.3.md';

  // State for progressive disclosure
  let showTechnicalDocs = false;

  function toggleDocs() {
    showTechnicalDocs = !showTechnicalDocs;
  }
</script>

<SEO 
  title="Informal Trust Ledger (ITL) | Africa Pilot" 
  description="A DPI-compatible coordination protocol for the African informal economy." 
/>

<main class="mx-auto max-w-4xl px-6 py-16">
  
  <header class="mb-12">
    <div class="mb-3 inline-block rounded-full bg-[var(--color-separator)] px-3 py-1 text-xs font-semibold tracking-wide" style="color: var(--color-page-text);">
      AFRICAN DPI PILOT
    </div>
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl" style="color: var(--color-page-text);">
      Informal Trust Ledger (ITL)
    </h1>
    <p class="text-xl leading-relaxed opacity-80" style="color: var(--color-page-text);">
      A mobile-native reputation and coordination protocol for the African informal economy.
    </p>
  </header>

  <section class="prose prose-lg mb-16 max-w-none"
    style="
      --tw-prose-body: var(--color-page-text);
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
    ">
    <h2>The formalization friction</h2>
    <p>
      The African meta-region possesses the most dynamic economic network in the world: the informal economy, accounting for roughly 80% of continental employment. However, current Digital Public Infrastructure (DPI) initiatives often attempt to force these actors into rigid "formalization" (mandatory tax IDs, centralized banking) as a prerequisite for digital coordination. 
    </p>

    <h2>A Layer 2 Reputation Oracle</h2>
    <p>
      The Informal Trust Ledger (ITL) provides the missing architectural layer. It is a USSD-native, zero-knowledge protocol that allows informal actors to build verifiable reputational capital <em>beneath</em> the threshold of formal banking systems.
    </p>
    <p>
      By functioning strictly as a reputation oracle (it does not hold currency or process financial transactions), it sits cleanly alongside existing mobile money infrastructure like M-Pesa. <strong>It formalizes trust without prematurely formalizing the actor.</strong>
    </p>
  </section>

  <section class="mb-16 rounded-xl border border-[var(--color-separator)] p-8 shadow-sm" style="background-color: var(--color-card-bg);">
    <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-page-text);">Core briefing materials</h2>
    
    <div class="mb-8 overflow-hidden rounded-lg border border-[var(--color-separator)] bg-[#f8fafc] p-4">
       <img src="/images/itl-architecture.svg" alt="ITL Architecture Map" class="w-full h-auto" />
    </div>

    <div class="flex flex-col gap-4 sm:flex-row">
      <a 
        href="/pdfs/informal-trust-ledger-v0.3.pdf" 
        target="_blank" 
        class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-card-text);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        ITL Specification v0.3 (PDF)
      </a>
      <a 
        href="/pdfs/itl-architecture.pdf" 
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
        <h2 class="text-3xl font-bold" style="color: var(--color-page-text);">Technical documentation</h2>
        <p class="mt-2 opacity-80" style="color: var(--color-page-text);">Full protocol specification and sandbox deployment matrix.</p>
      </div>
      
      <a 
        href="/pdfs/informal-trust-ledger-v0.3.pdf" 
        target="_blank"
        class="flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-page-text)] px-5 py-2.5 text-sm font-semibold text-[var(--color-card-bg)] transition-opacity hover:opacity-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Download Specification
      </a>
    </div>

    {#if !showTechnicalDocs}
      <button 
        on:click={toggleDocs} 
        class="w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        Expand full technical protocol ↓
      </button>
    {:else}
      <button 
        on:click={toggleDocs} 
        class="mb-8 w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        Collapse technical documentation ↑
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
        <ITL_Protocol />
      </div>

      <div class="mt-12 flex justify-center border-t border-[var(--color-separator)] pt-8">
         <a 
           href="/pdfs/informal-trust-ledger-v0.3.pdf" 
           target="_blank"
           class="text-sm font-medium transition-opacity hover:opacity-70"
           style="color: var(--color-page-text);"
         >
            Download Specification (PDF)
         </a>
      </div>
    {/if}
  </section>

</main>
