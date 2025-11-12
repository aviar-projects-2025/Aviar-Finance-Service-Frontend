import React, { useState, useEffect } from "react";
import QuickCalculator from "./QuickCalculator";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      backgroundColor: "#f8fafc",
      padding: isMobile ? "60px 20px" : "100px 40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: isMobile ? "40px" : "80px",
    },
    left: {
      flex: 1,
      marginTop : "40px",
      textAlign: isMobile ? "center" : "left",
    },
    pill: {
      display: "inline-block",
      backgroundColor: "#e0e7ff",
      color: "#1e3a8a",
      padding: "6px 14px",
      borderRadius: "20px",
      fontWeight: 600,
      fontSize: "0.85rem",
      marginBottom: "15px",
    },
    h1: {
      fontSize: isMobile ? "1.9rem" : "2.8rem",
      fontWeight: 700,
      color: "#0a2e5c",
      marginBottom: "15px",
      lineHeight: 1.3,
    },
    p: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: "#444",
      marginBottom: "25px",
      lineHeight: 1.6,
    },
    btnGroup: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-start",
      gap: "10px",
    },
    btnPrimary: {
      backgroundColor: "#0a2e5c",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 600,
      display: "inline-block",
      width: isMobile ? "80%" : "auto",
      textAlign: "center",
    },
    btnOutline: {
      border: "2px solid #0a2e5c",
      color: "#0a2e5c",
      padding: "10px 18px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: 600,
      display: "inline-block",
      width: isMobile ? "80%" : "auto",
      textAlign: "center",
    },
    smallText: {
      fontSize: "0.9rem",
      color: "#666",
      marginTop: "0.8rem",
      textAlign: isMobile ? "center" : "left",
    },
    right: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "0" : "20px",
    },
    calculatorWrapper: {
      width: isMobile ? "100%" : "90%",
      maxWidth: "400px",
    },
  };

  return (
    <section style={styles.section} id="home">
      <div style={styles.container}>

        {/* Left side - Text and buttons */}
        <div style={styles.left}>
          <div style={styles.pill}>Illinois-based Mortgage Brokerage</div>
          <h1 style={styles.h1}>Your home loan, guided by real people.</h1>
          <p style={styles.p}>
            Fast approvals, transparent options, and support for first-time
            buyers, investors, and refinances.
          </p>

          <div style={styles.btnGroup}>
            <a href="#apply" style={styles.btnPrimary}>
              Get Pre-Qualified
            </a>
            <a href="#tools" style={styles.btnOutline}>
              Try Calculator
            </a>
          </div>

          <p style={styles.smallText}>
            No SSN required for initial estimate.
          </p>
        </div>

         {/* Right side - Calculator first on mobile */}
        <div style={styles.right}>
          <div style={styles.calculatorWrapper}>
            <QuickCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
