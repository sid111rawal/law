import Link from 'next/link';
import siteConfig from '@/config/site';

export default function QuickCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#C9A34A] to-yellow-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join 2000+ businesses who trust Lawgical Station for their tax and legal needs. 
            Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#C9A34A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Book Free Consultation
            </Link>
            <Link
              href={`tel:${siteConfig.contact.phone}`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#C9A34A] transition-all duration-300"
            >
              Call Now: {siteConfig.contact.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
