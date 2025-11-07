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

	// Define the card data
	const creationCards = [
		{ key: 'art', emoji: '🎨', url: '/creations/art' },
		{ key: 'music', emoji: '🎵', url: '/creations/music' },
		{ key: 'poems', emoji: '📜', url: '/creations/poems' },
  { key: 'photography', emoji: '📷', url: '/creations/photography' },
		{ key: 'writings', emoji: '✍️', url: '/creations/writings' },
		{ key: 'minecraft', emoji: '🧱', url: '/creations/minecraft' }
	];
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations}
	{@const t = allTranslations[$language].creations}

	<SEO title={t.meta.title} description={t.meta.description} />

	<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each creationCards as card (card.key)}
				<a
					href={card.url}
					class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
				>
					<span class="mb-4 block text-5xl">
						{card.emoji}
					</span>

					<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
						{t[card.key].title}
					</h3>
					<p class="text-[var(--color-card-text)] opacity-80">
						{t[card.key].tagline}
					</p>
				</a>
			{/each}
		</div>
	</div>
{/if}
