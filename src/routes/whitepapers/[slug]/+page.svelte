<script lang="ts">
    let { data } = $props(); // ← Now data contains content and metadata from SERVER
    
    import ShareButtons from '$lib/components/ShareButtons.svelte';
    import SEO from '$lib/components/SEO.svelte';

    // Data is now loaded SERVER-SIDE, no need for client-side loading
    let keywords = $derived(
        ['white paper', data.metadata?.title || '', 'Björn Kenneth Holmström', 'systems thinking'].join(', ')
    );
</script>

{#if data.metadata}
    <SEO
        title={data.metadata.title}
        description={`White Paper: ${data.metadata.title}`}
        type="article"
        publishedTime={data.metadata.date}
        keywords={keywords}
        section="White Papers"
    />

    <article
        class="prose prose-lg mx-auto px-4 pt-16 pb-24"
        style="--tw-prose-body: var(--color-page-text); --tw-prose-headings: var(--color-page-text); --tw-prose-links: var(--color-page-accent); --tw-prose-bold: var(--color-page-text); --tw-prose-captions: var(--color-page-text); --tw-prose-code: var(--color-page-text); --tw-prose-pre-code: var(--color-page-text); --tw-prose-pre-bg: var(--color-card-bg); --tw-prose-th-borders: var(--color-separator); --tw-prose-td-borders: var(--color-separator);"
    >
        <h1>{data.metadata.title}</h1>
        <p class="text-lg opacity-70">
            Published: {new Date(data.metadata.date).toLocaleDateString('en-US', { dateStyle: 'long' })}
        </p>

        {#if data.content}
            {@render data.content()}
        {/if}

        <ShareButtons title={data.metadata.title} />
    </article>
{:else}
    <div class="mx-auto px-4 pt-16 pb-24 text-center">Whitepaper not found</div>
{/if}
