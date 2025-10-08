import Header from '@/components/Header';
import SWPCalculator from '@/components/SWPCalculator';
import Footer from '@/components/Footer';

export default function SWPCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SWPCalculator />
      </main>
      <Footer />
    </div>
  );
}
