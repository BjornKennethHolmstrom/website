<!-- src/lib/components/Provenance.svelte
	Usage:
	  <Provenance />                      AI-generated (default), follows site language
	  <Provenance lang="pt_br" />         force a content language
	  <Provenance kind="human" />         a text you wrote yourself
	  <Provenance compact />              byline only, for cards and lists
-->
<script lang="ts">
	import { language } from '$lib/stores/languageStore';
	import { getProvenance } from '$lib/provenance.js';

	let {
		lang = undefined,
		kind = 'ai',
		compact = false
	}: { lang?: string; kind?: 'ai' | 'human'; compact?: boolean } = $props();

	let p = $derived(getProvenance(lang ?? $language, kind));
</script>

{#if compact || kind === 'human'}
	<p class="provenance-byline" lang={p.lang} dir={p.dir}>{p.byline}</p>
{:else}
	<aside class="provenance" lang={p.lang} dir={p.dir} aria-label={p.byline}>
		<p class="provenance-byline">{p.byline}</p>
		<p class="provenance-note">
			{p.note}
			<a href="/#ai-notice">{p.more} →</a>
		</p>
	</aside>
{/if}

<style>
	/* Inherits text colour so it works on both dark heroes and light pages */
	.provenance {
		margin: 1rem auto 0;
		max-width: 42rem;
		border-inline-start: 4px solid #f59e0b;
		border-radius: 0.375rem;
		background: color-mix(in srgb, currentColor 7%, transparent);
		padding: 0.75rem 1rem;
		text-align: start;
	}
	.provenance-byline {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.provenance-note {
		margin: 0.35rem 0 0;
		font-size: 0.8125rem;
		line-height: 1.5;
		opacity: 0.85;
	}
	.provenance-note a {
		text-decoration: underline;
		white-space: nowrap;
	}
</style>
