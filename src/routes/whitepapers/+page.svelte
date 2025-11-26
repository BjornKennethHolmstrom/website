<!-- src/routes/whitepapers/+page.svelte -->
<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import { papersData } from '$lib/data/whitepapers';
	import PageHero from '$lib/components/PageHero.svelte';

	const ggfBase = 'https://globalgovernanceframeworks.org';
	const wpBase = 'https://bjornkennethholmstrom.wordpress.com';

	let papers = $derived(papersData);

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

	// Get localized read time
	function getReadTime(paper: (typeof papers)[0], currentLang: string) {
		if (!paper.readTime) return null;
		
		// If readTime is a string, return it (backwards compatibility)
		if (typeof paper.readTime === 'string') return paper.readTime;
		
		// If readTime is an object, get language-specific version with fallback
		return paper.readTime[currentLang] || paper.readTime.en || null;
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
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			{#each papers as paper (paper.id)}
				{@const pdfInfo = getPdfInfo(paper, $language)}
				{@const readTime = getReadTime(paper, $language)}
				<div
					class="group flex flex-col overflow-hidden rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
				>
					{#if paper.coverImage}
						<div class="relative overflow-hidden">
							<div class="aspect-[16/9] w-full">
								<img 
									src={paper.coverImage} 
									alt="Cover for {$t.whitepapers[paper.key]?.title}"
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
							</div>
						</div>
					{/if}
					
					<div class="flex flex-1 flex-col p-6 lg:p-8">
						<div class="mb-4 flex items-start justify-between gap-4">
							<span
								class="inline-flex items-center rounded-full bg-[var(--color-separator)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-page-accent)]"
							>
								{$t.whitepapers.categories[paper.category] || paper.category}
							</span>
							<span class="whitespace-nowrap text-sm opacity-50">{paper.year}</span>
						</div>

						<h3 class="mb-3 text-2xl font-bold leading-tight text-[var(--color-card-text)]">
							{$t.whitepapers[paper.key].title}
						</h3>
						
						<p class="mb-6 flex-1 text-sm leading-relaxed text-[var(--color-card-text)] opacity-80">
							{$t.whitepapers[paper.key].description}
						</p>

						<div class="mb-6 flex flex-wrap items-center gap-4 text-xs font-medium opacity-60">
							<span>📅 {new Date(paper.releaseDate).toLocaleDateString($language, {
								dateStyle: 'medium'
							})}</span>
							<span>📄 {paper.pages} {$t.common.ui.pages}</span>
							{#if readTime}
								<span>⏱️ {readTime}</span>
							{/if}
							{#if paper.version}
								<span>📝 v{paper.version}</span>
							{/if}
						</div>

						<div class="flex flex-col gap-3 sm:flex-row">
							{#if paper.readOnlinePath}
								<a
									href={paper.readOnlinePath}
									class="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-page-accent)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
									{$t.books.actions.readOnline}
								</a>
							{/if}

							{#if pdfInfo.path}
								<a
									href={pdfInfo.path}
									target="_blank"
									download
									class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-2.5 text-sm font-medium text-[var(--color-card-text)] transition-colors hover:bg-[var(--color-separator)]"
									class:untranslated={!pdfInfo.isTranslated}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
									{pdfInfo.label}
								</a>
							{:else}
								<button
									disabled
									class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-2.5 text-sm font-medium text-[var(--color-card-text)] opacity-40"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
									{$t.books.actions.comingSoon}
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
