import React from "react";
// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";

const BuyingInIllinoisPage = () => {
    const pageUrl =
        "https://aviar-finance-service.vercel.app/resources/buying-in-illinois";
    const pageTitle =
        "Buying a Home in Illinois: What Local Buyers Should Know | AVIAR Financial Services";
    const pageDescription =
        "Learn what to know when buying a home in Illinois: property taxes, contracts, inspections, down payment programs, closing costs, and market insights for Bloomington-area buyers.";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Buying in Illinois: What to Know",
        description: pageDescription,
        author: {
            "@type": "Organization",
            name: "AVIAR Financial Services LLC",
        },
        publisher: {
            "@type": "Organization",
            name: "AVIAR Financial Services LLC",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Bloomington",
                addressRegion: "IL",
                postalCode: "61704",
                addressCountry: "US",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": pageUrl,
        },
    };

    return (
        <main
  className="page"
  style={{
    padding: "3rem 1.5rem",
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(180deg, #eaf4ff, #ffffff)",
    color: "#0b1d39", // deep luxury navy
  }}
>
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="description" content={pageDescription} />
    <link rel="canonical" href={pageUrl} />
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  </Helmet>

  <div
    className="container"
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: 1.7,
      paddingBottom: "4rem",
    }}
  >
    {/* ---------- HERO HEADER ---------- */}
    <header
      style={{
        textAlign: "center",
        marginBottom: "3rem",
        padding: "2.5rem",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #c9e7ff, #dbefff, #ffffff)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h1
        style={{
          fontSize: "2.6rem",
          fontWeight: 800,
          marginBottom: "0.6rem",
          background: "linear-gradient(to right, #0b1d39, #3c6db2)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Buying in Illinois: What to Know
      </h1>

      <p
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          fontSize: "1.1rem",
          color: "#1b2e4d",
        }}
      >
        A clear, modern guide for Illinois homebuyers — taxes, inspections,
        contracts, market conditions, and programs made simple.
      </p>
    </header>

    {/* ---------- REUSABLE SECTION STYLE ---------- */}
    {[
      {
        title: "Illinois Property Taxes: What to Expect",
        content: (
          <>
            <p>
              Illinois has some of the highest property taxes in the U.S, often
              around <strong>2–3% of the home value</strong>.
            </p>
            <ul>
              <li>Taxes are paid in arrears.</li>
              <li>They significantly impact monthly payment.</li>
              <li>Neighborhood selection affects long-term affordability.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Attorney Review and Contracts",
        content: (
          <>
            <p>
              Illinois uses attorney-reviewed contracts — an added layer of buyer
              protection.
            </p>
            <ul>
              <li>5 business days for review + inspections.</li>
              <li>Attorneys negotiate credits, contract changes, or repairs.</li>
              <li>Stronger legal safeguards than many states offer.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Inspections: Strongly Recommended",
        content: (
          <>
            <p>Most Illinois buyers schedule one or more of these:</p>
            <ul>
              <li>General home inspection</li>
              <li>Radon test (common in IL)</li>
              <li>Termite inspection</li>
              <li>Sewer scope (especially older homes)</li>
            </ul>
          </>
        ),
      },
      {
        title: "Down Payment Assistance Programs",
        content: (
          <>
            <p>Illinois offers strong DPA options through IHDA and local grants.</p>
            <ul>
              <li>Forgivable assistance</li>
              <li>Deferred 0% interest programs</li>
              <li>Low-interest repayable options</li>
            </ul>
          </>
        ),
      },
      {
        title: "Market Conditions in Central Illinois",
        content: (
          <>
            <p>Central Illinois tends to be more stable than volatile metro markets.</p>
            <ul>
              <li>Reasonable list prices</li>
              <li>Better chances for seller concessions</li>
              <li>Smooth process for first-time buyers</li>
            </ul>
          </>
        ),
      },
      {
        title: "Closing Costs Breakdown",
        content: (
          <>
            <p>Most buyers should expect 2–4% of the purchase price.</p>
            <ul>
              <li>Lender fees</li>
              <li>Appraisal</li>
              <li>Attorney fees</li>
              <li>Title insurance</li>
              <li>Prepaid taxes + insurance</li>
            </ul>
          </>
        ),
      },
      {
        title: "Next Steps",
        content: (
          <>
            <p>
              Schedule a no-pressure conversation with AVIAR to begin your
              customized pre-approval.
            </p>
          </>
        ),
      },
    ].map((section, index) => (
      <section
        key={index}
        style={{
          marginBottom: "2.5rem",
          padding: "2rem",
          borderRadius: "18px",
          background: "#ffffff",
          boxShadow: "0 8px 22px rgba(63, 115, 171, 0.12)",
          borderLeft: "5px solid #3c6db2", // navy accent
        }}
      >
        <h2
          style={{
            fontSize: "1.55rem",
            marginBottom: "1rem",
            fontWeight: 700,
            color: "#0b1d39",
          }}
        >
          {section.title}
        </h2>

        <div style={{ fontSize: "1.05rem", color: "#1f3558" }}>
          {section.content}
        </div>
      </section>
    ))}
  </div>
</main>

    );
};

export default BuyingInIllinoisPage;
