<script lang="ts">
	import { t } from '$lib/stores/languageStore.ts';
	import SEO from '$lib/components/SEO.svelte';

	// Definiera vår projektdata.
	const projects = {
		systems: [
			{
				type: 'img',
				key: 'ggf',
				logo: 'logo-ggf.svg',
				url: 'https://globalgovernanceframeworks.org'
			},
			{
				type: 'img',
				key: 'fjäril',
				logo: 'logo-fjarilspartiet.svg',
				url: 'https://fjarilspartiet.se'
			}
		],
		quartet: [
			{ type: 'img', key: 'spiralize', logo: 'logo-spiralize.svg', url: 'https://spiralize.org' },
			{ type: 'img', key: 'nondualize', logo: 'logo-nondualize.svg', url: 'https://nondualize.org' },
			{ type: 'img', key: 'communize', logo: 'logo-communize.svg', url: 'https://communize.org' },
			{
				type: 'img',
				key: 'universalize',
				logo: 'logo-universalize.svg',
				url: null,
				comingSoon: true
			}
		],
		// --- ▼▼▼ NEW CLUSTER ▼▼▼ ---
		library: [
			{
				type: 'emoji',
				key: 'books',
				emoji: '📖',
				url: '/books'
			},
			{
				type: 'emoji',
				key: 'whitepapers',
				emoji: '📄',
				url: '/whitepapers'
			},
			{
				type: 'emoji',
				key: 'blog',
				emoji: '✍️',
				url: '/blog'
			}
		],
		// --- ▲▲▲ NEW CLUSTER ▲▲▲ ---
		personal: [
			{
				type: 'img',
				key: 'spiritualized',
				logo: 'logo-spiritualized.svg',
				url: 'https://spiritualized.org'
			},
			{
				type: 'emoji',
				key: 'apps',
				emoji: '🛠️',
				url: '/apps'
			},
			{
				type: 'emoji',
				key: 'creations',
				emoji: '🎨',
				url: '/creations'
			},
			{
				type: 'emoji',
				key: 'concepts',
				emoji: '💡',
				url: '/concepts'
			}
			// --- blog and books were removed from here ---
		]
	};
</script>

<SEO
	title={$t.meta.title}
	description={$t.meta.description}
	keywords={'systems thinking, consciousness, global governance, björn kenneth holmström, polycrisis'}
	image={'/social-preview.png'}
	type={'website'}
/>

<div class="mx-auto max-w-7xl">
	<section class="bg-slate-900 py-16 text-center text-white md:py-24">
		<div class="mx-auto max-w-3xl px-4">
			<h1
				class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl pb-2"
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
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterSystems}
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each projects.systems as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
					>
						<img
							src={project.logo}
							alt={`${$t[`${project.key}Title`]} logo`}
							class="mb-4 h-12 w-auto"
						/>
						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterQuartet}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each projects.quartet as project}
					{#if project.comingSoon}
						<div
							class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 opacity-70"
						>
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
							<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
								{$t[`${project.key}Title`]}
							</h3>
							<p class="text-[var(--color-card-text)] opacity-80">
								{$t[`${project.key}Tagline`]}
							</p>
							<div class="mt-3">
								<span
									class="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300"
								>
									Coming Soon
								</span>
							</div>
						</div>
					{:else}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
						>
							<img
								src={project.logo}
								alt={`${$t[`${project.key}Title`]} logo`}
								class="mb-4 h-12 w-auto"
							/>
							<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
								{$t[`${project.key}Title`]}
							</h3>
							<p class="text-[var(--color-card-text)] opacity-80">
								{$t[`${project.key}Tagline`]}
							</p>
						</a>
					{/if}
				{/each}
			</div>
		</div>

		<div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterLibrary}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects.library as project}
					<a
						href={project.url}
						target="_self"
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
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

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>
		<div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterPersonal}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each projects.personal as project}
					<a
						href={project.url}
						target={project.url.startsWith('/') ? '_self' : '_blank'}
						rel={project.url.startsWith('/') ? '' : 'noopener noreferrer'}
						class="block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
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

						<h3 class="text-xl font-semibold text-[var(--color-card-text)]">
							{$t[`${project.key}Title`]}
						</h3>
						<p class="text-[var(--color-card-text)] opacity-80">
							{$t[`${project.key}Tagline`]}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
</div>
