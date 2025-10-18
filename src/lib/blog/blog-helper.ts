// Helper functions for creating blog posts
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { Document, BLOCKS } from '@contentful/rich-text-types';

// Helper function to create rich text content from simple paragraphs
export function createRichTextContent(paragraphs: string[]): Document {
  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: paragraphs.map(paragraph => ({
      nodeType: BLOCKS.PARAGRAPH,
      data: {},
      content: [{
        nodeType: 'text',
        value: paragraph,
        marks: [],
        data: {}
      }]
    }))
  };
}

// Helper function to create rich text content with headings for table of contents
export function createRichTextWithHeadings(contentBlocks: Array<{
  type: 'heading' | 'paragraph';
  level?: 1 | 2 | 3;
  text: string;
}>): Document {
  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: contentBlocks.map(block => {
      if (block.type === 'heading') {
        const headingLevel = block.level || 2;
        const blockType = headingLevel === 1 ? BLOCKS.HEADING_1 : 
                         headingLevel === 2 ? BLOCKS.HEADING_2 : BLOCKS.HEADING_3;
        
        return {
          nodeType: blockType,
          data: {},
          content: [{
            nodeType: 'text',
            value: block.text,
            marks: [],
            data: {}
          }]
        };
      } else {
        return {
          nodeType: BLOCKS.PARAGRAPH,
          data: {},
          content: [{
            nodeType: 'text',
            value: block.text,
            marks: [],
            data: {}
          }]
        };
      }
    })
  };
}

// Helper function to create a blog post object
export function createBlogPost({
  id,
  title,
  slug,
  content,
  publishedDate,
  category,
  excerpt,
  featured = false,
  author = 'Lawgical Team',
  tags = []
}: {
  id: string;
  title: string;
  slug: string;
  content: string[] | Document; // Array of paragraphs OR rich text document
  publishedDate: string; // ISO date string
  category: string;
  excerpt?: string;
  featured?: boolean;
  author?: string;
  tags?: string[];
}): ContentfulBlogPost {
  // Handle both string array and Document content
  const processedContent = Array.isArray(content) 
    ? createRichTextContent(content)
    : content;

  // Generate excerpt from first paragraph if not provided
  const generatedExcerpt = excerpt || (
    Array.isArray(content) 
      ? content[0]?.substring(0, 160) + '...'
      : 'Read more about this topic...'
  );

  return {
    sys: {
      id,
      createdAt: publishedDate,
      updatedAt: publishedDate
    },
    fields: {
      title,
      slug,
      content: processedContent,
      publishedDate,
      category,
      excerpt: generatedExcerpt,
      featured,
      author,
      tags
    }
  };
}

// Helper function to generate a slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Helper function to generate a unique ID
export function generateId(prefix: string = 'static-post'): string {
  return `${prefix}-${Date.now()}`;
}
