'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TDSSection {
  section: string;
  category: string;
  description: string;
  rate?: number;
  threshold?: number | string;
  panAbsentRate?: number;
  rateIndividual?: number;
  rateOthers?: number;
  thresholdSingle?: number;
  thresholdAggregate?: number;
  example?: string;
}

export default function TDSCalculator() {
  const [selectedSection, setSelectedSection] = useState<string>('192');
  const [amount, setAmount] = useState<string>('');
  const [panAvailable, setPanAvailable] = useState<boolean>(true);
  const [payerType, setPayerType] = useState<'individual' | 'others'>('individual');
  const [paymentDate, setPaymentDate] = useState<string>('');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  const tdsSections: TDSSection[] = [
    // Salary Section
    {
      section: '192',
      category: 'Salary Income',
      description: 'TDS on salary income',
      rate: 0,
      threshold: 'As per slab rates',
      example: 'TDS deducted based on income tax slab rates applicable to employee'
    },
    {
      section: '192A',
      category: 'PF Withdrawal',
      description: 'PF withdrawal without PAN or before 5 years',
      rate: 10,
      threshold: 50000,
      example: 'TDS @10% on PF withdrawal exceeding ₹50,000 without PAN or before 5 years'
    },

    // Interest Sections
    {
      section: '193',
      category: 'Interest on Securities',
      description: 'Interest on securities',
      rate: 10,
      threshold: 10000,
      panAbsentRate: 20,
      example: 'TDS @10% on interest from securities exceeding ₹10,000'
    },
    {
      section: '194',
      category: 'Dividend',
      description: 'Dividend payments',
      rate: 10,
      threshold: 5000,
      panAbsentRate: 20,
      example: 'TDS @10% on dividend exceeding ₹5,000'
    },
    {
      section: '194A',
      category: 'Interest (Other than Securities)',
      description: 'Interest other than securities',
      rate: 10,
      threshold: '₹5,000 (₹40,000 for banks)',
      panAbsentRate: 20,
      example: 'TDS @10% on interest from FDs, deposits exceeding ₹40,000 (banks) or ₹5,000 (others)'
    },
    {
      section: '194LB',
      category: 'Infrastructure Debt Funds',
      description: 'Interest from infrastructure debt funds',
      rate: 5,
      threshold: 'N/A',
      example: 'TDS @5% on interest from infrastructure debt funds'
    },
    {
      section: '194LC',
      category: 'Foreign Loans',
      description: 'Interest on foreign loans',
      rate: 5,
      threshold: 'N/A',
      example: 'TDS @5% on interest on foreign loans'
    },
    {
      section: '194LD',
      category: 'Rupee Denominated Bonds',
      description: 'Interest on rupee denominated bonds',
      rate: 5,
      threshold: 'N/A',
      example: 'TDS @5% on interest on rupee denominated bonds'
    },

    // Winnings Sections
    {
      section: '194B',
      category: 'Lottery/Crossword Puzzle',
      description: 'Winnings from lottery or crossword puzzle',
      rate: 30,
      threshold: 10000,
      example: 'TDS @30% on lottery/crossword winnings exceeding ₹10,000'
    },
    {
      section: '194BB',
      category: 'Horse Races',
      description: 'Winnings from horse races',
      rate: 30,
      threshold: 10000,
      example: 'TDS @30% on horse race winnings exceeding ₹10,000'
    },
    {
      section: '194BA',
      category: 'Online Games',
      description: 'Winnings from online games',
      rate: 30,
      threshold: 'Any winnings',
      example: 'TDS @30% on any winnings from online games'
    },

    // Business Payments
    {
      section: '194C',
      category: 'Contractor/Sub-contractor',
      description: 'Payment to contractors or sub-contractors',
      rateIndividual: 1,
      rateOthers: 2,
      thresholdSingle: 30000,
      thresholdAggregate: 100000,
      panAbsentRate: 20,
      example: 'TDS @1% (Individual/HUF) or @2% (Others) on contract payments exceeding ₹30,000 single or ₹1,00,000 aggregate'
    },
    {
      section: '194H',
      category: 'Commission/Brokerage',
      description: 'Commission or brokerage payments',
      rate: 5,
      threshold: 15000,
      panAbsentRate: 20,
      example: 'TDS @5% on commission/brokerage exceeding ₹15,000'
    },
    {
      section: '194I',
      category: 'Rent (Land/Building/Furniture)',
      description: 'Rent payments for land, building, or furniture',
      rate: 10,
      threshold: 240000,
      panAbsentRate: 20,
      example: 'TDS @10% on rent for land/building/furniture exceeding ₹2,40,000'
    },
    {
      section: '194IA',
      category: 'Sale of Immovable Property',
      description: 'Sale of immovable property',
      rate: 1,
      threshold: 5000000,
      panAbsentRate: 20,
      example: 'TDS @1% on sale of immovable property exceeding ₹50,00,000'
    },
    {
      section: '194IB',
      category: 'Rent by Individual/HUF',
      description: 'Rent by individual/HUF exceeding ₹50,000/month',
      rate: 5,
      threshold: '₹50,000/month',
      panAbsentRate: 20,
      example: 'TDS @5% on rent exceeding ₹50,000 per month by individual/HUF'
    },
    {
      section: '194J',
      category: 'Professional/Technical Fees',
      description: 'Professional or technical services',
      rate: 10,
      threshold: 30000,
      panAbsentRate: 20,
      example: 'TDS @10% on professional/technical fees exceeding ₹30,000'
    },
    {
      section: '194R',
      category: 'Benefits/Perquisites',
      description: 'Benefits or perquisites in business',
      rate: 10,
      threshold: 20000,
      panAbsentRate: 20,
      example: 'TDS @10% on benefits/perquisites exceeding ₹20,000'
    },

    // Insurance Sections
    {
      section: '194D',
      category: 'Insurance Commission',
      description: 'Commission on insurance policies',
      rate: 10,
      threshold: 15000,
      panAbsentRate: 20,
      example: 'TDS @10% on insurance commission exceeding ₹15,000'
    },
    {
      section: '194DA',
      category: 'Life Insurance Maturity',
      description: 'Life insurance maturity proceeds',
      rate: 5,
      threshold: 100000,
      panAbsentRate: 20,
      example: 'TDS @5% on life insurance maturity exceeding ₹1,00,000'
    },
    {
      section: '194E',
      category: 'Payments to Sportsmen',
      description: 'Payments to sportsmen',
      rate: 20,
      threshold: 'N/A',
      example: 'TDS @20% on payments to sportsmen'
    },
    {
      section: '194EE',
      category: 'NSS Withdrawals',
      description: 'NSS withdrawals',
      rate: 10,
      threshold: 2500,
      panAbsentRate: 20,
      example: 'TDS @10% on NSS withdrawals exceeding ₹2,500'
    },
    {
      section: '194F',
      category: 'Repurchase of Units',
      description: 'Repurchase of units',
      rate: 20,
      threshold: 'N/A',
      example: 'TDS @20% on repurchase of units'
    },

    // E-commerce and Digital
    {
      section: '194O',
      category: 'E-commerce Operators',
      description: 'Payments to e-commerce operators',
      rate: 0.1,
      threshold: 500000,
      panAbsentRate: 20,
      example: 'TDS @0.1% on payments to e-commerce operators exceeding ₹5,00,000'
    },
    {
      section: '194Q',
      category: 'Purchase of Goods',
      description: 'Purchase of goods',
      rate: 0.1,
      threshold: 5000000,
      panAbsentRate: 20,
      example: 'TDS @0.1% on purchase of goods exceeding ₹50,00,000'
    },
    {
      section: '194S',
      category: 'Virtual Digital Assets',
      description: 'Transfer of virtual digital assets',
      rate: 1,
      threshold: 10000,
      panAbsentRate: 20,
      example: 'TDS @1% on transfer of virtual digital assets exceeding ₹10,000'
    },

    // Non-Resident Sections
    {
      section: '195',
      category: 'Payments to Non-Residents',
      description: 'Payments to non-residents',
      rate: 0,
      threshold: 'As per DTAA',
      example: 'TDS as per Double Taxation Avoidance Agreement (DTAA)'
    },
    {
      section: '196A',
      category: 'Income from Units to NR',
      description: 'Income from units to non-residents',
      rate: 20,
      threshold: 'N/A',
      example: 'TDS @20% on income from units to non-residents'
    },
    {
      section: '196B',
      category: 'Foreign Securities',
      description: 'Income from foreign securities',
      rate: 10,
      threshold: 'N/A',
      example: 'TDS @10% on income from foreign securities'
    },
    {
      section: '196C',
      category: 'Foreign Bonds',
      description: 'Income from foreign bonds',
      rate: 10,
      threshold: 'N/A',
      example: 'TDS @10% on income from foreign bonds'
    },
    {
      section: '196D',
      category: 'FII Income',
      description: 'Income of Foreign Institutional Investors',
      rate: 20,
      threshold: 'N/A',
      example: 'TDS @20% on income of Foreign Institutional Investors'
    },

    // TCS Sections
    {
      section: '206C',
      category: 'Sale of Scrap/Tendu Leaves/Liquor',
      description: 'Sale of scrap, tendu leaves, liquor, etc.',
      rate: 1,
      threshold: 'Various',
      example: 'TCS @1-5% on sale of scrap, tendu leaves, liquor, etc.'
    },
    {
      section: '206C(1H)',
      category: 'Sale of Goods > ₹50L',
      description: 'Sale of goods exceeding ₹50 lakhs',
      rate: 0.1,
      threshold: 5000000,
      example: 'TCS @0.1% on sale of goods exceeding ₹50,00,000'
    },
    {
      section: '206C(1G)',
      category: 'Overseas Remittance/LRS',
      description: 'Overseas remittance or Liberalized Remittance Scheme',
      rate: 5,
      threshold: 700000,
      example: 'TCS @5% (up to ₹7L) or @20% (above ₹7L) on overseas remittance/LRS'
    },
    {
      section: '206C(1F)',
      category: 'Sale of Motor Vehicle > ₹10L',
      description: 'Sale of motor vehicle exceeding ₹10 lakhs',
      rate: 1,
      threshold: 1000000,
      example: 'TCS @1% on sale of motor vehicle exceeding ₹10,00,000'
    }
  ];

  const calculateTDS = () => {
    const baseAmount = parseFloat(amount) || 0;
    const section = tdsSections.find(s => s.section === selectedSection);
    
    if (!section) return null;

    let rate = 0;
    
    // Handle different rate structures
    if (section.rateIndividual && section.rateOthers) {
      rate = payerType === 'individual' ? section.rateIndividual : section.rateOthers;
    } else if (section.rate !== undefined) {
      rate = section.rate;
    }

    // Apply higher rate if PAN not available
    if (!panAvailable && section.panAbsentRate) {
      rate = section.panAbsentRate;
    }
    
    const tdsAmount = (baseAmount * rate) / 100;
    const netAmount = baseAmount - tdsAmount;

    return {
      grossAmount: baseAmount,
      tdsRate: rate,
      tdsAmount,
      netAmount,
      section
    };
  };

  const result = calculateTDS();

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(num);
  };

  // Advanced Features
  const getDueDate = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 7);
    return nextMonth.toLocaleDateString('en-IN');
  };

  const getPenaltyAmount = () => {
    if (!result) return 0;
    const penaltyRate = 0.015; // 1.5% per month
    const monthsLate = 1; // Assuming 1 month late
    return result.tdsAmount * penaltyRate * monthsLate;
  };

  const getNetPay = () => {
    if (!result) return 0;
    return result.grossAmount - result.tdsAmount;
  };

  const downloadTDSReport = () => {
    const reportData = {
      section: result?.section?.section,
      category: result?.section?.category,
      grossAmount: result?.grossAmount || 0,
      tdsRate: result?.tdsRate || 0,
      tdsAmount: result?.tdsAmount || 0,
      netAmount: result?.netAmount || 0,
      dueDate: getDueDate(),
      panAvailable,
      paymentDate: paymentDate || new Date().toISOString().split('T')[0]
    };

    const csv = [
      ['TDS Report', ''],
      ['Section', reportData.section],
      ['Category', reportData.category],
      ['Gross Amount', formatCurrency(reportData.grossAmount)],
      ['TDS Rate', `${reportData.tdsRate}%`],
      ['TDS Amount', formatCurrency(reportData.tdsAmount)],
      ['Net Amount', formatCurrency(reportData.netAmount)],
      ['Due Date', reportData.dueDate],
      ['PAN Available', reportData.panAvailable ? 'Yes' : 'No'],
      ['Payment Date', reportData.paymentDate],
      ['Generated On', new Date().toLocaleString('en-IN')]
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tds-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const groupedSections = tdsSections.reduce((acc, section) => {
    const category = section.section.startsWith('206') ? 'TCS Sections' :
                    section.section.startsWith('196') ? 'Non-Resident Sections' :
                    section.section.startsWith('194') ? 'Business Payments' :
                    section.section.startsWith('193') ? 'Interest Sections' :
                    section.section.startsWith('192') ? 'Salary Sections' :
                    'Other Sections';
    
    if (!acc[category]) acc[category] = [];
    acc[category].push(section);
    return acc;
  }, {} as Record<string, TDSSection[]>);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            TDS Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate Tax Deducted at Source (TDS) for all payment types with comprehensive section-wise rates and thresholds.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate mb-6">Calculate TDS</h2>
              
              {/* TDS Section Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select TDS Section
                </label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                >
                  {Object.entries(groupedSections).map(([category, sections]) => (
                    <optgroup key={category} label={category}>
                      {sections.map((section) => (
                        <option key={section.section} value={section.section}>
                          Section {section.section} - {section.category}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* Payer Type (for sections with different rates) */}
              {result?.section?.rateIndividual && result?.section?.rateOthers && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payer Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPayerType('individual')}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        payerType === 'individual'
                          ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      Individual/HUF
                    </button>
                    <button
                      onClick={() => setPayerType('others')}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        payerType === 'others'
                          ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      Others
                    </button>
                  </div>
                </div>
              )}

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-lg"
                  placeholder="Enter payment amount"
                />
              </div>

              {/* PAN Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  PAN Card Status
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPanAvailable(true)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      panAvailable
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    PAN Available
                  </button>
                  <button
                    onClick={() => setPanAvailable(false)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      !panAvailable
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    No PAN
                  </button>
                </div>
                {!panAvailable && (
                  <p className="text-sm text-red-600 mt-2">
                    ⚠️ Higher TDS rate (20%) applicable without PAN
                  </p>
                )}
              </div>

              {/* Advanced Features Toggle */}
              <div className="mb-6">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center gap-2 text-sm font-medium text-[#C9A34A] hover:text-yellow-600 transition-colors"
                >
                  <span>{showAdvanced ? '▼' : '▶'}</span>
                  Advanced Features
                </button>
              </div>

              {/* Advanced Features Panel */}
              {showAdvanced && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 space-y-4">
                  {/* Due Date Reminder */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">📅</span>
                      <span className="font-semibold text-blue-800">Due Date Reminder</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      TDS Payment Due on <strong>{getDueDate()}</strong>
                    </p>
                  </div>

                  {/* Penalty Alert */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">⚠️</span>
                      <span className="font-semibold text-red-800">Penalty Alert</span>
                    </div>
                    <p className="text-sm text-red-700">
                      If paid after due date, <strong>1.5% per month</strong> interest applies
                    </p>
                    <p className="text-sm text-red-600 mt-1">
                      Estimated penalty: <strong>{formatCurrency(getPenaltyAmount())}</strong>
                    </p>
                  </div>

                  {/* PAN Not Available Mode */}
                  {!panAvailable && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🧮</span>
                        <span className="font-semibold text-yellow-800">PAN Not Available Mode</span>
                      </div>
                      <p className="text-sm text-yellow-700">
                        Auto calculated @20% (higher rate applied)
                      </p>
                    </div>
                  )}

                  {/* Net Pay Calculator */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">💳</span>
                      <span className="font-semibold text-green-800">Net Pay Calculator</span>
                    </div>
                    <p className="text-sm text-green-700">
                      Net Amount: <strong>{formatCurrency(getNetPay())}</strong>
                    </p>
                    <p className="text-xs text-green-600">
                      (Gross - TDS) = Net
                    </p>
                  </div>

                  {/* Payment Date Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={paymentDate}
                      onChange={(e) => setPaymentDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                    />
                  </div>

                  {/* Download Report */}
                  <div className="flex gap-2">
                    <button
                      onClick={downloadTDSReport}
                      className="flex items-center gap-2 bg-[#C9A34A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors"
                    >
                      <span>📥</span>
                      Download TDS Summary
                    </button>
                  </div>
                </div>
              )}

              {/* Section Info */}
              {result?.section && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Section {result.section.section} - {result.section.category}
                  </h4>
                  <p className="text-sm text-blue-700 mb-2">{result.section.description}</p>
                  <p className="text-sm text-blue-600">
                    <strong>Threshold:</strong> {result.section.threshold}
                  </p>
                  {result.section.example && (
                    <p className="text-sm text-blue-600 mt-2">
                      <strong>Example:</strong> {result.section.example}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-slate mb-6">TDS Calculation</h3>
              
              {result && (
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Gross Amount:</span>
                  <span className="text-xl font-bold text-slate">{formatCurrency(result.grossAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">TDS Rate:</span>
                  <span className="text-lg font-semibold text-[#C9A34A]">{result.tdsRate}%</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">TDS Amount:</span>
                  <span className="text-lg font-semibold text-red-600">{formatCurrency(result.tdsAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-4 bg-green-50 rounded-lg px-4">
                  <span className="font-bold text-slate">Net Amount (After TDS):</span>
                  <span className="text-2xl font-bold text-green-600">{formatCurrency(result.netAmount)}</span>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Compliance Tips Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">🧾 Compliance Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">TDS Payment Process</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Use Challan ITNS 281 for TDS payment</li>
                <li>• Pay by 7th of next month</li>
                <li>• File TDS return quarterly</li>
                <li>• Issue TDS certificate to deductee</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">Best Practices</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Maintain proper records</li>
                <li>• Verify PAN before deduction</li>
                <li>• Calculate TDS accurately</li>
                <li>• File returns on time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rate Comparison Chart */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">📊 Rate Comparison Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Section</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">FY 2024-25</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">FY 2023-24</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Change</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-700">194A (Interest)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-green-600">No Change</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-700">194I (Rent)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-green-600">No Change</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-700">194J (Professional)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">10%</td>
                  <td className="px-4 py-3 text-sm text-green-600">No Change</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm text-gray-700">194C (Contractor)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1%/2%</td>
                  <td className="px-4 py-3 text-sm text-gray-700">1%/2%</td>
                  <td className="px-4 py-3 text-sm text-green-600">No Change</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Non-Resident Mode */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">🌍 Non-Resident Mode</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">DTAA Rate Checker</h4>
            <p className="text-blue-700 mb-4">
              For payments to non-residents, TDS rates may vary based on Double Taxation Avoidance Agreement (DTAA) 
              between India and the recipient&apos;s country.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Check DTAA Rates
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
                View Country-wise Rates
              </button>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-slate mb-4">🧑‍💼 Need Help Filing TDS Return?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our tax experts can help you with TDS compliance, return filing, and ensure you meet all regulatory requirements. 
            Get professional assistance for accurate TDS calculations and timely submissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C9A34A] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Book Free Consultation
            </button>
            <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
              Learn About TDS Services
            </button>
          </div>
        </div>

        {/* TDS Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl font-serif font-bold text-slate mb-6">TDS Sections Overview</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">
              Tax Deducted at Source (TDS) is a means of collecting income tax in India. Under this mechanism, 
              the person making payment (deductor) deducts tax at source and remits it to the government.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(groupedSections).map(([category, sections]) => (
                <div key={category} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate mb-4 text-lg">{category}</h4>
                  <div className="space-y-3">
                    {sections.slice(0, 3).map((section) => (
                      <div key={section.section} className="text-sm">
                        <div className="font-semibold text-slate">
                          Section {section.section} - {section.category}
                        </div>
                        <div className="text-gray-600">
                          Rate: {section.rateIndividual && section.rateOthers 
                            ? `${section.rateIndividual}%/${section.rateOthers}%` 
                            : `${section.rate}%`}
                        </div>
                        <div className="text-gray-600">
                          Threshold: {section.threshold}
                        </div>
              </div>
                    ))}
                    {sections.length > 3 && (
                      <div className="text-sm text-gray-500">
                        ... and {sections.length - 3} more sections
              </div>
                    )}
              </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}