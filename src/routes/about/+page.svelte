<script lang="ts">
	import { t } from '$lib/stores/languageStore';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
 import SEO from '$lib/components/SEO.svelte';
 import PageHero from '$lib/components/PageHero.svelte';

</script>

<SEO
	title={$t.about.meta.title}
	description={$t.about.meta.description}
	keywords="systems thinking, consciousness development, holistic solutions, Björn Kenneth Holmström, about, polycrisis"
/>

<PageHero title={$t.about.hero.title} subtitle={$t.about.hero.subtitle} />

<section class="py-16 md:py-24">
	<article
		class="prose prose-lg mx-auto max-w-3xl px-4"
		style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text);"
	>
		<h2>{$t.about.introTitle}</h2>
		<p>{$t.about.intro}</p>

		<hr />

		<h2>{$t.about.journeyTitle}</h2>
		<p>{@html $t.about.journey_physics}</p>
		<p>{@html $t.about.journey_mystic}</p>
		<p>{@html $t.about.journey_return}</p>

		<hr />

		<h2>{$t.about.missionTitle}</h2>
		<p>{@html $t.about.mission_ggf}</p>
		<p>{@html $t.about.mission_quartet}</p>
		<p>{@html $t.about.mission_question}</p>

		<h2>{$t.about.inspirationsTitle}</h2>
		<ul>
			{#each $t.about.inspirations as item}
				<li>{item}</li>
			{/each}
		</ul>

		<h2>{$t.about.interestsTitle}</h2>
		<p>{@html $t.about.interests_music}</p>
		<p>{@html $t.about.interests_gaming}</p>
		<p>{@html $t.about.interests_nature}</p>

		<hr />

		<div class="text-center">
			<p class="text-xl">{$t.about.cta}</p>
			<a
				href="/contact"
				class="not-prose mt-4 inline-block rounded-md bg-[var(--color-page-accent)] px-8 py-3 text-lg font-medium text-white no-underline transition-opacity hover:opacity-80"
			>
				{$t.about.cta_button}
			</a>
		</div>
	</article>
	<br>
	<ShareButtons title={$t.about.meta.title} description={$t.about.meta.description} />
</section>
