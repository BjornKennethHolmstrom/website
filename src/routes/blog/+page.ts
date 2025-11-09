// src/routes/blog/+page.ts
import { getAllPostsWithTranslations } from '$lib/utils/blogTranslations';

export async function load() {
  const posts = await getAllPostsWithTranslations();
  
  return {
    posts
  };
}
