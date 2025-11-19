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
  architecture: [
			{
				type: 'emoji',
				key: 'spheres',
    emoji: '🪐', // Ringed planet for Shared Spheres
				url: 'https://github.com/BjornKennethHolmstrom/SharedSpheres'
			},
			{
				type: 'emoji',
				key: 'janus',
				emoji: '🧠', // Brain/Wisdom for Janus
				url: 'https://github.com/BjornKennethHolmstrom/ProjectJanus'
			},
			{
				type: 'emoji',
				key: 'cosmic',
				emoji: '🏗️', // Infrastructure for CosmicSync
				url: 'https://github.com/BjornKennethHolmstrom/CosmicSyncCore'
			}
		],
		quartet: [
			{ type: 'img', key: 'spiralize', logo: 'logo-spiralize.svg', url: 'https://spiralize.org' },
			{ type: 'img', key: 'nondualize', logo: 'logo-nondualize.svg', url: 'https://nondualize.org' },
			{ type: 'img', key: 'communize', logo: 'logo-communize.svg', url: 'https://communize.org' },
			{	type: 'img',	key: 'universalize',	logo: 'logo-universalize.svg',	url: 'https://universalize.org' }
		],
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
		]
	};

  // Helper to determine link type
  function getLinkType(url: string) {
    if (url.includes('github.com')) return 'github';
    if (url.startsWith('http')) return 'external';
    return 'local';
  }
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
						class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
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

      <div class="absolute top-4 right-4 text-[var(--color-card-text)] opacity-20 transition-opacity group-hover:opacity-60">
      {#if getLinkType(project.url) === 'github'}
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      {:else if getLinkType(project.url) === 'external'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      {/if}
      </div>
					</a>
				{/each}
			</div>
		</div>

  <div>
			<h2 class="mb-6 text-2xl font-semibold text-[var(--color-page-accent)] sm:text-3xl">
				{$t.clusterArchitecture}
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects.architecture as project}
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
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

      <div class="absolute top-4 right-4 text-[var(--color-card-text)] opacity-20 transition-opacity group-hover:opacity-60">
      {#if getLinkType(project.url) === 'github'}
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      {:else if getLinkType(project.url) === 'external'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      {/if}
      </div>
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
							class="group relative block rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 shadow-md transition-shadow hover:shadow-lg"
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
       <div class="absolute top-4 right-4 text-[var(--color-card-text)] opacity-20 transition-opacity group-hover:opacity-60">
       {#if getLinkType(project.url) === 'github'}
         <svg role="img" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
           <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
         </svg>
       {:else if getLinkType(project.url) === 'external'}
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
           <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
         </svg>
       {/if}
       </div>
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
