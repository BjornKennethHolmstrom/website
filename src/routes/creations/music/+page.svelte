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
</script>

{#if isLoading}
	<div class="flex h-64 items-center justify-center">
		<p>Loading...</p>
	</div>
{:else if $language && allTranslations[$language]?.creations?.musicDetail}
	{@const t = allTranslations[$language].creations}
	{@const tDetail = allTranslations[$language].creations.musicDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<PageHero title={t.music.title} subtitle={t.music.tagline} />

	<article class="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.playing.title}
			</h2>
			<p class="text-lg text-[var(--color-page-text)] opacity-80">
				{tDetail.playing.body}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.bands.title}
			</h2>
			<ul class="list-disc space-y-2 pl-6 text-lg text-[var(--color-page-text)] opacity-80">
				<li>{tDetail.bands.raskolnikov}</li>
				<li>{tDetail.bands.devilkillers}</li>
				<li>
					{@html tDetail.bands.fistful.replace(
						'A Fistful of Heart',
						'<a href="https://www.youtube.com/@FistfulofHeart" target="_blank" rel="noopener" class="link">A Fistful of Heart</a>'
					)}
				</li>
			</ul>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.avion.title}
			</h2>
			<p class="mb-6 text-lg text-[var(--color-page-text)] opacity-80">
				{tDetail.avion.body}
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="https://www.youtube.com/watch?v=XdO6bglTepQ&list=PLMJw6TtOLiQXjCIQqXr06kOtAQ2Orc4Ex"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
				>
					{tDetail.avion.listenYoutube}
				</a>
				<a
					href="https://avionphoton.bandcamp.com/album/voiceless-for-the-voiceless"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-md border border-amber-500 px-6 py-3 text-base font-medium text-amber-500 shadow-sm transition-colors hover:bg-amber-500/10"
				>
					{tDetail.avion.listenBandcamp}
				</a>
			</div>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.listening.title}
			</h2>
			<p class="mb-4 text-lg text-[var(--color-page-text)] opacity-80">
				{tDetail.listening.body}
			</p>
			<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
				{#each tDetail.listening.list as item}
					<li>{item}</li>
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
	}
	.link:hover {
		opacity: 0.8;
	}
</style>
