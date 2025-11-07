<script lang="ts">
	import { creationsTranslations as allTranslations } from '$lib/i18n/translations/creations';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	// import { derived } from 'svelte/store'; // No longer needed

	// Add a loading state
	let isLoading = $state(true);

	// Subscribe to language changes
	$effect(() => {
		if ($language) {
			isLoading = false;
		}
	});

	// --- Filtering Logic ---
	let activeCategory = $state('all');

	// This is a reactive value derived from the store
	const poemStore = $derived(
		allTranslations[$language]?.creations?.poemDetail?.poems || []
	);

	// This is a reactive value derived from poemStore and activeCategory
	const filteredPoems = $derived(
		activeCategory === 'all'
			? poemStore
			: poemStore.filter((poem) => poem.category === activeCategory)
	);
	// --- End of Filtering Logic ---
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.poemDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.poemDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.poems.title} subtitle={t.poems.tagline} />

	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<p class="mx-auto mb-12 max-w-3xl text-center text-lg text-[var(--color-page-text)] opacity-80">
			{tDetail.intro}
		</p>

		<div
			class="mb-12 flex flex-wrap justify-center gap-2"
			role="tablist"
			aria-label="Filter poems by theme"
		>
			<button
				onclick={() => (activeCategory = 'all')}
				role="tab"
				aria-selected={activeCategory === 'all'}
				class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
				class:active-filter={activeCategory === 'all'}
				class:inactive-filter={activeCategory !== 'all'}
			>
				{tDetail.filterAll}
			</button>
			{#each Object.entries(tDetail.categories) as [key, label]}
				<button
					onclick={() => (activeCategory = key)}
					role="tab"
					aria-selected={activeCategory === key}
					class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
					class:active-filter={activeCategory === key}
					class:inactive-filter={activeCategory !== key}
				>
					{label}
				</button>
			{/each}
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredPoems as poem (poem.key)}
				<div
					class="flex flex-col rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md"
				>
					<h3 class="mb-4 text-xl font-semibold text-[var(--color-page-accent)]">
						{poem.title}
					</h3>
					<pre
						class="flex-1 whitespace-pre-wrap font-sans text-sm text-[var(--color-card-text)] opacity-90"
					>
{poem.body}</pre
					>
				</div>
			{/each}
			</div>
	</div>
{/if}

<style>
	.active-filter {
		background-color: var(--color-page-accent);
		color: black;
	}
	.inactive-filter {
		background-color: var(--color-separator);
		color: var(--color-page-text);
	}
	.inactive-filter:hover {
		background-color: color-mix(in srgb, var(--color-separator) 70%, var(--color-page-text) 30%);
	}
	/* Ensure pre tag respects our page font */
	pre {
		font-family: inherit;
	}
</style>
