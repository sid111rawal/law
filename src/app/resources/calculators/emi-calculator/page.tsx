import Header from '@/components/Header';
import EMICalculator from '@/components/EMICalculator';
import Footer from '@/components/Footer';

export default function EMICalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <EMICalculator />
      </main>
      <Footer />
    </div>
  );
}
