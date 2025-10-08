import AnnouncementBanner from '@/components/AnnouncementBanner';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LittleStory from '@/components/LittleStory';
import ClientTestimonials from '@/components/ClientTestimonials';
import FAQSection from '@/components/FAQSection';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      <main>
        <Hero />
        <Services />
        <LittleStory />
        <ClientTestimonials />
        <FAQSection />
      </main>
      <MobileBottomNav />
    </div>
  );
}
