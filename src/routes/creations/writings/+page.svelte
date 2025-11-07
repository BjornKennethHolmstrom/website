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

	// Define the story order
	const storyKeys = ['avi', 'remedy', 'valley'];
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.writingDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.writingDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.writings.title} subtitle={t.writings.tagline} />

	<article class="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
		<p class="mb-12 text-center text-lg text-[var(--color-page-text)] opacity-80">
			{tDetail.intro}
		</p>

		<h2 class="mb-8 border-b border-[var(--color-separator)] pb-4 text-3xl font-semibold text-[var(--color-page-accent)]">
			{tDetail.chapters.title}
		</h2>

		<section class="space-y-16">
			{#each storyKeys as key (key)}
				{@const story = tDetail[key]}
				<div class="space-y-6">
					<h3 class="text-3xl font-semibold text-[var(--color-page-text)]">{story.title}</h3>
					<pre
						class="whitespace-pre-wrap font-sans text-lg leading-relaxed text-[var(--color-page-text)] opacity-80"
					>
{story.body}</pre
					>
				</div>
			{/each}
		</section>
	</article>
{/if}

<style>
	/* Ensure pre tag respects our page font and line height */
	pre {
		font-family: inherit;
	}
</style>
