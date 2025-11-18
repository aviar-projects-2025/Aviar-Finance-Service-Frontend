import React from "react";
import ApplyModalLauncher from "../../components/ApplyModalLauncher";

const USDALoanPage = () => {
  return (
    <>
      <Helmet>
        <title>USDA Home Loans – 0% Down Rural & Suburban Mortgages in Bloomington IL Area | AVIAR Financial Services</title>
        <meta
          name="description"
          content="Learn about USDA home loans in the Bloomington IL area with AVIAR Financial Services. We help you check property eligibility, income limits, and 0% down payment options for rural and suburban homebuyers."
        />
        <link rel="canonical" href="https://your-domain.com/loans/usda-home-loans-bloomington-il" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MortgageLoan",
            "name": "USDA Home Loans",
            "description": "USDA mortgage options from AVIAR Financial Services, a Bloomington IL mortgage broker helping rural and suburban homebuyers access 0% down payment loans in eligible areas.",
            "loanType": "USDA mortgage",
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

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#222",
          background: "#ffffff",
          paddingBottom: "2rem",
        }}
      >
        {/* HERO */}
        <section
          style={{
            padding: "3rem 1rem",
            background: "#f2f4ff",
            borderBottom: "1px solid #e6e6e6",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  background: "#e4e9ff",
                  display: "inline-block",
                  padding: ".35rem .9rem",
                  borderRadius: "20px",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  color: "#3b4cca",
                  marginBottom: ".75rem",
                }}
              >
                USDA Mortgage • Rural & Suburban
              </div>

              <h1
                style={{
                  fontSize: "2.4rem",
                  margin: "0 0 1rem 0",
                  fontWeight: 700,
                  color: "#1e1e1e",
                }}
              >
                USDA Home Loans
              </h1>

              <p style={{ fontSize: "1rem", marginBottom: "1.2rem", color: "#444" }}>
                USDA loans support homeownership in eligible rural and suburban areas,
                offering 0% down payment for qualified buyers.
              </p>

              <ApplyModalLauncher />

              <p
                style={{
                  marginTop: ".6rem",
                  fontSize: ".85rem",
                  color: "#666",
                }}
              >
                We’ll help you check property eligibility and income limits.
              </p>
            </div>

            {/* Right Card */}
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "1.5rem",
                border: "1px solid #eee",
                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#1e1e1e" }}>At a glance</h3>
              <ul style={{ paddingLeft: "1.2rem", fontSize: ".9rem", color: "#444" }}>
                <li>
                  <b>0% down</b> for eligible buyers.
                </li>
                <li>Designed for rural + suburban communities.</li>
                <li>Income-based qualification rules.</li>
                <li>Primary residence only.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <Section
          title="How a USDA Loan Works"
          body={[
            `USDA loans are backed by the U.S. Department of Agriculture and support buyers in rural or semi-rural areas—including many outer suburbs.`,
            `To qualify, the property must be in a USDA-eligible location and the household must fall under local income limits.`,
          ]}
        />

        <Section title="Key Benefits">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <BenefitCard
              title="Zero down payment"
              body="Buy with no money down if eligibility conditions are met."
            />
            <BenefitCard
              title="Attractive terms"
              body="Competitive interest rates and fixed-term stability."
            />
            <BenefitCard
              title="Suburban-friendly"
              body="Many fast-growing suburbs qualify as USDA areas."
            />
            <BenefitCard
              title="Supports stable ownership"
              body="Helps families buy instead of rent."
            />
          </div>
        </Section>

        <Section title="Who is a USDA Loan Best For?">
          <ul
            style={{
              paddingLeft: "1.2rem",
              fontSize: ".9rem",
              marginTop: ".5rem",
              color: "#444",
            }}
          >
            <li>Buyers open to rural or suburban living.</li>
            <li>Households within local income limits.</li>
            <li>Clients seeking 0% down payment programs.</li>
          </ul>
        </Section>

        <Section title="Basic Qualification Snapshot">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <Info label="Down payment" value="0% for eligible buyers" />
            <Info label="Location" value="Must be USDA-eligible" />
            <Info label="Income limits" value="Must be under county limit" />
            <Info label="Occupancy" value="Primary residence only" />
          </div>
        </Section>

        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

/* --- Sub Components --- */

const Section = ({ title, body, children }) => (
  <section
    style={{
      padding: "2.5rem 1rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "1.9rem",
        marginBottom: "1rem",
        fontWeight: 600,
        color: "#1e1e1e",
      }}
    >
      {title}
    </h2>

    {body &&
      body.map((p, i) => (
        <p
          key={i}
          style={{
            fontSize: "1rem",
            marginBottom: "1rem",
            color: "#444",
          }}
        >
          {p}
        </p>
      ))}

    {children}
  </section>
);

const BenefitCard = ({ title, body }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "1.2rem",
      border: "1px solid #eee",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    }}
  >
    <h3 style={{ margin: 0, color: "#1e1e1e" }}>{title}</h3>
    <p style={{ fontSize: ".9rem", marginTop: ".5rem", color: "#555" }}>{body}</p>
  </div>
);

const Info = ({ label, value }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "1rem",
      border: "1px solid #eee",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
    }}
  >
    <div
      style={{
        fontSize: ".75rem",
        textTransform: "uppercase",
        color: "#777",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontWeight: 700,
        fontSize: "1rem",
        marginTop: ".2rem",
        color: "#1e1e1e",
      }}
    >
      {value}
    </div>
  </div>
);

const FAQSection = () => (
  <section
    style={{
      padding: "2.5rem 1rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "1.9rem",
        marginBottom: "1rem",
        fontWeight: 600,
        color: "#1e1e1e",
      }}
    >
      Frequently Asked Questions
    </h2>

    <div
      style={{
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "12px",
        border: "1px solid #eee",
        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
        fontSize: ".9rem",
        color: "#444",
      }}
    >
      <p>
        <b>Is USDA only for farms?</b>
      </p>
      <p>No. Many small towns and outer suburbs qualify.</p>

      <p>
        <b>Can I buy a second home with USDA?</b>
      </p>
      <p>No. USDA loans are for primary residences only.</p>

      <p>
        <b>Are condos or manufactured homes allowed?</b>
      </p>
      <p>Sometimes — depends on USDA project approval.</p>
    </div>
  </section>
);

const CTASection = () => (
  <section
    style={{
      padding: "2.5rem 1rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        background: "#f2f4ff",
        padding: "1.5rem",
        borderRadius: "14px",
        border: "1px solid #e4e8ff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <h3 style={{ margin: 0, color: "#1e1e1e" }}>
          Check if your area qualifies
        </h3>
        <p style={{ marginTop: ".25rem", fontSize: ".9rem", color: "#555" }}>
          We’ll confirm property eligibility + income guidelines.
        </p>
      </div>
      <ApplyModalLauncher />
    </div>
  </section>
);

export default USDALoanPage;
