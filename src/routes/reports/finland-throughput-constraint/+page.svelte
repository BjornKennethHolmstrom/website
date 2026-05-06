<!-- src/routes/reports/finland-throughput-constraint/+page.svelte -->
<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // ------------------------------------------
  // 1. Import all section components (EN, FI, SV)
  // ------------------------------------------

  // Executive Summary
  import ExecutiveSummaryEn from './sections/00-executive-summary.en.md';
  import ExecutiveSummaryFi from './sections/00-executive-summary.fi.md';
  import ExecutiveSummarySv from './sections/00-executive-summary.sv.md';

  // 1. The Throughput Constraint
  import ThroughputConstraintEn from './sections/01-throughput-constraint.en.md';
  import ThroughputConstraintFi from './sections/01-throughput-constraint.fi.md';
  import ThroughputConstraintSv from './sections/01-throughput-constraint.sv.md';

  // 2. Structural Mechanisms
  import StructuralMechanismsEn from './sections/02-structural-mechanisms.en.md';
  import StructuralMechanismsFi from './sections/02-structural-mechanisms.fi.md';
  import StructuralMechanismsSv from './sections/02-structural-mechanisms.sv.md';

  // 3. Building Transformational Velocity
  import BuildingVelocityEn from './sections/03-building-transformational-velocity.en.md';
  import BuildingVelocityFi from './sections/03-building-transformational-velocity.fi.md';
  import BuildingVelocitySv from './sections/03-building-transformational-velocity.sv.md';

  // 4. The Political Immune System: The Stability Bias
  import StabilityBiasEn from './sections/04-stability-bias.en.md';
  import StabilityBiasFi from './sections/04-stability-bias.fi.md';
  import StabilityBiasSv from './sections/04-stability-bias.sv.md';

  // 5. A Concrete First Step
  import FirstStepEn from './sections/05-first-step.en.md';
  import FirstStepFi from './sections/05-first-step.fi.md';
  import FirstStepSv from './sections/05-first-step.sv.md';

  // 6. Coda
  import CodaEn from './sections/06-coda.en.md';
  import CodaFi from './sections/06-coda.fi.md';
  import CodaSv from './sections/06-coda.sv.md';

  // Appendices
  import AppendixAEn from './sections/07-appendix-a.en.md';
  import AppendixAFi from './sections/07-appendix-a.fi.md';
  import AppendixASv from './sections/07-appendix-a.sv.md';

  import AppendixBEn from './sections/07-appendix-b.en.md';
  import AppendixBFi from './sections/07-appendix-b.fi.md';
  import AppendixBSv from './sections/07-appendix-b.sv.md';

  import AppendixCEn from './sections/07-appendix-c.en.md';
  import AppendixCFi from './sections/07-appendix-c.fi.md';
  import AppendixCSv from './sections/07-appendix-c.sv.md';

  import AppendixDEn from './sections/07-appendix-d.en.md';
  import AppendixDFi from './sections/07-appendix-d.fi.md';
  import AppendixDSv from './sections/07-appendix-d.sv.md';

  import AppendixEEn from './sections/07-appendix-e.en.md';
  import AppendixEFi from './sections/07-appendix-e.fi.md';
  import AppendixESv from './sections/07-appendix-e.sv.md';

  // ------------------------------------------
  // 2. Section map
  // ------------------------------------------
  const contentMap = [
    {
      id: 'executive-summary',
      titleEn: 'Executive Summary',
      titleFi: 'Tiivistelmä',
      titleSv: 'Sammanfattning',
      compEn: ExecutiveSummaryEn,
      compFi: ExecutiveSummaryFi,
      compSv: ExecutiveSummarySv,
    },
    {
      id: 'throughput-constraint',
      titleEn: '1. The Throughput Constraint',
      titleFi: '1. Läpäisykyvyn rajoite',
      titleSv: '1. Genomströmningsbegränsningen',
      compEn: ThroughputConstraintEn,
      compFi: ThroughputConstraintFi,
      compSv: ThroughputConstraintSv,
    },
    {
      id: 'structural-mechanisms',
      titleEn: '2. The Throughput Constraint: Structural Mechanisms',
      titleFi: '2. Läpäisykyvyn rajoite: Rakenteelliset mekanismit',
      titleSv: '2. Genomströmningsbegränsningen: Strukturella mekanismer',
      compEn: StructuralMechanismsEn,
      compFi: StructuralMechanismsFi,
      compSv: StructuralMechanismsSv,
    },
    {
      id: 'building-velocity',
      titleEn: '3. What Building Transformational Velocity Would Look Like',
      titleFi: '3. Miltä transformaationopeuden rakentaminen näyttäisi',
      titleSv: '3. Hur byggandet av transformationshastighet skulle se ut',
      compEn: BuildingVelocityEn,
      compFi: BuildingVelocityFi,
      compSv: BuildingVelocitySv,
    },
    {
      id: 'stability-bias',
      titleEn: '4. The Political Immune System: The Stability Bias',
      titleFi: '4. Poliittinen immuunijärjestelmä: Vakausvinouma',
      titleSv: '4. Det politiska immunsystemet: Stabilitetsbiasen',
      compEn: StabilityBiasEn,
      compFi: StabilityBiasFi,
      compSv: StabilityBiasSv,
    },
    {
      id: 'first-step',
      titleEn: '5. A Concrete First Step: The Futures Impact Assessment and the Demography Commission',
      titleFi: '5. Konkreettinen ensimmäinen askel: Tulevaisuusvaikutusten arviointi ja demografiavaliokunta',
      titleSv: '5. Ett konkret första steg: Framtidskonsekvensbedömningen och demografikommissionen',
      compEn: FirstStepEn,
      compFi: FirstStepFi,
      compSv: FirstStepSv,
    },
    {
      id: 'coda',
      titleEn: '6. Coda: The Prototype at the Frontier',
      titleFi: '6. Koda: Prototyyppi rajalla',
      titleSv: '6. Koda: Prototypen vid frontlinjen',
      compEn: CodaEn,
      compFi: CodaFi,
      compSv: CodaSv,
    },
    {
      id: 'appendix-a',
      titleEn: 'Appendix A: Value Systems & Policy Mindsets',
      titleFi: 'Liite A: Arvojärjestelmät ja politiikan ajattelutavat',
      titleSv: 'Bilaga A: Värdesystem och policy‑mentaliteter',
      compEn: AppendixAEn,
      compFi: AppendixAFi,
      compSv: AppendixASv,
    },
    {
      id: 'appendix-b',
      titleEn: 'Appendix B: International Analogues & Precedents',
      titleFi: 'Liite B: Kansainväliset analogiat ja ennakkotapaukset',
      titleSv: 'Bilaga B: Internationella analogier och prejudikat',
      compEn: AppendixBEn,
      compFi: AppendixBFi,
      compSv: AppendixBSv,
    },
    {
      id: 'appendix-c',
      titleEn: 'Appendix C: The Governance as Engineering Connection',
      titleFi: 'Liite C: Governance as Engineering ‑yhteys',
      titleSv: 'Bilaga C: Kopplingen till Governance as Engineering',
      compEn: AppendixCEn,
      compFi: AppendixCFi,
      compSv: AppendixCSv,
    },
    {
      id: 'appendix-d',
      titleEn: 'Appendix D: Anticipated Objections',
      titleFi: 'Liite D: Ennakoidut vastaväitteet',
      titleSv: 'Bilaga D: Förväntade invändningar',
      compEn: AppendixDEn,
      compFi: AppendixDFi,
      compSv: AppendixDSv,
    },
    {
      id: 'appendix-e',
      titleEn: 'Appendix E: About the Author & Method',
      titleFi: 'Liite E: Kirjoittajasta ja menetelmästä',
      titleSv: 'Bilaga E: Om författaren och metoden',
      compEn: AppendixEEn,
      compFi: AppendixEFi,
      compSv: AppendixESv,
    },
  ];

  // ------------------------------------------
  // 3. Report language (en, fi, sv)
  // ------------------------------------------
  let reportLang: 'en' | 'fi' | 'sv' = $state('en');
  let activeSection = $state('executive-summary');

  function cycleLanguage() {
    if (reportLang === 'en') reportLang = 'fi';
    else if (reportLang === 'fi') reportLang = 'sv';
    else reportLang = 'en';
  }

  function sectionTitle(section: typeof contentMap[0]) {
    if (reportLang === 'fi') return section.titleFi;
    if (reportLang === 'sv') return section.titleSv;
    return section.titleEn;
  }

  function sectionComp(section: typeof contentMap[0]) {
    if (reportLang === 'fi') return section.compFi;
    if (reportLang === 'sv') return section.compSv;
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
      title: "The Throughput Constraint: Why Finland's World‑Class Governance Still Cannot Transform Fast Enough",
      subtitle:
        'A field guide to the Trust‑Velocity Paradox — and how the most advanced democracy on earth can complete its evolution into anticipatory governance',
      description:
        'Finland is not failing — it has hit the next ceiling. This report diagnoses a Throughput Constraint in a system that can see the future with world‑class clarity but cannot yet act on what it sees at the speed the 21st century demands.',
    },
    fi: {
      title: 'Läpäisykyvyn rajoite: Miksi Suomen maailmanluokan hallinto ei vieläkään pysty muuttumaan tarpeeksi nopeasti',
      subtitle:
        'Kenttäopas luottamus‑nopeusparadoksiin — ja siihen, miten maailman edistynein demokratia voi viedä kehityksensä loppuun ennakoivaksi hallinnoksi',
      description:
        'Suomi ei ole epäonnistumassa — se on saavuttanut seuraavan katon. Tämä raportti diagnosoi läpäisykyvyn rajoitteen järjestelmässä, joka näkee tulevaisuuden maailmanluokan selkeydellä, mutta ei vielä pysty toimimaan havaintojensa mukaisesti 2000‑luvun vaatimalla nopeudella.',
    },
    sv: {
      title: 'Genomströmningsbegränsningen: Varför Finlands styrning i världsklass fortfarande inte kan transformeras tillräckligt snabbt',
      subtitle:
        'En fältguide till tillit‑hastighetsparadoxen — och hur den mest avancerade demokratin på jorden kan fullborda sin utveckling till anticipatorisk styrning',
      description:
        'Finland misslyckas inte — det har nått nästa tak. Denna rapport diagnosticerar en genomströmningsbegränsning i ett system som kan se framtiden med enastående klarhet men ännu inte kan agera på vad det ser i den takt som 2000‑talet kräver.',
    },
  };

  const ui = {
    en: {
      tag: 'Country Report · Finland',
      allReports: '← All Reports',
      downloads: 'Downloads',
      share: 'Share',
      cite: 'How to cite',
      pdfLabelEn: 'PDF (English)',
      pdfLabelFi: 'PDF (Suomi)',
      pdfLabelSv: 'PDF (Svenska)',
    },
    fi: {
      tag: 'Maaraportti · Suomi',
      allReports: '← Kaikki raportit',
      downloads: 'Lataukset',
      share: 'Jaa',
      cite: 'Viittausohje',
      pdfLabelEn: 'PDF (English)',
      pdfLabelFi: 'PDF (Suomi)',
      pdfLabelSv: 'PDF (Svenska)',
    },
    sv: {
      tag: 'Landrapport · Finland',
      allReports: '← Alla rapporter',
      downloads: 'Nedladdningar',
      share: 'Dela',
      cite: 'Citera',
      pdfLabelEn: 'PDF (English)',
      pdfLabelFi: 'PDF (Suomi)',
      pdfLabelSv: 'PDF (Svenska)',
    },
  };

  let t = $derived(ui[reportLang] ?? ui.en);
  let meta = $derived(metadata[reportLang] ?? metadata.en);
</script>

<SEO
  title="{meta.title} | Country Report"
  description={meta.description}
  type="article"
  publishedTime="2026-12"
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

    <!-- Language toggle (EN / FI / SV) -->
    <div class="mb-6">
      <button
        onclick={cycleLanguage}
        class="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
      >
        <span class="opacity-50">🌐</span>
        <span class:font-bold={reportLang === 'en'} class:opacity-50={reportLang !== 'en'}>EN</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'fi'} class:opacity-50={reportLang !== 'fi'}>FI</span>
        <span class="opacity-50 mx-1">/</span>
        <span class:font-bold={reportLang === 'sv'} class:opacity-50={reportLang !== 'sv'}>SV</span>
      </button>
    </div>

    <!-- Downloads -->
    <div class="mb-8 pb-8 border-b border-[var(--color-separator)]">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-4 opacity-50">{t.downloads}</h3>
      <div class="space-y-3">
        <a
          href="/reports/finland-throughput-constraint-en.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelEn}
        </a>
        <a
          href="/reports/finland-throughput-constraint-fi.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelFi}
        </a>
        <a
          href="/reports/finland-throughput-constraint-sv.pdf"
          download
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {t.pdfLabelSv}
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
            const cite = reportLang === 'fi'
              ? 'Holmström, B. K. (2026). Läpäisykyvyn rajoite: Miksi Suomen maailmanluokan hallinto ei vieläkään pysty muuttumaan tarpeeksi nopeasti. Strateginen maaraportti.'
              : reportLang === 'sv'
              ? 'Holmström, B. K. (2026). Genomströmningsbegränsningen: Varför Finlands styrning i världsklass fortfarande inte kan transformeras tillräckligt snabbt. Strategisk landrapport.'
              : 'Holmström, B. K. (2026). The Throughput Constraint: Why Finland\'s World‑Class Governance Still Cannot Transform Fast Enough. Strategic Country Report.';
            navigator.clipboard.writeText(cite);
            alert(reportLang === 'fi' ? 'Viite kopioitu!' : reportLang === 'sv' ? 'Citat kopierat!' : 'Citation copied!');
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
