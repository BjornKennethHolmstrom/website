// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
    console.log('WHITEPAPER LOAD CALLED:', {
        slug: params.slug,
        url: url.toString(),
        pathname: url.pathname
    });
    
    // Return minimal data to test if this route is even being hit
    return {
        slug: params.slug,
        timestamp: Date.now()
    };
}

export async function entries() {
    console.log('GENERATING WHITEPAPER ENTRIES...');
    
    // Simple, direct approach
    const modules = import.meta.glob('/src/lib/whitepapers/*/index.md');
    const slugs = Object.keys(modules).map(path => {
        const slug = path.split('/').filter(part => part && part !== 'index.md').pop();
        return { slug: slug || '' };
    }).filter(entry => entry.slug);
    
    console.log('FOUND WHITEPAPER SLUGS:', slugs);
    return slugs;
}
