<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import { t, language, toggleLanguage } from '$lib/stores/languageStore';
	import { theme, toggleTheme } from '$lib/stores/themeStore';

	let currentLang = $derived($language);
	let currentTheme = $derived($theme);
	let themeText = $derived(currentTheme === 'light' ? $t.dark : $t.light);
	
	// Mobile menu state
	let mobileMenuOpen = $state(false);
 let otherMenuOpen = $state(false); //
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

 function closeOtherMenu() {
	 otherMenuOpen = false;
 }

 function handleKeydown(event: KeyboardEvent) {
	 if (event.key === 'Escape') {
		 closeMobileMenu();
		 closeOtherMenu();
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
    <div class="relative">
        <button
            onclick={(e) => {
                e.stopPropagation(); // Prevents window click from closing it
                otherMenuOpen = !otherMenuOpen;
            }}
            class="flex items-center gap-1 text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
            aria-haspopup="true"
            aria-expanded={otherMenuOpen}
        >
            {$t.navOther}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5 transition-transform {otherMenuOpen ? 'rotate-180' : ''}"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        {#if otherMenuOpen}
            <div
                onclick={(e) => e.stopPropagation()}
                class="absolute right-0 top-full z-20 mt-2 w-48 origin-top-right rounded-md border border-[var(--color-separator)] bg-[var(--color-page-bg)] py-1 shadow-lg"
            >
                <a
                    href="/apps"
                    class="block px-4 py-2 text-sm text-[var(--color-page-text)] opacity-90 transition-opacity hover:opacity-100"
                    onclick={closeOtherMenu}
                >
                    {$t.navApps}
                </a>
                <a
                    href="/creations"
                    class="block px-4 py-2 text-sm text-[var(--color-page-text)] opacity-90 transition-opacity hover:opacity-100"
                    onclick={closeOtherMenu}
                >
                    {$t.navCreations}
                </a>
                <a
                    href="/concepts"
                    class="block px-4 py-2 text-sm text-[var(--color-page-text)] opacity-90 transition-opacity hover:opacity-100"
                    onclick={closeOtherMenu}
                >
                    {$t.navConcepts}
                </a>
            </div>
        {/if}
    </div>
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
    <a
        href="/apps"
        class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
        onclick={closeMobileMenu}
    >
        {$t.navApps}
    </a>
    <a
        href="/creations"
        class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
        onclick={closeMobileMenu}
    >
        {$t.navCreations}
    </a>
    <a
        href="/concepts"
        class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
        onclick={closeMobileMenu}
    >
        {$t.navConcepts}
    </a>
			</div>
		</div>
	{/if}
</header>

<svelte:window onkeydown={handleKeydown} />
