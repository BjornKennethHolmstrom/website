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
	class="prose prose-lg dark:prose-invert mx-auto
           prose-img:rounded-xl prose-a:text-[var(--color-accent)] hover:prose-a:underline
           px-4 pt-16 pb-24"
>
	<h1>{data.metadata.title}</h1>
	<p class="text-lg text-slate-600 dark:text-slate-400">
		Publicerad: {new Date(data.metadata.date).toLocaleDateString('sv-SE', { dateStyle: 'long' })}
	</p>

	{@render data.content()}

	<ShareButtons title={data.metadata.title} />
</article>
