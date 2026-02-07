<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT MARKDOWN SECTIONS (English & Swedish) ---
  
  // Abstract
  import AbstractEn from './sections/abstract.md';
  import AbstractSv from './sections/abstract-sv.md';

  // Sections 1-9
  import Section1En from './sections/section-01.md';
  import Section1Sv from './sections/section-01-sv.md';

  import Section2En from './sections/section-02.md';
  import Section2Sv from './sections/section-02-sv.md';

  import Section3En from './sections/section-03.md';
  import Section3Sv from './sections/section-03-sv.md';

  import Section4En from './sections/section-04.md';
  import Section4Sv from './sections/section-04-sv.md';

  import Section5En from './sections/section-05.md';
  import Section5Sv from './sections/section-05-sv.md';

  import Section6En from './sections/section-06.md';
  import Section6Sv from './sections/section-06-sv.md';

  import Section7En from './sections/section-07.md';
  import Section7Sv from './sections/section-07-sv.md';

  import Section8En from './sections/section-08.md';
  import Section8Sv from './sections/section-08-sv.md';

  import Section9En from './sections/section-09.md';
  import Section9Sv from './sections/section-09-sv.md';

  // Appendices
  import AppendixAEn from './sections/appendix-a.md';
  import AppendixASv from './sections/appendix-a-sv.md';

  import AppendixBEn from './sections/appendix-b.md';
  import AppendixBSv from './sections/appendix-b-sv.md';

  import AppendixCEn from './sections/appendix-c.md';
  import AppendixCSv from './sections/appendix-c-sv.md';

  // Back matter
  import AcknowledgementsEn from './sections/acknowledgements.md';
  import AcknowledgementsSv from './sections/acknowledgements-sv.md';

  import ReferencesEn from './sections/references.md';
  import ReferencesSv from './sections/references-sv.md';

  // --- 2. DEFINE CONTENT STRUCTURE ---
  const contentMap = [
    { 
      id: 'abstract', 
      titleEn: 'Abstract', 
      titleSv: 'Sammanfattning',
      compEn: AbstractEn,
      compSv: AbstractSv
    },
    { 
      id: 'section-1', 
      titleEn: '1. Introduction: The Problem of Integration', 
      titleSv: '1. Introduktion: Integrationsproblemet',
      compEn: Section1En,
      compSv: Section1Sv
    },
    { 
      id: 'section-2', 
      titleEn: '2. Conceptual Foundations', 
      titleSv: '2. Konceptuella grunder',
      compEn: Section2En,
      compSv: Section2Sv
    },
    { 
      id: 'section-3', 
      titleEn: '3. The Fractal-Cybernetic Model: Core Synthesis', 
      titleSv: '3. Den fraktala-kybernetiska modellen: Kärnsyntes',
      compEn: Section3En,
      compSv: Section3Sv
    },
    { 
      id: 'section-4', 
      titleEn: '4. The Awareness-Focus Dynamic', 
      titleSv: '4. Medvetande-fokus dynamiken',
      compEn: Section4En,
      compSv: Section4Sv
    },
    { 
      id: 'section-5', 
      titleEn: '5. Revisiting Key Mystical Questions', 
      titleSv: '5. Nyansering av nyckelmystiska frågor',
      compEn: Section5En,
      compSv: Section5Sv
    },
    { 
      id: 'section-6', 
      titleEn: '6. Testable Implications and Research Proposals', 
      titleSv: '6. Testbara implikationer och forskningsförslag',
      compEn: Section6En,
      compSv: Section6Sv
    },
    { 
      id: 'section-7', 
      titleEn: '7. Philosophical and Existential Implications', 
      titleSv: '7. Filosofiska och existentiella implikationer',
      compEn: Section7En,
      compSv: Section7Sv
    },
    { 
      id: 'section-8', 
      titleEn: '8. Limitations and Future Directions', 
      titleSv: '8. Begränsningar och framtida riktningar',
      compEn: Section8En,
      compSv: Section8Sv
    },
    { 
      id: 'section-9', 
      titleEn: '9. Conclusion: Toward a Unified Science of Awakening', 
      titleSv: '9. Slutsats: Mot en enhetlig vetenskap om uppvaknande',
      compEn: Section9En,
      compSv: Section9Sv
    },
    { 
      id: 'appendix-a', 
      titleEn: 'Appendix A: Glossary of Key Terms', 
      titleSv: 'Appendix A: Ordlista med nyckeltermer',
      compEn: AppendixAEn,
      compSv: AppendixASv
    },
    { 
      id: 'appendix-b', 
      titleEn: 'Appendix B: The Fractal-Cybernetic Consciousness Map', 
      titleSv: 'Appendix B: Den fraktala-kybernetiska medvetandekartan',
      compEn: AppendixBEn,
      compSv: AppendixBSv
    },
    { 
      id: 'appendix-c', 
      titleEn: 'Appendix C: Meditative Exercises Based on the Model', 
      titleSv: 'Appendix C: Meditativa övningar baserade på modellen',
      compEn: AppendixCEn,
      compSv: AppendixCSv
    },
    { 
      id: 'acknowledgements', 
      titleEn: 'Acknowledgements', 
      titleSv: 'Tack',
      compEn: AcknowledgementsEn,
      compSv: AcknowledgementsSv
    },
    { 
      id: 'references', 
      titleEn: 'References', 
      titleSv: 'Referenser',
      compEn: ReferencesEn,
      compSv: ReferencesSv
    }
  ];

  // --- 3. LOCAL TRANSLATIONS ---
  const ui = {
    en: {
      tag: 'Whitepaper',
      contextTitle: 'Context',
      contextIntro: 'This whitepaper proposes the Fractal-Cybernetic Model of Consciousness, synthesizing Ashby\'s Law of Requisite Variety, Mandelbrot\'s fractal geometry, and nondual mysticism into a unified framework for understanding consciousness evolution.',
      relatedWork: 'Related Frameworks:',
      janusLink: 'Project Janus Core',
      spiralDynamicsLink: 'Spiral Dynamics',
      contextOutro: 'It offers testable predictions, practical meditative exercises, and a philosophical foundation for a unified science of awakening.',
      allWhitepapers: '← All Whitepapers',
      share: 'Share this whitepaper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewDiagram: 'View Full Diagram',
      citeThis: 'Cite This Work'
    },
    sv: {
      tag: 'Vitbok',
      contextTitle: 'Kontext',
      contextIntro: 'Denna vitbok föreslår den Fraktala-Kybernetiska Medvetandemodellen, som syntetiserar Ashbys lag om nödvändig mångfald, Mandelbrots fraktalgeometri och icke-dualistisk mysticism till ett enhetligt ramverk för att förstå medvetandets evolution.',
      relatedWork: 'Relaterade ramverk:',
      janusLink: 'Project Janus Kärna',
      spiralDynamicsLink: 'Spiral Dynamics',
      contextOutro: 'Den erbjuder testbara förutsägelser, praktiska meditativa övningar och en filosofisk grund för en enhetlig vetenskap om uppvaknande.',
      allWhitepapers: '← Alla vitböcker',
      share: 'Dela denna vitbok',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      viewDiagram: 'Visa fullständigt diagram',
      citeThis: 'Citera detta arbete'
    }
  };

  // --- 4. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let t = $derived($language === 'sv' ? ui.sv : ui.en);

  let pdfFilename = $derived(
    $language === 'sv' 
      ? 'fractal-cybernetic-consciousness-sv.pdf' 
      : 'fractal-cybernetic-consciousness.pdf'
  );

  const metadata = {
    en: {
      title: "The Fractal-Cybernetic Model of Consciousness",
      subtitle: "Integrating Requisite Variety, Fractality, and Nondual Realization",
      description: "A transdisciplinary framework bridging cybernetics, fractal geometry, and contemplative science to explain consciousness evolution toward awakening.",
    },
    sv: {
      title: "Den Fraktala-Kybernetiska Medvetandemodellen",
      subtitle: "Integrering av nödvändig mångfald, fraktalitet och icke-dual realisering",
      description: "Ett tvärvetenskapligt ramverk som förenar kybernetik, fraktalgeometri och kontemplativ vetenskap för att förklara medvetandets evolution mot uppvaknande.",
    }
  };

  let meta = $derived($language === 'sv' ? metadata.sv : metadata.en);

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Citation function
  function copyCitation() {
    const citation = `Holmström, B. K. (2025). The Fractal-Cybernetic Model of Consciousness: Integrating Requisite Variety, Fractality, and Nondual Realization. Project Janus Whitepaper Series.`;
    navigator.clipboard.writeText(citation).then(() => {
      alert('Citation copied to clipboard!');
    });
  }
</script>

<SEO
  title="{meta.title} | Project Janus Whitepaper"
  description={meta.description}
  type="article"
  publishedTime="2025-12"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/whitepapers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWhitepapers}
      </a>
    </div>

    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a 
          href="/whitepapers/{pdfFilename}" 
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

    <nav class="space-y-1">
      {#each contentMap as section}
        <button
          onclick={() => scrollTo(section.id)}
          class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
          {activeSection === section.id 
            ? 'bg-[var(--color-page-accent)] text-white font-medium shadow-sm' 
            : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-70 hover:opacity-100'}"
        >
          {$language === 'sv' ? section.titleSv : section.titleEn}
        </button>
      {/each}
    </nav>
  </aside>

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

    <div class="mb-16 p-8 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-sm">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.contextTitle}</h3>
      <div class="prose prose-sm max-w-none" style="--tw-prose-body: var(--color-page-text); --tw-prose-links: var(--color-page-accent);">
        <p class="text-base">{t.contextIntro}</p>
        
        <div class="flex flex-wrap gap-4 my-6">
          <span class="text-sm font-bold opacity-70">{t.relatedWork}</span>
          <a href="https://github.com/BjornKennethHolmstrom/ProjectJanus" target="_blank" class="text-sm hover:underline">{t.janusLink}</a>
          <a 
            href="https://www.spiralize.org" 
            class="text-sm hover:underline"
          >
            {t.spiralDynamicsLink}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>

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
                {#if $language === 'sv'}
                  <svelte:component this={section.compSv} />
                {:else}
                  <svelte:component this={section.compEn} />
                {/if}
            </article>
        </div>
        {#if section.id !== 'references'}
            <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
