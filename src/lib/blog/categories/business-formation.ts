// Business Formation Blog Posts
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost } from '../blog-helper';

export const businessFormationPosts: ContentfulBlogPost[] = [
  createBlogPost({
    id: 'business-post-1',
    title: 'Business Entity Selection: LLC vs Corporation',
    slug: 'business-entity-selection-llc-corporation',
    content: [
      'Choosing the right business entity is one of the most important decisions you\'ll make as an entrepreneur.',
      'LLCs offer flexibility and pass-through taxation, making them popular among small business owners.',
      'Corporations provide stronger liability protection and can be beneficial for businesses planning to raise capital.',
      'Consider factors like liability protection, tax implications, management structure, and future growth plans when making your decision.'
    ],
    publishedDate: '2024-01-10T14:30:00Z',
    category: 'Business Formation',
    excerpt: 'A comprehensive guide to choosing between LLC and Corporation for your business.',
    featured: false,
    author: 'Lawgical Team',
    tags: ['business formation', 'LLC', 'corporation', 'entity selection']
  })
];
