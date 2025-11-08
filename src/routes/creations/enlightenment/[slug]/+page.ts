import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	// 1. Find all our English markdown files
	const modules = import.meta.glob('$lib/content/enlightenment/en/*.md');

	// 2. Map their filenames to a slug list
	const slugs = Object.keys(modules).map((path) => {
		// Path is like: /src/lib/content/enlightenment/en/my-slug.md
		const parts = path.split('/');
		const filename = parts.pop() || ''; // 'my-slug.md'
		const slug = filename.replace('.md', ''); // 'my-slug'
		return { slug: slug };
	});

	return slugs;
}

export async function load({ params }) {
	// 1. Glob *all* markdown files in the enlightenment content folder
	// We set eager: true to load them immediately
	const modules = import.meta.glob('$lib/content/enlightenment/**/*.md', { eager: true });

	// 2. Build the expected paths for both languages
	const enPath = `/src/lib/content/enlightenment/en/${params.slug}.md`;
	const svPath = `/src/lib/content/enlightenment/sv/${params.slug}.md`;

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
