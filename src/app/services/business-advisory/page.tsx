import BusinessAdvisoryService from '@/components/services/BusinessAdvisoryService';

export const metadata = {
  title: 'Business Advisory & Strategic Consulting | Business Strategy | Lawgical Station',
  description: 'Professional business advisory services including strategic consulting, financial planning, and growth strategy. Expert CA guidance for startups and established businesses.',
  keywords: 'business advisory, strategic consulting, business strategy, financial planning, startup advisory, CFO services',
};

export default function BusinessAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <BusinessAdvisoryService />
      </main>
    </div>
  );
}
