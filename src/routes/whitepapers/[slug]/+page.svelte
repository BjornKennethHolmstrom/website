<script lang="ts">
	let { data } = $props(); // 'data' is now just { slug } from the URL
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';

	// --- NEW DYNAMIC CONTENT LOADING ---
	let currentContent = $state();
	let currentMetadata = $state<any>(null);

	async function loadWhitepaperContent(slug: string) {
		if (!browser) return;
		try {
			const path = `/src/lib/whitepapers/${slug}/index.md`;
			const modules = import.meta.glob('$lib/whitepapers/**/index.md');
			const module = await modules[path]?.();

			if (module) {
				currentContent = module.default;
				currentMetadata = module.metadata;
			}
		} catch (e) {
			console.error('Failed to load whitepaper content:', e);
		}
	}

	// Load content when the slug changes
	$effect(() => {
		const slug = $page.params.slug;
		if (browser && slug) {
			loadWhitepaperContent(slug);
		}
	});
	// --- END NEW DYNAMIC CONTENT LOADING ---

	let keywords = $derived(
		['white paper', currentMetadata?.title || '', 'Björn Kenneth Holmström', 'systems thinking'].join(', ')
	);
</script>

{#if currentMetadata}
	<SEO
		title={currentMetadata.title}
		description={`White Paper: ${currentMetadata.title}`}
		type="article"
		publishedTime={currentMetadata.date}
		keywords={keywords}
		section="White Papers"
	/>

	<article
		class="prose prose-lg mx-auto px-4 pt-16 pb-24"
		style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text); --tw-prose-captions: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg); --tw-prose-th-borders: var(--color-separator); --tw-prose-td-borders: var(--color-separator);"
	>
		<h1>{currentMetadata.title}</h1>
		<p class="text-lg opacity-70">
			Publicerad: {new Date(currentMetadata.date).toLocaleDateString('sv-SE', { dateStyle: 'long' })}
		</p>

		{#if currentContent}
			{@render currentContent()}
		{/if}

		<ShareButtons title={currentMetadata.title} />
	</article>
{:else}
	<div class="mx-auto px-4 pt-16 pb-24 text-center">Laddar...</div>
{/if}
