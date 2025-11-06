<script lang="ts">
	import { t } from '$lib/stores/languageStore';

	// SvelteKits magiska sätt att importera flera filer
	// Vi använder 'eager' för att ladda allt direkt för listan
	const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });

	// $derived är global i Svelte 5, ingen import behövs
	let posts = $derived(
		Object.entries(modules)
			.map(([path, module]) => {
				// path = /src/lib/posts/2025-11-11-slug/index.md
				// Regex för att fånga sluggen: 2025-11-11-slug
				const slug = path.match(/src\/lib\/posts\/(.*?)\/index\.md/)[1];

				return {
					slug,
					...(module.metadata as { title: string; date: string; coverImage?: string })
				};
			})
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	);
</script>

<svelte:head>
	<title>{$t.blogTitle} | Björn Kenneth Holmström</title>
	<meta name="description" content="{$t.blogList}{$t.blogTitle.toLowerCase()}." />
</svelte:head>

<section class="bg-slate-900 py-16 text-center text-white md:py-24">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text pb-2 text-4xl font-bold text-transparent sm:text-5xl"
		>
			{$t.blogTitle}
		</h1>
		<p class="text-lg text-slate-300 sm:text-xl">
			{$t.blogList}{$t.blogTitle.toLowerCase()}.
		</p>
	</div>
</section>

<section class="mx-auto max-w-3xl px-4 py-16 md:py-24">
	<ul class="w-full space-y-8">
		{#each posts as post}
			<li
				class="block rounded-lg border border-[var(--color-separator)] bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-slate-800"
			>
				<a href="/blog/{post.slug}" class="block overflow-hidden rounded-lg">
					{#if post.coverImage}
						<img
							src={post.coverImage}
							alt="Omslagsbild för {post.title}"
							class="mb-4 aspect-video w-full object-cover"
						/>
					{/if}

					<div class="p-6">
						<h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
							{post.title}
						</h2>
						<p class="text-slate-600 dark:text-slate-400">
							{new Date(post.date).toLocaleDateString('sv-SE', { dateStyle: 'long' })}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>
