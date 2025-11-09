// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// FIXED: Look for index.md files in subfolders
		const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
		// FIXED: Build the correct path to the index.md file
		const path = `/src/lib/whitepapers/${params.slug}/index.md`;

		if (modules[path]) {
			const post = modules[path];
			return {
				content: post.default, // Main content (HTML)
				metadata: post.metadata // All frontmatter
			};
		}
	} catch (e) {
		console.error(e);
		throw error(500, `Could not load white paper: ${params.slug}`);
	}

	throw error(404, 'White paper not found');
}

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
