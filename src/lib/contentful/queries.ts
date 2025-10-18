// Contentful API queries
import { getContentfulClient } from './client';
import { ContentfulBlogPost } from './types';
import { 
  getAllStaticBlogPosts, 
  getStaticBlogPostBySlug, 
  getStaticBlogPostsByCategory, 
  getAllStaticCategories, 
  getFeaturedStaticBlogPosts 
} from '../blog/static-posts';

// Get all blog posts
export async function getAllBlogPosts(): Promise<ContentfulBlogPost[]> {
  const client = getContentfulClient();
  const staticPosts = getAllStaticBlogPosts();
  
  // Return static posts if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return staticPosts;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      order: ['-fields.publishedDate'],
    });
    
    const contentfulPosts = response.items as unknown as ContentfulBlogPost[];
    
    // Combine Contentful posts with static posts
    const allPosts = [...contentfulPosts, ...staticPosts];
    
    // Sort by published date (newest first)
    return allPosts.sort((a, b) => 
      new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime()
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Fall back to static posts on error
    return staticPosts;
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<ContentfulBlogPost | null> {
  const client = getContentfulClient();
  
  // Return static post if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return getStaticBlogPostBySlug(slug);
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug,
      limit: 1,
    });
    
    // If Contentful has the post, return it
    if (response.items && response.items.length > 0) {
      return (response.items[0] as unknown as ContentfulBlogPost) || null;
    }
    
    // Otherwise, check static posts
    return getStaticBlogPostBySlug(slug);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    // Fall back to static posts on error
    return getStaticBlogPostBySlug(slug);
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<ContentfulBlogPost[]> {
  const client = getContentfulClient();
  const staticPosts = getStaticBlogPostsByCategory(category);
  
  // Return static posts if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return staticPosts;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.category': category,
      order: ['-fields.publishedDate'],
    });
    
    const contentfulPosts = response.items as unknown as ContentfulBlogPost[];
    
    // Combine Contentful posts with static posts for this category
    const allPosts = [...contentfulPosts, ...staticPosts];
    
    // Sort by published date (newest first)
    return allPosts.sort((a, b) => 
      new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime()
    );
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    // Fall back to static posts on error
    return staticPosts;
  }
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<ContentfulBlogPost[]> {
  const client = getContentfulClient();
  
  // Return static posts if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return getFeaturedStaticBlogPosts();
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.featured': true,
      order: ['-fields.publishedDate'],
      limit: 3,
    });
    
    // If Contentful returns no posts, fall back to static posts
    if (!response.items || response.items.length === 0) {
      return getFeaturedStaticBlogPosts();
    }
    
    return response.items as unknown as ContentfulBlogPost[];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    // Fall back to static posts on error
    return getFeaturedStaticBlogPosts();
  }
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const client = getContentfulClient();
  const staticCategories = getAllStaticCategories();
  
  // Return static categories if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return staticCategories;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      select: ['fields.category'],
    });
    
    // Extract unique categories from Contentful
    const contentfulCategories = response.items
      .map((item) => (item as unknown as ContentfulBlogPost)?.fields?.category)
      .filter((category: string, index: number, self: string[]) => 
        category && self.indexOf(category) === index
      );
    
    // Combine Contentful categories with static categories
    const allCategories = [...contentfulCategories, ...staticCategories];
    
    // Remove duplicates
    return [...new Set(allCategories)];
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Fall back to static categories on error
    return staticCategories;
  }
}
