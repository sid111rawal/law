import Header from '@/components/Header';
import TaxCalculator from '@/components/TaxCalculator';
import Footer from '@/components/Footer';

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TaxCalculator />
      </main>
      <Footer />
    </div>
  );
}
