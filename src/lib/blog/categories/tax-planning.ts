// Tax Planning Blog Posts
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost } from '../blog-helper';

export const taxPlanningPosts: ContentfulBlogPost[] = [
  createBlogPost({
    id: 'tax-post-1',
    title: 'Understanding Tax Deductions for Small Businesses',
    slug: 'tax-deductions-small-businesses',
    content: [
      'As a small business owner, understanding tax deductions is crucial for maximizing your savings and staying compliant with tax regulations.',
      'Common deductible expenses include office supplies, business meals, travel expenses, and professional development courses.',
      'It\'s important to keep detailed records of all business expenses throughout the year to ensure you can claim these deductions when filing your taxes.',
      'Consider working with a tax professional to identify all eligible deductions specific to your industry and business structure.'
    ],
    publishedDate: '2024-01-15T10:00:00Z',
    category: 'Tax Planning',
    excerpt: 'Learn about essential tax deductions that can help small businesses save money and stay compliant.',
    featured: true,
    author: 'Lawgical Team',
    tags: ['tax deductions', 'small business', 'tax planning']
  }),
  createBlogPost({
    id: 'tax-post-2',
    title: 'Quarterly Tax Payments: What You Need to Know',
    slug: 'quarterly-tax-payments-guide',
    content: [
      'Quarterly tax payments are required for many self-employed individuals and business owners.',
      'These payments help you stay current with your tax obligations throughout the year.',
      'Missing quarterly payments can result in penalties and interest charges.',
      'Use Form 1040-ES to calculate and pay your estimated quarterly taxes.'
    ],
    publishedDate: '2024-01-05T09:15:00Z',
    category: 'Tax Planning',
    excerpt: 'Everything you need to know about quarterly tax payments for business owners.',
    featured: false,
    author: 'Lawgical Team',
    tags: ['quarterly taxes', 'estimated payments', 'tax planning']
  })
];
