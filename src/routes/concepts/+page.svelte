<script lang="ts">
	import { conceptsTranslations as allTranslations } from '$lib/i18n/translations/concepts';
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

	// --- Define the concept categories ---
	const concepts = {
		default: [
			'BeSAI',
			'CommuniTree',
			'CosmicSyncCore',
			'EPiC',
			'ESP',
			'FUNTIME',
			'IAIRA',
			'JSUsCH2R',
			'QuInCA',
			'SharedSpheres',
			'UST',
			'Z_inf'
		],
		bkh: ['COSMOS', 'DaMP', 'HuGeVisiON', 'MOWED'],
		upcoming: ['HeaRTS']
	};
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.concepts}
	{@const t = allTranslations[$language].concepts}

	<SEO title={t.meta.title} description={t.meta.description} />

	<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

	<article class="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
		<section>
			<h2 class="mb-8 text-3xl font-semibold text-[var(--color-page-accent)]">
				{t.categories.default}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each concepts.default as key (key)}
					<div
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md opacity-60"
					>
						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{t[key].title}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">{t[key].tagline}</p>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="mb-8 text-3xl font-semibold text-[var(--color-page-accent)]">
				{t.categories.bkh}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each concepts.bkh as key (key)}
					<div
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md opacity-60"
					>
						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{t[key].title}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">{t[key].tagline}</p>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="mb-8 text-3xl font-semibold text-[var(--color-page-accent)]">
				{t.categories.upcoming}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each concepts.upcoming as key (key)}
					<div
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md opacity-60"
					>
						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{t[key].title}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">{t[key].tagline}</p>
					</div>
				{/each}
			</div>
		</section>
	</article>
{/if}
