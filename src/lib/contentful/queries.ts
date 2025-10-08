// Contentful API queries
import { getContentfulClient } from './client';
import { ContentfulBlogPost } from './types';

// Get all blog posts
export async function getAllBlogPosts(): Promise<ContentfulBlogPost[]> {
  const client = getContentfulClient();
  
  // Return empty array if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      order: ['-fields.publishedDate'],
    });
    
    return response.items as unknown as ContentfulBlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<ContentfulBlogPost | null> {
  const client = getContentfulClient();
  
  // Return null if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return null;
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug,
      limit: 1,
    });
    
    return (response.items[0] as unknown as ContentfulBlogPost) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<ContentfulBlogPost[]> {
  const client = getContentfulClient();
  
  // Return empty array if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.category': category,
      order: ['-fields.publishedDate'],
    });
    
    return response.items as unknown as ContentfulBlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts by category:', error);
    return [];
  }
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<ContentfulBlogPost[]> {
  const client = getContentfulClient();
  
  // Return empty array if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.featured': true,
      order: ['-fields.publishedDate'],
      limit: 3,
    });
    
    return response.items as unknown as ContentfulBlogPost[];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    return [];
  }
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const client = getContentfulClient();
  
  // Return empty array if Contentful is not configured
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    return [];
  }
  
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      select: ['fields.category'],
    });
    
    // Extract unique categories
    const categories = response.items
      .map((item) => (item as unknown as ContentfulBlogPost)?.fields?.category)
      .filter((category: string, index: number, self: string[]) => 
        category && self.indexOf(category) === index
      );
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}
