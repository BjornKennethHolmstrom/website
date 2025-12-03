<!-- src/routes/essays/violence-of-the-propeller/+page.svelte -->
<script lang="ts">
	import ShareButtons from '$lib/components/ShareButtons.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { language } from '$lib/stores/languageStore';

	// Import the essay content
	import ContentEn from './silent-seas.md';
	import ContentSv from './silent-seas-sv.md';

	// Determine which content to use based on language
	let Content = $derived($language === 'sv' ? ContentSv : ContentEn);

	// Essay metadata
	const metadata = {
		en: {
			title: "The Violence of the Propeller",
			subtitle: "Why the Next Age of Logistics Must Be Silent",
			description: "The screw propeller moves ships by tearing the water apart (cavitation). A solarpunk vision for 'Acoustic Governance,' biomimetic propulsion, and the return of silent trade.",
			published: "December 2025",
			readTime: "8 min read",
			author: "Björn Kenneth Holmström"
		},
		sv: {
			title: "Propellerns våld: ",
			subtitle: "Varför logistikens nästa era måste vara tyst",
			description: "Skruvpropellern flyttar fartyg genom att riva isär vattnet (kavitation). En solarpunk-vision för 'akustisk styrning', biomimetisk framdrivning och återkomsten av tyst handel.",
			published: "December 2025",
			readTime: "8 min läsning",
			author: "Björn Kenneth Holmström"
		}
	};

	// Get current language metadata with fallbacks
	let t = $derived(metadata[$language] || metadata.en);
	
	// Ensure SEO props are always defined
	let seoTitle = $derived(t?.title || "The Violence of the Propeller");
	let seoDescription = $derived(t?.description || "Silent alternatives to cavitation-based shipping");
	let seoPublished = $derived(t?.published || "2025");
</script>

<SEO
	title={seoTitle}
	description={seoDescription}
	type="article"
	publishedTime={seoPublished}
	keywords="shipping, propeller, cavitation, marine acoustics, biomimicry, silent seas protocol, ocean conservation, logistics, maritime, acoustic pollution"
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

	<!-- The Problem: Cavitation Violence -->
	<div class="not-prose mt-12 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'The Problem: Cavitation Violence' : 'Problemet: Kavitationsvåld'}
		</h3>
		<div class="space-y-4">
			<div class="flex items-start gap-3">
				<span class="text-2xl">⚓</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'How Propellers Work' : 'Hur Propellrar Fungerar'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Cavitation: Tearing water apart until it boils, creating vacuum bubbles that collapse violently'
							: 'Kavitation: Riv isär vatten tills det kokar, skapar vakuumbubblor som kollapsar våldsamt'
						}
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<span class="text-2xl">🐋</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Ecological Impact' : 'Ekologisk Påverkan'}
					</h4>
					<p class="text-sm opacity-70" style="color: var(--color-page-text);">
						{$language === 'en' 
							? 'Acoustic smog blinds marine life, separates mothers from calves, disrupts navigation'
							: 'Akustisk smog bländar marinliv, separerar mödrar från kalvar, stör navigering'
						}
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- The Solution: Silent Seas Protocol -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'The Solution: Silent Seas Protocol' : 'Lösningen: Tysta Havsprotokollet'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🏛️</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Governance Framework' : 'Governance Ramverk'}
					</h4>
					<div class="mt-2 text-sm space-y-2" style="color: var(--color-page-text); opacity: 0.8;">
						<div><strong>1. {$language === 'en' ? 'Acoustic Tax' : 'Akustisk Skatt'}:</strong> {$language === 'en' ? 'Dynamic levy on ship noise, funding Ocean Commons Trust' : 'Dynamisk avgift på skeppsbuller, finansierar Ocean Commons Trust'}</div>
						<div><strong>2. {$language === 'en' ? 'Blue Leaves' : 'Blå Löv'}:</strong> {$language === 'en' ? 'Earn regenerative currency for acoustic silence' : 'Tjäna regenerativ valuta för akustisk tystnad'}</div>
						<div><strong>3. {$language === 'en' ? 'Slow Steaming Corridors' : 'Långsam Ångkorridorer'}:</strong> {$language === 'en' ? 'Flow-based logistics instead of just-in-time' : 'Flödesbaserad logistik istället för just-in-time'}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Biomimetic Technologies -->
	<div class="not-prose mt-8 p-6 rounded-lg" style="background-color: var(--color-separator);">
		<h3 class="text-xl font-bold mb-4" style="color: var(--color-page-text);">
			{$language === 'en' ? 'Biomimetic Technologies' : 'Biomimetiska Teknologier'}
		</h3>
		<div class="space-y-3">
			<div class="flex items-start gap-3">
				<span class="text-2xl">🐟</span>
				<div>
					<h4 class="font-bold" style="color: var(--color-page-text);">
						{$language === 'en' ? 'Nature\'s Silent Solutions' : 'Naturens Tysta Lösningar'}
					</h4>
					<div class="mt-2 text-sm space-y-2" style="color: var(--color-page-text); opacity: 0.8;">
						<div><strong>{$language === 'en' ? 'O-Foil (Oscillating Foils)' : 'O-Foil (Oscillerande Fenor)'}:</strong> {$language === 'en' ? 'Mimics whale tail motion, creates laminar flow' : 'Härmar valstjärtrörelse, skapar laminärt flöde'}</div>
						<div><strong>{$language === 'en' ? 'Oceanbird (Wing Sails)' : 'Oceanbird (Vingsegel)'}:</strong> {$language === 'en' ? 'Computer-controlled sails harvest wind power' : 'Datorstyrda segel utvinner vindkraft'}</div>
						<div><strong>{$language === 'en' ? 'MHD Drive' : 'MHD-driv'}:</strong> {$language === 'en' ? 'Magnetohydrodynamics: silent propulsion without moving parts' : 'Magnetohydrodynamik: tyst framdrivning utan rörliga delar'}</div>
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
								: "Fördrag för Vårt Enda Hem"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'The broader Global Governance Frameworks containing the Silent Seas Protocol' 
								: 'Det bredare Global Governance Frameworks som innehåller det Tysta havsprotokollet'}
						</p>
					</div>
				</div>
			</a>
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
								? 'Alternative metrics that value ecological harmony over extraction' 
								: 'Alternativa mått som värderar ekologisk harmoni över extraktion'}
						</p>
					</div>
				</div>
			</a>
			<a
				href="/essays/field-of-intelligence"
				class="block p-4 rounded-lg transition-colors"
				style="background-color: var(--color-separator);"
			>
				<div class="flex items-center gap-3">
					<span class="text-3xl">🌀</span>
					<div>
						<h4 class="font-bold" style="color: var(--color-page-text);">
							{$language === 'en' 
								? "The Field of Intelligence" 
								: "Intelligensfältet"}
						</h4>
						<p class="text-sm opacity-70" style="color: var(--color-page-text);">
							{$language === 'en' 
								? 'Biomimicry and systems thinking for intelligent design' 
								: 'Biomimikry och systemtänkande för intelligent design'}
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
