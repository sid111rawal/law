import AnnouncementBanner from '@/components/AnnouncementBanner';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LittleStory from '@/components/LittleStory';
import ClientTestimonialsNew from '@/components/ClientTestimonialsNew';
import FAQSection from '@/components/FAQSection';
import MobileBottomNav from '@/components/MobileBottomNav';
import { generatePageMetadata, generateJsonLd } from '@/utils/seo';

export const metadata = generatePageMetadata('home');

export default function Home() {
  const structuredData = generateJsonLd({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lawgical Station",
    "url": "https://lawgicalstation.com",
    "description": "Professional Chartered Accountants providing comprehensive CA services with 100% notice coverage guarantee",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/lawgical-station",
      "https://www.facebook.com/lawgicalstation",
      "https://twitter.com/lawgicalstation"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Tax Services",
            "description": "ITR filing, tax planning, NRI taxation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Tax Services",
            "description": "Corporate tax, TDS management, tax litigation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GST Services",
            "description": "GST registration, filing, compliance"
          }
        }
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
        <AnnouncementBanner />
        <main>
          <Hero />
          <Services />
          <LittleStory />
          <ClientTestimonialsNew />
          <FAQSection />
        </main>
        <MobileBottomNav />
      </div>
    </>
  );
}
