<script lang="ts">
	type Props = {
		images: string[];
		basePath: string;
	};

	const { images, basePath }: Props = $props();

	let currentIndex = $state(0);

	const currentImageSrc = $derived(`${basePath}${images[currentIndex]}`);
	const totalImages = $derived(images.length);

	function goToNext() {
		currentIndex = (currentIndex + 1) % totalImages;
	}

	function goToPrev() {
		currentIndex = (currentIndex - 1 + totalImages) % totalImages;
	}

	// Keyboard navigation
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			goToNext();
		} else if (event.key === 'ArrowLeft') {
			goToPrev();
		}
	}
</script>

<div
	class="relative w-full overflow-hidden rounded-lg border border-[var(--color-separator)] bg-[var(--color-card-bg)] shadow-md"
	role="region"
	aria-roledescription="carousel"
	aria-label="Image slideshow"
	onkeydown={handleKeydown}
	tabindex="0"
>
	<div class="aspect-video w-full bg-black">
		<img
			src={currentImageSrc}
			alt={`Image ${currentIndex + 1} of ${totalImages}`}
			class="h-full w-full object-contain"
		/>
	</div>

	<button
		onclick={goToPrev}
		class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-opacity hover:bg-black/70"
		aria-label="Previous image"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="15 18 9 12 15 6"></polyline></svg>
	</button>

	<button
		onclick={goToNext}
		class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-opacity hover:bg-black/70"
		aria-label="Next image"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="9 18 15 12 9 6"></polyline></svg>
	</button>

	<div
		class="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-sm text-white"
		aria-live="polite"
	>
		{currentIndex + 1} / {totalImages}
	</div>
</div>

<style>
	/* Ensure the component is focusable for keyboard navigation */
	div[role='region']:focus {
		outline: 2px solid var(--color-page-accent);
		outline-offset: 2px;
	}
</style>
