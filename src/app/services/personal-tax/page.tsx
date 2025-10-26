import PersonalTaxService from '@/components/services/PersonalTaxService';

export const metadata = {
  title: 'Personal Tax & Individual Advisory | Lawgical Station',
  description: 'Professional personal tax services with 100% notice coverage guarantee. Expert CA guidance for ITR filing, tax planning, and compliance.',
  keywords: 'personal tax, ITR filing, tax planning, income tax, NRI taxation, tax advisory',
};

export default function PersonalTaxPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PersonalTaxService />
      </main>
    </div>
  );
}
