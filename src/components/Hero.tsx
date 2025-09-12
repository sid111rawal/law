import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-serif font-bold text-slate sm:text-5xl lg:text-6xl leading-tight">
                Lawgical Station —
                <span className="block text-gold">Chartered Accountants,</span>
                <span className="block">Agra</span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Personal CA touch, in-person consultation for large projects. 100% notice-free guarantee. 
                1% to charity.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact"
                  className="bg-gold text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book a Free Consultation
                </Link>
                <Link 
                  href="#services"
                  className="border-2 border-slate text-slate px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate hover:text-white transition-all duration-200"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="bg-gold p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-slate">CA Licensed</p>
                  <p className="text-xs text-gray-500">ICAI</p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="bg-gold p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-slate">10+ Years</p>
                  <p className="text-xs text-gray-500">of Experience</p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="bg-gold p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-slate">200+ Clients</p>
                  <p className="text-xs text-gray-500">Served</p>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="bg-gold p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-slate">1% to Charity</p>
                  <p className="text-xs text-gray-500">Giving Back</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-serif text-xl font-semibold text-slate mb-4">
                    100% Notice Coverage Guarantee
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If a tax notice is issued due to our error, we personally cover the fee payable. 
                    That's our guarantee — subject to terms and an independent review.
                  </p>
                  <div className="mt-4 flex items-center text-gold">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
