import GSTCalculator from '@/components/GSTCalculator';
import { generateCalculatorMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generateCalculatorMetadata('gst-calculator');

export default function GSTCalculatorPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GST Calculator",
    "description": "Free GST calculator for calculating CGST, SGST, IGST on goods and services. Calculate GST inclusive and exclusive prices.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "CGST Calculator",
      "SGST Calculator", 
      "IGST Calculator",
      "GST Inclusive/Exclusive Calculation",
      "Multiple Tax Rate Support",
      "Intra & Inter-state GST"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com"
    },
    "url": "https://lawgicalstation.com/resources/calculators/gst-calculator"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <div className="min-h-screen bg-white">
        <main>
          <GSTCalculator />
        </main>
      </div>
    </>
  );
}
