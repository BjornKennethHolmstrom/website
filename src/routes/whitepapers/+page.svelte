<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import { papersData } from '$lib/data/whitepapers';
	import PageHero from '$lib/components/PageHero.svelte'; // <-- 1. IMPORT THE COMPONENT

	const ggfBase = 'https://globalgovernanceframeworks.org';
	const wpBase = 'https://bjornkennethholmstrom.wordpress.com';

	// Byt namn på den importerade datan för att passa resten av koden
	let papers = $derived(papersData);

	// Hjälpfunktion för att hämta PDF-info
	function getPdfInfo(paper: (typeof papers)[0], currentLang: string) {
		const availablePdf = paper.pdfPath[currentLang];
		const fallbackPdf = paper.pdfPath.en;

		if (availablePdf) {
			return { path: availablePdf, label: $t.books.actions.downloadPdf, isTranslated: true };
		} else if (fallbackPdf && currentLang !== 'en') {
			return {
				path: fallbackPdf,
				label: `${$t.books.actions.downloadPdf} (${$t.common.languages.english})`,
				isTranslated: false
			};
		} else if (fallbackPdf) {
			return { path: fallbackPdf, label: $t.books.actions.downloadPdf, isTranslated: true };
		}
		return { path: null, label: $t.books.actions.notAvailable, isTranslated: false };
	}
</script>

<SEO
	title={$t.whitepapers.meta.title}
	description={$t.whitepapers.meta.description}
	keywords="systems thinking, consciousness development, holistic solutions, Björn Kenneth Holmström, whitepapers, polycrisis"
/>

<PageHero
	title={$t.whitepapers.hero.title}
	subtitle={$t.whitepapers.hero.subtitle}
	description={$t.whitepapers.hero.description}
/>
<section class="bg-[var(--color-page-bg)] py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each papers as paper (paper.id)}
				{@const pdfInfo = getPdfInfo(paper, $language)}
				<div
					class="flex flex-col overflow-hidden rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2"
				>
					<div class="flex flex-1 flex-col p-6">
						<div class="mb-4 flex items-center justify-between">
							<span
								class="rounded-full bg-[var(--color-separator)] px-3 py-1 text-xs font-semibold text-[var(--color-page-accent)]"
							>
								{$t.whitepapers.categories[paper.category] || paper.category}
							</span>
						</div>

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t.whitepapers[paper.key].title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-[var(--color-card-text)] opacity-80">
							{$t.whitepapers[paper.key].description}
						</p>

						<div
							class="my-4 flex flex-wrap gap-x-4 gap-y-1 border-y border-[var(--color-separator)] py-2 text-sm text-[var(--color-card-text)] opacity-60"
						>
							<span
								>📅 {new Date(paper.releaseDate).toLocaleDateString($language, {
									dateStyle: 'long'
								})}</span
							>
							<span>📄 {paper.pages} {$t.common.ui.pages}</span>
							{#if paper.readTime}
								<span>⏱️ {paper.readTime}</span>
							{/if}
							{#if paper.version}
								<span>📝 v{paper.version}</span>
							{/if}
						</div>

						<div class="flex flex-col gap-3">
							{#if paper.readOnlinePath}
								<a
									href={paper.readOnlinePath}
									target="_blank"
									class="flex w-full items-center justify-center rounded-md bg-[var(--color-page-accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
								>
									👁️ {$t.books.actions.readOnline}
								</a>
							{/if}

							{#if pdfInfo.path}
								<a
									href={pdfInfo.path}
									target="_blank"
									download
									class="flex w-full items-center justify-center rounded-md border border-[var(--color-separator)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] transition-colors hover:bg-[var(--color-separator)]"
									class:untranslated={!pdfInfo.isTranslated}
								>
									📥 {pdfInfo.label}
								</a>
							{:else}
								<button
									disabled
									class="flex w-full items-center justify-center rounded-md border border-[var(--color-separator)] px-4 py-2 text-sm font-medium text-[var(--color-card-text)] opacity-40"
								>
									📥 {$t.books.actions.comingSoon}
								</button>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.untranslated {
		opacity: 0.8;
	}
</style>
