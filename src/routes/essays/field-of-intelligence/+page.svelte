<!-- src/routes/essays/field-of-intelligence/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './field-of-intelligence.md';
	import ContentSv from './field-of-intelligence-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
   title: "The Field of Intelligence",
   subtitle: "Why Systems Thinking Is Not a Metaphor",
   description: "Intelligence isn't contained in a brain; it's a property of relationships. From slime molds to AI, exploring why intelligence is a non-local field we participate in, not a commodity we own.",
			published: "December 2024",
			readTime: "12 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Intelligensens fält",
			subtitle: "Varför systemtänkande inte är en metafor",
			description: "Intelligens finns inte i en hjärna; det är en egenskap hos relationer. Från slemsvampar till AI, utforskar varför intelligens är ett icke-lokalt fält vi deltar i, inte en vara vi äger.",
			published: "December 2024",
			readTime: "12 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "The Field of Intelligence");
	let seoDescription = $derived(t?.description || "Systems perspective on intelligence as a fundamental field");
	let seoPublished = $derived(t?.published || "2024");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="intelligence, systems thinking, field theory, non-local mind, fractal intelligence, emergence, governance, biomimicry, complexity"
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

	<!-- Key Concepts -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Key Concepts' : 'Nyckelbegrepp'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌀</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Non-Local Intelligence' : 'Icke-Lokal Intelligens'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Intelligence emerging from relationships rather than being contained within entities'
							: 'Intelligens som uppstår från relationer snarare än att finnas inom entiteter'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔄</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Fractal Intelligence' : 'Fraktal Intelligens'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Intelligent patterns repeating at different scales from neurons to ecosystems'
							: 'Intelligenta mönster som upprepar sig vid olika skalor från neuroner till ekosystem'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🌐</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Emergent Property' : 'Emergent Egenskap'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Intelligence existing in the space between nodes rather than within them'
							: 'Intelligens som existerar i utrymmet mellan noder snarare än inom dem'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Governance Implications -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Governance Implications' : 'Styrningsimplikationer'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🏛️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'From Container to Field Theory' : 'Från Container till Fältteori'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Moving from centralized "smart leaders" to distributed, biomimetic governance'
							: 'Från centraliserade "smarta ledare" till distribuerad, biomimetisk styrning'
						}
					</p>
					<div class="mt-2 text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
						<div>• {$language === 'en' ? 'Subsidiarity: Local nodes process local data' : 'Subsidiaritet: Lokala noder bearbetar lokal data'}</div>
						<div>• {$language === 'en' ? 'Open Signals: Radical transparency' : 'Öppna Signaleringar: Radikal transparens'}</div>
						<div>• {$language === 'en' ? 'Feedback Loops: Real-time self-correction' : 'Återkopplingar: Real-tid självkorrigering'}</div>
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
				href="/essays/mycelial-economy"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🍄</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Understanding Infinite Intelligence" 
								: "Att Förstå Oändlig Intelligens"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'A systems perspective on intelligence as permeating phenomenon' 
								: 'Ett systemperspektiv på intelligens som genomsyrande fenomen'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/the-ai-mirror"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🪞</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The AI Mirror" 
								: "AI-spegeln"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'What AI reveals about the nature of intelligence and self' 
								: 'Vad AI avslöjar om intelligensens och självets natur'}
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
								? "The Architecture of Wholeness" 
								: "Helhetens arkitektur"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Project Janus: A Blueprint for Modeling Human Complexity' 
								: 'Projekt Janus: En ritning för modellering av mänsklig komplexitet'}
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
