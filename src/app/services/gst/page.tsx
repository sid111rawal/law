import GSTService from '@/components/services/GSTService';
import { generateServiceMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateServiceMetadata('gst');

export default function GSTPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GST Services",
    "description": "Complete GST services including registration, return filing, litigation support, and compliance management for businesses.",
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "serviceType": "Chartered Accountant Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "description": "GST services with 100% notice coverage guarantee",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GST Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Registration",
            "description": "New GST registration for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Return Filing",
            "description": "Monthly and annual GST return filing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Litigation",
            "description": "GST dispute resolution and litigation support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Compliance",
            "description": "Ongoing GST compliance and advisory"
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
          <GSTService />
        </main>
      </div>
    </>
  );
}
