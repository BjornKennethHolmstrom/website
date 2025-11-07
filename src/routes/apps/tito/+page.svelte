<script lang="ts">
	import { appsTranslations as allTranslations } from '$lib/i18n/translations/apps';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';

	// Hardcoded feature lists (as they are technical and mostly in English)
	const features = {
		coreUi: [
			'Clean three-column layout',
			'Multi-lingual support (English, Swedish, Spanish, Basque, French, German and Japanese)',
			'Dark mode',
			'Support for screen reader (tested with Orca on Linux Mint)',
			'Support for keyboard navigation (tested in Chrome on Linux Mint)',
			'Help modal',
			'Info icon for quick access to app info and links'
		],
		coreTracking: [
			'Start and stop a timer for active time tracking',
			'Add manual time entries',
			'View and edit time entries with custom dates and time inputs'
		],
		management: [
			'Create and manage multiple projects',
			'Drag-and-drop interface for reordering projects and time entries',
			'Paginated time entries list with customizable entries per page (5, 10, 20, 30, custom, or all)',
			'Editable page number for quick navigation through time entries',
			'Clear all button for entries'
		],
		reporting: [
			'Charts displaying time spent on different projects: Overall time distribution, Time spent in selected time ranges',
			'Monthly or weekly reports with export to CSV, PDF, or markdown',
			'Date range selection for detailed data analysis'
		],
		technical: [
			'Local data storage using IndexedDB',
			'Import/Export of database from/into .JSON-file for backup and transfer',
			'Offline functionality – works entirely in the browser',
			'Built with vanilla JavaScript, HTML, and CSS'
		]
	};

	const plannedFeatures = [
		'None at the moment',
	];

	const knownIssues = [
		'Keyboard navigation does not work in Firefox',
		'Project list in time goals section does not update immediately upon import of database, only after page is refreshed.'
	];

  // Add a loading state
  let isLoading = true;
  
  // Subscribe to language changes
  $: if ($language) {
    isLoading = false;
  }
</script>

{#if isLoading}
  <div class="flex justify-center items-center h-64">
    <p>Loading...</p>
  </div>
{:else if $language && allTranslations[$language]?.apps?.titoDetail}
	{@const t = allTranslations[$language].apps}
	{@const tDetail = allTranslations[$language].apps.titoDetail}

	<SEO title={tDetail.meta.title} description={tDetail.meta.description} />

	<section class="bg-[var(--color-bg-dark)] py-16 text-white">
		<div class="mx-auto max-w-4xl px-4 text-center">
			<img
				src="/apps/images/logo-tito.svg"
				alt="TiTo Time Tracker logo"
				class="mx-auto mb-6 h-20 w-auto"
			/>
			<h1
				class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
			>
				{t.tito.title}
			</h1>
			<p class="text-xl text-slate-300 sm:text-2xl">{t.tito.tagline}</p>

			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<a
					href="https://bjornkennethholmstrom.github.io/TiTo/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
				>
					{t.visitOnline}
				</a>
				<a
					href="/files/TiTo-1.11.0.zip"
					download
					class="inline-block rounded-md border border-amber-500 px-6 py-3 text-base font-medium text-amber-500 shadow-sm transition-colors hover:bg-amber-500/10"
				>
					{tDetail.download}
				</a>
			</div>
		</div>
	</section>

	<article class="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.features.title}
			</h2>
			<div class="space-y-6">
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.coreUi}
					</h3>
					<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
						{#each features.coreUi as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.coreTracking}
					</h3>
					<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
						{#each features.coreTracking as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.management}
					</h3>
					<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
						{#each features.management as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.reporting}
					</h3>
					<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
						{#each features.reporting as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.features.technical}
					</h3>
					<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
						{#each features.technical as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.updates.title}
			</h2>
			<ul class="list-disc space-y-2 pl-6 text-[var(--color-page-text)] opacity-80">
				<li><strong>Version 1.11.0:</strong> {tDetail.updates.v1110}</li>
				<li><strong>Version 1.10.0:</strong> {tDetail.updates.v1100}</li>
				<li><strong>Version 1.09.0:</strong> {tDetail.updates.v1090}</li>
				<li><strong>Version 1.08.2:</strong> {tDetail.updates.v1082}</li>
				<li><strong>Version 1.08.1:</strong> {tDetail.updates.v1081}</li>
			</ul>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.planned}
			</h2>
			<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
				{#each plannedFeatures as item}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">{tDetail.issues}</h2>
			<ul class="list-disc space-y-1 pl-6 text-[var(--color-page-text)] opacity-80">
				{#each knownIssues as item}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.installation.title}
			</h2>
			<div class="space-y-6 text-[var(--color-page-text)] opacity-80">
				<ol class="list-decimal space-y-2 pl-6">
					<li>{tDetail.installation.step1}</li>
					<li>{tDetail.installation.step2}</li>
					<li>{tDetail.installation.step3}</li>
					<li>{tDetail.installation.step4}</li>
				</ol>
				<div>
					<h3 class="mb-3 text-xl font-semibold text-[var(--color-page-text)]">
						{tDetail.installation.bookmarkTitle}
					</h3>
					<p>{tDetail.installation.bookmarkText}</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.contributing.title}
			</h2>
			<p class="text-[var(--color-page-text)] opacity-80">
				{@html tDetail.contributing.text
					.replace('{contactLink}', '<a href="/contact" class="link">contact page</a>')
					.replace(
						'{donateLink}',
						'<a href="https://www.paypal.com/donate/?hosted_button_id=S5B7Q9J6T5M8W" target="_blank" rel="noopener" class="link">donate here</a>'
					)}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.license.title}
			</h2>
			<p class="text-[var(--color-page-text)] opacity-80">
				{tDetail.license.text}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.acknowledgments.title}
			</h2>
			<p class="text-[var(--color-page-text)] opacity-80">
				{tDetail.acknowledgments.text}
			</p>
		</section>

		<section>
			<h2 class="mb-6 text-3xl font-semibold text-[var(--color-page-accent)]">
				{tDetail.screenshots}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
				<img
					src="/apps/images/tito-main-view.png"
					alt="TiTo Screenshot 1"
					class="rounded-lg border border-[var(--color-separator)] shadow-md"
				/>
				<img
					src="/apps/images/tito-extended-view.png"
					alt="TiTo Screenshot 2"
					class="rounded-lg border border-[var(--color-separator)] shadow-md"
				/>
			</div>
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
