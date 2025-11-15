import React from "react";

const Tools = ({ onOpenTool }) => {


    const styles = {
      section: {
        padding: "80px 20px",
        backgroundColor: "#ffffff",
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
        gap: "25px",
        maxWidth: "1100px",
        margin: "0 auto",
      },
      card: {
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        padding: "25px 20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textAlign: "left",
      },
      cardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      },
      h3: {
        fontSize: "1.3rem",
        fontWeight: "600",
        color: "#111827",
        marginBottom: "10px",
      },
      p: {
        fontSize: "0.95rem",
        color: "#4b5563",
        lineHeight: "1.5",
        marginBottom: "20px",
      },
      btnOutline: {
        border: "2px solid #0a2e5c",
        color: "#0a2e5c",
        padding: "10px 16px",
        borderRadius: "8px",
        backgroundColor: "transparent",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
      },
      btnHover: {
        backgroundColor: "#0a2e5c",
        color: "#fff",
      },
    };




    return (
      <section id="tools" style={styles.section}>
        <h2 style={styles.title}>Tools & Calculators</h2>
        <div style={styles.grid}>
          {[
            {
              title: "Affordability Calculator",
              desc: "Find how much home you can buy based on income & debts.",
            },
            {
              title: "Refinance Savings",
              desc: "Compare current payment vs. new rate.",
            },
            {
              title: "Rate Scenario",
              desc: "See how rate affects monthly payment.",
            },
            {
              title: "Document Checklist",
              desc: "Print-ready list for purchase / refi.",
            },
          ].map((tool) => (
            <div
              key={tool.title}
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
              <h3 style={styles.h3}>{tool.title}</h3>
              <p style={styles.p}>{tool.desc}</p>
              <button
                style={styles.btnOutline}
                onClick={() => {
                  if (tool.title === "Affordability Calculator") onOpenTool("Affordability");
                  if (tool.title === "Refinance Savings") onOpenTool("Refinance");
                  if (tool.title === "Rate Scenario") onOpenTool("Rate");
                  if (tool.title === "Document Checklist") onOpenTool("Checklist");
                }}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.btnHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.btnOutline)}
              >
                {tool.title === "Document Checklist" ? "View" : "Open tool"}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Tools;
