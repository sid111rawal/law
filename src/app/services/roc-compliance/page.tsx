import ROCComplianceService from '@/components/services/ROCComplianceService';
import { generateServiceMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateServiceMetadata('roc-compliance');

export default function ROCCompliancePage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ROC Compliance Services",
    "description": "Expert ROC compliance services including annual filing, board meetings, and regulatory compliance for companies.",
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "serviceType": "Chartered Accountant Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "description": "ROC compliance services with 100% on-time filing record",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ROC Compliance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Annual Filing",
            "description": "Annual return filing and compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Board Meetings",
            "description": "Board meeting compliance and documentation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MCA Compliance",
            "description": "Ministry of Corporate Affairs compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Governance",
            "description": "Corporate governance and secretarial services"
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
          <ROCComplianceService />
        </main>
      </div>
    </>
  );
}
