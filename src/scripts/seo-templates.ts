// Script to update all service pages with SEO metadata
// This script can be run to update all service pages at once

const servicePages = [
  'business-tax',
  'gst', 
  'company-registration',
  'statutory-audit',
  'bookkeeping',
  'payroll',
  'roc-compliance',
  'labour-law',
  'internal-audit',
  'business-advisory',
  'litigation',
  'compliance'
];

const calculatorPages = [
  'gst-calculator',
  'tds-calculator', 
  'sip-calculator',
  'swp-calculator',
  'emi-calculator',
  'hra-calculator'
];

// Service page template
const servicePageTemplate = (serviceKey: string) => `import ${serviceKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Service from '@/components/services/${serviceKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Service';
import { generateServiceMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateServiceMetadata('${serviceKey}');

export default function ${serviceKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "${serviceKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services",
    "description": "Professional ${serviceKey.replace('-', ' ')} services with expert guidance and 100% notice coverage guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "serviceType": "Chartered Accountant Services",
    "areaServed": "India",
    "offers": {
      "@type": "Offer",
      "description": "${serviceKey.replace('-', ' ')} services with 100% notice coverage guarantee",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
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
          <${serviceKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Service />
        </main>
      </div>
    </>
  );
}`;

// Calculator page template
const calculatorPageTemplate = (calculatorKey: string) => `import ${calculatorKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Calculator from '@/components/${calculatorKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Calculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('${calculatorKey}');

export default function ${calculatorKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "${calculatorKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Calculator",
    "description": "Free ${calculatorKey.replace('-', ' ')} calculator for accurate calculations and financial planning.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/${calculatorKey}"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <${calculatorKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Calculator />
        </main>
      </div>
    </>
  );
}`;

export { servicePageTemplate, calculatorPageTemplate, servicePages, calculatorPages };
