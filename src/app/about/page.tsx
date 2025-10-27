import AboutUsContent from '@/components/AboutUsContent';
import { generatePageMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generatePageMetadata('about');

export default function AboutPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Lawgical Station",
    "description": "Learn about Lawgical Station's commitment to providing professional CA services with personal touch, 100% notice coverage guarantee, and social impact.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com",
      "description": "Professional Chartered Accountants providing comprehensive CA services with 100% notice coverage guarantee",
      "foundingDate": "2014",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.linkedin.com/company/lawgical-station",
        "https://www.facebook.com/lawgicalstation",
        "https://twitter.com/lawgicalstation"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "CA Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Tax Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Tax Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GST Services"
            }
          }
        ]
      }
    }
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <AboutUsContent />
        </main>
      </div>
    </>
  );
}
