import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative">
              {/* Large 404 Text */}
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-serif font-bold text-gold opacity-20 select-none">
                404
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gold rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-slate rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-8 left-16 w-8 h-8 bg-gold rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-12 right-8 w-10 h-10 bg-slate rounded-full opacity-20 animate-bounce" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have vanished into the digital void. 
              Don&apos;t worry, our CA experts are here to help you find what you need.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/"
              className="group relative bg-gold text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span className="relative z-10">Back to Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact"
              className="group border-2 border-slate text-slate px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-slate transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-slate mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href="/contact" 
                className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gold hover:text-white"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold group-hover:text-white mr-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-slate group-hover:text-white transition-colors">Contact Us</div>
                    <div className="text-sm text-gray-600 group-hover:text-white transition-colors">Get in touch</div>
                  </div>
                </div>
              </Link>

              <Link 
                href="/#services" 
                className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gold hover:text-white"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold group-hover:text-white mr-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-slate group-hover:text-white transition-colors">Our Services</div>
                    <div className="text-sm text-gray-600 group-hover:text-white transition-colors">What we offer</div>
                  </div>
                </div>
              </Link>

              <Link 
                href="/itr-filing" 
                className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gold hover:text-white"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gold group-hover:text-white mr-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <div className="font-semibold text-slate group-hover:text-white transition-colors">ITR Filing</div>
                    <div className="text-sm text-gray-600 group-hover:text-white transition-colors">Tax filing services</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-gold p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate mb-1 sm:mb-2 text-sm sm:text-base">ICAI Licensed</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Certified Professional</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate mb-1 sm:mb-2 text-sm sm:text-base">10+ Years</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Industry Experience</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gold p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate mb-1 sm:mb-2 text-sm sm:text-base">200+ Clients</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Satisfied Customers</p>
              </div>

              <div className="text-center">
                <div className="bg-gold p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate mb-1 sm:mb-2 text-sm sm:text-base">1% to Charity</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Social Impact</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
