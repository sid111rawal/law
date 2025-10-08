'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('1000000');
  const [interestRate, setInterestRate] = useState<string>('8.5');
  const [loanTenure, setLoanTenure] = useState<string>('20');

  const calculateEMI = () => {
    const P = parseFloat(loanAmount) || 0;
    const r = (parseFloat(interestRate) || 0) / 100 / 12; // Monthly rate
    const n = (parseFloat(loanTenure) || 0) * 12; // Total months

    // EMI Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    return {
      emi: isNaN(emi) || !isFinite(emi) ? 0 : emi,
      totalAmount: isNaN(totalAmount) ? 0 : totalAmount,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      principal: P,
      months: n
    };
  };

  const result = calculateEMI();

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
            EMI Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans. Plan your finances better.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Loan Details</h2>
              
              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="₹10,00,000"
                />
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1L</span>
                  <span className="text-[#C9A34A] font-semibold">{formatCurrency(parseFloat(loanAmount) || 0)}</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (% per annum)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="8.5"
                  step="0.1"
                />
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span className="text-[#C9A34A] font-semibold">{interestRate}% p.a.</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="20"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 year</span>
                  <span className="text-[#C9A34A] font-semibold">{loanTenure} years</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">EMI Summary</h3>
              
              <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">Monthly EMI</div>
                <div className="text-4xl font-bold text-[#C9A34A]">{formatCurrency(result.emi)}</div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Principal Amount</div>
                  <div className="text-2xl font-bold text-slate">{formatCurrency(result.principal)}</div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Total Interest</div>
                  <div className="text-2xl font-bold text-red-600">{formatCurrency(result.totalInterest)}</div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Total Amount Payable</div>
                  <div className="text-2xl font-bold text-slate">{formatCurrency(result.totalAmount)}</div>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="mt-6">
                <div className="text-sm font-medium text-gray-700 mb-2">Payment Breakdown</div>
                <div className="flex h-8 rounded-lg overflow-hidden">
                  <div 
                    className="bg-blue-500 flex items-center justify-center text-white text-xs font-semibold"
                    style={{ width: `${(result.principal / result.totalAmount) * 100}%` }}
                    title="Principal"
                  >
                    {((result.principal / result.totalAmount) * 100).toFixed(0)}%
                  </div>
                  <div 
                    className="bg-red-500 flex items-center justify-center text-white text-xs font-semibold"
                    style={{ width: `${(result.totalInterest / result.totalAmount) * 100}%` }}
                    title="Interest"
                  >
                    {((result.totalInterest / result.totalAmount) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>💰 Principal</span>
                  <span>📈 Interest</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EMI Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">What is EMI?</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender on a specified date each calendar month. EMIs are used to pay off both interest and principal each month, so that over a specified period, the loan is fully paid off.
            </p>
            
            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Factors Affecting EMI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">💵</div>
                <h4 className="font-semibold text-slate mb-2">Loan Amount</h4>
                <p className="text-sm text-gray-600">Higher loan amount = Higher EMI</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold text-slate mb-2">Interest Rate</h4>
                <p className="text-sm text-gray-600">Higher rate = Higher EMI</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">⏰</div>
                <h4 className="font-semibold text-slate mb-2">Loan Tenure</h4>
                <p className="text-sm text-gray-600">Longer tenure = Lower EMI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
