import StatutoryAuditService from '@/components/services/StatutoryAuditService';

export const metadata = {
  title: 'Statutory Audit & Assurance Services | Professional Audit Services | Lawgical Station',
  description: 'Professional statutory audit services with integrity and insight. Expert CA guidance for companies, LLPs, and startups with 100% compliance guarantee.',
  keywords: 'statutory audit, audit services, company audit, LLP audit, audit compliance, audit assurance, audit reporting',
};

export default function StatutoryAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <StatutoryAuditService />
      </main>
    </div>
  );
}
