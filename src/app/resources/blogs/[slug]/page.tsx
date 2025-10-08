import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client } from '@/lib/sanity/client';
import { postBySlugQuery, relatedPostsQuery, popularPostsQuery, allCategoriesQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/imageBuilder';
import { portableTextComponents } from '@/components/blog/PortableTextComponents';
import TableOfContents from '@/components/blog/TableOfContents';
import AuthorCard from '@/components/blog/AuthorCard';
import BrowseTopics from '@/components/blog/BrowseTopics';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const revalidate = 60;

async function getPost(slug: string) {
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getRelatedPosts(categoryId: string, currentSlug: string) {
  try {
    const posts = await client.fetch(relatedPostsQuery, { categoryId, currentSlug });
    return posts || [];
  } catch (error) {
    return [];
  }
}

async function getPopularPosts() {
  try {
    const posts = await client.fetch(popularPostsQuery);
    return posts || [];
  } catch (error) {
    return [];
  }
}

async function getCategories() {
  try {
    const categories = await client.fetch(allCategoriesQuery);
    return categories || [];
  } catch (error) {
    return [];
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold text-slate mb-4">
              Blog Post Not Found
            </h1>
            <Link href="/resources/blogs" className="text-[#C9A34A] hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = post.category?._ref ? await getRelatedPosts(post.category._ref, post.slug.current) : [];
  const popularPosts = await getPopularPosts();
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C9A34A]">Home</Link>
              <span>&gt;</span>
              <Link href="/resources/blogs" className="hover:text-[#C9A34A]">Blog</Link>
              <span>&gt;</span>
              {post.category && (
                <>
                  <Link href={`/resources/blogs/category/${post.category.slug.current}`} className="hover:text-[#C9A34A]">
                    {post.category.title}
                  </Link>
                  <span>&gt;</span>
                </>
              )}
              <span className="text-slate font-medium truncate">{post.title}</span>
            </div>
          </div>
        </div>

        {/* Blog Content - 3 Column Layout */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar - Table of Contents */}
              <aside className="lg:col-span-3">
                <TableOfContents />
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-6">
                {/* Article Header */}
                <header className="mb-8">
                  {/* Category Badge */}
                  {post.category && (
                    <Link
                      href={`/resources/blogs/category/${post.category.slug.current}`}
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#C9A34A]/10 text-[#C9A34A] hover:bg-[#C9A34A] hover:text-white transition-colors mb-4"
                    >
                      {post.category.title}
                    </Link>
                  )}

                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Author Card */}
                  {post.author && (
                    <AuthorCard
                      author={post.author}
                      publishedAt={post.publishedAt}
                      updatedAt={post._updatedAt}
                      readingTime={post.estimatedReadingTime}
                    />
                  )}
                </header>

                {/* Featured Image */}
                {post.mainImage && (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={urlFor(post.mainImage).width(1200).height(630).url()}
                      alt={post.mainImage.alt || post.title}
                      width={1200}
                      height={630}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="blog-content prose prose-lg max-w-none">
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600 font-medium">Share:</span>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + `${process.env.NEXT_PUBLIC_SITE_URL}/resources/blogs/${post.slug.current}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/resources/blogs/${post.slug.current}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/resources/blogs/${post.slug.current}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>

              {/* Right Sidebar */}
              <aside className="lg:col-span-3 space-y-6">
                {/* Browse Topics */}
                {categories.length > 0 && (
                  <BrowseTopics categories={categories} />
                )}

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <RelatedPosts posts={relatedPosts} title="Related Articles" />
                )}

                {/* Popular Posts */}
                {popularPosts.length > 0 && (
                  <RelatedPosts posts={popularPosts} title="Popular Articles" />
                )}

                {/* CTA Box */}
                <div className="bg-gradient-to-br from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-6 border border-[#C9A34A]/20">
                  <h3 className="font-serif font-bold text-slate mb-3">Need Expert Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get personalized tax and legal advice from our qualified professionals.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#C9A34A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**"))]{slug}`);
  
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}
