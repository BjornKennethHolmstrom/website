<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta name="description" content="Blogginlägg: {data.metadata.title}" />
</svelte:head>

<article 
  class="prose prose-lg dark:prose-invert mx-auto 
         prose-img:rounded-xl prose-a:text-[var(--color-accent)] hover:prose-a:underline"
>
  
  <h1>{data.metadata.title}</h1>
  <p class="text-lg text-slate-600 dark:text-slate-400">
    Publicerad: {new Date(data.metadata.date).toLocaleDateString('sv-SE', { dateStyle: 'long' })}
  </p>

  {#if data.metadata.coverImage}
    <img 
      src={data.metadata.coverImage} 
      alt="Omslagsbild" 
      class="not-prose" />
  {/if}

  {@render data.content()}
</article>
