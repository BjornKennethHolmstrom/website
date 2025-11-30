<!-- src/routes/essays/project-janus/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './architecture-of-wholeness.md';
	import ContentSv from './architecture-of-wholeness-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Architecture of Wholeness",
			subtitle: "Project Janus: A Blueprint for Modeling Human Complexity",
			description: "A complete theoretical and architectural framework for computational modeling of human nature across all domains of experience, released as open-source for the community.",
			published: "November 2025",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Helhetens arkitektur",
			subtitle: "Projekt Janus: En ritning för modellering av mänsklig komplexitet",
			description: "Ett komplett teoretiskt och arkitektoniskt ramverk för beräkningsmodellering av mänsklig natur över alla erfarenhetsdomäner, släppt som öppen källkod för gemenskapen.",
			published: "November 2025",
			readTime: "10 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata
	let t = $derived(metadata[$language] || metadata.en);
</script>

<SEO
	title={t.title}
	description={t.description}
	type="article"
	publishedTime={t.published}
	keywords="Project Janus, AI, psychology, human modeling, computational models, open-source, cognitive science, neuroscience, spirituality, meaning-making, spiral dynamics, integral theory"
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

	<!-- GitHub Repository -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Open Source Repository' : 'Öppen Källkod Repository'}
		</h3>
		<div class="space-y-3">
			<a
				href="https://github.com/BjornKennethHolmstrom/ProjectJanus"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-3 p-4 rounded transition-colors hover:opacity-80"
				style="background-color: var(--color-card-bg); color: var(--color-page-text);"
			>
				<span class="text-3xl">🎭</span>
				<div class="flex-1">
					<h4 class="font-bold">Project Janus GitHub</h4>
					<p class="text-sm opacity-70">
						{$language === 'en' 
							? 'Complete specification documents, architecture blueprints, and implementation roadmap'
							: 'Kompletta specifikationsdokument, arkitektur-blueprints och implementeringsväg'
						}
					</p>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 opacity-70">
					<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
				</svg>
			</a>
			<div class="flex items-center gap-2 text-sm opacity-70" style="color: var(--color-page-text);">
				<span class="text-2xl">📄</span>
				<span>
					{$language === 'en' 
						? '25+ detailed specification documents available'
						: '25+ detaljerade specifikationsdokument tillgängliga'
					}
				</span>
			</div>
			<div class="flex items-center gap-2 text-sm opacity-70" style="color: var(--color-page-text);">
				<span class="text-2xl">🔄</span>
				<span>
					{$language === 'en' 
						? 'CC BY-SA 4.0 license - ShareAlike ensures continued openness'
						: 'CC BY-SA 4.0 licens - ShareAlike säkerställer fortsatt öppenhet'
					}
				</span>
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
				href="/essays/ai-consciousness"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🤖</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The AI That Can't Know It's Wrong" 
								: "AI:n som inte kan veta att den har fel"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The epistemological limitations that make better human modeling essential' 
								: 'De epistemologiska begränsningarna som gör bättre mänsklig modellering essentiell'}
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
								? 'What AI reveals about the nature of self and consciousness' 
								: 'Vad AI avslöjar om självets och medvetandets natur'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/wealth-system"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">⚖️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Architecture of Extraction" 
								: "Extraktionens arkitektur"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Why Inequality is a Design Choice, Not an Accident' 
								: 'Varför ojämlikhet är ett designval, inte en slump'}
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
