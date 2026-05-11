<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { base } from '$app/paths';

  // --- 1. IMPORT ALL MARKDOWN SECTIONS ---
  // Abstract
  import AbstractEn from './sections/00-abstract-en.md';
  import AbstractSv from './sections/00-abstract-sv.md';
  // 1. Introduction
  import IntroEn from './sections/01-intro-en.md';
  import IntroSv from './sections/01-intro-sv.md';
  // 2. The Project Janus Framework
  import FrameworkEn from './sections/02-framework-en.md';
  import FrameworkSv from './sections/02-framework-sv.md';
  // 3. Multi-Domain Diagnosis
  import DiagnosisEn from './sections/03-diagnosis-en.md';
  import DiagnosisSv from './sections/03-diagnosis-sv.md';
  // 4. Why Current Interventions Fail
  import FailuresEn from './sections/04-failures-en.md';
  import FailuresSv from './sections/04-failures-sv.md';
  // 5. Minimum Viable Civilizational Rehab
  import RehabEn from './sections/05-rehab-en.md';
  import RehabSv from './sections/05-rehab-sv.md';
  // 6. Research Agenda
  import ResearchEn from './sections/06-research-en.md';
  import ResearchSv from './sections/06-research-sv.md';
  // 7. Conclusion
  import ConclusionEn from './sections/07-conclusion-en.md';
  import ConclusionSv from './sections/07-conclusion-sv.md';
  // Appendices
  import AppendicesEn from './sections/08-appendices-en.md';
  import AppendicesSv from './sections/08-appendices-sv.md';

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
      id: 'intro', 
      titleEn: '1. Introduction', 
      titleSv: '1. Introduktion',
      compEn: IntroEn, 
      compSv: IntroSv 
    },
    { 
      id: 'framework', 
      titleEn: '2. The Project Janus Framework', 
      titleSv: '2. Ramverket Project Janus',
      compEn: FrameworkEn, 
      compSv: FrameworkSv 
    },
    { 
      id: 'diagnosis', 
      titleEn: '3. Multi-Domain Diagnosis', 
      titleSv: '3. Diagnos över flera domäner',
      compEn: DiagnosisEn, 
      compSv: DiagnosisSv 
    },
    { 
      id: 'failures', 
      titleEn: '4. Why Interventions Fail', 
      titleSv: '4. Varför interventioner misslyckas',
      compEn: FailuresEn, 
      compSv: FailuresSv 
    },
    { 
      id: 'rehab', 
      titleEn: '5. Civilizational Rehab', 
      titleSv: '5. Civilisatorisk rehabilitering',
      compEn: RehabEn, 
      compSv: RehabSv 
    },
    { 
      id: 'research', 
      titleEn: '6. Research Agenda', 
      titleSv: '6. Forskningsagenda',
      compEn: ResearchEn, 
      compSv: ResearchSv 
    },
    { 
      id: 'conclusion', 
      titleEn: '7. Conclusion', 
      titleSv: '7. Slutsats',
      compEn: ConclusionEn, 
      compSv: ConclusionSv 
    },
    { 
      id: 'appendices', 
      titleEn: 'Appendices', 
      titleSv: 'Bilagor',
      compEn: AppendicesEn, 
      compSv: AppendicesSv 
    }
  ];

  // --- 3. LOCAL TRANSLATIONS ---
  const ui = {
    en: {
      tag: 'White Paper',
      contextTitle: 'Context',
      contextIntro: 'This white paper emerges from a three-part blog series exploring the loss of presence in modern life:',
      blog1: 'I Lost the Ability to Just Be',
      blog2: 'Cognitive Scaffolding for Stillness',
      blog3: 'From Personal Practice to Civilizational Rehab',
      contextOutro: 'Where the blog series offered accessible narrative, this paper provides the rigorous multi-domain framework proving the diagnosis and deriving specific interventions.',
      readBlog: 'Read the blog series:',
      exploreGGF: 'Explore the Global Governance Frameworks',
      allWhitepapers: '← All Whitepapers',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadEn: 'Download PDF (English)',
      downloadSv: 'Download PDF (Swedish)'
    },
    sv: {
      tag: 'White Paper',
      contextTitle: 'Kontext',
      contextIntro: 'Detta white paper växte fram ur en bloggserie i tre delar som utforskade förlusten av närvaro i det moderna livet:',
      blog1: 'Jag förlorade förmågan att bara vara',
      blog2: 'Kognitiva byggnadsställningar för stillhet',
      blog3: 'Från personlig praktik till civilisatorisk rehab',
      contextOutro: 'Där bloggserien erbjöd tillgängligt berättande, erbjuder detta dokument det rigorösa ramverk som bevisar diagnosen och härleder specifika interventioner.',
      readBlog: 'Läs bloggserien:',
      exploreGGF: 'Utforska Global Governance Frameworks',
      allWhitepapers: '← Alla White Papers',
      share: 'Dela detta dokument',
      downloads: 'Nedladdningar',
      downloadEn: 'Ladda ner PDF (Engelska)',
      downloadSv: 'Ladda ner PDF (Svenska)'
    }
  };

  // --- 4. REACTIVE LOGIC ---
  let activeSection = $state('abstract');
  let t = $derived($language === 'sv' ? ui.sv : ui.en);

  const metadata = {
    en: {
      title: "Addiction as Integration Failure",
      subtitle: "A Multi-Domain Framework for Understanding Civilizational Compulsion",
      description: "A rigorous analysis applying Project Janus to the crisis of attention.",
    },
    sv: {
      title: "Beroende som integrationsmisslyckande",
      subtitle: "Ett multidomän-ramverk för att förstå civilisatoriskt tvång",
      description: "En rigorös analys som applicerar Project Janus på uppmärksamhetskrisen.",
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
  publishedTime="2025-11"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">
  
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <div class="mb-8">
      <a href="/working-papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allWhitepapers}
      </a>
    </div>

    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a 
          href="/working-papers/addiction-as-integration-failure.pdf" 
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.downloadEn}
        </a>
        <a 
          href="/working-papers/addiction-as-integration-failure-sv.pdf" 
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.downloadSv}
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
        <ol class="list-decimal pl-5 space-y-1 my-4 font-medium">
          <li><a href="{base}/blog/2025-11-26-i-lost-the-ability-to-just-be">{t.blog1}</a></li>
          <li><a href="{base}/blog/2025-11-28-cognitive-scaffolding-for-stillness">{t.blog2}</a></li>
          <li><a href="{base}/blog/2025-11-30-from-personal-practice-to-civilizational-rehab">{t.blog3}</a></li>
        </ol>
        <p class="mt-4 opacity-80 leading-relaxed">
          {t.contextOutro}
        </p>
        <div class="mt-6 pt-4 border-t border-[var(--color-separator)]">
            <a href="https://www.globalgovernanceframeworks.org" target="_blank" class="font-bold hover:underline">
                {t.exploreGGF} →
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
                
                <svelte:component this={$language === 'sv' ? section.compSv : section.compEn} />
            
            </article>
        </div>
        {#if section.id !== 'appendices'}
            <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
