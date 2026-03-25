<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';

  // Import your markdown files as Svelte components
  import ProtocolV1_2 from './sections/v1.2.md';
  import AnnexA from './sections/annex-a-gsi-framework-v5.md';
  import AnnexB from './sections/annex-b-actuation-layer.md';

  // State for progressive disclosure
  let showTechnicalDocs = false;

  function toggleDocs() {
    showTechnicalDocs = !showTechnicalDocs;
  }
</script>

<SEO 
  title="European Subsidiarity Protocol" 
  description="A deployment-ready framework for reducing governance latency in the European Union." 
/>

<main class="mx-auto max-w-4xl px-6 py-16">
  
  <header class="mb-12">
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl" style="color: var(--color-page-text);">
      European Subsidiarity Protocol
    </h1>
    <p class="text-xl leading-relaxed opacity-80" style="color: var(--color-page-text);">
      A deployment-ready framework for reducing governance latency in the European Union.
    </p>
  </header>

  <section class="prose prose-lg mb-16 max-w-none"
    style="
      --tw-prose-body: var(--color-page-text);
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
    ">
    <h2>The structural challenge</h2>
    <p>
      The European Union is the most advanced polycentric governance system in the world. However, as highlighted in the Draghi report on competitiveness, managing 27 diverse economies through uniform regulation creates severe <strong>governance latency</strong>—a structural mismatch between where knowledge exists and where decisions are made.
    </p>
    <p>
      This is not a failure of subsidiarity as a constitutional principle; it is a failure of measurement. Today, subsidiarity is politically interpreted, but it is not empirically diagnosed.
    </p>

    <h2>The operational upgrade</h2>
    <p>
      The European Subsidiarity Protocol provides the missing empirical layer. It does not replace existing EU mechanisms like the Early Warning System or REFIT; it upgrades them from political arguments to evidence-based instruments.
    </p>
    <p>
      By introducing the <strong>Global Subsidiarity Index (GSI)</strong>, the protocol allows institutions to mathematically measure where policy decisions should be routed, balancing local capacity with the need for European interoperability.
    </p>
  </section>

  <section class="mb-16 rounded-xl border border-[var(--color-separator)] p-8 shadow-sm" style="background-color: var(--color-card-bg);">
    <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-page-text);">Core briefing materials</h2>
    <div class="flex flex-col gap-4 sm:flex-row">
      <a 
        href="/pdfs/european-subsidiarity-protocol-executive-briefing.pdf" 
        target="_blank" 
        class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-card-text);"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Executive Briefing (PDF)
      </a>
      <a 
        href="/pdfs/european-subsidiarity-protocol-architecture-map.pdf" 
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
        <p class="mt-2 opacity-80" style="color: var(--color-page-text);">Full specifications for the diagnostic engine and actuation layer.</p>
      </div>
      
      <a 
        href="/pdfs/european-subsidiarity-protocol-v1.2-full.pdf" 
        target="_blank"
        class="flex shrink-0 items-center gap-2 rounded-md bg-[var(--color-page-text)] px-5 py-2.5 text-sm font-semibold text-[var(--color-card-bg)] transition-opacity hover:opacity-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        Download Complete Technical Package
      </a>
    </div>

    {#if !showTechnicalDocs}
      <button 
        on:click={toggleDocs} 
        class="w-full rounded-md border border-[var(--color-separator)] py-4 text-center font-medium transition-colors hover:bg-[var(--color-separator)]" 
        style="color: var(--color-page-text);"
      >
        Expand full technical protocol & annexes ↓
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
        <ProtocolV1_2 />
        <hr class="my-16 border-[var(--color-separator)]" />
        <AnnexA />
        <hr class="my-16 border-[var(--color-separator)]" />
        <AnnexB />
      </div>

      <div class="mt-12 flex justify-center border-t border-[var(--color-separator)] pt-8">
         <a 
           href="/pdfs/european-subsidiarity-protocol-v1.2-full.pdf" 
           target="_blank"
           class="text-sm font-medium transition-opacity hover:opacity-70"
           style="color: var(--color-page-text);"
         >
            Download Complete Technical Package (PDF)
         </a>
      </div>
    {/if}
  </section>

</main>
