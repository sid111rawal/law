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
  paidInstallments: {
    june15: number;
    sept15: number;
    dec15: number;
    mar15: number;
  };
  shortfalls: {
    june15: number;
    sept15: number;
    dec15: number;
    mar15: number;
  };
  interestEstimate: number;
  needToMeet75: number;
}

// New regime tax calculation for FY 2025-26
function taxNewFY25(taxable: number): number {
  if (taxable <= 400000) return 0;
  
  let tax = 0;
  if (taxable <= 800000) {
    tax = (taxable - 400000) * 0.05;
  } else if (taxable <= 1200000) {
    tax = (400000 * 0.05) + (taxable - 800000) * 0.10;
  } else if (taxable <= 1600000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (taxable - 1200000) * 0.15;
  } else if (taxable <= 2000000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (taxable - 1600000) * 0.20;
  } else if (taxable <= 2400000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (taxable - 2000000) * 0.25;
  } else {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (400000 * 0.25) + (taxable - 2400000) * 0.30;
  }
  return tax;
}

// Old regime tax calculation
function taxOldFY25(taxable: number): number {
  if (taxable <= 250000) return 0;
  
  let tax = 0;
  if (taxable <= 500000) {
    tax = (taxable - 250000) * 0.05;
  } else if (taxable <= 1000000) {
    tax = (250000 * 0.05) + (taxable - 500000) * 0.20;
  } else {
    tax = (250000 * 0.05) + (500000 * 0.20) + (taxable - 1000000) * 0.30;
  }
  return tax;
}

// Calculate months between two dates
function monthsBetween(d1: Date, d2: Date): number {
  const years = d2.getFullYear() - d1.getFullYear();
  let months = years * 12 + (d2.getMonth() - d1.getMonth());
  if (d2.getDate() < d1.getDate()) months--;
  return Math.max(0, months);
}

export default function AdvanceTaxCalculator() {
  const [income, setIncome] = useState<string>('');
  const [deductions, setDeductions] = useState<string>('');
  const [regime, setRegime] = useState<'new' | 'old'>('new');
  const [tds, setTds] = useState<string>('');
  const [salaried, setSalaried] = useState<boolean>(false);
  const [presumptive, setPresumptive] = useState<boolean>(false);
  const [paidSummary, setPaidSummary] = useState<string>('');

  const calculateAdvanceTax = (): AdvanceTaxResult | null => {
    const incomeValue = Math.max(0, parseFloat(income) || 0);
    let deductionsValue = Math.max(0, parseFloat(deductions) || 0);
    const tdsValue = Math.max(0, parseFloat(tds) || 0);
    const paidText = (paidSummary || '').trim();

    if (incomeValue === 0) return null;

    // Apply standard deduction if salaried (only for old regime)
    if (salaried && regime === 'old') {
      deductionsValue += 75000;
    }

    // Parse paid amounts for instalments (comma separated: Jun,Sep,Dec,Mar)
    let paid = [0, 0, 0, 0];
    if (paidText) {
      const arr = paidText.split(',').map(s => Number(s.trim() || 0));
      for (let i = 0; i < Math.min(4, arr.length); i++) {
        paid[i] = Math.max(0, arr[i]);
      }
    }

    // Taxable income - deductions only apply in Old Regime
    // In New Regime, deductions are not allowed, so ignore deductionsValue
    const taxableIncome = regime === 'new' 
      ? incomeValue 
      : Math.max(0, incomeValue - deductionsValue);

    // Tax computation
    let baseTax = regime === 'new' ? taxNewFY25(taxableIncome) : taxOldFY25(taxableIncome);

    // Important: New regime rebate — if taxable <= 12,00,000 then tax = 0 (effective rebate)
    if (regime === 'new' && taxableIncome <= 1200000) {
      baseTax = 0;
    }

    const cess = Math.round(baseTax * 0.04);
    const totalTax = Math.round(baseTax + cess);

    // Net payable after TDS
    const netAfterTDS = Math.max(0, totalTax - tdsValue);

    // Instalment required (cumulative)
    const instReq = {
      june15: Math.round(totalTax * 0.15),
      sept15: Math.round(totalTax * 0.45),
      dec15: Math.round(totalTax * 0.75),
      mar15: Math.round(totalTax * 1.00),
    };

    const cumPaid = {
      june15: paid[0],
      sept15: paid[0] + paid[1],
      dec15: paid[0] + paid[1] + paid[2],
      mar15: paid[0] + paid[1] + paid[2] + paid[3],
    };

    // Determine financial year base dates
    const now = new Date();
    const fyStartYear = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;
    const dueDates = {
      june15: new Date(fyStartYear, 5, 15), // 15 June
      sept15: new Date(fyStartYear, 8, 15), // 15 Sep
      dec15: new Date(fyStartYear, 11, 15), // 15 Dec
      mar15: new Date(fyStartYear + 1, 2, 15), // 15 Mar (next year)
    };

    // Shortfalls and conservative interest
    const shortfalls = {
      june15: Math.max(0, instReq.june15 - cumPaid.june15),
      sept15: Math.max(0, instReq.sept15 - cumPaid.sept15),
      dec15: Math.max(0, instReq.dec15 - cumPaid.dec15),
      mar15: Math.max(0, instReq.mar15 - cumPaid.mar15),
    };

    let interestEstimate = 0;
    const shortfallKeys: Array<keyof typeof shortfalls> = ['june15', 'sept15', 'dec15', 'mar15'];
    shortfallKeys.forEach((k) => {
      const short = shortfalls[k];
      if (short > 0 && now > dueDates[k]) {
        const months = monthsBetween(dueDates[k], now);
        interestEstimate += Math.round(short * 0.01 * months);
      }
    });

    // Advance tax applicability
    const requiresAdvance = !presumptive && netAfterTDS > 10000;

    // Recommended immediate payment to meet 75% by Dec 15
    const needToMeet75 = Math.max(0, instReq.dec15 - cumPaid.dec15);

    return {
      taxableIncome,
      tax: baseTax,
      cess,
      totalTax,
      tds: tdsValue,
      advanceTaxPayable: netAfterTDS,
      requiresAdvanceTax: requiresAdvance,
      installments: instReq,
      paidInstallments: cumPaid,
      shortfalls,
      interestEstimate,
      needToMeet75,
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
            Advance Tax Calculator — FY 2025–26
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estimate instalments, shortfalls & a conservative interest estimate. Includes new-regime zero-tax check (≤ ₹12,00,000). This tool is for planning — consult a CA for exact legal interest computations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Input Section */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Enter Your Details</h2>
              
              {/* Estimated Annual Gross Income */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Annual Gross Income (₹)
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="e.g. 2500000"
                />
              </div>

              {/* Total Deductions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Deductions (80C/80D etc.) (₹) {regime === 'new' && <span className="text-xs text-gray-500">(Not applicable in New Regime)</span>}
                </label>
                <input
                  type="number"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                  disabled={regime === 'new'}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg ${
                    regime === 'new' ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''
                  }`}
                  placeholder="e.g. 150000"
                />
                {regime === 'new' && (
                  <p className="text-xs text-gray-500 mt-1">
                    Deductions are not allowed in New Regime. This field is disabled.
                  </p>
                )}
              </div>

              {/* Tax Regime */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Tax Regime
                </label>
                <select
                  value={regime}
                  onChange={(e) => setRegime(e.target.value as 'new' | 'old')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                >
                  <option value="new">New Regime (FY25-26)</option>
                  <option value="old">Old Regime (with deductions)</option>
                </select>
              </div>

              {/* TDS / TCS Already Deducted */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TDS / TCS Already Deducted (₹)
                </label>
                <input
                  type="number"
                  value={tds}
                  onChange={(e) => setTds(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="e.g. 200000"
                />
              </div>

              {/* Salaried Checkbox */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you salaried (apply standard deduction ₹75,000)? {regime === 'new' && <span className="text-xs text-gray-500">(Only for Old Regime)</span>}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="salaried"
                    checked={salaried}
                    onChange={(e) => setSalaried(e.target.checked)}
                    disabled={regime === 'new'}
                    className={`w-5 h-5 text-[#C9A34A] border-gray-300 rounded focus:ring-[#C9A34A] ${
                      regime === 'new' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  />
                  <label htmlFor="salaried" className={`text-sm ${regime === 'new' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Apply standard deduction
                  </label>
                </div>
                {regime === 'new' && (
                  <p className="text-xs text-gray-500 mt-1">
                    Standard deduction is not available in New Regime.
                  </p>
                )}
              </div>

              {/* Previous Advance Tax Paid */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Advance Tax Paid (comma — Jun,Sep,Dec,Mar)
                </label>
                <input
                  type="text"
                  value={paidSummary}
                  onChange={(e) => setPaidSummary(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="e.g. 15000,0,0,0"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter amounts already paid for each instalment (comma separated)
                </p>
              </div>

              {/* Presumptive Scheme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presumptive scheme (44AD/44ADA)?
                </label>
                <select
                  value={presumptive ? 'yes' : 'no'}
                  onChange={(e) => setPresumptive(e.target.value === 'yes')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes — total tax by 15 Mar</option>
                </select>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">Estimate (FY 2025–26)</h3>
              
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Total Tax (incl. cess):</span>
                    <span className="text-lg font-semibold text-slate">{formatCurrency(result.totalTax)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">TDS / TCS adjusted:</span>
                    <span className="text-lg font-semibold text-slate">{formatCurrency(result.tds)}</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b-2 border-gray-300">
                    <span className="font-semibold text-slate">Tax payable after TDS:</span>
                    <span className="text-xl font-bold text-[#C9A34A]">{formatCurrency(result.advanceTaxPayable)}</span>
                  </div>

                  {!result.requiresAdvanceTax && !presumptive ? (
                    <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-800">
                        <strong>✅ Advance Tax not required</strong> — your tax after TDS is {formatCurrency(result.advanceTaxPayable)} (≤ ₹10,000 threshold), or new-regime rebate applied.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-slate mb-3">Installment (cumulative) requirements</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center py-1 bg-blue-50 rounded px-2">
                            <span className="text-gray-700">15 Jun</span>
                            <div className="flex gap-2">
                              <span className="font-semibold">{formatCurrency(result.installments.june15)}</span>
                              <span className="text-gray-500">({formatCurrency(result.paidInstallments.june15)})</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center py-1 bg-blue-50 rounded px-2">
                            <span className="text-gray-700">15 Sep</span>
                            <div className="flex gap-2">
                              <span className="font-semibold">{formatCurrency(result.installments.sept15)}</span>
                              <span className="text-gray-500">({formatCurrency(result.paidInstallments.sept15)})</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center py-1 bg-blue-50 rounded px-2">
                            <span className="text-gray-700">15 Dec</span>
                            <div className="flex gap-2">
                              <span className="font-semibold">{formatCurrency(result.installments.dec15)}</span>
                              <span className="text-gray-500">({formatCurrency(result.paidInstallments.dec15)})</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center py-1 bg-blue-50 rounded px-2">
                            <span className="text-gray-700">15 Mar</span>
                            <div className="flex gap-2">
                              <span className="font-semibold">{formatCurrency(result.installments.mar15)}</span>
                              <span className="text-gray-500">({formatCurrency(result.paidInstallments.mar15)})</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {(result.shortfalls.june15 > 0 || result.shortfalls.sept15 > 0 || result.shortfalls.dec15 > 0 || result.shortfalls.mar15 > 0) && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="text-sm font-semibold text-slate mb-3">Interest & outstanding (conservative)</h4>
                          <p className="text-xs text-gray-600 mb-2">
                            Interest estimate uses 1% per month on instalment shortfalls (simple conservative estimate).
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                              <span className="text-sm text-gray-600">Estimated Interest:</span>
                              <span className="font-semibold text-orange-600">{formatCurrency(result.interestEstimate)}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {result.needToMeet75 > 0 && (
                        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                          <p className="text-xs text-yellow-800">
                            <strong>Recommended action:</strong> Ensure you meet the 75% cumulative instalment by 15 Dec. Pay <strong>{formatCurrency(result.needToMeet75)}</strong> now to reach 75% (plus any interest).
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-sm">Enter your income details to calculate advance tax</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Notes */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Quick notes:</strong> Advance tax applies if tax after TDS & deductions &gt; ₹10,000. Instalments: 15% (15 Jun), 45% (15 Sep), 75% (15 Dec), 100% (15 Mar). New-regime users with taxable income ≤ ₹12,00,000 will have zero tax — the calculator will show no advance tax required. Interest estimate is conservative (1%/month on instalment shortfalls) for planning. For precise legal interest calculation consult a CA.
            </p>
          </div>
        </div>

        {/* Pro Tips Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">Practical Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate mb-2">Re-check TDS</h3>
              <p className="text-sm text-gray-600">If your employer/client has not deposited TDS properly, your TDS figure will not appear in Form 26AS — always confirm actual TDS.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate mb-2">Capital gains & one-off sales</h3>
              <p className="text-sm text-gray-600">If you make capital gains mid-year, pay tax in the next instalment — don&apos;t wait until March.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate mb-2">Presumptive taxpayers (44AD/44ADA)</h3>
              <p className="text-sm text-gray-600">You may pay all tax by 15 Mar. Use the calculator in &quot;presumptive&quot; mode if you&apos;re under these schemes.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate mb-2">Keep proof</h3>
              <p className="text-sm text-gray-600">Save challans of advance tax payments — you will need them while filing ITR.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate mb-2">When in doubt</h3>
              <p className="text-sm text-gray-600">If numbers change materially (new order, sale, capital gain), re-run calculator and top up instalments immediately.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate mb-2">If shortfalls exist</h3>
              <p className="text-sm text-gray-600">Pay at least the 75% by Dec 15 to avoid compounding interest later.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate mb-2">What is Advance Tax?</h3>
              <p className="text-sm text-gray-600">Advance Tax is the tax you pay during the financial year, instead of waiting to pay everything when filing your Income Tax Return (ITR). The government wants taxpayers to pay tax quarter by quarter, so that income tax is collected evenly throughout the year.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate mb-2">Who must pay Advance Tax?</h3>
              <p className="text-sm text-gray-600">Only those whose total tax liability (after TDS) is more than ₹10,000 in a year. This includes freelancers, self-employed professionals, business owners, and anyone earning income without sufficient TDS.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate mb-2">How do I calculate Advance Tax?</h3>
              <p className="text-sm text-gray-600">Use our calculator above! Simply enter your estimated annual income, deductions, TDS already deducted, and select your tax regime. The calculator will show you the exact instalments required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate mb-2">What happens if I miss the 15 Dec checkpoint?</h3>
              <p className="text-sm text-gray-600">Missing the 75% cumulative payment by 15 Dec can lead to interest charges under Sections 234B and 234C. The interest is typically 1% per month on the shortfall amount. Pay immediately to minimize interest.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate mb-2">How is interest calculated under Sections 234B/234C?</h3>
              <p className="text-sm text-gray-600">Section 234B charges interest on the amount of tax that remains unpaid after the end of the financial year. Section 234C charges interest for deferment of advance tax instalments. The calculator provides a conservative estimate (1% per month), but for exact legal interest calculations, especially with complex incomes, consult a tax professional.</p>
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

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-serif font-bold text-slate mb-4">
              Need help finalising payments?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If the calculator shows a shortfall or you have complex income (capital gains, foreign income, multiple clients), DM us or book a 15-minute review — our expert CAs will check your numbers and give a practical payment plan.
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
