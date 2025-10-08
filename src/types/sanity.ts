// Sanity CMS Types
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityReference {
  _type: 'reference';
  _ref: string;
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  credentials?: string;
  bio?: string;
  image?: SanityImage;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: SanitySlug;
  color?: string;
  postCount?: number;
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: SanitySlug;
  author: Author;
  mainImage?: SanityImage;
  category: Category;
  tags?: string[];
  excerpt: string;
  body?: unknown; // PortableText content
  publishedAt: string;
  featured?: boolean;
  estimatedReadingTime?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface TableRow {
  cells: string[];
}

export interface TableValue {
  rows: TableRow[];
}
