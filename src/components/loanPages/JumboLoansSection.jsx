// FULL MERGED CODE BELOW — OMITTING NOTHING

import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import ApplyModalLauncher from "../ApplyModalLauncher";
import { loanFromPI, dollars } from "../../utils/mortgageMath";

const JumboLoansSection = () => {

  /* ---------------------------------- STYLES ---------------------------------- */

  const container = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const section = {
    marginTop: "40px",
  };

  const title = {
    fontSize: "1.9rem",
    fontWeight: 700,
    marginBottom: "15px",
    color: "#0f172a",
  };

  const smallText = {
    fontSize: "0.95rem",
    color: "#475569",
    lineHeight: "1.6",
  };

  const card = {
    background: "#ffffff",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",
  };

  const flexCard = {
    padding: "22px",
    borderRadius: "14px",
    background: "white",
    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.2rem",
    marginTop: "1rem",
  };

  const heroGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "2rem",
    alignItems: "flex-start",
  };

  const pill = {
    background: "#e7efff",
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: ".8rem",
    fontWeight: 600,
    color: "#1e3a8a",
    marginBottom: "12px",
  };

  const inputLabel = {
    fontSize: ".85rem",
    color: "#334155",
    fontWeight: 600,
    marginBottom: "4px",
  };

  const inputBox = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: ".9rem",
    marginBottom: "12px",
  };

  const listCard = {
    padding: "22px",
    background: "#ffffff",
    borderRadius: "14px",
    boxShadow: "0px 4px 14px rgba(0,0,0,0.06)",
  };

  const ulList = {
    fontSize: "0.95rem",
    color: "#475569",
    lineHeight: "1.6",
    paddingLeft: "20px",
  };

  const ctaBox = {
    marginTop: "2rem",
    padding: "1.75rem",
    borderRadius: "18px",
    background: "white",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "center",
  };


  /* ---------------------------------- STATE ---------------------------------- */

  const [inputs, setInputs] = useState({
    annualIncome: 250000,
    monthlyDebts: 1500,
    targetDTI: 43,
    rate: 6.75,
    termYears: 30,
    downPct: 20,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const calc = useMemo(() => {
    const grossMonthly = inputs.annualIncome / 12;
    const maxTotalDebt = grossMonthly * (inputs.targetDTI / 100);
    const piBudget = Math.max(0, maxTotalDebt - inputs.monthlyDebts);
    const termMonths = inputs.termYears * 12;
    const maxLoan = loanFromPI(piBudget, inputs.rate, termMonths);
    const maxPrice = maxLoan / (1 - inputs.downPct / 100);
    const downAmount = maxPrice * (inputs.downPct / 100);

    return { grossMonthly, maxTotalDebt, piBudget, maxLoan, maxPrice, downAmount };
  }, [inputs]);


  /* ---------------------------------- JSX ---------------------------------- */

  return (
    <>
      <Helmet>
        <title>Jumbo Home Loans – High-Balance Mortgage Options | AVIAR Financial</title>
        <meta
          name="description"
          content="Explore jumbo loan options from AVIAR Financial Services. Designed for higher-priced homes, jumbo mortgages offer flexibility, competitive rates, and strong buyer advantages."
        />
      </Helmet>

      {/* Modal full-width override */}
      <style>{`
        .modal-dialog {
          max-width: 100vw !important;
          margin: 0 !important;
        }
        .modal-content {
          width: 100vw !important;
          border-radius: 0 !important;
        }
      `}</style>

      <div style={{ paddingBottom: "50px", background: "#ffffff" }}>

        {/* HERO */}
        <section style={{ background: "#f1f5f9", padding: "40px 0" }}>
          <div style={{ ...container, ...heroGrid }}>
            <div>
              <div style={pill}>Jumbo Mortgage • High-Balance Loans</div>

              <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px", color: "#0f172a" }}>
                Jumbo Home Loans
              </h1>

              <p style={{ ...smallText, maxWidth: "90%" }}>
                Jumbo loans are designed for buyers purchasing higher-priced homes that exceed
                standard conforming limits. Perfect for premium properties, self-employed borrowers,
                and high-income households.
              </p>

              <div style={{ marginTop: "18px" }}>
                <ApplyModalLauncher />
              </div>

              <p style={{ ...smallText, marginTop: ".6rem" }}>
                No SSN required for initial pre-qualification.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0, fontSize: "1.2rem", color: "#0f172a" }}>At a glance</h3>
              <ul style={{ ...smallText, marginTop: "12px", paddingLeft: "18px" }}>
                <li>Loan amounts above conforming limits</li>
                <li>Credit scores typically 700+</li>
                <li>10–20%+ down depending on profile</li>
                <li>Competitive pricing for strong borrowers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Why Choose a Jumbo Loan?</h2>

          <div style={grid}>
            <BenefitCard title="Higher loan amounts" body="Finance premium properties without multiple mortgages." />
            <BenefitCard title="Flexible structures" body="Choose fixed or ARM terms tailored to your strategy." />
            <BenefitCard title="Competitive pricing" body="Top-qualified borrowers may receive near-conforming rates." />
            <BenefitCard title="Ideal for luxury homes" body="Perfect for move-up buyers and custom-built homes." />
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Typical Eligibility Snapshot</h2>

          <div style={grid}>
            <Info label="Minimum credit score" value="Around 700+" />
            <Info label="Down payment" value="10–20%+ depending on loan size" />
            <Info label="Target DTI" value="Up to ~43%" />
            <Info label="Reserves" value="Several months typically required" />
          </div>
        </section>

        {/* 🔥 NEW — IDEAL BORROWER + REQUIREMENTS BOXES */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Ideal Borrower & Requirements</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "1.2rem",
          }}>
            <div style={listCard}>
              <h3 style={{ marginTop: 0 }}>Ideal Borrower Profile</h3>
              <ul style={ulList}>
                <li>Homes above conforming limits</li>
                <li>Strong, stable income</li>
                <li>Excellent credit</li>
                <li>Healthy reserves</li>
                <li>Comfortable with documentation</li>
              </ul>
            </div>

            <div style={listCard}>
              <h3 style={{ marginTop: 0 }}>Typical Requirements</h3>
              <ul style={ulList}>
                <li>Credit score around <b>700+</b></li>
                <li><b>10–20%+</b> down payment</li>
                <li>DTI at or below <b>43–45%</b></li>
                <li>Several months of reserves</li>
                <li>Full documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CALCULATOR */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Jumbo Affordability Snapshot</h2>

          <div style={card}>
            <p style={{ ...smallText, marginBottom: "1rem" }}>
              High-level illustration only. Not a pre-approval.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "1.2rem",
            }}>
              <div>
                <label style={inputLabel}>Annual Household Income ($)</label>
                <input type="number" name="annualIncome" value={inputs.annualIncome} onChange={update} style={inputBox} />

                <label style={inputLabel}>Monthly Debts ($)</label>
                <input type="number" name="monthlyDebts" value={inputs.monthlyDebts} onChange={update} style={inputBox} />

                <label style={inputLabel}>Target DTI (%)</label>
                <input type="number" name="targetDTI" value={inputs.targetDTI} onChange={update} style={inputBox} />
              </div>

              <div>
                <label style={inputLabel}>Interest Rate (APR %)</label>
                <input type="number" step="0.01" name="rate" value={inputs.rate} onChange={update} style={inputBox} />

                <label style={inputLabel}>Term (years)</label>
                <select name="termYears" value={inputs.termYears} onChange={update} style={inputBox}>
                  <option value={30}>30-year</option>
                  <option value={20}>20-year</option>
                  <option value={15}>15-year</option>
                </select>

                <label style={inputLabel}>Down Payment (%)</label>
                <input type="number" name="downPct" value={inputs.downPct} onChange={update} style={inputBox} />
              </div>

              <div style={{ padding: "1rem", background: "#f8fafc", borderRadius: "12px" }}>
                <ResultRow label="Gross Monthly" value={dollars(calc.grossMonthly)} />
                <ResultRow label="Max Total Debt" value={dollars(calc.maxTotalDebt)} />
                <ResultRow label="P&I Budget" value={dollars(calc.piBudget)} />
                <ResultRow label="Max Loan Amount" value={dollars(calc.maxLoan)} />
                <ResultRow label="Max Purchase Price" value={dollars(calc.maxPrice)} />
                <ResultRow label="Down Payment" value={dollars(calc.downAmount)} />
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 NEW — MISCONCEPTIONS */}
        <section style={{ ...container, ...section }}>
          <div style={flexCard}>
            <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Common Misconceptions</h2>

            <p><b>“Jumbo loans are only for the ultra-rich.”</b></p>
            <p>Many families use jumbo loans as their primary mortgage tool.</p>

            <p><b>“Jumbo loans always have high rates.”</b></p>
            <p>Strong profiles often receive competitive pricing.</p>

            <p><b>“You must put 20–30% down.”</b></p>
            <p>Some programs allow as low as 10% down.</p>
          </div>
        </section>

        {/* 🔥 NEW — CTA */}
        <section style={{ ...container, ...section }}>
          <div style={ctaBox}>
            <div>
              <h3 style={{ margin: 0, fontSize: "1.4rem" }}>Considering a higher-priced home?</h3>
              <p style={{ margin: ".25rem 0", color: "#555" }}>
                Let’s explore your jumbo options — no obligations.
              </p>
            </div>
            <ApplyModalLauncher />
          </div>
        </section>

      </div>
    </>
  );
};


/* ---------------------------------- SUB COMPONENTS ---------------------------------- */

const BenefitCard = ({ title, body }) => (
  <div style={{
    background: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
  }}>
    <h3 style={{ marginTop: 0, fontSize: "1.05rem", color: "#0f172a" }}>{title}</h3>
    <p style={{ fontSize: ".9rem", color: "#475569", lineHeight: "1.5" }}>{body}</p>
  </div>
);

const Info = ({ label, value }) => (
  <div style={{
    background: "#ffffff",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
  }}>
    <div style={{
      textTransform: "uppercase",
      fontSize: ".8rem",
      fontWeight: 600,
      color: "#64748b",
    }}>{label}</div>
    <div style={{
      fontWeight: 700,
      marginTop: ".25rem",
      fontSize: ".95rem",
      color: "#1e293b",
    }}>{value}</div>
  </div>
);

const ResultRow = ({ label, value }) => (
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    margin: ".35rem 0",
    fontSize: ".9rem",
    color: "#1e293b",
  }}>
    <span>{label}</span>
    <span style={{ fontWeight: 700 }}>{value}</span>
  </div>
);

export default JumboLoansSection;
