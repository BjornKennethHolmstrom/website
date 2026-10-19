<!-- src/routes/essays/boundary-blind-spot/+page.svelte -->
<script lang="ts">
	import Provenance from '$lib/components/Provenance.svelte';
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './boundary-blind-spot.md';
	import ContentSv from './boundary-blind-spot-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: 'The Boundary and the Blind Spot',
			subtitle: 'Nondual Insight and the Architecture of Governance',
			description: 'Every governance system draws a boundary that determines what becomes visible. This essay explores how the nondual insight—that the observer is part of the observed—illuminates the structural blind spots of institutional design.',
			published: 'May 2026',
			readTime: '18 min read',
			author: 'Björn Kenneth Holmström'
		},
		sv: {
			title: 'Gränsen och den blinda fläcken',
			subtitle: 'Icke‑dualitet och styrningens arkitektur',
			description: 'Varje styrsystem drar en gräns som avgör vad som blir synligt. Denna essä utforskar hur icke‑dual insikt—att observatören är en del av det observerade—belyser de strukturella blinda fläckarna i institutionell design.',
			published: 'maj 2026',
			readTime: '18 min läsning',
			author: 'Björn Kenneth Holmström'
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
	keywords="governance, nondual, consciousness, institutional design, blind spots, second-order cybernetics, variety gap, systems thinking, Ashby's Law"
	section="Essays"
/>

<article class="mx-auto max-w-4xl px-4 pt-8 pb-24">
	<!-- Back to Essays -->
  <div class="mb-10">
    <a href="/essays" class="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
      style="color: var(--color-page-accent);">
   			{$language === 'en' ? '< Back to Essays' : '< Tillbaka till essäer'}
    </a>
  </div>

	<!-- Header -->
	<header class="mb-12 border-b border-[var(--color-separator)] pb-8">
		<h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-page-text);">
			{t.title}
		</h1>
		<p class="text-xl md:text-2xl italic mb-6" style="color: var(--color-page-text); opacity: 0.8;">
			{t.subtitle}
		</p>
		<div class="flex flex-wrap items-center gap-4 text-sm" style="color: var(--color-page-text); opacity: 0.6;">
			<span>{t.published}</span>
			<span>•</span>
			<span>{t.readTime}</span>
		</div>
		<Provenance align="start" />
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

	<!-- Related Reading -->
	<nav class="not-prose mt-16 pt-8 border-t border-[var(--color-separator)]">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Related Reading' : 'Relaterad läsning'}
		</h3>
		<div class="space-y-4">
			<!-- Link to the new operator essay -->
			<a
				href="/essays/what-the-operator-cannot-see"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">👁️</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'What the Operator Cannot See' 
								: 'Vad operatören inte kan se'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The structural conditions for perceiving well enough to govern' 
								: 'De strukturella förutsättningarna för att uppfatta tillräckligt väl för att styra'}
						</p>
					</div>
				</div>
			</a>

			<!-- Another related essay (you can swap or remove) -->
			<a
				href="/essays/the-economy-that-cannot-see"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🫥</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The Economy That Cannot See' 
								: 'Ekonomin som inte kan se'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'GDP, variety destruction, and the broken feedback loop' 
								: 'BNP, variationsförstörelse och den brutna återkopplingsslingan'}
						</p>
					</div>
				</div>
			</a>

			<a
				href="/essays/the-shortest-chain"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🔗</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The Shortest Chain' 
								: 'Den kortaste kedjan'}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Inner governance and the limit of observation' 
								: 'Inre styrning och observationens gräns'}
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
