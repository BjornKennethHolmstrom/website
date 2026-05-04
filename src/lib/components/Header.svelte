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
 let frameworksMobileOpen = $state(false);
	
 function closeMobileMenu() {
  mobileMenuOpen = false;
  frameworksMobileOpen = false;
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
    <div class="group relative">
        <button class="flex items-center gap-1 text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100">
            {$t.navFrameworks || 'Frameworks'}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        
        <div class="invisible absolute left-0 top-full z-20 mt-2 flex w-56 flex-col overflow-hidden rounded-md border border-[var(--color-separator)] bg-[var(--color-page-bg)] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
            <a 
                href="https://globalgovernanceframeworks.org" 
                target="_blank" 
                class="block px-4 py-3 text-sm text-[var(--color-page-text)] transition-colors hover:bg-[var(--color-separator)]"
            >
                Global Governance Frameworks ↗
            </a>
            <a 
                href="/eu-subsidiarity-protocol" 
                class="block px-4 py-3 text-sm text-[var(--color-page-text)] transition-colors hover:bg-[var(--color-separator)]"
            >
               {$t.navEU || 'EU Subsidiarity Protocol'}
            </a>
<!-- 
            <a href="/africa-informal-trust-ledger" class="block px-4 py-3 text-sm text-[var(--color-page-text)] transition-colors hover:bg-[var(--color-separator)]">
                {$t.navAfrica || 'Africa — Informal Trust Ledger'}
            </a>
            <a href="/india-dpi-2" class="block px-4 py-3 text-sm text-[var(--color-page-text)] transition-colors hover:bg-[var(--color-separator)]">
                {$t.navIndia || 'India — DPI 2.0'}
            </a>
-->
        </div>
    </div>
				<a
					href="/books"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navBooks}
				</a>
				<a
					href="/reports"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navReports}
				</a>
				<a
					href="/whitepapers"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navWhitepapers}
				</a>
				<a
					href="/essays"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navEssays}
				</a>
				<a
					href="/blog"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navBlog}
				</a>
    <div class="group relative">
        <button class="flex items-center gap-1 text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100">
            {$t.navOther || 'Other'}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="invisible absolute left-0 top-full z-20 mt-2 flex w-48 flex-col overflow-hidden rounded-md border border-[var(--color-separator)] bg-[var(--color-page-bg)] opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
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
                <a
                    href="/governance-simulator"
                    class="block px-4 py-2 text-sm text-[var(--color-page-text)] opacity-90 transition-opacity hover:opacity-100"
                    onclick={closeOtherMenu}
                >
                    {$t.navSimulator}
                </a>
        </div>
    </div> 
				<a
					href="/about"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navAbout}
				</a>
				<a
					href="/contact"
					class="text-sm font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
				>
					{$t.navContact}
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
    <div class="flex flex-col">
        <button
            class="flex w-full items-center justify-between text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
            onclick={() => frameworksMobileOpen = !frameworksMobileOpen}
        >
            {$t.navFrameworks || 'Frameworks'}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" class:rotate-180={frameworksMobileOpen}><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        
        {#if frameworksMobileOpen}
            <div class="mt-3 flex flex-col gap-4 border-l-2 border-[var(--color-separator)] pl-4">
                <a
                    href="https://globalgovernanceframeworks.org"
                    target="_blank"
                    class="text-lg font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
                    onclick={closeMobileMenu}
                >
                    Global Governance Frameworks ↗
                </a>
                <a
                    href="/eu-subsidiarity-protocol"
                    class="text-lg font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
                    onclick={closeMobileMenu}
                >
                    {$t.navEU || 'EU Subsidiarity Protocol'}
                </a>
<!--

                <a href="/africa-informal-trust-ledger" class="text-lg font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100" onclick={closeMobileMenu}>
                    {$t.navAfrica || 'Africa — Informal Trust Ledger'}
                </a>
                <a href="/india-dpi-2" class="text-lg font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100" onclick={closeMobileMenu}>
                    {$t.navIndia || 'India — DPI 2.0'}
                </a> -->
            </div>
        {/if}
    </div>
				<a
					href="/books"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navBooks}
				</a>
				<a
					href="/reports"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navReports}
				</a>
				<a
					href="/whitepapers"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navWhitepapers}
				</a>
				<a
					href="/essays"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navEssays}
				</a>
				<a
					href="/blog"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navBlog}
				</a>
    <div class="flex flex-col">
        <button
            class="flex w-full items-center justify-between text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
            onclick={() => otherMenuOpen = !otherMenuOpen}
        >
            {$t.navOther || 'Other'}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform" class:rotate-180={otherMenuOpen}><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        
        {#if otherMenuOpen}
          <div class="mt-3 flex flex-col gap-4 border-l-2 border-[var(--color-separator)] pl-4">
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
            <a
                href="/governance-simulator"
                class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
                onclick={closeMobileMenu}
            >
                {$t.navSimulator}
            </a> 
          </div>
        {/if}
    </div>
				<a
					href="/about"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navAbout}
				</a>
				<a
					href="/contact"
					class="text-xl font-medium text-[var(--color-page-text)] opacity-70 transition-opacity hover:opacity-100"
					onclick={closeMobileMenu}
				>
					{$t.navContact}
				</a>

			</div>
		</div>
	{/if}
</header>

<svelte:window onkeydown={handleKeydown} />
