<!-- src/routes/essays/g20-operating-system/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './g20-operating-system.md';
	import ContentSv from './g20-operating-system-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The G20 Just Asked for a New Operating System—Here Is the Code",
			subtitle: "How the Global Governance Frameworks answer the G20's call for comprehensive economic redesign",
			description: "The G20's Inequality Report 2025 demands a new economic operating system. The Global Governance Frameworks provide the architectural blueprint for implementation.",
			published: "November 2025",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "G20 Har Just Begärt ett Nytt Operativsystem—Här är Koden",
			subtitle: "Hur Global Governance Frameworks svarar på G20:s uppmaning om omfattande ekonomisk omdesign",
			description: "G20:s Ojämlikhetsrapport 2025 kräver ett nytt ekonomiskt operativsystem. Global Governance Frameworks tillhandahåller den arkitektoniska blueprints för implementering.",
			published: "November 2025",
			readTime: "10 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "G20 Operating System");
	let seoDescription = $derived(t?.description || "Architectural response to the G20's call for economic system redesign");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="G20, inequality, global governance, economic system, sovereign debt, asset registry, billionaire tax, operating system, Joseph Stiglitz, architecture"
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

	<!-- G20 Report Reference -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'G20 Report Reference' : 'G20 Rapportreferens'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">📊</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						G20 Inequality Report 2025
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Led by Nobel Laureate Joseph Stiglitz, declaring an "Inequality Emergency"'
							: 'Ledd av Nobelpristagaren Joseph Stiglitz, deklarerar en "Ojämlikhetsnödsituation"'
						}
					</p>
					<div class="mt-2 text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
						<div>• {$language === 'en' ? 'Inequality as architecture, not accident' : 'Ojämlikhet som arkitektur, inte olyckshändelse'}</div>
						<div>• {$language === 'en' ? 'Wealth concentration > income disparities' : 'Rikedomskoncentration > inkomstskillnader'}</div>
						<div>• {$language === 'en' ? 'Political feedback loops driving democratic backsliding' : 'Politiska återkopplingsslingor som driver demokratiskt tillbakatagande'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Solutions Mapping -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'From Requirements to Architecture' : 'Från Krav till Arkitektur'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔄</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'GGF Implementation Framework' : 'GGF Implementeringsramverk'}
					</h4>
					<div class="mt-2 text-sm space-y-2" style="color: var(--color-page-text); opacity: 0.8;">
						<div><strong>{$language === 'en' ? 'Debt Reform' : 'Skuldreform'} →</strong> {$language === 'en' ? 'Sovereign Debt Transformation Protocol' : 'Suverän Skuldomvandlingsprotokoll'}</div>
						<div><strong>{$language === 'en' ? 'Inequality Panel' : 'Ojämlikspanel'} →</strong> {$language === 'en' ? 'Social Resilience Council' : 'Social Resilientsråd'}</div>
						<div><strong>{$language === 'en' ? 'Asset Registry' : 'Tillgångsregister'} →</strong> {$language === 'en' ? 'Transparency Covenant & Love Ledger' : 'Transparens Covenant & Kärlek-Ledger'}</div>
						<div><strong>{$language === 'en' ? 'Billionaire Tax' : 'Miljardärsskatt'} →</strong> {$language === 'en' ? 'Coordination Infrastructure Tax' : 'Koordinering Infrastrukturskatt'}</div>
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
				href="/essays/treaty-blueprint"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌐</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Treaty for Our Only Home" 
								: "Fördraget för vårt enda hem"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The complete Global Governance Frameworks architecture' 
								: 'Den kompletta Global Governance Frameworks-arkitekturen'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/the-surplus-trap"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🫧</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Surplus Trap" 
								: "Överskottsfällan"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Capital accumulation crisis and regenerative solutions' 
								: 'Kapitalackumuleringskris och regenerativa lösningar'}
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
