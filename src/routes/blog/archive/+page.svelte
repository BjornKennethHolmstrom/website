<!-- src/routes/blog/archive/+page.svelte -->
<script lang="ts">
	import { t } from '$lib/stores/languageStore';
	import { BLOG_LANGUAGES, sortLanguagesForDisplay, type BlogLanguage } from '$lib/utils/blogTranslations';
	import { language } from '$lib/stores/languageStore';
	
	let { data } = $props();
	let currentStoreLang = $derived($language);
	
	// Get posts from data
	let posts = $derived(data?.posts || []);
	
	// State for filters - these are reactive
	let selectedCategory: string | null = $state(null);
	let selectedYear: string | null = $state(null);
	
	// State for processed data - these need to be reactive!
	let groupedByYear: Record<string, typeof posts> = $state({});
	let categories: Set<string> = $state(new Set());
	
	// Process posts whenever posts change
	$effect(() => {
		// Reset
		const newGroupedByYear: Record<string, typeof posts> = {};
		const newCategories = new Set<string>();
		
		if (posts && posts.length > 0) {
			posts.forEach(post => {
				if (post?.metadata?.date) {
					const year = new Date(post.metadata.date).getFullYear().toString();
					if (!newGroupedByYear[year]) {
						newGroupedByYear[year] = [];
					}
					newGroupedByYear[year].push(post);
				}
				
				// Collect categories
				if (post?.metadata?.categories) {
					post.metadata.categories.forEach(cat => newCategories.add(cat));
				}
			});
			
			// Sort years descending
			groupedByYear = Object.fromEntries(
				Object.entries(newGroupedByYear).sort((a, b) => b[0].localeCompare(a[0]))
			);
			categories = newCategories;
		} else {
			groupedByYear = {};
			categories = new Set();
		}
	});
	
	// Filter posts based on selected category/year
	const filteredPosts = $derived(
		posts.filter(post => {
			if (!post?.metadata) return false;
			
			if (selectedCategory && !post.metadata.categories?.includes(selectedCategory)) {
				return false;
			}
			if (selectedYear && post.metadata.date) {
				const postYear = new Date(post.metadata.date).getFullYear().toString();
				if (postYear !== selectedYear) {
					return false;
				}
			}
			return true;
		})
	);
	
	// Sort posts by date
	const sortedFilteredPosts = $derived(
		[...filteredPosts].sort((a, b) => {
			const dateA = a?.metadata?.date ? new Date(a.metadata.date).getTime() : 0;
			const dateB = b?.metadata?.date ? new Date(b.metadata.date).getTime() : 0;
			return dateB - dateA;
		})
	);
	
	function getSortedTranslations(translations: BlogLanguage[] = []): BlogLanguage[] {
		return sortLanguagesForDisplay(translations || [], currentStoreLang);
	}
	
	function resetFilters() {
		selectedCategory = null;
		selectedYear = null;
	}
	
	let sortedCategories = $derived(Array.from(categories).sort());
	
	// Format date based on current language
	function formatDate(dateString: string) {
		if (!dateString) return '';
		try {
			const date = new Date(dateString);
			return date.toLocaleDateString(currentStoreLang === 'sv' ? 'sv-SE' : 'en-US', { 
				year: 'numeric', 
				month: 'short', 
				day: 'numeric' 
			});
		} catch (e) {
			return dateString;
		}
	}
</script>

<div class="max-w-6xl mx-auto px-4 pt-16 pb-24">
	<!-- Header with back link -->
	<div class="mb-8 flex items-center justify-between">
		<div>
			<a 
				href="/blog" 
				class="inline-flex items-center gap-1 text-sm opacity-70 hover:opacity-100 transition-opacity mb-4"
			>
				<span>←</span>
				<span>{$t.archive?.backToBlog || 'Back to blog'}</span>
			</a>
			<h1 class="text-4xl font-bold mb-3" style="color: var(--color-page-accent);">
				{$t.archive?.title || 'Blog Archive'}
			</h1>
			<p class="opacity-80 max-w-2xl">
				{$t.archive?.description || 'Early writings and reflections'}
			</p>
		</div>
		
		<!-- Archive stats -->
		<div class="text-right opacity-70 text-sm">
			<div>{posts.length} {$t.archive?.stats?.posts || 'posts'}</div>
			<div>{Object.keys(groupedByYear).length} {$t.archive?.stats?.years || 'years'}</div>
		</div>
	</div>
	
	<!-- Filters - only show if we have posts -->
	{#if posts.length > 0}
		<div class="mb-8 p-4 rounded-lg" style="background-color: var(--color-card-bg);">
			<div class="flex flex-wrap items-center gap-4">
				<span class="text-sm font-medium opacity-70">{$t.archive?.filters?.title || 'Filter by:'}</span>
				
				<!-- Year filter -->
			 <select 
				 bind:value={selectedYear}
				 class="px-3 py-1.5 rounded text-sm min-w-[120px] pr-8"
				 style="background-color: var(--color-page-bg); border-color: var(--color-separator);"
			 >
				 <option value={null}>{$t.archive?.filters?.allYears || 'All years'}</option>
				 {#each Object.entries(groupedByYear) as [year, yearPosts]}
					 <option value={year}>{year} ({yearPosts.length})</option>
				 {/each}
			 </select>
				
				<!-- Category filter - only show if we have categories -->
				{#if sortedCategories.length > 0}
					<select 
						bind:value={selectedCategory}
						class="px-3 py-1 rounded text-sm"
						style="background-color: var(--color-page-bg); border-color: var(--color-separator);"
					>
						<option value={null}>{$t.archive?.filters?.allCategories || 'All categories'}</option>
						{#each sortedCategories as category}
							<option value={category}>{category}</option>
						{/each}
					</select>
				{/if}
				
				<!-- Reset button -->
				{#if selectedCategory || selectedYear}
					<button 
						onclick={resetFilters}
						class="text-sm opacity-60 hover:opacity-100 transition-opacity underline"
					>
						{$t.archive?.filters?.reset || 'Reset filters'}
					</button>
				{/if}
			</div>
		</div>
	{/if}
	
	<!-- Posts grid -->
	{#if sortedFilteredPosts.length > 0}
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each sortedFilteredPosts as post}
				{@const metadata = post?.metadata || {}}
				{@const translations = post?.translations || []}
				
				<article 
					class="rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg flex flex-col opacity-90 hover:opacity-100"
					style="background-color: var(--color-card-bg);"
				>
					<!-- Cover Image or placeholder -->
					<a href="/blog/{post?.slug || '#'}" class="block">
						{#if metadata.coverImage}
							<img
								src={metadata.coverImage}
								alt={metadata.title || 'Blog post'}
								class="w-full h-40 object-cover"
							/>
						{:else}
							<div 
								class="w-full h-40 flex items-center justify-center text-3xl opacity-20"
								style="background: linear-gradient(135deg, var(--color-page-accent) 0%, var(--color-card-bg) 100%);"
							>
								📜
							</div>
						{/if}
					</a>
					
					<!-- Content -->
					<div class="p-4 flex flex-col flex-grow">
						<!-- Header with title and language indicators -->
						<div class="flex justify-between items-start gap-2 mb-2">
							<h2 class="text-lg font-semibold">
								<a 
									href="/blog/{post?.slug || '#'}" 
									class="hover:opacity-70 transition-opacity"
									style="color: var(--color-page-accent);"
								>
									{metadata.title || 'Untitled'}
								</a>
							</h2>
							
							<!-- Language indicators -->
							{#if translations.length > 0}
								<div class="flex gap-1 text-sm flex-shrink-0">
									{#each getSortedTranslations(translations).slice(0, 3) as lang}
										{@const langInfo = BLOG_LANGUAGES[lang]}
										{#if lang === 'eu'}
											<img src="/blog/basque-flag.svg" alt="Basque flag" class="inline-block h-4 w-5" title={langInfo?.name || lang} />
										{:else if langInfo}
											<span class="opacity-60" title={langInfo.name}>
												{langInfo.flag}
											</span>
										{/if}
									{/each}
									{#if translations.length > 3}
										<span class="text-xs opacity-40">+{translations.length - 3}</span>
									{/if}
								</div>
							{/if}
						</div>
						
						<!-- Date -->
						{#if metadata.date}
							<p class="text-xs opacity-50 mb-2">
								{formatDate(metadata.date)}
							</p>
						{/if}
						
						<!-- Excerpt -->
						{#if metadata.excerpt}
							<p class="text-sm opacity-70 mb-3 line-clamp-2">
								{metadata.excerpt}
							</p>
						{/if}
						
						<!-- Categories -->
						{#if metadata.categories && metadata.categories.length > 0}
							<div class="flex gap-1 mt-auto flex-wrap">
								{#each metadata.categories.slice(0, 2) as category}
									<span 
										class="text-xs px-2 py-0.5 rounded"
										style="background-color: var(--color-page-bg); opacity: 0.6;"
									>
										{category}
									</span>
								{/each}
								{#if metadata.categories.length > 2}
									<span class="text-xs opacity-40">+{metadata.categories.length - 2}</span>
								{/if}
							</div>
						{/if}
						
						<!-- Read more link -->
						<div class="mt-3 text-xs">
							<a 
								href="/blog/{post?.slug || '#'}" 
								class="opacity-50 hover:opacity-100 transition-opacity"
								style="color: var(--color-page-accent);"
							>
								{$t.archive?.post?.readMore || 'Read more'} →
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	
	<!-- Empty state -->
	{:else}
		<div class="text-center py-12 opacity-60">
			<p class="text-lg">{$t.archive?.emptyState?.noPosts || 'No archived posts match your filters.'}</p>
			{#if selectedCategory || selectedYear}
				<button 
					onclick={resetFilters}
					class="mt-4 text-sm underline hover:no-underline"
					style="color: var(--color-page-accent);"
				>
					{$t.archive?.emptyState?.clearFilters || 'Clear filters'}
				</button>
			{/if}
		</div>
	{/if}
</div>
