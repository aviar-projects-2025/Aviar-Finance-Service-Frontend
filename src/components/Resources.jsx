import React, { useState } from "react";
import ApplyModalLauncher from "./ApplyModalLauncher";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyingInIllinoisPage from "./BuyingInIllinoisPage";
import FirstTimeBuyerRoadmapPage from "./FirstTimeBuyerRoadmapPage";
import RefinanceDecisionGuidePage from "./RefinanceDecisionGuidePage";

const Resources = () => {


  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };



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
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.45)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      backdropFilter: "blur(3px)",
    },
    modalBox: {
      background: "#fff",
      padding: "32px",
      borderRadius: "14px",
      maxWidth: "620px",
      width: "92%",
      boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
      animation: "fadeUp 0.25s ease",
      position: "relative",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "14px",
      fontSize: "1.4rem",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  const [open, setOpen] = useState(false);

  const featuredGuides = [
    {
      title: "Buying in Illinois: What to Know",
      desc: "Taxes, insurance, HOA basics for Illinois buyers.",
      path: "/resources/buying-in-illinois",
      comp: <BuyingInIllinoisPage />,
      full: "This guide covers transfer taxes, county tax cycles, homeowner association fees, and closing expectations for Illinois property purchases...",
    },
    {
      title: "First-Time Buyer Roadmap",
      desc: "Follow the steps from pre-approval to closing.",
      path: "/resources/first-time-buyer-roadmap",
      comp: <FirstTimeBuyerRoadmapPage />,
      full: "Learn the timeline from pre-approval to house shopping, underwriting, appraisal and closing so you know exactly what to expect...",
    },
    {
      title: "Refinance Decision Guide",
      desc: "Should you refi now or wait? Here's a simple breakdown.",
      path: "/resources/refinance-decision-guide",
      comp: <RefinanceDecisionGuidePage />,
      full: "Compare current rates, expected savings, break-even period, and equity position to determine if refinancing makes sense...",
    },
  ];


  <BrowserRouter>
    <Routes>
      <Route path="/resources/buying-in-illinois" element={<BuyingInIllinoisPage />} />
      <Route path="/resources/first-time-buyer-roadmap" element={<FirstTimeBuyerRoadmapPage />} />
      <Route path="/resources/refinance-decision-guide" element={<RefinanceDecisionGuidePage />} />

    </Routes>
  </BrowserRouter>


  // const checklists = [
  //   { title: "Purchase: Document Checklist", desc: "W-2, paystubs, bank statements and more." },
  //   { title: "Refinance: Document Checklist", desc: "Everything needed for a smooth refinance." },
  //   { title: "Self-Employed Prep List", desc: "What lenders need from business owners." },
  // ];

  // const tools = [
  //   { title: "Affordability Calculator", desc: "Estimate how much home you can afford." },
  //   { title: "Refinance Savings Estimator", desc: "See potential savings with a new rate." },
  //   { title: "Rate Scenario Tool", desc: "Preview payments at different interest rates." },
  //   { title: "HELOC / Home Equity Tool", desc: "See how much equity you can borrow." },
  // ];

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
  // const renderCards = (items) => {
  //   return items.map((item) => (
  //     <div
  //       key={item.title}
  //       style={styles.card}
  //       onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
  //       onMouseLeave={(e) =>
  //         Object.assign(e.currentTarget.style, {
  //           transform: "none",
  //           boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
  //         })
  //       }
  //     >
  //       <h3 style={styles.h3}>{item.title}</h3>
  //       <p style={styles.p}>{item.desc}</p>
  //       <a
  //         href="#"
  //         onClick={() => openModal(item)}
  //         style={styles.link}
  //         onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.linkHover)}
  //         onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.link)}
  //       >
  //         Read more →
  //       </a>
  //     </div>
  //   ));
  // };

  // navigate(`${item.path}`) () => openModal(item)


  const renderCards = (items) =>
    items.map((item) => (
      <div
        key={item.title}
        style={styles.card}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
        onMouseLeave={(e) =>
          Object.assign(e.currentTarget.style, { transform: "none", boxShadow: "0 4px 10px rgba(0,0,0,0.06)" })
        }
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        <span style={styles.link} onClick={() => openModal(item)}>
          Read more →
        </span>
      </div>
    ));


  return (
    <section id="resources" style={styles.section}>
      <h2 style={styles.title}>Mortgage Resources</h2>

      {/* Featured Guides */}
      <div style={styles.grid}>{renderCards(featuredGuides)}</div>

      {/* Checklists */}
      {/* <h2 style={styles.title}>Checklists & Downloads</h2>
      <div style={styles.grid}>{renderCards(checklists)}</div> */}

      {/* Tools */}
      {/* <h2 style={styles.title}>Tools & Calculators</h2>
      <div style={styles.grid}>{renderCards(tools)}</div> */}

      {/* FAQs */}
      {/* <h2 style={styles.title}>Quick FAQs</h2>
      <div style={styles.grid}>{renderCards(faqs)}</div> */}
      {/* FAQs - Accordion Style */}
      <h2 style={styles.title}>Quick FAQs</h2>

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
        {faqs.map((faq, index) => {
          const [openItem, setOpenItem] = useState(null);

          const toggleItem = (i) => {
            setOpenItem(openItem === i ? null : i);
          };

          return (
            <div
              key={faq.title}
              style={{
                background: "#fff",
                borderRadius: "10px",
                marginBottom: "12px",
                padding: "18px 20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                cursor: "pointer",
              }}
              onClick={() => toggleItem(index)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.05rem",
                    margin: 0,
                    fontWeight: 600,
                    color: "#0a2e5c",
                  }}
                >
                  {faq.title}
                </h4>
                <span style={{ fontSize: "1.5rem", fontWeight: 600, color: "#0a2e5c" }}>
                  {openItem === index ? "−" : "+"}
                </span>
              </div>

              {openItem === index && (
                <p style={{ marginTop: "12px", fontSize: ".95rem", color: "#4b5563" }}>
                  {faq.desc}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "30px",
              width: "90vw",
              maxWidth: "90%",
              maxHeight: "90%",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.25s ease",
              transform: modalOpen ? "scale(1)" : "scale(0.9)",
              opacity: modalOpen ? 1 : 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "#ff4d4f",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.2s",
              }}
            >
              ×
            </button>

            <div style={{ marginTop: "10px" }}>{selectedItem.comp}</div>
          </div>
        </div>
      )}



      {/* Glossary */}
      {/* <h2 style={styles.title}>Glossary Highlights</h2>
      <div style={styles.grid}>{renderCards(glossary)}</div> */}

      {/* Glossary Highlights - Vibrant Chip Style */}
      <h2 style={styles.title}>Glossary Highlights</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto 60px",
        }}
      >
        {glossary.map((g) => (
          <div
            key={g.title}
            style={{
              padding: "14px 18px",
              borderRadius: "40px",
              background: "linear-gradient(135deg, #0a2e5c 0%, #1e40af 100%)",
              color: "white",
              boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              cursor: "pointer",
              transition: "transform .25s ease, box-shadow .25s ease",
              display: "flex",
              flexDirection: "column",
              minWidth: "220px",
              maxWidth: "260px",
              textAlign: "center",
            }}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 22px rgba(0,0,0,0.18)",
              })
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, {
                transform: "none",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
              })
            }
          >
            <strong style={{ fontSize: "1rem", marginBottom: "4px" }}>{g.title}</strong>
            <span style={{ fontSize: ".82rem", opacity: 0.95 }}>{g.desc}</span>
          </div>
        ))}
      </div>


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
