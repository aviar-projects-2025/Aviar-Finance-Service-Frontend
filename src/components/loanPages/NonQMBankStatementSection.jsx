import React, { useMemo, useState } from "react";
import ApplyModalLauncher from "../ApplyModalLauncher";
import { loanFromPI, dollars } from "../../utils/mortgageMath";

const NonQMBankStatementSection = () => {
  const [inputs, setInputs] = useState({
    avgDeposits: 15000,
    usePct: 60,
    monthlyDebts: 1000,
    rate: 7.5,
    termYears: 30,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const calc = useMemo(() => {
    const estIncome = inputs.avgDeposits * (inputs.usePct / 100);
    const maxTotalDebt = estIncome * 0.4;
    const piBudget = Math.max(0, maxTotalDebt - inputs.monthlyDebts);
    const termMonths = inputs.termYears * 12;
    const maxLoan = loanFromPI(piBudget, inputs.rate, termMonths);

    return { estIncome, maxTotalDebt, piBudget, maxLoan };
  }, [inputs]);

  return (
    <section
      style={{
        width: "100%",
        padding: "4rem 2rem",
        background: "#f5f5f7",
        fontFamily: "Inter, sans-serif",
        color: "#111",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            marginBottom: ".75rem",
            color: "#1a1a1a",
            letterSpacing: "-0.5px",
          }}
        >
          Non-QM / Bank Statement Loans
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#555",
            lineHeight: 1.75,
          }}
        >
          Designed for business owners, freelancers, and 1099 earners. Qualify using real cash flow
          from 12–24 months of bank statements—no tax returns required.
        </p>
      </div>

      {/* BENEFITS */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <InfoCard title="No Tax Returns Needed" body="Use 12–24 months of deposits instead of taxable income." />
        <InfoCard title="Ideal for Self-Employed" body="Perfect for business owners, freelancers, and 1099 earners." />
        <InfoCard title="Flexible Income Methods" body="Use business or personal statements, or even 1099s." />
        <InfoCard title="More Property Options" body="Primary, second homes, and investments eligible." />
      </div>

      {/* PROFILE + REQUIREMENTS */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "2.5rem auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <CardBox title="Ideal Borrower Profile">
          <ul style={ulStyle}>
            <li>Self-employed or own a business</li>
            <li>Income mainly from deposits or 1099s</li>
            <li>Strong cash flow but low taxable income</li>
            <li>Needs flexible qualification options</li>
          </ul>
        </CardBox>

        <CardBox title="Typical Requirements">
          <ul style={ulStyle}>
            <li>Mid-600s credit score+</li>
            <li>12–24 months of bank statements</li>
            <li>10–20% down payment</li>
            <li>Reserves may be required</li>
            <li>Primary, second home, or investment</li>
          </ul>
        </CardBox>
      </div>

      {/* CALCULATOR */}
      <div style={{ ...cardStyle, maxWidth: "1400px", margin: "2.5rem auto 0" }}>
        <h3 style={{ margin: "0 0 .75rem", fontWeight: 700 }}>Self-Employed “Fit” Snapshot</h3>

        <p style={{ fontSize: ".95rem", color: "#666", marginBottom: "1rem" }}>
          Simple illustration using bank statement deposits.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {/* Inputs Column 1 */}
          <div>
            {inputBlock("Avg monthly deposits ($)", "avgDeposits", inputs.avgDeposits, update)}
            <label style={labelStyle}>Use % of deposits</label>
            <input
              type="range"
              name="usePct"
              min="40"
              max="90"
              value={inputs.usePct}
              onChange={update}
              style={{ width: "100%" }}
            />
            <p style={{ fontSize: ".85rem", color: "#555" }}>
              Using <b>{inputs.usePct}%</b> of deposit income
            </p>

            {inputBlock("Existing monthly debts ($)", "monthlyDebts", inputs.monthlyDebts, update)}
          </div>

          {/* Inputs Column 2 */}
          <div>
            {inputBlock("Interest rate (APR %)", "rate", inputs.rate, update, "0.05")}
            <label style={labelStyle}>Term (years)</label>
            <select name="termYears" value={inputs.termYears} onChange={update} style={inputStyle}>
              <option value={30}>30-year</option>
              <option value={20}>20-year</option>
              <option value={15}>15-year</option>
            </select>

            <p style={{ fontSize: ".85rem", color: "#666", marginTop: ".5rem" }}>
              Assumes total debts around 40% of estimated income.
            </p>
          </div>

          {/* Results */}
          <div
            style={{
              ...cardStyle,
              background: "#fafafa",
              border: "1px solid #eee",
            }}
          >
            <h4 style={{ marginTop: 0, fontWeight: 600 }}>Results</h4>
            <ResultRow label="Est. Qualifying Income" value={dollars(calc.estIncome)} />
            <ResultRow label="Max Total Debt" value={dollars(calc.maxTotalDebt)} />
            <ResultRow label="P&I Budget" value={dollars(calc.piBudget)} />
            <ResultRow label="Max Loan Amount" value={dollars(calc.maxLoan)} />
          </div>
        </div>
      </div>

      {/* MISCONCEPTIONS */}
      <div style={{ ...cardStyle, maxWidth: "1400px", margin: "2.5rem auto 0" }}>
        <h3 style={{ marginTop: 0, fontWeight: 700 }}>Common Misconceptions</h3>

        <p><b>“Non-QM means risky.”</b></p>
        <p>Non-QM simply means the loan uses alternative documentation.</p>

        <p><b>“Self-employed borrowers can't qualify.”</b></p>
        <p>Bank statement programs exist specifically for this scenario.</p>

        <p><b>“Rates are extremely high.”</b></p>
        <p>Rates vary, and strong borrowers often receive competitive pricing.</p>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "3rem",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "2rem 2.5rem",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #ffffff, #f2f2f2)",
          boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>
            Self-employed or 1099 income?
          </h3>
          <p style={{ marginTop: ".25rem", color: "#555", fontSize: "1rem" }}>
            Let's review your bank statements—no obligation.
          </p>
        </div>

        <ApplyModalLauncher />
      </div>
    </section>
  );
};

/* Shared Styles */
const cardStyle = {
  padding: "1.75rem",
  borderRadius: "18px",
  background: "white",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
};

const ulStyle = {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#333",
  paddingLeft: "1.3rem",
};

const labelStyle = {
  fontSize: ".95rem",
  marginBottom: ".25rem",
  display: "block",
  color: "#222",
  fontWeight: 500,
};

const inputStyle = {
  width: "100%",
  padding: ".75rem .85rem",
  borderRadius: "12px",
  border: "1px solid #ccc",
  background: "white",
  fontSize: "1rem",
  marginBottom: "1rem",
};

const inputBlock = (label, name, value, update, step) => (
  <>
    <label style={labelStyle}>{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={update}
      step={step}
      style={inputStyle}
    />
  </>
);

const CardBox = ({ title, children }) => (
  <div style={cardStyle}>
    <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontWeight: 700 }}>{title}</h3>
    {children}
  </div>
);

const InfoCard = ({ title, body }) => (
  <div
    style={{
      ...cardStyle,
      background: "white",
      border: "1px solid #eee",
    }}
  >
    <h3 style={{ margin: "0 0 .5rem", fontWeight: 700 }}>{title}</h3>
    <p style={{ color: "#666", lineHeight: 1.6, fontSize: ".95rem" }}>{body}</p>
  </div>
);

const ResultRow = ({ label, value }) => (
  <div style={{ display: "flex", justifyContent: "space-between", margin: ".5rem 0" }}>
    <span style={{ color: "#444" }}>{label}</span>
    <span style={{ fontWeight: 700 }}>{value}</span>
  </div>
);

export default NonQMBankStatementSection;
