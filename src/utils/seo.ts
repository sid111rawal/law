import { Metadata } from 'next';
import { seoConfig } from '../config/seo';

// SEO utility functions
export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage
}: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}): Metadata {
  const fullTitle = title.includes('Lawgical Station') ? title : `${title} | Lawgical Station`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: seoConfig.site.author }],
    creator: seoConfig.site.author,
    publisher: seoConfig.site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.site.locale,
      url: canonical || seoConfig.site.url,
      siteName: seoConfig.site.name,
      title: fullTitle,
      description,
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ] : [
        {
          url: `${seoConfig.site.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : [`${seoConfig.site.url}/og-image.jpg`],
      creator: '@lawgicalstation',
    },
    alternates: {
      canonical: canonical || seoConfig.site.url,
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
    },
  };
}

// Service page metadata generator
export function generateServiceMetadata(serviceKey: string): Metadata {
  const service = seoConfig.services[serviceKey as keyof typeof seoConfig.services];
  if (!service) {
    throw new Error(`Service ${serviceKey} not found in SEO config`);
  }

  return generateMetadata({
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    canonical: `${seoConfig.site.url}/services/${serviceKey}`
  });
}

// Calculator page metadata generator
export function generateCalculatorMetadata(calculatorKey: string): Metadata {
  const calculator = seoConfig.calculators[calculatorKey as keyof typeof seoConfig.calculators];
  if (!calculator) {
    throw new Error(`Calculator ${calculatorKey} not found in SEO config`);
  }

  return generateMetadata({
    title: calculator.title,
    description: calculator.description,
    keywords: calculator.keywords,
    canonical: `${seoConfig.site.url}/resources/calculators/${calculatorKey}`
  });
}

// Blog page metadata generator
export function generateBlogMetadata(blogData: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  category?: string;
}): Metadata {
  return generateMetadata({
    title: blogData.title,
    description: blogData.description,
    keywords: [...seoConfig.blogs.default.keywords, ...(blogData.category ? [blogData.category] : [])],
    canonical: `${seoConfig.site.url}/resources/blogs/${blogData.slug}`
  });
}

// Page metadata generator
export function generatePageMetadata(pageKey: string): Metadata {
  const page = seoConfig.pages[pageKey as keyof typeof seoConfig.pages];
  if (!page) {
    throw new Error(`Page ${pageKey} not found in SEO config`);
  }

  return generateMetadata({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: `${seoConfig.site.url}/${pageKey === 'home' ? '' : pageKey}`,
  });
}

// JSON-LD structured data generator
export function generateJsonLd(structuredData: Record<string, unknown>): string {
  return JSON.stringify(structuredData);
}

// Sitemap generator helper
export function generateSitemapUrls(): string[] {
  const urls = [
    '', // home page
    '/about',
    '/contact',
    '/services',
    '/resources/calculators',
    '/resources/blogs',
  ];

  // Add service pages
  Object.keys(seoConfig.services).forEach(service => {
    urls.push(`/services/${service}`);
  });

  // Add calculator pages
  Object.keys(seoConfig.calculators).forEach(calculator => {
    urls.push(`/resources/calculators/${calculator}`);
  });

  return urls;
}
