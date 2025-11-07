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
		b3oThread:
			'https://www.minecraftforum.net/forums/minecraft-java-edition/survival-mode/2890897-survival-world-b3o-build-journal-and-download',
		b3oGoogle: 'https://drive.google.com/file/d/18P5KcC3Cp1OWv91W4oVADZdkzqD94Oda/view?usp=sharing',
		b3oMediafire: 'http://www.mediafire.com/file/qw9m0xtw8jqn05q/Flower_Valley.zip/file',
		dadMediafire:
			'http://www.mediafire.com/file/acavc412y2ystok/Avion%27s+Creative+World+with+Teleportation+Puzzle+Games.zip',
		dadPdf: 'https://docs.google.com/document/d/1P2bZOTz42sR9nF0bT5s-qfWbXgA-wB-x3hB_Y-i-E8A/edit?usp=sharing',
		dadBuildList:
			'https://www.minecraftforum.net/forums/minecraft-java-edition/creative-mode/2905971-d-adxi-ya-creative-world-with-teleportation',
		dadWiki: 'https://en.wikipedia.org/wiki/Paro_Taktsang',
		dadGutenberg: 'https://www.gutenberg.org/ebooks/13015',
		dadBrowse: 'http://www.gutenberg.org/files/13015/13015-h/13015-h.htm'
	};
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.minecraftDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.minecraftDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.minecraft.title} subtitle={t.minecraft.tagline} />

	<div class="mx-auto max-w-4xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
		<p class="mb-12 text-center text-lg text-[var(--color-page-text)] opacity-80">
			{tDetail.intro}
		</p>

		<article
			class="rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-lg sm:p-10"
		>
			<h2 class="mb-2 text-4xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.b3o.title}
			</h2>
			<h3 class="mb-6 text-xl text-[var(--color-page-text)] opacity-70">
				{tDetail.b3o.subtitle}
			</h3>
   <p class="mb-8 text-lg" style="color: rgba(var(--color-page-text-rgb), 0.8)">
     {@html tDetail.b3o.description.replace(
       '{threadLink}',
       `<a href="${links.b3oThread}" target="_blank" rel="noopener" class="link" style="color: var(--color-page-accent)">${tDetail.b3o.threadLinkText}</a>`
     )}
   </p>

			<div class="flex flex-wrap gap-4">
				<a
					href={links.b3oGoogle}
					target="_blank"
					rel="noopener"
					class="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
				>
					{tDetail.b3o.downloadGoogle}
				</a>
				<a
					href={links.b3oMediafire}
					target="_blank"
					rel="noopener"
					class="inline-block rounded-md border border-amber-500 px-6 py-3 text-base font-medium text-amber-500 shadow-sm transition-colors hover:bg-amber-500/10"
				>
					{tDetail.b3o.downloadMediafire}
				</a>
			</div>
		</article>

		<article
			class="rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-lg sm:p-10"
		>
			<h2 class="mb-6 text-4xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.dadxieya.title}
			</h2>

			<section class="mb-10 space-y-4 text-lg text-[var(--color-page-text)] opacity-80">
				{#each tDetail.dadxieya.intro as paragraph}
					<p>{paragraph}</p>
				{/each}
			</section>

			<section class="mb-10">
				<h3 class="mb-4 text-2xl font-semibold text-[var(--color-page-text)]">
					{tDetail.dadxieya.features.title}
				</h3>
				<ul class="list-disc space-y-2 pl-6 text-lg text-[var(--color-page-text)] opacity-80">
					{#each tDetail.dadxieya.features.list as item}
						<li>{item}</li>
					{/each}
				</ul>
			</section>

			<section class="mb-12">
				<h3 class="mb-4 text-2xl font-semibold text-[var(--color-page-text)]">
					{tDetail.dadxieya.download.title}
				</h3>
				<a
					href={links.dadMediafire}
					target="_blank"
					rel="noopener"
					class="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
				>
					{tDetail.dadxieya.download.linkText}
				</a>
				<p class="mt-4 text-sm text-[var(--color-page-text)] opacity-60">
					{tDetail.dadxieya.download.note}
				</p>
			</section>

			<section>
				<h3 class="mb-8 text-2xl font-semibold text-[var(--color-page-text)]">
					{tDetail.dadxieya.faq.title}
				</h3>
				<div class="space-y-8">
					{#each tDetail.dadxieya.faq.questions as item}
						<div>
							<h4 class="mb-2 text-xl font-semibold text-[var(--color-page-accent)]">
								{item.q}
							</h4>
							<pre
								class="whitespace-pre-wrap font-sans text-lg text-[var(--color-page-text)] opacity-80"
							>
								{@html item.a
									.replace(
										'{pdfLink}',
										`<a href="${links.dadPdf}" target="_blank" rel="noopener" class="link">Click here</a>`
									)
									.replace(
										'{buildListLink}',
										`<a href="${links.dadBuildList}" target="_blank" rel="noopener" class="link">Click here to see the build list</a>`
									)
									.replace(
										'{wikiLink}',
										`<a href="${links.dadWiki}" target="_blank" rel="noopener" class="link">wikipedia link</a>`
									)
									.replace(
										'{gutenbergLink}',
										`<a href="${links.gutenbergLink}" target="_blank" rel="noopener" class="link">Project Gutenberg</a>`
									)
									.replace(
										'{browseLink}',
										`<a href="${links.dadBrowse}" target="_blank" rel="noopener" class="link">this page</a>`
									)}</pre
							>
						</div>
					{/each}
				</div>
			</section>
		</article>
	</div>
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
</style>
