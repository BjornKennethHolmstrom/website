<script lang="ts">
	import { t, language, toggleLanguage } from '$lib/stores/languageStore';
	import { theme, toggleTheme } from '$lib/stores/themeStore';

	let currentLang = $derived($language);
	let currentTheme = $derived($theme);

 let themeText = $derived(currentTheme === 'light' ? $t.dark : $t.light);
</script>

<header
	class="sticky top-0 z-10 w-full border-b border-[var(--color-separator)] bg-[var(--color-page-bg)] shadow-sm transition-colors"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-4">
		<div class="flex items-center gap-6">
			<a
				href="/"
				class="text-lg font-semibold text-[var(--color-page-text)] transition-colors sm:text-xl"
			>
				{$t.wordmark}
			</a>

			<div class="hidden items-center gap-4 md:flex">
				<a
					href="/blog"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navBlog}
				</a>
				<a
					href="/whitepapers"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navWhitepapers}
				</a>
				<a
					href="/contact"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navContact}
				</a>
				<a
					href="/about"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navAbout}
				</a>
			</div>
		</div>


		<div class="flex items-center gap-4">
			<button
				onclick={toggleLanguage}
				class="text-sm font-medium uppercase text-[var(--color-page-accent)] transition-opacity hover:opacity-80"
				aria-label="Växla språk"
			>
				{currentLang === 'en' ? 'SV' : 'EN'}
			</button>

			<button
				onclick={toggleTheme}
				class="text-sm font-medium uppercase text-[var(--color-page-accent)] transition-opacity hover:opacity-80"
				aria-label="Växla tema"
			>
	   {themeText}
			</button>
		</div>
	</nav>
</header>
