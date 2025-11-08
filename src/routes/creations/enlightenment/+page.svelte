<script lang="ts">
	import { creationsTranslations as allTranslations } from '$lib/i18n/translations/creations';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	// Add a loading state
	let isLoading = $state(true);

	// Subscribe to language changes
	$effect(() => {
		if ($language) {
			isLoading = false;
		}
	});

	// --- Hardcoded links ---
	const links = {
		blogPinf: '/blog/2024-10-20-what-if-p-inf-equals-1-the-certain-probability-of-infinity',
		blogGaming: '/blog/2017-01-22-enlightenment-heightened-awareness-while-gaming',
		subEarly: '/creations/enlightenment/early-contemplations-on-reality',
		subSustenance: '/creations/enlightenment/enlightenment-transcending-survival',
		subPerception: '/creations/enlightenment/perception-mind-and-reality',
		subTerms: '/creations/enlightenment/enlightenment-terms',
		instagram: 'https://instagram.com/beyond_enlightenment',
		wikiEnlightenment: 'https://en.wikipedia.org/wiki/Enlightenment',
		wikiPerennialists: 'https://en.wikipedia.org/wiki/Perennial_philosophy',
		wikiUniversalists: 'https://en.wikipedia.org/wiki/Universalism'
	};
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.enlightenmentDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.enlightenmentDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.enlightenment.title} subtitle={t.enlightenment.tagline} />

	<article class="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
		<p class="text-lg text-[var(--color-page-text)] opacity-80">
			{@html tDetail.intro.replace(/\*(.*?)\*/g, '<em>$1</em>')}
		</p>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.universalTitle}
			</h2>
			<pre
				class="whitespace-pre-wrap font-sans text-lg text-[var(--color-page-text)] opacity-80"
			>{@html tDetail.universalBody.replace(/\*(.*?)\*/g, '<em>$1</em>')}</pre>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.investigationTitle}
			</h2>
			<p class="mb-8 text-lg text-[var(--color-page-text)] opacity-80">
				{tDetail.investigationBody}
			</p>

			<div class="space-y-6">
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.contemplationsTitle}
					</h3>
					<ul class="list-disc space-y-2 pl-6">
						<li>
							<a href={links.blogPinf} class="link">
								{tDetail.contemplationsLinks.p_inf}
							</a>
							<span class="opacity-70"> {tDetail.contemplationsLinks.p_inf_lang}</span>
						</li>
						<li>
							<a href={links.subEarly} class="link">{tDetail.contemplationsLinks.early}</a>
						</li>
						<li>
							<a href={links.subSustenance} class="link">
								{tDetail.contemplationsLinks.sustenance}
							</a>
						</li>
						<li>
							<a href={links.subPerception} class="link">
								{tDetail.contemplationsLinks.perception}
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.experientialTitle}
					</h3>
					<ul class="list-disc space-y-2 pl-6">
						<li>
							<a href={links.blogGaming} class="link">
								{tDetail.experientialLinks.gaming}
							</a>
						</li>
						<li>
							<a href={links.subTerms} class="link">{tDetail.experientialLinks.terms}</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.insightsTitle}
					</h3>
					<ul class="list-disc space-y-2 pl-6">
						<li>
							<a href={links.instagram} target="_blank" rel="noopener" class="link">
								{tDetail.insightsLinks.instagram}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>

  <section>
	  <h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
		  {tDetail.furtherReadingTitle}
	  </h2>
	  <p class="mb-6 text-lg" style="color: rgba(15, 23, 42, 0.8); dark:color: rgba(226, 232, 240, 0.8);">
		  {@html tDetail.furtherReadingBody.replace(
			  '{linkEnlightenment}',
			  `<a href="${links.wikiEnlightenment}" target="_blank" rel="noopener" class="link" style="color: var(--color-page-accent)">enlightenment</a>`
		  )}
	  </p>
	  <blockquote
		  class="border-l-4 border-[var(--color-page-accent)] bg-[var(--color-separator)] p-4"
		  style="color: rgba(15, 23, 42, 0.9); dark:color: rgba(226, 232, 240, 0.9);"
	  >
		  {@html tDetail.quote
			  .replace(
				  '{linkPerennialists}',
				  `<a href="${links.wikiPerennialists}" target="_blank" rel="noopener" class="link" style="color: var(--color-page-accent)">Perennialists</a>`
			  )
			  .replace(
				  '{linkUniversalists}',
				  `<a href="${links.wikiUniversalists}" target="_blank" rel="noopener" class="link" style="color: var(--color-page-accent)">Universalists</a>`
			  )}
	  </blockquote>
	  <p class="mt-6 text-lg" style="color: rgba(15, 23, 42, 0.8); dark:color: rgba(226, 232, 240, 0.8);">
		  {tDetail.conclusion}
	  </p>
  </section>
	</article>
{/if}

<style>
	/* A simple style for inline links in the article body */
	.link {
		color: var(--color-page-accent);
		text-decoration: underline;
	}
	.link:hover {
		opacity: 0.8;
	}
	/* Ensure pre tag respects our page font and line height */
	pre {
		font-family: inherit;
	}
	/* Ensure lists have correct styling */
	ul {
		color: var(--color-page-text);
		opacity: 0.8;
	}
	li {
		margin-bottom: 0.25rem;
	}
</style>
