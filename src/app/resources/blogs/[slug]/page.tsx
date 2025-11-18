import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/contentful/queries';
import RichTextRenderer from '@/components/blog/RichTextRenderer';
import TableOfContents from '@/components/blog/TableOfContents';
import { getContentfulImageUrl, formatDate } from '@/lib/contentful/utils';
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { Document, BLOCKS } from '@contentful/rich-text-types';
import { generateBlogMetadata, generateJsonLd } from '@/utils/seo';
import { seoConfig } from '@/config/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  // Return empty array if no posts or if Contentful is not configured
  if (!posts || posts.length === 0) {
    return [];
  }
  
  // Filter out posts without slugs and map to params
  return posts
    .filter((post: ContentfulBlogPost) => post.fields?.slug)
    .map((post: ContentfulBlogPost) => ({
      slug: post.fields.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Lawgical Station',
    };
  }

  const { fields } = post;
  
  return generateBlogMetadata({
    title: fields.title,
    description: fields.excerpt || fields.title,
    slug: fields.slug,
    publishDate: fields.publishedDate,
    category: fields.category,
    tags: fields.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const { fields } = post;
  const relatedPosts = await getAllBlogPosts();

  // Extract headings for table of contents
  const extractHeadings = (content: Document): Array<{id: string, text: string, level: number}> => {
    const headings: Array<{id: string, text: string, level: number}> = [];
    
    if (content?.content) {
      content.content.forEach((node) => {
        if (node.nodeType === BLOCKS.HEADING_1 || node.nodeType === BLOCKS.HEADING_2 || node.nodeType === BLOCKS.HEADING_3) {
          const text = node.content?.[0]?.nodeType === 'text' ? node.content[0].value : '';
          const level = parseInt(node.nodeType.split('_')[1]);
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          
          headings.push({ id, text, level });
        }
      });
    }
    
    return headings;
  };

  const headings = extractHeadings(fields.content);

  // Generate structured data for the blog post
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": fields.title,
    "description": fields.excerpt || fields.title,
    "url": `${seoConfig.site.url}/resources/blogs/${fields.slug}`,
    "datePublished": fields.publishedDate,
    "dateModified": post.sys.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": seoConfig.site.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": seoConfig.site.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${seoConfig.site.url}/images/Lawgical logo (1).png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${seoConfig.site.url}/resources/blogs/${fields.slug}`
    },
    "articleSection": fields.category || "General",
    "keywords": fields.tags?.join(', ') || '',
    ...(fields.featuredImage && {
      "image": {
        "@type": "ImageObject",
        "url": getContentfulImageUrl(fields.featuredImage, 1200, 630),
        "width": 1200,
        "height": 630
      }
    })
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6">
            <Link 
              href="/resources/blogs"
              className="text-[#C9A34A] hover:text-[#B8923A] font-medium"
            >
              ← Back to Blog
            </Link>
          </nav>
          
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <time dateTime={fields.publishedDate}>
                {formatDate(fields.publishedDate)}
              </time>
              {fields.category && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-[#C9A34A] font-medium">{fields.category}</span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {fields.title}
            </h1>
            
            {fields.excerpt && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {fields.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {fields.featuredImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={getContentfulImageUrl(fields.featuredImage, 1200, 400)}
              alt={fields.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Table of Contents */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <TableOfContents headings={headings} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7">
            <article className="bg-white rounded-lg shadow-sm p-8">
              <RichTextRenderer content={fields.content} />
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
              <div className="space-y-4">
                {relatedPosts
                  .filter((relatedPost: ContentfulBlogPost) => relatedPost.sys.id !== post.sys.id)
                  .slice(0, 3)
                  .map((relatedPost: ContentfulBlogPost) => (
                    <div key={relatedPost.sys.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <Link 
                        href={`/resources/blogs/${relatedPost.fields.slug}`}
                        className="block hover:text-[#C9A34A] transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                          {relatedPost.fields.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {formatDate(relatedPost.fields.publishedDate)}
                        </p>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
