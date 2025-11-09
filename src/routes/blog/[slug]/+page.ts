import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    // Read all markdown files from posts
    const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
    
    // During prerendering, always load the English version
    // Language switching will be handled client-side in the component
    const enPath = `/src/lib/posts/${params.slug}/index.md`;
    if (modules[enPath]) {
      const post = modules[enPath];
      return {
        content: post.default,
        metadata: { ...post.metadata, lang: 'en' },
        slug: params.slug
      };
    }
  } catch (e) {
    console.error(e);
    throw error(500, `Could not load post: ${params.slug}`);
  }

  throw error(404, 'Post not found');
}

// Generate entries for prerendering
export async function entries() {
  const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
  const entries: Array<{ slug: string }> = [];
  const slugs = new Set<string>();
  
  // Extract all unique slugs
  Object.keys(modules).forEach((path) => {
    const match = path.match(/\/posts\/([^/]+)(?:\/(?:sv|es|de|fr|eu|ja|zh|hi|ar|pt|ru))?\/index\.md$/);
    if (match) {
      slugs.add(match[1]);
    }
  });
  
  // Add each slug as an entry
  slugs.forEach(slug => {
    entries.push({ slug });
  });
  
  return entries;
}
