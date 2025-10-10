'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lawgical Station */}
          <div>
            <div className="text-2xl font-serif font-bold text-white mb-2">
              Lawgical Station
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Where trust meets expertise.
            </p>
            <p className="text-gray-100 mb-6 text-sm leading-relaxed">
              Helping Indian entrepreneurs grow with clarity, compliance, and confidence.
            </p>
            
            {/* Key Achievements */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-100">
                <svg className="w-4 h-4 text-[#C9A34A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                250+ Businesses Guided
              </div>
              <div className="flex items-center text-sm text-gray-100">
                <svg className="w-4 h-4 text-[#C9A34A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                200+ Complex Cases Resolved
              </div>
              <div className="flex items-center text-sm text-gray-100">
                <svg className="w-4 h-4 text-[#C9A34A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ₹2.5 Cr+ Taxes Saved Every Year
              </div>
            </div>

            {/* Tags/Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#C9A34A] rounded-full flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray-300">SSL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#C9A34A] rounded-full flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray-300">Registered Firm</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-[#C9A34A] rounded-full flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray-300">100% Notice Coverage</span>
              </div>
            </div>
          </div>

          {/* Our Expertise */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-4">Our Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  Tax & Compliance Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  Business Structuring & Incorporation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  Litigation & Dispute Support
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  Outsourced CFO & Accounting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  End-to-End GST & TDS Management
                </a>
              </li>
            </ul>
            <blockquote className="mt-6 text-sm italic text-gray-300 font-serif">
              &quot;Because every compliant business starts with the right knowledge.&quot;
            </blockquote>
          </div>

          {/* Knowledge Center */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-4">Knowledge Center</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/blogs" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/resources/calculators" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  Free Business Audit Tools
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="text-gray-100">
                C-23, S-4/14, Second Floor,<br />
                Sanjay Place, Agra - 282002
              </div>
              <div className="text-gray-100">
                <a href="mailto:info@lawgicalstation.com" className="hover:text-[#C9A34A] transition-colors">
                  info@lawgicalstation.com
                </a>
              </div>
              <div className="text-gray-100">
                <a href="tel:+919045356687" className="hover:text-[#C9A34A] transition-colors">
                  +91-90453 56687
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-100 text-sm mb-4 md:mb-0">
              © 2025 Lawgical Station. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-100 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-100 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="text-gray-100 hover:text-gold transition-colors">
                Cookie Policy
              </Link>
              <button 
                onClick={() => {
                  localStorage.removeItem('cookieConsent');
                  window.location.reload();
                }}
                className="text-gray-100 hover:text-gold transition-colors"
              >
                Cookie Settings
              </button>
              <div className="flex items-center text-gold">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>1% to Charity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
