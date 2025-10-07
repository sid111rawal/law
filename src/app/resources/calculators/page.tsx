import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CalculatorsPage() {
  const calculators = [
    {
      id: 'tax-calculator',
      title: 'Income Tax Calculator',
      description: 'Calculate your tax liability and compare old vs new regime for FY 2025-26',
      icon: '🧮',
      href: '/resources/calculators/tax-calculator',
      features: ['Old vs New Regime', 'FY 2025-26 Slabs', 'Age-based Calculations', 'Surcharge & Cess'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'gst-calculator',
      title: 'GST Calculator',
      description: 'Calculate GST on your goods and services with different tax rates',
      icon: '📊',
      href: '#',
      features: ['CGST, SGST, IGST', 'Multiple Tax Rates', 'Reverse Charge', 'Composition Scheme'],
      color: 'from-gray-600 to-gray-700',
      comingSoon: true
    },
    {
      id: 'tds-calculator',
      title: 'TDS Calculator',
      description: 'Calculate Tax Deducted at Source for various income types',
      icon: '💰',
      href: '#',
      features: ['Salary TDS', 'Interest TDS', 'Rent TDS', 'Professional Fees'],
      color: 'from-slate-500 to-slate-600',
      comingSoon: true
    },
    {
      id: 'salary-calculator',
      title: 'Salary Calculator',
      description: 'Calculate take-home salary with all deductions and allowances',
      icon: '💼',
      href: '#',
      features: ['Gross to Net', 'All Deductions', 'Allowances', 'PF & ESI'],
      color: 'from-gray-500 to-gray-600',
      comingSoon: true
    },
    {
      id: 'hra-calculator',
      title: 'HRA Calculator',
      description: 'Calculate House Rent Allowance exemption for tax savings',
      icon: '🏠',
      href: '#',
      features: ['HRA Exemption', 'Rent Receipts', 'Metro vs Non-Metro', 'Tax Savings'],
      color: 'from-slate-400 to-slate-500',
      comingSoon: true
    },
    {
      id: 'pf-calculator',
      title: 'PF Calculator',
      description: 'Calculate Employee Provident Fund contributions and maturity',
      icon: '🏦',
      href: '#',
      features: ['Employee & Employer PF', 'Interest Calculation', 'Maturity Amount', 'Tax Benefits'],
      color: 'from-gray-400 to-gray-500',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
                Financial Calculators
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Calculate taxes, deductions, and financial obligations with our comprehensive suite of calculators. 
                Get accurate results based on the latest tax provisions and regulations.
              </p>
            </div>

            {/* Calculators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {calculators.map((calculator) => (
                <div
                  key={calculator.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                    calculator.comingSoon ? 'opacity-75' : ''
                  }`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${calculator.color} p-6 text-white`}>
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{calculator.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{calculator.title}</h3>
                        {calculator.comingSoon && (
                          <span className="text-xs bg-white/30 px-3 py-1 rounded-full font-medium">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{calculator.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {calculator.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-[#C9A34A] mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    {calculator.comingSoon ? (
                      <button
                        disabled
                        className="w-full bg-gray-100 text-gray-500 px-4 py-3 rounded-lg font-medium cursor-not-allowed border border-gray-200"
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <Link
                        href={calculator.href}
                        className="block w-full bg-[#C9A34A] text-white px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 text-center"
                      >
                        Calculate Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-bold text-slate mb-4">
                  Why Use Our Calculators?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="font-semibold text-slate mb-2">Accurate Calculations</h3>
                    <p className="text-gray-600 text-sm">
                      Based on latest tax provisions and regulations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="font-semibold text-slate mb-2">Instant Results</h3>
                    <p className="text-gray-600 text-sm">
                      Get immediate calculations with detailed breakdowns
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🔒</div>
                    <h3 className="font-semibold text-slate mb-2">Secure & Private</h3>
                    <p className="text-gray-600 text-sm">
                      Your data is never stored or shared
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-serif font-bold text-slate mb-4">
                Need Expert Help?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our tax experts can help you with complex calculations and provide personalized advice for your financial planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#C9A34A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Expert Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-3 rounded-xl font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
