import { MetadataRoute } from 'next'
import { seoConfig } from '@/config/seo'
import { getAllBlogPosts } from '@/lib/contentful/queries'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = seoConfig.site.url
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages = Object.keys(seoConfig.services).map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Calculator pages
  const calculatorPages = Object.keys(seoConfig.calculators).map(calculator => ({
    url: `${baseUrl}/resources/calculators/${calculator}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPosts = await getAllBlogPosts();
  const blogPostPages = blogPosts
    .filter(post => post.fields?.slug)
    .map(post => ({
      url: `${baseUrl}/resources/blogs/${post.fields.slug}`,
      lastModified: new Date(post.fields.publishedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticPages, ...servicePages, ...calculatorPages, ...blogPostPages]
}








