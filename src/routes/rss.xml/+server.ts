import { error } from '@sveltejs/kit';
import { booksData } from '$lib/data/books';
import { papersData } from '$lib/data/whitepapers';

// Importera dina översättningar för att hämta titlar/beskrivningar
// (Justera sökvägarna om de ligger någon annanstans)
import { coreTranslations } from '$lib/i18n/translations/core'; // Antagande om filnamn
import { booksTranslations } from '$lib/i18n/translations/books';
import { whitepapersTranslations } from '$lib/i18n/translations/whitepapers';

export const prerender = true;

// Slå ihop alla engelska översättningar
const t = {
	...coreTranslations.en,
	...booksTranslations.en,
	...whitepapersTranslations.en
};

// Global metadata för det samlade flödet
const siteUrl = 'https://bjornkennethholmstrom.org';
const siteTitle = 'Björn Kenneth Holmström | Updates';
const siteDescription =
	'Updates, blog posts, books, and white papers from Björn Kenneth Holmström on systems thinking, consciousness, and global governance.';

// En gemensam typ för alla innehållsdelar
type FeedItem = {
	title: string;
	description: string;
	link: string;
	pubDate: Date; // Använd Date-objekt för enkel sortering
};

export async function GET() {
	let allContent: FeedItem[] = [];

	// 1. Hämta alla BLOGGINLÄGG
	try {
		const modules = import.meta.glob('$lib/posts/**/index.md', { eager: true });
		for (const path in modules) {
			const module = modules[path];
			const metadata = module.metadata as { title: string; date: string; [key: string]: unknown };

			if (!metadata || !metadata.title || !metadata.date) {
				console.warn(`Varning: Blogginlägg ${path} saknar metadata.`);
				continue;
			}

			const slug = path.match(/src\/lib\/posts\/(.*?)\/index\.md/)?.[1];
			if (slug) {
				allContent.push({
					title: metadata.title,
					description: `Blog post: ${metadata.title}`, // Enkel beskrivning
					link: `${siteUrl}/blog/${slug}`,
					pubDate: new Date(metadata.date)
				});
			}
		}
	} catch (e) {
		console.error('Fel vid hämtning av blogginlägg:', e);
		throw error(500, 'Kunde inte hämta blogginlägg för RSS');
	}

	// 2. Formatera BÖCKER
	for (const book of booksData) {
		allContent.push({
			title: `New Book: ${t.books[book.key].title}`,
			description: t.books[book.key].description,
			link: `${siteUrl}/books`, // Länka till boksidan
			pubDate: new Date(book.releaseDate)
		});
	}

	// 3. Formatera WHITE PAPERS
	for (const paper of papersData) {
		allContent.push({
			title: `New White Paper: ${t.whitepapers[paper.key].title}`,
			description: t.whitepapers[paper.key].description,
			link: `${siteUrl}/whitepapers`, // Länka till white paper-sidan
			pubDate: new Date(paper.releaseDate)
		});
	}

	// 4. Sortera allt samlat innehåll
	const sortedContent = allContent.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

	// 5. Generera och returnera XML
	const xmlFeed = renderXml(sortedContent);
	return new Response(xmlFeed, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}

/**
 * Hjälpfunktion för att rendera den slutgiltiga XML-strängen
 */
function renderXml(items: FeedItem[]): string {
	const lastBuildDate = new Date().toUTCString();
	const feedUrl = `${siteUrl}/rss.xml`; // Ny plats!

	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${siteTitle}</title>
  <link>${siteUrl}</link>
  <description>${siteDescription}</description>
  <language>en</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />

  ${items
		.map((item) => {
			const pubDate = item.pubDate.toUTCString();
			// XML-vänlig beskrivning
			const description = `<![CDATA[${item.description}]]>`;

			return `
    <item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>
  `;
		})
		.join('')}
  
</channel>
</rss>
`;
}
