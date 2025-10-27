import TDSCalculator from '@/components/TDSCalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('tds-calculator');

export default function TDSCalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TDS Calculator",
    "description": "Free TDS calculator for calculating Tax Deducted at Source on salary, interest, rent, and professional fees.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Salary TDS Calculator",
      "Interest TDS Calculator",
      "Rent TDS Calculator", 
      "Professional Fees TDS",
      "TDS Rate Lookup",
      "TDS Compliance Check"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/tds-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <TDSCalculator />
        </main>
      </div>
    </>
  );
}
