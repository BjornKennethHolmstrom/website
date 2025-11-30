<!-- src/routes/essays/change-paradox/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './metabolic-governance.md';
	import ContentSv from './metabolic-governance-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
    title: "The Change Paradox",
    subtitle: "Metabolic Governance for an Accelerating World",
    description: "Why systems collapse when input velocity exceeds processing capacity. Introducing 'Metabolic Governance'—the architectural necessity of slowing down to survive the turn.",
			published: "March 2025",
			readTime: "15 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
   title: "Förändringsparadoxen",
   subtitle: "Metabolisk styrning för en accelererande värld",
   description: "Varför system kollapsar när ingångshastigheten överstiger bearbetningskapaciteten. Introduktion till 'Metabolisk styrning' – den arkitektoniska nödvändigheten av att sakta ner för att överleva vändningen.",
			published: "Mars 2025",
			readTime: "15 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "A Contemplative Guide Through Depression");
	let seoDescription = $derived(t?.description || "Gentle reflections for navigating depression using the LMCI framework");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="depression, LMCI, love meaning connection, mental health, healing, self-compassion, emotional health, spiritual growth, resilience, hope"
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

	<!-- Mental Health Support -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Important Note' : 'Viktigt Att Notera'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">💝</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'This Guide is a Companion, Not a Cure' : 'Denna Guide är en Följeslagare, Inte en Botemedel'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Depression is real and often requires professional support. This guide is meant to walk alongside you, not replace necessary treatment.'
							: 'Depression är verklig och kräver ofta professionellt stöd. Denna guide är tänkt att gå bredvid dig, inte ersätta nödvändig behandling.'
						}
					</p>
					<div class="mt-2 text-sm" style="color: var(--color-page-text); opacity: 0.8;">
						{$language === 'en' 
							? 'If you\'re in crisis, please reach out to mental health professionals or crisis helplines.'
							: 'Om du är i kris, vänligen kontakta psykolog, psykiatriker eller krisjourer.'
						}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- LMCI Resource -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Explore LMCI Further' : 'Utforska LMCI Vidare'}
		</h3>
		<div class="space-y-3">
			<a
				href="https://bjornkennethholmstrom.wordpress.com/love-meaning-connection-a-new-index-for-measuring-what-matters-2/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-3 p-4 rounded transition-colors hover:opacity-80"
				style="background-color: var(--color-card-bg); color: var(--color-page-text);"
			>
				<span class="text-3xl">📚</span>
				<div class="flex-1">
					<h4 class="font-bold">{$language === 'en' ? 'Love, Meaning, Connection Book' : 'Kärlek, Mening, Anslutning Bok'}</h4>
					<p class="text-sm opacity-70">
						{$language === 'en' 
							? 'The complete framework behind the LMCI index'
							: 'Det kompletta ramverket bakom LMCI-indexet'
						}
					</p>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 opacity-70">
					<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<a
				href="/essays/depression-as-a-thistle"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌿</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Depression as a Thistle" 
								: "Depression som en Tistel"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'What your pain is trying to heal—ecological perspective on depression' 
								: 'Vad din smärta försöker läka—ekologiskt perspektiv på depression'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/lost-ability"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🧘</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "I Lost the Ability to Just Be" 
								: "Jag Förlorade Förmågan att Bara Vara"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'How modern life atrophies our capacity for presence and connection' 
								: 'Hur det moderna livet atrofierar vår kapacitet för närvaro och anslutning'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/project-janus"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🎭</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Project Janus" 
								: "Project Janus"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Computational framework for modeling whole human experience' 
								: 'Beräkningsramverk för att modellera hela mänsklig erfarenhet'}
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
