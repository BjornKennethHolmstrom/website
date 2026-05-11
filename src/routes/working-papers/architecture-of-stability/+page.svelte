<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT MARKDOWN SECTIONS (English only for now, Swedish commented for future) ---
  
  // Executive Summary
  import ExecutiveSummaryEn from './sections/executive-summary.md';
  // import ExecutiveSummarySv from './sections/executive-summary-sv.md';

  // Parts 1-7
  import Part1En from './sections/part-1.md';
  // import Part1Sv from './sections/part-1-sv.md';
  
  import Part2En from './sections/part-2.md';
  // import Part2Sv from './sections/part-2-sv.md';
  
  import Part3En from './sections/part-3.md';
  // import Part3Sv from './sections/part-3-sv.md';
  
  import Part4En from './sections/part-4.md';
  // import Part4Sv from './sections/part-4-sv.md';
  
  import Part5En from './sections/part-5.md';
  // import Part5Sv from './sections/part-5-sv.md';
  
  import Part6En from './sections/part-6.md';
  // import Part6Sv from './sections/part-6-sv.md';
  
  import Part7En from './sections/part-7.md';
  // import Part7Sv from './sections/part-7-sv.md';

  // Appendices A-E
  import AppendixAEn from './sections/appendix-a.md';
  // import AppendixASv from './sections/appendix-a-sv.md';
  
  import AppendixBEn from './sections/appendix-b.md';
  // import AppendixBSv from './sections/appendix-b-sv.md';
  
  import AppendixCEn from './sections/appendix-c.md';
  // import AppendixCSv from './sections/appendix-c-sv.md';
  
  import AppendixDEn from './sections/appendix-d.md';
  // import AppendixDSv from './sections/appendix-d-sv.md';
  
  import AppendixEEn from './sections/appendix-e.md';
  // import AppendixESv from './sections/appendix-e-sv.md';

  // --- 2. DEFINE CONTENT STRUCTURE ---
  const contentMap = [
    { 
      id: 'executive-summary', 
      titleEn: 'Executive Summary',
      // titleSv: 'Sammanfattning',
      compEn: ExecutiveSummaryEn,
      // compSv: ExecutiveSummarySv
    },
    { 
      id: 'part-1', 
      titleEn: 'Part I: The Bandwidth Problem',
      // titleSv: 'Del I: Bandbreddsproblemet',
      compEn: Part1En,
      // compSv: Part1Sv
    },
    { 
      id: 'part-2', 
      titleEn: 'Part II: The Six-Layer Model of Systemic Power',
      // titleSv: 'Del II: Sexlagersmodellen för systemisk makt',
      compEn: Part2En,
      // compSv: Part2Sv
    },
    { 
      id: 'part-3', 
      titleEn: 'Part III: The Physics of Failure',
      // titleSv: 'Del III: Misslyckandets fysik',
      compEn: Part3En,
      // compSv: Part3Sv
    },
    { 
      id: 'part-4', 
      titleEn: 'Part IV: The Protocol of Resilience',
      // titleSv: 'Del IV: Resiliensprotokollet',
      compEn: Part4En,
      // compSv: Part4Sv
    },
    { 
      id: 'part-5', 
      titleEn: 'Part V: The Sweden Prototype',
      // titleSv: 'Del V: Sverige som prototyp',
      compEn: Part5En,
      // compSv: Part5Sv
    },
    { 
      id: 'part-6', 
      titleEn: 'Part VI: Implications and Generalizations',
      // titleSv: 'Del VI: Implikationer och generaliseringar',
      compEn: Part6En,
      // compSv: Part6Sv
    },
    { 
      id: 'part-7', 
      titleEn: 'Part VII: Conclusion',
      // titleSv: 'Del VII: Slutsats',
      compEn: Part7En,
      // compSv: Part7Sv
    },
    { 
      id: 'appendix-a', 
      titleEn: 'Appendix A: Mathematical Formulations',
      // titleSv: 'Appendix A: Matematiska formuleringar',
      compEn: AppendixAEn,
      // compSv: AppendixASv
    },
    { 
      id: 'appendix-b', 
      titleEn: 'Appendix B: The Fractal Constitution (Full Text)',
      // titleSv: 'Appendix B: Den fraktala konstitutionen (fulltext)',
      compEn: AppendixBEn,
      // compSv: AppendixBSv
    },
    { 
      id: 'appendix-c', 
      titleEn: 'Appendix C: The Insändare (Swedish Original + English Translation)',
      // titleSv: 'Appendix C: Insändaren (svensk original + engelsk översättning)',
      compEn: AppendixCEn,
      // compSv: AppendixCSv
    },
    { 
      id: 'appendix-d', 
      titleEn: 'Appendix D: Glossary of Terms',
      // titleSv: 'Appendix D: Ordlista',
      compEn: AppendixDEn,
      // compSv: AppendixDSv
    },
    { 
      id: 'appendix-e', 
      titleEn: 'Appendix E: Further Reading',
      // titleSv: 'Appendix E: Vidare läsning',
      compEn: AppendixEEn,
      // compSv: AppendixESv
    }
  ];

  // --- 3. LOCAL TRANSLATIONS (English only for now) ---
  const ui = {
    en: {
      tag: 'Whitepaper',
      contextTitle: 'Context',
      contextIntro: 'This whitepaper presents a systems-theoretic framework for understanding power and designing governance architectures. It integrates control theory, network science, information theory, and constitutional design into a unified model for diagnosing instability and prescribing resilient solutions.',
      relatedWork: 'Related Frameworks:',
      gsiLink: 'Global Subsidiarity Index',
      contextOutro: 'The core thesis: centralized governance with time delay is mathematically unstable under complexity. The solution: fractal subsidiarity. Sweden as prototype.',
      allWhitepapers: '← All Whitepapers',
      share: 'Share this whitepaper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewDiagram: 'View Full Constitution',
      citeThis: 'Cite This Work'
    }
    // Swedish UI commented out for future expansion
    // sv: {
    //   tag: 'Vitbok',
    //   contextTitle: 'Kontext',
    //   contextIntro: 'Denna vitbok presenterar ett systemteoretiskt ramverk för att förstå makt och utforma styrelseskick. Den integrerar reglerteori, nätverksvetenskap, informationsteori och konstitutionell design i en enhetlig modell för att diagnostisera instabilitet och föreslå resilienta lösningar.',
    //   relatedWork: 'Relaterade ramverk:',
    //   gsiLink: 'Global Subsidiarity Index',
    //   contextOutro: 'Kärntesen: centraliserad styrning med tidsfördröjning är matematiskt instabil under komplexitet. Lösningen: fraktal subsidiaritet. Sverige som prototyp.',
    //   allWhitepapers: '← Alla vitböcker',
    //   share: 'Dela denna vitbok',
    //   downloads: 'Nedladdningar',
    //   downloadPDF: 'Ladda ner PDF',
    //   viewDiagram: 'Visa fullständig konstitution',
    //   citeThis: 'Citera detta arbete'
    // }
  };

  // --- 4. REACTIVE LOGIC ---
  let activeSection = $state('executive-summary');
  
  // Force English for now, but keep language store for future
  let t = $derived(ui.en);

  let pdfFilename = $derived('architecture-of-stability.pdf');

  const metadata = {
    en: {
      title: "The Architecture of Stability",
      subtitle: "A Systems-Theoretic Framework for Power and Governance",
      description: "Integrating control theory, network science, and constitutional design to diagnose governance instability and prescribe fractal subsidiarity as the solution.",
    }
    // Swedish metadata commented for future
    // sv: {
    //   title: "Stabilitetens Arkitektur",
    //   subtitle: "Ett systemteoretiskt ramverk för makt och styrelseskick",
    //   description: "Integrering av reglerteori, nätverksvetenskap och konstitutionell design för att diagnostisera styrelseinstabilitet och föreslå fraktal subsidiaritet som lösning.",
    // }
  };

  let meta = $derived(metadata.en);

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Citation function
  function copyCitation() {
    const citation = `Holmström, B. K. (2026). The Architecture of Stability: A Systems-Theoretic Framework for Power and Governance. Project Janus Whitepaper Series.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert('Citation copied to clipboard!');
    });
  }
</script>

<!--<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">
</svelte:head> -->

<SEO
  title="{meta.title} | Project Janus Whitepaper"
  description={meta.description}
  type="article"
  publishedTime="2026-02"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  
  <!-- Left Sidebar -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWhitepapers}
      </a>
    </div>

    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a 
          href="/working-papers/{pdfFilename}" 
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.downloadPDF}
        </a>
        <button
          onclick={copyCitation}
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline w-full text-left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {t.citeThis}
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="space-y-1">
      {#each contentMap as section}
        <button
          onclick={() => scrollTo(section.id)}
          class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
          {activeSection === section.id 
            ? 'bg-[var(--color-page-accent)] text-white font-medium shadow-sm' 
            : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-70 hover:opacity-100'}"
        >
          {section.titleEn}
        </button>
      {/each}
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 min-w-0 px-4 pt-16 pb-24">
    
    <header class="mb-12 text-center lg:text-left">
      <div class="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
        style="background-color: var(--color-card-bg); color: var(--color-page-accent);">
        {t.tag}
      </div>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
        {meta.title}
      </h1>
      <p class="text-xl md:text-2xl opacity-70 font-light leading-relaxed" style="color: var(--color-page-text);">
        {meta.subtitle}
      </p>
    </header>

    <!-- Context Card -->
    <div class="mb-16 p-8 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-sm">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.contextTitle}</h3>
      <div class="prose prose-sm max-w-none" style="--tw-prose-body: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
        <p class="text-base">{t.contextIntro}</p>
        
        <div class="flex flex-wrap gap-4 my-6">
          <span class="text-sm font-bold opacity-70">{t.relatedWork}</span>
          <a 
            href="https://www.svensksubsidiaritet.se/ramverk/gsi/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-sm hover:underline"
          >
            {t.gsiLink}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>

        <p class="mt-4 opacity-80 leading-relaxed">
          {t.contextOutro}
        </p>
        
        <div class="mt-6 pt-4 border-t border-[var(--color-separator)]">
          <a 
            href="#appendix-b" 
            onclick={() => scrollTo('appendix-b')}
            class="font-bold hover:underline flex items-center gap-1"
          >
            {t.viewDiagram}
          </a>
        </div>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="space-y-16">
      {#each contentMap as section}
        <div id={section.id} class="scroll-mt-24">
            <article class="prose prose-lg max-w-none"
                style="
                  --tw-prose-headings: var(--color-page-text); 
                  --tw-prose-body: var(--color-page-text); 
                  --tw-prose-bold: var(--color-page-text); 
                  --tw-prose-links: var(--color-page-accent);
                  --tw-prose-quotes: var(--color-page-text);
                ">
                <svelte:component this={section.compEn} />
            </article>
        </div>
        {#if section.id !== 'appendix-e'}
            <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share Buttons -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
