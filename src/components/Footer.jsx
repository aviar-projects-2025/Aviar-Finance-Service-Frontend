import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#0a2e5c",
      color: "#ffffff",
      textAlign: "center",
      padding: "20px 10px",
      fontSize: "0.95rem",
      lineHeight: "1.6",
      marginTop: "60px",
    },
    highlight: {
      fontWeight: "600",
    },
  };

  return (
    <footer style={styles.footer}>
      AVIAR Financial Services LLC •{" "}
      <span style={styles.highlight}>
        2103 Eastland Dr, STE A, Bloomington, IL 61704
      </span>{" "}
      • NMLS #XXXX • © {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
