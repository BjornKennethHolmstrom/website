<script lang="ts">
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';

	// 1. Get the data from the +page.ts loader
	let { data } = $props();

	// 2. Create reactive variables based on language
	//    It defaults to Swedish ($language) if it exists, otherwise falls back to English
	const post = $derived(data.content[$language] || data.content.en);
	const metadata = $derived(post.metadata);
	const content = $derived(post.default);

	// 3. Build keywords just like the blog page
	const keywords = $derived(
		[
			...(metadata.categories || []),
			'Björn Kenneth Holmström',
			'enlightenment',
			'consciousness',
			'nonduality'
		].join(', ')
	);
</script>

<SEO
	title={metadata.title}
	description={`Enlightenment article: ${metadata.title}`}
	type="article"
	publishedTime={metadata.date}
	keywords={keywords}
	section="Creations"
/>

<article
	class="prose prose-lg mx-auto px-4 pt-16 pb-24"
	style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text); --tw-prose-captions: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg); --tw-prose-th-borders: var(--color-separator); --tw-prose-td-borders: var(--color-separator);"
>
	<h1>{metadata.title}</h1>

	{@render content()}

	<div class="mt-16 border-t border-[var(--color-separator)] pt-8">
		<a href="/creations/enlightenment" class="link no-underline">&larr; Back to Enlightenment</a>
	</div>
</article>

<style>
	.link {
		color: var(--color-page-accent);
		text-decoration: none;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
