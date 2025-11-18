import React from "react";
import ApplyModalLauncher from "../../components/ApplyModalLauncher";
import { Helmet } from "react-helmet";

const FHALoanPage = () => {
  const container = { maxWidth: "1100px", margin: "0 auto", padding: "20px" };
  const section = { marginTop: "50px" };
  const title = { fontSize: "2rem", fontWeight: 700, marginBottom: "15px" };
  const small = { fontSize: ".9rem", color: "#4b5563", lineHeight: "1.6" };
  const card = {
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  };
  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.2rem",
    marginTop: "1rem",
  };
  const pill = {
    background: "#e5edff",
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "25px",
    fontSize: ".8rem",
    fontWeight: 600,
    color: "#1e3a8a",
    marginBottom: "10px",
  };

  return (
    <>
      <Helmet>
        <title>FHA Home Loans – Low Down Payment Mortgage in Bloomington IL | AVIAR Financial Services</title>
        <meta
          name="description"
          content="Looking for an FHA home loan in Bloomington IL? AVIAR Financial Services helps first-time buyers and credit-challenged borrowers access low down payment FHA mortgages with clear guidance and local expertise."
        />
        <link rel="canonical" href="https://your-domain.com/loans/fha-home-loans-bloomington-il" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MortgageLoan",
            "name": "FHA Home Loans",
            "description": "FHA mortgage options from AVIAR Financial Services, a Bloomington IL mortgage broker helping first-time buyers and credit-challenged borrowers with low down payment home loans.",
            "loanType": "FHA mortgage",
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

        {/* HERO */}
        <section style={{ background: "#f8fafc", padding: "50px 0" }}>
          <div
            style={{
              ...container,
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "2rem",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT */}
            <div>
              <div style={pill}>FHA Mortgage • Low Down Payment</div>
              <h1 style={{ fontSize: "2.3rem", fontWeight: 800, marginBottom: "15px" }}>
                FHA Home Loans
              </h1>

              <p style={small}>
                FHA loans are government-backed mortgages designed to make
                homeownership easier, allowing lower credit scores and smaller
                down payments — ideal for first-time buyers.
              </p>

              <ApplyModalLauncher />

              <p style={{ ...small, marginTop: ".5rem", opacity: 0.8 }}>
                FHA mortgage insurance rules apply — we’ll guide you step-by-step.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div style={card}>
              <h3 style={{ marginTop: 0 }}>At a glance</h3>
              <ul style={{ ...small, marginTop: "10px", paddingLeft: "18px" }}>
                <li>Minimum <b>3.5% down</b></li>
                <li>Flexible credit score requirements</li>
                <li>Government-insured for lender confidence</li>
                <li>Great for first-time homebuyers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>How an FHA Loan Works</h2>
          <p style={small}>
            FHA loans are insured by the Federal Housing Administration. This
            insurance reduces lender risk — which allows more flexible credit,
            income, and down-payment guidelines.
          </p>

          <p style={{ ...small, marginTop: "1rem" }}>
            FHA loans must be used for primary residences and include mortgage
            insurance (MIP), both upfront and monthly. Loan limits vary by county.
          </p>
        </section>

        {/* BENEFITS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Key Benefits</h2>

          <div style={grid}>
            <BenefitCard
              title="Low down payment"
              body="Only 3.5% down required with qualifying credit."
            />
            <BenefitCard
              title="Flexible on credit"
              body="Ideal for buyers with lower or limited credit history."
            />
            <BenefitCard
              title="Easier approvals"
              body="Government backing allows more forgiving qualification."
            />
            <BenefitCard
              title="Assumable mortgage"
              body="Future buyers may assume your FHA loan (in some cases)."
            />
          </div>
        </section>

        {/* BEST FOR */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Who Is an FHA Loan Best For?</h2>
          <ul style={{ ...small, paddingLeft: "20px", marginTop: "10px" }}>
            <li>First-time buyers with limited savings</li>
            <li>Borrowers rebuilding their credit</li>
            <li>Clients with higher debt-to-income ratios</li>
            <li>Buyers who will live in the home as their primary residence</li>
          </ul>
        </section>

        {/* QUALIFICATIONS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Basic Qualification Snapshot</h2>

          <div style={grid}>
            <Info label="Minimum down" value="3.5% (with qualifying credit)" />
            <Info label="Credit flexibility" value="Allows lower credit scores" />
            <Info label="Occupancy" value="Primary residence only" />
            <Info
              label="Mortgage insurance"
              value="Upfront + monthly FHA MIP required"
            />
          </div>
        </section>

        <FAQSection section={section} container={container} card={card} small={small} />
        <CTASection container={container} card={card} small={small} />
      </div>
    </>
  );
};

/* COMPONENTS */

const BenefitCard = ({ title, body }) => (
  <div
    style={{
      background: "#ffffff",
      padding: "18px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ marginTop: 0, fontSize: "1.1rem" }}>{title}</h3>
    <p style={{ fontSize: ".9rem", color: "#4b5563" }}>{body}</p>
  </div>
);

const Info = ({ label, value }) => (
  <div
    style={{
      background: "#ffffff",
      padding: "18px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    }}
  >
    <div
      style={{
        textTransform: "uppercase",
        fontSize: ".8rem",
        color: "#6b7280",
        fontWeight: 600,
      }}
    >
      {label}
    </div>
    <div style={{ fontWeight: 700, marginTop: ".3rem" }}>{value}</div>
  </div>
);

/* FAQ SECTION */
const FAQSection = ({ container, section, card, small }) => (
  <section style={{ ...container, ...section }}>
    <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>Frequently Asked Questions</h2>

    <div style={{ ...card, ...small, marginTop: "15px" }}>
      <p><b>Is FHA only for first-time buyers?</b></p>
      <p>No — FHA loans are open to all qualifying buyers.</p>

      <p style={{ marginTop: "1rem" }}><b>Can I refinance an FHA loan later?</b></p>
      <p>Yes — you can refinance to another FHA or conventional loan.</p>

      <p style={{ marginTop: "1rem" }}><b>Can I buy a multi-unit home?</b></p>
      <p>Yes, as long as you live in one of the units as your primary residence.</p>
    </div>
  </section>
);

/* CTA */
const CTASection = ({ container, card, small }) => (
  <section style={{ ...container, marginTop: "40px" }}>
    <div
      style={{
        ...card,
        background: "#eef2ff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontWeight: 700 }}>Explore your FHA options</h3>
        <p style={{ ...small, marginTop: ".3rem" }}>
          We compare FHA with other loan types to help you choose the best fit.
        </p>
      </div>

      <ApplyModalLauncher />
    </div>
  </section>
);

export default FHALoanPage;
