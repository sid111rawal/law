import Link from 'next/link';
import { getBlogPostsByCategory, getAllCategories } from '@/lib/contentful/queries';
import BlogCard from '@/components/blog/BlogCard';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  
  // Return empty array if no categories or if Contentful is not configured
  if (!categories || categories.length === 0) {
    return [];
  }
  
  return categories.map((category: string) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  
  // Convert URL slug back to category name
  const categoryName = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const posts = await getBlogPostsByCategory(categoryName);
  const allCategories = await getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-6">
            <Link 
              href="/resources/blogs"
              className="text-[#C9A34A] hover:text-[#B8923A] font-medium"
            >
              ← Back to Blog
            </Link>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {categoryName}
            </h1>
            <p className="text-xl text-gray-600">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
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
                {allCategories.map((category) => (
                  <Link
                    key={category}
                    href={`/resources/blogs/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block text-sm transition-colors ${
                      category === categoryName 
                        ? 'text-[#C9A34A] font-medium' 
                        : 'text-gray-600 hover:text-[#C9A34A]'
                    }`}
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
                  No posts in this category yet
                </h2>
                <p className="text-gray-600 mb-6">
                  Check back soon for posts in this category!
                </p>
                <Link 
                  href="/resources/blogs"
                  className="inline-flex items-center px-4 py-2 bg-[#C9A34A] text-white rounded-lg hover:bg-[#B8923A] transition-colors"
                >
                  View All Posts
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.sys.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
