import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
    console.log('LOADING WHITEPAPER:', params.slug);
    
    const modules = import.meta.glob('$lib/working-papers/**/index.md', { eager: true });
    const path = `/src/lib/working-papers/${params.slug}/index.md`;
    
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
    const modules = import.meta.glob('$lib/working-papers/**/index.md', { eager: true });
    const entries: Array<{ slug: string }> = [];
    
    Object.keys(modules).forEach((path) => {
        // FIXED: Proper slug extraction
        const parts = path.split('/');
        // Path format: /src/lib/working-papers/SLUG/index.md
        // We want the part between "working-papers" and "index.md"
        const slugIndex = parts.indexOf('working-papers') + 1;
        if (slugIndex > 0 && slugIndex < parts.length - 1) {
            const slug = parts[slugIndex];
            if (slug && slug !== 'index.md') {
                entries.push({ slug });
            }
        }
    });
    
    console.log('PRERENDERING WHITEPAPERS:', entries);
    return entries;
}
