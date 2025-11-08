import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
	// 1. Glob *all* markdown files in the food content folder
	// We set eager: true to load them immediately
	const modules = import.meta.glob('$lib/content/food/**/*.md', { eager: true });

	// 2. Build the expected paths for both languages
	const enPath = `/src/lib/content/food/en/${params.slug}.md`;
	const svPath = `/src/lib/content/food/sv/${params.slug}.md`;

	const enPost = modules[enPath];
	const svPost = modules[svPath];

	// 3. We must have at least an English version
	if (!enPost) {
		throw error(404, `Could not find post: ${params.slug}`);
	}

	// 4. Return both (passing null if SV doesn't exist)
	// The component will handle which one to display
	return {
		content: {
			en: {
				default: enPost.default,
				metadata: enPost.metadata
			},
			sv: svPost
				? {
						default: svPost.default,
						metadata: svPost.metadata
					}
				: null // Pass null if no Swedish version exists
		}
	};
}
