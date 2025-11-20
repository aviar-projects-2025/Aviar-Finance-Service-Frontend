import React, { useState } from "react";
import ApplyModalLauncher from "./ApplyModalLauncher";

const MortgageResourcesSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="container section" id="mortgage-resources">
      <h2 className="section-title">Mortgage Resources</h2>
      <p className="smalltext">
        Whether you’re buying your first home, refinancing, or exploring investment
        properties, these guides, checklists, and tools are designed to help you make
        clear, confident decisions. If a resource sparks questions, that’s a great
        time to reach out and ask.
      </p>

      {/* FEATURED GUIDES */}
      <div style={{ marginTop: "1.5rem" }}>
        <h3 className="smalltext" style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>
          Featured Guides
        </h3>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1rem",
          }}
        >
          {GUIDES.map((guide) => (
            <div key={guide.title} className="resource-card">
              <h4 style={{ marginTop: 0 }}>{guide.title}</h4>
              <p className="smalltext" style={{ marginBottom: ".35rem" }}>
                <b>Best for:</b> {guide.audience}
              </p>
              <p className="smalltext">{guide.summary}</p>
              {guide.suggestedSlug && (
                <p className="smalltext" style={{ marginTop: ".5rem", fontStyle: "italic" }}>
                  Internal page: <code>{guide.suggestedSlug}</code>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CHECKLISTS */}
      <div style={{ marginTop: "1.75rem" }}>
        <h3 className="smalltext" style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>
          Checklists &amp; Downloads
        </h3>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1rem",
          }}
        >
          {CHECKLISTS.map((item) => (
            <div key={item.title} className="card smalltext">
              <h4 style={{ marginTop: 0 }}>{item.title}</h4>
              <p>{item.description}</p>
              <ul style={{ paddingLeft: "1.1rem", marginTop: ".35rem" }}>
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {item.downloadLabel && (
                <p style={{ marginTop: ".5rem", fontWeight: 600 }}>
                  {/* Wire these hrefs to real PDF URLs when ready */}
                  <a href={item.downloadHref || "#"} target="_blank" rel="noreferrer">
                    {item.downloadLabel}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS & CALCULATORS */}
      <div style={{ marginTop: "1.75rem" }}>
        <h3 className="smalltext" style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>
          Tools &amp; Calculators
        </h3>
        <p className="smalltext">
          These quick tools are designed to help you explore “what if” scenarios. They’re
          not a substitute for a full quote, but they’re a powerful starting point.
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "1rem",
            marginTop: ".75rem",
          }}
        >
          {TOOLS.map((tool) => (
            <div key={tool.name} className="resource-card">
              <h4 style={{ marginTop: 0 }}>{tool.name}</h4>
              <p className="smalltext">{tool.description}</p>
              {tool.href && (
                <p className="smalltext" style={{ marginTop: ".4rem" }}>
                  <a href={tool.href}>{tool.linkLabel || "Open tool"}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginTop: "1.75rem" }}>
        <h3 className="smalltext" style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>
          Quick FAQs
        </h3>
        <div className="card smalltext">
          {FAQS.map((faq, index) => (
            <div
              key={faq.q}
              style={{
                borderBottom: index === FAQS.length - 1 ? "none" : "1px solid #e5e7eb",
                padding: ".5rem 0",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                <span>{faq.q}</span>
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && (
                <p style={{ marginTop: ".35rem" }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* GLOSSARY HIGHLIGHTS */}
      <div style={{ marginTop: "1.75rem" }}>
        <h3 className="smalltext" style={{ fontSize: "1.1rem", marginBottom: ".5rem" }}>
          Glossary Highlights
        </h3>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "1rem",
          }}
        >
          {GLOSSARY.map((term) => (
            <div key={term.term} className="card smalltext">
              <h4 style={{ marginTop: 0 }}>{term.term}</h4>
              <p style={{ marginBottom: ".35rem" }}>{term.definition}</p>
              {term.example && (
                <p style={{ fontStyle: "italic" }}>Example: {term.example}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="cta-banner" style={{ marginTop: "2rem" }}>
        <div>
          <h3 style={{ margin: 0 }}>Not sure which resource to start with?</h3>
          <p className="smalltext" style={{ marginTop: ".25rem" }}>
            Share where you are in the process (just browsing, serious about buying, or
            ready to refinance), and we’ll point you to the right tools and next steps.
          </p>
        </div>
        <ApplyModalLauncher />
      </div>
    </section>
  );
};

// ----- CONTENT DATA -----

const GUIDES = [
  {
    title: "First-Time Homebuyer Roadmap",
    audience: "First-time buyers in Bloomington / Normal and surrounding areas.",
    summary:
      "Walks you through each step: budgeting, pre-approval, home search, making offers, inspections, appraisal, and closing—so you always know what comes next.",
    suggestedSlug: "/resources/first-time-homebuyer-roadmap",
  },
  {
    title: "Refinance Decision Guide",
    audience: "Current homeowners wondering if refinancing makes financial sense.",
    summary:
      "Helps you weigh lower payments vs. costs, term changes, cash-out vs. rate-and-term refis, and how long you should stay in the home for a refinance to pay off.",
    suggestedSlug: "/resources/refinance-decision-guide",
  },
  {
    title: "Investment & Second Home Basics",
    audience: "Borrowers exploring rentals, Airbnbs, or second homes.",
    summary:
      "Covers down payment differences, rent and vacancy considerations, reserves, and how underwriting looks at investment and second-home risk.",
    suggestedSlug: "/resources/investment-and-second-home-basics",
  },
];

const CHECKLISTS = [
  {
    title: "Purchase – Document Checklist",
    description:
      "A simple list of what to gather before you apply for a purchase mortgage.",
    highlights: [
      "Pay stubs, W-2s, and employment details",
      "Last 2 months of bank and asset statements",
      "ID and residence history",
      "Purchase contract and any addenda (when available)",
    ],
    downloadLabel: "Download purchase checklist (PDF)",
    downloadHref: "#", // replace with real PDF URL
  },
  {
    title: "Refinance – Document Checklist",
    description:
      "Everything we typically need to evaluate a refinance, from payoff statements to insurance details.",
    highlights: [
      "Recent mortgage statement & payoff info",
      "Homeowners insurance declarations page",
      "Income and asset documentation",
      "Any renovation / project info (for cash-out refis)",
    ],
    downloadLabel: "Download refinance checklist (PDF)",
    downloadHref: "#",
  },
  {
    title: "Self-Employed Borrower Prep List",
    description:
      "If you own a business or are a 1099 earner, this checklist helps you prepare for a smoother review.",
    highlights: [
      "12–24 months of personal / business bank statements",
      "Business licensing and entity info (LLC, S-Corp, etc.)",
      "Recent tax returns (if available) and K-1s",
      "Year-to-date profit and loss (P&L), if applicable",
    ],
    downloadLabel: "Download self-employed checklist (PDF)",
    downloadHref: "#",
  },
];

const TOOLS = [
  {
    name: "Affordability Calculator",
    description:
      "Estimate a comfortable price range and monthly payment based on your income, debts, and down payment.",
    href: "#affordability-calculator", // or route: "/tools/affordability"
    linkLabel: "Open affordability calculator",
  },
  {
    name: "Refinance Savings Estimator",
    description:
      "Compare your current loan against a new rate or term to see potential monthly and lifetime interest savings.",
    href: "#refinance-calculator",
    linkLabel: "Open refi tool",
  },
  {
    name: "Rate Scenario Explorer",
    description:
      "See how different rates and points change your monthly payment and total cost over time.",
    href: "#rate-scenario-calculator",
    linkLabel: "Open rate scenarios",
  },
  {
    name: "Home Equity & HELOC Estimator",
    description:
      "Estimate how much equity you may be able to tap without refinancing your first mortgage.",
    href: "#home-equity",
    linkLabel: "Estimate available equity",
  },
];

const FAQS = [
  {
    q: "How much down payment do I really need?",
    a: "It depends on your loan type and goals. Some programs allow as little as 0–3.5% down, while putting 10–20% down can reduce or remove mortgage insurance and improve pricing. We can show you side-by-side options.",
  },
  {
    q: "What’s the difference between pre-qualification and pre-approval?",
    a: "Pre-qualification is usually based on basic information you provide and is more of an estimate. A pre-approval involves reviewing your documents and credit, and it carries more weight with sellers when you make an offer.",
  },
  {
    q: "What drives my interest rate?",
    a: "Rates are influenced by your credit score, down payment, loan type, property type, occupancy (primary vs investment), and overall market conditions. We’ll price your specific scenario rather than just quoting a generic rate.",
  },
  {
    q: "Is it better to wait for rates to drop before I buy?",
    a: "Waiting can sometimes mean missing out on home price appreciation or the right property. Many buyers choose a home that fits their life now, then consider refinancing later if rates improve. We can run both ‘buy now’ and ‘wait’ scenarios.",
  },
];

const GLOSSARY = [
  {
    term: "DTI (Debt-to-Income Ratio)",
    definition:
      "Your total monthly debt payments (including the new mortgage) divided by your gross monthly income, expressed as a percentage.",
    example: "If you make $6,000/month and your total debts are $2,400/month, your DTI is 40%.",
  },
  {
    term: "LTV (Loan-to-Value Ratio)",
    definition:
      "The loan amount divided by the home’s value or purchase price. Higher LTV usually means less money down and may affect pricing and mortgage insurance.",
    example: "A $320,000 loan on a $400,000 home is 80% LTV.",
  },
  {
    term: "Escrow / Impounds",
    definition:
      "An account used to collect and pay property taxes and homeowners insurance through your monthly mortgage payment.",
    example: "Instead of paying your annual tax bill in one lump sum, a portion is collected each month.",
  },
  {
    term: "Points / Discount Points",
    definition:
      "Upfront fees you can pay at closing to reduce your interest rate. Each point typically costs 1% of the loan amount.",
    example: "On a $300,000 loan, 1 point costs $3,000 and may reduce your rate by a set amount.",
  },
  {
    term: "APR (Annual Percentage Rate)",
    definition:
      "A broader measure of the cost of credit that includes the interest rate plus certain fees, expressed as a yearly rate.",
    example:
      "If your note rate is 6.5% and you pay certain closing costs, the APR might be 6.8%.",
  },
  {
    term: "Closing Costs",
    definition:
      "One-time costs due at closing, such as lender fees, appraisal, title work, recording fees, and prepaids like taxes and insurance.",
  },
];

export default MortgageResourcesSection;
