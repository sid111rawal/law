import Header from '@/components/Header';
import TDSCalculator from '@/components/TDSCalculator';
import Footer from '@/components/Footer';

export default function TDSCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TDSCalculator />
      </main>
      <Footer />
    </div>
  );
}
