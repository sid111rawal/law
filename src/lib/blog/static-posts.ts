// Static blog posts data - Main aggregator file
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { taxPlanningPosts } from './categories/tax-planning';
import { businessFormationPosts } from './categories/business-formation';
import { digitalEconomyPosts } from './categories/digital-economy';

// Combine all blog posts from different categories
export const staticBlogPosts: ContentfulBlogPost[] = [
  ...taxPlanningPosts,
  ...businessFormationPosts,
  ...digitalEconomyPosts
];

// Get all static blog posts
export function getAllStaticBlogPosts(): ContentfulBlogPost[] {
  return staticBlogPosts.sort((a, b) => 
    new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime()
  );
}

// Get static blog post by slug
export function getStaticBlogPostBySlug(slug: string): ContentfulBlogPost | null {
  return staticBlogPosts.find(post => post.fields.slug === slug) || null;
}

// Get static blog posts by category
export function getStaticBlogPostsByCategory(category: string): ContentfulBlogPost[] {
  return staticBlogPosts
    .filter(post => post.fields.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => 
      new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime()
    );
}

// Get all static categories
export function getAllStaticCategories(): string[] {
  const categories = staticBlogPosts.map(post => post.fields.category);
  return [...new Set(categories)];
}

// Get featured static blog posts
export function getFeaturedStaticBlogPosts(): ContentfulBlogPost[] {
  return staticBlogPosts
    .filter(post => post.fields.featured)
    .sort((a, b) => 
      new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime()
    );
}
