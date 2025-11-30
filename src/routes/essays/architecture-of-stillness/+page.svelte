<!-- src/routes/essays/architecture-of-stillness/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './architecture-of-stillness.md';
	import ContentSv from './architecture-of-stillness-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Architecture of Stillness",
			subtitle: "Why We Lost the Ability to Just Be",
			description: "We haven't just lost our attention; we've lost the 'Cognitive Scaffolding' that made stillness valuable. A structural analysis of why modern minds treat silence like a software bug.",
			published: "November 2025",
			readTime: "18 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
   title: "Stillhetens arkitektur",
   subtitle: "Varför vi förlorade förmågan att bara vara",
   description: "Vi har inte bara förlorat vår uppmärksamhet; vi har förlorat den 'kognitiva byggnadsställningen' som gjorde stillhet värdefull. En strukturell analys av varför moderna sinnen behandlar tystnad som en programvarubugg.",
			published: "November 2025",
			readTime: "18 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "I Lost the Ability to Just Be");
	let seoDescription = $derived(t?.description || "Exploring how modern life atrophies our capacity for presence");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="presence, stillness, addiction, compulsive behavior, attention economy, burnout, modern life, being vs doing, civilizational crisis, cognitive scaffolding"
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

	<!-- Stillness Challenge -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'The Stillness Challenge' : 'Stillhetsutmaningen'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">⏱️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Try This Now' : 'Prova Detta Nu'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Set a timer for 5 minutes and just sit. Notice what happens.'
							: 'Sätt en timer på 5 minuter och bara sitt. Lägg märke till vad som händer.'
						}
					</p>
					<div class="mt-2 text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
						<div>• {$language === 'en' ? 'What task did your mind invent first?' : 'Vilken uppgift hittade ditt sinne på först?'}</div>
						<div>• {$language === 'en' ? 'Where did restlessness appear?' : 'Var dök rastlösheten upp?'}</div>
						<div>• {$language === 'en' ? 'Could you observe without judging?' : 'Kunde du observera utan att döma?'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Coming Next in Series -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Coming Next in This Series' : 'Kommer Härnäst i Denna Serie'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🏗️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Cognitive Scaffolding for Stillness' : 'Kognitiv Ställning för Stillhet'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Why Modern Minds Treat Silence Like a Software Bug'
							: 'Varför Moderna Sinnen Behandlar Tystnad som en Programvara Bug'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌍</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'From Personal Practice to Civilizational Rehab' : 'Från Personlig Praktik till Civilisations Rehab'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Designing Systems That Reward Being Human'
							: 'Designa System som Belönar Att Vara Mänsklig'
						}
					</p>
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
				href="/essays/ecology-of-despair"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌿</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Ecology of Despair" 
								: "Förtvivlans ekologi"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'What your pain is trying to heal—seeing signals in suffering' 
								: 'Vad din smärta försöker läka—att se signaler i lidande'}
						</p>
					</div>
				</div>
			</a>
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
								? 'Free resource exploring the nature of awareness and being' 
								: 'Gratis resurs som utforskar medvetandets och varandets natur'}
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
