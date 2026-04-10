<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import { mycelTranslations } from '$lib/i18n/translations/mycel';

  let t = $derived(mycelTranslations[$language] || mycelTranslations.en);
</script>

<SEO
  title={t.mycelPageMeta.title}
  description={t.mycelPageMeta.description}
/>

<main class="mx-auto max-w-4xl px-6 py-16">

  <!-- Hero -->
  <header class="mb-16 text-center">
    <h1 class="mb-3 text-5xl font-extrabold tracking-tight sm:text-6xl" style="color: var(--color-page-text);">
      {t.hero.title}
    </h1>
    <p class="text-xl leading-relaxed opacity-70" style="color: var(--color-page-text);">
      {t.hero.tagline}
    </p>
  </header>

  <!-- What it is -->
  <section class="prose prose-lg mb-16 max-w-none"
    style="
      --tw-prose-body: var(--color-page-text);
      --tw-prose-headings: var(--color-page-text);
      --tw-prose-bold: var(--color-page-text);
    ">
    <h2>{t.intro.whatTitle}</h2>
    <p>{t.intro.whatP1}</p>
    <p>{@html t.intro.whatP2}</p>

    <h2>{t.intro.problemTitle}</h2>
    <p>{t.intro.problemP1}</p>
    <p>{@html t.intro.problemP2}</p>
  </section>

  <!-- How it works -->
  <section class="mb-16">
    <h2 class="mb-8 text-3xl font-bold" style="color: var(--color-page-text);">{t.how.title}</h2>

    <!-- Map -->
    <div class="mb-8">
      <h3 class="mb-2 text-xl font-semibold" style="color: var(--color-page-text);">{t.how.mapTitle}</h3>
      <p class="leading-relaxed opacity-90" style="color: var(--color-page-text);">{t.how.mapP1}</p>
    </div>

    <!-- Two-speed signaling -->
    <div class="mb-8">
      <h3 class="mb-4 text-xl font-semibold" style="color: var(--color-page-text);">{t.how.twoSpeedTitle}</h3>
      <div class="flex flex-col gap-4">
        <div class="rounded-lg border border-[var(--color-separator)] p-5" style="background: rgba(122,158,126,0.06);">
          <div class="mb-1 text-sm font-semibold uppercase tracking-wider" style="color: #7a9e7e;">
            {t.how.ambientName}
          </div>
          <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">
            {t.how.ambientDesc}
          </p>
        </div>
        <div class="rounded-lg border border-[var(--color-separator)] p-5" style="background: rgba(200,169,110,0.06);">
          <div class="mb-1 text-sm font-semibold uppercase tracking-wider" style="color: #c8a96e;">
            {t.how.activeName}
          </div>
          <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">
            {t.how.activeDesc}
          </p>
        </div>
      </div>
    </div>

    <!-- Trust -->
    <div class="mb-8">
      <h3 class="mb-2 text-xl font-semibold" style="color: var(--color-page-text);">{t.how.trustTitle}</h3>
      <p class="leading-relaxed opacity-90" style="color: var(--color-page-text);">{t.how.trustP1}</p>
    </div>

    <!-- Anti-addiction -->
    <div class="mb-6">
      <h3 class="mb-2 text-xl font-semibold" style="color: var(--color-page-text);">{t.how.antiTitle}</h3>
      <p class="leading-relaxed opacity-90" style="color: var(--color-page-text);">{t.how.antiP1}</p>
    </div>

    <!-- Shovel quote -->
    <blockquote class="rounded-r-lg border-l-2 py-3 pl-5 pr-4 italic opacity-90"
      style="color: var(--color-page-text); border-color: #7a9e7e; background: rgba(122,158,126,0.06);">
      {t.how.shovel}
    </blockquote>
  </section>

  <!-- Getting started -->
  <section class="mb-16 rounded-xl border border-[var(--color-separator)] p-8 shadow-sm" style="background-color: var(--color-card-bg);">
    <h2 class="mb-8 text-2xl font-bold" style="color: var(--color-page-text);">{t.guide.title}</h2>

    <div class="space-y-8">
      <div>
        <h3 class="mb-2 text-lg font-semibold" style="color: var(--color-page-text);">{t.guide.step1Title}</h3>
        <p class="mb-1 text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{t.guide.step1P1}</p>
        <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{@html t.guide.step1P2}</p>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-semibold" style="color: var(--color-page-text);">{t.guide.step2Title}</h3>
        <p class="mb-1 text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{@html t.guide.step2P1}</p>
        <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{t.guide.step2P2}</p>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-semibold" style="color: var(--color-page-text);">{t.guide.step3Title}</h3>
        <p class="mb-1 text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{t.guide.step3P1}</p>
        <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{t.guide.step3P2}</p>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-semibold" style="color: var(--color-page-text);">{t.guide.step4Title}</h3>
        <p class="mb-1 text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{@html t.guide.step4P1}</p>
        <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{t.guide.step4P2}</p>
      </div>

      <div>
        <h3 class="mb-2 text-lg font-semibold" style="color: var(--color-page-text);">{t.guide.step5Title}</h3>
        <p class="text-sm leading-relaxed opacity-85" style="color: var(--color-page-text);">{t.guide.step5P1}</p>
      </div>
    </div>
  </section>

  <!-- Try it -->
  <section class="mb-16">
    <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-page-text);">{t.links.title}</h2>
    <div class="flex flex-col gap-4 sm:flex-row">
      <a
        href="https://bjornkennethholmstrom.github.io/mycel"
        target="_blank"
        class="flex flex-1 flex-col items-center gap-2 rounded-lg bg-[var(--color-page-text)] px-6 py-4 text-center transition-opacity hover:opacity-90"
        style="color: var(--color-card-bg);"
      >
        <span class="text-lg font-semibold">{t.links.openApp}</span>
        <span class="text-xs opacity-70">{t.links.appHint}</span>
      </a>
      <a
        href="https://github.com/BjornKennethHolmstrom/mycel"
        target="_blank"
        class="flex flex-1 flex-col items-center gap-2 rounded-lg border border-[var(--color-separator)] px-6 py-4 text-center transition-colors hover:bg-[var(--color-separator)]"
        style="color: var(--color-page-text);"
      >
        <span class="text-lg font-semibold">{t.links.viewSource}</span>
        <span class="text-xs opacity-60">{t.links.sourceHint}</span>
      </a>
    </div>
  </section>

  <!-- Technical -->
  <section class="mb-16 rounded-xl border border-[var(--color-separator)] p-8" style="background-color: var(--color-card-bg);">
    <h2 class="mb-4 text-2xl font-bold" style="color: var(--color-page-text);">{t.tech.title}</h2>
    <p class="mb-3 leading-relaxed opacity-90" style="color: var(--color-page-text);">{@html t.tech.p1}</p>
    <p class="mb-4 leading-relaxed opacity-90" style="color: var(--color-page-text);">{t.tech.p2}</p>
    <div class="text-sm font-medium opacity-60" style="color: var(--color-page-text);">
      <span class="uppercase tracking-wider">{t.tech.stackTitle}:</span>
      {t.tech.stackItems}
    </div>
  </section>

  <!-- GGF relation -->
  <section class="mb-16 border-t border-[var(--color-separator)] pt-8">
    <h2 class="mb-4 text-xl font-bold" style="color: var(--color-page-text);">{t.relation.title}</h2>
    <p class="leading-relaxed opacity-80" style="color: var(--color-page-text);">{@html t.relation.p1}</p>
  </section>

  <!-- Footer -->
  <footer class="text-center">
    <p class="mb-2 text-sm opacity-50" style="color: var(--color-page-text);">
      {t.footer.status}
    </p>
    <p class="text-sm opacity-50" style="color: var(--color-page-text);">
      {t.footer.contact}
      <a href="mailto:bjorn.kenneth.holmstrom@gmail.com" class="underline hover:opacity-70">bjorn.kenneth.holmstrom@gmail.com</a>
    </p>
  </footer>

</main>
