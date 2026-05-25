<!-- src/routes/essays/architecture-of-misunderstanding/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './architecture-of-misunderstanding.md';
	import ContentSv from './architecture-of-misunderstanding-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Architecture of Misunderstanding",
			subtitle: "Why the way we talk to each other destroys the signal we most need to transmit",
			description: "Applying the governance-as-engineering framework to human conversation. The machinery of blindness operates in how we perceive each other—not just in institutions.",
			published: "May 2026",
			readTime: "14 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Missförståndets arkitektur",
			subtitle: "Varför sättet vi pratar med varandra förstör den signal vi mest behöver överföra",
			description: "En tillämpning av governance-as-engineering-ramverket på mänskliga samtal. Blindhetens maskineri verkar också i hur vi uppfattar varandra—inte bara i institutioner.",
			published: "Maj 2026",
			readTime: "14 min läsning",
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
	keywords="conversation architecture, variety gap, signal destruction, citizens assembly, online forum, adversarial debate, adaptive coherence, human relationship, governance as engineering"
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
			{$language === 'en' ? 'Design Principles for Conversation Architecture' : 'Designprinciper för samtalsarkitektur'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔗</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Shorten the Representation Chain' : 'Korta ner representationskedjan'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'The more layers between a person and their disclosure, the more signal is destroyed. Let people speak directly, in their own words.'
							: 'Ju fler lager mellan en person och deras berättelse, desto mer signal förstörs. Låt människor tala direkt, med sina egna ord.'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">📊</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Preserve Distributional Information' : 'Bevara distributionsinformationen'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'The person who is afraid but uncertain, the person who is angry but willing to listen—these are not noise. They are the signal.'
							: 'Personen som är rädd men osäker, personen som är arg men villig att lyssna—detta är inte brus. Det är signalen.'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🎯</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Match Architecture to Purpose' : 'Matcha arkitekturen mot syftet'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'A conversation to determine guilt can be adversarial. A conversation to restore relationship requires a different architecture entirely.'
							: 'Ett samtal för att fastställa skuld kan vara adversativt. Ett samtal för att återställa relation kräver en helt annan arkitektur.'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🔄</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Design for Reversibility' : 'Designa för reversibilitet'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'People must be able to change their minds without being penalised for inconsistency. Updating is the mechanism through which disagreement becomes understanding.'
							: 'Människor måste kunna ändra sig utan att bestraffas för inkonsekvens. Uppdatering är mekanismen genom vilken oenighet blir till förståelse.'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🛡️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Attend to the Immune System' : 'Beakta immunsystemet'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'The adversarial architecture will resist replacement because it serves real interests. Build at the periphery, demonstrate value, and create constituencies for the new.'
							: 'Den adversativa arkitekturen kommer att motstå förändring eftersom den tjänar verkliga intressen. Bygg i periferin, demonstrera värde, och skapa valkretsar för det nya.'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- The Two Architectures Compared -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Two Architectures: A Comparison' : 'Två arkitekturer: En jämförelse'}
		</h3>
		<div class="grid md:grid-cols-2 gap-6">
			<div class="p-4 rounded-lg border" style="background-color: var(--color-card-bg); border-color: var(--color-separator);">
				<h4 class="font-bold mb-2" style="color: var(--color-page-text); opacity: 0.8;">
					{$language === 'en' ? 'The Adversarial Forum' : 'Det adversativa forumet'}
				</h4>
				<ul class="text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.7;">
					<li>• {$language === 'en' ? 'Anonymous or semi-anonymous' : 'Anonymt eller semi-anonymt'}</li>
					<li>• {$language === 'en' ? 'Self-selected for existing positions' : 'Självselekterat för befintliga positioner'}</li>
					<li>• {$language === 'en' ? 'Rewards adversarial escalation' : 'Belönar adversativ eskalering'}</li>
					<li>• {$language === 'en' ? 'Compresses persons into categories' : 'Komprimerar personer till kategorier'}</li>
					<li>• {$language === 'en' ? 'Signal destroyed in transmission' : 'Signalen förstörs i överföringen'}</li>
				</ul>
			</div>
			<div class="p-4 rounded-lg border" style="background-color: var(--color-card-bg); border-color: var(--color-separator);">
				<h4 class="font-bold mb-2" style="color: var(--color-page-text); opacity: 0.8;">
					{$language === 'en' ? 'The Deliberative Architecture' : 'Den deliberativa arkitekturen'}
				</h4>
				<ul class="text-sm space-y-1" style="color: var(--color-page-text); opacity: 0.7;">
					<li>• {$language === 'en' ? 'Face-to-face, accountable' : 'Ansikte mot ansikte, ansvarig'}</li>
					<li>• {$language === 'en' ? 'Randomly selected or intentionally convened' : 'Slumpmässigt utvald eller avsiktligt sammankallad'}</li>
					<li>• {$language === 'en' ? 'Structured turn-taking and facilitation' : 'Strukturerad turtagning och facilitering'}</li>
					<li>• {$language === 'en' ? 'Preserves distributional information' : 'Bevarar distributionsinformation'}</li>
					<li>• {$language === 'en' ? 'Signal survives in transmission' : 'Signalen överlever i överföringen'}</li>
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
				href="/reports/coordination-failure-structural-condition"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🔍</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Coordination Failure as Structural Condition" 
								: "Samordningsmisslyckande som strukturellt tillstånd"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The capstone synthesis: why competent institutions become blind to their own fragility' 
								: 'Sammanfattningen: varför kompetenta institutioner blir blinda för sin egen skörhet'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/variety-gap-framework"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🔦</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Variety Gap Framework" 
								: "Varietetsgap-ramverket"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'A cybernetic diagnostic for why governance systems become blind to their own fragility' 
								: 'En cybernetisk diagnos för varför styrsystem blir blinda för sin egen skörhet'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/reports/ireland-boundary-deficit"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🇮🇪</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "Ireland: The Boundary Deficit" 
								: "Irland: Gränsdragningsunderskottet"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'How Ireland\'s citizens\' assemblies resolved what adversarial politics could not' 
								: 'Hur Irlands medborgarassembly löste vad den adversativa politiken inte kunde'}
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
