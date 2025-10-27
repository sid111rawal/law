'use client';

import { useState } from 'react';

interface NetProfitCalculation {
  netProfitBeforeTax: number;
  adjustments: {
    lossOnSaleOfFixedAssets: number;
    provisionForDoubtfulDebts: number;
    charityDonations: number;
    miscExpenses: number;
    fixedAssetsWrittenOff: number;
    amortizationOfLeaseHoldLand: number;
    newsPrintClaimWrittenOff: number;
    amalgamationExpensesWrittenOff: number;
    discountOnCommercialPapers: number;
    changeInCarryingAmount: number;
    compensationDamagesPayments: number;
    otherExpenses: number;
  };
  profits: {
    profitOnPremiumIssueOfShares: number;
    profitOnSaleOfForfeitedShares: number;
    profitOfCapitalNature: number;
    profitFromSaleOfImmovableProperty: number;
    changeInCarryingAmountProfit: number;
  };
  netProfit: number;
}

export default function NetProfitCalculator() {
  const [netProfitBeforeTax, setNetProfitBeforeTax] = useState('');
  const [lossOnSaleOfFixedAssets, setLossOnSaleOfFixedAssets] = useState('');
  const [provisionForDoubtfulDebts, setProvisionForDoubtfulDebts] = useState('');
  const [charityDonations, setCharityDonations] = useState('');
  const [miscExpenses, setMiscExpenses] = useState('');
  const [fixedAssetsWrittenOff, setFixedAssetsWrittenOff] = useState('');
  const [amortizationOfLeaseHoldLand, setAmortizationOfLeaseHoldLand] = useState('');
  const [newsPrintClaimWrittenOff, setNewsPrintClaimWrittenOff] = useState('');
  const [amalgamationExpensesWrittenOff, setAmalgamationExpensesWrittenOff] = useState('');
  const [discountOnCommercialPapers, setDiscountOnCommercialPapers] = useState('');
  const [changeInCarryingAmount, setChangeInCarryingAmount] = useState('');
  const [compensationDamagesPayments, setCompensationDamagesPayments] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');
  const [profitOnPremiumIssueOfShares, setProfitOnPremiumIssueOfShares] = useState('');
  const [profitOnSaleOfForfeitedShares, setProfitOnSaleOfForfeitedShares] = useState('');
  const [profitOfCapitalNature, setProfitOfCapitalNature] = useState('');
  const [profitFromSaleOfImmovableProperty, setProfitFromSaleOfImmovableProperty] = useState('');
  const [changeInCarryingAmountProfit, setChangeInCarryingAmountProfit] = useState('');
  
  const [calculation, setCalculation] = useState<NetProfitCalculation | null>(null);

  const calculateNetProfit = () => {
    const netProfitBeforeTaxValue = parseFloat(netProfitBeforeTax) || 0;
    
    const adjustments = {
      lossOnSaleOfFixedAssets: parseFloat(lossOnSaleOfFixedAssets) || 0,
      provisionForDoubtfulDebts: parseFloat(provisionForDoubtfulDebts) || 0,
      charityDonations: parseFloat(charityDonations) || 0,
      miscExpenses: parseFloat(miscExpenses) || 0,
      fixedAssetsWrittenOff: parseFloat(fixedAssetsWrittenOff) || 0,
      amortizationOfLeaseHoldLand: parseFloat(amortizationOfLeaseHoldLand) || 0,
      newsPrintClaimWrittenOff: parseFloat(newsPrintClaimWrittenOff) || 0,
      amalgamationExpensesWrittenOff: parseFloat(amalgamationExpensesWrittenOff) || 0,
      discountOnCommercialPapers: parseFloat(discountOnCommercialPapers) || 0,
      changeInCarryingAmount: parseFloat(changeInCarryingAmount) || 0,
      compensationDamagesPayments: parseFloat(compensationDamagesPayments) || 0,
      otherExpenses: parseFloat(otherExpenses) || 0,
    };

    const profits = {
      profitOnPremiumIssueOfShares: parseFloat(profitOnPremiumIssueOfShares) || 0,
      profitOnSaleOfForfeitedShares: parseFloat(profitOnSaleOfForfeitedShares) || 0,
      profitOfCapitalNature: parseFloat(profitOfCapitalNature) || 0,
      profitFromSaleOfImmovableProperty: parseFloat(profitFromSaleOfImmovableProperty) || 0,
      changeInCarryingAmountProfit: parseFloat(changeInCarryingAmountProfit) || 0,
    };

    // Calculate total adjustments (expenses to be added back)
    const totalAdjustments = Object.values(adjustments).reduce((sum, value) => sum + value, 0);
    
    // Calculate total profits (to be added)
    const totalProfits = Object.values(profits).reduce((sum, value) => sum + value, 0);

    // Net Profit = Net Profit before Tax + Adjustments + Profits
    const netProfit = netProfitBeforeTaxValue + totalAdjustments + totalProfits;

    setCalculation({
      netProfitBeforeTax: netProfitBeforeTaxValue,
      adjustments,
      profits,
      netProfit
    });
  };

  const resetCalculator = () => {
    setNetProfitBeforeTax('');
    setLossOnSaleOfFixedAssets('');
    setProvisionForDoubtfulDebts('');
    setCharityDonations('');
    setMiscExpenses('');
    setFixedAssetsWrittenOff('');
    setAmortizationOfLeaseHoldLand('');
    setNewsPrintClaimWrittenOff('');
    setAmalgamationExpensesWrittenOff('');
    setDiscountOnCommercialPapers('');
    setChangeInCarryingAmount('');
    setCompensationDamagesPayments('');
    setOtherExpenses('');
    setProfitOnPremiumIssueOfShares('');
    setProfitOnSaleOfForfeitedShares('');
    setProfitOfCapitalNature('');
    setProfitFromSaleOfImmovableProperty('');
    setChangeInCarryingAmountProfit('');
    setCalculation(null);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Net Profit Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your net profit with comprehensive adjustments for provisions, expenses, and capital gains. Perfect for tax planning and financial analysis.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Calculate Net Profit</h3>
              
              <div className="space-y-6">
                {/* Net Profit Before Tax */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Net Profit before Tax (₹)
                  </label>
                  <input
                    type="number"
                    value={netProfitBeforeTax}
                    onChange={(e) => setNetProfitBeforeTax(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                    placeholder="Enter net profit before tax"
                  />
                </div>

                {/* Adjustments Section */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Adjustments (Add Back)</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Loss on Sale of Fixed Assets/Undertaking (Net)
                      </label>
                      <input
                        type="number"
                        value={lossOnSaleOfFixedAssets}
                        onChange={(e) => setLossOnSaleOfFixedAssets(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Provision for Doubtful Debts
                      </label>
                      <input
                        type="number"
                        value={provisionForDoubtfulDebts}
                        onChange={(e) => setProvisionForDoubtfulDebts(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Charity & Donations
                      </label>
                      <input
                        type="number"
                        value={charityDonations}
                        onChange={(e) => setCharityDonations(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Misc Expenses
                      </label>
                      <input
                        type="number"
                        value={miscExpenses}
                        onChange={(e) => setMiscExpenses(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fixed Assets Written Off
                      </label>
                      <input
                        type="number"
                        value={fixedAssetsWrittenOff}
                        onChange={(e) => setFixedAssetsWrittenOff(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amortization of Lease Hold Land Premium
                      </label>
                      <input
                        type="number"
                        value={amortizationOfLeaseHoldLand}
                        onChange={(e) => setAmortizationOfLeaseHoldLand(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        News Print Claim Written-off
                      </label>
                      <input
                        type="number"
                        value={newsPrintClaimWrittenOff}
                        onChange={(e) => setNewsPrintClaimWrittenOff(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amalgamation Expenses Written Off
                      </label>
                      <input
                        type="number"
                        value={amalgamationExpensesWrittenOff}
                        onChange={(e) => setAmalgamationExpensesWrittenOff(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Discount on Commercial Papers
                      </label>
                      <input
                        type="number"
                        value={discountOnCommercialPapers}
                        onChange={(e) => setDiscountOnCommercialPapers(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Change in Carrying Amount (Expense)
                      </label>
                      <input
                        type="number"
                        value={changeInCarryingAmount}
                        onChange={(e) => setChangeInCarryingAmount(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Compensation, Damages or Payments
                      </label>
                      <input
                        type="number"
                        value={compensationDamagesPayments}
                        onChange={(e) => setCompensationDamagesPayments(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Any Other Expenses
                      </label>
                      <input
                        type="number"
                        value={otherExpenses}
                        onChange={(e) => setOtherExpenses(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                {/* Profits Section */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Profits (Add)</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profit by way of Premium on Issue of Shares
                      </label>
                      <input
                        type="number"
                        value={profitOnPremiumIssueOfShares}
                        onChange={(e) => setProfitOnPremiumIssueOfShares(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profit on Sale of Forfeited Shares
                      </label>
                      <input
                        type="number"
                        value={profitOnSaleOfForfeitedShares}
                        onChange={(e) => setProfitOnSaleOfForfeitedShares(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profit of Capital Nature
                      </label>
                      <input
                        type="number"
                        value={profitOfCapitalNature}
                        onChange={(e) => setProfitOfCapitalNature(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profit from Sale of Immovable Property/Fixed Assets
                      </label>
                      <input
                        type="number"
                        value={profitFromSaleOfImmovableProperty}
                        onChange={(e) => setProfitFromSaleOfImmovableProperty(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Change in Carrying Amount (Profit)
                      </label>
                      <input
                        type="number"
                        value={changeInCarryingAmountProfit}
                        onChange={(e) => setChangeInCarryingAmountProfit(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={calculateNetProfit}
                    className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Calculate Net Profit
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
              <h3 className="text-2xl font-serif font-bold text-slate mb-6">Net Profit Calculation</h3>
              
              {calculation ? (
                <div className="space-y-6">
                  {/* Net Profit Before Tax */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-blue-600 mb-2">Net Profit Before Tax</div>
                      <div className="text-2xl font-bold text-blue-700">
                        ₹{calculation.netProfitBeforeTax.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Total Adjustments */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-red-600 mb-2">Total Adjustments (Add Back)</div>
                      <div className="text-2xl font-bold text-red-700">
                        ₹{Object.values(calculation.adjustments).reduce((sum, value) => sum + value, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Total Profits */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-2">Total Profits (Add)</div>
                      <div className="text-2xl font-bold text-green-700">
                        ₹{Object.values(calculation.profits).reduce((sum, value) => sum + value, 0).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Final Net Profit */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-sm text-yellow-600 mb-2">Final Net Profit</div>
                      <div className="text-3xl font-bold text-yellow-700">
                        ₹{calculation.netProfit.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Calculation Breakdown</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Net Profit Before Tax:</span>
                        <span className="font-semibold">₹{calculation.netProfitBeforeTax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Add: Total Adjustments:</span>
                        <span className="font-semibold">₹{Object.values(calculation.adjustments).reduce((sum, value) => sum + value, 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Add: Total Profits:</span>
                        <span className="font-semibold">₹{Object.values(calculation.profits).reduce((sum, value) => sum + value, 0).toLocaleString()}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Net Profit:</span>
                        <span>₹{calculation.netProfit.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                  <div className="text-gray-500">
                    <div className="text-4xl mb-4">📊</div>
                    <p>Enter your financial details to calculate net profit</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding Net Profit Calculation</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Net profit calculation involves adjusting the profit before tax by adding back certain expenses and provisions, 
            and adding any capital gains or other profits. This is essential for accurate tax planning and financial analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-3">📉 Adjustments (Add Back)</h4>
              <p className="text-red-700 mb-3">
                These are expenses that were deducted from profits but should be added back for tax purposes:
              </p>
              <ul className="text-sm text-red-600 space-y-1">
                <li>• Provisions and reserves</li>
                <li>• Capital losses</li>
                <li>• Non-deductible expenses</li>
                <li>• Written-off assets</li>
                <li>• Voluntary payments</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">📈 Profits (Add)</h4>
              <p className="text-green-700 mb-3">
                These are capital gains and other profits that should be included:
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Capital gains on asset sales</li>
                <li>• Premium on share issues</li>
                <li>• Profit on forfeited shares</li>
                <li>• Other capital profits</li>
                <li>• Fair value adjustments</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Net Profit Formula</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Net Profit = Net Profit Before Tax + Total Adjustments + Total Profits</strong>
            </p>
            <p className="text-gray-600">
              This calculation ensures that all relevant income and expenses are properly accounted for in your final net profit figure.
            </p>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Tax Implications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">💼 Business Income</h4>
              <p className="text-gray-700 text-sm">Regular business profits are taxed as per applicable tax rates and slabs.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🏠 Capital Gains</h4>
              <p className="text-gray-700 text-sm">Capital gains are taxed separately based on holding period and asset type.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📊 Provisions</h4>
              <p className="text-gray-700 text-sm">Certain provisions may be tax-deductible while others are not.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🎯 Planning</h4>
              <p className="text-gray-700 text-sm">Proper classification helps in tax planning and compliance.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Need Professional Tax Planning?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our tax experts can help you optimize your net profit calculations, ensure proper tax compliance, and provide strategic tax planning advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Get Tax Consultation
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
