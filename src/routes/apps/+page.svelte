<script lang="ts">
	import { appsTranslations as allTranslations } from '$lib/i18n/translations/apps';
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	// --- FIX: Renamed '$t' to 't' ---
	// '$t' is an illegal variable name for a reactive assignment.
	$: t = allTranslations[$language].apps;
</script>

<SEO
	title={t.meta.title}
	description={t.meta.description}
	keywords={'apps, tools, timetracker, tito, conceptexplorer, open source'}
/>

<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

<div class="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
	<section>
		<h2 class="mb-8 text-3xl font-semibold text-[var(--color-page-accent)]">
			{t.activeTitle}
		</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div
				class="flex flex-col rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-md"
			>
				<div class="flex-grow p-6">
					<img
						src="/apps/images/logo-tito.svg"
						alt="TiTo Time Tracker logo"
						class="mb-4 h-12 w-auto"
					/>
					<h3 class="text-2xl font-semibold text-[var(--color-card-text)]">
						{t.tito.title}
					</h3>
					<p class="mt-2 text-[var(--color-card-text)] opacity-80">
						{t.tito.tagline}
					</p>
				</div>
				<div
					class="flex flex-wrap gap-4 rounded-b-lg border-t border-[var(--color-separator)] bg-[var(--color-page-bg)] p-4"
				>
					<a
						href="/apps/tito"
						class="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
					>
						{t.learnMore}
					</a>
					<a
						href="https://bjornkennethholmstrom.github.io/TiTo/"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-slate-500/20 px-4 py-2 text-sm font-medium text-[var(--color-page-text)] transition-colors hover:bg-slate-500/30"
					>
						{t.visitOnline}
					</a>
				</div>
			</div>

			<div
				class="flex flex-col rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-md"
			>
				<div class="flex-grow p-6">
					<img
						src="/apps/images/logo-conceptexplorer.svg"
						alt="ConceptExplorer logo"
						class="mb-4 h-12 w-auto"
					/>
					<h3 class="text-2xl font-semibold text-[var(--color-card-text)]">
						{t.conceptexplorer.title}
					</h3>
					<p class="mt-2 text-[var(--color-card-text)] opacity-80">
						{t.conceptexplorer.tagline}
					</p>
				</div>
				<div
					class="flex flex-wrap gap-4 rounded-b-lg border-t border-[var(--color-separator)] bg-[var(--color-page-bg)] p-4"
				>
					<a
						href="/apps/conceptexplorer"
						class="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-amber-700"
					>
						{t.learnMore}
					</a>
					<a
						href="https://bjornkennethholmstrom.github.io/ConceptExplorer/"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-slate-500/20 px-4 py-2 text-sm font-medium text-[var(--color-page-text)] transition-colors hover:bg-slate-500/30"
					>
						{t.visitOnline}
					</a>
				</div>
			</div>
		</div>
	</section>

	<section>
		<h2 class="mb-8 text-3xl font-semibold text-[var(--color-page-accent)]">
			{t.archiveTitle}
		</h2>
		<div
			class="divide-y divide-[var(--color-separator)] rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)]"
		>
			<div class="p-6">
				<h3 class="text-xl font-semibold text-[var(--color-card-text)]">{t.adit.title}</h3>
				<p class="mt-2 text-sm text-[var(--color-card-text)] opacity-80">
					{t.adit.description}
				</p>
			</div>
			<div class="p-6">
				<h3 class="text-xl font-semibold text-[var(--color-card-text)]">{t.mutiny.title}</h3>
				<p class="mt-2 text-sm text-[var(--color-card-text)] opacity-80">
					{t.mutiny.description}
				</p>
			</div>
		</div>
	</section>
</div>
