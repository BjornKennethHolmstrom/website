// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Updated glob to match the new file structure
		const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
		// Updated path to find the correct index.md file
		const path = `/src/lib/whitepapers/${params.slug}/index.md`;

		if (modules[path]) {
			const post = modules[path];
			return {
				content: post.default,
				metadata: post.metadata
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
	// Updated glob to match the new file structure
	const modules = import.meta.glob('$lib/whitepapers/**/index.md', { eager: true });
	const entries: Array<{ slug: string }> = [];
	
	Object.keys(modules).forEach((path) => {
		// Updated regex to capture the slug (folder name)
		const match = path.match(/\/src\/lib\/whitepapers\/([^/]+)\/index\.md$/);
		if (match) {
			entries.push({ slug: match[1] });
		}
	});
	
	return entries;
}
