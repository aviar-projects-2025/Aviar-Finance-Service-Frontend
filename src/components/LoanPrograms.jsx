import React from "react";

const loanData = [
  { title: "Conventional", tag: "Most common", desc: "As low as 3% down with strong credit." },
  { title: "FHA Loans", tag: "Low down", desc: "Flexible credit, low down payment." },
  { title: "VA Loans", tag: "Veterans", desc: "0% down for eligible veterans." },
  { title: "USDA Loans", tag: "Rural", desc: "0% down for eligible rural properties." },
  { title: "Jumbo Loans", tag: "High value", desc: "For higher-priced homes." },
];

const LoanPrograms = () => {
  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#f9fafb",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#0a2e5c",
      marginBottom: "40px",
    },
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
    h3: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#111827",
      margin: "8px 0",
    },
    p: {
      fontSize: "0.95rem",
      color: "#4b5563",
      lineHeight: "1.5",
    },
  };

  return (
    <section id="loan-programs" style={styles.section}>
      <h2 style={styles.title}>Loan programs we support</h2>
      <div style={styles.grid}>
        {loanData.map((loan) => (
          <div
            key={loan.title}
            style={styles.card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
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
