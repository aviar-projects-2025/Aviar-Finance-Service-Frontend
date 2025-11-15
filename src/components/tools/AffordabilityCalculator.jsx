import React, { useMemo, useState } from "react";
import { loanFromPI, mortgagePI, dollars } from "../../utils/mortgageMath";

const AffordabilityCalculator = () => {
  const [inputs, setInputs] = useState({
    annualIncome: 120000,
    monthlyDebts: 500,
    targetDTI: 36,
    rate: 6.5,
    termYears: 30,
    downPct: 10,
    taxesAnnual: 4800,
    insuranceAnnual: 1200,
    hoaMonthly: 0,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setInputs((s) => ({ ...s, [name]: Number(value) }));
  };

  const container = {
    padding: "20px",
    background: "#ffffff",
    borderRadius: "14px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const title = {
    fontSize: "1.8rem",
    marginBottom: "20px",
    fontWeight: "700",
    color: "#0a2e5c",
    textAlign: "center",
  };

  const inputWrapper = {
    minWidth: "260px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const label = {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "6px",
  };

  const input = {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    outline: "none",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  };

  const resultCard = {
    padding: "14px",
    background: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
  };

  const resultLabel = {
    fontSize: "0.75rem",
    color: "#6b7280",
    textTransform: "uppercase",
    marginBottom: "4px",
    letterSpacing: ".04em",
  };

  const resultValue = {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#111827",
  };

  const divider = {
    margin: "20px 0",
    border: "none",
    height: "1px",
    background: "#e5e7eb",
  };

  const note = {
    fontSize: "0.85rem",
    color: "#6b7280",
    marginTop: "10px",
    textAlign: "center",
  };

  const flexRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  };

  // ⬇ All Calculations
  const result = useMemo(() => {
    const grossMonthly = inputs.annualIncome / 12;
    const maxTotalHousingPlusDebts = grossMonthly * (inputs.targetDTI / 100);
    const escrowMonthly =
      inputs.taxesAnnual / 12 +
      inputs.insuranceAnnual / 12 +
      inputs.hoaMonthly;

    const pitiCapacity = Math.max(
      0,
      maxTotalHousingPlusDebts - inputs.monthlyDebts
    );
    const piBudget = Math.max(0, pitiCapacity - escrowMonthly);

    const termMonths = inputs.termYears * 12;
    const maxLoan = loanFromPI(piBudget, inputs.rate, termMonths);
    const priceFromDown = maxLoan / (1 - inputs.downPct / 100);
    const downAmount = priceFromDown * (inputs.downPct / 100);

    const monthlyPI = mortgagePI(maxLoan, inputs.rate, termMonths);
    const monthlyPITI = monthlyPI + escrowMonthly;

    return {
      grossMonthly,
      pitiCapacity,
      escrowMonthly,
      piBudget,
      maxLoan,
      maxPrice: priceFromDown,
      downAmount,
      monthlyPI,
      monthlyPITI,
    };
  }, [inputs]);

  return (
    <section style={container}>
      <h2 style={title}>Affordability Calculator</h2>

      {/* Input Section */}
      <div style={flexRow}>
        {[
          { label: "Annual gross income ($)", key: "annualIncome" },
          { label: "Monthly debts ($)", key: "monthlyDebts" },
          { label: "Target DTI (%)", key: "targetDTI" },
          { label: "Rate (APR %)", key: "rate" },
          { label: "Down payment (%)", key: "downPct" },
          { label: "Property taxes (annual $)", key: "taxesAnnual" },
          { label: "Homeowners insurance (annual $)", key: "insuranceAnnual" },
          { label: "HOA (monthly $)", key: "hoaMonthly" },
        ].map((field) => (
          <div key={field.key} style={inputWrapper}>
            <label style={label}>{field.label}</label>
            <input
              type="number"
              name={field.key}
              value={inputs[field.key]}
              onChange={update}
              style={input}
            />
          </div>
        ))}

        {/* Term Select */}
        <div style={inputWrapper}>
          <label style={label}>Term (years)</label>
          <select
            name="termYears"
            value={inputs.termYears}
            onChange={update}
            style={{ ...input, cursor: "pointer" }}
          >
            <option value={30}>30-year</option>
            <option value={20}>20-year</option>
            <option value={15}>15-year</option>
          </select>
        </div>
      </div>

      <hr style={divider} />

      {/* Results Grid */}
      <div style={grid}>
        <InfoCard label="Gross monthly income" value={dollars(result.grossMonthly)} />
        <InfoCard label="Max housing+debts (DTI)" value={dollars(result.pitiCapacity + inputs.monthlyDebts)} />
        <InfoCard label="Est. escrows (tax/ins/HOA)" value={dollars(result.escrowMonthly)} />
        <InfoCard label="P&I budget" value={dollars(result.piBudget)} />
        <InfoCard label="Max loan amount" value={dollars(result.maxLoan)} />
        <InfoCard label="Down payment (est.)" value={dollars(result.downAmount)} />
        <InfoCard label="Max home price (est.)" value={dollars(result.maxPrice)} />
        <InfoCard label="Est. monthly P&I" value={dollars(result.monthlyPI)} />
        <InfoCard label="Est. monthly PITI" value={dollars(result.monthlyPITI)} />
      </div>

      <p style={note}>
        This is an estimate. Actual affordability varies with credit, loan
        program, MI, property, and lender guidelines.
      </p>
    </section>
  );
};

const InfoCard = ({ label, value }) => {
  const resultCard = {
    padding: "14px",
    background: "#f9fafb",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
  };

  const resultLabel = {
    fontSize: "0.75rem",
    color: "#6b7280",
    textTransform: "uppercase",
    marginBottom: "4px",
    letterSpacing: ".04em",
  };

  const resultValue = {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#111827",
  };

  return (
    <div style={resultCard}>
      <div style={resultLabel}>{label}</div>
      <div style={resultValue}>{value}</div>
    </div>
  );
};

export default AffordabilityCalculator;
