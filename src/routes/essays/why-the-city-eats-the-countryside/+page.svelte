<!-- src/routes/essays/why-the-city-eats-the-countryside/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './city-eats-countryside.md';
	import ContentSv from './city-eats-countryside-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "Why the City Eats the Countryside",
			subtitle: "Internal Colonization and the Architecture of Rural Decay",
			description: "Sweden's school gap reveals a global mechanism: the city acts as a gravity well, extracting human capital from the periphery. How AUBI and Bioregionalism reverse the flow.",
			published: "December 2025",
			readTime: "10 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Varför staden äter landsbygden",
			subtitle: "Intern kolonisering och arkitekturen för landsbygdsförfall",
  	description: "Sveriges skolklyfta avslöjar en global mekanism: staden fungerar som en gravitationsbrunn och utvinner humankapital från periferin. Hur AUBI och bioregionalism vänder flödet.",
			published: "December 2025",
			readTime: "10 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "Why the City Eats the Countryside");
	let seoDescription = $derived(t?.description || "Internal colonization and rural regeneration");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="urban-rural divide, internal colonization, rural decay, bioregional sovereignty, AUBI, rural regeneration, education gap, Swedish countryside, economic extraction"
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

	<!-- The Extraction Engine -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'The Extraction Engine' : 'Extraktionsmotorn'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🎓</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Human Capability Drain' : 'Mänsklig Kapacitetsdrainering'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Education system as sorting machine: rural talent tracked to urban universities'
							: 'Utbildningssystem som sorteringsmaskin: landsbygdstalang spåras till urbana universitet'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">💸</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Fiscal Drain' : 'Finansiell Drainering'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Rural value creation, urban value capture: tax base shrinks, services close'
							: 'Landsbygds värdeskapande, urbant värdefångande: skattebas krymper, tjänster stänger'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- The Living Land Protocol -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'The Living Land Protocol' : 'Levande Landsprotokollet'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🛡️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Three Rights for Reversing the Flow' : 'Tre Rättigheter för att Vända Flödet'}
					</h4>
					<div class="mt-2 text-sm space-y-2" style="color: var(--color-page-text); opacity: 0.8;">
						<div><strong>1. {$language === 'en' ? 'Right to Stay (AUBI)' : 'Rätt att Stanna (AUBI)'}:</strong> {$language === 'en' ? 'Sovereign floor decouples survival from urban labor markets' : 'Suveränt golv frikopplar överlevnad från urbana arbetsmarknader'}</div>
						<div><strong>2. {$language === 'en' ? 'Right to Connect' : 'Rätt att Ansluta'}:</strong> {$language === 'en' ? 'High-speed digital infrastructure as human right, not commodity' : 'Hög hastighet digital infrastruktur som mänsklig rättighet, inte vara'}</div>
						<div><strong>3. {$language === 'en' ? 'Bioregional Autonomous Zone' : 'Bioregional Autonom Zon'}:</strong> {$language === 'en' ? 'Rural areas as biosphere stewards, paid through Hearts & Leaves' : 'Landsbygdsområden som biosfärförvaltare, betalda genom Hjärtan & Löv'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Swedish Context -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Swedish Context' : 'Svenskt Sammanhang'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">📊</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'The Diagnostic Glitch' : 'Diagnostiska Glitchen'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Swedish education data reveals the urban-rural divide in stark terms'
							: 'Svensk utbildningsdata avslöjar stad-landsbygdsklyftan i skarpa termer'
						}
					</p>
					<div class="mt-2 text-sm" style="color: var(--color-page-text); opacity: 0.8;">
						{$language === 'en' 
							? 'Female students with migrant backgrounds in cities outperform native-born male students in rural areas—a glitch revealing systemic architecture'
							: 'Kvinnliga elever med migrationsbakgrund i städer presterar bättre än infödda manliga elever på landsbygden—en glitch som avslöjar systemarkitektur'
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
				href="/essays/measuring-the-invisible"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">📊</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Measuring the Invisible" 
								: "Mäta det Osynliga"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Alternative metrics that value rural stewardship beyond GDP' 
								: 'Alternativa mått som värderar landsbygdsförvaltning bortom BNP'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/fjarilspartiet"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🦋</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Introducing Fjärilspartiet" 
								: "Introducerar Fjärilspartiet"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Swedish political implementation of AUBI and rural regeneration' 
								: 'Svensk politisk implementering av AUBI och landsbygdsregenerering'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/beyond-the-checkout-line"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🛒</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Beyond the Checkout Line" 
								: "Bortom Kassalinjen"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'From individual solutions to systemic architecture for rural communities' 
								: 'Från individuella lösningar till systemarkitektur för landsbygdssamhällen'}
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
