<script lang="ts">
	// import { $effect } from 'svelte'; // <-- DENNA RAD ÄR NU BORTTAGEN (IGEN)
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/themeStore.ts';

	let { children } = $props();

	// $effect-runan finns globalt och behöver inte importeras.
	$effect(() => {
		if (typeof window !== 'undefined') {
			if ($theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
 <link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap"
  rel="stylesheet"
 />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
