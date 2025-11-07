<script lang="ts">
	import { appsTranslations as allTranslations } from '$lib/i18n/translations/apps';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';

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
{:else if $language && allTranslations[$language]?.apps?.conceptexplorerDetail}
	{@const t = allTranslations[$language].apps}
	{@const tDetail = allTranslations[$language].apps.conceptexplorerDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<section class="bg-[var(--color-bg-dark)] py-16 text-white">
		<div class="mx-auto max-w-4xl px-4 text-center">
			<img
				src="/apps/images/logo-conceptexplorer.svg"
				alt="ConceptExplorer logo"
				class="mx-auto mb-6 h-20 w-auto"
			/>
			<h1
				class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				{t.conceptexplorer.title}
			</h1>
			<p class="text-xl text-slate-300 sm:text-2xl">{t.conceptexplorer.tagline}</p>

			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<a
					href="https://bjornkennethholmstrom.github.io/ConceptExplorer/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
				>
					{t.visitOnline}
				</a>
				<a
					href="https://github.com/BjornKennethHolmstrom/ConceptExplorer"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-md border border-amber-500 px-6 py-3 text-base font-medium text-amber-500 shadow-sm transition-colors hover:bg-amber-500/10"
				>
					{tDetail.visitGithub}
				</a>
			</div>
		</div>
	</section>

	<article class="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.why.title}
			</h2>
			<p class="text-lg text-[var(--color-page-text)] opacity-80">
				{tDetail.why.body}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.features.title}
			</h2>
			<div class="space-y-6">
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.libraryTitle}
					</h3>
					<p class="text-[var(--color-page-text)] opacity-80">
						{tDetail.features.libraryBody}
					</p>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.interactiveTitle}
					</h3>
					<p class="text-[var(--color-page-text)] opacity-80">
						{tDetail.features.interactiveBody}
					</p>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.gamifiedTitle}
					</h3>
					<p class="text-[var(--color-page-text)] opacity-80">
						{tDetail.features.gamifiedBody}
					</p>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.responsiveTitle}
					</h3>
					<p class="text-[var(--color-page-text)] opacity-80">
						{tDetail.features.responsiveBody}
					</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.technical.title}
			</h2>
			<p class="text-[var(--color-page-text)] opacity-80">
				{tDetail.technical.body}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.vision.title}
			</h2>
			<p class="text-[var(--color-page-text)] opacity-80">
				{tDetail.vision.body}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.contributing.title}
			</h2>
			<p class="mb-6 text-[var(--color-page-text)] opacity-80">
				{@html tDetail.contributing.body.replace(
					'{contactLink}',
					'<a href="/contact" class="link">Kontakta mig</a>'
				)}
			</p>
			<a
				href="https://github.com/BjornKennethHolmstrom/ConceptExplorer"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block rounded-md bg-slate-500/20 px-5 py-2.5 text-sm font-medium text-[var(--color-page-text)] transition-colors hover:bg-slate-500/30"
			>
				{tDetail.visitGithub}
			</a>
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
