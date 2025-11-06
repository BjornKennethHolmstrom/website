<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import { t, language, toggleLanguage } from '$lib/stores/languageStore';
	import { theme, toggleTheme } from '$lib/stores/themeStore';

	let currentLang = $derived($language);
	let currentTheme = $derived($theme);
	let themeText = $derived(currentTheme === 'light' ? $t.dark : $t.light);
	
	// Mobile menu state
	let mobileMenuOpen = $state(false);
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMobileMenu();
		}
	}

	function handleOverlayKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			closeMobileMenu();
		}
	}
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

			<!-- Desktop Navigation -->
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
					href="/books"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navBooks}
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
			
			<!-- Mobile Menu Button -->
			<button
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				class="flex flex-col items-center justify-center gap-1 p-2 md:hidden"
				aria-label="Toggle menu"
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-menu"
			>
				<span class="h-0.5 w-6 bg-[var(--color-page-text)] transition-all {mobileMenuOpen ? 'translate-y-1 rotate-45' : ''}"></span>
				<span class="h-0.5 w-6 bg-[var(--color-page-text)] transition-all {mobileMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
				<span class="h-0.5 w-6 bg-[var(--color-page-text)] transition-all {mobileMenuOpen ? '-translate-y-1 -rotate-45' : ''}"></span>
			</button>
		</div>
	</nav>

	<!-- Mobile Menu Overlay -->
	{#if mobileMenuOpen}
		<div 
	   id="mobile-menu"
	   role="button"
	   tabindex="0"
	   aria-label="Close menu"
	   onclick={closeMobileMenu}
	   onkeydown={(e) => {
		   handleOverlayKeydown(e);
		   e.stopPropagation();
	   }}
		>
  <div 
	  class="flex h-full flex-col items-center justify-center gap-8"
	  onclick={(e) => e.stopPropagation()}
  >
				<a
					href="/blog"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navBlog}
				</a>
				<a
					href="/whitepapers"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navWhitepapers}
				</a>
				<a
					href="/books"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navBooks}
				</a>
				<a
					href="/contact"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navContact}
				</a>
				<a
					href="/about"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navAbout}
				</a>
			</div>
		</div>
	{/if}
</header>

<svelte:window onkeydown={handleKeydown} />
