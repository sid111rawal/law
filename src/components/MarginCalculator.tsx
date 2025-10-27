'use client';

import { useState } from 'react';

export default function MarginCalculator() {
  const [calculationMode, setCalculationMode] = useState<'revenue' | 'markup' | 'margin'>('revenue');
  
  // Revenue/Cost mode
  const [revenue, setRevenue] = useState('');
  const [cost, setCost] = useState('');
  const [profit, setProfit] = useState('');
  
  // Markup mode
  const [markupCost, setMarkupCost] = useState('');
  const [markupPercentage, setMarkupPercentage] = useState('');
  
  // Margin mode
  const [marginCost, setMarginCost] = useState('');
  const [marginPercentage, setMarginPercentage] = useState('');
  
  const [result, setResult] = useState<{
    profitMargin: number;
    grossProfit: number;
    costPercentage: number;
    sellingPrice?: number;
    markupAmount?: number;
    marginAmount?: number;
  } | null>(null);

  const calculateMargin = () => {
    if (calculationMode === 'revenue') {
      const revenueValue = parseFloat(revenue);
      const costValue = parseFloat(cost);
      const profitValue = parseFloat(profit);

      if (revenueValue && costValue) {
        const grossProfit = revenueValue - costValue;
        const profitMargin = (grossProfit / revenueValue) * 100;
        const costPercentage = (costValue / revenueValue) * 100;
        
        setResult({
          profitMargin: Math.round(profitMargin * 100) / 100,
          grossProfit: Math.round(grossProfit * 100) / 100,
          costPercentage: Math.round(costPercentage * 100) / 100
        });
      } else if (revenueValue && profitValue) {
        const cost = revenueValue - profitValue;
        const profitMargin = (profitValue / revenueValue) * 100;
        const costPercentage = (cost / revenueValue) * 100;
        
        setResult({
          profitMargin: Math.round(profitMargin * 100) / 100,
          grossProfit: Math.round(profitValue * 100) / 100,
          costPercentage: Math.round(costPercentage * 100) / 100
        });
      }
    } else if (calculationMode === 'markup') {
      const costValue = parseFloat(markupCost);
      const markupPercent = parseFloat(markupPercentage);

      if (costValue && markupPercent) {
        const markupAmount = (costValue * markupPercent) / 100;
        const sellingPrice = costValue + markupAmount;
        const profitMargin = (markupAmount / sellingPrice) * 100;
        
        setResult({
          profitMargin: Math.round(profitMargin * 100) / 100,
          grossProfit: Math.round(markupAmount * 100) / 100,
          costPercentage: Math.round((costValue / sellingPrice) * 100 * 100) / 100,
          sellingPrice: Math.round(sellingPrice * 100) / 100,
          markupAmount: Math.round(markupAmount * 100) / 100
        });
      }
    } else if (calculationMode === 'margin') {
      const costValue = parseFloat(marginCost);
      const marginPercent = parseFloat(marginPercentage);

      if (costValue && marginPercent) {
        const sellingPrice = costValue / (1 - marginPercent / 100);
        const marginAmount = sellingPrice - costValue;
        const markupPercentage = (marginAmount / costValue) * 100;
        
        setResult({
          profitMargin: Math.round(marginPercent * 100) / 100,
          grossProfit: Math.round(marginAmount * 100) / 100,
          costPercentage: Math.round((costValue / sellingPrice) * 100 * 100) / 100,
          sellingPrice: Math.round(sellingPrice * 100) / 100,
          marginAmount: Math.round(marginAmount * 100) / 100,
          markupAmount: Math.round(markupPercentage * 100) / 100
        });
      }
    }
  };

  const resetCalculator = () => {
    setRevenue('');
    setCost('');
    setProfit('');
    setMarkupCost('');
    setMarkupPercentage('');
    setMarginCost('');
    setMarginPercentage('');
    setResult(null);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate mb-6">
            Margin Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your profit margins instantly and optimize your business pricing strategy
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate mb-6">Enter Your Values</h3>
              
              {/* Mode Toggle */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Calculation Mode</h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCalculationMode('revenue')}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      calculationMode === 'revenue' 
                        ? 'bg-[#C9A34A] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Revenue/Cost
                  </button>
                  <button
                    onClick={() => setCalculationMode('markup')}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      calculationMode === 'markup' 
                        ? 'bg-[#C9A34A] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Markup
                  </button>
                  <button
                    onClick={() => setCalculationMode('margin')}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      calculationMode === 'margin' 
                        ? 'bg-[#C9A34A] text-white shadow-md' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Margin
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Revenue/Cost Mode */}
                {calculationMode === 'revenue' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Revenue/Selling Price (₹)
                      </label>
                      <input
                        type="number"
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter total revenue"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cost of Goods Sold (₹)
                      </label>
                      <input
                        type="number"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter total cost"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profit (₹) - Optional
                      </label>
                      <input
                        type="number"
                        value={profit}
                        onChange={(e) => setProfit(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter profit (if known)"
                      />
                    </div>
                  </>
                )}

                {/* Markup Mode */}
                {calculationMode === 'markup' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cost (₹)
                      </label>
                      <input
                        type="number"
                        value={markupCost}
                        onChange={(e) => setMarkupCost(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter cost price"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Markup Percentage (%)
                      </label>
                      <input
                        type="number"
                        value={markupPercentage}
                        onChange={(e) => setMarkupPercentage(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter markup percentage"
                      />
                    </div>
                  </>
                )}

                {/* Margin Mode */}
                {calculationMode === 'margin' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cost (₹)
                      </label>
                      <input
                        type="number"
                        value={marginCost}
                        onChange={(e) => setMarginCost(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter cost price"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Margin Percentage (%)
                      </label>
                      <input
                        type="number"
                        value={marginPercentage}
                        onChange={(e) => setMarginPercentage(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter margin percentage"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={calculateMargin}
                  className="flex-1 bg-[#C9A34A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Calculate Margin
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
              <h3 className="text-2xl font-bold text-slate mb-6">Results</h3>
              
              {result ? (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="text-sm text-green-700 font-medium mb-1">Profit Margin</div>
                    <div className="text-3xl font-bold text-green-800">{result.profitMargin}%</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="text-sm text-blue-700 font-medium mb-1">Gross Profit</div>
                    <div className="text-2xl font-bold text-blue-800">₹{result.grossProfit.toLocaleString()}</div>
                  </div>
                  
                  {result.sellingPrice && (
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                      <div className="text-sm text-purple-700 font-medium mb-1">Selling Price</div>
                      <div className="text-2xl font-bold text-purple-800">₹{result.sellingPrice.toLocaleString()}</div>
                    </div>
                  )}
                  
                  {result.markupAmount && (
                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                      <div className="text-sm text-indigo-700 font-medium mb-1">Markup Amount</div>
                      <div className="text-2xl font-bold text-indigo-800">₹{result.markupAmount.toLocaleString()}</div>
                    </div>
                  )}
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                    <div className="text-sm text-orange-700 font-medium mb-1">Cost Percentage</div>
                    <div className="text-2xl font-bold text-orange-800">{result.costPercentage}%</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-6xl mb-4">📊</div>
                  <p className="text-gray-500">Enter your values to see the results</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding Profit Calculations</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Profit calculations are essential for business success, and understanding the difference between markup and margin is crucial for accurate pricing strategies. 
            While both metrics help determine profitability, they serve different purposes in business decision-making and can significantly impact your pricing approach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">📈 Markup Calculation</h4>
              <p className="text-blue-700 mb-3">
                <strong>Markup</strong> is the percentage added to the cost price to determine the selling price. 
                It&apos;s calculated as: <code className="bg-white px-2 py-1 rounded">Markup % = (Profit / Cost) × 100</code>
              </p>
              <p className="text-sm text-blue-600">
                Example: If cost is ₹100 and markup is 50%, selling price = ₹150
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">💰 Margin Calculation</h4>
              <p className="text-green-700 mb-3">
                <strong>Margin</strong> is the percentage of profit relative to the selling price. 
                It&apos;s calculated as: <code className="bg-white px-2 py-1 rounded">Margin % = (Profit / Selling Price) × 100</code>
              </p>
              <p className="text-sm text-green-600">
                Example: If selling price is ₹150 and margin is 33.33%, profit = ₹50
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            A strong profit margin percentage indicates robust profitability and suggests that your business can generate substantial earnings 
            from its core operations. Conversely, a low profit margin percentage may signal inefficiencies in cost control, inadequate pricing strategies, 
            or intense market competition that requires immediate attention.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Regular monitoring of profit margin percentages enables businesses to identify trends, anticipate potential challenges, 
            and adapt their strategies accordingly to maintain or enhance profitability. Profit margin percentages vary significantly across industries, 
            reflecting the unique dynamics, competitive landscapes, and cost structures inherent to each sector. Therefore, benchmarking against 
            industry peers provides valuable insights into your company&apos;s relative performance and market position.
          </p>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">What is a Margin Calculator?</h3>
          
          <p className="text-lg text-gray-700 mb-6">
            A Margin Calculator is an essential business tool designed to determine the profit margin percentage of products or services. 
            It typically requires inputting the cost of goods sold (COGS) or total costs associated with producing or acquiring the product/service, 
            along with the selling price or revenue generated from its sale. The calculator then computes the profit margin percentage by subtracting 
            the total costs from the revenue, dividing the result by the revenue, and multiplying by 100 to express it as a percentage.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            This powerful tool allows businesses to quickly assess their profitability and adjust pricing or cost structures as needed 
            to optimize margins. Margin calculators are widely used across various industries to analyze pricing strategies, evaluate product 
            profitability, and make informed decisions regarding cost management and revenue generation.
          </p>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">How to Calculate Profit Margin?</h3>
          
          <p className="text-lg text-gray-700 mb-4">
            Calculating profit margin involves several systematic steps to determine the percentage of profit generated from the sale of products or services:
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-slate mb-3">Step-by-Step Process:</h4>
            <ol className="space-y-3 text-gray-700">
              <li><strong>Determine Revenue (Sales):</strong> Identify the total revenue generated from sales during a specific period.</li>
              <li><strong>Calculate Cost of Goods Sold (COGS):</strong> Determine direct costs including raw materials, labor, and manufacturing overhead.</li>
              <li><strong>Calculate Gross Profit:</strong> Subtract COGS from total revenue using the formula: <code className="bg-white px-2 py-1 rounded">Gross Profit = Revenue - COGS</code></li>
              <li><strong>Calculate Profit Margin Percentage:</strong> Divide gross profit by revenue and multiply by 100: <code className="bg-white px-2 py-1 rounded">Profit Margin % = (Gross Profit / Revenue) × 100</code></li>
            </ol>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Practical Example</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Scenario:</strong> A company generates ₹150,000 in revenue from selling products. The total cost of goods sold amounts to ₹90,000.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Step 1:</strong> Gross Profit = ₹150,000 - ₹90,000 = ₹60,000</p>
              <p><strong>Step 2:</strong> Profit Margin Percentage = (₹60,000 / ₹150,000) × 100 = 40%</p>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              <strong>Result:</strong> The company&apos;s profit margin is 40%, meaning 40% of every rupee of revenue represents profit after accounting for production costs.
            </p>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Benefits of Using a Margin Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">⚡ Quick & Accurate Calculations</h4>
              <p className="text-gray-700">Eliminate manual computation errors and get instant, precise profit margin calculations.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">💰 Efficient Pricing Strategies</h4>
              <p className="text-gray-700">Make informed pricing decisions to ensure competitive positioning while maintaining desired profit levels.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📊 Cost Management</h4>
              <p className="text-gray-700">Evaluate cost-effectiveness of operations and identify areas for cost reduction to improve profitability.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🎯 Strategic Planning</h4>
              <p className="text-gray-700">Forecast future profits based on different pricing scenarios and cost structures for better resource allocation.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Need Professional Financial Guidance?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our expert team of Chartered Accountants can help you optimize your profit margins and develop comprehensive financial strategies for sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Expert Consultation
              </button>
              <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
