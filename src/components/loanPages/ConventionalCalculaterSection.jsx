// src/components/loanPages/ConventionalCalculatorSection.jsx
import React, { useMemo, useState } from "react";
import ApplyModalLauncher from "../ApplyModalLauncher";
import { mortgagePI, dollars } from "../../utils/mortgageMath";
import EmailSummaryGenerator from "../tools/EmailSummaryGenerator";

const ConventionalCalculatorSection = () => {
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

  // Prepare data for email template
  const emailData = {
    clientName: "{{CLIENT_NAME}}",
    price: dollars(inputs.price),
    downPct: inputs.downPct,
    downPayment: dollars(inputs.price * (inputs.downPct / 100)),
    loanAmount: dollars(calc.loanAmount),
    ltv: calc.ltv.toFixed(1) + "%",
    piMonthly: dollars(calc.pi),
    tiMonthly: dollars(calc.taxesMonthly + calc.insuranceMonthly),
    pmiMonthly: calc.needsPMI ? dollars(calc.pmiMonthly) : "None",
    totalPayment: dollars(calc.totalPayment),
    loName: "{{LO_NAME}}",
    loPhone: "{{LO_PHONE}}",
    loEmail: "{{LO_EMAIL}}",
  };

  const inputBox = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: ".9rem",
    marginBottom: "12px",
  };

  const label = {
    fontSize: ".85rem",
    color: "#334155",
    fontWeight: 600,
    marginBottom: "4px",
  };

  const row = {
    display: "flex",
    justifyContent: "space-between",
    margin: ".35rem 0",
    fontSize: ".9rem",
    color: "#1e293b",
  };

  const highlightRow = {
    ...row,
    fontWeight: "bold",
    color: "#0f172a",
    fontSize: "1rem",
    marginTop: ".5rem",
    paddingTop: ".5rem",
    borderTop: "2px solid #e2e8f0",
  };

  return (
    <section style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ fontSize: "1.9rem", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>
        Conventional Payment Snapshot
      </h2>
      <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6", marginBottom: "1rem" }}>
        Quick illustration of a Conventional loan payment with principal & interest, taxes, insurance, and estimated PMI.
      </p>

      <div style={{
        background: "white",
        padding: "22px",
        borderRadius: "16px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "1.2rem"
        }}>
          {/* Left Column - Inputs */}
          <div>
            <label style={label}>Home Price ($)</label>
            <input 
              type="number" 
              name="price" 
              value={inputs.price} 
              onChange={update} 
              style={inputBox} 
            />

            <label style={label}>Down Payment (%)</label>
            <input 
              type="number" 
              name="downPct" 
              value={inputs.downPct} 
              onChange={update} 
              style={inputBox} 
            />

            <label style={label}>Interest Rate (APR %)</label>
            <input 
              type="number" 
              step=".01" 
              name="rate" 
              value={inputs.rate} 
              onChange={update} 
              style={inputBox} 
            />

            <label style={label}>Term (years)</label>
            <select 
              name="termYears" 
              value={inputs.termYears} 
              onChange={update} 
              style={inputBox}
            >
              <option value={30}>30-year</option>
              <option value={20}>20-year</option>
              <option value={15}>15-year</option>
            </select>
          </div>

          {/* Middle Column - More Inputs */}
          <div>
            <label style={label}>Annual Property Taxes ($)</label>
            <input 
              type="number" 
              name="taxesAnnual" 
              value={inputs.taxesAnnual} 
              onChange={update} 
              style={inputBox} 
            />

            <label style={label}>Annual Home Insurance ($)</label>
            <input 
              type="number" 
              name="insuranceAnnual" 
              value={inputs.insuranceAnnual} 
              onChange={update} 
              style={inputBox} 
            />

            <label style={label}>PMI Rate (annual % of loan)</label>
            <input 
              type="number" 
              step="0.1" 
              name="pmiAnnualPct" 
              value={inputs.pmiAnnualPct} 
              onChange={update} 
              style={inputBox} 
            />
            <p style={{ fontSize: ".8rem", color: "#64748b", marginTop: ".25rem" }}>
              PMI only applies when LTV `{">"}` 80%
            </p>
          </div>

          {/* Right Column - Results */}
          <div style={{ padding: "1rem", background: "#f8fafc", borderRadius: "12px" }}>
            <h3 style={{ marginTop: 0, fontSize: "1.1rem", color: "#0f172a", marginBottom: "1rem" }}>
              Estimate
            </h3>
            
            <div style={row}>
              <span>Down Payment</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.downPayment)}</span>
            </div>
            
            <div style={row}>
              <span>Loan Amount</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.loanAmount)}</span>
            </div>
            
            <div style={row}>
              <span>Loan-to-Value (LTV)</span>
              <span style={{ fontWeight: 600 }}>{calc.ltv.toFixed(1)}%</span>
            </div>
            
            <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: ".75rem 0" }} />
            
            <div style={row}>
              <span>Principal & Interest</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.pi)}</span>
            </div>
            
            <div style={row}>
              <span>Taxes (monthly)</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.taxesMonthly)}</span>
            </div>
            
            <div style={row}>
              <span>Insurance (monthly)</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.insuranceMonthly)}</span>
            </div>
            
            <div style={row}>
              <span>PMI (if applicable)</span>
              <span style={{ fontWeight: 600 }}>
                {calc.needsPMI ? dollars(calc.pmiMonthly) : "None (LTV ≤ 80%)"}
              </span>
            </div>
            
            <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: ".75rem 0" }} />
            
            <div style={highlightRow}>
              <span>Est. Total Monthly Payment</span>
              <span style={{ color: "#2563eb" }}>{dollars(calc.totalPayment)}</span>
            </div>
          </div>
        </div>

        {/* Email Summary Generator */}
        <div style={{ 
          marginTop: "1.5rem", 
          padding: "1rem", 
          background: "#f0f9ff", 
          borderRadius: "12px",
          border: "1px solid #bae6fd"
        }}>
          <EmailSummaryGenerator 
            calculatorData={emailData} 
            loanType="conventional" 
          />
        </div>

        <p style={{ 
          fontSize: ".85rem", 
          color: "#6b7280", 
          marginTop: "1rem",
          fontStyle: "italic"
        }}>
          This is an illustrative example only and not a commitment to lend. Final loan terms will depend on full underwriting, documentation, property type, assets, reserves, and current guidelines.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{ 
        marginTop: "1.5rem", 
        padding: "1.5rem", 
        background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        color: "white",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h3 style={{ margin: 0, fontSize: "1.3rem", marginBottom: ".5rem" }}>
          Want a Customized Conventional Quote?
        </h3>
        <p style={{ fontSize: ".9rem", opacity: 0.9, marginBottom: "1rem", maxWidth: "600px" }}>
          We'll factor in your exact taxes, insurance, and mortgage insurance options.
        </p>
        <ApplyModalLauncher />
      </div>
    </section>
  );
};

export default ConventionalCalculatorSection;