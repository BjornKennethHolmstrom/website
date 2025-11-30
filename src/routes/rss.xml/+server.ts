// src/routes/rss.xml/+server.ts
// Removed the import for fetchPosts since we aren't using it anymore
import { papersData } from '$lib/data/whitepapers';
import { booksData } from '$lib/data/books';

export const GET = async () => {
  // Removed: const posts = await fetchPosts();

  // Mappa whitepapers till RSS-struktur
  const whitepapers = papersData.map(paper => ({
    title: `White Paper: ${paper.key}`, // Note: You might want to add a real title field to whitepapers.ts later
    description: `A white paper on ${paper.category}`,
    link: paper.readOnlinePath || paper.pdfPath.en,
    date: paper.releaseDate,
    author: 'Björn Kenneth Holmström'
  }));

  // Mappa böcker till RSS-struktur
  const books = booksData.map(book => ({
    title: `Book: ${book.key}`, // Note: Consider adding a title field to books.ts too
    description: `A book about ${book.category}`,
    link: book.readOnlinePath || `https://bjornkennethholmstrom.org/books`,
    date: book.releaseDate,
    author: 'Björn Kenneth Holmström'
  }));

  // Combine only whitepapers and books (removed ...posts)
  const items = [...whitepapers, ...books]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const body = render(items);
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  };

  return new Response(body, { headers });
};

const render = (items) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Björn Kenneth Holmström</title>
    <description>Systems Thinker & Architect</description>
    <link>https://bjornkennethholmstrom.org</link>
    <atom:link href="https://bjornkennethholmstrom.org/rss.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${item.title}</title>
      <description>${item.description}</description>
      <link>${item.link}</link>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
      <author>bjorn.kenneth.holmstrom@gmail.com (${item.author})</author>
    </item>
    `
      )
      .join('')}
  </channel>
</rss>
`;
