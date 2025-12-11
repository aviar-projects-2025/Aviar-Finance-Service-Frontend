// src/components/loanPages/VaCalculatorSection.jsx
import React, { useMemo, useState } from "react";
import ApplyModalLauncher from "../ApplyModalLauncher";
import { mortgagePI, dollars } from "../../utils/mortgageMath";

const FhaCalculatorSection = () => {
  const [inputs, setInputs] = useState({
    price: 400000,
    downPct: 10,
    rate: 6.75,
    termYears: 30,
    taxesAnnual: 6000,
    insuranceAnnual: 1200,
    pmiAnnualPct: 0.6,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const calc = useMemo(() => {
    const downPayment = inputs.price * (inputs.downPct / 100);
    const loanAmount = inputs.price - downPayment;
    const termMonths = inputs.termYears * 12;

    const pi = mortgagePI(loanAmount, inputs.rate, termMonths);
    const taxesMonthly = inputs.taxesAnnual / 12;
    const insuranceMonthly = inputs.insuranceAnnual / 12;

    const ltv = loanAmount / inputs.price * 100;
    const needsPMI = ltv > 80;
    const pmiMonthly = needsPMI
      ? (loanAmount * (inputs.pmiAnnualPct / 100)) / 12
      : 0;

    const totalPayment = pi + taxesMonthly + insuranceMonthly + pmiMonthly;

    return {
      downPayment,
      loanAmount,
      pi,
      taxesMonthly,
      insuranceMonthly,
      pmiMonthly,
      totalPayment,
      ltv,
      needsPMI,
    };
  }, [inputs]);

  return (
    <section className="container section" id="conventional-calculator">
      <h2 className="section-title">Conventional Payment Snapshot</h2>
      <p className="smalltext">
        Quick illustration of a Conventional loan payment with principal & interest,
        taxes, insurance, and estimated PMI (if applicable).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Inputs Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Home price ($)</label>
            <input
              type="number"
              name="price"
              value={inputs.price}
              onChange={update}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Down payment (%)</label>
            <input
              type="number"
              name="downPct"
              value={inputs.downPct}
              onChange={update}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Interest rate (APR %)</label>
            <input
              type="number"
              name="rate"
              step="0.01"
              value={inputs.rate}
              onChange={update}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Inputs Middle Column */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Term (years)</label>
            <select 
              name="termYears" 
              value={inputs.termYears} 
              onChange={update}
              className="w-full p-2 border rounded"
            >
              <option value={30}>30-year</option>
              <option value={20}>20-year</option>
              <option value={15}>15-year</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Annual property taxes ($)</label>
            <input
              type="number"
              name="taxesAnnual"
              value={inputs.taxesAnnual}
              onChange={update}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Annual insurance ($)</label>
            <input
              type="number"
              name="insuranceAnnual"
              value={inputs.insuranceAnnual}
              onChange={update}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Results Right Column */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Estimate</h3>
          <div className="space-y-3">
            <ResultRow label="Down payment" value={dollars(calc.downPayment)} />
            <ResultRow label="Loan amount" value={dollars(calc.loanAmount)} />
            <ResultRow label="Loan-to-value (LTV)" value={calc.ltv.toFixed(1) + "%"} />
            
            <hr className="my-3" />
            
            <ResultRow label="Principal & interest" value={dollars(calc.pi)} />
            <ResultRow label="Taxes (monthly est.)" value={dollars(calc.taxesMonthly)} />
            <ResultRow label="Insurance (monthly est.)" value={dollars(calc.insuranceMonthly)} />
            <ResultRow
              label="PMI (if applicable)"
              value={calc.needsPMI ? dollars(calc.pmiMonthly) : "None (LTV ≤ 80%)"}
            />
            
            <hr className="my-3" />
            
            <ResultRow 
              label="Est. total monthly payment" 
              value={dollars(calc.totalPayment)} 
              highlight
            />
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-6">
        Actual payments will vary based on your full profile, property, mortgage insurance provider,
        and current Conventional guidelines. This is a starting point only.
      </p>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Want a customized Conventional quote?</h3>
          <p className="text-sm mt-2">
            We'll factor in your exact taxes, insurance, and mortgage insurance options.
          </p>
        </div>
        <ApplyModalLauncher />
      </div>
    </section>
  );
};

const ResultRow = ({ label, value, highlight = false }) => (
  <div className={`flex justify-between ${highlight ? 'text-lg font-bold' : ''}`}>
    <span className="text-gray-700">{label}</span>
    <span className={`font-semibold ${highlight ? 'text-blue-600' : 'text-gray-900'}`}>
      {value}
    </span>
  </div>
);

export default FhaCalculatorSection;