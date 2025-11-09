// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

// Generate entries for prerendering
export async function entries() {
  const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
  const entries: Array<{ slug: string }> = [];
  
  Object.keys(modules).forEach((path) => {
    // More flexible regex that handles different path formats
    const match = path.match(/(?:\/src\/lib\/whitepapers\/|\/whitepapers\/)([^/]+)\/index\.md$/);
    if (match) {
      entries.push({ slug: match[1] });
    } else {
      // Debug logging
      console.log('Path did not match:', path);
    }
  });
  
  console.log('Generated whitepaper entries:', entries);
  return entries;
}

// Optional: Add a load function to ensure proper data loading
export async function load({ params }) {
  try {
    // This ensures the route is properly recognized
    return {
      slug: params.slug
    };
  } catch (e) {
    console.error('Error in whitepaper load:', e);
    throw error(404, 'Whitepaper not found');
  }
}
