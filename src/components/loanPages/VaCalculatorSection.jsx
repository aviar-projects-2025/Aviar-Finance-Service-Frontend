// src/components/loanPages/VaCalculatorSection.jsx
import React, { useMemo, useState } from "react";
import ApplyModalLauncher from "../ApplyModalLauncher";
import { mortgagePI, dollars } from "../../utils/mortgageMath";
import EmailSummaryGenerator from "../tools/EmailSummaryGenerator";

const VaCalculatorSection = () => {
  const [inputs, setInputs] = useState({
    price: 350000,
    downPct: 0,
    rate: 6.25,
    termYears: 30,
    fundingFeePct: 2.15, // % of base loan (example: first use, no down)
    taxesAnnual: 4800,
    insuranceAnnual: 1000,
    exemptFundingFee: false,
  });

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number(value),
    }));
  };

  const calc = useMemo(() => {
    const downPayment = inputs.price * (inputs.downPct / 100);
    const baseLoan = inputs.price - downPayment;
    const fundingFee = inputs.exemptFundingFee
      ? 0
      : baseLoan * (inputs.fundingFeePct / 100);
    const totalLoan = baseLoan + fundingFee;

    const termMonths = inputs.termYears * 12;
    const pi = mortgagePI(totalLoan, inputs.rate, termMonths);

    const taxesMonthly = inputs.taxesAnnual / 12;
    const insuranceMonthly = inputs.insuranceAnnual / 12;

    const totalPayment = pi + taxesMonthly + insuranceMonthly;
    const ltv = baseLoan / inputs.price * 100;

    return {
      downPayment,
      baseLoan,
      fundingFee,
      totalLoan,
      pi,
      taxesMonthly,
      insuranceMonthly,
      totalPayment,
      ltv,
    };
  }, [inputs]);

  // Prepare data for email template
  const emailData = {
    clientName: "{{CLIENT_NAME}}",
    price: dollars(inputs.price),
    downPct: inputs.downPct,
    downPayment: dollars(inputs.price * (inputs.downPct / 100)),
    baseLoan: dollars(calc.baseLoan),
    fundingFee: dollars(calc.fundingFee),
    fundingFeePct: inputs.fundingFeePct,
    totalLoan: dollars(calc.totalLoan),
    ltv: calc.ltv.toFixed(1) + "%",
    piMonthly: dollars(calc.pi),
    tiMonthly: dollars(calc.taxesMonthly + calc.insuranceMonthly),
    totalPayment: dollars(calc.totalPayment),
    loName: "{{LO_NAME}}",
    loPhone: "{{LO_PHONE}}",
    loEmail: "{{LO_EMAIL}}",
  };

  // Inline styles to match your existing code
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

  const checkboxLabel = {
    display: "flex",
    alignItems: "center",
    fontSize: ".85rem",
    color: "#475569",
    marginTop: ".5rem",
  };

  const checkbox = {
    marginRight: "8px",
    width: "16px",
    height: "16px",
  };

  return (
    <section style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ fontSize: "1.9rem", fontWeight: 700, color: "#0f172a", marginBottom: "14px" }}>
        VA Loan Payment Snapshot
      </h2>
      <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6", marginBottom: "1rem" }}>
        A simplified VA estimate including base loan, VA funding fee, and total monthly payment.
        VA loans typically have no monthly mortgage insurance.
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
            <label style={label}>VA Funding Fee (%)</label>
            <input 
              type="number" 
              step="0.01"
              name="fundingFeePct" 
              value={inputs.fundingFeePct} 
              onChange={update} 
              style={inputBox}
              disabled={inputs.exemptFundingFee}
            />

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

            <label style={checkboxLabel}>
              <input
                type="checkbox"
                name="exemptFundingFee"
                checked={inputs.exemptFundingFee}
                onChange={update}
                style={checkbox}
              />
              Funding fee exempt (for some eligible veterans)
            </label>
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
              <span>Base VA Loan (before fee)</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.baseLoan)}</span>
            </div>
            
            <div style={row}>
              <span>VA Funding Fee (est.)</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.fundingFee)}</span>
            </div>
            
            <div style={row}>
              <span>Total Loan Amount</span>
              <span style={{ fontWeight: 600 }}>{dollars(calc.totalLoan)}</span>
            </div>
            
            <div style={row}>
              <span>Estimated LTV</span>
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
              <span>Monthly Mortgage Insurance</span>
              <span style={{ fontWeight: 600 }}>N/A for VA</span>
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
            loanType="va" 
          />
        </div>

        <p style={{ 
          fontSize: ".85rem", 
          color: "#6b7280", 
          marginTop: "1rem",
          fontStyle: "italic"
        }}>
          Actual VA funding fee rates depend on service history, first vs. subsequent use, and
          down payment. Some borrowers are fully exempt. This is for discussion only.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{ 
        marginTop: "1.5rem", 
        padding: "1.5rem", 
        background: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
        color: "white",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h3 style={{ margin: 0, fontSize: "1.3rem", marginBottom: ".5rem" }}>
          Ready to Explore Your VA Benefit?
        </h3>
        <p style={{ fontSize: ".9rem", opacity: 0.9, marginBottom: "1rem", maxWidth: "600px" }}>
          We'll confirm your eligibility and refine this estimate with your COE and full profile.
        </p>
        <ApplyModalLauncher />
      </div>
    </section>
  );
};

const ResultRow = ({ label, value, highlight = false }) => (
  <div style={{ 
    display: "flex", 
    justifyContent: "space-between", 
    margin: highlight ? ".5rem 0" : ".35rem 0",
    fontSize: highlight ? "1rem" : ".9rem",
    fontWeight: highlight ? "bold" : "normal",
    color: highlight ? "#0f172a" : "#1e293b",
    borderTop: highlight ? "2px solid #e2e8f0" : "none",
    paddingTop: highlight ? ".5rem" : "0"
  }}>
    <span>{label}</span>
    <span style={{ color: highlight ? "#2563eb" : "inherit", fontWeight: "600" }}>
      {value}
    </span>
  </div>
);

export default VaCalculatorSection;