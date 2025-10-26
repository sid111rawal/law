import InternalAuditService from '@/components/services/InternalAuditService';

export const metadata = {
  title: 'Internal Audit & Risk Advisory | Business Process Audit | Lawgical Station',
  description: 'Professional internal audit services to strengthen governance, uncover inefficiencies, and create systems that sustain growth. Expert CA guidance with risk-based approach.',
  keywords: 'internal audit, risk advisory, business process audit, control testing, governance, compliance audit',
};

export default function InternalAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <InternalAuditService />
      </main>
    </div>
  );
}
