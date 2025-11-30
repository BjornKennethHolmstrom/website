<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import { aboutTranslations } from '$lib/i18n/translations/about'; 
  
  import SEO from '$lib/components/SEO.svelte';
  import PageHero from '$lib/components/PageHero.svelte';

  // Reactive translation object
  $: t = aboutTranslations[$language];
</script>

<SEO
  title={t.about.meta.title}
  description={t.about.meta.description}
  keywords="systems thinking, consciousness development, global governance, Björn Kenneth Holmström, architect, polycrisis"
/>

<PageHero 
  title={t.about.hero.title} 
  subtitle={t.about.hero.subtitle} 
/>

<section class="py-16 md:py-24 bg-white dark:bg-gray-900">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="flex flex-col md:flex-row gap-12 items-center mb-20">
      <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
        <div class="absolute inset-0 rounded-full border-4 border-amber-500/20 shadow-2xl transform rotate-3"></div>
        <img 
          src="/portrait-bw.jpg" 
          alt="Björn Kenneth Holmström" 
          class="absolute inset-0 w-full h-full object-cover rounded-full filter grayscale contrast-110 shadow-inner"
        />
      </div>
      
      <div class="flex-1 text-center md:text-left">
        <span class="text-amber-600 dark:text-amber-400 font-bold tracking-wider text-sm uppercase mb-2 block">
          {t.about.intro.subtitle}
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t.about.intro.title}
        </h2>
        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.about.intro.text}
        </p>
      </div>
    </div>

    <hr class="border-gray-200 dark:border-gray-800 my-16" />

    <article class="prose prose-lg prose-amber dark:prose-invert mx-auto mb-20">
      <h2 class="text-3xl font-bold mb-8 text-center md:text-left">{t.about.story.title}</h2>
      
      <div class="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>{t.about.story.p1}</p>
        <p>{t.about.story.p2}</p>
        <div class="pl-6 border-l-4 border-amber-500/50 italic my-8">
          <p class="mb-0">{t.about.story.p3}</p>
        </div>
        <p>{t.about.story.p4}</p>
      </div>
    </article>

    <div class="mb-20">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
        {t.about.approach.title}
      </h2>
      
      <div class="grid md:grid-cols-3 gap-8">
        {#each t.about.approach.items as item}
          <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <h3 class="text-lg font-bold text-amber-700 dark:text-amber-500 mb-3">
              {item.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <div class="bg-amber-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-amber-100 dark:border-gray-700">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {t.about.now.title}
      </h2>
      <ul class="space-y-3">
        {#each t.about.now.items as item}
          <li class="flex items-start">
            <svg class="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        {/each}
      </ul>
    </div>

  </div>
</section>
