import CompanyRegistrationService from '@/components/services/CompanyRegistrationService';

export const metadata = {
  title: 'Company Registration & Business Formation | Startup Registration | Lawgical Station',
  description: 'Professional company registration services including Pvt Ltd, LLP, OPC formation. Expert CA guidance with structure consultation and post-incorporation support.',
  keywords: 'company registration, business formation, startup registration, private limited company, LLP registration, OPC registration',
};

export default function CompanyRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <CompanyRegistrationService />
      </main>
    </div>
  );
}
