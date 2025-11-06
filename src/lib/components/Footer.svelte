<script lang="ts">
	import { t } from '$lib/stores/languageStore.ts';
</script>

<footer class="w-full border-t border-[var(--color-separator)] bg-[var(--color-page-bg)] py-8">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center text-sm text-[var(--color-page-text)] opacity-70"
	>
		<div class="flex gap-4">
			<a href="https://github.com/BjornKennethHolmstrom" class="hover:underline">GitHub</a>
			<span>&bull;</span>

			<span class="opacity-50">Discord</span>
			<span>&bull;</span>
			<a href="mailto:bjorn.kenneth.holmstrom@gmail.com" class="hover:underline">E-post</a>
		</div>

		<p>{$t.ethos}</p>
		<p>{$t.copyright}</p>
	</div>
</footer>
