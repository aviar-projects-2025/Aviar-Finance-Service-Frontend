import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track screen resize to adjust layout dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    header: {
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 25px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    logo: {
      fontSize: "1.6rem",
      fontWeight: 700,
      color: "#0a2e5c",
      letterSpacing: "0.5px",
    },
    navToggle: {
      fontSize: "1.8rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#0a2e5c",
      display: isMobile ? "block" : "none",
    },
    nav: {
      display: isMobile ? (open ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "60px" : "auto",
      right: isMobile ? "20px" : "auto",
      background: isMobile ? "#ffffff" : "transparent",
      padding: isMobile ? "15px 25px" : "0",
      boxShadow: isMobile ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
      borderRadius: isMobile ? "8px" : "0",
      gap: isMobile ? "12px" : "24px",
      alignItems: isMobile ? "flex-start" : "center",
      transition: "all 0.3s ease",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      fontSize: "1rem",
      transition: "color 0.2s ease",
    },
    btnPrimary: {
      backgroundColor: "#0a2e5c",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
      transition: "background-color 0.2s ease",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>AVIAR Financial</div>

        <button style={styles.navToggle} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>

        <nav style={styles.nav}>
          <a href="#home" style={styles.link}>
            Home
          </a>
          <a href="#loan-programs" style={styles.link}>
            Loan Programs
          </a>
          <a href="#tools" style={styles.link}>
            Tools
          </a>
          <a href="#resources" style={styles.link}>
            Resources
          </a>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
          <a href="#apply" style={styles.btnPrimary}>
            Apply Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
