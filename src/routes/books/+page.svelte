<script lang="ts">
	// Importera från din store (som antagligen heter languageStore.ts)
	import { t, language } from '$lib/stores/languageStore';

	// ... (resten av din script-tag från förra filen) ...

	const ggfBase = 'https://globalgovernanceframeworks.org/resources';

	let books = $derived([
		// ... (all book data är densamma) ...
		{
			id: 'ai',
			key: 'ai',
			cover: '/resources/book-cover-ai.svg',
			pdfPath: {
				en: `${ggfBase}/AI_as_Catalyst_for_Cognitive_Evolution_-_From_Fragmentation_to_Integration_in_the_Age_of_AI.pdf`,
				sv: null
			},
			readOnlinePath: 'https://globalgovernanceframeworks.org/resources/books/ai-as-catalyst-for-cognitive-evolution',
			hasOnlineVersion: true,
			category: 'consciousness',
			year: '2025',
			pages: '236'
		},
		{
			id: 'global-governance',
			key: 'globalGovernance',
			cover: '/resources/book-cover-global-governance.svg',
			pdfPath: {
				en: `${ggfBase}/Global_Governance_-_Natural_Steps_Toward_a_Thriving_World.pdf`,
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'governance',
			year: '2025',
			pages: '173'
		},
		{
			id: 'aubi',
			key: 'aubi',
			cover: '/resources/book-cover-aubi.svg',
			pdfPath: {
				en: `${ggfBase}/Adaptive_Universal_Basic_Income_-_A_New_Social_Contract_for_the_21st_Century.pdf`,
				sv: `${ggfBase}/Adaptiv_Universell_Basinkomst_-_Ett_nytt_socialt_kontrakt_för_2000-talet.pdf`
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'economics',
			year: '2025',
			pages: '136'
		},
		{
			id: 'capital-weaver',
			key: 'capitalWeaver',
			cover: '/resources/book-cover-the-capital-weaver.svg',
			pdfPath: {
				en: `${ggfBase}/The_Capital_Weaver_-_A_Practical_Guide_to_Regenerative_Investing.pdf`,
				sv: null
			},
			readOnlinePath: 'https://globalgovernanceframeworks.org/resources/books/the-capital-weaver',
			hasOnlineVersion: true,
			category: 'methodology',
			year: '2025',
			pages: '362'
		},
		{
			id: 'optimizing-reality',
			key: 'optimizingReality',
			cover: '/resources/book-cover-optimizing-reality.svg',
			pdfPath: {
				en: `${ggfBase}/Optimizing_Reality.pdf`,
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'systems',
			year: '2025',
			pages: '95'
		},
		{
			id: 'reality-sovereignty',
			key: 'realitySovereignty',
			cover: '/resources/book-cover-reality-sovereignty-and-consciousness.svg',
			pdfPath: {
				en: `${ggfBase}/Reality,_Sovereignty,_and_Consciousness.pdf`,
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'consciousness',
			year: '2025',
			pages: '164'
		},
		{
			id: 'regenerative-reciprocity',
			key: 'regenerativeReciprocity',
			cover: '/resources/book-cover-regenerative-reciprocity.svg',
			pdfPath: {
				en: `${ggfBase}/Regenerative_Reciprocity_-_Systems,_Spirituality,_and_the_Ethics_of_Sustenance_in_a_Diverse_World.pdf`,
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'sustainability',
			year: '2025',
			pages: '214'
		},
		{
			id: 'lmci',
			key: 'lmci',
			cover: '/resources/book-cover-lmci.svg',
			pdfPath: {
				en: `${ggfBase}/Love,_Meaning,_Connection_-_A_New_Index_for_Measuring_What_Matters.pdf`,
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'metrics',
			year: '2025',
			pages: '222'
		},
		{
			id: 'being',
			key: 'being',
			cover: '/resources/book-cover-being.svg',
			pdfPath: {
				en: `${ggfBase}/Being_-_A_Tapestry_of_Existence.pdf`,
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'philosophy',
			year: '2025',
			pages: '174'
		},
		// --- LOKALA (Wordpress) Böcker ---
		{
			id: 'beyond-separation',
			key: 'beyondSeparation',
			cover: '/resources/book-cover-beyond-separation.svg', // Du måste skapa denna SVG
			pdfPath: {
				en: '/books/Beyond_Separation_Systems_Thinking_and_Nonduality.pdf', // Måste ligga i /static/books/
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'consciousness',
			year: '2025',
			pages: '180'
		},
		{
			id: 'divine-system',
			key: 'divineSystem',
			cover: '/resources/book-cover-the-divine-system.svg', // Du måste skapa denna SVG
			pdfPath: {
				en: '/books/The_Divine_System_A_Systems_Thinking_Approach_to_God.pdf', // Måste ligga i /static/books/
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'philosophy',
			year: '2025',
			pages: '210'
		},
		{
			id: 'mystical-math',
			key: 'mysticalMath',
			cover: '/resources/book-cover-mystical-mathematics.svg', // Du måste skapa denna SVG
			pdfPath: {
				en: '/books/Mystical_Mathematics_Where_Number_Meets_Being.pdf', // Måste ligga i /static/books/
				sv: null
			},
			readOnlinePath: null,
			hasOnlineVersion: false,
			category: 'philosophy',
			year: '2025',
			pages: '190'
		}
	]);

	// Hjälpfunktion för att hämta PDF-info
	function getPdfInfo(book: (typeof books)[0], currentLang: string) {
		const availablePdf = book.pdfPath[currentLang];
		const fallbackPdf = book.pdfPath.en;

		// === ÄNDRING HÄR (x3) ===
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
	<title>{$t.books.meta.title}</title>
	<meta name="description" content="{$t.books.meta.description}" />
</svelte:head>

<section class="bg-slate-900 py-16 text-center text-white">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.books.hero.title}
		</h1>
		<p class="text-xl text-slate-300">{$t.books.hero.subtitle}</p>
		<p class="mt-4 text-slate-400">{$t.books.hero.description}</p>
	</div>
</section>

<section class="bg-[var(--color-page-bg)] py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each books as book (book.id)}
				{@const pdfInfo = getPdfInfo(book, $language)}
				<div
					class="flex flex-col overflow-hidden rounded-lg border border-[var(--color-separator)] bg-white shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 dark:bg-slate-800"
				>
					<div class="relative h-64 w-full bg-slate-200 dark:bg-slate-700">
						<img
							src={book.cover}
							alt="{$t.books[book.key].title} {$t.common.ui.bookCover}"
							class="h-full w-full object-cover object-center"
							loading="lazy"
						/>
						<span
							class="absolute right-4 top-4 rounded-full bg-slate-900/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
						>
							{$t.books.categories[book.category]}
						</span>
					</div>

					<div class="flex flex-1 flex-col p-6">
						<h3 class="text-xl font-semibold text-[var(--color-page-text)]">
							{$t.books[book.key].title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-[var(--color-page-text)] opacity-80">
							{$t.books[book.key].description}
						</p>

						<div
							class="my-4 flex justify-between border-y border-[var(--color-separator)] py-2 text-sm text-[var(--color-page-text)] opacity-60"
						>
							<span>📅 {book.year}</span>
							<span>📄 {book.pages} {$t.common.ui.pages}</span>
						</div>

						<div class="flex flex-col gap-3">
							{#if book.hasOnlineVersion && book.readOnlinePath}
								<a
									href={book.readOnlinePath}
									target="_blank"
									class="flex w-full items-center justify-center rounded-md bg-[var(--color-page-accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
								>
									📖 {$t.books.actions.readOnline}
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
		/* Subtil stil för PDF-knappar som är på engelska */
		opacity: 0.8;
	}
</style>
