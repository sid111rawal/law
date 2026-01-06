# Blog Creation Guide

This guide provides step-by-step instructions for creating new blog posts for the Lawgical Station website.

## Table of Contents
1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Creating a New Blog Post](#creating-a-new-blog-post)
4. [Image Guidelines](#image-guidelines)
5. [Content Guidelines](#content-guidelines)
6. [SEO Best Practices](#seo-best-practices)
7. [Category Selection](#category-selection)
8. [Example Template](#example-template)

## Overview

Blog posts are stored in category-specific TypeScript files located in `src/lib/blog/categories/`. Each category has its own file (e.g., `tax-planning.ts`, `gst-compliance.ts`, etc.).

## File Structure

```
src/lib/blog/
├── categories/
│   ├── tax-planning.ts
│   ├── gst-compliance.ts
│   ├── business-formation.ts
│   └── digital-economy.ts
├── blog-helper.ts
└── static-posts.ts
```

## Creating a New Blog Post

### Step 1: Choose the Right Category File

Select the appropriate category file based on your blog post topic:
- **Tax Planning**: Income tax, deductions, tax planning strategies
- **GST Compliance**: GST returns, GST filing, GST compliance
- **Business Formation**: Company registration, business setup, entity selection
- **Digital Economy**: Digital transactions, e-commerce, online business

If you need a new category, create a new file following the existing pattern.

### Step 2: Import Required Functions

At the top of the category file, ensure these imports are present:

```typescript
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../blog-helper';
```

### Step 3: Add Blog Post to Category Array

Add your new blog post to the category's array (e.g., `taxPlanningPosts`, `gstCompliancePosts`).

## Image Guidelines

**IMPORTANT: Images must be added in TWO places for proper display:**

### Place 1: Featured Image (for Blog Listing Page)

Add the `featuredImage` parameter in the `createBlogPost` function. This image appears on:
- Blog listing page (`/resources/blogs`)
- Category pages
- Featured blog cards

```typescript
createBlogPost({
  id: 'tax-post-9',
  title: 'Your Blog Title',
  slug: 'your-blog-slug',
  featuredImage: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1767665652/your-image.jpg', // ADD HERE
  content: createRichTextWithHeadings([...])
})
```

**If no image is available, leave it as an empty string:**
```typescript
featuredImage: '', // Add image URL here for blog listing page
```

### Place 2: Content Image (for Blog Post Page)

Add an image block in the content array after the first paragraph. This image appears:
- At the top of the blog post content
- After the introduction paragraph

```typescript
content: createRichTextWithHeadings([
  {
    type: 'paragraph',
    text: 'Your introduction paragraph...'
  },
  {
    type: 'image',
    imageUrl: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1767665652/your-image.jpg', // ADD HERE
    imageAlt: 'Descriptive alt text for the image'
  },
  {
    type: 'heading',
    level: 2,
    text: 'First Heading'
  },
  // ... rest of content
])
```

**If no image is available, leave it as an empty string:**
```typescript
{
  type: 'image',
  imageUrl: '', // Add image URL here for blog post content
  imageAlt: 'Your Image Alt Text'
}
```

### Image Requirements

- **Format**: Use Cloudinary URLs (preferred) or direct image URLs
- **Size**: Recommended 1200x630px for featured images, 800x600px for content images
- **Alt Text**: Always provide descriptive alt text for accessibility and SEO
- **Naming**: Use descriptive, SEO-friendly image names

## Content Guidelines

### 1. Original Content Only

- **Never copy content directly** from other sources
- Rewrite and adapt information in your own words
- Ensure content is unique and valuable
- Add your own insights and examples

### 2. SEO-Rich Content

- Use relevant keywords naturally throughout the content
- Include long-tail keywords in headings and subheadings
- Write comprehensive, detailed content (aim for 1500+ words)
- Use proper heading hierarchy (H2, H3)
- Include FAQs or common questions
- Add internal linking opportunities

### 3. Content Structure

Follow this structure for optimal SEO and readability:

1. **Introduction Paragraph** (100-150 words)
   - Hook the reader
   - Explain what the post covers
   - Include primary keyword

2. **Main Content Sections** (H2 headings)
   - Break down into logical sections
   - Use H3 for subsections
   - Include examples, calculations, or step-by-step guides

3. **Key Takeaways/Summary** (optional)
   - Summarize important points
   - Use bullet points for easy scanning

4. **Conclusion** (50-100 words)
   - Reinforce main message
   - Call to action if appropriate

### 4. Content Blocks Available

```typescript
// Paragraph
{
  type: 'paragraph',
  text: 'Your paragraph text here. Use **bold** for emphasis.'
}

// Heading (H2)
{
  type: 'heading',
  level: 2,
  text: 'Main Section Heading'
}

// Heading (H3)
{
  type: 'heading',
  level: 3,
  text: 'Subsection Heading'
}

// Image
{
  type: 'image',
  imageUrl: 'https://example.com/image.jpg',
  imageAlt: 'Image description'
}

// Unordered List
{
  type: 'unorderedList',
  items: [
    'First item',
    'Second item',
    'Third item'
  ]
}

// Ordered List
{
  type: 'orderedList',
  items: [
    'Step 1',
    'Step 2',
    'Step 3'
  ]
}
```

### 5. Formatting Tips

- Use **bold** text for emphasis (wrap with `**text**`)
- Break long paragraphs into shorter ones
- Use bullet points for lists
- Include examples and calculations
- Add relevant dates and figures
- Use clear, concise language

## SEO Best Practices

### 1. Title Optimization

- Include primary keyword near the beginning
- Keep titles between 50-60 characters
- Make titles compelling and descriptive
- Include year/date if relevant (e.g., "FY 2025-26")

### 2. Slug Optimization

- Use lowercase with hyphens
- Include primary keyword
- Keep it concise and readable
- Example: `standard-deduction-salaried-employees-fy-2025-26`

### 3. Excerpt/Description

- Write compelling 150-160 character descriptions
- Include primary keyword
- Summarize the main value proposition
- Make it enticing for readers

### 4. Tags

Include 8-12 relevant tags:
- Primary keyword variations
- Related topics
- Long-tail keywords
- Common search terms

Example:
```typescript
tags: ['Standard Deduction', 'Salary Income', 'Tax Deduction', 'Old Tax Regime', 'New Tax Regime', 'Tax Planning', 'Income Tax', 'Salaried Employees', 'Pension', 'Tax Benefits']
```

### 5. Meta Information

- **Published Date**: Use ISO format (e.g., '2025-12-20T10:00:00Z')
- **Category**: Match the category file name
- **Featured**: Set to `false` unless it's a featured post
- **Author**: Leave empty or use 'Lawgical Team'

## Category Selection

### Existing Categories

1. **Tax Planning**
   - Income tax filing
   - Tax deductions and exemptions
   - Tax planning strategies
   - Capital gains tax
   - Advance tax
   - ITR filing

2. **GST Compliance**
   - GST returns (GSTR-1, GSTR-3B, GSTR-9)
   - GST filing procedures
   - GST compliance
   - GST portal guides
   - emSigner setup

3. **Business Formation**
   - Company registration
   - Startup registration
   - Business entity selection
   - Section 8 company
   - Partnership firm

4. **Digital Economy**
   - E-commerce compliance
   - Digital transactions
   - Online business setup

### Creating a New Category

If you need a new category:

1. Create a new file: `src/lib/blog/categories/your-category.ts`
2. Follow this structure:

```typescript
// Your Category Name Blog Posts
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { createBlogPost, createRichTextWithHeadings } from '../blog-helper';

export const yourCategoryPosts: ContentfulBlogPost[] = [
  // Your blog posts here
];
```

3. Import and add to `src/lib/blog/static-posts.ts`:

```typescript
import { yourCategoryPosts } from './categories/your-category';

export const staticBlogPosts: ContentfulBlogPost[] = [
  ...taxPlanningPosts,
  ...gstCompliancePosts,
  ...businessFormationPosts,
  ...digitalEconomyPosts,
  ...yourCategoryPosts // Add here
];
```

## Example Template

```typescript
createBlogPost({
  id: 'tax-post-14', // Unique ID
  title: 'Your SEO-Optimized Blog Title Here',
  slug: 'your-seo-friendly-slug-here',
  featuredImage: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1767665652/your-image.jpg', // Image for listing page
  content: createRichTextWithHeadings([
    {
      type: 'paragraph',
      text: 'Your compelling introduction paragraph that hooks the reader and includes your primary keyword. This should be 100-150 words and explain what the post covers.'
    },
    {
      type: 'image',
      imageUrl: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1767665652/your-image.jpg', // Image for post content
      imageAlt: 'Descriptive alt text for SEO and accessibility'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Main Section Heading with Keyword'
    },
    {
      type: 'paragraph',
      text: 'Detailed content explaining the topic. Use **bold** for emphasis on important terms.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Subsection Heading'
    },
    {
      type: 'paragraph',
      text: 'More detailed information with examples and practical insights.'
    },
    {
      type: 'unorderedList',
      items: [
        'Key point 1',
        'Key point 2',
        'Key point 3'
      ]
    },
    {
      type: 'heading',
      level: 2,
      text: 'Conclusion'
    },
    {
      type: 'paragraph',
      text: 'Summary paragraph that reinforces the main message and provides value to the reader.'
    }
  ]),
  publishedDate: '2025-12-20T10:00:00Z', // ISO format
  category: 'Tax Planning', // Match category name
  excerpt: 'Compelling 150-160 character description that includes keywords and summarizes the value proposition.',
  featured: false,
  author: '',
  tags: ['Primary Keyword', 'Related Term 1', 'Related Term 2', 'Long-tail Keyword', 'Search Term 1', 'Search Term 2']
})
```

## Checklist Before Publishing

- [ ] Content is original and not copied
- [ ] Images added in both places (featuredImage and content image block)
- [ ] SEO-optimized title (50-60 characters)
- [ ] SEO-friendly slug
- [ ] Compelling excerpt (150-160 characters)
- [ ] 8-12 relevant tags included
- [ ] Proper heading hierarchy (H2, H3)
- [ ] Content is comprehensive (1500+ words)
- [ ] Keywords used naturally throughout
- [ ] Examples and calculations included
- [ ] Published date in ISO format
- [ ] Category matches file name
- [ ] No linting errors
- [ ] All links and references are accurate

## Testing

After creating a blog post:

1. Check for linting errors: Run the linter on the file
2. Verify the post appears on the blog listing page
3. Check the individual blog post page renders correctly
4. Verify images display properly in both locations
5. Test on mobile devices
6. Verify SEO meta tags are correct

## Need Help?

- Review existing blog posts in the category files for examples
- Check `blog-helper.ts` for available functions
- Refer to this guide for structure and formatting

---

**Last Updated**: December 2025
**Version**: 1.0

