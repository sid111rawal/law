// Contentful types
import { Document, Node } from '@contentful/rich-text-types';

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details?: {
        image?: {
          width: number;
          height: number;
        };
      };
    };
    title?: string;
  };
}

export interface ContentfulBlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: Document;
    publishedDate: string;
    category: string;
    excerpt?: string;
    featuredImage?: ContentfulImage;
    featured?: boolean;
    author?: string;
    tags?: string[];
  };
}

export type ContentfulRichText = Document;
export type ContentfulRichTextNode = Node;
