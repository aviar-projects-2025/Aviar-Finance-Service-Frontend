import React, { useMemo, useState } from "react";
import { mortgagePI, dollars, fixed2 } from "../../utils/mortgageMath";

const RefinanceSavings = () => {
  const [inputs, setInputs] = useState({
    currBalance: 320000,
    currRate: 6.75,
    currRemainingYears: 27,
    newRate: 5.99,
    newTermYears: 30,
    fees: 3500,
    rollInFees: true
  });

  const update = (e) => {
    const { name, type, value, checked } = e.target;
    setInputs((s) => ({ ...s, [name]: type === "checkbox" ? checked : Number(value) }));
  };

  const result = useMemo(() => {
    const currMonths = inputs.currRemainingYears * 12;
    const newMonths = inputs.newTermYears * 12;

    const currPI = mortgagePI(inputs.currBalance, inputs.currRate, currMonths);

    const newPrincipal = inputs.currBalance + (inputs.rollInFees ? inputs.fees : 0);
    const newPI = mortgagePI(newPrincipal, inputs.newRate, newMonths);

    const monthlySavings = currPI - newPI;
    const breakEvenMonths =
      monthlySavings > 0
        ? (inputs.rollInFees ? 0 : (inputs.fees / monthlySavings))
        : Infinity;

    const totalSavings36 = monthlySavings * 36 - (inputs.rollInFees ? 0 : inputs.fees);

    return { currPI, newPI, monthlySavings, breakEvenMonths, totalSavings36 };
  }, [inputs]);

  return (
    <section style={{ padding: "2rem 0" }}>

      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          border: "1px solid #e5e5e5"
        }}
      >
        {/* INPUT GRID */}
        <h2
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#0a2e5c",
            fontWeight: 700,
            marginBottom: "1.5rem"
          }}
        >
          Refinance Savings
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.5rem"
          }}
        >

          {/* CURRENT LOAN */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
              Current Loan
            </h4>

            <label>Balance ($)</label>
            <input
              style={inputStyle}
              name="currBalance"
              type="number"
              value={inputs.currBalance}
              onChange={update}
            />

            <label>Rate (APR %)</label>
            <input
              style={inputStyle}
              name="currRate"
              type="number"
              step="0.01"
              value={inputs.currRate}
              onChange={update}
            />

            <label>Remaining term (years)</label>
            <input
              style={inputStyle}
              name="currRemainingYears"
              type="number"
              value={inputs.currRemainingYears}
              onChange={update}
            />
          </div>

          {/* NEW LOAN */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
              New Loan
            </h4>

            <label>New rate (APR %)</label>
            <input
              style={inputStyle}
              name="newRate"
              type="number"
              step="0.01"
              value={inputs.newRate}
              onChange={update}
            />

            <label>New term (years)</label>
            <input
              style={inputStyle}
              name="newTermYears"
              type="number"
              value={inputs.newTermYears}
              onChange={update}
            />

            <label>Fees & points ($)</label>
            <input
              style={inputStyle}
              name="fees"
              type="number"
              value={inputs.fees}
              onChange={update}
            />

            <div style={{ marginTop: ".6rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
              <input
                id="rollInFees"
                name="rollInFees"
                type="checkbox"
                checked={inputs.rollInFees}
                onChange={update}
              />
              <label htmlFor="rollInFees">Roll fees into new loan</label>
            </div>
          </div>
        </div>

        <hr style={{ margin: "1.8rem 0", opacity: 0.4 }} />

        {/* RESULTS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "1rem"
          }}
        >
          <Info label="Current monthly P&I" value={dollars(result.currPI)} />
          <Info label="New monthly P&I" value={dollars(result.newPI)} />
          <Info label="Monthly savings" value={dollars(result.monthlySavings)} />
          <Info
            label="Break-even (months)"
            value={isFinite(result.breakEvenMonths) ? fixed2(result.breakEvenMonths) : "—"}
          />
          <Info
            label="Savings after 36 months (net)"
            value={dollars(result.totalSavings36)}
          />
        </div>

        <p style={{ fontSize: ".8rem", color: "#555", marginTop: "1rem", textAlign: "center" }}>
          Does not include taxes/insurance/MI or prepayment penalties. Actual terms depend on credit, LTV, and product.
        </p>
      </div>
    </section>
  );
};

/* REUSABLE CARD */
const Info = ({ label, value }) => (
  <div
    style={{
      background: "#f9fafb",
      padding: "1rem",
      borderRadius: "12px",
      border: "1px solid #eee"
    }}
  >
    <div
      style={{
        fontSize: ".75rem",
        textTransform: "uppercase",
        color: "#777",
        fontWeight: 600
      }}
    >
      {label}
    </div>
    <div style={{ fontWeight: 700, fontSize: "1rem", marginTop: ".25rem" }}>{value}</div>
  </div>
);

/* INPUT STYLE (shared inline style object) */
const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  marginBottom: "1rem",
  borderRadius: "10px",
  border: "1px solid #cfcfcf",
  fontSize: ".95rem",
  outline: "none"
};

export default RefinanceSavings;
