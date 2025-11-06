<!-- src/lib/components/SEO.svelte -->
<script lang="ts">
	import { page } from '$app/stores';

	// Props med Svelte 5 Runes
	type Props = {
		title: string;
		description: string;
		keywords?: string;
		image?: string;
		type?: 'website' | 'article';
		author?: string;
		publishedTime?: string;
		modifiedTime?: string;
		section?: string;
	};

	let {
		title,
		description,
		keywords = '',
		image = '/social-preview.png', // Rekommenderar att skapa en generell förhandsvisningsbild
		type = 'website',
		author = 'Björn Kenneth Holmström',
		publishedTime = '',
		modifiedTime = '',
		section = ''
	}: Props = $props();

	// === ANPASSADE INSTÄLLNINGAR ===
	const siteName = 'Björn Kenneth Holmström';
	const baseUrl = 'https://bjornkennethholmstrom.org';
	const twitterHandle = '@BjornKHolmstrom'
	// ================================

	// Beräkna fullständig URL (SSR-säker)
	let url = $derived($page.url.href);

	// Beräkna fullständig bild-URL
	let fullImageUrl = $derived(image.startsWith('http') ? image : `${baseUrl}${image}`);

	// Konstruera fullständig titel
	let fullTitle = $derived(title.includes(siteName) ? title : `${title} | ${siteName}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="title" content={fullTitle} />
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	<meta name="author" content={author} />

	<link rel="canonical" href={url} />

	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:site_name" content={siteName} />

	{#if type === 'article'}
		<meta property="article:author" content={author} />
		{#if publishedTime}
			<meta property="article:published_time" content={publishedTime} />
		{/if}
		{#if modifiedTime}
			<meta property="article:modified_time" content={modifiedTime} />
		{/if}
		{#if section}
			<meta property="article:section" content={section} />
		{/if}
		{#if keywords}
			{#each keywords.split(',').map((k) => k.trim()) as keyword}
				<meta property="article:tag" content={keyword} />
			{/each}
		{/if}
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />
	{#if twitterHandle}
		<meta name="twitter:creator" content={twitterHandle} />
		<meta name="twitter:site" content={twitterHandle} />
	{/if}
</svelte:head>
