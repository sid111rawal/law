'use client';

import { useState } from 'react';
import Link from 'next/link';

type BusinessType = 'business' | 'profession' | 'presumptive44AD' | 'presumptive44ADA';

export default function TaxAuditChecker() {
  const [businessType, setBusinessType] = useState<BusinessType>('business');
  const [totalTurnover, setTotalTurnover] = useState<string>('');
  const [cashSales, setCashSales] = useState<string>('');
  const [totalReceipts, setTotalReceipts] = useState<string>('');
  const [profitDeclared, setProfitDeclared] = useState<string>('');
  const [prescribedProfit] = useState<string>('8');

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const checkAuditRequirement = () => {
    const turnover = parseFloat(totalTurnover) || 0;
    const cash = parseFloat(cashSales) || 0;
    const receipts = parseFloat(totalReceipts) || 0;
    const declaredProfit = parseFloat(profitDeclared) || 0;
    const prescribed = parseFloat(prescribedProfit) || 0;

    let auditRequired = false;
    const reasons: string[] = [];
    let threshold = 0;

    if (businessType === 'business') {
      threshold = 10000000; // ₹1 crore
      
      if (turnover > threshold) {
        auditRequired = true;
        reasons.push(`Total turnover (${formatCurrency(turnover)}) exceeds ₹1 crore`);
      }

      if (cash > 500000) {
        auditRequired = true;
        reasons.push(`Cash sales (${formatCurrency(cash)}) exceed 5% of turnover or ₹1 crore (whichever is lower)`);
      }

    } else if (businessType === 'profession') {
      threshold = 5000000; // ₹50 lakh
      
      if (receipts > threshold) {
        auditRequired = true;
        reasons.push(`Gross receipts (${formatCurrency(receipts)}) exceed ₹50 lakh`);
      }

    } else if (businessType === 'presumptive44AD') {
      threshold = 20000000; // ₹2 crore (for 44AD)
      
      if (turnover > threshold) {
        auditRequired = true;
        reasons.push(`Turnover exceeds ₹2 crore for presumptive taxation (Section 44AD)`);
      }

      const minProfit = (turnover * prescribed) / 100;
      if (turnover <= threshold && declaredProfit < minProfit) {
        auditRequired = true;
        reasons.push(`Profit declared (${formatCurrency(declaredProfit)}) is less than prescribed ${prescribed}% (${formatCurrency(minProfit)})`);
      }

    } else if (businessType === 'presumptive44ADA') {
      threshold = 5000000; // ₹50 lakh (for 44ADA)
      
      if (receipts > threshold) {
        auditRequired = true;
        reasons.push(`Gross receipts exceed ₹50 lakh for presumptive taxation (Section 44ADA)`);
      }

      const minProfit = (receipts * 50) / 100;
      if (receipts <= threshold && declaredProfit < minProfit) {
        auditRequired = true;
        reasons.push(`Profit declared is less than prescribed 50% (${formatCurrency(minProfit)})`);
      }
    }

    return {
      auditRequired,
      reasons,
      threshold,
      turnover: businessType === 'business' || businessType === 'presumptive44AD' ? turnover : receipts,
      margin: threshold - (businessType === 'business' || businessType === 'presumptive44AD' ? turnover : receipts)
    };
  };

  const result = checkAuditRequirement();

  const businessTypes = [
    { value: 'business' as BusinessType, label: 'Regular Business', description: 'Turnover limit: ₹1 Cr' },
    { value: 'profession' as BusinessType, label: 'Profession', description: 'Receipts limit: ₹50 L' },
    { value: 'presumptive44AD' as BusinessType, label: 'Section 44AD', description: 'Presumptive business' },
    { value: 'presumptive44ADA' as BusinessType, label: 'Section 44ADA', description: 'Presumptive profession' },
  ];

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
            Tax Audit Requirement Checker
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check if your business requires a tax audit under Income Tax Act. Avoid penalties by knowing your compliance obligations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Business Details</h2>
              
              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Business/Profession Type
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setBusinessType(type.value)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                        businessType === type.value
                          ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-semibold">{type.label}</div>
                      <div className="text-xs text-gray-600">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Inputs */}
              {(businessType === 'business' || businessType === 'presumptive44AD') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Turnover/Gross Receipts
                    </label>
                    <input
                      type="number"
                      value={totalTurnover}
                      onChange={(e) => setTotalTurnover(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                      placeholder="Enter total turnover"
                    />
                  </div>

                  {businessType === 'business' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cash Sales/Receipts
                      </label>
                      <input
                        type="number"
                        value={cashSales}
                        onChange={(e) => setCashSales(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                        placeholder="Enter cash sales"
                      />
                    </div>
                  )}

                  {businessType === 'presumptive44AD' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profit Declared (₹)
                      </label>
                      <input
                        type="number"
                        value={profitDeclared}
                        onChange={(e) => setProfitDeclared(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                        placeholder="Enter profit declared"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Prescribed profit: {prescribedProfit}% of turnover
                      </p>
                    </div>
                  )}
                </>
              )}

              {(businessType === 'profession' || businessType === 'presumptive44ADA') && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gross Receipts
                    </label>
                    <input
                      type="number"
                      value={totalReceipts}
                      onChange={(e) => setTotalReceipts(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                      placeholder="Enter gross receipts"
                    />
                  </div>

                  {businessType === 'presumptive44ADA' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profit Declared (₹)
                      </label>
                      <input
                        type="number"
                        value={profitDeclared}
                        onChange={(e) => setProfitDeclared(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                        placeholder="Enter profit declared"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Prescribed profit: 50% of gross receipts
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Result Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">Audit Status</h3>
              
              <div className={`rounded-xl p-6 ${
                result.auditRequired 
                  ? 'bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300'
                  : 'bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300'
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {result.auditRequired ? '⚠️' : '✅'}
                  </div>
                  <h4 className={`text-2xl font-bold mb-2 ${
                    result.auditRequired ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {result.auditRequired ? 'Tax Audit Required' : 'Tax Audit Not Required'}
                  </h4>
                  <p className="text-gray-600">
                    {result.auditRequired 
                      ? 'You need to get your accounts audited under Section 44AB'
                      : 'Your business is below the audit threshold'
                    }
                  </p>
                </div>
              </div>

              {/* Threshold Info */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-slate mb-4">Threshold Information</h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Audit Threshold:</span>
                    <span className="font-semibold text-slate">{formatCurrency(result.threshold)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Your Amount:</span>
                    <span className="font-semibold text-[#C9A34A]">{formatCurrency(result.turnover)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Margin:</span>
                    <span className={`font-semibold ${result.margin > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(Math.abs(result.margin))} {result.margin > 0 ? 'Below' : 'Above'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reasons */}
              {result.auditRequired && result.reasons.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Reasons for Audit:</h4>
                  <ul className="space-y-2">
                    {result.reasons.map((reason, index) => (
                      <li key={index} className="text-sm text-red-700">
                        • {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!result.auditRequired && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700">
                    ✅ Your business/profession is currently below the tax audit threshold. However, ensure you maintain proper books of accounts.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tax Audit Information */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">What is Tax Audit?</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Tax Audit under Section 44AB of the Income Tax Act is a detailed audit of the books of accounts of businesses and professionals whose turnover or gross receipts exceed specified limits. It ensures proper maintenance of accounts and compliance with tax laws.
            </p>
            
            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Tax Audit Limits (FY 2025-26)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Business</h4>
                <p className="text-sm text-gray-600 mb-2">Turnover &gt; ₹1 crore</p>
                <p className="text-xs text-gray-500">Audit required if cash transactions exceed limits</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Profession</h4>
                <p className="text-sm text-gray-600 mb-2">Gross receipts &gt; ₹50 lakh</p>
                <p className="text-xs text-gray-500">For specified professionals like CA, CS, Doctor, etc.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Section 44AD (Presumptive)</h4>
                <p className="text-sm text-gray-600 mb-2">Turnover &gt; ₹2 crore</p>
                <p className="text-xs text-gray-500">Or if profit &lt; 8% of turnover</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate mb-2">Section 44ADA (Presumptive)</h4>
                <p className="text-sm text-gray-600 mb-2">Receipts &gt; ₹50 lakh</p>
                <p className="text-xs text-gray-500">Or if profit &lt; 50% of receipts</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate mt-6 mb-4">Consequences of Non-Compliance</h3>
            <ul className="space-y-2">
              <li>Penalty of 0.5% of turnover or ₹1.5 lakh (whichever is lower)</li>
              <li>Disallowance of expenses under Section 40(a)</li>
              <li>Presumptive income may be applied</li>
              <li>Increased scrutiny from tax authorities</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-slate mb-4">
            Need Help with Tax Audit?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experienced chartered accountants can help you with tax audit compliance, documentation, and filing. Get expert assistance today.
          </p>
          <button className="bg-[#C9A34A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Professional Help
          </button>
        </div>
      </div>
    </section>
  );
}
