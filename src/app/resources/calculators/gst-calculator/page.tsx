import Header from '@/components/Header';
import GSTCalculator from '@/components/GSTCalculator';
import Footer from '@/components/Footer';

export default function GSTCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GSTCalculator />
      </main>
      <Footer />
    </div>
  );
}
