import Header from '@/components/Header';
import Trust from '@/components/Trust';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Trust />
      </main>
      <Footer />
    </div>
  );
}
