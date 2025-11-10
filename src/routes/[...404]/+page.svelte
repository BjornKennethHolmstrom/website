<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Page Not Found</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">404</h1>
        <p class="text-xl mb-8">Page not found: {$page.url.pathname}</p>
        <a href="/" class="text-blue-500 hover:underline">Return home</a>
    </div>
</div>
