// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

// Generate entries for prerendering - SIMPLIFIED
export async function entries() {
  try {
    const modules = import.meta.glob('/src/lib/whitepapers/*/index.md', { eager: true });
    const entries: Array<{ slug: string }> = [];
    
    for (const path in modules) {
      // Simple slug extraction - get the directory name
      const slug = path.split('/').filter(Boolean).pop() || '';
      if (slug && slug !== 'index.md') {
        entries.push({ slug });
      }
    }
    
    console.log('Whitepaper slugs found:', entries);
    return entries;
  } catch (error) {
    console.error('Error generating whitepaper entries:', error);
    return [];
  }
}
