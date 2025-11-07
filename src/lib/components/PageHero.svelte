<!-- src/lib/components/PageHero.svelte -->
<script lang="ts">
	type Props = {
		title: string;
		subtitle: string;
		description?: string;
	};

	const { title, subtitle, description = undefined }: Props = $props();
</script>

<section class="bg-[var(--color-bg-dark)] py-16 text-center text-white">
	<div class="mx-auto max-w-3xl px-4">
		<h1
			class="mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
		>
			{title}
		</h1>
		<p class="text-xl opacity-80">{subtitle}</p>
		{#if description}
			<p class="mt-4 opacity-60">{description}</p>
		{/if}
	</div>
</section>
