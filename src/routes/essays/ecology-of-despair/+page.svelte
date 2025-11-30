<!-- src/routes/essays/ecology-of-despair/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './ecology-of-despair.md';
	import ContentSv from './ecology-of-despair-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Ecology of Despair",
			subtitle: "Depression as a Systemic Signal",
			description: "Why we should view mental health through the lens of regenerative agriculture. Seeing depression not as a malfunction, but as a 'thistle' trying to break up compacted soil.",
			published: "November 2025",
			readTime: "12 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
   title: "Förtvivlans ekologi",
   subtitle: "Depression som en systemisk signal",
   description: "Varför vi bör se psykisk hälsa genom ett regenerativt jordbruksperspektiv. Att se depression inte som ett fel, utan som en 'tistel' som försöker bryta upp kompakterad jord.",
			published: "November 2025",
			readTime: "12 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "Depression as a Thistle");
	let seoDescription = $derived(t?.description || "Exploring depression as an ecological signal rather than a malfunction");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="depression, mental health, healing, metaphor, ecology, non-duality, psychotherapy, self-compassion, emotional health"
	section="Essays"
/>

<article class="mx-auto max-w-4xl px-4 pt-8 pb-24">
	<!-- Header -->
	<header class="mb-12 border-b border-[var(--color-separator)] pb-8">
		<h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
			{t.title}
		</h1>
		<p class="text-xl md:text-2xl italic mb-6" style="color: var(--color-page-text); opacity: 0.8;">
			{t.subtitle}
		</p>
		<div class="flex flex-wrap items-center gap-4 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.author}</span>
			<span>•</span>
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
	</header>

	<!-- Essay Content -->
	<div
		class="prose prose-lg max-w-none"
		style="
			--tw-prose-body: var(--color-page-text);
			--tw-prose-headings: var(--color-page-text);
			--tw-prose-links: var(--color-link);
			--tw-prose-bold: var(--color-page-text);
			--tw-prose-code: var(--color-page-text);
			--tw-prose-pre-code: var(--color-page-text);
			--tw-prose-pre-bg: var(--color-card-bg);
			--tw-prose-th-borders: var(--color-separator);
			--tw-prose-td-borders: var(--color-separator);
			--tw-prose-quotes: var(--color-page-text);
		"
	>
		<Content />
	</div>

	<!-- Share Buttons -->
	<div class="mt-12">
		<ShareButtons title={t.title} />
	</div>

	<!-- Mental Health Resources -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Mental Health Support' : 'Stöd för Psykisk Hälsa'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">💝</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'You Are Not Alone' : 'Du Är Inte Ensam'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'If you\'re struggling with depression, please reach out for professional support.'
							: 'Om du kämpar med depression, vänligen sök professionellt stöd.'
						}
					</p>
					<div class="mt-2 text-sm" style="color: var(--color-page-text); opacity: 0.8;">
						{$language === 'en' 
							? '• Crisis helplines are available 24/7 in most countries'
							: '• Krisjourer finns tillgängliga dygnet runt i de flesta länder'
						}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/change-paradox"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🏎️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Change Paradox" 
								: "Förändringsparadoxen"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why systems collapse when input velocity exceeds processing capacity' 
								: 'Varför system kollapsar när ingångshastigheten överstiger bearbetningskapaciteten'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/architecture-of-stillness"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🧘</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Architecture of Stillness" 
								: "Stillhetens arkitektur"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'How modern life atrophies our capacity for presence' 
								: 'Hur det moderna livet atrofierar vår kapacitet för närvaro'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="https://www.nondualize.org"
				target="_blank"
				rel="noopener noreferrer"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌌</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							Nondualize.org
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Free resource exploring non-dual understanding of experience' 
								: 'Gratis resurs som utforskar icke-dual förståelse av erfarenhet'}
						</p>
					</div>
				</div>
			</a>
		</div>
	</nav>

	<!-- Back to Essays -->
	<div class="not-prose mt-12 text-center">
		<a
			href="/essays"
			class="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
			style="color: var(--color-page-text);"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
				<path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
			</svg>
			{$language === 'en' ? 'Back to Essays' : 'Tillbaka till essäer'}
		</a>
	</div>
</article>
