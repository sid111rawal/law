'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState<string>('1000000');
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<string>('10000');
  const [expectedReturn, setExpectedReturn] = useState<string>('12');
  const [timePeriod, setTimePeriod] = useState<string>('10');

  const calculateSWP = () => {
    const P = parseFloat(totalInvestment) || 0;
    const W = parseFloat(monthlyWithdrawal) || 0;
    const r = (parseFloat(expectedReturn) || 0) / 100 / 12; // Monthly rate
    const n = (parseFloat(timePeriod) || 0) * 12; // Total months

    let balance = P;
    let totalWithdrawn = 0;
    let monthlyBalances = [];

    for (let month = 1; month <= n; month++) {
      // Apply return for the month
      balance = balance * (1 + r);
      // Withdraw
      balance = Math.max(0, balance - W);
      totalWithdrawn += W;
      
      monthlyBalances.push({
        month,
        balance,
        withdrawn: totalWithdrawn
      });

      if (balance <= 0) break;
    }

    const finalBalance = balance;
    const totalWithdrawalsMade = totalWithdrawn;

    return {
      initialInvestment: P,
      monthlyWithdrawal: W,
      totalWithdrawn: totalWithdrawalsMade,
      finalBalance,
      monthsLasted: monthlyBalances.length,
      yearsLasted: monthlyBalances.length / 12
    };
  };

  const result = calculateSWP();

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
            SWP Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate Systematic Withdrawal Plan returns. Plan regular income from your mutual fund investments.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">SWP Details</h2>
              
              {/* Total Investment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Investment
                </label>
                <input
                  type="number"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="₹10,00,000"
                />
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1L</span>
                  <span className="text-[#C9A34A] font-semibold">{formatCurrency(parseFloat(totalInvestment) || 0)}</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              {/* Monthly Withdrawal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Withdrawal
                </label>
                <input
                  type="number"
                  value={monthlyWithdrawal}
                  onChange={(e) => setMonthlyWithdrawal(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="₹10,000"
                />
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monthlyWithdrawal}
                  onChange={(e) => setMonthlyWithdrawal(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1K</span>
                  <span className="text-[#C9A34A] font-semibold">{formatCurrency(parseFloat(monthlyWithdrawal) || 0)}</span>
                  <span>₹1L</span>
                </div>
              </div>

              {/* Expected Return */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Annual Return (%)
                </label>
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="12"
                  step="0.1"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                  className="w-full mt-3"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span className="text-[#C9A34A] font-semibold">{expectedReturn}%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Withdrawal Period (Years)
                </label>
                <input
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="10"
                />
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">Withdrawal Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">Initial Investment</div>
                  <div className="text-xl font-bold text-slate">{formatCurrency(result.initialInvestment)}</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">Total Withdrawn</div>
                  <div className="text-xl font-bold text-green-600">{formatCurrency(result.totalWithdrawn)}</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">Final Balance</div>
                  <div className="text-xl font-bold text-[#C9A34A]">{formatCurrency(result.finalBalance)}</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600 mb-2">Withdrawal Duration</div>
                  <div className="text-xl font-bold text-slate">{result.yearsLasted.toFixed(1)} years</div>
                </div>
              </div>

              {result.finalBalance <= 0 && result.yearsLasted < parseFloat(timePeriod) && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700">
                    ⚠️ <strong>Warning:</strong> Your investment will be exhausted in {result.yearsLasted.toFixed(1)} years. Consider reducing monthly withdrawal or increasing the initial investment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SWP Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">What is SWP?</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Systematic Withdrawal Plan (SWP) is a facility offered by mutual funds to investors to withdraw a fixed or variable amount at regular intervals (monthly, quarterly, etc.). It&apos;s the opposite of SIP and is ideal for generating regular income from your investments.
            </p>
            
            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Benefits of SWP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💸</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Regular Income</h4>
                  <p className="text-sm text-gray-600">Get fixed monthly income from your investments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📈</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Capital Growth</h4>
                  <p className="text-sm text-gray-600">Remaining investment continues to grow</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Tax Efficient</h4>
                  <p className="text-sm text-gray-600">Better tax treatment than dividends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔄</div>
                <div>
                  <h4 className="font-semibold text-slate mb-1">Flexible</h4>
                  <p className="text-sm text-gray-600">Change withdrawal amount anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
