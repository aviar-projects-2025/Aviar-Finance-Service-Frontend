import React from "react";
import ApplyModalLauncher from "../../components/ApplyModalLauncher";
import { Helmet } from "react-helmet";

const ConventionalLoanPage = () => {
  const container = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const section = {
    marginTop: "40px",
  };

  const title = {
    fontSize: "1.9rem",
    fontWeight: 700,
    marginBottom: "15px",
    color: "#0f172a",
  };

  const smallText = {
    fontSize: "0.95rem",
    color: "#475569",
    lineHeight: "1.6",
  };

  const card = {
    background: "#ffffff",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0px 4px 14px rgba(0,0,0,0.08)",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.2rem",
    marginTop: "1rem",
  };

  const heroGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "2rem",
    alignItems: "flex-start",
  };

  const pill = {
    background: "#e7efff",
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: ".8rem",
    fontWeight: 600,
    color: "#1e3a8a",
    marginBottom: "12px",
  };

  return (
    <>

      <Helmet>
        <title>Conventional Home Loans – Bloomington IL Mortgage Broker | AVIAR Financial Services</title>
        <meta
          name="description"
          content="Explore conventional home loans with AVIAR Financial Services, a local Bloomington IL mortgage broker. Learn about low down payment options, credit requirements, and how a conventional mortgage can help you buy a home in Central Illinois."
        />
        <link rel="canonical" href="https://your-domain.com/loans/conventional-mortgage-bloomington-il" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MortgageLoan",
            "name": "Conventional Home Loans",
            "description": "Conventional mortgage options from AVIAR Financial Services, a Bloomington IL mortgage broker offering low down payment and flexible term home loans.",
            "loanType": "Conventional mortgage",
            "provider": {
              "@type": "FinancialService",
              "name": "AVIAR Financial Services LLC",
              "image": "https://your-domain.com/path-to-logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2103 Eastland Dr, STE A",
                "addressLocality": "Bloomington",
                "addressRegion": "IL",
                "postalCode": "61704",
                "addressCountry": "US"
              },
              "telephone": "+1-309-750-1082",
              "url": "https://your-domain.com"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bloomington",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bloomington",
                "addressRegion": "IL",
                "addressCountry": "US"
              }
            }
          })}
        </script>
      </Helmet>


      <div style={{ paddingBottom: "50px", background: "#ffffff" }}>

        {/* HERO SECTION */}
        <section style={{ background: "#f1f5f9", padding: "40px 0" }}>
          <div style={{ ...container, ...heroGrid }}>

            {/* LEFT TEXT */}
            <div>
              <div style={pill}>Conventional Mortgage • Fixed & Adjustable</div>

              <h1 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "12px", color: "#0f172a" }}>
                Conventional Home Loans
              </h1>

              <p style={{ ...smallText, maxWidth: "90%" }}>
                Conventional loans are the most common mortgage type in the U.S.
                They offer competitive interest rates, flexible repayment terms,
                and work for primary residences, second homes, and investment properties.
              </p>

              <div style={{ marginTop: "18px" }}>
                <ApplyModalLauncher />
              </div>

              <p style={{ ...smallText, marginTop: ".6rem" }}>
                No SSN required for initial pre-qualification. Full approval subject to underwriting.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div style={card}>
              <h3 style={{ marginTop: 0, fontSize: "1.2rem", color: "#0f172a" }}>At a glance</h3>
              <ul style={{ ...smallText, marginTop: "12px", paddingLeft: "18px" }}>
                <li>As little as <b>3% down</b> for qualified buyers</li>
                <li>Best for <b>good to excellent credit</b></li>
                <li>Primary, second home, & investment options</li>
                <li>Both fixed-rate and adjustable-rate loans</li>
              </ul>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>How a Conventional Loan Works</h2>
          <p style={smallText}>
            A conventional mortgage is not backed by the federal government.
            Instead, it follows standards from Fannie Mae and Freddie Mac.
            Your interest rate and mortgage insurance are influenced by credit score,
            down payment, debt-to-income (DTI) ratio, and property type.
          </p>
        </section>

        {/* BENEFITS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Key Benefits</h2>

          <div style={grid}>
            <BenefitCard title="Low down payment" body="Qualified buyers may put as little as 3% down." />
            <BenefitCard title="Lower long-term cost" body="Strong credit can reduce interest and PMI expenses." />
            <BenefitCard title="No upfront funding fee" body="Unlike FHA or VA loans, no mandatory funding fee applies." />
            <BenefitCard title="PMI can be removed" body="Private mortgage insurance can be removed once you reach 20% equity." />
          </div>
        </section>

        {/* QUALIFICATION */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Basic Qualification Snapshot</h2>

          <div style={grid}>
            <Info label="Minimum down payment" value="3% for primary homes (qualified buyers)" />
            <Info label="Typical credit score" value="620+ (higher scores may qualify for better pricing)" />
            <Info label="Max DTI" value="Up to ~45%, depending on full profile" />
            <Info label="Eligible property types" value="Single-family, condo, 2–4 units, second home, investment" />
          </div>

          <p style={{ ...smallText, marginTop: ".6rem" }}>
            Exact requirements may vary depending on lender guidelines and full application review.
          </p>
        </section>

        {/* FAQ */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Frequently Asked Questions</h2>

          <div style={card}>
            <p style={smallText}><b>Do I need 20% down?</b></p>
            <p style={smallText}>No. Many buyers put 3–10% down. 20% is only required to avoid PMI immediately.</p>

            <p style={{ ...smallText, marginTop: "1rem" }}><b>Can I use gift funds?</b></p>
            <p style={smallText}>Yes, eligible donors can contribute toward your down payment and closing costs.</p>

            <p style={{ ...smallText, marginTop: "1rem" }}><b>Can self-employed borrowers qualify?</b></p>
            <p style={smallText}>Absolutely. Tax returns and business documentation are normally required.</p>
          </div>
        </section>

      </div>
    </>
  );
};


/* ---------------------------
   SUB COMPONENTS
--------------------------- */

const BenefitCard = ({ title, body }) => (
  <div
    style={{
      background: "#ffffff",
      padding: "18px",
      borderRadius: "12px",
      boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    }}
  >
    <h3 style={{ marginTop: 0, fontSize: "1.05rem", color: "#0f172a" }}>{title}</h3>
    <p style={{ fontSize: ".9rem", color: "#475569", lineHeight: "1.5" }}>
      {body}
    </p>
  </div>
);

const Info = ({ label, value }) => (
  <div
    style={{
      background: "#ffffff",
      padding: "18px",
      borderRadius: "12px",
      boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    }}
  >
    <div
      style={{
        textTransform: "uppercase",
        fontSize: ".8rem",
        fontWeight: 600,
        color: "#64748b",
        letterSpacing: ".03em",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontWeight: 700,
        marginTop: ".25rem",
        fontSize: ".95rem",
        color: "#1e293b",
      }}
    >
      {value}
    </div>
  </div>
);

export default ConventionalLoanPage;
