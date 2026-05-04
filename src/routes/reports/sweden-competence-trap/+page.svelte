<!-- src/routes/reports/sweden-competence-trap/+page.svelte -->
<script lang="ts">
	import { language } from '$lib/stores/languageStore';
	import SEO from '$lib/components/SEO.svelte';
	
	// Inline texts, since this is temporary
	const messages = {
		en: {
			title: 'The Competence Trap — Coming Soon',
			heading: 'This report is not yet published.',
			body: 'The report is currently under embargo and will be available shortly. Please check back soon, or explore other country reports.',
			back: '← Back to Reports'
		},
		sv: {
			title: 'Kompetensfällan — Kommer snart',
			heading: 'Denna rapport är ännu inte publicerad.',
			body: 'Rapporten är för närvarande under embargo och kommer att finnas tillgänglig inom kort. Välkommen åter, eller utforska andra landrapporter.',
			back: '← Tillbaka till Rapporter'
		}
	};

	$: t = messages[$language];
</script>

<SEO
	title={t.title}
	description={t.body}
	type="article"
	robots="noindex, nofollow"
/>

<div class="min-h-screen flex items-center justify-center px-4">
	<div class="max-w-lg text-center">
		<h1 class="text-3xl font-bold mb-4" style="color: var(--color-page-text);">
			{t.heading}
		</h1>
		<p class="text-lg leading-relaxed opacity-80 mb-8" style="color: var(--color-page-text);">
			{t.body}
		</p>
		<a
			href="/reports"
			class="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md border border-[var(--color-separator)] hover:bg-[var(--color-card-bg)] transition-colors"
			style="color: var(--color-page-text);"
		>
			{t.back}
		</a>
	</div>
</div>
