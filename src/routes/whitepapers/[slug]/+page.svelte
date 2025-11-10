<script lang="ts">
    let { data } = $props();
    import { page } from '$app/stores';
    
    console.log('WHITEPAPER PAGE DATA:', data);
    console.log('PAGE PARAMS:', $page.params);
</script>

<svelte:head>
    <title>{data.metadata?.title || 'Whitepaper'}</title>
</svelte:head>

{#if data.metadata}
    <h1>WHITEPAPER WORKS: {data.metadata.title}</h1>
    <p>Slug: {$page.params.slug}</p>
    <p>Metadata: {JSON.stringify(data.metadata)}</p>
    
    {#if data.content}
        {@render data.content()}
    {/if}
{:else}
    <h1>WHITEPAPER NOT FOUND</h1>
    <p>Slug: {$page.params.slug}</p>
    <p>Data: {JSON.stringify(data)}</p>
{/if}
