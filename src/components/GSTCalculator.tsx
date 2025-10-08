'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GSTCalculator() {
  const [calculationType, setCalculationType] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [amount, setAmount] = useState<string>('');
  const [gstRate, setGstRate] = useState<string>('18');
  const [gstType, setGstType] = useState<'intrastate' | 'interstate'>('intrastate');

  const calculateGST = () => {
    const baseAmount = parseFloat(amount) || 0;
    const rate = parseFloat(gstRate) || 0;

    if (calculationType === 'exclusive') {
      // Amount is without GST, add GST to it
      const gstAmount = (baseAmount * rate) / 100;
      const totalAmount = baseAmount + gstAmount;
      
      if (gstType === 'intrastate') {
        const cgst = gstAmount / 2;
        const sgst = gstAmount / 2;
        return {
          baseAmount,
          cgst,
          sgst,
          igst: 0,
          totalGST: gstAmount,
          totalAmount
        };
      } else {
        return {
          baseAmount,
          cgst: 0,
          sgst: 0,
          igst: gstAmount,
          totalGST: gstAmount,
          totalAmount
        };
      }
    } else {
      // Amount includes GST, extract GST from it
      const gstAmount = (baseAmount * rate) / (100 + rate);
      const netAmount = baseAmount - gstAmount;
      
      if (gstType === 'intrastate') {
        const cgst = gstAmount / 2;
        const sgst = gstAmount / 2;
        return {
          baseAmount: netAmount,
          cgst,
          sgst,
          igst: 0,
          totalGST: gstAmount,
          totalAmount: baseAmount
        };
      } else {
        return {
          baseAmount: netAmount,
          cgst: 0,
          sgst: 0,
          igst: gstAmount,
          totalGST: gstAmount,
          totalAmount: baseAmount
        };
      }
    }
  };

  const result = calculateGST();

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/resources/calculators"
            className="inline-flex items-center text-slate hover:text-[#C9A34A] transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Calculators
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            GST Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate GST (Goods and Services Tax) with CGST, SGST, and IGST for both inclusive and exclusive amounts.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Calculate GST</h2>
              
              {/* Calculation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Calculation Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCalculationType('exclusive')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      calculationType === 'exclusive'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">GST Exclusive</div>
                    <div className="text-xs text-gray-600">Add GST to amount</div>
                  </button>
                  <button
                    onClick={() => setCalculationType('inclusive')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      calculationType === 'inclusive'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">GST Inclusive</div>
                    <div className="text-xs text-gray-600">Extract GST from amount</div>
                  </button>
                </div>
              </div>

              {/* GST Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  GST Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setGstType('intrastate')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      gstType === 'intrastate'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">Intra-State</div>
                    <div className="text-xs text-gray-600">CGST + SGST</div>
                  </button>
                  <button
                    onClick={() => setGstType('interstate')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      gstType === 'interstate'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">Inter-State</div>
                    <div className="text-xs text-gray-600">IGST</div>
                  </button>
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {calculationType === 'exclusive' ? 'Amount (Before GST)' : 'Amount (Including GST)'}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter amount"
                />
              </div>

              {/* GST Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Rate (%)
                </label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {['5', '12', '18', '28'].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setGstRate(rate)}
                      className={`p-2 rounded-lg border-2 transition-all duration-200 font-semibold ${
                        gstRate === rate
                          ? 'border-[#C9A34A] bg-[#C9A34A] text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={gstRate}
                  onChange={(e) => setGstRate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Custom GST rate"
                  step="0.1"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">GST Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Base Amount:</span>
                  <span className="text-xl font-bold text-slate">{formatCurrency(result.baseAmount)}</span>
                </div>

                {gstType === 'intrastate' ? (
                  <>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">CGST ({parseFloat(gstRate) / 2}%):</span>
                      <span className="text-lg font-semibold text-[#C9A34A]">{formatCurrency(result.cgst)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">SGST ({parseFloat(gstRate) / 2}%):</span>
                      <span className="text-lg font-semibold text-[#C9A34A]">{formatCurrency(result.sgst)}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">IGST ({gstRate}%):</span>
                    <span className="text-lg font-semibold text-[#C9A34A]">{formatCurrency(result.igst)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-slate">Total GST:</span>
                  <span className="text-xl font-bold text-[#C9A34A]">{formatCurrency(result.totalGST)}</span>
                </div>

                <div className="flex justify-between items-center py-4 bg-[#C9A34A]/10 rounded-lg px-4">
                  <span className="font-bold text-slate">Grand Total:</span>
                  <span className="text-2xl font-bold text-[#C9A34A]">{formatCurrency(result.totalAmount)}</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> {gstType === 'intrastate' 
                    ? 'CGST (Central GST) and SGST (State GST) are applicable for intra-state transactions.'
                    : 'IGST (Integrated GST) is applicable for inter-state transactions.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive SEO Content */}
        <div className="mt-12 space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">Understanding GST Calculation in India</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Calculating GST can be confusing for businesses and individuals, especially when dealing with different tax rates, inclusive and exclusive amounts, and understanding the difference between CGST, SGST, and IGST. That&apos;s where the Lawgical Station GST Calculator comes in. It simplifies GST calculations instantly, helping you understand your tax obligations clearly.
              </p>
              
              <h3 className="text-xl font-semibold text-slate mt-6 mb-4">What is the GST Calculator?</h3>
              <p className="mb-4">
                The Lawgical Station GST Calculator is a free, easy-to-use online tool designed to calculate Goods and Services Tax for your business transactions. Whether you need to add GST to your selling price or extract GST from an inclusive amount, our calculator provides instant, accurate results with detailed breakdowns of CGST, SGST, and IGST components.
              </p>
            </div>
          </div>

          {/* How to Use */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">How to Use the GST Calculator</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Follow these simple steps to calculate GST:</p>
              <ol className="space-y-3">
                <li><strong>Step 1:</strong> Choose the calculation type - GST Exclusive (add GST to amount) or GST Inclusive (extract GST from amount)</li>
                <li><strong>Step 2:</strong> Select GST type - Intra-State (CGST + SGST) or Inter-State (IGST)</li>
                <li><strong>Step 3:</strong> Enter the amount you want to calculate GST for</li>
                <li><strong>Step 4:</strong> Select or enter the applicable GST rate (5%, 12%, 18%, or 28%)</li>
                <li><strong>Step 5:</strong> View instant results with complete breakdown of base amount, GST components, and total amount</li>
              </ol>
            </div>
          </div>

          {/* GST Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">GST Rates and Slabs in India</h2>
            <div className="space-y-6">
              <p className="text-gray-700">
                Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services in India. It has replaced multiple indirect taxes like VAT, Service Tax, and Excise Duty, creating a unified tax system.
              </p>
              
              <h3 className="text-xl font-semibold text-slate mb-4">GST Rate Structure</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-3xl font-bold text-[#C9A34A] mb-2">5%</div>
                  <div className="text-sm text-gray-600 font-medium mb-2">Essential Items</div>
                  <div className="text-xs text-gray-500">Food items, healthcare, transport</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-3xl font-bold text-[#C9A34A] mb-2">12%</div>
                  <div className="text-sm text-gray-600 font-medium mb-2">Standard Goods</div>
                  <div className="text-xs text-gray-500">Processed food, computers</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-3xl font-bold text-[#C9A34A] mb-2">18%</div>
                  <div className="text-sm text-gray-600 font-medium mb-2">Most Services</div>
                  <div className="text-xs text-gray-500">IT services, restaurants</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
                  <div className="text-3xl font-bold text-[#C9A34A] mb-2">28%</div>
                  <div className="text-sm text-gray-600 font-medium mb-2">Luxury Items</div>
                  <div className="text-xs text-gray-500">Cars, tobacco, aerated drinks</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Types of GST</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate mb-2">CGST (Central GST)</h4>
                  <p className="text-sm text-gray-600">Collected by Central Government on intra-state transactions. Rate is 50% of total GST.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate mb-2">SGST (State GST)</h4>
                  <p className="text-sm text-gray-600">Collected by State Government on intra-state transactions. Rate is 50% of total GST.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate mb-2">IGST (Integrated GST)</h4>
                  <p className="text-sm text-gray-600">Collected by Central Government on inter-state transactions. Full GST rate applies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* GST Registration */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">GST Registration Requirements</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                GST registration is mandatory for businesses with annual turnover exceeding ₹40 lakh (₹20 lakh for special category states). Even businesses below this threshold can opt for voluntary registration to claim input tax credit and enhance credibility.
              </p>
              
              <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Benefits of GST Registration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-slate mb-1">Input Tax Credit</h4>
                    <p className="text-sm text-gray-600">Claim credit for GST paid on purchases and reduce your tax liability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <h4 className="font-semibold text-slate mb-1">Legal Recognition</h4>
                    <p className="text-sm text-gray-600">Official recognition as a legitimate business entity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🌏</div>
                  <div>
                    <h4 className="font-semibold text-slate mb-1">Interstate Sales</h4>
                    <p className="text-sm text-gray-600">Legally sell goods/services across state borders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💼</div>
                  <div>
                    <h4 className="font-semibold text-slate mb-1">Business Credibility</h4>
                    <p className="text-sm text-gray-600">Enhanced trust and credibility with clients and vendors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-serif font-bold text-slate mb-4">
              Need Help with GST Compliance?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our GST experts can help you with registration, filing returns, and ensuring complete compliance. Get professional assistance for all your GST needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get GST Consultation
              </button>
              <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-3 rounded-xl font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                GST Registration Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
