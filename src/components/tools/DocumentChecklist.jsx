import React, { useEffect, useState } from "react";

const GROUPS = [
  {
    title: "Identity & Income",
    items: [
      "Driver’s license or government ID",
      "Social Security card (if requested)",
      "Most recent 30 days of pay stubs",
      "Last 2 years W-2s",
      "Last 2 years federal tax returns (all pages)",
    ],
  },
  {
    title: "Assets",
    items: [
      "Last 2 months bank statements (all pages)",
      "Retirement/Investment account statements",
      "Gift letter + donor proof (if using gift funds)",
    ],
  },
  {
    title: "Property (Purchase)",
    items: [
      "Executed purchase agreement",
      "Earnest money receipt",
      "Homeowners insurance quote/binder",
    ],
  },
  {
    title: "Property (Refinance)",
    items: [
      "Current mortgage statement",
      "Homeowners insurance declarations page",
      "HOA statement (if applicable)",
    ],
  },
  {
    title: "Other",
    items: [
      "Letter of Explanation for large deposits",
      "Divorce decree / child support order (if applicable)",
      "Bankruptcy/foreclosure docs (if applicable)",
    ],
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
    downloadHref: "#",
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

const STORAGE_KEY = "aviar_doc_checklist_v1";

const DocumentChecklist = () => {
  const [checks, setChecks] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setChecks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
  }, [checks]);

  const toggle = (key) => {
    setChecks((s) => ({ ...s, [key]: !s[key] }));
  };

  const reset = () => setChecks({});

  const allItems = GROUPS.flatMap((g) => g.items.map((it) => `${g.title}::${it}`));
  const done = allItems.filter((k) => checks[k]).length;

  return (
    <section style={{ maxWidth: "950px", margin: "2rem auto", padding: "0 1rem" }}>
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "14px",
          boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{
          fontSize: "1.8rem", fontWeight: 700,
          color: "#0a2e5c", textAlign: "center", marginBottom: "1rem"
        }}>
          Document Checklist
        </h2>

        <div style={{ fontSize: ".9rem", marginBottom: ".75rem", fontWeight: 500 }}>
          Progress: {done}/{allItems.length} items completed
        </div>

        {/* Main checklist grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.25rem",
          }}
        >
          {GROUPS.map((group) => (
            <div
              key={group.title}
              style={{
                background: "#f9f9fb",
                padding: "1rem",
                borderRadius: "12px",
                border: "1px solid #eee",
              }}
            >
              <h4 style={{ margin: "0 0 .75rem 0", fontSize: "1.05rem" }}>{group.title}</h4>

              <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
                {group.items.map((it) => {
                  const key = `${group.title}::${it}`;
                  return (
                    <li
                      key={key}
                      style={{
                        marginBottom: ".65rem",
                        display: "flex",
                        alignItems: "center",
                        gap: ".55rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={!!checks[key]}
                        onChange={() => toggle(key)}
                        style={{ width: "18px", height: "18px" }}
                      />
                      <span style={{ fontSize: ".95rem" }}>{it}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: ".7rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
          <button
            onClick={reset}
            style={{
              padding: ".55rem 1.1rem",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "white",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Reset
          </button>

          <button
            onClick={() => window.print()}
            style={{
              padding: ".55rem 1.1rem",
              borderRadius: "8px",
              background: "#1a73e8",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Print
          </button>
        </div>

        <p style={{ fontSize: ".8rem", marginTop: ".9rem", color: "#666" }}>
          Tip: Your loan officer may request additional docs depending on your file.
        </p>
      </div>

      {/* 📌 NEW SECTION: Scenario-based PDFs */}
      <div style={{ marginTop: "2.5rem" }}>
        <h3 style={{
          textAlign: "center",
          fontSize: "1.4rem",
          color: "#0a2e5c",
          fontWeight: 700,
          marginBottom: "1.2rem"
        }}>
          Quick Download Checklists
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "1.25rem",
          }}
        >
          {CHECKLISTS.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.25rem",
                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ fontSize: "1.05rem", margin: "0 0 .5rem 0" }}>{c.title}</h4>
              <p style={{ fontSize: ".9rem", marginBottom: ".85rem" }}>{c.description}</p>

              <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                {c.highlights.map((h) => (
                  <li key={h} style={{ fontSize: ".88rem", marginBottom: ".45rem" }}>
                    {h}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  marginTop: ".9rem",
                  padding: ".5rem 1rem",
                  background: "#1a73e8",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: ".9rem",
                  fontWeight: 600,
                }}
                onClick={() => window.open(c.downloadHref, "_blank")}
              >
                {c.downloadLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentChecklist;
