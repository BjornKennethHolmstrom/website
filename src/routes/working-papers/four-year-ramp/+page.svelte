<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import { marked } from 'marked';
  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  // --- 1. ONE FILE PER LANGUAGE ---
  import PaperEnRaw from './four-year-ramp.en.md?raw';
  import PaperSvRaw from './four-year-ramp.sv.md?raw';

  const rawText: Record<string, string> = {
    en: PaperEnRaw,
    sv: PaperSvRaw,
  };

  // --- 2. UI TRANSLATIONS & METADATA ---
  const ui = {
    en: {
      tag: 'Working Paper · Empirical',
      contextTitle: 'Context',
      contextIntro:
        'Swedish election campaigns are argued in part over governing capacity — reformtempo, handlingskraft, regeringsduglighet. These are empirical claims about what a legislature produces, and the Riksdag publishes enough structured data to test them: 24 riksmöten, 5,715 government propositions, chamber outcomes at förslagspunkt resolution.',
      contextOutro:
        'Volume is governed by position in the electoral cycle (82.4% of variance) rather than by which parties govern (1.4%). The year-four surge carries no latency penalty and no reduction in instrument size. Rejection rates are homogeneous across 23 of 24 riksmöten. The one exception is 2021/22 — a government coming apart, not a governing arrangement performing differently.',
      allWhitepapers: '← All Whitepapers',
      onThisPage: 'On this page',
      share: 'Share this paper',
      downloads: 'Downloads',
      downloadPDF: 'Download PDF',
      viewCode: 'View Data & Code',
      citeThis: 'Cite This Work',
      citationCopied: 'Citation copied to clipboard!',
    },
    sv: {
      tag: 'Arbetsdokument · Empiri',
      contextTitle: 'Sammanhang',
      contextIntro:
        'Svenska valrörelser förs delvis om regeringsduglighet — reformtempo, handlingskraft. Det är empiriska påståenden om vad en lagstiftande församling producerar, och riksdagen publicerar tillräckligt med strukturerade data för att pröva dem: 24 riksmöten, 5 715 propositioner, kammarbeslut på förslagspunktsnivå.',
      contextOutro:
        'Volymen styrs av placeringen i valcykeln (82,4 procent av variationen), inte av vilka partier som regerar (1,4 procent). Ökningen under mandatperiodens fjärde år medför varken längre beredningstid eller mindre propositioner. Avslagsfrekvensen är homogen under 23 av 24 riksmöten. Undantaget är 2021/22 — en regering i upplösning, inte en styrform som fungerar annorlunda.',
      allWhitepapers: '← Alla arbetsdokument',
      onThisPage: 'På denna sida',
      share: 'Dela detta dokument',
      downloads: 'Nedladdningar',
      downloadPDF: 'Ladda ner PDF',
      viewCode: 'Data och kod',
      citeThis: 'Citera detta arbete',
      citationCopied: 'Citat kopierat!',
    },
  };

  const metadata = {
    en: {
      title: 'The Four-Year Ramp',
      subtitle: 'Legislative production and the electoral clock in the Swedish Riksdag, 2002–2026',
      description:
        'Legislative volume in the Riksdag rises 73% across a mandate while government identity explains 1.4% of variance. Latency, instrument size, and rejection rates are flat. An invariance result awkward for the political legislation cycle literature.',
    },
    sv: {
      title: 'Den fyraåriga rampen',
      subtitle: 'Lagstiftningsproduktion och valklockan i Sveriges riksdag 2002–2026',
      description:
        'Propositionsvolymen i riksdagen stiger 73 procent under en mandatperiod medan regeringens identitet förklarar 1,4 procent av variationen. Beredningstid, propositionsstorlek och avslagsfrekvens ligger stilla.',
    },
  };

  const REPO = 'https://github.com/BjornKennethHolmstrom/riksdag-legislative-production';

  // --- 3. REACTIVE LOGIC ---
  let activeSection = $state('');
  let currentLang = $derived(($language as 'en' | 'sv') ?? 'en');
  let t = $derived(ui[currentLang] ?? ui.en);
  let meta = $derived(metadata[currentLang] ?? metadata.en);
  let pdfFilename = $derived(
    currentLang === 'sv' ? 'four-year-ramp-sv.pdf' : 'four-year-ramp.pdf'
  );

  /** Slug that survives Swedish characters, section numbers, and punctuation. */
  function slugify(text: string, seen: Set<string>): string {
    let base = text
      .toLowerCase()
      .replace(/[*_`~]/g, '')
      .replace(/[åä]/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    if (!base) base = 'section';
    let slug = base;
    let n = 2;
    while (seen.has(slug)) slug = `${base}-${n++}`;
    seen.add(slug);
    return slug;
  }

  /**
   * Parse the markdown once per language: strip frontmatter, render KaTeX and
   * markdown, inject ids into every <h2>, and return both the html and the TOC.
   * Headings are collected from the source in document order and matched to the
   * rendered <h2> tags in the same order, so the two can't drift apart.
   */
  function build(lang: 'en' | 'sv') {
    const md = (rawText[lang] ?? rawText.en ?? '').replace(/^---[\s\S]*?---\n/, '');

    // Collect ## headings (skip fenced code blocks)
    const seen = new Set<string>();
    const toc: { id: string; title: string }[] = [];
    let inFence = false;
    for (const line of md.split('\n')) {
      if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue; }
      if (inFence) continue;
      const m = /^##\s+(?!#)(.+?)\s*$/.exec(line);
      if (m) {
        const title = m[1].replace(/[*_`]/g, '').trim();
        toc.push({ id: slugify(title, seen), title });
      }
    }

    // --- KaTeX: stash rendered math so marked can't mangle it ---
    let content = md;
    const blocks: string[] = [];

    content = content.replace(
      /\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g,
      (match, tex1, tex2) => {
        const tex = (tex1 ?? tex2 ?? '').trim();
        try {
          blocks.push(katex.renderToString(tex, { displayMode: true, throwOnError: false }));
        } catch (e) {
          console.warn('KaTeX display error:', e);
          blocks.push(match);
        }
        return `%%MATH${blocks.length - 1}%%`;
      }
    );

    content = content.replace(
      /(?<!\$)\$(?!\$)([\s\S]*?)(?<!\$)\$(?!\$)|\\\(([\s\S]*?)\\\)/g,
      (match, tex1, tex2) => {
        const tex = (tex1 ?? tex2 ?? '').trim();
        try {
          blocks.push(katex.renderToString(tex, { displayMode: false, throwOnError: false }));
        } catch (e) {
          console.warn('KaTeX inline error:', e);
          blocks.push(match);
        }
        return `%%MATH${blocks.length - 1}%%`;
      }
    );

    let html = marked.parse(content, { breaks: false, gfm: true }) as string;

    // Inject ids into <h2> in document order
    let i = 0;
    html = html.replace(/<h2(\s[^>]*)?>/g, (m, attrs) => {
      const entry = toc[i++];
      if (!entry) return m;
      return `<h2${attrs ?? ''} id="${entry.id}" class="scroll-mt-24">`;
    });

    html = html.replace(/%%MATH(\d+)%%/g, (_, idx) => blocks[parseInt(idx)] ?? '');

    return { html, toc };
  }

  let built = $derived(build(currentLang));

  function scrollTo(id: string) {
    activeSection = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  // Scroll-spy: highlight whichever heading is nearest the top of the viewport.
  $effect(() => {
    const ids = built.toc.map((s) => s.id);
    if (!ids.length) return;

    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
        else break;
      }
      activeSection = current;
    };

    // Wait for the freshly rendered html to hit the DOM
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  });

  function copyCitation() {
    const citation =
      currentLang === 'sv'
        ? 'Holmström, B. K. (2026). Den fyraåriga rampen: Lagstiftningsproduktion och valklockan i Sveriges riksdag 2002–2026. Arbetsdokument.'
        : 'Holmström, B. K. (2026). The Four-Year Ramp: Legislative production and the electoral clock in the Swedish Riksdag, 2002–2026. Working paper.';
    navigator.clipboard.writeText(citation).then(() => alert(t.citationCopied));
  }
</script>

<SEO
  title="{meta.title} | BKH Working paper"
  description={meta.description}
  type="article"
  publishedTime="2026-08"
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
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm font-medium text-[var(--color-page-accent)] hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          {t.viewCode}
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

    <!-- Navigation, derived from the markdown's ## headings -->
    <nav class="space-y-1">
      <h3 class="text-xs font-bold uppercase tracking-wider mb-3 opacity-50">{t.onThisPage}</h3>
      {#each built.toc as section (section.id)}
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

  <!-- Main Content -->
  <main class="flex-1 min-w-0 px-4 pt-16 pb-24">

    <header class="mb-12 text-center lg:text-left">
      <div
        class="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
        style="background-color: var(--color-card-bg); color: var(--color-page-accent);"
      >
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
      <p class="text-base mb-4" style="color: var(--color-page-text);">{t.contextIntro}</p>
      <p class="opacity-80 leading-relaxed" style="color: var(--color-page-text);">{t.contextOutro}</p>
    </div>

    <!-- Paper body -->
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
      {@html built.html}
    </article>

    <!-- Share Buttons -->
    <div class="mt-24 pt-8 border-t border-[var(--color-separator)]">
      <ShareButtons title={meta.title} />
    </div>

  </main>
</div>
