import Image from 'next/image';
import Link from 'next/link';
import { getContentfulImageUrl, formatDate } from '@/lib/contentful/utils';
import { ContentfulBlogPost } from '@/lib/contentful/types';

interface BlogCardProps {
  post: ContentfulBlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const { fields } = post;
  const slug = fields.slug;
  const title = fields.title;
  const excerpt = fields.excerpt || '';
  const publishedDate = fields.publishedDate;
  const category = fields.category;
  const featuredImage = fields.featuredImage;

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      {featuredImage && (
        <div className="relative overflow-hidden bg-gray-100">
          <Image
            src={getContentfulImageUrl(featuredImage, 600, featured ? 256 : 192)}
            alt={title}
            width={600}
            height={featured ? 256 : 192}
            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          {category && (
            <div className="absolute top-4 left-4">
              <span className="bg-[#C9A34A] text-white px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={publishedDate}>
            {formatDate(publishedDate)}
          </time>
          {category && (
            <>
              <span className="mx-2">•</span>
              <span className="text-[#C9A34A] font-medium">{category}</span>
            </>
          )}
        </div>
        
        <h2 className={`font-bold text-gray-900 mb-3 hover:text-[#C9A34A] transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          <Link href={`/resources/blogs/${slug}`}>
            {title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/resources/blogs/${slug}`}
          className="inline-flex items-center text-[#C9A34A] font-medium hover:text-[#B8923A] transition-colors"
        >
          Read More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
