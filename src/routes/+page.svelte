<script lang="ts">
	import { t } from '$lib/stores/languageStore.ts';
 import SEO from '$lib/components/SEO.svelte';

	// Definiera vår projektdata.
	// `key` används för i18n-storen.
	// `logo` är filnamnet i /static/-mappen.
	// `url` är den externa länken.
	const projects = {
		systems: [
			{
				type: 'img', // <-- Notera att vi lägger till 'type' överallt
				key: 'ggf',
				logo: 'logo-ggf.svg',
				url: 'https://globalgovernanceframeworks.org'
			},
			{
				type: 'img',
				key: 'fjäril',
				logo: 'logo-fjarilspartiet.svg',
				url: 'https://fjarilspartiet.se' // (Exempellänk)
			}
		],
		quartet: [
			{ type: 'img', key: 'spiralize', logo: 'logo-spiralize.svg', url: 'https://spiralize.org' },
			{ type: 'img', key: 'nondualize', logo: 'logo-nondualize.svg', url: 'https://nondualize.org' },
			{ type: 'img', key: 'communize', logo: 'logo-communize.svg', url: 'https://communize.org' },
			{ type: 'img', key: 'universalize', logo: 'logo-universalize.svg', url: 'https://universalize.org' }
		],
		personal: [
			{
				type: 'img',
				key: 'spiritualized',
				logo: 'logo-spiritualized.svg',
				url: 'https://spiritualized.org'
			},
			{
				// --- ÄNDRING HÄR ---
				type: 'emoji',
				key: 'blog',
				emoji: '✍️', // Använder emoji istället för logo-fil
				url: '/blog'
			},
			{
				// --- ÄNDRING HÄR ---
				type: 'emoji',
				key: 'books',
				emoji: '📖', // Använder emoji istället för logo-fil
				url: '/books'
			}
		]
	};
</script>

<SEO
	title={$t.about.meta.title}
	description={$t.about.meta.description}
	keywords="systems thinking, consciousness development, holistic solutions, Björn Kenneth Holmström, home, polycrisis"
/>

<div class="mx-auto max-w-7xl">
  <section class="bg-slate-900 py-16 text-center text-white md:py-24">
	  <div class="mx-auto max-w-3xl px-4">
		  <h1
			  class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		  >
			  {$t.title}
		  </h1>
		  <p class="text-lg text-slate-300 sm:text-xl">
			  {$t.mission}
		  </p>
	  </div>
  </section>

	<section class="space-y-12 py-16 md:py-24">
		<div>
			<h2
				class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl"
			>
				{$t.clusterSystems}
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each projects.systems as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-lg border border-[var(--color-separator)] bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-800"
					>
						<img
							src={project.logo}
							alt={`${$t[`${project.key}Title`]} logo`}
							class="mb-4 h-12 w-auto"
						/>
						<h3 class="text-xl font-semibold text-slate-900">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-slate-900 opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h2
				class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl"
			>
				{$t.clusterQuartet}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each projects.quartet as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-lg border border-[var(--color-separator)] bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-800"
					>
						<img
							src={project.logo}
							alt={`${$t[`${project.key}Title`]} logo`}
							class="mb-4 h-12 w-auto"
						/>
						<h3 class="text-xl font-semibold text-slate-900">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-slate-900 opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h2
				class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl"
			>
				{$t.clusterPersonal}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects.personal as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-lg border border-[var(--color-separator)] bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-800"
					>
						{#if project.type === 'img'}
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
						{:else if project.type === 'emoji'}
							<span class="mb-4 block text-5xl">
								{project.emoji}
							</span>
						{/if}

						<h3 class="text-xl font-semibold text-slate-900">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-slate-900 opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
