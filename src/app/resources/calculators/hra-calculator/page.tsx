import Header from '@/components/Header';
import HRACalculator from '@/components/HRACalculator';
import Footer from '@/components/Footer';

export default function HRACalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HRACalculator />
      </main>
      <Footer />
    </div>
  );
}
