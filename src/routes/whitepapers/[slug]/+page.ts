// src/routes/whitepapers/[slug]/+page.ts
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Hitta rätt .md-fil i /src/lib/whitepapers/
		const modules = import.meta.glob('$lib/whitepapers/*.md', { eager: true });
		const path = `/src/lib/whitepapers/${params.slug}.md`;

		if (modules[path]) {
			const post = modules[path];
			return {
				content: post.default, // Huvudinnehållet (HTML)
				metadata: post.metadata // Allt från frontmatter
			};
		}
	} catch (e) {
		console.error(e);
		throw error(500, `Kunde inte ladda white paper: ${params.slug}`);
	}

	throw error(404, 'Hittade inte detta white paper');
}
