'use client';

import { useState } from 'react';

interface YearlyProjection {
  year: number;
  monthlySIP: number;
  annualSIP: number;
  cumulativeInvestment: number;
  expectedValue: number;
  returns: number;
}

interface StepUpSIPCalculation {
  initialSIP: number;
  stepUpPercentage: number;
  expectedReturn: number;
  tenure: number;
  totalInvestment: number;
  expectedValue: number;
  totalReturns: number;
  yearlyProjections: YearlyProjection[];
}

export default function StepUpSIPCalculator() {
  const [initialSIP, setInitialSIP] = useState('');
  const [stepUpPercentage, setStepUpPercentage] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [tenure, setTenure] = useState('');
  const [calculation, setCalculation] = useState<StepUpSIPCalculation | null>(null);

  const calculateStepUpSIP = () => {
    const sip = parseFloat(initialSIP) || 0;
    const stepUp = parseFloat(stepUpPercentage) || 0;
    const returnRate = parseFloat(expectedReturn) || 0;
    const years = parseInt(tenure) || 0;

    if (sip === 0 || years === 0) {
      alert('Please enter valid SIP amount and tenure');
      return;
    }

    const monthlyReturnRate = returnRate / 100 / 12;
    const stepUpRate = stepUp / 100;

    let totalInvestment = 0;
    let expectedValue = 0;
    let currentSIP = sip;
    const yearlyProjections: YearlyProjection[] = [];

    for (let year = 1; year <= years; year++) {
      const annualSIP = currentSIP * 12;
      totalInvestment += annualSIP;

      // Calculate future value for this year's SIP
      let yearValue = 0;
      for (let month = 1; month <= 12; month++) {
        const monthsRemaining = (years - year) * 12 + (12 - month + 1);
        yearValue += currentSIP * Math.pow(1 + monthlyReturnRate, monthsRemaining);
      }

      expectedValue += yearValue;

      yearlyProjections.push({
        year,
        monthlySIP: currentSIP,
        annualSIP,
        cumulativeInvestment: totalInvestment,
        expectedValue: Math.round(expectedValue * 100) / 100,
        returns: Math.round((expectedValue - totalInvestment) * 100) / 100
      });

      // Step up the SIP for next year
      currentSIP = currentSIP * (1 + stepUpRate);
    }

    const totalReturns = expectedValue - totalInvestment;

    setCalculation({
      initialSIP: sip,
      stepUpPercentage: stepUp,
      expectedReturn: returnRate,
      tenure: years,
      totalInvestment: Math.round(totalInvestment * 100) / 100,
      expectedValue: Math.round(expectedValue * 100) / 100,
      totalReturns: Math.round(totalReturns * 100) / 100,
      yearlyProjections
    });
  };

  const resetCalculator = () => {
    setInitialSIP('');
    setStepUpPercentage('');
    setExpectedReturn('');
    setTenure('');
    setCalculation(null);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Step Up SIP Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate the future value of your SIP investments with annual step-up increments. Plan your wealth creation journey with increasing investments.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Calculate Your Step Up SIP</h3>
              
              <div className="space-y-6">
                {/* Initial SIP Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Monthly SIP Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={initialSIP}
                    onChange={(e) => setInitialSIP(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter monthly SIP amount"
                  />
                </div>

                {/* Step Up Percentage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Step Up Percentage (%)
                  </label>
                  <input
                    type="number"
                    value={stepUpPercentage}
                    onChange={(e) => setStepUpPercentage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter step up percentage"
                    step="0.1"
                  />
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
                    placeholder="Enter expected return"
                    step="0.1"
                  />
                </div>

                {/* Investment Tenure */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Tenure (Years)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter investment tenure"
                    min="1"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={calculateStepUpSIP}
                    className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Calculate Returns
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
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Investment Summary</h3>
              
              {calculation ? (
                <div className="space-y-6">
                  {/* Total Investment */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-blue-600 mb-2">Total Investment</div>
                      <div className="text-3xl font-bold text-blue-700">
                        ₹{calculation.totalInvestment.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Expected Value */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-2">Expected Value</div>
                      <div className="text-3xl font-bold text-green-700">
                        ₹{calculation.expectedValue.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Total Returns */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-yellow-600 mb-2">Total Returns</div>
                      <div className="text-3xl font-bold text-yellow-700">
                        ₹{calculation.totalReturns.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Metrics</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Initial SIP:</span>
                        <span className="font-semibold">₹{calculation.initialSIP.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Step Up Rate:</span>
                        <span className="font-semibold">{calculation.stepUpPercentage}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Return:</span>
                        <span className="font-semibold">{calculation.expectedReturn}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tenure:</span>
                        <span className="font-semibold">{calculation.tenure} years</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                  <div className="text-gray-500">
                    <div className="text-4xl mb-4">📈</div>
                    <p>Enter your SIP details to calculate returns</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Year-wise Projections */}
        {calculation && calculation.yearlyProjections.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-serif font-bold text-slate mb-6">Year-wise Projections</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Year</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly SIP</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Annual SIP</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Investment</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Expected Value</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Returns</th>
                  </tr>
                </thead>
                <tbody>
                  {calculation.yearlyProjections.slice(0, 10).map((projection, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">{projection.year}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{projection.monthlySIP.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{projection.annualSIP.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{projection.cumulativeInvestment.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{projection.expectedValue.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-green-600">₹{projection.returns.toLocaleString()}</td>
                    </tr>
                  ))}
                  {calculation.yearlyProjections.length > 10 && (
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-500 italic" colSpan={6}>
                        ... and {calculation.yearlyProjections.length - 10} more years
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Educational Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding Step Up SIP</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            A Step Up SIP is a systematic investment plan where you increase your monthly investment amount by a fixed percentage every year. 
            This strategy helps you build wealth more effectively by increasing your investments as your income grows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">📈 Benefits of Step Up SIP</h4>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Aligns with salary increments</li>
                <li>• Harnesses the power of compounding</li>
                <li>• Builds discipline in investing</li>
                <li>• Helps achieve long-term financial goals</li>
                <li>• Reduces the impact of inflation</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">🎯 How It Works</h4>
              <div className="text-sm text-blue-600 space-y-2">
                <div>
                  <strong>Year 1:</strong> Invest ₹10,000 monthly
                </div>
                <div>
                  <strong>Year 2:</strong> Increase by 10% to ₹11,000 monthly
                </div>
                <div>
                  <strong>Year 3:</strong> Increase by 10% to ₹12,100 monthly
                </div>
                <div>
                  <strong>And so on...</strong>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Step Up SIP vs Regular SIP</h3>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">Comparison Example</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-700">
              <div>
                <h5 className="font-semibold mb-2">Regular SIP (₹10,000 monthly)</h5>
                <ul className="text-sm space-y-1">
                  <li>• Year 1: ₹1,20,000</li>
                  <li>• Year 2: ₹1,20,000</li>
                  <li>• Year 3: ₹1,20,000</li>
                  <li>• Total: ₹3,60,000</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Step Up SIP (10% increase)</h5>
                <ul className="text-sm space-y-1">
                  <li>• Year 1: ₹1,20,000</li>
                  <li>• Year 2: ₹1,32,000</li>
                  <li>• Year 3: ₹1,45,200</li>
                  <li>• Total: ₹3,97,200</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Investment Strategies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🎯 Conservative Approach</h4>
              <p className="text-gray-700 text-sm">Start with 5-7% annual step-up, focus on debt funds and balanced funds for stable returns.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">⚖️ Moderate Approach</h4>
              <p className="text-gray-700 text-sm">Use 10-12% annual step-up with a mix of equity and debt funds for balanced growth.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🚀 Aggressive Approach</h4>
              <p className="text-gray-700 text-sm">Apply 15-20% annual step-up with equity-focused funds for maximum growth potential.</p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Tips for Successful Step Up SIP</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">💡 Planning Tips</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Align step-up with salary increments</li>
                <li>• Start with a conservative step-up rate</li>
                <li>• Review and adjust annually</li>
                <li>• Consider inflation in your calculations</li>
                <li>• Maintain emergency fund separately</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">⚠️ Important Considerations</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Ensure consistent income growth</li>
                <li>• Don&apos;t overstretch your budget</li>
                <li>• Monitor market conditions</li>
                <li>• Diversify across fund categories</li>
                <li>• Stay committed for long-term</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Ready to Start Your Step Up SIP?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our financial advisors can help you create a personalized step-up SIP strategy that aligns with your income growth and financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Start SIP Investment
              </button>
              <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                Get Investment Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
