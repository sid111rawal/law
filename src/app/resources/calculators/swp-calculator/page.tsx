import SWPCalculator from '@/components/SWPCalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('swp-calculator');

export default function SWPCalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SWP Calculator",
    "description": "Free SWP calculator for planning Systematic Withdrawal from mutual fund investments. Calculate regular income from investments.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "SWP Income Calculator",
      "Regular Income Planning",
      "Balance Tracking",
      "Withdrawal Planning",
      "Retirement Income Planning",
      "Mutual Fund SWP Analysis"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/swp-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <SWPCalculator />
        </main>
      </div>
    </>
  );
}
