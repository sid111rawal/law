// Example: How to add a new blog post
// This file shows you exactly how to add new blog posts manually

import { createBlogPost, generateSlug, generateId } from './blog-helper';

// Example 1: Simple blog post
export const exampleNewPost = createBlogPost({
  id: generateId('example-post'),
  title: 'How to Start Your Business in 2024',
  slug: generateSlug('How to Start Your Business in 2024'), // or manually: 'how-to-start-your-business-2024'
  content: [
    'Starting a business in 2024 requires careful planning and understanding of current market conditions.',
    'First, identify your target market and validate your business idea through market research.',
    'Next, create a comprehensive business plan that outlines your goals, strategies, and financial projections.',
    'Don\'t forget to register your business, obtain necessary licenses, and set up proper accounting systems.',
    'Consider seeking professional advice from lawyers and accountants to ensure compliance with all regulations.'
  ],
  publishedDate: new Date().toISOString(), // Current date
  category: 'Business Formation',
  excerpt: 'A step-by-step guide to launching your business in 2024 with practical tips and expert advice.',
  featured: false,
  author: 'Lawgical Team',
  tags: ['business startup', 'entrepreneurship', 'business planning', '2024']
});

// Example 2: Featured blog post
export const exampleFeaturedPost = createBlogPost({
  id: generateId('featured-post'),
  title: 'Essential Tax Tips for New Business Owners',
  slug: 'essential-tax-tips-new-business-owners',
  content: [
    'As a new business owner, understanding your tax obligations is crucial for long-term success.',
    'Keep detailed records of all business expenses from day one to maximize your deductions.',
    'Consider hiring a tax professional to help you navigate complex tax regulations.',
    'Set aside money for quarterly tax payments to avoid penalties and interest.',
    'Take advantage of business tax credits and deductions available to new businesses.'
  ],
  publishedDate: '2024-01-20T08:00:00Z',
  category: 'Tax Planning',
  excerpt: 'Critical tax advice every new business owner should know to stay compliant and save money.',
  featured: true, // This will make it appear as a featured post
  author: 'Lawgical Team',
  tags: ['tax tips', 'new business', 'tax compliance', 'business taxes']
});

// Example 3: Multiple paragraphs with more detailed content
export const exampleDetailedPost = createBlogPost({
  id: generateId('detailed-post'),
  title: 'Understanding Business Insurance: A Complete Guide',
  slug: 'business-insurance-complete-guide',
  content: [
    'Business insurance is essential for protecting your company from various risks and liabilities.',
    'General liability insurance covers claims of bodily injury, property damage, and personal injury.',
    'Professional liability insurance protects against claims of negligence or errors in your professional services.',
    'Property insurance covers damage to your business property, equipment, and inventory.',
    'Workers\' compensation insurance is required in most states if you have employees.',
    'Cyber liability insurance is becoming increasingly important as businesses rely more on digital systems.',
    'Consider working with an insurance broker to find the right coverage for your specific business needs.',
    'Review and update your insurance policies annually to ensure adequate coverage as your business grows.'
  ],
  publishedDate: '2024-01-18T12:00:00Z',
  category: 'Business Protection',
  excerpt: 'Everything you need to know about business insurance to protect your company and assets.',
  featured: false,
  author: 'Lawgical Team',
  tags: ['business insurance', 'liability insurance', 'risk management', 'business protection']
});

// To add these posts to your blog, simply add them to the staticBlogPosts array in static-posts.ts:
/*
import { exampleNewPost, exampleFeaturedPost, exampleDetailedPost } from './example-new-post';

export const staticBlogPosts: ContentfulBlogPost[] = [
  // ... existing posts ...
  exampleNewPost,
  exampleFeaturedPost,
  exampleDetailedPost
];
*/
