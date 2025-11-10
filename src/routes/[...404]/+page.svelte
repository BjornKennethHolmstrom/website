<script lang="ts">
    let { data } = $props();
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Page Not Found - Björn Kenneth Holmström</title>
    <meta name="description" content="The page you're looking for doesn't exist." />
</svelte:head>

<div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center max-w-md">
        <h1 class="text-4xl font-bold mb-4">404</h1>
        <p class="text-xl mb-4">Page not found</p>
        <p class="text-gray-600 mb-8">The page "{data.path}" doesn't exist on this site.</p>
        <a 
            href="/" 
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
            Return Home
        </a>
    </div>
</div>
