<!-- src/routes/essays/+page.svelte -->
<script lang="ts">
	import { essaysTranslations as allTranslations } from '$lib/i18n/translations/essays';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	// Add a loading state
	let isLoading = true;

	// Subscribe to language changes
	$: if ($language) {
		isLoading = false;
	}

	// Define the essay cards
	const essayCards = [
		{ 
			key: 'alchemistsDilemma', 
			url: '/essays/alchemists-dilemma',
			icon: '⚗️' // Alchemist's flask
		}
		// Future essays can be added here
	];
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.essays}
	{@const t = allTranslations[$language].essays}

	<SEO title={t.meta.title} description={t.meta.description} />

	<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

	<div class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="space-y-8">
			{#each essayCards as card (card.key)}
				{@const essay = t[card.key]}
				<article class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-8 shadow-md transition-shadow hover:shadow-lg">
					<a href={card.url} class="group">
						<div class="flex items-start gap-6">
							<!-- Icon -->
							<span class="text-5xl flex-shrink-0 transition-transform group-hover:scale-110">
								{card.icon}
							</span>

							<!-- Content -->
							<div class="flex-1">
								<!-- Title & Subtitle -->
								<h2 class="text-2xl font-bold text-[var(--color-card-text)] mb-1 group-hover:text-[var(--color-link)]">
									{essay.title}
								</h2>
								<p class="text-lg text-[var(--color-card-text)] opacity-70 italic mb-3">
									{essay.subtitle}
								</p>

								<!-- Tagline -->
								<p class="text-[var(--color-card-text)] opacity-90 font-medium mb-4">
									{essay.tagline}
								</p>

								<!-- Description -->
								<p class="text-[var(--color-card-text)] opacity-80 leading-relaxed mb-4">
									{essay.description}
								</p>

								<!-- Metadata -->
								<div class="flex flex-wrap gap-4 text-sm text-[var(--color-card-text)] opacity-60">
									<span>{essay.published}</span>
									<span>•</span>
									<span>{essay.readTime}</span>
								</div>

								<!-- Tags -->
								<div class="flex flex-wrap gap-2 mt-4">
									{#each essay.tags as tag}
										<span class="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-separator)] text-[var(--color-card-text)] opacity-70">
											{tag}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</a>
				</article>
			{/each}
		</div>

		<!-- Coming soon note -->
		<div class="mt-16 p-6 rounded-lg bg-[var(--color-separator)] text-[var(--color-card-text)] opacity-70 text-center">
			<p class="text-sm">
				{#if $language === 'en'}
					More essays coming soon. Each piece is crafted to endure—substantial explorations meant to serve the transition between worlds.
				{:else}
					Fler essäer kommer snart. Varje stycke är skapat för att bestå—omfattande utforskningar tänkta att tjäna övergången mellan världar.
				{/if}
			</p>
		</div>
	</div>
{/if}

<style>
	article {
		transition: all 0.2s ease-in-out;
	}

	article:hover {
		transform: translateY(-2px);
	}
</style>
