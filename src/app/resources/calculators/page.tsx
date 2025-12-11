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
      href: '/resources/calculators/gst-calculator',
      features: ['CGST, SGST, IGST', 'Multiple Tax Rates', 'Inclusive/Exclusive', 'Intra & Inter-state'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'tds-calculator',
      title: 'TDS Calculator',
      description: 'Calculate Tax Deducted at Source for various income types',
      icon: '💰',
      href: '/resources/calculators/tds-calculator',
      features: ['Salary TDS', 'Interest TDS', 'Rent TDS', 'Professional Fees'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'sip-calculator',
      title: 'SIP Calculator',
      description: 'Calculate returns on your Systematic Investment Plan in mutual funds',
      icon: '📈',
      href: '/resources/calculators/sip-calculator',
      features: ['Future Value', 'Total Returns', 'Wealth Creation', 'Investment Planning'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'swp-calculator',
      title: 'SWP Calculator',
      description: 'Plan Systematic Withdrawal from your mutual fund investments',
      icon: '💸',
      href: '/resources/calculators/swp-calculator',
      features: ['Regular Income', 'Balance Tracking', 'Withdrawal Planning', 'Retirement Planning'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'emi-calculator',
      title: 'EMI Calculator',
      description: 'Calculate Equated Monthly Installments for loans',
      icon: '💼',
      href: '/resources/calculators/emi-calculator',
      features: ['Home Loan EMI', 'Car Loan EMI', 'Personal Loan', 'Interest Breakdown'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'tax-audit',
      title: 'Tax Audit Checker',
      description: 'Check if your business requires tax audit under Section 44AB',
      icon: '📋',
      href: '/resources/calculators/tax-audit',
      features: ['Audit Threshold', 'Section 44AB', 'Compliance Check', 'Professional Help'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'margin-calculator',
      title: 'Margin Calculator',
      description: 'Calculate profit margins using multiple methods and optimize pricing strategies',
      icon: '📊',
      href: '/calculators/margin-calculator',
      features: ['Revenue/Cost Mode', 'Markup Calculations', 'Margin Calculations', 'Pricing Optimization'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'depreciation-calculator',
      title: 'Depreciation Calculator',
      description: 'Calculate asset depreciation using SLM, Declining Balance, and Sum of Years methods',
      icon: '📉',
      href: '/calculators/depreciation-calculator',
      features: ['Straight Line Method', 'Declining Balance', 'Sum of Years', 'Depreciation Schedule'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'networth-calculator',
      title: 'Net Worth Calculator',
      description: 'Calculate your net worth and project future financial growth with detailed asset and liability tracking',
      icon: '💰',
      href: '/calculators/networth-calculator',
      features: ['Asset Tracking', 'Liability Management', 'Growth Projections', 'Financial Planning'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'gratuity-calculator',
      title: 'Gratuity Calculator',
      description: 'Calculate your gratuity amount based on salary and years of service with tax implications',
      icon: '🎯',
      href: '/calculators/gratuity-calculator',
      features: ['Dual Calculation Methods', 'Tax Implications', 'Investment Guidance', 'Retirement Planning'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'stepup-sip-calculator',
      title: 'Step Up SIP Calculator',
      description: 'Calculate returns on your SIP investments with annual step-up increments for wealth creation',
      icon: '📈',
      href: '/calculators/stepup-sip-calculator',
      features: ['Annual Step Up', 'Growth Projections', 'Investment Strategies', 'Wealth Building'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'net-profit-calculator',
      title: 'Net Profit Calculator',
      description: 'Calculate net profit with comprehensive adjustments for provisions, expenses, and capital gains',
      icon: '📊',
      href: '/calculators/net-profit-calculator',
      features: ['Tax Adjustments', 'Capital Gains', 'Provision Handling', 'Financial Analysis'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'hra-calculator',
      title: 'HRA Calculator',
      description: 'Calculate House Rent Allowance exemption for tax savings with monthly breakdowns',
      icon: '🏠',
      href: '/calculators/hra-calculator',
      features: ['Monthly Calculations', 'Metro/Non-Metro', 'Tax Exemption', 'Rent Optimization'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'advance-tax-calculator',
      title: 'Advance Tax Calculator',
      description: 'Calculate advance tax liability and payment schedule for FY 2024-25 with installment breakdown',
      icon: '📅',
      href: '/resources/calculators/advance-tax-calculator',
      features: ['Payment Schedule', 'Old vs New Regime', 'Installment Calculator', 'TDS Adjustment'],
      color: 'from-slate-600 to-slate-700'
    },
    {
      id: 'effective-capital-calculator',
      title: 'Effective Capital Calculator',
      description: 'Calculate effective capital using conservative and operating perspectives with scenario comparisons',
      icon: '💼',
      href: '/calculators/effective-capital-calculator',
      features: ['Conservative Mode', 'Operating Mode', 'Scenario Comparison', 'Financial Analysis'],
      color: 'from-slate-600 to-slate-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {calculators.map((calculator) => (
                <Link
                  key={calculator.id}
                  href={calculator.href}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden block"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${calculator.color} p-6 text-white`}>
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{calculator.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{calculator.title}</h3>
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
                    <div className="w-full bg-[#C9A34A] text-white px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 text-center">
                      Calculate Now
                    </div>
                  </div>
                </Link>
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
    </div>
  );
}
