'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HRACalculator() {
  const [basicSalary, setBasicSalary] = useState<string>('');
  const [hraReceived, setHraReceived] = useState<string>('');
  const [rentPaid, setRentPaid] = useState<string>('');
  const [cityType, setCityType] = useState<'metro' | 'nonmetro'>('metro');

  const calculateHRA = () => {
    const basic = parseFloat(basicSalary) || 0;
    const hra = parseFloat(hraReceived) || 0;
    const rent = parseFloat(rentPaid) || 0;

    // HRA Exemption = Minimum of:
    // 1. Actual HRA received
    // 2. Rent paid minus 10% of basic salary
    // 3. 50% of basic salary (metro) or 40% of basic salary (non-metro)

    const option1 = hra;
    const option2 = Math.max(0, rent - (basic * 0.10));
    const option3 = cityType === 'metro' ? basic * 0.50 : basic * 0.40;

    const exemption = Math.min(option1, option2, option3);
    const taxableHRA = hra - exemption;

    return {
      hraReceived: hra,
      exemption,
      taxableHRA,
      option1,
      option2,
      option3,
      basic,
      rent
    };
  };

  const result = calculateHRA();

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
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
            HRA Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate House Rent Allowance (HRA) tax exemption. Find out how much HRA you can claim as tax-free.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Salary & Rent Details</h2>
              
              {/* City Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  City Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setCityType('metro')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      cityType === 'metro'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">Metro City</div>
                    <div className="text-xs text-gray-600">50% exemption</div>
                  </button>
                  <button
                    onClick={() => setCityType('nonmetro')}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      cityType === 'nonmetro'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">Non-Metro</div>
                    <div className="text-xs text-gray-600">40% exemption</div>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Metro cities: Delhi, Mumbai, Kolkata, Chennai
                </p>
              </div>

              {/* Basic Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Basic Salary (Annual)
                </label>
                <input
                  type="number"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter annual basic salary"
                />
              </div>

              {/* HRA Received */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HRA Received (Annual)
                </label>
                <input
                  type="number"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter HRA received per year"
                />
              </div>

              {/* Rent Paid */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rent Paid (Annual)
                </label>
                <input
                  type="number"
                  value={rentPaid}
                  onChange={(e) => setRentPaid(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter annual rent paid"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">HRA Exemption Calculation</h3>
              
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200">
                <div className="text-sm text-gray-600 mb-2">Tax-Free HRA</div>
                <div className="text-4xl font-bold text-green-600 mb-2">{formatCurrency(result.exemption)}</div>
                <div className="text-sm text-gray-600">Taxable HRA: {formatCurrency(result.taxableHRA)}</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate mb-4">Exemption Calculated As:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Actual HRA Received:</span>
                    <span className={`font-semibold ${result.exemption === result.option1 ? 'text-green-600' : 'text-gray-500'}`}>
                      {formatCurrency(result.option1)}
                      {result.exemption === result.option1 && ' ✓'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Rent - 10% of Basic:</span>
                    <span className={`font-semibold ${result.exemption === result.option2 ? 'text-green-600' : 'text-gray-500'}`}>
                      {formatCurrency(result.option2)}
                      {result.exemption === result.option2 && ' ✓'}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">{cityType === 'metro' ? '50%' : '40%'} of Basic Salary:</span>
                    <span className={`font-semibold ${result.exemption === result.option3 ? 'text-green-600' : 'text-gray-500'}`}>
                      {formatCurrency(result.option3)}
                      {result.exemption === result.option3 && ' ✓'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  ✓ Indicates the minimum value used for exemption
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HRA Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">Understanding HRA Exemption</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              House Rent Allowance (HRA) is a component of your salary that can be partially or fully exempt from tax if you live in rented accommodation. The exemption is calculated as the minimum of three conditions.
            </p>
            
            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Conditions for HRA Exemption</h3>
            <ol className="space-y-2">
              <li>You must be a salaried employee</li>
              <li>You must live in rented accommodation</li>
              <li>You must actually pay rent</li>
              <li>Rent receipts may be required if annual rent exceeds ₹1 lakh</li>
            </ol>

            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Documents Required</h3>
            <ul className="space-y-2">
              <li>Rent agreement</li>
              <li>Rent receipts (if rent &gt; ₹8,333 per month)</li>
              <li>Landlord&apos;s PAN (if rent &gt; ₹1 lakh per year)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
