import SIPCalculator from '@/components/SIPCalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('sip-calculator');

export default function SIPCalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SIP Calculator",
    "description": "Free SIP calculator to calculate returns on Systematic Investment Plans in mutual funds. Plan your investments effectively.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "SIP Returns Calculator",
      "Future Value Calculation",
      "Total Investment Tracking",
      "Wealth Creation Planning",
      "Investment Goal Planning",
      "Mutual Fund SIP Analysis"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/sip-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <SIPCalculator />
        </main>
      </div>
    </>
  );
}
