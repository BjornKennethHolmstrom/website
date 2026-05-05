<!-- src/routes/reports/india-leap-lag-cycle/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, HI, TA)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/executive-summary.en.md';
  import ExecutiveSummaryHi from './sections/executive-summary.hi.md';
  import ExecutiveSummaryTa from './sections/executive-summary.ta.md';

  // 1. The Leap‑Lag Cycle
  import LeapLagCycleEn from './sections/01-leap-lag-cycle.en.md';
  import LeapLagCycleHi from './sections/01-leap-lag-cycle.hi.md';
  import LeapLagCycleTa from './sections/01-leap-lag-cycle.ta.md';

  // 2. The Synchronisation Deficit
  import SynchDeficitEn from './sections/02-synchronisation-deficit.en.md';
  import SynchDeficitHi from './sections/02-synchronisation-deficit.hi.md';
  import SynchDeficitTa from './sections/02-synchronisation-deficit.ta.md';

  // 3. Building Synchronisation Capacity
  import BuildingCapacityEn from './sections/03-building-synchronisation-capacity.en.md';
  import BuildingCapacityHi from './sections/03-building-synchronisation-capacity.hi.md';
  import BuildingCapacityTa from './sections/03-building-synchronisation-capacity.ta.md';

  // 4. The Political Immune System
  import PoliticalImmuneEn from './sections/04-political-immune-system.en.md';
  import PoliticalImmuneHi from './sections/04-political-immune-system.hi.md';
  import PoliticalImmuneTa from './sections/04-political-immune-system.ta.md';

  // 5. Working with the Grain: Transition Architecture
  import TransitionEn from './sections/05-transition-architecture.en.md';
  import TransitionHi from './sections/05-transition-architecture.hi.md';
  import TransitionTa from './sections/05-transition-architecture.ta.md';

  // 6. A Concrete First Step: Synchronisation Sandbox
  import SandboxEn from './sections/06-synchronisation-sandbox.en.md';
  import SandboxHi from './sections/06-synchronisation-sandbox.hi.md';
  import SandboxTa from './sections/06-synchronisation-sandbox.ta.md';

  // 7. Coda
  import CodaEn from './sections/07-coda.en.md';
  import CodaHi from './sections/07-coda.hi.md';
  import CodaTa from './sections/07-coda.ta.md';

  // Appendices
  import AppendixAEn from './sections/08-appendix-a.en.md';
  import AppendixAHi from './sections/08-appendix-a.hi.md';
  import AppendixATa from './sections/08-appendix-a.ta.md';
  import AppendixBEn from './sections/08-appendix-b.en.md';
  import AppendixBHi from './sections/08-appendix-b.hi.md';
  import AppendixBTa from './sections/08-appendix-b.ta.md';
  import AppendixCEn from './sections/08-appendix-c.en.md';
  import AppendixCHi from './sections/08-appendix-c.hi.md';
  import AppendixCTa from './sections/08-appendix-c.ta.md';
  import AppendixDEn from './sections/08-appendix-d.en.md';
  import AppendixDHi from './sections/08-appendix-d.hi.md';
  import AppendixDTa from './sections/08-appendix-d.ta.md';
  import AppendixEEn from './sections/08-appendix-e.en.md';
  import AppendixEHi from './sections/08-appendix-e.hi.md';
  import AppendixETa from './sections/08-appendix-e.ta.md';

  // ------------------------------------------
  // 2. Section map
  //    Replace titleHi and titleTa placeholders
  //    with actual translations when ready.
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleHi: 'कार्यकारी सारांश',   // placeholder – replace
      titleTa: 'செயலாக்க சுருக்கம்',   // placeholder – replace
      compEn: ExecutiveSummaryEn,
      compHi: ExecutiveSummaryHi,
      compTa: ExecutiveSummaryTa,
    },
    {
      id: 'leap-lag-cycle',
      titleEn: '1. The Leap‑Lag Cycle',
      titleHi: '1. लीप‑लैग चक्र',
      titleTa: '1. முன்னேற்ற‑பின்னடைவு சுழற்சி',
      compEn: LeapLagCycleEn,
      compHi: LeapLagCycleHi,
      compTa: LeapLagCycleTa,
    },
    {
      id: 'synchronisation-deficit',
      titleEn: '2. The Synchronisation Deficit: A New Diagnosis',
      titleHi: '2. तालमेल की कमी: एक नया निदान',
      titleTa: '2. ஒத்திசைவு குறைபாடு: ஒரு புதிய நோயறிதல்',
      compEn: SynchDeficitEn,
      compHi: SynchDeficitHi,
      compTa: SynchDeficitTa,
    },
    {
      id: 'building-capacity',
      titleEn: '3. What Building Synchronisation Capacity Looks Like',
      titleHi: '3. तालमेल क्षमता निर्माण कैसा दिखता है',
      titleTa: '3. ஒத்திசைவு திறன் மேம்பாடு எப்படி இருக்கும்',
      compEn: BuildingCapacityEn,
      compHi: BuildingCapacityHi,
      compTa: BuildingCapacityTa,
    },
    {
      id: 'political-immune',
      titleEn: '4. The Political Immune System: Why Synchronisation Fails',
      titleHi: '4. राजनीतिक प्रतिरक्षा प्रणाली: तालमेल क्यों विफल होता है',
      titleTa: '4. அரசியல் நோயெதிர்ப்பு அமைப்பு: ஒத்திசைவு ஏன் தோல்வியடைகிறது',
      compEn: PoliticalImmuneEn,
      compHi: PoliticalImmuneHi,
      compTa: PoliticalImmuneTa,
    },
    {
      id: 'transition-architecture',
      titleEn: '5. Working with the Grain: Transition Architecture for India',
      titleHi: '5. प्रकृति के अनुरूप: भारत के लिए संक्रमण वास्तुकला',
      titleTa: '5. இயற்கைக்கு இசைவாக: இந்தியாவுக்கான மாற்றுக் கட்டமைப்பு',
      compEn: TransitionEn,
      compHi: TransitionHi,
      compTa: TransitionTa,
    },
    {
      id: 'sandbox',
      titleEn: '6. A Concrete First Step: The Synchronisation Sandbox',
      titleHi: '6. एक ठोस पहला कदम: तालमेल सैंडबॉक्स',
      titleTa: '6. ஒரு உறுதியான முதல் படி: ஒத்திசைவு சேண்ட்பாக்ஸ்',
      compEn: SandboxEn,
      compHi: SandboxHi,
      compTa: SandboxTa,
    },
    {
      id: 'coda',
      titleEn: '7. Coda: From Leap‑Lag to Leap‑Sync',
      titleHi: '7. उपसंहार: लीप‑लैग से लीप‑सिंक तक',
      titleTa: '7. முடிவுரை: முன்னேற்ற‑பின்னடைவிலிருந்து முன்னேற்ற‑ஒத்திசைவுக்கு',
      compEn: CodaEn,
      compHi: CodaHi,
      compTa: CodaTa,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleHi: 'परिशिष्ट क: मूल्य प्रणालियाँ और नीति मानसिकताएँ',
      titleTa: 'இணைப்பு அ: மதிப்பு அமைப்புகள் மற்றும் கொள்கை மனப்பான்மைகள்',
      compEn: AppendixAEn,
      compHi: AppendixAHi,
      compTa: AppendixATa,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues',
      titleHi: 'परिशिष्ट ख: अंतर्राष्ट्रीय समानताएँ',
      titleTa: 'இணைப்பு ஆ: சர்வதேச ஒப்புமைகள்',
      compEn: AppendixBEn,
      compHi: AppendixBHi,
      compTa: AppendixBTa,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleHi: 'परिशिष्ट ग: गवर्नेंस ऐज़ इंजीनियरिंग कनेक्शन',
      titleTa: 'இணைப்பு இ: ஆளுகை பொறியியல் இணைப்பு',
      compEn: AppendixCEn,
      compHi: AppendixCHi,
      compTa: AppendixCTa,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleHi: 'परिशिष्ट घ: अपेक्षित आपत्तियाँ',
      titleTa: 'இணைப்பு ஈ: எதிர்பார்க்கப்படும் எதிர்ப்புகள்',
      compEn: AppendixDEn,
      compHi: AppendixDHi,
      compTa: AppendixDTa,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleHi: 'परिशिष्ट ङ: लेखक और विधि के बारे में',
      titleTa: 'இணைப்பு உ: ஆசிரியர் மற்றும் முறை பற்றி',
      compEn: AppendixEEn,
      compHi: AppendixEHi,
      compTa: AppendixETa,
    },
  ];

  $effect(() => {
    if (reportLang === 'hi') {
      console.log('Hindi comp for executive-summary:', contentMap[0].compHi);
    }
  });

  // ------------------------------------------
  // 3. Local report language (EN, HI, TA)
  // ------------------------------------------
  let reportLang: 'en' | 'hi' | 'ta' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    // Cycle through en -> hi -> ta -> en
    if (reportLang === 'en') reportLang = 'hi';
    else if (reportLang === 'hi') reportLang = 'ta';
    else reportLang = 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    if (reportLang === 'hi') return section.titleHi;
    if (reportLang === 'ta') return section.titleTa;
    return section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    if (reportLang === 'hi') return section.compHi;
    if (reportLang === 'ta') return section.compTa;
    return section.compEn;
  }

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ------------------------------------------
  // 4. Metadata & UI texts
  // ------------------------------------------
  const metadata = {
    en: {
      title: 'The Leap‑Lag Cycle: Why India\'s Brilliant Front‑Row Still Can\'t Synchronise',
      subtitle: 'A field guide to the synchronisation deficit — and how India can make its fragments cohere',
      description:
        'India does not lack capacity — it lacks the ability to synchronise its extraordinary strengths across scale. This report diagnoses the structural mechanisms and proposes a Synchronisation Sandbox as the first step.',
    },
    hi: {
      title: 'लीप‑लैग चक्र: भारत की शानदार अग्रिम पंक्ति अब भी तालमेल क्यों नहीं बिठा पाती',
      subtitle: 'तालमेल की कमी के लिए एक फील्ड गाइड — और भारत अपने टुकड़ों को कैसे जोड़ सकता है',
      description:
        'भारत में क्षमता की कमी नहीं है — उसमें पैमाने पर अपनी असाधारण ताकतों को तालमेल से जोड़ने की क्षमता का अभाव है। यह रिपोर्ट संरचनात्मक तंत्रों का निदान करती है और पहले कदम के रूप में एक तालमेल सैंडबॉक्स प्रस्तावित करती है।',
    },
    ta: {
      title: 'முன்னேற்ற‑பின்னடைவு சுழற்சி: இந்தியாவின் புத்திசாலித்தனமான முன்வரிசை ஏன் இன்னும் ஒத்திசைக்க முடியவில்லை',
      subtitle: 'ஒத்திசைவு குறைபாட்டிற்கான ஒரு கள வழிகாட்டி — மற்றும் இந்தியா தனது துண்டுகளை எவ்வாறு ஒன்றிணைக்க முடியும்',
      description:
        'இந்தியாவுக்கு திறன் இல்லையென்பதல்ல — பல்வேறு அளவீடுகளில் தனது அசாதாரண பலங்களை ஒத்திசைக்கும் திறன் இல்லை. இந்த அறிக்கை கட்டமைப்பு வழிமுறைகளை கண்டறிந்து, முதல் படியாக ஒரு ஒத்திசைவு சேண்ட்பாக்சை முன்மொழிகிறது.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · India',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelHi: 'PDF (हिन्दी)',
      pdfLabelTa: 'PDF (தமிழ்)',
    },
    hi: {
      tag: 'देश रिपोर्ट · भारत',
      allReports: '← सभी रिपोर्ट',
      downloads: 'डाउनलोड',
      share: 'शेयर करें',
      cite: 'उद्धृत करें',
      pdfLabelEn: 'PDF (English)',
      pdfLabelHi: 'PDF (हिन्दी)',
      pdfLabelTa: 'PDF (தமிழ்)',
    },
    ta: {
      tag: 'நாட்டு அறிக்கை · இந்தியா',
      allReports: '← அனைத்து அறிக்கைகள்',
      downloads: 'பதிவிறக்கங்கள்',
      share: 'பகிர்',
      cite: 'மேற்கோள்',
      pdfLabelEn: 'PDF (English)',
      pdfLabelHi: 'PDF (हिन्दी)',
      pdfLabelTa: 'PDF (தமிழ்)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-07"
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- SIDEBAR -->
  <aside class="hidden lg:block w-72 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <!-- Back link -->
    <div class="mb-8">
      <a href="/reports" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium">
        {t.allReports}
      </a>
    </div>

    <!-- Language toggle (EN / HI / TA) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'hi'} class:opacity-50={reportLang !== 'hi'}>HI</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'ta'} class:opacity-50={reportLang !== 'ta'}>TA</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/india-leap-lag-cycle-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/india-leap-lag-cycle-hi.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelHi}
        </a>
        <a
          href="/reports/india-leap-lag-cycle-ta.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelTa}
        </a>
      </div>
    </div>

    <!-- Section Navigation -->
    <nav class="space-y-1">
      {#each contentMap as section}
        <button
          onclick={() => scrollTo(section.id)}
          class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
            {activeSection === section.id
              ? 'bg-[var(--color-page-accent)] text-white font-medium shadow-sm'
              : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-70 hover:opacity-100'}"
        >
          {sectionTitle(section)}
        </button>
      {/each}
    </nav>
  </aside>

  <!-- MAIN CONTENT -->
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
              --tw-prose-code: var(--color-page-text);
              --tw-prose-pre-bg: var(--color-card-bg);
              --tw-prose-pre-code: #1a1a1a;
            ">
            <svelte:component this={sectionComp(section)} />
          </article>
        </div>
        {#if section.id !== 'appendix-e'}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share & Citation -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <ShareButtons title={meta.title} />
        <button
          onclick={() => {
            const cite = reportLang === 'hi'
              ? 'Holmström, B. K. (2026). लीप‑लैग चक्र: भारत की शानदार अग्रिम पंक्ति अब भी तालमेल क्यों नहीं बिठा पाती. सामरिक देश रिपोर्ट।'
              : reportLang === 'ta'
              ? 'Holmström, B. K. (2026). முன்னேற்ற‑பின்னடைவு சுழற்சி: இந்தியாவின் புத்திசாலித்தனமான முன்வரிசை ஏன் இன்னும் ஒத்திசைக்க முடியவில்லை. மூலோபாய நாட்டு அறிக்கை.'
              : 'Holmström, B. K. (2026). The Leap‑Lag Cycle: Why India\'s Brilliant Front‑Row Still Can\'t Synchronise with the Rest of the Theatre. Strategic Country Report.';
            navigator.clipboard.writeText(cite);
            alert(reportLang === 'hi' ? 'उद्धरण कॉपी किया गया!' : reportLang === 'ta' ? 'மேற்கோள் நகலெடுக்கப்பட்டது!' : 'Citation copied!');
          }}
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {t.cite}
        </button>
      </div>
    </div>
  </main>
</div>
