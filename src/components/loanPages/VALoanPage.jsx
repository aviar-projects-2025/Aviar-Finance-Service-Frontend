import React from "react";
import ApplyModalLauncher from "../../components/ApplyModalLauncher";
import { Helmet } from "react-helmet";

const VALoanPage = () => {
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
    background: "#e0f2fe",
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "25px",
    fontSize: ".8rem",
    fontWeight: 600,
    color: "#075985",
    marginBottom: "10px",
  };

  return (
    <>
      <Helmet>
        <title>VA Home Loans – Zero Down Mortgage for Veterans in Bloomington IL | AVIAR Financial Services</title>
        <meta
          name="description"
          content="Discover VA home loan options in Bloomington IL with AVIAR Financial Services. We help eligible veterans and service members access zero down payment mortgages with no monthly mortgage insurance."
        />
        <link rel="canonical" href="https://your-domain.com/loans/va-home-loans-bloomington-il" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MortgageLoan",
            "name": "VA Home Loans",
            "description": "VA mortgage options from AVIAR Financial Services, a Bloomington IL mortgage broker helping eligible veterans and service members access zero down payment home loans.",
            "loanType": "VA mortgage",
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
              <div style={pill}>VA Mortgage • For Veterans & Service Members</div>

              <h1 style={{ fontSize: "2.3rem", fontWeight: 800, marginBottom: "15px" }}>
                VA Home Loans
              </h1>

              <p style={small}>
                VA loans are one of the most powerful benefits available to eligible
                veterans, active-duty service members, and some surviving spouses —
                often requiring no down payment or monthly mortgage insurance.
              </p>

              <ApplyModalLauncher />

              <p style={{ ...small, marginTop: ".5rem", opacity: 0.8 }}>
                Thank you for your service. We’ll help you understand your VA entitlement
                and options.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div style={card}>
              <h3 style={{ marginTop: 0 }}>At a glance</h3>
              <ul style={{ ...small, marginTop: "10px", paddingLeft: "20px" }}>
                <li><b>0% down</b> for eligible veterans and service members.</li>
                <li>No monthly mortgage insurance (MI).</li>
                <li>Competitive interest rates.</li>
                <li>Flexible credit guidelines.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>How a VA Loan Works</h2>

          <p style={small}>
            VA loans are guaranteed by the U.S. Department of Veterans Affairs. The VA
            doesn’t lend money directly — instead, it provides a guarantee to the lender,
            allowing more favorable loan terms including no down payment and no monthly MI.
          </p>

          <p style={{ ...small, marginTop: "1rem" }}>
            To use a VA loan, you'll need a Certificate of Eligibility (COE), which
            verifies your service history and entitlement. We can help you obtain this
            during the loan process.
          </p>
        </section>

        {/* BENEFITS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Key Benefits</h2>

          <div style={grid}>
            <BenefitCard
              title="Zero down payment"
              body="Many VA buyers can purchase a home with no money down."
            />
            <BenefitCard
              title="No monthly mortgage insurance"
              body="This helps keep monthly payments lower than other loan types."
            />
            <BenefitCard
              title="Competitive interest rates"
              body="VA rates are often among the lowest available to qualified buyers."
            />
            <BenefitCard
              title="Flexible credit & DTI"
              body="VA guidelines are often more forgiving on credit and income ratios."
            />
          </div>
        </section>

        {/* BEST FOR */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Who is a VA Loan Best For?</h2>

          <ul style={{ ...small, paddingLeft: "20px", marginTop: "10px" }}>
            <li>Eligible veterans and active-duty service members.</li>
            <li>Guard and Reserve members who meet service requirements.</li>
            <li>Surviving spouses with VA eligibility.</li>
            <li>Borrowers seeking to minimize upfront costs and monthly payments.</li>
          </ul>
        </section>

        {/* QUALIFICATIONS */}
        <section style={{ ...container, ...section }}>
          <h2 style={title}>Basic Qualification Snapshot</h2>

          <div style={grid}>
            <Info label="Down payment" value="Often 0% for eligible borrowers" />
            <Info label="Mortgage insurance" value="No monthly MI; VA funding fee may apply" />
            <Info label="Occupancy" value="Primary residence only" />
            <Info label="Key document" value="VA Certificate of Eligibility (COE)" />
          </div>
        </section>

        <FAQSection container={container} section={section} card={card} small={small} />
        <CTASection container={container} card={card} small={small} />
      </div>
    </>
  );
};

/* SUB COMPONENTS */

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
      <p><b>Do I have to pay a VA funding fee?</b></p>
      <p>
        Many borrowers do, but certain veterans and surviving spouses may qualify
        for an exemption.
      </p>

      <p style={{ marginTop: "1rem" }}><b>Can I reuse my VA benefit?</b></p>
      <p>
        In many cases, yes — depending on entitlement and prior usage, you may be
        able to use VA again.
      </p>

      <p style={{ marginTop: "1rem" }}><b>Can I buy a multi-unit property?</b></p>
      <p>
        Yes, as long as you live in one of the units as your primary residence and
        meet VA guidelines.
      </p>
    </div>
  </section>
);

/* CTA SECTION */
const CTASection = ({ container, card, small }) => (
  <section style={{ ...container, marginTop: "40px" }}>
    <div
      style={{
        ...card,
        background: "#e0f2fe",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontWeight: 700 }}>Ready to use your VA benefit?</h3>
        <p style={{ ...small, marginTop: ".3rem" }}>
          We’ll confirm your eligibility and compare VA vs other loan options.
        </p>
      </div>

      <ApplyModalLauncher />
    </div>
  </section>
);

export default VALoanPage;
