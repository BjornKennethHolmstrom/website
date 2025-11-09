<!-- src/routes/blog/[slug]/+page.svelte -->
<script lang="ts">
	let { data } = $props();
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { 
		getAvailableTranslations, 
		BLOG_LANGUAGES, 
		getLocaleForLanguage,
		getBlogUIText,
		sortLanguagesForDisplay,
		type BlogLanguage 
	} from '$lib/utils/blogTranslations';
	
	// React to language changes from the header (for en/sv only)
	let currentStoreLang = $derived($language);
	let currentSlug = $derived($page.params.slug || data.slug);
	
	// Get available translations for this post
	let availableTranslations = $state<BlogLanguage[]>([]);
	
	// Current post content and metadata (can be updated client-side)
	let currentContent = $state(data.content);
	let currentMetadata = $state(data.metadata);
	
	// Load available translations
	$effect(() => {
		if (browser) {
			getAvailableTranslations(currentSlug).then(langs => {
				availableTranslations = sortLanguagesForDisplay(langs, currentStoreLang);
			});
		}
	});
	
	// Load language-specific content client-side
	async function loadLanguageContent(lang: BlogLanguage) {
		if (!browser) return;
		
		try {
			let path = '';
			if (lang === 'en') {
				path = `/src/lib/posts/${currentSlug}/index.md`;
			} else {
				path = `/src/lib/posts/${currentSlug}/${BLOG_LANGUAGES[lang].dir}/index.md`;
			}
			
			// Dynamically import the markdown file
			const modules = import.meta.glob('$lib/posts/**/index.md');
			const module = await modules[path]?.();
			
			if (module) {
				currentContent = module.default;
				currentMetadata = { ...module.metadata, lang };
			}
		} catch (e) {
			console.error('Failed to load language content:', e);
		}
	}
	
	// Automatically sync with language store for en/sv
	$effect(() => {
		if (browser && currentSlug) {
			const url = new URL(window.location.href);
			const currentParam = url.searchParams.get('lang') as BlogLanguage | null;
			
			// Only auto-switch for languages in the store (en/sv)
			if (currentStoreLang === 'sv' && currentParam !== 'sv' && availableTranslations.includes('sv')) {
				url.searchParams.set('lang', 'sv');
				goto(url.pathname + url.search, { replaceState: true, noScroll: true });
				loadLanguageContent('sv');
			}
			else if (currentStoreLang === 'en' && currentParam === 'sv') {
				url.searchParams.delete('lang');
				goto(url.pathname + url.search, { replaceState: true, noScroll: true });
				loadLanguageContent('en');
			}
			// Load content for any other language in URL
			else if (currentParam && currentParam !== 'en' && BLOG_LANGUAGES[currentParam]) {
				loadLanguageContent(currentParam);
			}
		}
	});
	
	// Current language from metadata
	const currentLang = $derived((currentMetadata?.lang || 'en') as BlogLanguage);
	const locale = $derived(getLocaleForLanguage(currentLang));
	const uiText = $derived(getBlogUIText(currentLang));
	
	let keywords = $derived(
		[
			...(currentMetadata?.categories || []),
			'Björn Kenneth Holmström',
			'blog',
			'systems thinking',
			'consciousness'
		].join(', ')
	);
	
	// Language selector state
	let languageSelectorOpen = $state(false);
	
	function switchLanguage(lang: BlogLanguage) {
		const url = new URL(window.location.href);
		if (lang === 'en') {
			url.searchParams.delete('lang');
		} else {
			url.searchParams.set('lang', lang);
		}
		goto(url.pathname + url.search);
		loadLanguageContent(lang);
		languageSelectorOpen = false;
	}
	
	function toggleLanguageSelector() {
		languageSelectorOpen = !languageSelectorOpen;
	}
	
	// Close selector when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.language-selector')) {
			languageSelectorOpen = false;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

{#if currentMetadata}
	<SEO
		title={currentMetadata.title || 'Blog Post'}
		description={currentMetadata.excerpt || `Blog post: ${currentMetadata.title || 'Untitled'}`}
		type="article"
		publishedTime={currentMetadata.date}
		image={currentMetadata.coverImage || '/social-preview.png'}
		keywords={keywords}
		section="Blog"
	/>
{/if}

<article
	class="prose prose-lg mx-auto px-4 pt-16 pb-24"
	style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text); --tw-prose-captions: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg); --tw-prose-th-borders: var(--color-separator); --tw-prose-td-borders: var(--color-separator);"
>
	<!-- Language selector dropdown -->
	{#if availableTranslations.length > 1}
		<div class="not-prose mb-6 flex justify-end">
			<div class="language-selector relative">
				<button
					onclick={toggleLanguageSelector}
					class="flex items-center gap-2 px-4 py-2 rounded-lg bg-opacity-10 hover:bg-opacity-20 transition-colors"
					style="background-color: var(--color-page-accent);"
					aria-haspopup="true"
					aria-expanded={languageSelectorOpen}
				>
					<!-- Special case for Basque flag -->
					{#if currentLang === 'eu'}
						<img src="/blog/basque-flag.svg" alt="Basque flag" class="inline-block h-4 w-6" />
					{:else}
						<span>{BLOG_LANGUAGES[currentLang].flag}</span>
					{/if}
					<span class="text-sm font-medium">{BLOG_LANGUAGES[currentLang].name}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-4 w-4 transition-transform {languageSelectorOpen ? 'rotate-180' : ''}"
					>
						<path
							fill-rule="evenodd"
							d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				
				{#if languageSelectorOpen}
					<div
						class="absolute right-0 top-full z-20 mt-2 min-w-[160px] origin-top-right rounded-lg border shadow-lg"
						style="border-color: var(--color-separator); background-color: var(--color-card-bg);"
					>
						{#each availableTranslations as lang}
							<button
								onclick={() => switchLanguage(lang)}
								class="flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-opacity hover:opacity-70 {lang === currentLang ? 'font-semibold' : ''}"
								style="color: var(--color-page-text);"
							>
								<!-- Special case for Basque flag -->
								{#if lang === 'eu'}
									<img src="/blog/basque-flag.svg" alt="Basque flag" class="inline-block h-4 w-6" />
								{:else}
									<span class="text-lg">{BLOG_LANGUAGES[lang].flag}</span>
								{/if}
								<span>{BLOG_LANGUAGES[lang].name}</span>
								{#if lang === currentLang}
									<span class="ml-auto text-xs opacity-60">✓</span>
								{/if}
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}

	{#if currentMetadata?.title}
		<h1>{currentMetadata.title}</h1>
	{/if}
	
	{#if currentMetadata?.date}
		<p class="text-lg opacity-70">
			{uiText.published}: {new Date(currentMetadata.date).toLocaleDateString(locale, { dateStyle: 'long' })}
		</p>
	{/if}

	{#if currentMetadata?.coverImage}
		<img
			src={currentMetadata.coverImage}
			alt={currentMetadata.title || 'Cover image'}
			class="not-prose mb-8 rounded-xl"
		/>
	{/if}

	{#if currentContent}
		{@render currentContent()}
	{/if}

	{#if currentMetadata?.title}
		<ShareButtons title={currentMetadata.title} />
	{/if}
</article>
