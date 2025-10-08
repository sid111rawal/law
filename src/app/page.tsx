import Header from '@/components/Header';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LittleStory from '@/components/LittleStory';
import ClientTestimonials from '@/components/ClientTestimonials';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnnouncementBanner />
      <main>
        <Hero />
        <Services />
        <LittleStory />
        <ClientTestimonials />
        <FAQSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
