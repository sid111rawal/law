import Header from '@/components/Header';
import SIPCalculator from '@/components/SIPCalculator';
import Footer from '@/components/Footer';

export default function SIPCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SIPCalculator />
      </main>
      <Footer />
    </div>
  );
}
