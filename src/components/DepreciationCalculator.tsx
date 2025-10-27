'use client';

import { useState } from 'react';

interface DepreciationEntry {
  year: number;
  openingValue: number;
  depreciation: number;
  closingValue: number;
}

export default function DepreciationCalculator() {
  const [method, setMethod] = useState<'slm' | 'declining' | 'sumofyears'>('slm');
  const [assetCost, setAssetCost] = useState('');
  const [salvageValue, setSalvageValue] = useState('');
  const [salvagePercentage, setSalvagePercentage] = useState('');
  const [years, setYears] = useState('');
  const [depreciationRate, setDepreciationRate] = useState('');
  const [result, setResult] = useState<{
    depreciationSchedule: DepreciationEntry[];
    totalDepreciation: number;
    depreciationPerYear: number;
  } | null>(null);

  const calculateDepreciation = () => {
    const cost = parseFloat(assetCost);
    const yearsValue = parseFloat(years);
    const salvage = salvagePercentage ? (cost * parseFloat(salvagePercentage)) / 100 : parseFloat(salvageValue);
    const rate = parseFloat(depreciationRate);

    if (!cost || !yearsValue || (isNaN(salvage) && !salvagePercentage)) return;

    const schedule: DepreciationEntry[] = [];
    let totalDepreciation = 0;
    let depreciationPerYear = 0;

    if (method === 'slm') {
      // Straight Line Method
      depreciationPerYear = (cost - salvage) / yearsValue;
      totalDepreciation = cost - salvage;

      for (let i = 1; i <= yearsValue; i++) {
        const openingValue = i === 1 ? cost : schedule[i - 2].closingValue;
        const depreciation = depreciationPerYear;
        const closingValue = openingValue - depreciation;

        schedule.push({
          year: i,
          openingValue: Math.round(openingValue * 100) / 100,
          depreciation: Math.round(depreciation * 100) / 100,
          closingValue: Math.round(closingValue * 100) / 100
        });
      }
    } else if (method === 'declining') {
      // Declining Balance Method
      const ratePercent = rate / 100;
      let currentValue = cost;

      for (let i = 1; i <= yearsValue; i++) {
        const openingValue = currentValue;
        let depreciation = currentValue * ratePercent;
        
        // Ensure we don't depreciate below salvage value
        if (openingValue - depreciation < salvage) {
          depreciation = openingValue - salvage;
        }
        
        const closingValue = openingValue - depreciation;
        currentValue = closingValue;

        schedule.push({
          year: i,
          openingValue: Math.round(openingValue * 100) / 100,
          depreciation: Math.round(depreciation * 100) / 100,
          closingValue: Math.round(closingValue * 100) / 100
        });

        totalDepreciation += depreciation;
      }
    } else if (method === 'sumofyears') {
      // Sum of Years Digits Method
      const sumOfYears = (yearsValue * (yearsValue + 1)) / 2;
      const depreciableAmount = cost - salvage;
      let currentValue = cost;

      for (let i = 1; i <= yearsValue; i++) {
        const openingValue = currentValue;
        const factor = (yearsValue - i + 1) / sumOfYears;
        const depreciation = depreciableAmount * factor;
        const closingValue = openingValue - depreciation;
        currentValue = closingValue;

        schedule.push({
          year: i,
          openingValue: Math.round(openingValue * 100) / 100,
          depreciation: Math.round(depreciation * 100) / 100,
          closingValue: Math.round(closingValue * 100) / 100
        });

        totalDepreciation += depreciation;
      }
    }

    setResult({
      depreciationSchedule: schedule,
      totalDepreciation: Math.round(totalDepreciation * 100) / 100,
      depreciationPerYear: Math.round(depreciationPerYear * 100) / 100
    });
  };

  const resetCalculator = () => {
    setAssetCost('');
    setSalvageValue('');
    setSalvagePercentage('');
    setYears('');
    setDepreciationRate('');
    setResult(null);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate mb-6">
            Depreciation Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate asset depreciation using multiple methods and generate detailed depreciation schedules
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate mb-6">Asset Details</h3>
              
              {/* Method Selection */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Depreciation Method</h4>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => setMethod('slm')}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                      method === 'slm' 
                        ? 'bg-[#C9A34A] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">Straight Line (SLM)</div>
                    <div className="text-xs opacity-80">Equal depreciation each year</div>
                  </button>
                  <button
                    onClick={() => setMethod('declining')}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                      method === 'declining' 
                        ? 'bg-[#C9A34A] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">Declining Balance</div>
                    <div className="text-xs opacity-80">Higher depreciation in early years</div>
                  </button>
                  <button
                    onClick={() => setMethod('sumofyears')}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                      method === 'sumofyears' 
                        ? 'bg-[#C9A34A] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">Sum of Years Digits</div>
                    <div className="text-xs opacity-80">Accelerated depreciation method</div>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cost of Asset (₹)
                  </label>
                  <input
                    type="number"
                    value={assetCost}
                    onChange={(e) => setAssetCost(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter asset cost"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salvage Value
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      value={salvageValue}
                      onChange={(e) => setSalvageValue(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                      placeholder="₹ Amount"
                    />
                    <input
                      type="number"
                      value={salvagePercentage}
                      onChange={(e) => setSalvagePercentage(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                      placeholder="% of Cost"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration in Years
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter useful life in years"
                  />
                </div>

                {method === 'declining' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Depreciation Rate (%)
                    </label>
                    <input
                      type="number"
                      value={depreciationRate}
                      onChange={(e) => setDepreciationRate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                      placeholder="Enter depreciation rate"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={calculateDepreciation}
                  className="flex-1 bg-[#C9A34A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Calculate Depreciation
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex-1 border-2 border-[#C9A34A] text-[#C9A34A] px-6 py-3 rounded-xl font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-slate mb-6">Summary</h3>
              
              {result ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="text-sm text-blue-700 font-medium mb-1">Total Depreciation</div>
                    <div className="text-2xl font-bold text-blue-800">₹{result.totalDepreciation.toLocaleString()}</div>
                  </div>
                  
                  {method === 'slm' && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="text-sm text-green-700 font-medium mb-1">Depreciation per Year</div>
                      <div className="text-2xl font-bold text-green-800">₹{result.depreciationPerYear.toLocaleString()}</div>
                    </div>
                  )}
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                    <div className="text-sm text-orange-700 font-medium mb-1">Asset Life</div>
                    <div className="text-2xl font-bold text-orange-800">{result.depreciationSchedule.length} Years</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-6xl mb-4">📊</div>
                  <p className="text-gray-500">Enter asset details to see depreciation calculation</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Depreciation Schedule Table */}
        {result && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate mb-6">Depreciation Schedule</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Years</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Opening Value</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Depreciation</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Closing Value</th>
                  </tr>
                </thead>
                <tbody>
                  {result.depreciationSchedule.slice(0, 15).map((entry, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">{entry.year}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{entry.openingValue.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{entry.depreciation.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{entry.closingValue.toLocaleString()}</td>
                    </tr>
                  ))}
                  {result.depreciationSchedule.length > 15 && (
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-500 italic" colSpan={4}>
                        ... and {result.depreciationSchedule.length - 15} more years
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {result.depreciationSchedule.length > 15 && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Showing first 15 years of {result.depreciationSchedule.length} total years
                </p>
              </div>
            )}
          </div>
        )}

        {/* Educational Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding Depreciation</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Depreciation represents the reduction in value of business assets over time due to wear and tear, obsolescence, and usage. 
            It&apos;s a crucial accounting concept that helps businesses accurately reflect the true value of their assets and spread the cost 
            of expensive equipment over their useful life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">📏 Straight Line Method</h4>
              <p className="text-blue-700 mb-3">
                Equal depreciation expense each year throughout the asset&apos;s useful life.
              </p>
              <p className="text-sm text-blue-600">
                <strong>Formula:</strong> (Cost - Salvage Value) ÷ Useful Life
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">📉 Declining Balance</h4>
              <p className="text-green-700 mb-3">
                Higher depreciation in early years, decreasing over time.
              </p>
              <p className="text-sm text-green-600">
                <strong>Formula:</strong> Current Value × Depreciation Rate
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">🔢 Sum of Years Digits</h4>
              <p className="text-purple-700 mb-3">
                Accelerated depreciation with decreasing amounts each year.
              </p>
              <p className="text-sm text-purple-600">
                <strong>Formula:</strong> (Cost - Salvage) × (Remaining Life ÷ Sum of Years)
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">How Does a Depreciation Calculator Work?</h3>
          
          <p className="text-lg text-gray-700 mb-6">
            A depreciation calculator automates complex calculations by taking into account key variables such as asset cost, 
            salvage value (estimated worth at end of useful life), useful life in years, and the chosen depreciation method. 
            It generates detailed year-by-year schedules showing opening values, depreciation amounts, and closing values.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-slate mb-3">Step-by-Step Process:</h4>
            <ol className="space-y-3 text-gray-700">
              <li><strong>Select Method:</strong> Choose between Straight Line, Declining Balance, or Sum of Years Digits</li>
              <li><strong>Enter Asset Cost:</strong> Input the original purchase price of the asset</li>
              <li><strong>Set Salvage Value:</strong> Specify the estimated value at the end of useful life</li>
              <li><strong>Define Useful Life:</strong> Enter the number of years the asset will be used</li>
              <li><strong>Calculate:</strong> Get instant depreciation schedule and annual amounts</li>
            </ol>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Practical Example</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Scenario:</strong> A business purchases machinery for ₹1,00,000 with a 5-year useful life and ₹10,000 salvage value.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Straight Line:</strong> Annual depreciation = (₹1,00,000 - ₹10,000) ÷ 5 = ₹18,000</p>
              <p><strong>Declining Balance (20%):</strong> Year 1 = ₹20,000, Year 2 = ₹16,000, etc.</p>
              <p><strong>Sum of Years:</strong> Year 1 = ₹30,000, Year 2 = ₹24,000, etc.</p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Benefits of Using a Depreciation Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">⚡ Time & Accuracy</h4>
              <p className="text-gray-700">Eliminates manual calculation errors and saves significant time on complex depreciation schedules.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📊 Financial Planning</h4>
              <p className="text-gray-700">Helps with accurate financial reporting and tax planning by providing precise depreciation figures.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🔄 Method Comparison</h4>
              <p className="text-gray-700">Easily compare different depreciation methods to choose the most suitable approach for your business.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📈 Business Insights</h4>
              <p className="text-gray-700">Provides detailed schedules for better asset management and replacement planning decisions.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Need Professional Asset Management?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our expert Chartered Accountants can help you optimize your depreciation strategies and ensure compliance with accounting standards for maximum tax benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Asset Management Consultation
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
