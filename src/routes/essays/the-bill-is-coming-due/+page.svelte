<!-- src/routes/essays/the-bill-is-coming-due/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './the-bill-is-coming-due.md';
	import ContentSv from './the-bill-is-coming-due-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Bill is Coming Due: A Manifesto of Developmental Debt",
			subtitle: "Why the Global Crisis Isn't a Failure of Morals, But a Failure of Accounting — And How We Restructure Before Default",
			description: "A forensic audit of our civilizational balance sheet. We've been running Stage Orange software on a planetary hard drive that is now full. Introducing Developmental Debt as the key metric for our existential crisis.",
			published: "December 2025",
			readTime: "12 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Notan förfaller: Ett manifest om utvecklingsskuld",
			subtitle: "Varför den globala krisen inte är ett moraliskt misslyckande, utan ett bokföringsfel — och hur vi omstrukturerar innan fallissemang",
			description: "En forensisk revision av vår civilisatoriska balansräkning. Vi har kört 'Stage Orange'-mjukvara på en planetär hårddisk som nu är full. Introducerar Utvecklingsskuld som nyckelmått för vår existentiella kris.",
			published: "December 2025",
			readTime: "12 min läsning",
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
	keywords="developmental debt, manifesto, global crisis, accounting, restructuring, tier 1, tier 2, spiral dynamics, bankruptcy, margin call, blue debt, orange debt, green debt, GGF"
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

	<!-- Key Concepts Summary -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'The Three Debts: A Summary' : 'De tre skulderna: En sammanfattning'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">📜</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'The Blue Debt: The Rigidity Tax' : 'Den blå skulden: Styvhetsskatten'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Prioritizing Order over Adaptation. Result: Institutional Brittleness.'
							: 'Prioritera ordning över anpassning. Resultat: Institutionell bräcklighet.'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">💸</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'The Orange Debt: The Externalization Time Bomb' : 'Den orange skulden: Externaliseringstidsbomben'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Prioritizing Profit over Resilience. Result: Systemic Toxicity.'
							: 'Prioritera vinst över motståndskraft. Resultat: Systemisk toxicitet.'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🤝</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'The Green Debt: The Consensus Tax' : 'Den gröna skulden: Konsensuskatten'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Prioritizing Inclusion over Competence. Result: Coordination Failure.'
							: 'Prioritera inkludering över kompetens. Resultat: Koordineringsmisslyckande.'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- The Restructuring Choice -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Two Paths: The Restructuring Choice' : 'Tvä vägar: Omstruktureringsvalet'}
		</h3>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="p-4 rounded-lg border" style="background-color: var(--color-card-bg); border-color: var(--color-separator);">
				<h4 class="font-bold mb-2 text-red-600 dark:text-red-400">
					{$language === 'en' ? 'Chapter 7: Hard Default' : 'Kapitel 7: Hårt fallissemang'}
				</h4>
				<ul class="text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
					<li>• {$language === 'en' ? 'System crash & collapse' : 'Systemkrasch och sammanbrott'}</li>
					<li>• {$language === 'en' ? 'Paid in blood and chaos' : 'Betalas i blod och kaos'}</li>
					<li>• {$language === 'en' ? 'Reset to lower complexity' : 'Återställning till lägre komplexitet'}</li>
				</ul>
			</div>
			<div class="p-4 rounded-lg border" style="background-color: var(--color-card-bg); border-color: var(--color-separator);">
				<h4 class="font-bold mb-2 text-green-600 dark:text-green-400">
					{$language === 'en' ? 'Chapter 11: Strategic Restructuring' : 'Kapitel 11: Strategisk omstrukturering'}
				</h4>
				<ul class="text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.8;">
					<li>• {$language === 'en' ? 'Managed transition to Tier 2' : 'Hanterad övergång till Tier 2'}</li>
					<li>• {$language === 'en' ? 'Debt converted to equity' : 'Skuld omvandlas till kapital'}</li>
					<li>• {$language === 'en' ? 'Emerges as functional entity' : 'Framträder som funktionell enhet'}</li>
				</ul>
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
								: "Fördrag för vårt enda hem"}
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
				href="/essays/g20-operating-system"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">💰</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The G20 Just Asked for a New Operating System" 
								: "G20 bad just om ett nytt operativsystem"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Answering the G20 inequality report with architectural solutions' 
								: 'Svarar på G20:s ojämlikhetsrapport med arkitektoniska lösningar'}
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
