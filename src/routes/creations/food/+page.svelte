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

	const amorebietaLink = 'https://en.wikipedia.org/wiki/Amorebieta-Etxano';
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.foodDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.foodDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.food.title} subtitle={t.food.tagline} />

	<article class="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
		<p class="mb-12 text-center text-lg text-[var(--color-page-text)] opacity-80">
			{@html tDetail.intro.replace(
				'{link}',
				`<a href="${amorebietaLink}" target="_blank" rel="noopener" class="link">${tDetail.linkAmorebieta}</a>`
			)}
		</p>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.categories.recipes}
			</h2>
			<ul class="list-disc space-y-2 pl-6 text-lg">
				{#each tDetail.recipes as recipe (recipe.slug)}
					<li class="text-[var(--color-page-text)] opacity-60">
						{recipe.title}
						<span class="text-xs opacity-50"> (Coming Soon)</span>
					</li>
					{/each}
			</ul>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.categories.weird}
			</h2>
			<ul class="list-disc space-y-2 pl-6 text-lg">
				{#each tDetail.weird as recipe (recipe.slug)}
					<li class="text-[var(--color-page-text)] opacity-60">
						{recipe.title}
						<span class="text-xs opacity-50"> (Coming Soon)</span>
					</li>
					{/each}
			</ul>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.categories.comingSoon}
			</h2>
			<ul class="list-disc space-y-2 pl-6 text-lg">
				{#each tDetail.comingSoon as recipe (recipe.slug)}
					<li class="text-[var(--color-page-text)] opacity-60">{recipe.title}</li>
				{/each}
			</ul>
		</section>
	</article>
{/if}

<style>
	/* A simple style for inline links in the article body */
	.link {
		color: var(--color-page-accent);
		text-decoration: underline;
		opacity: 1;
	}
	.link:hover {
		opacity: 0.8;
	}
	li {
		color: var(--color-page-text);
	}
</style>
