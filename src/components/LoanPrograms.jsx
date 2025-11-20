import React, { useState } from "react";
import LoanComparisonTool from "../components/loanPages/LoanComparisonTool";
import LoanSelectorWizard from "../components/loanPages/LoanSelectorWizard";

const loanData = [
  { title: "Conventional", tag: "Most common", desc: "As low as 3% down with strong credit.", key: "CONVENTIONAL" },
  { title: "FHA Loans", tag: "Low down", desc: "Flexible credit, low down payment.", key: "FHA" },
  { title: "VA Loans", tag: "Veterans", desc: "0% down for eligible veterans.", key: "VA" },
  { title: "USDA Loans", tag: "Rural", desc: "0% down for eligible rural properties.", key: "USDA" },
  { title: "Jumbo Loans", tag: "High value", desc: "For higher-priced homes.", key: "JUMBO" },
  {
    title: "Non-QM / Bank Statement Loans",
    tag: "Self-employed",
    desc: "Qualify using bank statements instead of tax returns.",
    key: "NON_QM",
  },

  {
    title: "HELOC & Home Equity",
    tag: "Access equity",
    desc: "Tap into home equity without refinancing your first mortgage.",
    key: "HOME_EQUITY",
  },


];

const LoanPrograms = ({ onOpenLoan }) => {
  const [openComparison, setOpenComparison] = useState(false);
  const [openWizard, setOpenWizard] = useState(false);

  const styles = {
    section: { padding: "80px 20px", backgroundColor: "#f9fafb", textAlign: "center" },
    title: { fontSize: "2rem", fontWeight: "700", color: "#0a2e5c", marginBottom: "20px" },

    controlRow: {
      display: "flex",
      gap: "12px",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
      flexWrap: "wrap",
    },

    btn: {
      background: "#ffffff",
      color: "#0a2e5c",
      border: "1px solid #c7d2fe",
      padding: "10px 14px",
      borderRadius: "10px",
      fontSize: "0.95rem",
      cursor: "pointer",
      boxShadow: "0 2px 6px rgba(15,23,42,0.04)",
    },

    btnActive: {
      background: "#eef2ff",
      borderColor: "#93c5fd",
      boxShadow: "0 6px 18px rgba(14, 41, 103, 0.06)",
    },

    dropdownContainer: {
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto 30px auto",
      textAlign: "left",
    },

    dropdownPanel: (open) => ({
      maxHeight: open ? "1200px" : "0px",
      overflow: "hidden",
      transition: "max-height 0.45s ease",
      borderRadius: "12px",
      boxShadow: open ? "0 10px 30px rgba(2,6,23,0.06)" : "none",
      background: "#fff",
      border: open ? "1px solid #eef2ff" : "1px solid transparent",
      padding: open ? "18px" : "0 18px",
    }),

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "25px 20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      textAlign: "left",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#e0e7ff",
      color: "#1e3a8a",
      fontSize: "0.8rem",
      fontWeight: "600",
      padding: "4px 10px",
      borderRadius: "12px",
      marginBottom: "10px",
    },
    h3: { fontSize: "1.3rem", fontWeight: "600", color: "#111827", margin: "8px 0" },
    p: { fontSize: "0.95rem", color: "#4b5563", lineHeight: "1.5" },
  };

  return (
    <section id="loan-programs" style={styles.section}>
      <h2 style={styles.title}>Loan programs we support</h2>

      {/* Controls: two separate accordion toggles */}
      <div style={styles.controlRow}>
        <button
          type="button"
          aria-expanded={openComparison}
          aria-controls="comparison-panel"
          onClick={() => setOpenComparison((s) => !s)}
          style={{
            ...styles.btn,
            ...(openComparison ? styles.btnActive : {}),
          }}
        >
          {openComparison ? "Hide Loan Comparison ▲" : "Show Loan Comparison ▼"}
        </button>

        <button
          type="button"
          aria-expanded={openWizard}
          aria-controls="wizard-panel"
          onClick={() => setOpenWizard((s) => !s)}
          style={{
            ...styles.btn,
            ...(openWizard ? styles.btnActive : {}),
          }}
        >
          {openWizard ? "Hide Loan Selector ▲" : "Show Loan Selector ▼"}
        </button>
      </div>

      {/* Panel: Loan Comparison */}
      <div style={styles.dropdownContainer}>
        <div id="comparison-panel" style={styles.dropdownPanel(openComparison)} aria-hidden={!openComparison}>
          {openComparison && <LoanComparisonTool />}
        </div>
      </div>

      {/* Panel: Loan Selector Wizard */}
      <div style={styles.dropdownContainer}>
        <div id="wizard-panel" style={styles.dropdownPanel(openWizard)} aria-hidden={!openWizard}>
          {openWizard && <LoanSelectorWizard />}
        </div>
      </div>

      {/* Loan cards */}
      <div style={styles.grid}>
        {loanData.map((loan) => (
          <div
            key={loan.title}
            style={styles.card}
            onClick={() => onOpenLoan?.(loan.key)}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, {
                transform: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              })
            }
          >
            <span style={styles.badge}>{loan.tag}</span>
            <h3 style={styles.h3}>{loan.title}</h3>
            <p style={styles.p}>{loan.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanPrograms;
