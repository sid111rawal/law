import BusinessAdvisoryService from '@/components/services/BusinessAdvisoryService';
import { generateServiceMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateServiceMetadata('business-advisory');

export default function BusinessAdvisoryPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Business Advisory Services",
    "description": "Expert business advisory services including strategic planning, financial consulting, and business growth advisory.",
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "serviceType": "Chartered Accountant Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "description": "Business advisory services with strategic insights",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Advisory Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Planning",
            "description": "Business strategy and planning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Financial Consulting",
            "description": "Financial planning and consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Advisory",
            "description": "Business growth and expansion advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFO Services",
            "description": "Chief Financial Officer advisory services"
          }
        }
      ]
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
          <BusinessAdvisoryService />
        </main>
      </div>
    </>
  );
}
