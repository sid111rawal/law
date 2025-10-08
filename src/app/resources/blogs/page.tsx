import Link from 'next/link';
import { getAllBlogPosts, getAllCategories } from '@/lib/contentful/queries';
import BlogCard from '@/components/blog/BlogCard';

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();
  const categories = await getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tax & Business Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, latest updates, and practical tips for your business and tax needs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                <Link 
                  href="/resources/blogs"
                  className="block text-sm text-gray-600 hover:text-[#C9A34A] transition-colors"
                >
                  All Posts
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/resources/blogs/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-gray-600 hover:text-[#C9A34A] transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  No blog posts yet
                </h2>
                <p className="text-gray-600">
                  Check back soon for expert insights and updates!
                </p>
              </div>
            ) : (
              <>
                {/* Featured Post */}
                {posts.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
                    <BlogCard post={posts[0]} featured={true} />
                  </div>
                )}

                {/* All Posts Grid */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {posts.slice(1).map((post) => (
                      <BlogCard key={post.sys.id} post={post} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
