import React, { useState } from "react";
import ApplyModalLauncher from "./ApplyModalLauncher";

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
      cursor: "pointer",
    },
    btnHover: {
      backgroundColor: "#e0e7ff",
      color: "#1e3a8a",
    },
  };

  const [open, setOpen] = useState(false);

  const featuredGuides = [
    { title: "Buying in Illinois: What to Know", desc: "Taxes, insurance, HOA basics for Illinois buyers." },
    { title: "First-Time Buyer Roadmap", desc: "Follow the steps from pre-approval to closing." },
    { title: "Refinance Decision Guide", desc: "Should you refi now or wait? Here's a simple breakdown." },
  ];

  const checklists = [
    { title: "Purchase: Document Checklist", desc: "W-2, paystubs, bank statements and more." },
    { title: "Refinance: Document Checklist", desc: "Everything needed for a smooth refinance." },
    { title: "Self-Employed Prep List", desc: "What lenders need from business owners." },
  ];

  const tools = [
    { title: "Affordability Calculator", desc: "Estimate how much home you can afford." },
    { title: "Refinance Savings Estimator", desc: "See potential savings with a new rate." },
    { title: "Rate Scenario Tool", desc: "Preview payments at different interest rates." },
    { title: "HELOC / Home Equity Tool", desc: "See how much equity you can borrow." },
  ];

  const faqs = [
    { title: "How much down payment do I need?", desc: "Most buyers put 3–5%. Some can do 0%." },
    { title: "What drives my interest rate?", desc: "Credit, loan type, property, and market conditions." },
    { title: "Pre-approval vs Pre-qualification?", desc: "Pre-approval is verified; sellers prefer it." },
    { title: "Buy now or wait for rates?", desc: "It depends on inventory, budget, and rate trends." },
  ];

  const glossary = [
    { title: "DTI (Debt-to-Income)", desc: "Percentage of income that goes toward monthly debts." },
    { title: "LTV (Loan-to-Value)", desc: "Loan amount divided by property value." },
    { title: "Escrows", desc: "Lender-held funds for taxes and insurance." },
    { title: "Points", desc: "Upfront fee to reduce your interest rate." },
    { title: "APR", desc: "True yearly cost including fees + rate." },
  ];

  // Reusable card renderer
  const renderCards = (items) => {
    return items.map((item) => (
      <div
        key={item.title}
        style={styles.card}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
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
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.linkHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.link)}
        >
          Read more →
        </a>
      </div>
    ));
  };

  return (
    <section id="resources" style={styles.section}>
      <h2 style={styles.title}>Mortgage Resources</h2>

      {/* Featured Guides */}
      <div style={styles.grid}>{renderCards(featuredGuides)}</div>

      {/* Checklists */}
      <h2 style={styles.title}>Checklists & Downloads</h2>
      <div style={styles.grid}>{renderCards(checklists)}</div>

      {/* Tools */}
      <h2 style={styles.title}>Tools & Calculators</h2>
      <div style={styles.grid}>{renderCards(tools)}</div>

      {/* FAQs */}
      <h2 style={styles.title}>Quick FAQs</h2>
      <div style={styles.grid}>{renderCards(faqs)}</div>

      {/* Glossary */}
      <h2 style={styles.title}>Glossary Highlights</h2>
      <div style={styles.grid}>{renderCards(glossary)}</div>

      {/* CTA */}
      <div style={styles.cta} id="apply">
        <div>
          <h3 style={styles.ctaTitle}>Ready to start your application?</h3>
          <p style={styles.ctaText}>We’ll connect you with an AVIAR loan officer.</p>
        </div>

        <a
          style={styles.btnPrimary}
          onClick={() => setOpen(true)}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.btnHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.btnPrimary)}
        >
          Start now
        </a>

        <ApplyModalLauncher setOpen={setOpen} open={open} />
      </div>
    </section>
  );
};

export default Resources;
