'use client';

import { useState } from 'react';

interface TaxCalculationData {
  financialYear: string;
  ageGroup: string;
  salary: string | number;
  exemptAllowances: string | number;
  interestIncome: string | number;
  rentalIncome: string | number;
  homeLoanInterest: string | number;
  selfOccupiedInterest: string | number;
  digitalAssetsIncome: string | number;
  section80C: string | number;
  section80D: string | number;
  section80G: string | number;
  section80E: string | number;
  section80TTA: string | number;
}

interface TaxResult {
  oldRegime: {
    taxableIncome: number;
    tax: number;
    surcharge: number;
    cess: number;
    totalTax: number;
  };
  newRegime: {
    taxableIncome: number;
    tax: number;
    surcharge: number;
    cess: number;
    rebate: number;
    totalTax: number;
  };
  savings: number;
  recommendedRegime: 'old' | 'new';
}

export default function TaxCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<TaxCalculationData>({
    financialYear: 'FY 2025-2026',
    ageGroup: '0-60',
    salary: '',
    exemptAllowances: '',
    interestIncome: '',
    rentalIncome: '',
    homeLoanInterest: '',
    selfOccupiedInterest: '',
    digitalAssetsIncome: '',
    section80C: '',
    section80D: '',
    section80G: '',
    section80E: '',
    section80TTA: '',
  });
  const [taxResult, setTaxResult] = useState<TaxResult | null>(null);

  const steps = [
    { id: 1, title: 'Basic Details', description: 'Financial year and age group' },
    { id: 2, title: 'Income Details', description: 'Salary and other income sources' },
    { id: 3, title: 'Deductions', description: 'Tax-saving investments' },
    { id: 4, title: 'Tax Summary', description: 'Compare old vs new regime' },
  ];

  const handleInputChange = (field: keyof TaxCalculationData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTax = (): TaxResult => {
    const { salary, exemptAllowances, interestIncome, rentalIncome, 
            selfOccupiedInterest, digitalAssetsIncome, section80C, section80D, 
            section80G, section80E, section80TTA, ageGroup } = formData;

    // Convert string values to numbers, defaulting to 0 for empty strings
    const salaryNum = typeof salary === 'string' ? (salary === '' ? 0 : parseFloat(salary)) : salary;
    const exemptAllowancesNum = typeof exemptAllowances === 'string' ? (exemptAllowances === '' ? 0 : parseFloat(exemptAllowances)) : exemptAllowances;
    const interestIncomeNum = typeof interestIncome === 'string' ? (interestIncome === '' ? 0 : parseFloat(interestIncome)) : interestIncome;
    const rentalIncomeNum = typeof rentalIncome === 'string' ? (rentalIncome === '' ? 0 : parseFloat(rentalIncome)) : rentalIncome;
    const selfOccupiedInterestNum = typeof selfOccupiedInterest === 'string' ? (selfOccupiedInterest === '' ? 0 : parseFloat(selfOccupiedInterest)) : selfOccupiedInterest;
    const digitalAssetsIncomeNum = typeof digitalAssetsIncome === 'string' ? (digitalAssetsIncome === '' ? 0 : parseFloat(digitalAssetsIncome)) : digitalAssetsIncome;
    const section80CNum = typeof section80C === 'string' ? (section80C === '' ? 0 : parseFloat(section80C)) : section80C;
    const section80DNum = typeof section80D === 'string' ? (section80D === '' ? 0 : parseFloat(section80D)) : section80D;
    const section80GNum = typeof section80G === 'string' ? (section80G === '' ? 0 : parseFloat(section80G)) : section80G;
    const section80ENum = typeof section80E === 'string' ? (section80E === '' ? 0 : parseFloat(section80E)) : section80E;
    const section80TTANum = typeof section80TTA === 'string' ? (section80TTA === '' ? 0 : parseFloat(section80TTA)) : section80TTA;

    // Calculate Gross Total Income
    const grossTotalIncome = salaryNum + interestIncomeNum + rentalIncomeNum + digitalAssetsIncomeNum;

    // Calculate Old Regime Tax
    const oldRegimeDeductions = Math.min(section80CNum, 150000) + section80DNum + section80GNum + section80ENum + section80TTANum;
    const oldRegimeTaxableIncome = Math.max(0, grossTotalIncome - exemptAllowancesNum - oldRegimeDeductions - Math.min(selfOccupiedInterestNum, 200000));
    
    const oldRegimeTax = calculateTaxBySlab(oldRegimeTaxableIncome, ageGroup, 'old');
    const oldRegimeSurcharge = calculateSurcharge(oldRegimeTax, grossTotalIncome);
    const oldRegimeCess = (oldRegimeTax + oldRegimeSurcharge) * 0.04;
    const oldRegimeTotalTax = oldRegimeTax + oldRegimeSurcharge + oldRegimeCess;

    // Calculate New Regime Tax
    const newRegimeTaxableIncome = Math.max(0, grossTotalIncome - exemptAllowancesNum);
    const newRegimeTax = calculateTaxBySlab(newRegimeTaxableIncome, ageGroup, 'new');
    const newRegimeSurcharge = calculateSurcharge(newRegimeTax, grossTotalIncome);
    const newRegimeCess = (newRegimeTax + newRegimeSurcharge) * 0.04;
    const newRegimeRebate = newRegimeTaxableIncome <= 1200000 ? Math.min(newRegimeTax, 60000) : 0;
    const newRegimeTotalTax = Math.max(0, newRegimeTax + newRegimeSurcharge + newRegimeCess - newRegimeRebate);

    const savings = oldRegimeTotalTax - newRegimeTotalTax;

    return {
      oldRegime: {
        taxableIncome: oldRegimeTaxableIncome,
        tax: oldRegimeTax,
        surcharge: oldRegimeSurcharge,
        cess: oldRegimeCess,
        totalTax: oldRegimeTotalTax,
      },
      newRegime: {
        taxableIncome: newRegimeTaxableIncome,
        tax: newRegimeTax,
        surcharge: newRegimeSurcharge,
        cess: newRegimeCess,
        rebate: newRegimeRebate,
        totalTax: newRegimeTotalTax,
      },
      savings: Math.abs(savings),
      recommendedRegime: savings > 0 ? 'new' : 'old',
    };
  };

  const calculateTaxBySlab = (income: number, ageGroup: string, regime: 'old' | 'new'): number => {
    if (regime === 'new') {
      // New Regime FY 2025-26
      if (income <= 400000) return 0;
      if (income <= 800000) return (income - 400000) * 0.05;
      if (income <= 1200000) return 20000 + (income - 800000) * 0.10;
      if (income <= 1600000) return 60000 + (income - 1200000) * 0.15;
      if (income <= 2000000) return 120000 + (income - 1600000) * 0.20;
      if (income <= 2400000) return 200000 + (income - 2000000) * 0.25;
      return 300000 + (income - 2400000) * 0.30;
    } else {
      // Old Regime based on age
      const basicExemption = ageGroup === '60-80' ? 300000 : ageGroup === '80+' ? 500000 : 250000;
      const taxableIncome = Math.max(0, income - basicExemption);
      
      if (taxableIncome <= 0) return 0;
      if (taxableIncome <= 250000) return taxableIncome * 0.05;
      if (taxableIncome <= 500000) return 12500 + (taxableIncome - 250000) * 0.20;
      return 62500 + (taxableIncome - 500000) * 0.30;
    }
  };

  const calculateSurcharge = (tax: number, totalIncome: number): number => {
    if (totalIncome <= 5000000) return 0;
    if (totalIncome <= 10000000) return tax * 0.10;
    if (totalIncome <= 20000000) return tax * 0.15;
    if (totalIncome <= 50000000) return tax * 0.25;
    return tax * 0.37;
  };

  const handleCalculate = () => {
    const result = calculateTax();
    setTaxResult(result);
    setCurrentStep(4);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Financial Year
              </label>
              <select
                value={formData.financialYear}
                onChange={(e) => handleInputChange('financialYear', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
              >
                <option value="FY 2025-2026">FY 2025-2026 (Return to be filed between 1st April 2026 - 31st December 2026) - Latest</option>
                <option value="FY 2024-2025">FY 2024-2025 (Return to be filed between 1st April 2025 - 31st December 2025)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age Group
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: '0-60', label: '0-60' },
                  { value: '60-80', label: '60-80' },
                  { value: '80+', label: '80 & above' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleInputChange('ageGroup', option.value)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      formData.ageGroup === option.value
                        ? 'border-[#C9A34A] bg-[#C9A34A]/10 text-[#C9A34A]'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary (Before deductions)
              </label>
              <input
                type="number"
                value={formData.salary}
                onChange={(e) => handleInputChange('salary', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                placeholder="Enter your annual salary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exempt Allowances (HRA, LTA, etc.)
              </label>
              <input
                type="number"
                value={formData.exemptAllowances}
                onChange={(e) => handleInputChange('exemptAllowances', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                placeholder="Enter exempt allowances"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Income
                </label>
                <input
                  type="number"
                  value={formData.interestIncome}
                  onChange={(e) => handleInputChange('interestIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Bank interest, FD interest"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rental Income
                </label>
                <input
                  type="number"
                  value={formData.rentalIncome}
                  onChange={(e) => handleInputChange('rentalIncome', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Rental income from property"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Loan Interest (Rented Property)
                </label>
                <input
                  type="number"
                  value={formData.homeLoanInterest}
                  onChange={(e) => handleInputChange('homeLoanInterest', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Interest on home loan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Self-Occupied Property Interest
                </label>
                <input
                  type="number"
                  value={formData.selfOccupiedInterest}
                  onChange={(e) => handleInputChange('selfOccupiedInterest', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Max ₹2,00,000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Income from Digital Assets
              </label>
              <input
                type="number"
                value={formData.digitalAssetsIncome}
                onChange={(e) => handleInputChange('digitalAssetsIncome', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                placeholder="Net income (Sale - Cost)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Tax-Saving Investments</h3>
              <p className="text-sm text-blue-700">
                Enter your investments under various sections to reduce your tax liability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section 80C (Max ₹1,50,000)
                </label>
                <input
                  type="number"
                  value={formData.section80C}
                  onChange={(e) => handleInputChange('section80C', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="PPF, ELSS, EPF, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section 80D (Health Insurance)
                </label>
                <input
                  type="number"
                  value={formData.section80D}
                  onChange={(e) => handleInputChange('section80D', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Health insurance premium"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section 80G (Donations)
                </label>
                <input
                  type="number"
                  value={formData.section80G}
                  onChange={(e) => handleInputChange('section80G', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Charitable donations"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section 80E (Education Loan)
                </label>
                <input
                  type="number"
                  value={formData.section80E}
                  onChange={(e) => handleInputChange('section80E', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Education loan interest"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Section 80TTA (Savings Interest)
                </label>
                <input
                  type="number"
                  value={formData.section80TTA}
                  onChange={(e) => handleInputChange('section80TTA', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent"
                  placeholder="Max ₹10,000"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            {taxResult && (
              <>
                {/* Tax Comparison */}
                <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate mb-2">Tax Liability Summary</h3>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-600">Old Regime</div>
                        <div className="text-3xl font-bold text-slate">{formatCurrency(taxResult.oldRegime.totalTax)}</div>
                      </div>
                      <div className="text-2xl text-gray-400">vs</div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-600">New Regime</div>
                        <div className="text-3xl font-bold text-[#C9A34A]">{formatCurrency(taxResult.newRegime.totalTax)}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-lg font-semibold text-gray-600">You save</div>
                      <div className="text-2xl font-bold text-green-600">{formatCurrency(taxResult.savings)}</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Old Regime */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-slate mb-4">Old Regime Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxable Income:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.oldRegime.taxableIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.oldRegime.tax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Surcharge:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.oldRegime.surcharge)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cess:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.oldRegime.cess)}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-semibold text-slate">Total Tax:</span>
                        <span className="font-bold text-slate">{formatCurrency(taxResult.oldRegime.totalTax)}</span>
                      </div>
                    </div>
                  </div>

                  {/* New Regime */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-slate mb-4">New Regime Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxable Income:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.newRegime.taxableIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.newRegime.tax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Surcharge:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.newRegime.surcharge)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cess:</span>
                        <span className="font-semibold">{formatCurrency(taxResult.newRegime.cess)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rebate:</span>
                        <span className="font-semibold text-green-600">-{formatCurrency(taxResult.newRegime.rebate)}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-semibold text-slate">Total Tax:</span>
                        <span className="font-bold text-[#C9A34A]">{formatCurrency(taxResult.newRegime.totalTax)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-slate mb-2">
                      Recommended: {taxResult.recommendedRegime === 'new' ? 'New' : 'Old'} Regime
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {taxResult.recommendedRegime === 'new' 
                        ? 'The new regime offers lower tax liability for your income level.'
                        : 'The old regime with deductions offers better tax savings for your situation.'
                      }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300">
                        File ITR Now
                      </button>
                      <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                        Get Expert Help
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            Income Tax Calculator - FY 2025-2026
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your tax liability and compare old vs new regime. Get accurate calculations based on the latest budget provisions.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id
                    ? 'border-[#C9A34A] bg-[#C9A34A] text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-[#C9A34A]' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-[#C9A34A]' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Back
            </button>

            {currentStep < 3 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
              >
                Continue
              </button>
            ) : currentStep === 3 ? (
              <button
                onClick={handleCalculate}
                className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
              >
                Calculate Tax
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setTaxResult(null);
                  setFormData({
                    financialYear: 'FY 2025-2026',
                    ageGroup: '0-60',
                    salary: '',
                    exemptAllowances: '',
                    interestIncome: '',
                    rentalIncome: '',
                    homeLoanInterest: '',
                    selfOccupiedInterest: '',
                    digitalAssetsIncome: '',
                    section80C: '',
                    section80D: '',
                    section80G: '',
                    section80E: '',
                    section80TTA: '',
                  });
                  // Scroll to top of the page
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
              >
                Calculate Again
              </button>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Notes</h3>
          <ul className="text-sm text-blue-700 space-y-2">
            <li>• This calculator is based on FY 2025-26 tax provisions as per the latest budget.</li>
            <li>• The new regime offers a rebate of ₹60,000 for income up to ₹12 lakhs.</li>
            <li>• Standard deduction of ₹75,000 is automatically applied in the new regime.</li>
            <li>• For accurate filing, consult with our tax experts.</li>
          </ul>
        </div>

        {/* Comprehensive SEO Content */}
        <div className="mt-12 space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">
              Understanding Income Tax Calculation in India
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Calculating income tax can be complex, especially when considering deductions, exempt allowances, and income from various sources. For those unfamiliar with the Income Tax Act, it can be challenging to calculate tax liabilities based on applicable slab rates. That&apos;s where the Lawgical Station Income Tax Calculator comes in. It simplifies manual calculations without the need for in-depth knowledge of tax laws.
              </p>
              
              <h3 className="text-xl font-semibold text-slate mt-6 mb-4">What is the Income Tax Calculator?</h3>
              <p className="mb-4">
                The Lawgical Station Income Tax Calculator is a simple and easy-to-use online tool designed to calculate your tax liability in detail, according to the provisions and rules of the Income Tax Act 1961. It enables you to compare your tax liability between the old and new tax regimes, making choosing the more beneficial option easier. It&apos;s especially useful if you do not understand the sections, provisions and technical aspects of the government&apos;s income tax filing portal. Our calculator has been updated in line with tax changes proposed in the Union Budget 2025. You can plan your taxes and tax liability for relevant financial years more effectively and make informed financial decisions.
              </p>
            </div>
          </div>

          {/* How to Use Guide */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">
              How to Use the Income Tax Calculator for FY 2025-26
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Following are the steps to use our tax calculator:</p>
              <ol className="space-y-3">
                <li><strong>Step 1:</strong> Choose the financial year for which you want your taxes to be calculated.</li>
                <li><strong>Step 2:</strong> Select your age accordingly. Tax liability under the old regime differs based on the age groups.</li>
                <li><strong>Step 3:</strong> Click on &apos;Continue&apos;</li>
                <li><strong>Step 4:</strong> Enter your salary, i.e. salary before deducting various exemptions such as HRA and so on. If LTA deduction is applicable to you, reduce it from salary and enter the net figure. There is a field available for exempt allowances. Enter the particulars if it applies to your case.</li>
                <li><strong>Step 5:</strong> Along with taxable salary, you must enter other details such as interest income, rental income, interest paid on home loan for rented, and interest paid on loan for self-occupied property.</li>
                <li><strong>Step 6:</strong> For Income from Digital Assets, enter the net income (Sale consideration (-) Cost of Acquisition).</li>
                <li><strong>Step 7:</strong> Click on &apos;Continue&apos; again.</li>
                <li><strong>Step 8:</strong> You can also enter your tax-saving investments under sections 80C, 80D, 80G, 80E, and 80TTA, if applicable to your case.</li>
                <li><strong>Step 9:</strong> Click on &apos;Calculate&apos; to calculate your tax liability. You will be able to compare the old and new tax regimes.</li>
              </ol>
            </div>
          </div>

          {/* Tax Slabs */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">
              Income Tax Slab Rates for FY 2025-26
            </h2>
            <div className="space-y-6">
              {/* New Regime FY 2025-26 */}
              <div>
                <h3 className="text-lg font-semibold text-slate mb-4">New Regime Tax Slabs (FY 2025-26)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Income Tax Slabs</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Income Tax Rates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-4 py-2">Up to ₹4 lakh</td><td className="border border-gray-300 px-4 py-2">NIL</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">₹4 lakh - ₹8 lakh</td><td className="border border-gray-300 px-4 py-2">5%</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">₹8 lakh - ₹12 lakh</td><td className="border border-gray-300 px-4 py-2">10%</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">₹12 lakh - ₹16 lakh</td><td className="border border-gray-300 px-4 py-2">15%</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">₹16 lakh - ₹20 lakh</td><td className="border border-gray-300 px-4 py-2">20%</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">₹20 lakh - ₹24 lakh</td><td className="border border-gray-300 px-4 py-2">25%</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">Above ₹24 lakh</td><td className="border border-gray-300 px-4 py-2">30%</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Note:</strong> No income tax for income up to ₹12 Lakhs due to rebate of ₹60,000 applicable to the new regime.
                </p>
              </div>

              {/* Old Regime */}
              <div>
                <h3 className="text-lg font-semibold text-slate mb-4">Old Regime Tax Slabs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Age 0-60 Years</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-2 py-1 text-left">Income Slabs</th>
                            <th className="border border-gray-300 px-2 py-1 text-left">Tax Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-2 py-1">Up to ₹2.5 lakh</td><td className="border border-gray-300 px-2 py-1">NIL</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">₹2.5 lakh - ₹5 lakh</td><td className="border border-gray-300 px-2 py-1">5%</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">₹5 lakh - ₹10 lakh</td><td className="border border-gray-300 px-2 py-1">20%</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">Above ₹10 lakh</td><td className="border border-gray-300 px-2 py-1">30%</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Age 60-80 Years</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-2 py-1 text-left">Income Slabs</th>
                            <th className="border border-gray-300 px-2 py-1 text-left">Tax Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-2 py-1">Up to ₹3 lakh</td><td className="border border-gray-300 px-2 py-1">NIL</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">₹3 lakh - ₹5 lakh</td><td className="border border-gray-300 px-2 py-1">5%</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">₹5 lakh - ₹10 lakh</td><td className="border border-gray-300 px-2 py-1">20%</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">Above ₹10 lakh</td><td className="border border-gray-300 px-2 py-1">30%</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Age 80+ Years</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-2 py-1 text-left">Income Slabs</th>
                            <th className="border border-gray-300 px-2 py-1 text-left">Tax Rates</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-gray-300 px-2 py-1">Up to ₹5 lakh</td><td className="border border-gray-300 px-2 py-1">NIL</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">₹5 lakh - ₹10 lakh</td><td className="border border-gray-300 px-2 py-1">20%</td></tr>
                          <tr><td className="border border-gray-300 px-2 py-1">Above ₹10 lakh</td><td className="border border-gray-300 px-2 py-1">30%</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Surcharge and Cess */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">
              Surcharge and Education Cess
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                If your income exceeds a certain threshold, you will incur additional taxes on top of the existing rates. This additional tax specifically targets high-income earners.
              </p>
              <h3 className="text-lg font-semibold text-slate mt-4 mb-3">Surcharge Rates:</h3>
              <ul className="space-y-2 mb-4">
                <li>• 10% of Income tax if total income &gt; ₹50 lakh and &lt; ₹1 crore</li>
                <li>• 15% of Income tax if total income &gt; ₹1 crore and &lt; ₹2 crore</li>
                <li>• 25% of Income tax if total income &gt; ₹2 crore and &lt; ₹5 crore</li>
                <li>• 37% of Income tax if total income &gt; ₹5 crore</li>
              </ul>
              <p className="mb-4">
                <strong>Note:</strong> The highest surcharge rate of 37% has been reduced to 25% under the new tax regime.
              </p>
              <p className="mb-4">
                Additional Health and Education cess at the rate of 4% will be added to the income tax liability.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <h2 className="text-2xl font-serif font-bold text-slate mb-6">
              Benefits of Using Our Income Tax Calculator
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-slate mb-2">Accuracy</h3>
                    <p className="text-gray-600 text-sm">Our calculator calculates your tax liability accurately, eliminating potential errors from manual calculations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h3 className="font-semibold text-slate mb-2">Swift and Hassle-free</h3>
                    <p className="text-gray-600 text-sm">Calculate your tax liability within seconds and use it anytime, anywhere.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">👥</div>
                  <div>
                    <h3 className="font-semibold text-slate mb-2">User-friendly</h3>
                    <p className="text-gray-600 text-sm">Simply input your income and deduction details to accurately calculate your tax liability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h3 className="font-semibold text-slate mb-2">Better Financial Planning</h3>
                    <p className="text-gray-600 text-sm">Understanding your tax liability in advance helps with effective financial planning and investment decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-serif font-bold text-slate mb-4">
              Need Professional Tax Assistance?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              While our calculator provides accurate estimates, complex tax situations may require expert guidance. Our chartered accountants can help you optimize your tax planning and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#C9A34A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Expert Consultation
              </button>
              <button className="border-2 border-[#C9A34A] text-[#C9A34A] px-8 py-3 rounded-xl font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
