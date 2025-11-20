import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import ApplyModalLauncher from "../ApplyModalLauncher";
import { dollars } from "../../utils/mortgageMath";

export default function HomeEquityLoansPage() {
  const [inputs, setInputs] = useState({
    homeValue: 450000,
    firstMortgageBalance: 280000,
    maxCLTV: 85,
  });

  const update = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const calc = useMemo(() => {
    const maxTotalDebt = inputs.homeValue * (inputs.maxCLTV / 100);
    const potentialEquity = maxTotalDebt - inputs.firstMortgageBalance;
    const availableEquity = Math.max(0, potentialEquity);

    const currentLTV =
      inputs.homeValue > 0 ? (inputs.firstMortgageBalance / inputs.homeValue) * 100 : 0;
    const combinedLTV =
      inputs.homeValue > 0
        ? ((inputs.firstMortgageBalance + availableEquity) / inputs.homeValue) * 100
        : 0;

    return {
      maxTotalDebt,
      availableEquity,
      currentLTV,
      combinedLTV,
    };
  }, [inputs]);

  return (
    <div style={{ background: "#f8f9fa", paddingBottom: "2rem" }}>
      <Helmet>
        <title>HELOC & Home Equity Loans | Access Your Home Equity</title>
        <meta
          name="description"
          content="Estimate your home equity and explore HELOC & home equity loan options. Access cash without refinancing your first mortgage."
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "HELOC & Home Equity Loans",
            "description": "Access home equity with HELOCs and fixed-rate home equity loans.",
            "serviceType": "Home Equity Financing",
            "provider": {
              "@type": "Organization",
              "name": "AVIAR Financial"
            }
          }
        `}</script>
      </Helmet>

      {/* HERO SECTION */}
      <section
        style={{
        //   background: "#1a3c73",
          color: "Black",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.3rem", margin: 0 }}>HELOC & Home Equity Loans</h1>
        <p style={{ maxWidth: "700px", margin: "1rem auto", fontSize: "1.1rem" }}>
          Access the equity in your home without refinancing your existing first mortgage.
          Great for renovations, debt consolidation, education, or investment opportunities.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem" }}>
        {/* BENEFITS */}
        <h2 style={{ marginTop: "2rem" }}>Why Choose a HELOC or Home Equity Loan?</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <InfoCard
            title="Keep your current mortgage"
            body="Access cash while keeping your existing first mortgage and interest rate intact."
          />
          <InfoCard
            title="Flexible borrowing (HELOC)"
            body="Draw funds as needed and pay interest only on what you use."
          />
          <InfoCard
            title="Predictable payments (Home Equity Loan)"
            body="Borrow a lump sum at a fixed rate with a stable monthly payment."
          />
          <InfoCard
            title="Lower cost vs unsecured debt"
            body="Home equity rates are often lower than credit cards or personal loans."
          />
        </div>

        {/* IDEAL BORROWER + REQUIREMENTS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Ideal Borrower</h3>
            <ul style={ulStyle}>
              <li>Owns a home with available equity</li>
              <li>Has stable income and good payment history</li>
              <li>Needs funds for improvements or consolidation</li>
              <li>Does not want to refinance the first mortgage</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Typical Requirements</h3>
            <ul style={ulStyle}>
              <li>CLTV typically 80–90%</li>
              <li>Good credit required for best rate</li>
              <li>Ability to support combined debt payments</li>
              <li>Income verification + appraisal may be required</li>
            </ul>
          </div>
        </div>

        {/* EQUITY ESTIMATOR */}
        <div style={{ ...cardStyle, marginTop: "2rem" }}>
          <h3 style={{ marginTop: 0 }}>Equity Estimator</h3>
          <p style={{ fontSize: "0.9rem" }}>
            Quick illustration of potential available equity. Final numbers depend on full
            underwriting and program updates.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {/* Inputs */}
            <div>
              <label>Home value ($)</label>
              <input style={inputStyle} name="homeValue" type="number" value={inputs.homeValue} onChange={update} />

              <label>1st mortgage balance ($)</label>
              <input
                style={inputStyle}
                name="firstMortgageBalance"
                type="number"
                value={inputs.firstMortgageBalance}
                onChange={update}
              />

              <label>Max combined LTV (%)</label>
              <input
                style={inputStyle}
                name="maxCLTV"
                type="number"
                value={inputs.maxCLTV}
                onChange={update}
              />

              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                Many programs allow 80–90% CLTV.
              </p>
            </div>

            {/* Results */}
            <div style={resourceCardStyle}>
              <h4 style={{ marginTop: 0 }}>Illustrative Results</h4>
              <ResultRow label="Current LTV" value={calc.currentLTV.toFixed(1) + "%"} />
              <ResultRow label="Max total debt" value={dollars(calc.maxTotalDebt)} />
              <ResultRow label="Available equity" value={dollars(calc.availableEquity)} />
              <ResultRow label="Combined LTV" value={calc.combinedLTV.toFixed(1) + "%"} />
            </div>
          </div>
        </div>

        {/* MISCONCEPTIONS */}
        <div style={{ ...cardStyle, marginTop: "2rem", fontSize: "0.95rem" }}>
          <h3 style={{ marginTop: 0 }}>Common Misconceptions</h3>

          <p><b>“I must refinance my entire mortgage to access equity.”</b></p>
          <p>You can add a HELOC or home equity loan on top of your existing first mortgage.</p>

          <p><b>“HELOCs are dangerous like credit cards.”</b></p>
          <p>Used responsibly with a plan, they are efficient tools for financing.</p>

          <p><b>“Home equity loans always have high closing costs.”</b></p>
          <p>Costs vary widely; many programs offer reduced or minimal closing fees.</p>
        </div>

        {/* CTA */}
        <div
          style={{
            ...cardStyle,
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h3 style={{ margin: 0 }}>Curious how much equity you can unlock?</h3>
            <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
              Get a personalized evaluation and compare HELOC vs home equity loan options.
            </p>
          </div>
          <ApplyModalLauncher />
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */
const InfoCard = ({ title, body }) => (
  <div style={resourceCardStyle}>
    <h3 style={{ marginTop: 0 }}>{title}</h3>
    <p style={{ fontSize: "0.9rem" }}>{body}</p>
  </div>
);

const ResultRow = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: "0.9rem",
      marginBottom: "0.4rem",
    }}
  >
    <span>{label}</span>
    <span style={{ fontWeight: 600 }}>{value}</span>
  </div>
);

/* Styles */
const cardStyle = {
  background: "white",
  padding: "1.25rem",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
};

const resourceCardStyle = {
  background: "white",
  padding: "1.1rem",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
};

const ulStyle = {
  paddingLeft: "1.2rem",
  lineHeight: "1.5",
};

const inputStyle = {
  width: "100%",
  padding: "0.55rem",
  marginTop: "0.25rem",
  marginBottom: "0.75rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
