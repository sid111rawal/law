'use client';

import { useState } from 'react';

interface Asset {
  id: string;
  name: string;
  value: number;
  category: string;
}

interface Liability {
  id: string;
  name: string;
  value: number;
  category: string;
}

interface YearlyProjection {
  year: number;
  assets: number;
  liabilities: number;
  netWorth: number;
}

export default function NetWorthCalculator() {
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', name: 'Cash & Bank Accounts', value: 0, category: 'Liquid Assets' },
    { id: '2', name: 'Investments (Stocks, Mutual Funds)', value: 0, category: 'Investments' },
    { id: '3', name: 'Real Estate Property', value: 0, category: 'Real Estate' },
    { id: '4', name: 'Gold & Jewelry', value: 0, category: 'Precious Metals' },
    { id: '5', name: 'Vehicles', value: 0, category: 'Vehicles' },
    { id: '6', name: 'Other Assets', value: 0, category: 'Other' }
  ]);

  const [liabilities, setLiabilities] = useState<Liability[]>([
    { id: '1', name: 'Home Loan', value: 0, category: 'Home Loan' },
    { id: '2', name: 'Personal Loan', value: 0, category: 'Personal Loan' },
    { id: '3', name: 'Credit Card Dues', value: 0, category: 'Credit Card' },
    { id: '4', name: 'Car Loan', value: 0, category: 'Vehicle Loan' },
    { id: '5', name: 'Income Tax Due', value: 0, category: 'Taxes' },
    { id: '6', name: 'Other Liabilities', value: 0, category: 'Other' }
  ]);

  const [assetGrowthRate, setAssetGrowthRate] = useState('');
  const [liabilityGrowthRate, setLiabilityGrowthRate] = useState('');
  const [projectionYears, setProjectionYears] = useState('');
  const [projections, setProjections] = useState<YearlyProjection[]>([]);

  const updateAsset = (id: string, value: number) => {
    setAssets(assets.map(asset => 
      asset.id === id ? { ...asset, value } : asset
    ));
  };

  const updateLiability = (id: string, value: number) => {
    setLiabilities(liabilities.map(liability => 
      liability.id === id ? { ...liability, value } : liability
    ));
  };


  const calculateProjections = () => {
    const assetRate = parseFloat(assetGrowthRate) / 100;
    const liabilityRate = parseFloat(liabilityGrowthRate) / 100;
    const years = parseInt(projectionYears);

    if (!assetRate && !liabilityRate && !years) return;

    const currentAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
    const currentLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);

    const newProjections: YearlyProjection[] = [];
    let projectedAssets = currentAssets;
    let projectedLiabilities = currentLiabilities;

    for (let year = 1; year <= years; year++) {
      projectedAssets = projectedAssets * (1 + assetRate);
      projectedLiabilities = projectedLiabilities * (1 + liabilityRate);
      
      newProjections.push({
        year,
        assets: Math.round(projectedAssets * 100) / 100,
        liabilities: Math.round(projectedLiabilities * 100) / 100,
        netWorth: Math.round((projectedAssets - projectedLiabilities) * 100) / 100
      });
    }

    setProjections(newProjections);
  };

  const resetCalculator = () => {
    setAssets(assets.map(asset => ({ ...asset, value: 0 })));
    setLiabilities(liabilities.map(liability => ({ ...liability, value: 0 })));
    setAssetGrowthRate('');
    setLiabilityGrowthRate('');
    setProjectionYears('');
    setProjections([]);
  };

  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Net Worth Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your current net worth and project future financial growth with detailed asset and liability tracking
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Assets Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Assets</h3>
            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">{asset.name}</label>
                    <span className="text-xs text-gray-500">{asset.category}</span>
                  </div>
                  <input
                    type="number"
                    value={asset.value || ''}
                    onChange={(e) => updateAsset(asset.id, parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter value in ₹"
                  />
                </div>
              ))}
            </div>
          </div>

            {/* Liabilities Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Liabilities</h3>
            <div className="space-y-4">
              {liabilities.map((liability) => (
                <div key={liability.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-gray-700">{liability.name}</label>
                    <span className="text-xs text-gray-500">{liability.category}</span>
                  </div>
                  <input
                    type="number"
                    value={liability.value || ''}
                    onChange={(e) => updateLiability(liability.id, parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter value in ₹"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Current Net Worth Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-serif font-bold text-slate mb-6 text-center">Your Net Worth</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-sm text-gray-600 mb-2">Total Assets</div>
              <div className="text-3xl font-bold text-green-600">₹{totalAssets.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-sm text-gray-600 mb-2">Total Liabilities</div>
              <div className="text-3xl font-bold text-red-600">₹{totalLiabilities.toLocaleString()}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-sm text-gray-600 mb-2">Net Worth</div>
              <div className={`text-3xl font-bold ${netWorth >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                ₹{netWorth.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Growth Projections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate mb-6">Expected Growth Projections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Assets Growth (%)
              </label>
              <input
                type="number"
                value={assetGrowthRate}
                onChange={(e) => setAssetGrowthRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                placeholder="Enter growth rate"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Liability Growth (%)
              </label>
              <input
                type="number"
                value={liabilityGrowthRate}
                onChange={(e) => setLiabilityGrowthRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                placeholder="Enter growth rate"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Years
              </label>
              <input
                type="number"
                value={projectionYears}
                onChange={(e) => setProjectionYears(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                placeholder="Enter years"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={calculateProjections}
              className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Calculate Projections
            </button>
            <button
              onClick={resetCalculator}
              className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
            >
              Reset All
            </button>
          </div>
        </div>

        {/* Year-wise Growth Table */}
        {projections.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-serif font-bold text-slate mb-6">Year Wise Growth</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Year</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Assets</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Liabilities</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Net Worth</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.slice(0, 10).map((projection, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700">{projection.year}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{projection.assets.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">₹{projection.liabilities.toLocaleString()}</td>
                      <td className={`px-4 py-3 text-sm font-semibold ${projection.netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{projection.netWorth.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {projections.length > 10 && (
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-500 italic" colSpan={4}>
                        ... and {projections.length - 10} more years
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
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding Net Worth</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Net worth represents the total value of all assets owned minus all liabilities. It&apos;s a crucial financial metric that provides 
            a clear picture of your overall financial health and serves as a foundation for financial planning and goal setting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">📈 Assets</h4>
              <p className="text-green-700 mb-3">
                <strong>Assets</strong> are resources that provide financial value and can include:
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Cash and bank accounts</li>
                <li>• Investments (stocks, mutual funds, bonds)</li>
                <li>• Real estate properties</li>
                <li>• Gold and jewelry</li>
                <li>• Vehicles and equipment</li>
                <li>• Business ownership</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">📉 Liabilities</h4>
              <p className="text-red-700 mb-3">
                <strong>Liabilities</strong> are financial obligations that drain resources:
              </p>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• Home loans and mortgages</li>
                <li>• Personal and car loans</li>
                <li>• Credit card debt</li>
                <li>• Income tax dues</li>
                <li>• Other outstanding debts</li>
                <li>• Business loans</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Net Worth Calculation Formula</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Net Worth = Total Assets - Total Liabilities</strong>
            </p>
            <p className="text-gray-600">
              This simple formula helps you understand your financial position. A positive net worth indicates you own more than you owe, 
              while a negative net worth means you owe more than you own.
            </p>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Practical Example</h3>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Example:</strong> Mr. Sharma&apos;s financial position:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Assets:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Cash & Bank: ₹2,00,000</li>
                  <li>• Investments: ₹5,00,000</li>
                  <li>• Property: ₹15,00,000</li>
                  <li>• Gold: ₹3,00,000</li>
                  <li><strong>Total Assets: ₹25,00,000</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Liabilities:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Home Loan: ₹8,00,000</li>
                  <li>• Personal Loan: ₹2,00,000</li>
                  <li>• Credit Card: ₹50,000</li>
                  <li><strong>Total Liabilities: ₹10,50,000</strong></li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded-lg">
              <p className="text-lg font-semibold text-blue-800">
                {`Net Worth = ₹25,00,000 - ₹10,50,000 = ₹14,50,000`}
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Benefits of Tracking Net Worth</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🎯 Financial Goal Setting</h4>
              <p className="text-gray-700">Use your current net worth as a baseline to set realistic financial goals and track progress over time.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📊 Portfolio Optimization</h4>
              <p className="text-gray-700">Identify opportunities to rebalance your assets and reduce liabilities for better financial health.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🔮 Future Planning</h4>
              <p className="text-gray-700">Project your net worth growth to plan for retirement, major purchases, or wealth building strategies.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">💡 Risk Management</h4>
              <p className="text-gray-700">Understand your financial position to make informed decisions about investments and debt management.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Need Professional Financial Planning?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our expert financial advisors can help you optimize your net worth, create comprehensive wealth-building strategies, and plan for your financial future.
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
