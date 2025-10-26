import PayrollService from '@/components/services/PayrollService';

export const metadata = {
  title: 'Payroll Services & HR Compliance | Professional Payroll Management | Lawgical Station',
  description: 'Professional payroll services including salary processing, statutory compliance, PF, ESIC, and TDS management. Expert CA guidance with 100% accuracy guarantee.',
  keywords: 'payroll services, HR compliance, salary processing, PF management, ESIC compliance, TDS filing, employee management',
};

export default function PayrollPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <PayrollService />
      </main>
    </div>
  );
}
