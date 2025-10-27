import PersonalTaxService from '@/components/services/PersonalTaxService';
import { generateServiceMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateServiceMetadata('personal-tax');

export default function PersonalTaxPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Personal Tax Services",
    "description": "Expert personal tax services including ITR filing, tax planning, NRI taxation, and notice handling. 100% notice coverage guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "serviceType": "Chartered Accountant Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "description": "Personal tax services with 100% notice coverage guarantee",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Personal Tax Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ITR Filing",
            "description": "Income Tax Return filing for individuals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Planning",
            "description": "Strategic tax planning and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "NRI Taxation",
            "description": "Tax services for Non-Resident Indians"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Notice Handling",
            "description": "Income tax notice handling and resolution"
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
          <PersonalTaxService />
        </main>
      </div>
    </>
  );
}
