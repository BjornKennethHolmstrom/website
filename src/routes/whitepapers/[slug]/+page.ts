// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    // Minimal load function to ensure route is recognized
    return { slug: params.slug };
}

export async function entries() {
    // Simple, reliable slug extraction
    const modules = import.meta.glob('$lib/whitepapers/*/index.md');
    const entries = Object.keys(modules).map(path => {
        // Extract slug from path like '/src/lib/whitepapers/beyond-states/index.md'
        const slug = path.split('/').slice(-2)[0]; // Get the directory name before index.md
        return { slug };
    });
    
    console.log('Whitepaper entries generated:', entries);
    return entries;
}
