// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

// The 'load' function is no longer needed here, 
// as the component will load its own content.

// Generate entries for prerendering
export async function entries() {
	const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
	const entries: Array<{ slug: string }> = [];
	
	Object.keys(modules).forEach((path) => {
		// Use the correct regex to find the slug (the folder name)
		const match = path.match(/\/src\/lib\/whitepapers\/([^/]+)\/index\.md$/);
		if (match) {
			entries.push({ slug: match[1] });
		}
	});
	
	return entries;
}
