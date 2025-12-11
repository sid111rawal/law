'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AdvanceTaxResult {
  taxableIncome: number;
  tax: number;
  cess: number;
  totalTax: number;
  tds: number;
  advanceTaxPayable: number;
  requiresAdvanceTax: boolean;
  installments: {
    june15: number;
    sept15: number;
    dec15: number;
    mar15: number;
  };
}

export default function AdvanceTaxCalculator() {
  const [income, setIncome] = useState<string>('');
  const [deductions, setDeductions] = useState<string>('');
  const [regime, setRegime] = useState<'new' | 'old'>('new');
  const [tds, setTds] = useState<string>('');

  const calculateAdvanceTax = (): AdvanceTaxResult | null => {
    const incomeValue = parseFloat(income) || 0;
    const deductionsValue = parseFloat(deductions) || 0;
    const tdsValue = parseFloat(tds) || 0;

    if (incomeValue === 0) return null;

    // Net taxable income
    let taxableIncome = incomeValue - deductionsValue;
    if (taxableIncome < 0) taxableIncome = 0;

    // Tax calculation
    let tax = 0;

    if (regime === 'new') {
      // NEW REGIME slabs (FY 2024-25)
      if (taxableIncome > 1200000) {
        tax = (taxableIncome - 1200000) * 0.30 + 150000;
      } else if (taxableIncome > 1000000) {
        tax = (taxableIncome - 1000000) * 0.20 + 110000;
      } else if (taxableIncome > 700000) {
        tax = (taxableIncome - 700000) * 0.10 + 40000;
      } else {
        tax = 0;
      }
    } else {
      // OLD REGIME slabs
      if (taxableIncome > 1000000) {
        tax = (taxableIncome - 1000000) * 0.30 + 112500;
      } else if (taxableIncome > 500000) {
        tax = (taxableIncome - 500000) * 0.20 + 12500;
      } else if (taxableIncome > 250000) {
        tax = (taxableIncome - 250000) * 0.05;
      } else {
        tax = 0;
      }
    }

    const cess = tax * 0.04;
    const totalTax = tax + cess;
    const advanceTaxPayable = totalTax - tdsValue;
    const requiresAdvanceTax = advanceTaxPayable > 10000;

    const installments = {
      june15: totalTax * 0.15,
      sept15: totalTax * 0.45,
      dec15: totalTax * 0.75,
      mar15: totalTax,
    };

    return {
      taxableIncome,
      tax,
      cess,
      totalTax,
      tds: tdsValue,
      advanceTaxPayable,
      requiresAdvanceTax,
      installments,
    };
  };

  const result = calculateAdvanceTax();

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

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Advanced Tax Calculator – FY 2024-25
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your advance tax liability and payment schedule. Get accurate calculations based on old and new tax regimes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Enter Your Details</h2>
              
              {/* Total Estimated Annual Income */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Estimated Annual Income (₹)
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter your income"
                />
              </div>

              {/* Total Deductions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Deductions (80C/80D etc.) (₹)
                </label>
                <input
                  type="number"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter deductions"
                />
              </div>

              {/* Tax Regime */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Tax Regime
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setRegime('new')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      regime === 'new'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">New Regime</div>
                    <div className="text-xs text-gray-600 mt-1">Lower rates, fewer deductions</div>
                  </button>
                  <button
                    onClick={() => setRegime('old')}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      regime === 'old'
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-semibold">Old Regime</div>
                    <div className="text-xs text-gray-600 mt-1">More deductions available</div>
                  </button>
                </div>
              </div>

              {/* TDS Already Deducted */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TDS Already Deducted (₹)
                </label>
                <input
                  type="number"
                  value={tds}
                  onChange={(e) => setTds(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter TDS deducted"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">Advance Tax Summary</h3>
              
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Taxable Income:</span>
                    <span className="text-lg font-semibold text-slate">{formatCurrency(result.taxableIncome)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Tax (before cess):</span>
                    <span className="text-lg font-semibold text-[#C9A34A]">{formatCurrency(result.tax)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Health & Education Cess (4%):</span>
                    <span className="text-lg font-semibold text-[#C9A34A]">{formatCurrency(result.cess)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-slate">Total Tax:</span>
                    <span className="text-xl font-bold text-[#C9A34A]">{formatCurrency(result.totalTax)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">TDS Adjusted:</span>
                    <span className="text-lg font-semibold text-slate">{formatCurrency(result.tds)}</span>
                  </div>

                  <div className="flex justify-between items-center py-4 bg-[#C9A34A]/10 rounded-lg px-4">
                    <span className="font-bold text-slate">Advance Tax Payable:</span>
                    <span className="text-2xl font-bold text-[#C9A34A]">{formatCurrency(result.advanceTaxPayable)}</span>
                  </div>

                  {result.requiresAdvanceTax ? (
                    <>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-slate mb-4">Installments Required:</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 bg-blue-50 rounded-lg px-3">
                            <span className="text-gray-700">15 June (15%):</span>
                            <span className="font-semibold text-blue-700">{formatCurrency(result.installments.june15)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 bg-blue-50 rounded-lg px-3">
                            <span className="text-gray-700">15 Sept (45% cumulative):</span>
                            <span className="font-semibold text-blue-700">{formatCurrency(result.installments.sept15)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 bg-blue-50 rounded-lg px-3">
                            <span className="text-gray-700">15 Dec (75% cumulative):</span>
                            <span className="font-semibold text-blue-700">{formatCurrency(result.installments.dec15)}</span>
                          </div>
                          <div className="flex justify-between items-center py-2 bg-blue-50 rounded-lg px-3">
                            <span className="text-gray-700">15 Mar (100%):</span>
                            <span className="font-semibold text-blue-700">{formatCurrency(result.installments.mar15)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm text-yellow-800">
                          <strong>💡 Suggestion:</strong> To avoid 1% monthly interest (Section 234B/234C), pay instalments before deadlines.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-green-800 mb-2">✅ No Advance Tax Required</h4>
                      <p className="text-sm text-green-700">
                        Your tax liability after TDS is less than ₹10,000. You don&apos;t need to pay advance tax.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Enter your income details to calculate advance tax</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comprehensive SEO Content */}
        <div className="mt-12 space-y-8">
          {/* What is Advance Tax */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">What Is Advance Tax? (In Simple Words)</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Advance Tax is the tax you pay during the financial year, instead of waiting to pay everything when filing your Income Tax Return (ITR). The government wants taxpayers to pay tax quarter by quarter, so that income tax is collected evenly throughout the year.
              </p>
              <p className="mb-4">
                Think of it like this: You earn income every month. So the government wants tax every few months too.
              </p>
            </div>
          </div>

          {/* Who Needs to Pay */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">Who Needs to Pay Advance Tax?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Not everyone — only those whose total tax liability (after TDS) is more than ₹10,000 in a year.
              </p>
              <p className="mb-4 font-semibold">This includes:</p>
              <ul className="space-y-2 mb-6">
                <li>✔ Business owners</li>
                <li>✔ Startups</li>
                <li>✔ Freelancers</li>
                <li>✔ Consultants</li>
                <li>✔ IT service providers</li>
                <li>✔ Doctors, lawyers, CAs</li>
                <li>✔ Landlords</li>
                <li>✔ Traders & investors</li>
                <li>✔ Anyone earning income without sufficient TDS</li>
              </ul>
              <p className="mb-4">
                If after subtracting TDS your tax is more than ₹10,000, you MUST pay advance tax.
              </p>
            </div>
          </div>

          {/* How is it Calculated */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">How Is Advance Tax Calculated?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">It&apos;s actually very easy:</p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate mb-2">Step 1: Calculate your estimated yearly income</h3>
                  <p className="text-sm text-gray-600">Add all sources: Salary (if any), Business or professional income, Rental income, Interest income, Capital gains, Side income</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate mb-2">Step 2: Subtract deductions</h3>
                  <p className="text-sm text-gray-600">80C, 80D, home loan interest, NPS, etc.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate mb-2">Step 3: Calculate tax on the net income</h3>
                  <p className="text-sm text-gray-600">Use old or new regime tax slabs.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate mb-2">Step 4: Subtract TDS already deducted</h3>
                  <p className="text-sm text-gray-600">RESULT = Your Advance Tax liability. If the result &gt; ₹10,000 → You must pay Advance Tax.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">Advance Tax Payment Schedule — 4 Instalments</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">You must pay Advance Tax in these percentages:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#C9A34A]/10">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Due Date</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Minimum Tax to Be Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">15 June</td>
                      <td className="border border-gray-300 px-4 py-3">15%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">15 September</td>
                      <td className="border border-gray-300 px-4 py-3">45% (cumulative)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">15 December</td>
                      <td className="border border-gray-300 px-4 py-3">75% (cumulative)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">15 March</td>
                      <td className="border border-gray-300 px-4 py-3">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                This means: By 15 December, most taxpayers must have paid 75% of the tax.
              </p>
            </div>
          </div>

          {/* Why Important */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">Why Is Advance Tax Important?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 font-semibold text-red-600">Because missing instalments leads to:</p>
              <ul className="space-y-2 mb-6">
                <li>❌ 1% interest per month under Section 234B</li>
                <li>❌ 1% interest per month under Section 234C</li>
                <li>❌ Higher tax burden at year-end</li>
                <li>❌ Income tax notices</li>
                <li>❌ Cash flow issues for business owners</li>
              </ul>
              <p className="mb-4 font-semibold text-green-600">But when you pay advance tax correctly:</p>
              <ul className="space-y-2">
                <li>✔ No interest</li>
                <li>✔ No late stress</li>
                <li>✔ Peace of mind</li>
                <li>✔ Smoother ITR filing</li>
                <li>✔ Clean tax records</li>
              </ul>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">Common Mistakes Taxpayers Make</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-slate mb-2">1. &quot;My TDS is deducted. Do I still need to pay Advance Tax?&quot;</h3>
                <p className="text-sm">Yes — if tax AFTER TDS is still &gt; ₹10,000.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-slate mb-2">2. &quot;I paid less tax in June… will I be charged interest?&quot;</h3>
                <p className="text-sm">Yes — even a small shortfall leads to monthly interest.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-slate mb-2">3. &quot;I earned capital gains mid-year. Now what?&quot;</h3>
                <p className="text-sm">You must pay advance tax in the next instalment immediately.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-slate mb-2">4. &quot;Do freelancers or self-employed people need to pay Advance Tax?&quot;</h3>
                <p className="text-sm">YES — more than ANYONE else. Because very little or NO TDS is deducted.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-slate mb-2">5. &quot;What if I earn under presumptive taxation (44AD/ADA)?&quot;</h3>
                <p className="text-sm">You can pay the entire tax by 15 March in one instalment.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-slate mb-2">6. &quot;What if I overpay Advance Tax?&quot;</h3>
                <p className="text-sm">No problem — you get a refund after filing ITR.</p>
              </div>
            </div>
          </div>

          {/* Consequences */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">What Happens if You Don&apos;t Pay Advance Tax?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4 font-semibold text-red-600">The consequences are serious:</p>
              <ul className="space-y-2">
                <li>🚨 Interest charged every month</li>
                <li>🚨 Higher tax bill during ITR</li>
                <li>🚨 Income tax scrutiny or notices</li>
                <li>🚨 Business cash flow issues</li>
                <li>🚨 Stress during filing season</li>
              </ul>
              <p className="mt-4">Paying in instalments keeps life simple.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-serif font-bold text-slate mb-4">
              Still confused about how much Advance Tax you should pay?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&apos;t worry — 90% taxpayers face the same confusion. DM us or book a call, and our experts will guide you based on your exact income, TDS and tax regime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#C9A34A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services/tax-planning"
                className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-3 rounded-xl font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
              >
                View Tax Planning Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

