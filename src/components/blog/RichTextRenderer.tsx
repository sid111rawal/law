'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { getContentfulImageUrl } from '@/lib/contentful/utils';
import { ContentfulRichText, ContentfulRichTextNode } from '@/lib/contentful/types';

// Custom render options for rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.PAR PH]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <ul className="mb-4 pl-6 list-disc space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <ol className="mb-4 pl-6 list-decimal space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <li className="text-gray-700">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-[#C9A34A] pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: ContentfulRichTextNode) => {
      const { title, file } = node.data?.target?.fields || {};
      if (!file) return null;
      
      return (
        <div className="my-6">
          <Image
            src={getContentfulImageUrl({ fields: { file } }, 800, 600)}
            alt={title || 'Blog image'}
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: ContentfulRichTextNode, children: React.ReactNode) => (
      <Link 
        href={node.data?.uri || '#'} 
        className="text-[#C9A34A] hover:text-[#B8923A] underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
  },
};

interface RichTextRendererProps {
  content: ContentfulRichText | null;
  className?: string;
}

export default function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
  if (!content) return null;

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {documentToReactComponents(content, renderOptions)}
    </div>
  );
}
