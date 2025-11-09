// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Hitta rÃ¤tt .md-fil i /src/lib/whitepapers/
		const modules = import.meta.glob('$lib/whitepapers/*.md', { eager: true });
		const path = `/src/lib/whitepapers/${params.slug}.md`;

		if (modules[path]) {
			const post = modules[path];
			return {
				content: post.default, // HuvudinnehÃ¥llet (HTML)
				metadata: post.metadata // Allt frÃ¥n frontmatter
			};
		}
	} catch (e) {
		console.error(e);
		throw error(500, `Kunde inte ladda white paper: ${params.slug}`);
	}

	throw error(404, 'Hittade inte detta white paper');
}

// Generate entries for prerendering
export async function entries() {
	const modules = import.meta.glob('$lib/whitepapers/*.md', { eager: true });
	const entries: Array<{ slug: string }> = [];
	
	// Extract all slugs from whitepapers
	Object.keys(modules).forEach((path) => {
		const match = path.match(/\/whitepapers\/([^/]+)\.md$/);
		if (match) {
			entries.push({ slug: match[1] });
		}
	});
	
	return entries;
}
