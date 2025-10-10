'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Lawgical Station */}
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="text-3xl font-serif font-bold text-white mb-4">
                Lawgical Station
              </div>
              <p className="text-sm text-gray-300 mb-6">
                Where trust meets expertise.
              </p>
              <p className="text-gray-100 mb-8 text-sm leading-relaxed">
                Helping Indian entrepreneurs grow with clarity, compliance, and confidence.
              </p>
              
              {/* Key Achievements */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-sm text-gray-100">
                  <svg className="w-4 h-4 text-[#C9A34A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  250+ Businesses Guided
                </div>
                <div className="flex items-center text-sm text-gray-100">
                  <svg className="w-4 h-4 text-[#C9A34A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  200+ Complex Cases Resolved
                </div>
                <div className="flex items-center text-sm text-gray-100">
                  <svg className="w-4 h-4 text-[#C9A34A] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ₹2.5 Cr+ Taxes Saved Every Year
                </div>
              </div>
            </div>

            {/* SSL Security Badge */}
            <div className="mt-auto">
              <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C9A34A] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium text-sm">SSL Secured</h5>
                  <p className="text-gray-400 text-xs">256-bit encryption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Expertise */}
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-white mb-6">Our Expertise</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                    Tax & Compliance
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                    Business Structuring
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                    Litigation Support
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                    CFO & Accounting
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-100 hover:text-[#C9A34A] transition-colors">
                    GST & TDS Management
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Registered Firm Badge */}
            <div className="mt-auto">
              <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C9A34A] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium text-sm">Registered Firm</h5>
                  <p className="text-gray-400 text-xs">Government recognized</p>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Center */}
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-semibold text-white mb-6">Knowledge Center</h3>
              <ul className="space-y-3 text-sm">
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
            
            {/* Notice Coverage Badge */}
            <div className="mt-auto">
              <div className="flex items-center space-x-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C9A34A] to-[#B8941F] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium text-sm">100% Notice Coverage</h5>
                  <p className="text-gray-400 text-xs">Complete protection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="relative">
            <h3 className="text-xl font-serif font-semibold text-white mb-6 flex items-center">
              Contact Us
            </h3>
            
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-[#C9A34A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A34A]/20">
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#C9A34A] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#C9A34A] transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      C-23, S-4/14, Second Floor,<br />
                      Sanjay Place, Agra - 282002
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#C9A34A] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#C9A34A] transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <a 
                      href="mailto:info@lawgicalstation.com" 
                      className="text-[#C9A34A] hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      info@lawgicalstation.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#C9A34A] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#C9A34A] transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <a 
                      href="tel:+919045356687" 
                      className="text-[#C9A34A] hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      +91-90453 56687
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <a 
                  href="mailto:info@lawgicalstation.com" 
                  className="block w-full bg-gradient-to-r from-[#C9A34A] to-[#B8941F] hover:from-white hover:to-gray-100 hover:text-[#C9A34A] text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-0.5 border border-transparent hover:border-[#C9A34A]"
                >
                  Get Free Consultation
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
