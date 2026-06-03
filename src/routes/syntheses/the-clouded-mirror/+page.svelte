<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // --- 1. IMPORT CHAPTERS ---
  import Chapter1 from '$lib/content/syntheses/the-clouded-mirror/chapter-1.md';
  import Chapter2 from '$lib/content/syntheses/the-clouded-mirror/chapter-2.md';
  import Chapter3 from '$lib/content/syntheses/the-clouded-mirror/chapter-3.md';
  import Chapter4 from '$lib/content/syntheses/the-clouded-mirror/chapter-4.md';
  import Chapter5 from '$lib/content/syntheses/the-clouded-mirror/chapter-5.md';
  import Chapter6 from '$lib/content/syntheses/the-clouded-mirror/chapter-6.md';
  import Chapter7 from '$lib/content/syntheses/the-clouded-mirror/chapter-7.md';
  import Chapter8 from '$lib/content/syntheses/the-clouded-mirror/chapter-8.md';
  import Chapter9 from '$lib/content/syntheses/the-clouded-mirror/chapter-9.md';
  import Chapter10 from '$lib/content/syntheses/the-clouded-mirror/chapter-10.md';
  import Chapter11 from '$lib/content/syntheses/the-clouded-mirror/chapter-11.md';
  import Summary from '$lib/content/syntheses/the-clouded-mirror/summary.md';

  // --- 2. CONTENT STRUCTURE ---
  const contentMap = [
    { id: 'chapter-1',  title: '1. The Woman in Rio',                     comp: Chapter1 },
    { id: 'chapter-2',  title: '2. The Hidden Structure of Governance',   comp: Chapter2 },
    { id: 'chapter-3',  title: '3. Four Ways the Channel Breaks',         comp: Chapter3 },
    { id: 'chapter-4',  title: '4. The Paradox of Competent Blindness',   comp: Chapter4 },
    { id: 'chapter-5',  title: '5. The Variety Gap',                      comp: Chapter5 },
    { id: 'chapter-6',  title: '6. Why Failures Compound',                comp: Chapter6 },
    { id: 'chapter-7',  title: '7. The Meta‑Governance Imperative',       comp: Chapter7 },
    { id: 'chapter-8',  title: '8. The Fragments Are Already Here',       comp: Chapter8 },
    { id: 'chapter-9',  title: '9. A Sensory Prosthesis: What AI Could Be For', comp: Chapter9 },
    { id: 'chapter-10', title: '10. The Civilizational Bet',              comp: Chapter10 },
    { id: 'chapter-11', title: '11. The Invitation',                      comp: Chapter11 },
    { id: 'summary',    title: 'Summary',                                 comp: Summary },
  ];

  // --- 3. REACTIVE STATE ---
  let activeSection = $state('chapter-1');

  function scrollTo(id: string) {
    activeSection = id;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const metadata = {
    title: 'The Clouded Mirror',
    subtitle: 'Why Our Institutions Can’t See the Crises They Create—and What We Can Build Instead',
    description:
      'The full public‑facing synthesis of the Governance as Engineering research programme. A journey from a woman in Rio to the structural blindness that haunts every institution on earth.',
  };
</script>

<SEO
  title={`${metadata.title} | The Clouded Mirror`}
  description={metadata.description}
/>

<div class="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

  <!-- MOBILE TOP BAR (visible below lg) -->
  <div class="lg:hidden px-4 pt-4 pb-2 border-b border-[var(--color-separator)] mb-6">
    <a
      href="/syntheses"
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back to Reader's Guide
    </a>
  </div>

  <!-- LEFT SIDEBAR (desktop) -->
  <aside class="hidden lg:block w-80 flex-shrink-0 pr-8 pt-16 sticky top-0 h-screen overflow-y-auto">
    <!-- Back to Reader's Guide -->
    <div class="mb-8">
      <a
        href="/syntheses"
        class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Reader's Guide
      </a>
    </div>

    <!-- Chapter Navigation -->
    <nav class="space-y-1">
      {#each contentMap as section}
        <button
          onclick={() => scrollTo(section.id)}
          class="block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
          {activeSection === section.id
            ? 'bg-[var(--color-page-accent)] text-white font-medium shadow-sm'
            : 'text-[var(--color-page-text)] hover:bg-[var(--color-card-bg)] opacity-70 hover:opacity-100'}"
        >
          {section.title}
        </button>
      {/each}
    </nav>
  </aside>

  <!-- MAIN CONTENT -->
  <main class="flex-1 min-w-0 px-4 pt-16 pb-24">
    <div class="mb-8 flex items-center justify-between">
      <!-- Left: Back to Reader's Guide -->
      <a
        href="/syntheses"
        class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Reader's Guide
      </a>

      <!-- Right: PDF download -->
      <a
        href="/syntheses/the-clouded-mirror.pdf"
        download
        class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        PDF
      </a>
    </div>

    <header class="mb-12 text-center lg:text-left">
      <div
        class="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
        style="background-color: var(--color-card-bg); color: var(--color-page-accent);"
      >
        Public Synthesis
      </div>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
        {metadata.title}
      </h1>
      <p class="text-xl md:text-2xl opacity-70 font-light leading-relaxed" style="color: var(--color-page-text);">
        {metadata.subtitle}
      </p>
    </header>

    <!-- Chapter Sections -->
    <div class="space-y-16">
      {#each contentMap as section, i}
        <div id={section.id} class="scroll-mt-24">
          <article
            class="prose prose-lg max-w-none"
            style="
              --tw-prose-headings: var(--color-page-text);
              --tw-prose-body: var(--color-page-text);
              --tw-prose-bold: var(--color-page-text);
              --tw-prose-links: var(--color-page-accent);
              --tw-prose-quotes: var(--color-page-text);
              --tw-prose-code: var(--color-page-text);
              --tw-prose-pre-bg: var(--color-card-bg);
              --tw-prose-pre-code: #1a1a1a;
            "
          >
            <svelte:component this={section.comp} />
          </article>
        </div>
        {#if i < contentMap.length - 1}
          <hr class="border-[var(--color-separator)] opacity-30 my-8" />
        {/if}
      {/each}
    </div>

    <!-- Share Buttons -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={metadata.title} />
    </div>
  </main>
</div>
