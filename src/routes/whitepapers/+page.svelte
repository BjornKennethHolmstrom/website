<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';

	const ggfBase = 'https://globalgovernanceframeworks.org';
	const wpBase = 'https://bjornkennethholmstrom.wordpress.com';

	let papers = $derived([
		// --- GGF Papers ---
		{
			id: 'responsiveSociety',
			key: 'responsiveSociety',
			category: 'philosophy',
			year: '2025',
			pages: '60',
			readTime: '45 min',
			version: '1.0',
			pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Responsive_Society.pdf` },
			readOnlinePath: `${ggfBase}/resources/whitepapers/the-responsive-society`
		},
		{
			id: 'infiniteParadox',
			key: 'infiniteParadox',
			category: 'governance',
			year: '2025',
			pages: '80',
			readTime: '45 min',
			version: '1.0',
			pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Infinite_Paradox.pdf` },
			readOnlinePath: `${ggfBase}/resources/whitepapers/the-infinite-paradox`
		},
		{
			id: 'regenerativeGovernance',
			key: 'regenerativeGovernance',
			category: 'governance',
			year: '2025',
			pages: '60',
			readTime: '40 min',
			version: '1.0',
			pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Regenerative_Governance.pdf` },
			readOnlinePath: `${ggfBase}/resources/whitepapers/the-regenerative-governance`
		},
		{
			id: 'beyondFragmentedTruth',
			key: 'beyondFragmentedTruth',
			category: 'methodology',
			year: '2025',
			pages: '77',
			readTime: '45 min',
			version: '1.0',
			pdfPath: { en: `${ggfBase}/resources/whitepapers/Beyond_Fragmented_Truth.pdf` },
			readOnlinePath: `${ggfBase}/resources/whitepapers/beyond-fragmented-truth`
		},
		{
			id: 'currencyOfCare',
			key: 'currencyOfCare',
			category: 'economics',
			year: '2025',
			pages: '36',
			readTime: '35 min',
			version: '1.0',
			pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Currency_of_Care.pdf` },
			readOnlinePath: `${ggfBase}/resources/whitepapers/the-currency-of-care`
		},
		{
			id: 'cognitiveScaffolding',
			key: 'cognitiveScaffolding',
			category: 'methodology',
			year: '2025',
			pages: '25',
			readTime: '25 min',
			version: '1.8',
			pdfPath: { en: `${ggfBase}/resources/whitepapers/Cognitive_Scaffolding.pdf` },
			readOnlinePath: `${ggfBase}/resources/whitepapers/cognitive-scaffolding`
		},
		// --- Wordpress Papers (Nu lokala) ---
		{
			id: 'beyondTheDuopoly',
			key: 'beyondTheDuopoly',
			category: 'governance',
			year: '2025',
			pages: '54',
			readTime: null,
			version: null,
			pdfPath: {
				en: '/whitepapers/beyond-the-duopoly.pdf' // Från /static/whitepapers/
			},
			readOnlinePath: `${wpBase}/beyond-the-duopoly/` // Länkar till gamla WP-sidan
		},
		{
			id: 'mapOfAwakening',
			key: 'mapOfAwakening',
			category: 'consciousness',
			year: '2025',
			pages: '36',
			readTime: null,
			version: null,
			pdfPath: {
				en: '/whitepapers/collaborative-map-of-awakening.pdf' // Från /static/whitepapers/
			},
			readOnlinePath: `${wpBase}/collaborative-map-of-awakening/`
		},
		{
			id: 'beyondStates',
			key: 'beyondStates',
			category: 'consciousness',
			year: '2025',
			pages: '57',
			readTime: null,
			version: null,
			pdfPath: {
				en: '/whitepapers/beyond-states.pdf' // Från /static/whitepapers/
			},
			readOnlinePath: `${wpBase}/beyond-states/`
		}
	]);

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

<svelte:head>
	<title>{$t.whitepapers.meta.title}</title>
	<meta name="description" content="{$t.whitepapers.meta.description}" />
</svelte:head>

<section class="bg-slate-900 py-16 text-center text-white">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.whitepapers.hero.title}
		</h1>
		<p class="text-xl text-slate-300">{$t.whitepapers.hero.subtitle}</p>
		<p class="mt-4 text-slate-400">{$t.whitepapers.hero.description}</p>
	</div>
</section>

<section class="bg-[var(--color-page-bg)] py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each papers as paper (paper.id)}
				{@const pdfInfo = getPdfInfo(paper, $language)}
				<div
					class="flex flex-col overflow-hidden rounded-lg border border-[var(--color-separator)] bg-white shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 dark:bg-slate-800"
				>
					<div class="flex flex-1 flex-col p-6">
						<div class="mb-4 flex items-center justify-between">
							<span
								class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-[var(--color-page-accent)] dark:bg-slate-700"
							>
								{$t.whitepapers.categories[paper.category] || paper.category}
							</span>
						</div>

						<h3 class="text-xl font-semibold text-[var(--color-page-text)]">
							{$t.whitepapers[paper.key].title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-[var(--color-page-text)] opacity-80">
							{$t.whitepapers[paper.key].description}
						</p>

						<div
							class="my-4 flex flex-wrap gap-x-4 gap-y-1 border-y border-[var(--color-separator)] py-2 text-sm text-[var(--color-page-text)] opacity-60"
						>
							<span>📅 {paper.year}</span>
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
									class="flex w-full items-center justify-center rounded-md border border-[var(--color-separator)] px-4 py-2 text-sm font-medium text-[var(--color-page-text)] transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
									class:untranslated={!pdfInfo.isTranslated}
								>
									📥 {pdfInfo.label}
								</a>
							{:else}
								<button
									disabled
									class="flex w-full items-center justify-center rounded-md border border-[var(--color-separator)] px-4 py-2 text-sm font-medium text-[var(--color-page-text)] opacity-40"
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
