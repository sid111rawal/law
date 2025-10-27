import Contact from '@/components/Contact';
import { generatePageMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generatePageMetadata('contact');

export default function ContactPage() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Lawgical Station",
    "description": "Contact Lawgical Station for professional CA services. Get free consultation, expert advice, and personalized solutions for your business needs.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lawgical Station",
      "url": "https://lawgicalstation.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "streetAddress": "Your Office Address"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-XXXXXXXXXX",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "email": "info@lawgicalstation.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      ],
      "openingHours": "Mo-Fr 09:00-18:00",
      "sameAs": [
        "https://www.linkedin.com/company/lawgical-station",
        "https://www.facebook.com/lawgicalstation",
        "https://twitter.com/lawgicalstation"
      ]
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
          <Contact />
        </main>
      </div>
    </>
  );
}
