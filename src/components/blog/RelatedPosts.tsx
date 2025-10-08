import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/imageBuilder';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  category?: {
    title: string;
    color?: string;
  };
}

interface RelatedPostsProps {
  posts: Post[];
  title?: string;
}

export default function RelatedPosts({ posts, title = 'Related Articles' }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-6">
      <h3 className="text-lg font-serif font-bold text-slate mb-4">{title}</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/resources/blogs/${post.slug.current}`}
            className="block group"
          >
            <div className="flex space-x-3">
              {post.mainImage && (
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={urlFor(post.mainImage).width(160).height(160).url()}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate group-hover:text-[#C9A34A] transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                {post.category && (
                  <span className="text-xs text-gray-500">
                    {post.category.title}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
