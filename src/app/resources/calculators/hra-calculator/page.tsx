import HRACalculator from '@/components/HRACalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('hra-calculator');

export default function HRACalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "HRA Calculator",
    "description": "Free HRA calculator to calculate House Rent Allowance exemption under Section 10(13A) of Income Tax Act.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "HRA Exemption Calculator",
      "Section 10(13A) Calculation",
      "Rent vs HRA Comparison",
      "Tax Saving Calculation",
      "Metro/Non-Metro Cities",
      "Annual Tax Planning"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/hra-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <HRACalculator />
        </main>
      </div>
    </>
  );
}
