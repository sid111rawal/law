import ROCComplianceService from '@/components/services/ROCComplianceService';

export const metadata = {
  title: 'ROC Compliance & Corporate Governance | Company Filing Services | Lawgical Station',
  description: 'Professional ROC compliance services to ensure your company stays legally active and protected. Expert CS guidance with 100% on-time filing record.',
  keywords: 'ROC compliance, company filing, corporate governance, MCA compliance, annual filing, company secretarial',
};

export default function ROCCompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <ROCComplianceService />
      </main>
    </div>
  );
}
