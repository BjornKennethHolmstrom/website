<!-- src/routes/books/+page.svelte -->
<script lang="ts">
	import { t, language } from '$lib/stores/languageStore';
 import { booksData } from '$lib/data/books';
 import SEO from '$lib/components/SEO.svelte';

	const ggfBase = 'https://globalgovernanceframeworks.org/resources';

// Byt namn på den importerade datan för att passa resten av koden
	let books = $derived(booksData);

	// Hjälpfunktion för att hämta PDF-info
	function getPdfInfo(book: (typeof books)[0], currentLang: string) {
		const availablePdf = book.pdfPath[currentLang];
		const fallbackPdf = book.pdfPath.en;

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
	title={$t.books.meta.title}
	description={$t.books.meta.description}
	keywords="systems thinking, consciousness development, holistic solutions, Björn Kenneth Holmström, books, polycrisis"
/>

<section class="bg-[var(--color-bg-dark)] py-16 text-center text-white">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.books.hero.title}
		</h1>
		<p class="text-xl opacity-80">{$t.books.hero.subtitle}</p>
		<p class="mt-4 opacity-60">{$t.books.hero.description}</p>
	</div>
</section>

<section class="bg-[var(--color-page-bg)] py-16">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each books as book (book.id)}
				{@const pdfInfo = getPdfInfo(book, $language)}
				<div
					class="flex flex-col overflow-hidden rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2"
				>
					<div class="relative h-64 w-full bg-[var(--color-separator)]">
						<img
							src={book.cover}
							alt="{$t.books[book.key].title} {$t.common.ui.bookCover}"
							class="h-full w-full object-cover object-center"
							loading="lazy"
						/>
						<span
							class="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
						>
							{$t.books.categories[book.category]}
						</span>
					</div>

					<div class="flex flex-1 flex-col p-6">
						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t.books[book.key].title}
						</h3>
						<p class="mt-2 flex-1 text-sm text-[var(--color-card-text)] opacity-80">
							{$t.books[book.key].description}
						</p>

						<div
							class="my-4 flex justify-between border-y border-[var(--color-separator)] py-2 text-sm text-[var(--color-card-text)] opacity-60"
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
		/* Subtil stil för PDF-knappar som är på engelska */
		opacity: 0.8;
	}
</style>
