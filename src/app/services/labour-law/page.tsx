import LabourLawService from '@/components/services/LabourLawService';

export const metadata = {
  title: 'Labour Law Registration & Compliance | HR Compliance Services | Lawgical Station',
  description: 'Professional labour law compliance services including EPF, ESIC, Shop & Establishment registration. Expert guidance for startups, factories, and service firms.',
  keywords: 'labour law compliance, EPF registration, ESIC registration, shop establishment, professional tax, HR compliance',
};

export default function LabourLawPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <LabourLawService />
      </main>
    </div>
  );
}
