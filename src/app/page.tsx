import Header from '@/components/Header';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Trust from '@/components/Trust';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnnouncementBanner />
      <main>
        <Hero />
        <Services />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}
