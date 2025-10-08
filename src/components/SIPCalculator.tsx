'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('');
  const [returnRate, setReturnRate] = useState<string>('12');
  const [timePeriod, setTimePeriod] = useState<string>('10');

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment) || 0;
    const r = (parseFloat(returnRate) || 0) / 100 / 12; // Monthly rate
    const n = (parseFloat(timePeriod) || 0) * 12; // Total months

    // SIP Future Value Formula: FV = P × [(1 + r)^n - 1] / r × (1 + r)
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const totalReturns = futureValue - totalInvestment;

    return {
      futureValue,
      totalInvestment,
      totalReturns,
      monthlyInvestment: P,
      returnRate: parseFloat(returnRate) || 0,
      years: parseFloat(timePeriod) || 0
    };
  };

  const result = calculateSIP();

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
            SIP Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate returns on your Systematic Investment Plan (SIP) in mutual funds. Plan your wealth creation journey with accurate projections.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Investment Details</h2>
              
              {/* Monthly Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Investment Amount
                </label>
                <input
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="₹5,000"
                />
                <div className="mt-2 flex gap-2 flex-wrap">
                  {['1000', '5000', '10000', '25000'].map((value) => (
                    <button
                      key={value}
                      onClick={() => setMonthlyInvestment(value)}
                      className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-[#C9A34A] hover:bg-[#C9A34A]/10 transition-colors"
                    >
                      ₹{parseInt(value).toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Expected Return Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Annual Return Rate (%)
                </label>
                <input
                  type="number"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="12"
                  step="0.1"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span className="text-[#C9A34A] font-semibold">{returnRate}%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Period (Years)
                </label>
                <input
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="10"
                />
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 year</span>
                  <span className="text-[#C9A34A] font-semibold">{timePeriod} years</span>
                  <span>40 years</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">Investment Summary</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Total Investment</div>
                  <div className="text-2xl font-bold text-slate">{formatCurrency(result.totalInvestment)}</div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Expected Returns</div>
                  <div className="text-2xl font-bold text-green-600">{formatCurrency(result.totalReturns)}</div>
                </div>

                <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Future Value</div>
                  <div className="text-3xl font-bold text-[#C9A34A]">{formatCurrency(result.futureValue)}</div>
                </div>

                {/* Visual Breakdown */}
                <div className="mt-6">
                  <div className="text-sm font-medium text-gray-700 mb-2">Investment Breakdown</div>
                  <div className="flex h-8 rounded-lg overflow-hidden">
                    <div 
                      className="bg-blue-500 flex items-center justify-center text-white text-xs font-semibold"
                      style={{ width: `${(result.totalInvestment / result.futureValue) * 100}%` }}
                    >
                      {((result.totalInvestment / result.futureValue) * 100).toFixed(0)}%
                    </div>
                    <div 
                      className="bg-green-500 flex items-center justify-center text-white text-xs font-semibold"
                      style={{ width: `${(result.totalReturns / result.futureValue) * 100}%` }}
                    >
                      {((result.totalReturns / result.futureValue) * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>💰 Invested</span>
                    <span>📈 Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIP Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">What is SIP?</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              A Systematic Investment Plan (SIP) is a method of investing in mutual funds where you invest a fixed amount regularly (monthly, quarterly) instead of making a lump sum investment. SIP allows you to build wealth over time through the power of compounding.
            </p>
            
            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Benefits of SIP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💪</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Disciplined Investing</h4>
                  <p className="text-sm text-gray-600">Regular investments build financial discipline</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Rupee Cost Averaging</h4>
                  <p className="text-sm text-gray-600">Reduces impact of market volatility</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Power of Compounding</h4>
                  <p className="text-sm text-gray-600">Your returns generate more returns over time</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Affordable Start</h4>
                  <p className="text-sm text-gray-600">Start with as low as ₹500 per month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
