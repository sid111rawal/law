import AdvanceTaxCalculator from '@/components/AdvanceTaxCalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('advance-tax-calculator');

export default function AdvanceTaxCalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Advance Tax Calculator 2025-26",
    "description": "Free advance tax calculator for FY 2025-26. Calculate advance tax liability, payment schedule, instalments, and interest estimates based on old and new tax regimes.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Advance Tax Calculation",
      "Old vs New Tax Regime",
      "Payment Schedule",
      "Installment Calculator",
      "TDS Adjustment",
      "Interest Calculation",
      "FY 2025-26 Tax Slabs",
      "Standard Deduction",
      "Presumptive Scheme",
      "Interest Estimation"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/advance-tax-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <AdvanceTaxCalculator />
        </main>
      </div>
    </>
  );
}


