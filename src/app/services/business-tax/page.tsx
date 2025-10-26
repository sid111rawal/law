import BusinessTaxService from '@/components/services/BusinessTaxService';

export const metadata = {
  title: 'Business Tax & Corporate Advisory | Corporate Tax Services | Lawgical Station',
  description: 'Professional business tax services including corporate tax compliance, tax planning, TDS management, and tax litigation. Expert CA guidance for business growth.',
  keywords: 'business tax, corporate tax, tax planning, TDS compliance, tax litigation, corporate advisory, tax strategy',
};

export default function BusinessTaxPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <BusinessTaxService />
      </main>
    </div>
  );
}
