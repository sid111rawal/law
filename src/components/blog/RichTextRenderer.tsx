'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { getContentfulImageUrl } from '@/lib/contentful/utils';
import { ContentfulRichText, ContentfulRichTextNode } from '@/lib/contentful/types';

// Custom render options for rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: ContentfulRichTextNode, children: React.ReactNode) => {
      const text = (node as { content?: Array<{ value?: string }> }).content?.[0]?.value || '';
      const imageUrl = (node as { data?: { imageUrl?: string } }).data?.imageUrl;
      const imageAlt = (node as { data?: { imageAlt?: string } }).data?.imageAlt;
      
      // Check if this is an image block
      if (imageUrl || text.startsWith('[IMAGE:')) {
        let url = imageUrl;
        let alt = imageAlt || 'Blog image';
        
        // Parse image marker if URL not in data
        if (!url && text.startsWith('[IMAGE:')) {
          const match = text.match(/\[IMAGE:(.+?):(.+?)\]/);
          if (match) {
            url = match[1];
            alt = match[2];
          }
        }
        
        if (url) {
          return (
            <div className="my-6">
              <Image
                src={url}
                alt={alt}
                width={800}
                height={600}
                className="rounded-lg shadow-md w-full h-auto"
                unoptimized
              />
            </div>
          );
        }
      }
      
      // Check if this is a markdown table
      if (text.includes(' | ') && text.includes('---')) {
        const lines = text.split('\n');
        const tableLines = lines.filter((line: string) => line.trim() !== '');
        
        if (tableLines.length >= 2) {
          const headers = tableLines[0].split(' | ').map((h: string) => h.replace(/\*\*/g, '').trim());
          const dataRows = tableLines.slice(2).map((line: string) => 
            line.split(' | ').map((cell: string) => cell.trim())
          );
          
          return (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {headers.map((header: string, index: number) => (
                      <th 
                        key={index} 
                        className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataRows.map((row: string[], rowIndex: number) => (
                    <tr 
                      key={rowIndex} 
                      className={`hover:bg-gray-50 transition-colors ${
                        rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                      }`}
                    >
                      {row.map((cell: string, cellIndex: number) => (
                        <td 
                          key={cellIndex} 
                          className="border border-gray-300 px-4 py-3 text-gray-700"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
      
      return <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>;
    },
    [BLOCKS.HEADING_1]: (node: ContentfulRichTextNode, children: React.ReactNode) => {
      const text = (node as { content?: Array<{ value?: string }> }).content?.[0]?.value || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return <h1 id={id} className="text-3xl font-bold mb-6 text-gray-900">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (node: ContentfulRichTextNode, children: React.ReactNode) => {
      const text = (node as { content?: Array<{ value?: string }> }).content?.[0]?.value || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return <h2 id={id} className="text-2xl font-bold mb-4 mt-8 text-gray-900">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: ContentfulRichTextNode, children: React.ReactNode) => {
      const text = (node as { content?: Array<{ value?: string }> }).content?.[0]?.value || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return <h3 id={id} className="text-xl font-semibold mb-3 mt-6 text-gray-900">{children}</h3>;
    },
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
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-bold text-gray-900">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{text}</code>,
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
