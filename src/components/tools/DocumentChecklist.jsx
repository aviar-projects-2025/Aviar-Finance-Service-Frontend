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
    <section
      style={{
        maxWidth: "950px",
        margin: "2rem auto",
        padding: "0 1rem",
      }}
    >


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
        {/* Progress */}
        <div style={{ fontSize: ".9rem", marginBottom: ".75rem", fontWeight: 500 }}>
          Progress: {done}/{allItems.length} items completed
        </div>

        {/* Grid */}
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

        {/* Buttons */}
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
    </section>
  );
};

export default DocumentChecklist;
