<!-- src/routes/blog/[slug]/+page.svelte -->
<script lang="ts">
	let { data } = $props();
	import ShareButtons from '$lib/components/ShareButtons.svelte';
 import SEO from '$lib/components/SEO.svelte';
 let keywords = $derived(
		[
			...(data.metadata.categories || []), // Från din posts frontmatter
			'Björn Kenneth Holmström',
			'blog',
			'systems thinking',
			'consciousness'
		].join(', ')
	);
</script>

<SEO
	title={data.metadata.title}
	description={`Blog post: ${data.metadata.title}`}
	type="article"
	publishedTime={data.metadata.date}
	image={data.metadata.coverImage || '/social-preview.png'}
	keywords={keywords}
	section="Blog"
/>

<article
	class="prose prose-lg mx-auto px-4 pt-16 pb-24"
	style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text); --tw-prose-captions: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg); --tw-prose-th-borders: var(--color-separator); --tw-prose-td-borders: var(--color-separator);"
>
	<h1>{data.metadata.title}</h1>
	<p class="text-lg opacity-70">
		Publicerad: {new Date(data.metadata.date).toLocaleDateString('sv-SE', { dateStyle: 'long' })}
	</p>

	{#if data.metadata.coverImage}
		<img
			src={data.metadata.coverImage}
			alt="Omslagsbild"
			class="not-prose mb-8 rounded-xl"
		/>
	{/if}

	{@render data.content()}

	<ShareButtons title={data.metadata.title} />
</article>
