// src/components/tools/EmailSummaryGenerator.jsx
import React, { useState } from 'react';

const EmailSummaryGenerator = ({ calculatorData, loanType }) => {
  const [copied, setCopied] = useState(false);
  const [clientName, setClientName] = useState('');
  const [loName, setLoName] = useState('Loan Officer');
  const [loPhone, setLoPhone] = useState('(555) 123-4567');
  const [loEmail, setLoEmail] = useState('lo@aviarlending.com');

  // Function to generate Conventional email content
  const generateConventionalEmailContent = () => {
    const name = clientName || 'there';
    
    return `Hi ${name},

Thanks again for talking through Conventional loan options. Based on the quick estimate we reviewed, here's a summary of the scenario we discussed:

**Estimated Conventional Loan Summary**
Home price: ${calculatorData.price || '$400,000'}
Down payment (${calculatorData.downPct || 10}%): ${calculatorData.downPayment || '$40,000'}
Approximate loan amount: ${calculatorData.loanAmount || '$360,000'}
Estimated LTV: ${calculatorData.ltv || '90.0%'}
Principal & interest (monthly): ${calculatorData.piMonthly || '$2,335'}
Taxes & insurance (monthly est.): ${calculatorData.tiMonthly || '$600'}
PMI (if applicable): ${calculatorData.pmiMonthly || '$180'}
Estimated total monthly payment: ${calculatorData.totalPayment || '$3,115'}

This is a high-level illustration only and not a formal Loan Estimate. Final numbers will depend on a full application, credit review, property details, and current pricing.

I'm happy to refine this with different price points or down payment options so you can compare side by side.

Best regards,
${loName}
AVIAR Financial Services LLC
${loPhone} | ${loEmail}`;
  };

  // Function to generate VA email content
  const generateVAEmailContent = () => {
    const name = clientName || 'there';
    
    return `Hi ${name},

Thank you again for your service. Here's a summary of the VA loan scenario we reviewed:

**Estimated VA Loan Summary**
Home price: ${calculatorData.price || '$350,000'}
Down payment (${calculatorData.downPct || 0}%): ${calculatorData.downPayment || '$0'}
Base VA loan amount (before funding fee): ${calculatorData.baseLoan || '$350,000'}
VA funding fee (estimate): ${calculatorData.fundingFee || '$7,525'} (${calculatorData.fundingFeePct || 2.15}%)
Total loan amount (incl. funding fee): ${calculatorData.totalLoan || '$357,525'}
Estimated LTV: ${calculatorData.ltv || '100.0%'}
Principal & interest (monthly): ${calculatorData.piMonthly || '$2,205'}
Taxes & insurance (monthly est.): ${calculatorData.tiMonthly || '$483'}
Monthly mortgage insurance: None for VA
Estimated total monthly payment: ${calculatorData.totalPayment || '$2,688'}

This is an educational estimate only and not a formal Loan Estimate. The actual VA funding fee and terms will depend on your Certificate of Eligibility (COE), first vs. subsequent use, down payment, and current VA guidelines.

Our next step is to pull your COE, confirm your exact funding fee, and finalize a VA pre-approval you can use with your realtor.

Best regards,
${loName}
AVIAR Financial Services LLC
${loPhone} | ${loEmail}`;
  };

  const generateEmailContent = () => {
    switch(loanType) {
      case 'conventional':
        return generateConventionalEmailContent();
      case 'va':
        return generateVAEmailContent();
      case 'fha':
        return generateFHAEmailContent();
      case 'usda':
        return generateUSDAEmailContent();
      default:
        return generateConventionalEmailContent();
    }
  };

  const handleCopy = async () => {
    const emailContent = generateEmailContent();
    
    try {
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = emailContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{ padding: "1rem", background: "#f8fafc", borderRadius: "12px" }}>
      <h4 style={{ margin: "0 0 .5rem 0", fontSize: "1rem", color: "#0f172a" }}>
        📧 Generate Email Summary
      </h4>
      
      {/* Client Name Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ fontSize: ".85rem", color: "#475569", display: "block", marginBottom: "4px" }}>
          Client Name
        </label>
        <input
          type="text"
          placeholder="Enter client name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            fontSize: ".9rem",
          }}
        />
      </div>
      
      {/* LO Info Inputs */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ fontSize: ".85rem", color: "#475569", display: "block", marginBottom: "4px" }}>
          Your Name
        </label>
        <input
          type="text"
          placeholder="Loan Officer Name"
          value={loName}
          onChange={(e) => setLoName(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            fontSize: ".9rem",
            marginBottom: "8px",
          }}
        />
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <div>
            <label style={{ fontSize: ".8rem", color: "#475569" }}>Phone</label>
            <input
              type="text"
              placeholder="(555) 123-4567"
              value={loPhone}
              onChange={(e) => setLoPhone(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                fontSize: ".85rem",
              }}
            />
          </div>
          <div>
            <label style={{ fontSize: ".8rem", color: "#475569" }}>Email</label>
            <input
              type="email"
              placeholder="you@aviarlending.com"
              value={loEmail}
              onChange={(e) => setLoEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 10px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                fontSize: ".85rem",
              }}
            />
          </div>
        </div>
      </div>
      
      <button
        onClick={handleCopy}
        style={{
          padding: "10px 20px",
          background: copied ? "#10b981" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: ".9rem",
          transition: "background-color 0.2s",
          width: "100%",
        }}
      >
        {copied ? "✓ Copied to Clipboard!" : "Generate & Copy Email"}
      </button>
      
      <p style={{ fontSize: ".75rem", color: "#64748b", marginTop: ".5rem", textAlign: "center" }}>
        Paste into your email client and send
      </p>
    </div>
  );
};

// Placeholder functions for other loan types
const generateFHAEmailContent = () => 'FHA email template';
const generateUSDAEmailContent = () => 'USDA email template';

export default EmailSummaryGenerator;