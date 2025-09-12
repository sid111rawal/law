export default function Trust() {
  const comparisonData = [
    {
      feature: "Personal Consultation",
      lawgical: "Real CA, not chatbot",
      others: "Automated responses",
      lawgicalGood: true
    },
    {
      feature: "Notice Coverage",
      lawgical: "100% Guarantee",
      others: "No guarantee",
      lawgicalGood: true
    },
    {
      feature: "Response Time",
      lawgical: "Within 2 hours",
      others: "24-48 hours",
      lawgicalGood: true
    },
    {
      feature: "Pricing Model",
      lawgical: "Transparent, fixed rates",
      others: "Hidden charges",
      lawgicalGood: true
    },
    {
      feature: "Social Impact",
      lawgical: "1% to charity",
      others: "No giving back",
      lawgicalGood: true
    },
    {
      feature: "Support",
      lawgical: "Ongoing relationship",
      others: "Transactional",
      lawgicalGood: true
    },
    {
      feature: "Others..",
      lawgical: "Others..",
      others: "Others..",
      lawgicalGood: true
    }

  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate sm:text-4xl lg:text-5xl">
            Why Choose Lawgical Station?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            See how we stand apart from other CA firms with our commitment to quality and personal service.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-900 to-black px-8 py-6">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <h3 className="text-lg font-serif font-bold text-white">Features</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif font-bold text-white">Lawgical Station</h3>
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-gold bg-opacity-90">
                  <svg className="w-4 h-4 text-white mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-white">Recommended</span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-serif font-bold text-white">Other CA Firms</h3>
              </div>
              </div>
            </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center px-8 py-6 hover:bg-gray-50 transition-colors">
                <div className="font-medium text-slate">
                  {item.feature}
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-green-800">{item.lawgical}</span>
              </div>
            </div>

                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200">
                    <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                    <span className="text-sm font-medium text-red-800">{item.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-soft-white px-8 py-8">
            <div className="text-center">
              <h3 className="text-xl font-serif font-bold text-slate mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join 200+ satisfied clients who chose quality over convenience. Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="border-2 border-slate text-slate px-8 py-3 rounded-lg font-semibold hover:bg-slate hover:text-white transition-all duration-200">
                  View Our Services
                </button>
              </div>
            </div>
                </div>
              </div>
              
        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate mb-2">ICAI Licensed</h4>
              <p className="text-gray-600 text-sm">Certified Professional</p>
            </div>

            <div className="text-center">
              <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate mb-2">10+ Years</h4>
              <p className="text-gray-600 text-sm">Industry Experience</p>
            </div>

            <div className="text-center">
              <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate mb-2">200+ Clients</h4>
              <p className="text-gray-600 text-sm">Satisfied Customers</p>
            </div>

            <div className="text-center">
              <div className="bg-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate mb-2">1% to Charity</h4>
              <p className="text-gray-600 text-sm">Social Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
