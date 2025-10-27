import BusinessTaxService from '@/components/services/BusinessTaxService';
import { generateServiceMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateServiceMetadata('business-tax');

export default function BusinessTaxPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Business Tax Services",
    "description": "Professional business tax services including corporate tax compliance, tax planning, TDS management, and tax litigation support.",
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "serviceType": "Chartered Accountant Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "description": "Business tax services with 100% notice coverage guarantee",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Tax Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Tax",
            "description": "Corporate tax compliance and planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Planning",
            "description": "Strategic business tax planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TDS Management",
            "description": "Tax Deducted at Source compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Litigation",
            "description": "Business tax dispute resolution"
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
          <BusinessTaxService />
        </main>
      </div>
    </>
  );
}
