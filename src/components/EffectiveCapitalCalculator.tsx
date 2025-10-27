'use client';

import { useState } from 'react';

interface EffectiveCapitalCalculation {
  additions: number;
  deductions: number;
  total: number;
  debtToEquity: number | null;
  tangibleNetWorth: number;
  status: 'healthy' | 'caution' | 'negative';
  statusText: string;
}

interface CalculationInputs {
  paidCapital: number;
  sharePremium: number;
  reserves: number;
  ltLoans: number;
  deposits: number;
  investments: number;
  investType: 'nonstrategic' | 'strategic';
  accLosses: number;
  prelim: number;
  mode: 'conservative' | 'operating';
}

export default function EffectiveCapitalCalculator() {
  const [mode, setMode] = useState<'conservative' | 'operating'>('conservative');
  const [showScenario, setShowScenario] = useState(false);
  const [inputs, setInputs] = useState<CalculationInputs>({
    paidCapital: 1000000,
    sharePremium: 200000,
    reserves: 300000,
    ltLoans: 500000,
    deposits: 100000,
    investments: 200000,
    investType: 'nonstrategic',
    accLosses: 400000,
    prelim: 50000,
    mode: 'conservative'
  });

  const calculateEffectiveCapital = (inputData: CalculationInputs): EffectiveCapitalCalculation => {
    // Build additions
    let additions = inputData.paidCapital + inputData.sharePremium + inputData.reserves + 
                   inputData.ltLoans + inputData.deposits;

    // Investments handling
    const includeInvestments = (inputData.mode === 'operating' && inputData.investType === 'strategic');
    if (includeInvestments) {
      additions += inputData.investments;
    }

    // Deductions
    let deductions = inputData.accLosses + inputData.prelim;
    // Conservative mode & non-strategic investments => subtract investments
    if (inputData.mode === 'conservative' && inputData.investType === 'nonstrategic') {
      deductions += inputData.investments;
    }

    const total = additions - deductions;

    // Calculate ratios
    const equity = inputData.paidCapital + inputData.reserves + inputData.sharePremium;
    const debtToEquity = equity > 0 ? inputData.ltLoans / equity : null;

    // Determine status
    let status: 'healthy' | 'caution' | 'negative';
    let statusText: string;

    if (total < 0) {
      status = 'negative';
      statusText = 'Negative effective capital';
    } else if (total < (additions * 0.2)) {
      status = 'caution';
      statusText = 'Low effective capital — caution';
    } else {
      status = 'healthy';
      statusText = 'Healthy effective capital';
    }

    return {
      additions,
      deductions,
      total,
      debtToEquity,
      tangibleNetWorth: total,
      status,
      statusText
    };
  };

  const updateInput = (field: keyof CalculationInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value
    }));
  };

  const resetCalculator = () => {
    setInputs({
      paidCapital: 0,
      sharePremium: 0,
      reserves: 0,
      ltLoans: 0,
      deposits: 0,
      investments: 0,
      investType: 'nonstrategic',
      accLosses: 0,
      prelim: 0,
      mode: 'conservative'
    });
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const result = calculateEffectiveCapital({ ...inputs, mode });
  
  // Calculate alternate scenario
  const altInputs = {
    ...inputs,
    investType: inputs.investType === 'nonstrategic' ? 'strategic' as const : 'nonstrategic' as const,
    mode: inputs.mode === 'conservative' ? 'operating' as const : 'conservative' as const
  };
  const altResult = calculateEffectiveCapital(altInputs);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'caution': return 'bg-yellow-500';
      case 'negative': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getBarColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'caution': return 'bg-yellow-500';
      case 'negative': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Effective Capital Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate effective capital using conservative (lender-focused) and operating (management) perspectives. 
            Get comprehensive financial analysis with scenario comparisons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-sm text-gray-600 mb-2">Choose Formula</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setMode('conservative')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      mode === 'conservative'
                        ? 'bg-[#C9A34A] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Conservative (Lender)
                  </button>
                  <button
                    onClick={() => setMode('operating')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      mode === 'operating'
                        ? 'bg-[#C9A34A] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Operating (Management)
                  </button>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-2">Scenario Compare</div>
                <div className="flex items-center justify-end">
                  <label className="flex items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showScenario}
                      onChange={(e) => setShowScenario(e.target.checked)}
                      className="mr-2 h-4 w-4 text-[#C9A34A] focus:ring-[#C9A34A] border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Show alternate scenario</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Addable Items */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Addable Items</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Paid-up Share Capital</label>
                  <input
                    type="number"
                    value={inputs.paidCapital}
                    onChange={(e) => updateInput('paidCapital', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Share Premium</label>
                  <input
                    type="number"
                    value={inputs.sharePremium}
                    onChange={(e) => updateInput('sharePremium', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Reserves & Surplus</label>
                  <input
                    type="number"
                    value={inputs.reserves}
                    onChange={(e) => updateInput('reserves', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Long-term Loans</label>
                  <input
                    type="number"
                    value={inputs.ltLoans}
                    onChange={(e) => updateInput('ltLoans', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Long-term Deposits</label>
                  <input
                    type="number"
                    value={inputs.deposits}
                    onChange={(e) => updateInput('deposits', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* Investments */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Investments</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Investments (Total)</label>
                  <input
                    type="number"
                    value={inputs.investments}
                    onChange={(e) => updateInput('investments', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Investment Type</label>
                  <select
                    value={inputs.investType}
                    onChange={(e) => updateInput('investType', e.target.value as 'nonstrategic' | 'strategic')}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  >
                    <option value="nonstrategic">Non-strategic / Marketable (exclude conservative)</option>
                    <option value="strategic">Strategic / Long-term (include)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Deductions / Reductions</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Accumulated / B/F Losses</label>
                  <input
                    type="number"
                    value={inputs.accLosses}
                    onChange={(e) => updateInput('accLosses', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-48 text-sm font-medium text-gray-700">Preliminary / Deferred Expenses</label>
                  <input
                    type="number"
                    value={inputs.prelim}
                    onChange={(e) => updateInput('prelim', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-6">
              Tip: Switch between Conservative and Operating mode to see lender vs management view.
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {}} // Auto-calculates on input change
                className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Calculate
              </button>
              <button
                onClick={resetCalculator}
                className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Effective Capital (Live)</div>
              <div className="text-4xl font-bold text-slate mb-4">
                {formatCurrency(result.total)}
              </div>
              <div className={`inline-block px-4 py-2 rounded-lg text-white text-sm font-semibold mb-6 ${getStatusColor(result.status)}`}>
                {result.statusText}
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-sm text-green-600 mb-1">Additions</div>
                    <div className="text-lg font-bold text-green-700">
                      {formatCurrency(result.additions)}
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="text-sm text-red-600 mb-1">Deductions</div>
                    <div className="text-lg font-bold text-red-700">
                      {formatCurrency(result.deductions)}
                    </div>
                  </div>
                </div>

                {/* Visual Bar */}
                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-2">Visual — Proportion</div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${getBarColor(result.status)}`}
                      style={{
                        width: `${Math.max(0, Math.min(100, (result.total / result.additions) * 100))}%`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Ratios */}
                <div className="mt-6 space-y-2">
                  <div className="text-sm text-gray-600">
                    <strong>Debt-to-Equity:</strong> {result.debtToEquity ? result.debtToEquity.toFixed(2) : 'N/A'}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Tangible Net Worth:</strong> {formatCurrency(result.tangibleNetWorth)}
                  </div>
                </div>
              </div>

              {/* Alternate Scenario */}
              {showScenario && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Alternate Scenario</div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-slate">
                      {formatCurrency(altResult.total)}
                    </div>
                    <div className="text-sm text-gray-600">
                      Difference: <strong>{formatCurrency(altResult.total - result.total)}</strong>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${getBarColor(altResult.status)}`}
                      style={{
                        width: `${Math.max(0, Math.min(100, (altResult.total / altResult.additions) * 100))}%`
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">About Effective Capital</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              This calculator shows Effective Capital using two selectable perspectives:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Conservative (Lender-focused)</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• Excludes non-strategic investments</li>
                  <li>• Treats accumulated losses as reductions</li>
                  <li>• Treats deferred expenses as reductions</li>
                  <li>• More stringent capital assessment</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Operating (Management View)</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>• Includes strategic investments as available capital</li>
                  <li>• More flexible capital assessment</li>
                  <li>• Reflects operational reality</li>
                  <li>• Better for internal planning</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Important Note</h4>
              <p className="text-yellow-700">
                This tool provides quick guidance only. For certified bank submissions or ROC filings, 
                consult Lawgical Station for professional assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
