import EMICalculator from '@/components/EMICalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('emi-calculator');

export default function EMICalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "EMI Calculator",
    "description": "Free EMI calculator for calculating Equated Monthly Installments for home loans, personal loans, and other loans.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Home Loan EMI Calculator",
      "Personal Loan EMI Calculator",
      "Car Loan EMI Calculator",
      "Total Interest Calculation",
      "Loan Affordability Check",
      "EMI Comparison Tool"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/emi-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <EMICalculator />
        </main>
      </div>
    </>
  );
}
