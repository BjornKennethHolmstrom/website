import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    // Denna 'glob' hittar den specifika filen
    // Vi använder "eager" för att ladda den direkt
    const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
    
    // Bygg den förväntade sökvägen
    const path = `/src/lib/posts/${params.slug}/index.md`;
    
    if (modules[path]) {
      const post = modules[path];
      return {
        content: post.default, // Huvudinnehållet
        metadata: post.metadata
      };
    }
  } catch (e) {
    console.error(e);
    throw error(500, `Kunde inte ladda inlägget: ${params.slug}`);
  }

  throw error(404, 'Hittade inte inlägget');
}
