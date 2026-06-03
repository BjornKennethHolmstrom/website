<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import Content from '$lib/content/syntheses/the-democracy-that-cant-hear-you.md';

  const metadata = {
    title: 'The Democracy That Can’t Hear You',
    subtitle: 'Why Representation Chains Break the Signal They’re Meant to Transmit',
    description:
      'A synthesis for the democratic reform community. It frames citizens’ assemblies, participatory budgeting, and deliberative democracy as engineering solutions to a signal‑fidelity problem—and offers the Variety Gap as a diagnostic tool.',
    audience: 'Democratic reformers, participatory budgeting advocates, and deliberative democracy practitioners.',
  };
</script>

<SEO
  title={`${metadata.title} | The Clouded Mirror — Reader's Guide`}
  description={metadata.description}
/>

<div class="max-w-3xl mx-auto px-4 py-16">
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
      href="/syntheses/the-democracy-that-cant-hear-you.pdf"
      download
      class="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
      PDF
    </a>
  </div>

  <header class="mb-12 text-center">
    <span
      class="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4"
    >
      For: {metadata.audience}
    </span>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">{metadata.title}</h1>
    <p class="text-xl opacity-70">{metadata.subtitle}</p>
  </header>

  <article class="prose prose-lg max-w-none dark:prose-invert">
    <Content />
  </article>

  <div class="mt-16 pt-8 border-t border-[var(--color-separator)]">
    <a href="/syntheses" class="text-sm opacity-60 hover:opacity-100 transition-opacity">
      ← Back to Reader's Guide
    </a>
    <div class="mt-8">
      <ShareButtons title={metadata.title} />
    </div>
  </div>
</div>
