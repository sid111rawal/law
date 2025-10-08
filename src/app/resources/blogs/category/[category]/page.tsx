import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity/client';
import { postsByCategoryQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/imageBuilder';
import { Post } from '@/types/sanity';

export const revalidate = 60;

async function getPostsByCategory(category: string) {
  try {
    const posts = await client.fetch(postsByCategoryQuery, { category });
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  const categoryTitle = posts[0]?.category?.title || category.replace('-', ' ');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Category Header */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/resources/blogs"
              className="inline-flex items-center text-slate hover:text-[#C9A34A] transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Blogs
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate mb-4 capitalize">
              {categoryTitle}
            </h1>
            <p className="text-lg text-gray-600">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600">No posts found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: Post) => (
                  <Link
                    key={post._id}
                    href={`/resources/blogs/${post.slug.current}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {post.mainImage && (
                      <div className="relative h-48 bg-gray-200">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="p-6">
                      <h2 className="text-xl font-bold text-slate mb-3 line-clamp-2 hover:text-[#C9A34A] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(post.publishedAt)}</span>
                        {post.estimatedReadingTime && (
                          <span>{post.estimatedReadingTime} min read</span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
