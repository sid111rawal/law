'use client';

import { useState } from 'react';

interface GratuityCalculation {
  basicSalary: number;
  dearnessAllowance: number;
  yearsOfService: number;
  monthsOfService: number;
  isCoveredUnderAct: boolean;
  gratuityAmount: number;
  taxExemptAmount: number;
  taxableAmount: number;
}

export default function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState('');
  const [dearnessAllowance, setDearnessAllowance] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  const [monthsOfService, setMonthsOfService] = useState('');
  const [isCoveredUnderAct, setIsCoveredUnderAct] = useState(true);
  const [calculation, setCalculation] = useState<GratuityCalculation | null>(null);

  const calculateGratuity = () => {
    const basic = parseFloat(basicSalary) || 0;
    const da = parseFloat(dearnessAllowance) || 0;
    const years = parseFloat(yearsOfService) || 0;
    const months = parseFloat(monthsOfService) || 0;
    
    const totalSalary = basic + da;
    const totalServiceYears = years + (months / 12);

    if (totalSalary === 0 || totalServiceYears < 5) {
      alert('Please enter valid salary and at least 5 years of service');
      return;
    }

    let gratuityAmount = 0;

    if (isCoveredUnderAct) {
      // Formula: (n * b * 15) / 26
      gratuityAmount = (totalServiceYears * totalSalary * 15) / 26;
    } else {
      // Formula: (15 * last drawn salary * tenure) / 30
      gratuityAmount = (15 * totalSalary * totalServiceYears) / 30;
    }

    // Maximum gratuity limit is ₹20 lakh
    const maxGratuity = 2000000;
    const actualGratuity = Math.min(gratuityAmount, maxGratuity);

    // Tax calculation
    const taxExemptLimit = 2000000; // ₹20 lakh
    const taxExemptAmount = Math.min(actualGratuity, taxExemptLimit);
    const taxableAmount = Math.max(0, actualGratuity - taxExemptAmount);

    setCalculation({
      basicSalary: basic,
      dearnessAllowance: da,
      yearsOfService: years,
      monthsOfService: months,
      isCoveredUnderAct,
      gratuityAmount: actualGratuity,
      taxExemptAmount,
      taxableAmount
    });
  };

  const resetCalculator = () => {
    setBasicSalary('');
    setDearnessAllowance('');
    setYearsOfService('');
    setMonthsOfService('');
    setIsCoveredUnderAct(true);
    setCalculation(null);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Gratuity Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your gratuity amount based on your salary and years of service. Get instant estimates with tax implications and investment guidance.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Calculate Your Gratuity</h3>
              
              <div className="space-y-6">
                {/* Basic Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Basic Salary (₹)
                  </label>
                  <input
                    type="number"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter basic salary"
                  />
                </div>

                {/* Dearness Allowance */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dearness Allowance (₹)
                  </label>
                  <input
                    type="number"
                    value={dearnessAllowance}
                    onChange={(e) => setDearnessAllowance(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter DA (if applicable)"
                  />
                </div>

                {/* Years of Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Service
                  </label>
                  <input
                    type="number"
                    value={yearsOfService}
                    onChange={(e) => setYearsOfService(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter years (minimum 5)"
                    min="5"
                  />
                </div>

                {/* Months of Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Months
                  </label>
                  <input
                    type="number"
                    value={monthsOfService}
                    onChange={(e) => setMonthsOfService(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter months (0-11)"
                    min="0"
                    max="11"
                  />
                </div>

                {/* Coverage Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Status
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="coverage"
                        checked={isCoveredUnderAct}
                        onChange={() => setIsCoveredUnderAct(true)}
                        className="mr-3"
                      />
                      <span className="text-sm">Covered under Payment of Gratuity Act, 1972</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="coverage"
                        checked={!isCoveredUnderAct}
                        onChange={() => setIsCoveredUnderAct(false)}
                        className="mr-3"
                      />
                      <span className="text-sm">Not covered under Gratuity Act</span>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={calculateGratuity}
                    className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Calculate Gratuity
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Gratuity Calculation</h3>
              
              {calculation ? (
                <div className="space-y-6">
                  {/* Total Gratuity */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-2">Total Gratuity Payable</div>
                      <div className="text-3xl font-bold text-green-700">
                        ₹{calculation.gratuityAmount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Tax Implications */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Tax Implications</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-blue-700">Tax Exempt Amount:</span>
                        <span className="font-semibold text-blue-800">₹{calculation.taxExemptAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700">Taxable Amount:</span>
                        <span className="font-semibold text-blue-800">₹{calculation.taxableAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculation Details */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Calculation Details</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>Total Salary: ₹{(calculation.basicSalary + calculation.dearnessAllowance).toLocaleString()}</div>
                      <div>Service Period: {calculation.yearsOfService} years {calculation.monthsOfService} months</div>
                      <div>Formula Used: {calculation.isCoveredUnderAct ? '(Years × Salary × 15) ÷ 26' : '(15 × Salary × Years) ÷ 30'}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                  <div className="text-gray-500">
                    <div className="text-4xl mb-4">💰</div>
                    <p>Enter your details to calculate gratuity</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding Gratuity</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Gratuity is a payment from an employer to an employee for services rendered, typically given to those with five or more years of service. 
            It is governed by the Payment of Gratuity Act, 1972 and serves as a retirement benefit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">📋 Eligibility Criteria</h4>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Minimum 5 years of continuous service</li>
                <li>• Superannuation or retirement</li>
                <li>• Resignation after 5 years</li>
                <li>• Death or disablement due to accident/disease</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">🧮 Calculation Methods</h4>
              <div className="text-sm text-blue-600 space-y-2">
                <div>
                  <strong>Covered under Act:</strong><br />
                  Gratuity = (Years × Salary × 15) ÷ 26
                </div>
                <div>
                  <strong>Not covered under Act:</strong><br />
                  Gratuity = (15 × Salary × Years) ÷ 30
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Tax Treatment of Gratuity</h3>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">Tax Exemption Rules</h4>
            <div className="space-y-3 text-yellow-700">
              <div>
                <strong>Government Employees:</strong> Full gratuity amount is tax-exempt
              </div>
              <div>
                <strong>Private Employees (Covered under Act):</strong> Least of the following is exempt:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• ₹20 lakh (maximum limit)</li>
                  <li>• Actual gratuity received</li>
                  <li>• Eligible gratuity amount</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Investment Options for Gratuity</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🏦 Fixed Deposits</h4>
              <p className="text-gray-700 text-sm">Low-risk investment with guaranteed returns and capital preservation.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📈 Public Provident Fund</h4>
              <p className="text-gray-700 text-sm">Tax-efficient long-term investment with 15-year lock-in period.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">💼 Employee Provident Fund</h4>
              <p className="text-gray-700 text-sm">Transfer gratuity to EPF for tax benefits and retirement savings.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🎯 National Pension System</h4>
              <p className="text-gray-700 text-sm">Voluntary retirement savings with tax benefits and flexible investment options.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📊 Mutual Funds</h4>
              <p className="text-gray-700 text-sm">Diversified investment options in equity and debt funds for higher returns.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🏠 Real Estate</h4>
              <p className="text-gray-700 text-sm">Direct property purchase or REITs for long-term wealth building.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Need Professional Financial Planning?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our expert financial advisors can help you optimize your gratuity investment, create comprehensive retirement strategies, and plan for your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Financial Consultation
              </button>
              <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                Learn About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
