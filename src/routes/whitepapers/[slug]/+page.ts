// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

// NO 'load' FUNCTION HERE.
// The component will load its own content.

// Generate entries for prerendering
export async function entries() {
	// FIXED: Look for index.md files in subfolders
	const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
	const entries: Array<{ slug: string }> = [];
	
	Object.keys(modules).forEach((path) => {
		// FIXED: Regex to capture the folder name as the slug
		const match = path.match(/\/src\/lib\/whitepapers\/([^/]+)\/index\.md$/);
		if (match) {
			entries.push({ slug: match[1] });
		}
	});
	
	return entries;
}
