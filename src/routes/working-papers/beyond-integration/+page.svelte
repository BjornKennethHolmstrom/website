<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { base } from '$app/paths';

  // --- 1. IMPORT MARKDOWN SECTIONS (English & Swedish) ---
  
  // Part 0
  import Part0En from './sections/part-0.md';
  import Part0Sv from './sections/part-0-sv.md';

  // Part 1
  import Part1En from './sections/part-1.md';
  import Part1Sv from './sections/part-1-sv.md';

  // Part 2
  import Part2En from './sections/part-2.md';
  import Part2Sv from './sections/part-2-sv.md';

  // Part 3
  import Part3En from './sections/part-3.md';
  import Part3Sv from './sections/part-3-sv.md';

  // Part 4
  import Part4En from './sections/part-4.md';
  import Part4Sv from './sections/part-4-sv.md';

  // Part 5
  import Part5En from './sections/part-5.md';
  import Part5Sv from './sections/part-5-sv.md';

  // Part 6
  import Part6En from './sections/part-6.md';
  import Part6Sv from './sections/part-6-sv.md';

  // Part 7
  import Part7En from './sections/part-7.md';
  import Part7Sv from './sections/part-7-sv.md';

  // Part 8
  import Part8En from './sections/part-8.md';
  import Part8Sv from './sections/part-8-sv.md';

  // Epilogue
  import EpilogueEn from './sections/epilogue.md';
  import EpilogueSv from './sections/epilogue-sv.md';

  // For parts that don't have Swedish translations yet, use English as fallback
  // (Already imported above with proper names)

  // --- 2. DEFINE CONTENT STRUCTURE ---
  const contentMap = [
    { 
      id: 'part-0', 
      titleEn: 'Part 0: The Aperture Opens', 
      titleSv: 'Del 0: Bländaren öppnas',
      compEn: Part0En,
      compSv: Part0Sv
    },
    { 
      id: 'part-1', 
      titleEn: 'Part I: The Problem', 
      titleSv: 'Del I: Problemet',
      compEn: Part1En,
      compSv: Part1Sv
    },
    { 
      id: 'part-2', 
      titleEn: 'Part II: The Aperture Theory', 
      titleSv: 'Del II: Bländarteorin',
      compEn: Part2En,
      compSv: Part2Sv
    },
    { 
      id: 'part-3', 
      titleEn: 'Part III: Historical and Cultural Context', 
      titleSv: 'Del III: Historisk och kulturell kontext',
      compEn: Part3En,
      compSv: Part3Sv
    },
    { 
      id: 'part-4', 
      titleEn: 'Part IV: The Janus Integration', 
      titleSv: 'Del IV: Janus-integrationen',
      compEn: Part4En,
      compSv: Part4Sv
    },
    { 
      id: 'part-5', 
      titleEn: 'Part V: Practical Implications', 
      titleSv: 'Del V: Praktiska implikationer',
      compEn: Part5En,
      compSv: Part5Sv
    },
    { 
      id: 'part-6', 
      titleEn: 'Part VI: Your Specific Question', 
      titleSv: 'Del VI: Din specifika fråga',
      compEn: Part6En,
      compSv: Part6Sv
    },
    { 
      id: 'part-7', 
      titleEn: 'Part VII: The Research Agenda', 
      titleSv: 'Del VII: Forskningsagendan',
      compEn: Part7En,
      compSv: Part7Sv
    },
    { 
      id: 'part-8', 
      titleEn: 'Part VIII: Conclusion', 
      titleSv: 'Del VIII: Slutsats',
      compEn: Part8En,
      compSv: Part8Sv
    },
    { 
      id: 'epilogue', 
      titleEn: 'Epilogue: A Walking Integration', 
      titleSv: 'Epilog: En vandrande integration',
      compEn: EpilogueEn,
      compSv: EpilogueSv
    }
  ];

  // --- 3. LOCAL TRANSLATIONS ---
  const ui = {
    en: {
      tag: 'Theoretical Essay',
      contextTitle: 'Context',
      contextIntro: 'This essay represents a foundational pivot in the Project Janus framework, integrating systems theory with nondual philosophy and lived experience of non-consensus reality.',
      relatedWork: 'Related Frameworks:',
      janusLink: 'Project Janus Core',
      omegaLink: 'The Omega Proof',
      contextOutro: 'It challenges the binary between "mental health" and "awakening" by proposing a systems-architecture model of consciousness as a selective filter.',
      exploreGGF: 'Explore the Global Governance Frameworks',
      allEssays: '← All White Papers',
      share: 'Share this essay',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF'
    },
    sv: {
      tag: 'Teoretisk Essä',
      contextTitle: 'Kontext',
      contextIntro: 'Denna essä representerar en grundläggande vändpunkt i Project Janus-ramverket, där systemteori integreras med icke-dualistisk filosofi och levd erfarenhet av icke-konsensusverklighet.',
      relatedWork: 'Relaterade ramverk:',
      janusLink: 'Project Janus Kärna',
      omegaLink: 'The Omega Proof',
      contextOutro: 'Den utmanar dikotomin mellan "mental hälsa" och "uppvaknande" genom att föreslå en systemarkitektonisk modell av medvetandet som ett selektivt filter.',
      exploreGGF: 'Utforska Global Governance Frameworks',
      allEssays: '← Alla artiklar',
      share: 'Dela denna essä',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF'
    }
  };

  // --- 4. REACTIVE LOGIC ---
  let activeSection = $state('part-0');
  let t = $derived($language === 'sv' ? ui.sv : ui.en);

  let pdfFilename = $derived(
    $language === 'sv' 
      ? 'beyond-integration-sv.pdf' 
      : 'beyond-integration.pdf'
  );

  const metadata = {
    en: {
      title: "Beyond Integration: Nonduality, Psychosis, and the Aperture Problem",
      subtitle: "A Framework for Modal Flexibility in Human Consciousness",
      description: "An exploration of consciousness as a compression algorithm, reframing psychosis and awakening through systems architecture.",
    },
    sv: {
      title: "Bortom Integration: Icke-dualism, Psykos och Bländarproblemet",
      subtitle: "Ett ramverk för modal flexibilitet i mänskligt medvetande",
      description: "En utforskning av medvetandet som en kompressionsalgoritm, som omformulerar psykos och uppvaknande genom systemarkitektur.",
    }
  };

  let meta = $derived($language === 'sv' ? metadata.sv : metadata.en);

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<SEO
  title="{meta.title} | Björn Kenneth Holmström"
  description={meta.description}
  type="article"
  publishedTime="2025-12"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allEssays}
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
            href="https://globalgovernanceframeworks.org/resources/working-papers/omega-proof" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-sm hover:underline flex items-center gap-1"
          >
            {t.omegaLink}
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
            href="https://www.globalgovernanceframeworks.org" 
            target="_blank" 
            rel="noopener noreferrer"
            class="font-bold hover:underline flex items-center gap-1"
          >
            {t.exploreGGF}
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
        {#if section.id !== 'epilogue'}
            <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
