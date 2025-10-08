import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity/client';
import { allPostsQuery, allCategoriesQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/imageBuilder';
import { Post, Category } from '@/types/sanity';

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
  try {
    const posts = await client.fetch(allPostsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const categories = await client.fetch(allCategoriesQuery);
    return categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function BlogsPage() {
  const posts = await getPosts();
  const categories = await getCategories();

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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate mb-4">
                Income Tax & Legal Insights
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest tax laws, compliance tips, and financial planning strategies from our expert chartered accountants.
              </p>
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Link
                  href="/resources/blogs"
                  className="px-4 py-2 rounded-full bg-[#C9A34A] text-white font-medium hover:bg-yellow-500 transition-colors"
                >
                  All Posts
                </Link>
                {categories.map((category: Category) => (
                  <Link
                    key={category._id}
                    href={`/resources/blogs/category/${category.slug.current}`}
                    className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 font-medium hover:border-[#C9A34A] hover:text-[#C9A34A] transition-colors"
                  >
                    {category.title} ({category.postCount})
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">📝</div>
                <h2 className="text-2xl font-serif font-bold text-slate mb-4">
                  No Blog Posts Yet
                </h2>
                <p className="text-gray-600 mb-8">
                  Blog posts will appear here once they&apos;re published in Sanity Studio.
                </p>
                <Link
                  href="/studio"
                  className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-block"
                >
                  Go to Sanity Studio
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: Post) => (
                  <Link
                    key={post._id}
                    href={`/resources/blogs/${post.slug.current}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Featured Image */}
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

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      {post.category && (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#C9A34A]/10 text-[#C9A34A] mb-3">
                          {post.category.title}
                        </span>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-bold text-slate mb-3 line-clamp-2 hover:text-[#C9A34A] transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
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
