import React from "react";

const Resources = () => {
  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#f8fafc",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto 60px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "25px 20px",
      textAlign: "left",
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#111827",
      marginBottom: "8px",
    },
    p: {
      fontSize: "0.95rem",
      color: "#4b5563",
      marginBottom: "10px",
    },
    link: {
      fontSize: "0.9rem",
      color: "#0a2e5c",
      fontWeight: "600",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
    cta: {
      backgroundColor: "#0a2e5c",
      color: "#fff",
      borderRadius: "12px",
      padding: "40px 30px",
      maxWidth: "900px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      textAlign: "left",
    },
    ctaTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "6px",
    },
    ctaText: {
      fontSize: "0.95rem",
      color: "#e5e7eb",
    },
    btnPrimary: {
      backgroundColor: "#fff",
      color: "#0a2e5c",
      padding: "12px 20px",
      borderRadius: "8px",
      fontWeight: "600",
      textDecoration: "none",
      transition: "all 0.2s ease",
    },
    btnHover: {
      backgroundColor: "#e0e7ff",
      color: "#1e3a8a",
    },
  };

  const resourceList = [
    {
      title: "Buying in Illinois: what to know",
      desc: "Local taxes, insurance, HOA.",
    },
    {
      title: "First-time buyer roadmap",
      desc: "From pre-approval to closing.",
    },
    {
      title: "Today’s required documents",
      desc: "W-2, paystubs, bank statements.",
    },
  ];

  return (
    <section id="resources" style={styles.section}>
      <h2 style={styles.title}>Mortgage Resources</h2>

      <div style={styles.grid}>
        {resourceList.map((item) => (
          <div
            key={item.title}
            style={styles.card}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.cardHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, {
                transform: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
              })
            }
          >
            <h3 style={styles.h3}>{item.title}</h3>
            <p style={styles.p}>{item.desc}</p>
            <a
              href="#"
              style={styles.link}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.linkHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, styles.link)
              }
            >
              Read article →
            </a>
          </div>
        ))}
      </div>

      <div style={styles.cta} id="apply">
        <div>
          <h3 style={styles.ctaTitle}>Ready to start your application?</h3>
          <p style={styles.ctaText}>
            We’ll connect you with an AVIAR loan officer.
          </p>
        </div>
        <a
          href="#contact"
          style={styles.btnPrimary}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, styles.btnHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, styles.btnPrimary)
          }
        >
          Start Now
        </a>
      </div>
    </section>
  );
};

export default Resources;
