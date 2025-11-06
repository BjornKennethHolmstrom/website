<script lang="ts">
	import { t } from '$lib/stores/languageStore';
</script>

<svelte:head>
	<title>{$t.about.meta.title}</title>
	<meta name="description" content="{$t.about.meta.description}" />
</svelte:head>

<section class="bg-slate-900 py-16 text-center text-white md:py-24">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.about.hero.title}
		</h1>
		<p class="text-lg text-slate-300 sm:text-xl">
			{$t.about.hero.subtitle}
		</p>
	</div>
</section>

<section class="py-16 md:py-24">
	<article
		class="prose prose-lg prose-a:text-[var(--color-page-accent)] prose-strong:text-[var(--color-page-text)] mx-auto max-w-3xl px-4 dark:prose-invert hover:prose-a:underline"
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
</section>
