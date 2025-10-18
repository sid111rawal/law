// Example: How to create blog posts with Table of Contents
// This file demonstrates the proper structure for creating blog posts with headings

import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../blog-helper';

export const exampleWithTocPosts: ContentfulBlogPost[] = [
  createBlogPost({
    id: 'example-toc-post',
    title: 'Complete Guide to Business Tax Planning in 2024',
    slug: 'complete-guide-business-tax-planning-2024',
    content: createRichTextWithHeadings([
      {
        type: 'paragraph',
        text: 'Effective tax planning is crucial for business success. This comprehensive guide covers all aspects of business tax planning for 2024, helping you maximize deductions and minimize your tax liability.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Understanding Business Tax Structure'
      },
      {
        type: 'paragraph',
        text: 'Business taxes vary based on your entity type, income level, and business activities. Understanding the different tax structures is the first step in effective tax planning.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Tax Deductions for Businesses'
      },
      {
        type: 'paragraph',
        text: 'Businesses can deduct various expenses including office rent, employee salaries, equipment purchases, marketing costs, and professional services. Proper documentation is essential for claiming these deductions.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Operating Expenses'
      },
      {
        type: 'paragraph',
        text: 'Operating expenses are the day-to-day costs of running your business. These include rent, utilities, office supplies, and administrative costs.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Capital Expenses'
      },
      {
        type: 'paragraph',
        text: 'Capital expenses are investments in long-term assets like equipment, vehicles, or property. These expenses are typically depreciated over several years.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Tax Planning Strategies'
      },
      {
        type: 'paragraph',
        text: 'Effective tax planning involves timing income and expenses, maximizing deductions, and taking advantage of tax credits and incentives.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Record Keeping Requirements'
      },
      {
        type: 'paragraph',
        text: 'Maintaining accurate financial records is essential for tax compliance. This includes keeping receipts, invoices, bank statements, and other financial documents.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Common Tax Mistakes to Avoid'
      },
      {
        type: 'paragraph',
        text: 'Many businesses make costly tax mistakes including poor record keeping, missing deadlines, and failing to take advantage of available deductions.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Working with Tax Professionals'
      },
      {
        type: 'paragraph',
        text: 'A qualified tax professional can help you navigate complex tax regulations, identify opportunities for savings, and ensure compliance with all applicable laws.'
      }
    ]),
    publishedDate: '2024-01-30T14:00:00Z',
    category: 'Tax Planning',
    excerpt: 'Comprehensive guide to business tax planning in 2024. Learn about deductions, strategies, and compliance requirements.',
    featured: false,
    author: 'Lawgical Team',
    tags: ['business tax planning', 'tax deductions', 'tax strategies', 'business compliance', '2024 tax guide']
  })
];

// To add this to your main blog posts, import it in static-posts.ts:
// import { exampleWithTocPosts } from './categories/example-with-toc';
// Then add ...exampleWithTocPosts to the staticBlogPosts array
