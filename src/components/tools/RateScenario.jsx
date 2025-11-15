import React, { useMemo, useState } from "react";
import { mortgagePI, dollars } from "../../utils/mortgageMath";

const RateScenario = () => {
  const [price, setPrice] = useState(450000);
  const [rate, setRate] = useState(6.25);
  const [downPct, setDownPct] = useState(10);
  const [taxesAnnual, setTaxesAnnual] = useState(5400);
  const [insuranceAnnual, setInsuranceAnnual] = useState(1200);
  const [hoaMonthly, setHoaMonthly] = useState(0);

  const escrowMonthly = useMemo(
    () => taxesAnnual / 12 + insuranceAnnual / 12 + hoaMonthly,
    [taxesAnnual, insuranceAnnual, hoaMonthly]
  );

  const loanAmt = useMemo(
    () => price * (1 - downPct / 100),
    [price, downPct]
  );

  const rows = useMemo(() => {
    const terms = [30, 20, 15];
    return terms.map((y) => {
      const pi = mortgagePI(loanAmt, rate, y * 12);
      return {
        term: `${y}-year fixed`,
        pi,
        piti: pi + escrowMonthly
      };
    });
  }, [loanAmt, rate, escrowMonthly]);


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

        <h2
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#0a2e5c",
            fontWeight: 700,
            marginBottom: "1.5rem"
          }}
        >
          Rate Scenario
        </h2>
        {/* INPUT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.5rem"
          }}
        >
          {/* LEFT INPUTS */}
          <div>
            <label>Home price ($)</label>
            <input
              style={inputStyle}
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />

            <label style={{ display: "block" }}>
              Down payment: {downPct}%
            </label>
            <input
              style={rangeStyle}
              type="range"
              min="0"
              max="30"
              value={downPct}
              onChange={(e) => setDownPct(Number(e.target.value))}
            />

            <label style={{ display: "block", marginTop: ".6rem" }}>
              Rate: {rate}% APR
            </label>
            <input
              style={rangeStyle}
              type="range"
              min="2.5"
              max="10"
              step="0.05"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>

          {/* RIGHT INPUTS */}
          <div>
            <label>Property taxes (annual $)</label>
            <input
              style={inputStyle}
              type="number"
              value={taxesAnnual}
              onChange={(e) => setTaxesAnnual(Number(e.target.value))}
            />

            <label>Homeowners insurance (annual $)</label>
            <input
              style={inputStyle}
              type="number"
              value={insuranceAnnual}
              onChange={(e) => setInsuranceAnnual(Number(e.target.value))}
            />

            <label>HOA (monthly $)</label>
            <input
              style={inputStyle}
              type="number"
              value={hoaMonthly}
              onChange={(e) => setHoaMonthly(Number(e.target.value))}
            />
          </div>

          {/* CARD SUMMARY */}
          <div
            style={{
              background: "#f9fafb",
              borderRadius: "12px",
              padding: "1rem",
              border: "1px solid #eee",
              alignSelf: "start"
            }}
          >
            <div style={labelSm}>Loan amount</div>
            <div style={valueText}>{dollars(loanAmt)}</div>

            <div style={{ ...labelSm, marginTop: ".5rem" }}>
              Escrows (est.)
            </div>
            <div style={valueText}>{dollars(escrowMonthly)}</div>
          </div>
        </div>

        <hr style={{ margin: "1.75rem 0", opacity: 0.4 }} />

        {/* TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95rem"
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={thStyle}>Term</th>
              <th style={thStyle}>P&I / mo</th>
              <th style={thStyle}>PITI / mo (est.)</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr
                key={r.term}
                style={{
                  borderBottom: "1px solid #f2f2f2",
                  transition: "background 0.2s"
                }}
              >
                <td style={tdStyle}>{r.term}</td>
                <td style={tdStyle}>{dollars(r.pi)}</td>
                <td style={tdStyle}>{dollars(r.piti)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          style={{
            fontSize: ".8rem",
            color: "#555",
            marginTop: "1rem",
            textAlign: "center"
          }}
        >
          Estimates exclude mortgage insurance (MI) and points. For FHA/Conventional with &lt;20% down, MI may apply.
        </p>
      </div>
    </section>
  );
};

/* ------------ INLINE STYLE OBJECTS ------------ */
const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  marginBottom: "1rem",
  borderRadius: "10px",
  border: "1px solid #cfcfcf",
  fontSize: ".95rem",
  outline: "none"
};

const rangeStyle = {
  width: "100%",
  marginTop: ".2rem",
  marginBottom: "1rem"
};

const labelSm = {
  fontSize: ".75rem",
  textTransform: "uppercase",
  color: "#777",
  fontWeight: 600
};

const valueText = {
  fontWeight: 700,
  fontSize: "1rem",
  marginTop: ".25rem"
};

const thStyle = {
  padding: ".65rem",
  textAlign: "left",
  fontWeight: 700,
  fontSize: "0.9rem"
};

const tdStyle = {
  padding: ".65rem"
};

export default RateScenario;
