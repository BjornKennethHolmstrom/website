<!-- src/routes/whitepaper/[slug]/+page.svelte -->
<script lang="ts">
	let { data } = $props();
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';

	// Skapa en enkel nyckelordslista
	let keywords = $derived(
		['white paper', data.metadata.title, 'Björn Kenneth Holmström', 'systems thinking'].join(', ')
	);
</script>

<SEO
	title={data.metadata.title}
	description={`White Paper: ${data.metadata.title}`}
	type="article"
	publishedTime={data.metadata.date}
	keywords={keywords}
	section="White Papers"
/>

<article
	class="prose prose-lg mx-auto px-4 pt-16 pb-24"
	style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text); --tw-prose-captions: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg); --tw-prose-th-borders: var(--color-separator); --tw-prose-td-borders: var(--color-separator);"
>
	<h1>{data.metadata.title}</h1>
	<p class="text-lg opacity-70">
		Publicerad: {new Date(data.metadata.date).toLocaleDateString('sv-SE', { dateStyle: 'long' })}
	</p>

	{@render data.content()}

	<ShareButtons title={data.metadata.title} />
</article>
