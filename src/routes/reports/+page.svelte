<!-- src/routes/reports/+page.svelte -->
<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import { reportsData, type Report } from '$lib/data/reports';
	import PageHero from '$lib/components/PageHero.svelte';

	let reports: Report[] = $derived(reportsData);
	let selectedImage: string | null = $state(null);

	function getReadTime(report: Report, currentLang: string) {
		if (!report.readTime) return null;
		if (typeof report.readTime === 'string') return report.readTime;
		return report.readTime[currentLang] || report.readTime.en || null;
	}

 function handleKeydown(e: KeyboardEvent) {
 	if (e.key === 'Escape') {
 		selectedImage = null;
 	}
 }
</script>

<SEO
	title={$t.reports.meta.title}
	description={$t.reports.meta.description}
	keywords="country reports, systemic analysis, adaptive capacity, governance, Germany, Björn Kenneth Holmström"
/>

<PageHero
	title={$t.reports.hero.title}
	subtitle={$t.reports.hero.subtitle}
	description={$t.reports.hero.description}
/>

<svelte:window on:keydown={handleKeydown} />

<section class="bg-[var(--color-page-bg)] py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			{#each reports as report (report.id)}
				{@const readTime = getReadTime(report, $language)}
				{@const isExternal = report.readOnlineExternal ?? false}
				<div
					class="group flex flex-col overflow-hidden rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
				>
					{#if report.coverImage}
		 			<div
	 					class="relative overflow-hidden cursor-pointer"
 						on:click={() => (selectedImage = report.coverImage)}
						>
							<div class="aspect-[16/9] w-full">
								<img
									src={report.coverImage}
									alt="Cover for {$t.reports[report.key]?.title}"
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
							</div>
						</div>
					{/if}

					<div class="flex flex-1 flex-col p-6 lg:p-8">
						<div class="mb-4 flex items-start justify-between gap-4">
       <span
         class="inline-flex items-center rounded-full bg-[var(--color-separator)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-page-accent)]"
       >
         {$t.reports.categories[report.category] || report.category}
         {#if report.emoji}
           <span class="ml-1">{report.emoji}</span>
         {/if}
       </span>
							<span class="whitespace-nowrap text-sm opacity-50">{report.year}</span>
						</div>

						<h3 class="mb-3 text-2xl font-bold leading-tight text-[var(--color-card-text)]">
							{$t.reports[report.key].title}
						</h3>

						<p class="mb-6 flex-1 text-sm leading-relaxed text-[var(--color-card-text)] opacity-80">
							{$t.reports[report.key].description}
						</p>

						<div class="mb-6 flex flex-wrap items-center gap-4 text-xs font-medium opacity-60">
							<span>
								📅 {new Date(report.releaseDate).toLocaleDateString($language, {
									dateStyle: 'medium'
								})}
							</span>
							<span>📄 {report.pages} {$t.common.ui.pages}</span>
							{#if readTime}
								<span>⏱️ {readTime}</span>
							{/if}
							{#if report.version}
								<span>📝 v{report.version}</span>
							{/if}
						</div>

						<div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<!-- Read Online button -->
							<a
								href={report.readOnlinePath}
								target={isExternal ? '_blank' : undefined}
								rel={isExternal ? 'noopener noreferrer' : undefined}
								class="flex flex-1 items-center justify-center gap-2 rounded-md bg-[var(--color-page-accent)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
									<circle cx="12" cy="12" r="3"/>
								</svg>
								{$t.books.actions.readOnline}
								{#if isExternal}
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
										<polyline points="15 3 21 3 21 9"/>
										<line x1="10" y1="14" x2="21" y2="3"/>
									</svg>
								{/if}
							</a>

							<!-- PDF download buttons per available language -->
							{#if report.pdfPath}
								{#each Object.entries(report.pdfPath) as [lang, path]}
									<a
										href={path}
										target="_blank"
										download
										class="flex items-center justify-center gap-1 rounded-md border border-[var(--color-separator)] px-3 py-1.5 text-xs font-medium text-[var(--color-card-text)] transition-colors hover:bg-[var(--color-separator)]"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
											<polyline points="7 10 12 15 17 10"/>
											<line x1="12" x2="12" y1="15" y2="3"/>
										</svg>
										PDF ({lang.toUpperCase()})
									</a>
								{/each}
							{:else}
								<button
									disabled
									class="flex flex-1 items-center justify-center gap-2 rounded-md border border-[var(--color-separator)] px-4 py-2.5 text-sm font-medium text-[var(--color-card-text)] opacity-40"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
										<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
										<polyline points="7 10 12 15 17 10"/>
										<line x1="12" x2="12" y1="15" y2="3"/>
									</svg>
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

{#if selectedImage}
	<!-- Modal overlay -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
		on:click={() => (selectedImage = null)}
		role="dialog"
		aria-modal="true"
		aria-label={$t.common.ui.imagePreview || 'Image preview'}
	>
		<!-- Image container – stops clicks from closing the modal -->
		<div class="relative max-h-[90vh] max-w-[90vw]" on:click|stopPropagation>
			<!-- Close button -->
			<button
				class="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/90"
				on:click={() => (selectedImage = null)}
				aria-label={$t.common.ui.close || 'Close'}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
			<img
				src={selectedImage}
				alt={$t.common.ui.fullCover || 'Full cover image'}
				class="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
			/>
		</div>
	</div>
{/if}

<style>
	/* Any additional styling (currently minimal) */
</style>
