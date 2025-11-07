<script lang="ts">
	import { creationsTranslations as allTranslations } from '$lib/i18n/translations/creations';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ImageSlideshow from '$lib/components/ImageSlideshow.svelte';

	// Add a loading state
	let isLoading = $state(true);

	// Subscribe to language changes
	$effect(() => {
		if ($language) {
			isLoading = false;
		}
	});
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.photoDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.photoDetail}
	{@const collections = tDetail.collections}
	{@const zornotzaCollection = collections.find((c) => c.key === 'zornotza2017')}
	{@const upplandsVäsbyCollection = collections.find((c) => c.key === 'upplandsVasby2019')}
	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.photography.title} subtitle={t.photography.tagline} />

	<article class="mx-auto max-w-4xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
		<p class="mb-12 text-center text-lg text-[var(--color-page-text)] opacity-80">
			{tDetail.intro}
		</p>

		<section class="space-y-16">
			{#if zornotzaCollection}
				<div class="space-y-6">
					<h2 class="text-3xl font-semibold text-[var(--color-page-accent)]">
						{zornotzaCollection.title}
					</h2>
					<p class="text-lg text-[var(--color-page-text)] opacity-80">
						{zornotzaCollection.description}
					</p>
					<ImageSlideshow
						basePath={zornotzaCollection.basePath}
						images={zornotzaCollection.images}
					/>
				</div>
			{/if}

			{#if upplandsVäsbyCollection}
				<div class="space-y-6">
					<h2 class="text-3xl font-semibold text-[var(--color-page-accent)]">
						{upplandsVäsbyCollection.title}
					</h2>
					<p class="text-lg text-[var(--color-page-text)] opacity-80">
						{upplandsVäsbyCollection.description}
					</p>
					<ImageSlideshow
						basePath={upplandsVäsbyCollection.basePath}
						images={upplandsVäsbyCollection.images}
						captions={upplandsVäsbyCollection.captions}
					/>
				</div>
			{/if}
		</section>

		<section class="mt-16 border-t border-[var(--color-separator)] pt-8 text-center">
			<p class="text-[var(--color-page-text)] opacity-60">
				(More photo collections will be added here as they are recovered from the archive.)
			</p>
		</section>
	</article>
{/if}
