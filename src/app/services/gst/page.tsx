import GSTService from '@/components/services/GSTService';

export const metadata = {
  title: 'GST Services & Litigation Support | GST Filing & Compliance | Lawgical Station',
  description: 'Complete GST services including registration, return filing, litigation support, and compliance. Expert CA guidance with 100% notice coverage guarantee.',
  keywords: 'GST services, GST filing, GST compliance, GST litigation, GST registration, GST returns, GST notices',
};

export default function GSTPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <GSTService />
      </main>
    </div>
  );
}
