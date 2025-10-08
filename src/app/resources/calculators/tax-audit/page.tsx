import Header from '@/components/Header';
import TaxAuditChecker from '@/components/TaxAuditChecker';
import Footer from '@/components/Footer';

export default function TaxAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TaxAuditChecker />
      </main>
      <Footer />
    </div>
  );
}
