import TaxCalculator from '@/components/TaxCalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('tax-calculator');

export default function TaxCalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Income Tax Calculator 2024-25",
    "description": "Free income tax calculator for FY 2024-25. Compare old vs new tax regime, calculate tax liability, and plan your taxes effectively.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Old vs New Tax Regime Comparison",
      "FY 2024-25 Tax Slabs",
      "Age-based Tax Calculations",
      "Surcharge and Cess Calculation",
      "Tax Planning Recommendations"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/tax-calculator",
    "screenshot": "https://lawgicalstation.com/calculators/tax-calculator-screenshot.jpg"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <TaxCalculator />
        </main>
      </div>
    </>
  );
}
