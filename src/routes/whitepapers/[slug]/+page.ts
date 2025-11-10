import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
    console.log('LOADING WHITEPAPER:', params.slug);
    
    const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
    const path = `/src/lib/whitepapers/${params.slug}/index.md`;
    
    console.log('Looking for path:', path);
    console.log('Available modules:', Object.keys(modules));
    
    if (modules[path]) {
        const module = modules[path];
        return {
            content: module.default,
            metadata: module.metadata,
            slug: params.slug
        };
    }
    
    console.error('Whitepaper not found:', params.slug);
    throw error(404, `Whitepaper "${params.slug}" not found`);
}

export async function entries() {
    const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
    const entries = Object.keys(modules).map(path => {
        const slug = path.split('/').filter(Boolean).pop()?.replace('/index.md', '') || '';
        return { slug };
    }).filter(entry => entry.slug);
    
    console.log('PRERENDERING WHITEPAPERS:', entries);
    return entries;
}
