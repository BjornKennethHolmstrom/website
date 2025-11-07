<script lang="ts">
	import { creationsTranslations as allTranslations } from '$lib/i18n/translations/creations';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	// Add a loading state
	let isLoading = true;

	// Subscribe to language changes
	$: if ($language) {
		isLoading = false;
	}

	// Define the order of artworks
	const artworkKeys = [
		'gry',
		'moonWish',
		'owlsVision',
		'acacianAscendancy',
		'alia',
		'mushroomClouds',
		'gaia',
		'amets',
		'landscape'
	];
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.artDetail?.artworks}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.artDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.art.title} subtitle={t.art.tagline} />

	<article class="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
		<p class="text-center text-lg text-[var(--color-page-text)] opacity-80">
			{tDetail.intro}
		</p>

		<section class="space-y-16">
			{#each artworkKeys as key (key)}
				{@const art = tDetail.artworks[key]}
				<div
					class="grid grid-cols-1 items-start gap-8 border-b border-[var(--color-separator)] pb-16 md:grid-cols-2"
				>
					<div>
						<img
							src={`/creations/images/${key}.png`}
							alt={art.title}
							class="rounded-lg border border-[var(--color-separator)] shadow-md"
						/>
					</div>

					<div class="space-y-6">
						<h2 class="text-3xl font-semibold text-[var(--color-page-accent)]">{art.title}</h2>

						<details class="space-y-4">
							<summary
								class="cursor-pointer text-xl font-semibold text-[var(--color-page-text)] transition-colors hover:text-[var(--color-page-accent)]"
							>
								{tDetail.aboutThisPiece}
							</summary>
							<p class="prose prose-invert max-w-none text-[var(--color-page-text)] opacity-80">
								{art.description}
							</p>
						</details>

						<details class="space-y-4" open>
							<summary
								class="cursor-pointer text-xl font-semibold text-[var(--color-page-text)] transition-colors hover:text-[var(--color-page-accent)]"
							>
								{tDetail.materialsUsed}
							</summary>
							<p class="prose prose-invert max-w-none text-[var(--color-page-text)] opacity-80">
								{art.materials}
							</p>
						</details>
					</div>
				</div>
			{/each}
		</section>
	</article>
{/if}

<style>
	/* Custom styles for the details summary marker */
	summary {
		list-style-type: none; /* Remove default marker */
		position: relative;
		padding-left: 2rem;
	}
	summary::before {
		content: '►';
		position: absolute;
		left: 0;
		top: 0.1em;
		transform: rotate(0);
		transition: transform 0.2s;
		color: var(--color-page-accent);
	}
	details[open] > summary::before {
		transform: rotate(90deg);
	}
	.prose {
		color: var(--color-page-text);
	}
</style>
