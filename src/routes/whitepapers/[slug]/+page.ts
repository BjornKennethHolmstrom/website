// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    // Read all whitepaper markdown files
    const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
    
    // Try to find the whitepaper
    const whitepaperPath = `/src/lib/whitepapers/${params.slug}/index.md`;
    
    if (modules[whitepaperPath]) {
      const whitepaper = modules[whitepaperPath];
      return {
        content: whitepaper.default,        // ← CRITICAL: SERVER-SIDE CONTENT
        metadata: whitepaper.metadata,      // ← CRITICAL: SERVER-SIDE METADATA
        slug: params.slug
      };
    }
  } catch (e) {
    console.error('Error loading whitepaper:', e);
    throw error(500, `Could not load whitepaper: ${params.slug}`);
  }

  throw error(404, 'Whitepaper not found');
}

// Generate entries for prerendering
export async function entries() {
  const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
  const entries: Array<{ slug: string }> = [];
  
  Object.keys(modules).forEach((path) => {
    const match = path.match(/\/src\/lib\/whitepapers\/([^/]+)\/index\.md$/);
    if (match) {
      entries.push({ slug: match[1] });
    }
  });
  
  return entries;
}
