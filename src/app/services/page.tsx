import ServicesOverview from '@/components/services/ServicesOverview';
import { generatePageMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generatePageMetadata('services');

export default function ServicesPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "CA Services",
    "description": "Comprehensive Chartered Accountant services including tax filing, GST, company registration, audit, bookkeeping, payroll, and compliance services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Personal Tax Services",
          "description": "Expert ITR filing, tax planning, NRI taxation, and notice handling",
          "url": "https://lawgicalstation.com/services/personal-tax"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Business Tax Services",
          "description": "Professional business tax services including corporate tax compliance, tax planning, TDS management, and tax litigation support",
          "url": "https://lawgicalstation.com/services/business-tax"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "GST Services",
          "description": "Complete GST services including registration, return filing, litigation support, and compliance",
          "url": "https://lawgicalstation.com/services/gst"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Company Registration",
          "description": "Professional company registration services including private limited, LLP, and startup registration with compliance support",
          "url": "https://lawgicalstation.com/services/company-registration"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Service",
          "name": "Statutory Audit Services",
          "description": "Expert statutory audit services with professional assurance, compliance verification, and detailed audit reports",
          "url": "https://lawgicalstation.com/services/statutory-audit"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Service",
          "name": "Bookkeeping & Accounting",
          "description": "Professional bookkeeping and accounting services for businesses with accurate financial record keeping and reporting",
          "url": "https://lawgicalstation.com/services/bookkeeping"
        }
      }
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <ServicesOverview />
        </main>
      </div>
    </>
  );
}
