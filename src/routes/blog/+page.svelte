<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	import { BLOG_LANGUAGES, sortLanguagesForDisplay, type BlogLanguage } from '$lib/utils/blogTranslations';
	import { language } from '$lib/stores/languageStore';
	
	let { data } = $props();
	let currentStoreLang = $derived($language);
	
	// Sort posts by date, newest first
	const sortedPosts = $derived(
		data.posts.sort((a, b) => 
			new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
		)
	);
	
	// Sort languages for each post
	function getSortedTranslations(translations: BlogLanguage[]): BlogLanguage[] {
		return sortLanguagesForDisplay(translations, currentStoreLang);
	}
</script>

<div class="max-w-6xl mx-auto px-4 pt-16 pb-24">
	<h1 class="text-4xl font-bold mb-12">Blog</h1>
	
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each sortedPosts as post}
			<article 
				class="rounded-lg overflow-hidden transition-transform hover:scale-[1.02] flex flex-col"
				style="background-color: var(--color-card-bg);"
			>
				<!-- Cover Image -->
				{#if post.metadata.coverImage}
					<a href="/blog/{post.slug}" class="block">
						<img
							src={post.metadata.coverImage}
							alt={post.metadata.title}
							class="w-full h-48 object-cover"
						/>
					</a>
				{:else}
					<a href="/blog/{post.slug}" class="block">
						<div 
							class="w-full h-48 flex items-center justify-center text-4xl opacity-20"
							style="background: linear-gradient(135deg, var(--color-page-accent) 0%, var(--color-card-bg) 100%);"
						>
							📝
						</div>
					</a>
				{/if}
				
				<!-- Content -->
				<div class="p-6 flex flex-col flex-grow">
					<!-- Header with title and language indicators -->
					<div class="flex justify-between items-start gap-3 mb-3">
						<h2 class="text-xl font-semibold flex-grow">
							<a 
								href="/blog/{post.slug}" 
								class="hover:opacity-70 transition-opacity"
								style="color: var(--color-page-accent);"
							>
								{post.metadata.title}
							</a>
						</h2>
						
						<!-- Language indicators -->
						<div class="flex gap-1 text-base flex-shrink-0 flex-wrap justify-end max-w-[80px]">
							{#each getSortedTranslations(post.translations) as lang}
								{@const langInfo = BLOG_LANGUAGES[lang]}
								{#if lang === 'en'}
									<!-- English: just show flag, links to base URL -->
									<a 
										href="/blog/{post.slug}"
										class="hover:opacity-70 transition-opacity inline-flex items-center"
										title={langInfo.name}
									>
										{langInfo.flag}
									</a>
								{:else if lang === 'eu'}
									<!-- Basque: use SVG flag -->
									<a 
										href="/blog/{post.slug}?lang={lang}"
										class="hover:opacity-70 transition-opacity inline-flex items-center"
										title={langInfo.name}
									>
										<img src="/blog/basque-flag.svg" alt="Basque flag" class="inline-block h-6 w-6" />
									</a>
								{:else}
									<!-- Other languages: link with ?lang parameter -->
									<a 
										href="/blog/{post.slug}?lang={lang}"
										class="hover:opacity-70 transition-opacity inline-flex items-center"
										title={langInfo.name}
									>
										{langInfo.flag}
									</a>
								{/if}
							{/each}
						</div>
					</div>
					
					<!-- Date -->
					<p class="text-sm opacity-60 mb-3">
						{new Date(post.metadata.date).toLocaleDateString('en-US', { 
							year: 'numeric', 
							month: 'long', 
							day: 'numeric' 
						})}
					</p>
					
					<!-- Excerpt -->
					{#if post.metadata.excerpt}
						<p class="opacity-80 mb-4 flex-grow">
							{post.metadata.excerpt}
						</p>
					{/if}
					
					<!-- Categories -->
					{#if post.metadata.categories && post.metadata.categories.length > 0}
						<div class="flex gap-2 mt-auto flex-wrap">
							{#each post.metadata.categories as category}
								<span 
									class="text-xs px-2 py-1 rounded"
									style="background-color: var(--color-page-bg); opacity: 0.8;"
								>
									{category}
								</span>
							{/each}
						</div>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</div>
