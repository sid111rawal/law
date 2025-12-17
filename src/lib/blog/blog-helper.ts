// Helper functions for creating blog posts
import { ContentfulBlogPost, ContentfulImage } from '@/lib/contentful/types';
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
  type: 'heading' | 'paragraph' | 'image' | 'orderedList' | 'unorderedList';
  level?: 1 | 2 | 3;
  text?: string;
  imageUrl?: string;
  imageAlt?: string;
  items?: string[]; // For lists
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
            value: block.text || '',
            marks: [],
            data: {}
          }]
        };
      } else if (block.type === 'image') {
        // Create a custom image block with external URL
        // We'll use a special paragraph marker that the renderer can detect
        return {
          nodeType: BLOCKS.PARAGRAPH,
          data: {
            imageUrl: block.imageUrl,
            imageAlt: block.imageAlt || 'Blog image'
          },
          content: [{
            nodeType: 'text',
            value: `[IMAGE:${block.imageUrl}:${block.imageAlt || 'Blog image'}]`,
            marks: [],
            data: {}
          }]
        };
      } else if (block.type === 'orderedList') {
        return {
          nodeType: BLOCKS.OL_LIST,
          data: {},
          content: (block.items || []).map(item => ({
            nodeType: BLOCKS.LIST_ITEM,
            data: {},
            content: [{
              nodeType: BLOCKS.PARAGRAPH,
              data: {},
              content: [{
                nodeType: 'text',
                value: item,
                marks: [],
                data: {}
              }]
            }]
          }))
        };
      } else if (block.type === 'unorderedList') {
        return {
          nodeType: BLOCKS.UL_LIST,
          data: {},
          content: (block.items || []).map(item => ({
            nodeType: BLOCKS.LIST_ITEM,
            data: {},
            content: [{
              nodeType: BLOCKS.PARAGRAPH,
              data: {},
              content: [{
                nodeType: 'text',
                value: item,
                marks: [],
                data: {}
              }]
            }]
          }))
        };
      } else {
        // Handle paragraph - support markdown-style **bold** syntax
        const text = block.text || '';
        
        // Check for markdown-style bold (**text**)
        if (text.includes('**')) {
          const parts = text.split(/(\*\*[^*]+\*\*)/g);
          const content: any[] = [];
          
          parts.forEach(part => {
            if (part.startsWith('**') && part.endsWith('**')) {
              // Bold text
              const boldText = part.slice(2, -2);
              content.push({
                nodeType: 'text',
                value: boldText,
                marks: [{ type: 'bold' }],
                data: {}
              });
            } else if (part.trim()) {
              // Regular text
              content.push({
                nodeType: 'text',
                value: part,
                marks: [],
                data: {}
              });
            }
          });
          
          return {
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: content.length > 0 ? content : [{
              nodeType: 'text',
              value: text,
              marks: [],
              data: {}
            }]
          };
        }
        
        return {
          nodeType: BLOCKS.PARAGRAPH,
          data: {},
          content: [{
            nodeType: 'text',
            value: text,
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
  tags = [],
  featuredImage
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
  featuredImage?: ContentfulImage | string; // ContentfulImage object or URL string
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

  // Handle featuredImage - convert string URL to ContentfulImage if needed
  const processedFeaturedImage = featuredImage 
    ? (typeof featuredImage === 'string' ? createContentfulImage(featuredImage, title) : featuredImage)
    : undefined;

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
      tags,
      featuredImage: processedFeaturedImage
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

// Helper function to create ContentfulImage from URL string
export function createContentfulImage(imageUrl: string, title?: string): ContentfulImage {
  return {
    fields: {
      file: {
        url: imageUrl.startsWith('http') ? imageUrl : `https:${imageUrl}`,
        details: {
          image: {
            width: 1200,
            height: 630
          }
        }
      },
      title: title || 'Blog featured image'
    }
  };
}
