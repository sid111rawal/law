import BookkeepingService from '@/components/services/BookkeepingService';

export const metadata = {
  title: 'Bookkeeping & Accounting Services | Professional Accounting | Lawgical Station',
  description: 'Professional bookkeeping and accounting services for accurate financial records. Expert CA guidance with monthly MIS, financial reporting, and CFO-lite advisory.',
  keywords: 'bookkeeping services, accounting services, financial reporting, MIS reports, CFO advisory, business accounting',
};

export default function BookkeepingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <BookkeepingService />
      </main>
    </div>
  );
}
