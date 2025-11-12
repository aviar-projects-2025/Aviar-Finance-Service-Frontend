import React, { useState, useEffect } from "react";

const QuickCalculator = () => {
  const [homePrice, setHomePrice] = useState(350000);
  const [down, setDown] = useState(10);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [payment, setPayment] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCalc = () => {
    const loanAmount = homePrice * (1 - down / 100);
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;
    let m = 0;
    if (monthlyRate > 0) {
      m =
        (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    } else {
      m = loanAmount / months;
    }
    setPayment(m.toFixed(0));
  };

  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: isMobile ? "16px" : "24px",
      width: "100%",
      maxWidth: isMobile ? "100%" : "360px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      fontFamily: "Inter, Arial, sans-serif",
      boxSizing: "border-box",
    },
    heading: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      marginBottom: "1rem",
      color: "#0a2e5c",
      textAlign: "center",
    },
    formGroup: {
      marginBottom: "1rem",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "0.9rem",
      marginBottom: "0.3rem",
      color: "#333",
      fontWeight: 500,
    },
    input: {
      padding: isMobile ? "8px" : "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "0.95rem",
      width: "100%",
      boxSizing: "border-box",
    },
    flexRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px",
    },
    select: {
      padding: isMobile ? "8px" : "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "0.95rem",
      width: "100%",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#0a2e5c",
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: isMobile ? "10px" : "12px 16px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "0.5rem",
      width: "100%",
      fontWeight: 600,
    },
    smallText: {
      fontSize: "0.9rem",
      color: "#333",
      marginTop: "0.6rem",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>Quick Monthly Estimate</h3>

      <div style={styles.formGroup}>
        <label style={styles.label}>Home price</label>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
          style={styles.input}
        />
      </div>

      <div style={styles.flexRow}>
        <div style={{ ...styles.formGroup, flex: 1 }}>
          <label style={styles.label}>Down (%)</label>
          <input
            type="number"
            value={down}
            onChange={(e) => setDown(Number(e.target.value))}
            style={styles.input}
          />
        </div>

        <div style={{ ...styles.formGroup, flex: 1 }}>
          <label style={styles.label}>Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            step="0.01"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Term</label>
        <select
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
          style={styles.select}
        >
          <option value={30}>30-year fixed</option>
          <option value={20}>20-year fixed</option>
          <option value={15}>15-year fixed</option>
        </select>
      </div>

      <button style={styles.button} onClick={handleCalc}>
        Calculate Payment
      </button>

      <p style={styles.smallText}>
        Estimated monthly: {payment ? `$${payment}` : "$ —"}
      </p>
    </div>
  );
};

export default QuickCalculator;
