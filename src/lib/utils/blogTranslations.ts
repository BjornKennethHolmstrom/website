// src/lib/utils/blogTranslations.ts

/**
 * Supported blog post languages
 * Note: The main site UI only supports 'en' and 'sv' via the language store,
 * but blog posts can have translations in additional languages
 */
export type BlogLanguage = 'en' | 'sv' | 'es' | 'de' | 'fr' | 'eu' | 'ja' | 'zh' | 'hi' | 'ar' | 'pt' | 'ru';

export const BLOG_LANGUAGES: Record<BlogLanguage, { name: string; flag: string; dir: string }> = {
  en: { name: 'English', flag: '🇬🇧', dir: '' }, // Root level (no subfolder)
  sv: { name: 'Svenska', flag: '🇸🇪', dir: 'sv' },
  es: { name: 'Español', flag: '🇪🇸', dir: 'es' },
  de: { name: 'Deutsch', flag: '🇩🇪', dir: 'de' },
  fr: { name: 'Français', flag: '🇫🇷', dir: 'fr' },
  eu: { name: 'Euskara', flag: '', dir: 'eu' }, // Empty flag - will use SVG
  ja: { name: '日本語', flag: '🇯🇵', dir: 'ja' },
  zh: { name: '中文', flag: '🇨🇳', dir: 'zh' },
  hi: { name: 'हिन्दी', flag: '🇮🇳', dir: 'hi' },
  ar: { name: 'العربية', flag: '🇸🇦', dir: 'ar' },
  pt: { name: 'Português', flag: '🇵🇹', dir: 'pt' },
  ru: { name: 'Русский', flag: '🇷🇺', dir: 'ru' }
};

/**
 * Get the appropriate locale code for date formatting
 */
export function getLocaleForLanguage(lang: BlogLanguage): string {
  const locales: Record<BlogLanguage, string> = {
    en: 'en-US',
    sv: 'sv-SE',
    es: 'es-ES',
    de: 'de-DE',
    fr: 'fr-FR',
    eu: 'eu-ES',
    ja: 'ja-JP',
    zh: 'zh-CN',
    hi: 'hi-IN',
    ar: 'ar-SA',
    pt: 'pt-PT',
    ru: 'ru-RU'
  };
  return locales[lang] || 'en-US';
}

/**
 * Get translations for UI text based on language
 */
export function getBlogUIText(lang: BlogLanguage) {
  const texts: Record<BlogLanguage, { published: string }> = {
    en: { published: 'Published' },
    sv: { published: 'Publicerad' },
    es: { published: 'Publicado' },
    de: { published: 'Veröffentlicht' },
    fr: { published: 'Publié' },
    eu: { published: 'Argitaratua' },
    ja: { published: '公開日' },
    zh: { published: '发布日期' },
    hi: { published: 'प्रकाशित' },
    ar: { published: 'نشر في' },
    pt: { published: 'Publicado' },
    ru: { published: 'Опубликовано' }
  };
  return texts[lang] || texts.en;
}

/**
 * Helper function to check available translations for a blog post
 */
export async function getAvailableTranslations(slug: string): Promise<BlogLanguage[]> {
  const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
  const available: BlogLanguage[] = [];
  
  // Check for English version (root level)
  const enPath = `/src/lib/posts/${slug}/index.md`;
  if (modules[enPath]) {
    available.push('en');
  }
  
  // Check for all other language versions
  const otherLangs: BlogLanguage[] = ['sv', 'es', 'de', 'fr', 'eu', 'ja', 'zh', 'hi', 'ar', 'pt', 'ru'];
  for (const lang of otherLangs) {
    const langPath = `/src/lib/posts/${slug}/${BLOG_LANGUAGES[lang].dir}/index.md`;
    if (modules[langPath]) {
      available.push(lang);
    }
  }
  
  return available;
}

/**
 * Get all blog posts with their available translations
 * Useful for blog index pages
 */
export async function getAllPostsWithTranslations() {
  const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
  const posts = new Map();
  
  Object.entries(modules).forEach(([path, module]: [string, any]) => {
    // Extract slug and language from path
    // Patterns: /posts/[slug]/index.md (English) or /posts/[slug]/[lang]/index.md (other)
    const match = path.match(/\/posts\/([^/]+)(?:\/(sv|es|de|fr|eu|ja|zh|hi|ar|pt|ru))?\/index\.md$/);
    if (match) {
      const slug = match[1];
      const lang = (match[2] as BlogLanguage) || 'en';
      
      if (!posts.has(slug)) {
        posts.set(slug, {
          slug,
          translations: [] as BlogLanguage[],
          metadata: {}
        });
      }
      
      const post = posts.get(slug);
      post.translations.push(lang);
      
      // Use English metadata as default, or first available language if no English
      if (lang === 'en' || !post.metadata.title) {
        post.metadata = module.metadata;
      }
    }
  });
  
  return Array.from(posts.values());
}

/**
 * Sort languages for display: en first, then sv (if in language store), then alphabetically
 */
export function sortLanguagesForDisplay(languages: BlogLanguage[], currentStoreLang?: 'en' | 'sv'): BlogLanguage[] {
  return languages.sort((a, b) => {
    // English always first
    if (a === 'en') return -1;
    if (b === 'en') return 1;
    
    // Current store language (sv) comes second if available
    if (currentStoreLang === 'sv') {
      if (a === 'sv') return -1;
      if (b === 'sv') return 1;
    }
    
    // Then alphabetically by language name
    return BLOG_LANGUAGES[a].name.localeCompare(BLOG_LANGUAGES[b].name);
  });
}
