import React, { useState } from "react";
import ApplyModalLauncher from "../ApplyModalLauncher";

const loanTypes = ["Conventional", "FHA", "VA", "USDA"];

const comparisonData = {
  Conventional: {
    down: "3%+ (primary)",
    credit: "Typically 620+",
    mi: "PMI until ~20% equity",
    occupancy: "Primary, second, investment",
    bestFor: "Strong credit, flexibility, long-term cost",
  },
  FHA: {
    down: "3.5%+",
    credit: "More flexible; allows lower scores",
    mi: "Upfront + monthly MIP",
    occupancy: "Primary residence only",
    bestFor: "First-time or credit-challenged buyers",
  },
  VA: {
    down: "Often 0%",
    credit: "Flexible for eligible veterans",
    mi: "No monthly MI; funding fee may apply",
    occupancy: "Primary residence only",
    bestFor: "Veterans & service members",
  },
  USDA: {
    down: "0% (eligible areas)",
    credit: "Varies; generally moderate",
    mi: "Guarantee fee + monthly fee",
    occupancy: "Primary residence in eligible area",
    bestFor: "Rural / outer-suburban buyers",
  },
};

const LoanComparisonTool = () => {
  const [selected, setSelected] = useState(["Conventional", "FHA", "VA", "USDA"]);

  const toggle = (lt) =>
    setSelected((prev) =>
      prev.includes(lt) ? prev.filter((x) => x !== lt) : [...prev, lt]
    );

  const active = selected.length ? selected : ["Conventional", "FHA"];

  const styles = {
    section: { maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" },
    title: { fontSize: "1.9rem", fontWeight: 700, color: "#0a2e5c", marginBottom: "10px" },
    smallText: { fontSize: ".9rem", color: "#4b5563", marginBottom: "20px" },

    btnWrap: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "15px",
    },

    btnPrimary: {
      background: "#0b5ed7",
      color: "#fff",
      border: "1px solid #0b5ed7",
      padding: "8px 14px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: ".9rem",
      transition: "0.2s",
    },
    btnOutline: {
      background: "#fff",
      color: "#0b5ed7",
      border: "1px solid #c7d2fe",
      padding: "8px 14px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: ".9rem",
      transition: "0.2s",
    },

    card: {
      background: "#ffffff",
      borderRadius: "14px",
      padding: "0",
      marginTop: "10px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
      overflowX: "auto",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "650px",
    },
    th: {
      padding: "10px",
      textAlign: "left",
      fontSize: ".95rem",
      fontWeight: 700,
      color: "#0a2e5c",
      borderBottom: "1px solid #e5e7eb",
    },
    td: {
      padding: "10px",
      fontSize: ".9rem",
      color: "#374151",
      borderBottom: "1px solid #f3f4f6",
    },
    rowLabel: { fontWeight: 600, color: "#111827" },

    ctaBanner: {
      marginTop: "20px",
      padding: "18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "12px",
      background: "#eef2ff",
      boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
      flexWrap: "wrap",
      gap: "10px",
    },
  };

  return (
    <section style={styles.section} id="comparison">
      <h2 style={styles.title}>Compare Loan Types</h2>
      <p style={styles.smallText}>
        Toggle the loan types you want to compare. This is a high-level overview;
        we’ll build a precise quote based on your profile.
      </p>

      {/* Loan Type Toggles */}
      <div style={styles.btnWrap}>
        {loanTypes.map((lt) => (
          <button
            key={lt}
            onClick={() => toggle(lt)}
            style={active.includes(lt) ? styles.btnPrimary : styles.btnOutline}
          >
            {lt}
          </button>
        ))}
      </div>

      {/* Comparison Card */}
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              {active.map((lt) => (
                <th key={lt} style={styles.th}>{lt}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <Row label="Typical minimum down" styles={styles}>
              {active.map((lt) => comparisonData[lt].down)}
            </Row>

            <Row label="Credit profile" styles={styles}>
              {active.map((lt) => comparisonData[lt].credit)}
            </Row>

            <Row label="Mortgage insurance / fees" styles={styles}>
              {active.map((lt) => comparisonData[lt].mi)}
            </Row>

            <Row label="Occupancy" styles={styles}>
              {active.map((lt) => comparisonData[lt].occupancy)}
            </Row>

            <Row label="Often best for" styles={styles}>
              {active.map((lt) => comparisonData[lt].bestFor)}
            </Row>
          </tbody>
        </table>
      </div>

      {/* CTA Banner */}
      <div style={styles.ctaBanner}>
        <div>
          <h3 style={{ margin: 0, color: "#0a2e5c" }}>Not sure which fits you?</h3>
          <p style={{ ...styles.smallText, margin: 0 }}>
            Use our quick wizard or talk with a loan specialist.
          </p>
        </div>

        <ApplyModalLauncher />
      </div>
    </section>
  );
};

const Row = ({ label, children, styles }) => (
  <tr>
    <td style={{ ...styles.rowLabel, ...styles.td }}>{label}</td>
    {React.Children.map(children, (child, idx) => (
      <td key={idx} style={styles.td}>{child}</td>
    ))}
  </tr>
);

export default LoanComparisonTool;
