'use client';

import { useState } from 'react';

interface MonthlyHRAData {
  month: string;
  salary: number;
  hraReceived: number;
  rentPaid: number;
  exempted: number;
  taxable: number;
  isMetro: boolean;
}

interface HRACalculation {
  monthlyData: MonthlyHRAData[];
  totalSalary: number;
  totalHRAReceived: number;
  totalRentPaid: number;
  totalExempted: number;
  totalTaxable: number;
}

export default function HRACalculator() {
  const [isMetroCity, setIsMetroCity] = useState(true);
  const [monthlyData, setMonthlyData] = useState<MonthlyHRAData[]>([
    { month: 'April', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'May', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'June', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'July', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'August', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'September', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'October', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'November', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'December', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'January', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'February', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
    { month: 'March', salary: 0, hraReceived: 0, rentPaid: 0, exempted: 0, taxable: 0, isMetro: true },
  ]);
  const [calculation, setCalculation] = useState<HRACalculation | null>(null);

  const calculateHRA = () => {
    const updatedData = monthlyData.map(data => {
      const { salary, hraReceived, rentPaid } = data;
      
      if (salary === 0 || hraReceived === 0 || rentPaid === 0) {
        return { ...data, exempted: 0, taxable: hraReceived };
      }

      // HRA exemption is the minimum of:
    // 1. Actual HRA received
      // 2. Rent paid - 10% of salary
      // 3. 50% of salary (metro) or 40% of salary (non-metro)
      
      const rentMinus10Percent = Math.max(0, rentPaid - (salary * 0.1));
      const percentageLimit = isMetroCity ? salary * 0.5 : salary * 0.4;
      
      const exempted = Math.min(
        hraReceived,
        rentMinus10Percent,
        percentageLimit
      );
      
      const taxable = hraReceived - exempted;

    return {
        ...data,
        exempted: Math.round(exempted * 100) / 100,
        taxable: Math.round(taxable * 100) / 100,
        isMetro: isMetroCity
      };
    });

    setMonthlyData(updatedData);

    const totalSalary = updatedData.reduce((sum, data) => sum + data.salary, 0);
    const totalHRAReceived = updatedData.reduce((sum, data) => sum + data.hraReceived, 0);
    const totalRentPaid = updatedData.reduce((sum, data) => sum + data.rentPaid, 0);
    const totalExempted = updatedData.reduce((sum, data) => sum + data.exempted, 0);
    const totalTaxable = updatedData.reduce((sum, data) => sum + data.taxable, 0);

    setCalculation({
      monthlyData: updatedData,
      totalSalary,
      totalHRAReceived,
      totalRentPaid,
      totalExempted,
      totalTaxable
    });
  };

  const updateMonthlyData = (index: number, field: keyof MonthlyHRAData, value: string) => {
    const updatedData = [...monthlyData];
    updatedData[index] = {
      ...updatedData[index],
      [field]: parseFloat(value) || 0
    };
    setMonthlyData(updatedData);
  };

  const resetCalculator = () => {
    const resetData = monthlyData.map(data => ({
      ...data,
      salary: 0,
      hraReceived: 0,
      rentPaid: 0,
      exempted: 0,
      taxable: 0
    }));
    setMonthlyData(resetData);
    setCalculation(null);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate mb-4">
            HRA Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate your House Rent Allowance (HRA) exemption for tax savings. Get detailed monthly breakdowns and maximize your tax benefits.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          {/* City Type Selection */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-slate mb-6">City Type</h3>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="cityType"
                  checked={isMetroCity}
                  onChange={() => setIsMetroCity(true)}
                  className="mr-3"
                />
                <span className="text-lg">Metro City (50% of salary)</span>
                </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="cityType"
                  checked={!isMetroCity}
                  onChange={() => setIsMetroCity(false)}
                  className="mr-3"
                />
                <span className="text-lg">Non-Metro City (40% of salary)</span>
              </label>
            </div>
              </div>

          {/* Monthly Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Month</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Salary (₹)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">HRA Received (₹)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Rent Paid (₹)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Exempted (₹)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Taxable (₹)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Metro City</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">{data.month}</td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={data.salary || ''}
                        onChange={(e) => updateMonthlyData(index, 'salary', e.target.value)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-sm"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={data.hraReceived || ''}
                        onChange={(e) => updateMonthlyData(index, 'hraReceived', e.target.value)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-sm"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3">
                <input
                  type="number"
                        value={data.rentPaid || ''}
                        onChange={(e) => updateMonthlyData(index, 'rentPaid', e.target.value)}
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-[#C9A34A] focus:border-transparent text-sm"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">
                      {data.exempted.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-red-600 font-semibold">
                      {data.taxable.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {isMetroCity ? 'Yes' : 'No'}
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                {calculation && (
                  <tr className="bg-gray-100 font-semibold">
                    <td className="px-4 py-3 text-sm text-gray-700">Total:</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{calculation.totalSalary.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{calculation.totalHRAReceived.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{calculation.totalRentPaid.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-green-600">{calculation.totalExempted.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-red-600">{calculation.totalTaxable.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={calculateHRA}
              className="bg-[#C9A34A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Calculate HRA
            </button>
            <button
              onClick={resetCalculator}
              className="border-2 border-[#C9A34A] text-[#C9A34A] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A34A] hover:text-white transition-all duration-300"
            >
              Reset All
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        {calculation && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <div className="text-sm text-blue-600 mb-2">Total Salary</div>
              <div className="text-2xl font-bold text-blue-700">
                ₹{calculation.totalSalary.toLocaleString()}
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-sm text-green-600 mb-2">Total HRA Received</div>
              <div className="text-2xl font-bold text-green-700">
                ₹{calculation.totalHRAReceived.toLocaleString()}
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
              <div className="text-sm text-yellow-600 mb-2">Total Exempted</div>
              <div className="text-2xl font-bold text-yellow-700">
                ₹{calculation.totalExempted.toLocaleString()}
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-sm text-red-600 mb-2">Total Taxable</div>
              <div className="text-2xl font-bold text-red-700">
                ₹{calculation.totalTaxable.toLocaleString()}
              </div>
            </div>
          </div>
        )}

        {/* Educational Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold text-slate mb-6">Understanding HRA Exemption</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            House Rent Allowance (HRA) is a tax-exempt component of your salary that helps reduce your taxable income. 
            The exemption is calculated as the minimum of three amounts, helping you save significantly on taxes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-3">📋 HRA Exemption Rules</h4>
              <p className="text-green-700 mb-3">
                HRA exemption is the minimum of:
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Actual HRA received</li>
                <li>• Rent paid - 10% of salary</li>
                <li>• 50% of salary (metro) or 40% (non-metro)</li>
              </ul>
                  </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">🏙️ Metro vs Non-Metro</h4>
              <div className="text-sm text-blue-600 space-y-2">
                <div>
                  <strong>Metro Cities:</strong> Delhi, Mumbai, Chennai, Kolkata (50% of salary)
                  </div>
                <div>
                  <strong>Non-Metro Cities:</strong> All other cities (40% of salary)
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">HRA Calculation Example</h3>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">Example Calculation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-700">
              <div>
                <h5 className="font-semibold mb-2">Given:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Salary: ₹50,000</li>
                  <li>• HRA Received: ₹20,000</li>
                  <li>• Rent Paid: ₹15,000</li>
                  <li>• Metro City: Yes</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Calculation:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Actual HRA: ₹20,000</li>
                  <li>• Rent - 10% salary: ₹10,000</li>
                  <li>• 50% of salary: ₹25,000</li>
                  <li>• <strong>Exempted: ₹10,000</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-slate mb-4">Tips for Maximizing HRA Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📄 Documentation</h4>
              <p className="text-gray-700 text-sm">Keep rent receipts and rental agreement for tax filing and audit purposes.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🏠 Rent Optimization</h4>
              <p className="text-gray-700 text-sm">Ensure rent paid is at least 10% of salary to maximize exemption benefits.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🏙️ City Planning</h4>
              <p className="text-gray-700 text-sm">Consider metro city benefits when planning job locations for higher HRA limits.</p>
        </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">📊 Monthly Tracking</h4>
              <p className="text-gray-700 text-sm">Track monthly variations in salary and rent to optimize annual tax savings.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">💼 Employer Coordination</h4>
              <p className="text-gray-700 text-sm">Coordinate with employer to structure HRA component optimally in salary.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-slate mb-3">🔍 Regular Review</h4>
              <p className="text-gray-700 text-sm">Review HRA calculations annually to ensure maximum tax benefits.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#C9A34A]/10 to-yellow-400/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-slate mb-4">Need Professional Tax Planning?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our tax experts can help you optimize your HRA benefits, ensure proper documentation, and maximize your tax savings.
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