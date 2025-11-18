import React, { useState } from "react";
import ApplyModalLauncher from "../ApplyModalLauncher";

const LoanSelectorWizard = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    isVeteran: "no",
    creditBand: "mid",
    downPaymentPct: 5,
    wantsRural: "no",
    isFirstTime: "yes"
  });

  const update = (name, value) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const recommendations = getRecommendations(answers);

  return (
    <section
      className="container"
      style={{ padding: "2rem 0", maxWidth: "800px", margin: "0 auto" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Which loan might fit you best?
      </h2>

      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* --- Steps --- */}
        {step === 1 && (
          <Step title="1. Are you a veteran or active-duty service member?">
            <ChoiceRow>
              <ChoiceButton
                label="Yes, I’m eligible for VA benefits"
                active={answers.isVeteran === "yes"}
                onClick={() => update("isVeteran", "yes")}
              />
              <ChoiceButton
                label="No / not sure"
                active={answers.isVeteran === "no"}
                onClick={() => update("isVeteran", "no")}
              />
            </ChoiceRow>
          </Step>
        )}

        {step === 2 && (
          <Step title="2. How would you describe your credit?">
            <ChoiceRow>
              <ChoiceButton
                label="Excellent (720+)"
                active={answers.creditBand === "high"}
                onClick={() => update("creditBand", "high")}
              />
              <ChoiceButton
                label="OK / Average (660–719)"
                active={answers.creditBand === "mid"}
                onClick={() => update("creditBand", "mid")}
              />
              <ChoiceButton
                label="Challenged (<660 or unsure)"
                active={answers.creditBand === "low"}
                onClick={() => update("creditBand", "low")}
              />
            </ChoiceRow>
          </Step>
        )}

        {step === 3 && (
          <Step title="3. How much do you expect to put down?">
            <p style={{ fontSize: ".85rem", opacity: 0.8 }}>
              Approximate % of the home price.
            </p>

            <input
              type="range"
              min="0"
              max="25"
              style={{ width: "100%" }}
              value={answers.downPaymentPct}
              onChange={(e) =>
                update("downPaymentPct", Number(e.target.value))
              }
            />

            <p style={{ fontSize: ".85rem", marginTop: "0.5rem" }}>
              Estimated down payment: <b>{answers.downPaymentPct}%</b>
            </p>
          </Step>
        )}

        {step === 4 && (
          <Step title="4. Where are you looking to buy?">
            <ChoiceRow>
              <ChoiceButton
                label="More city / in-town"
                active={answers.wantsRural === "no"}
                onClick={() => update("wantsRural", "no")}
              />
              <ChoiceButton
                label="Rural / outer suburbs"
                active={answers.wantsRural === "yes"}
                onClick={() => update("wantsRural", "yes")}
              />
            </ChoiceRow>
          </Step>
        )}

        {step === 5 && (
          <Step title="5. Is this your first time buying a home?">
            <ChoiceRow>
              <ChoiceButton
                label="Yes"
                active={answers.isFirstTime === "yes"}
                onClick={() => update("isFirstTime", "yes")}
              />
              <ChoiceButton
                label="No"
                active={answers.isFirstTime === "no"}
                onClick={() => update("isFirstTime", "no")}
              />
            </ChoiceRow>
          </Step>
        )}

        {step === 6 && (
          <Step title="Your likely fits">
            <p style={{ fontSize: ".85rem", opacity: 0.8 }}>
              These are not approvals, but helpful starting points.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {recommendations.map((rec) => (
                <div
                  key={rec.type}
                  style={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e5e7eb",
                    background: "#fafafa",
                  }}
                >
                  <h4 style={{ marginTop: 0 }}>{rec.type} Loan</h4>
                  <p style={{ fontSize: ".85rem" }}>{rec.reason}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <ApplyModalLauncher />
            </div>
          </Step>
        )}

        {/* --- Navigation --- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <button
            style={btnOutline}
            disabled={step === 1}
            onClick={back}
          >
            Back
          </button>

          {step < 6 && (
            <button style={btnPrimary} onClick={next}>
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

/* --- Step wrapper --- */
const Step = ({ title, children }) => (
  <div style={{ marginBottom: "1.75rem" }}>
    <h3 style={{ marginBottom: "1rem" }}>{title}</h3>
    {children}
  </div>
);

/* --- Choice Row --- */
const ChoiceRow = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: ".75rem",
      marginTop: ".5rem",
    }}
  >
    {children}
  </div>
);

/* --- Modern Buttons --- */
const ChoiceButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: ".8rem 1rem",
      flex: "1 1 180px",
      borderRadius: "0.6rem",
      border: active ? "none" : "1px solid #d1d5db",
      background: active ? "#0b5ed7" : "#fff",
      color: active ? "#fff" : "#111",
      cursor: "pointer",
      transition: "0.2s",
      boxShadow: active ? "0 4px 12px rgba(0,0,0,0.12)" : "none",
    }}
  >
    {label}
  </button>
);

/* --- Navigation Buttons --- */
const btnPrimary = {
  background: "#0b5ed7",
  color: "#fff",
  border: "none",
  padding: ".75rem 1.25rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
};

const btnOutline = {
  background: "#fff",
  border: "1px solid #d1d5db",
  padding: ".75rem 1.25rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  opacity: 1,
};

const getRecommendations = (answers) => {
  const recs = [];

  if (answers.isVeteran === "yes") {
    recs.push({
      type: "VA",
      reason:
        "You may qualify for 0% down and no monthly mortgage insurance."
    });
  }

  if (answers.creditBand === "low" || answers.isFirstTime === "yes") {
    recs.push({
      type: "FHA",
      reason:
        "Flexible credit requirements and low down payment options."
    });
  }

  if (answers.wantsRural === "yes" && answers.downPaymentPct <= 5) {
    recs.push({
      type: "USDA",
      reason:
        "0% down possible in eligible rural/suburban areas."
    });
  }

  if (answers.creditBand === "high" && answers.downPaymentPct >= 5) {
    recs.push({
      type: "Conventional",
      reason:
        "Often the most cost-effective long-term option with strong credit."
    });
  }

  if (!recs.length) {
    recs.push({
      type: "Conventional",
      reason: "A solid overall choice based on your profile.",
    });
  }

  return recs;
};

export default LoanSelectorWizard;
