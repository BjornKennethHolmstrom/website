import { error } from '@sveltejs/kit';
import type { BlogLanguage } from '$lib/utils/blogTranslations';
import { BLOG_LANGUAGES } from '$lib/utils/blogTranslations';

export async function load({ params, url }) {
  try {
    // Read all markdown files from posts
    const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
    
    // Check for requested language from query parameter
    const requestedLang = url.searchParams.get('lang') as BlogLanguage | null;
    
    // If a specific language is requested, try to load it
    if (requestedLang && requestedLang !== 'en' && BLOG_LANGUAGES[requestedLang]) {
      const langPath = `/src/lib/posts/${params.slug}/${BLOG_LANGUAGES[requestedLang].dir}/index.md`;
      if (modules[langPath]) {
        const post = modules[langPath];
        return {
          content: post.default,
          metadata: { ...post.metadata, lang: requestedLang }
        };
      }
      // If requested language doesn't exist, fall through to English
    }
    
    // Default to English version
    const enPath = `/src/lib/posts/${params.slug}/index.md`;
    if (modules[enPath]) {
      const post = modules[enPath];
      return {
        content: post.default,
        metadata: { ...post.metadata, lang: 'en' }
      };
    }
  } catch (e) {
    console.error(e);
    throw error(500, `Could not load post: ${params.slug}`);
  }

  throw error(404, 'Post not found');
}
