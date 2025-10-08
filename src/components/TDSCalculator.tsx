'use client';

import { useState } from 'react';
import Link from 'next/link';

type TDSCategory = 'salary' | 'interest' | 'rent' | 'professional' | 'commission' | 'contractor';

export default function TDSCalculator() {
  const [category, setCategory] = useState<TDSCategory>('salary');
  const [amount, setAmount] = useState<string>('');
  const [panAvailable, setPanAvailable] = useState<boolean>(true);

  const tdsRates = {
    salary: { withPAN: 0, withoutPAN: 0, description: 'As per slab rates' },
    interest: { withPAN: 10, withoutPAN: 20, description: 'Bank/FD interest > ₹40,000' },
    rent: { withPAN: 10, withoutPAN: 20, description: 'Rent payment > ₹2,40,000/year' },
    professional: { withPAN: 10, withoutPAN: 20, description: 'Professional/Technical services > ₹30,000' },
    commission: { withPAN: 5, withoutPAN: 20, description: 'Commission/Brokerage' },
    contractor: { withPAN: 2, withoutPAN: 20, description: 'Contract payments' },
  };

  const calculateTDS = () => {
    const baseAmount = parseFloat(amount) || 0;
    const rate = panAvailable 
      ? tdsRates[category].withPAN 
      : tdsRates[category].withoutPAN;
    
    const tdsAmount = (baseAmount * rate) / 100;
    const netAmount = baseAmount - tdsAmount;

    return {
      grossAmount: baseAmount,
      tdsRate: rate,
      tdsAmount,
      netAmount
    };
  };

  const result = calculateTDS();

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(num);
  };

  const categories = [
    { value: 'salary' as TDSCategory, label: 'Salary', icon: '💼' },
    { value: 'interest' as TDSCategory, label: 'Interest', icon: '💰' },
    { value: 'rent' as TDSCategory, label: 'Rent', icon: '🏠' },
    { value: 'professional' as TDSCategory, label: 'Professional Fees', icon: '👨‍💼' },
    { value: 'commission' as TDSCategory, label: 'Commission', icon: '🤝' },
    { value: 'contractor' as TDSCategory, label: 'Contractor', icon: '🔨' },
  ];

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
            TDS Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate Tax Deducted at Source (TDS) for various payment types including salary, interest, rent, and professional fees.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Calculate TDS</h2>
              
              {/* TDS Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select TDS Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        category === cat.value
                          ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="text-2xl mb-1">{cat.icon}</div>
                      <div className="text-sm font-semibold">{cat.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter payment amount"
                />
              </div>

              {/* PAN Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  PAN Card Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPanAvailable(true)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      panAvailable
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    PAN Available
                  </button>
                  <button
                    onClick={() => setPanAvailable(false)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      !panAvailable
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    No PAN
                  </button>
                </div>
                {!panAvailable && (
                  <p className="text-sm text-red-600 mt-2">
                    ⚠️ Higher TDS rate (20%) applicable without PAN
                  </p>
                )}
              </div>

              {/* Category Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>{categories.find(c => c.value === category)?.label}:</strong> {tdsRates[category].description}
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">TDS Calculation</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Gross Amount:</span>
                  <span className="text-xl font-bold text-slate">{formatCurrency(result.grossAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">TDS Rate:</span>
                  <span className="text-lg font-semibold text-[#C9A34A]">{result.tdsRate}%</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">TDS Amount:</span>
                  <span className="text-lg font-semibold text-red-600">{formatCurrency(result.tdsAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-4 bg-green-50 rounded-lg px-4">
                  <span className="font-bold text-slate">Net Amount (After TDS):</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(result.netAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TDS Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">What is TDS?</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Tax Deducted at Source (TDS) is a means of collecting income tax in India. Under this mechanism, the person making payment (deductor) deducts tax at source and remits it to the government. The balance is paid to the person receiving the payment (deductee).
            </p>
            
            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Common TDS Sections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Section 192 - Salary</h4>
                <p className="text-sm text-gray-600">TDS on salary is deducted based on income tax slab rates.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Section 194A - Interest</h4>
                <p className="text-sm text-gray-600">10% TDS on interest income exceeding ₹40,000 (₹50,000 for senior citizens)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Section 194I - Rent</h4>
                <p className="text-sm text-gray-600">10% TDS on rent exceeding ₹2,40,000 per year</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Section 194J - Professional Fees</h4>
                <p className="text-sm text-gray-600">10% TDS on professional or technical services exceeding ₹30,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
