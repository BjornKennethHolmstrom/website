import { getArchivedPosts } from '$lib/utils/blogTranslations';

export async function load() {
  try {
    const archivedPosts = await getArchivedPosts();
    
    // Sort posts by date (newest first)
    const sortedPosts = archivedPosts.sort((a, b) => {
      const dateA = a.metadata?.date ? new Date(a.metadata.date).getTime() : 0;
      const dateB = b.metadata?.date ? new Date(b.metadata.date).getTime() : 0;
      return dateB - dateA;
    });
    
    return {
      posts: sortedPosts
    };
  } catch (error) {
    console.error('Failed to load archived posts:', error);
    return {
      posts: []
    };
  }
}
