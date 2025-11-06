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
	class="prose prose-lg dark:prose-invert mx-auto
           prose-img:rounded-xl prose-a:text-[var(--color-accent)] hover:prose-a:underline
           px-4 pt-16 pb-24"
>
	<h1>{data.metadata.title}</h1>
	<p class="text-lg text-slate-600 dark:text-slate-400">
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
