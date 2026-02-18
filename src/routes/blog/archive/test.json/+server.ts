import { getArchivedPosts } from '$lib/utils/blogTranslations';
import { json } from '@sveltejs/kit';

export async function GET() {
  const posts = await getArchivedPosts();
  return json(posts);
}
