// src/utils/emailTemplates.js

// Conventional Loan Template
export const generateConventionalEmail = (data) => {
  return `
Hi ${data.clientName},

Thanks again for talking through Conventional loan options. Based on the quick estimate we reviewed, here's a summary of the scenario we discussed:

<b>Estimated Conventional Loan Summary</b>
Home price: ${data.price}
Down payment (${data.downPct}%): ${data.downPayment}
Approximate loan amount: ${data.loanAmount}
Estimated LTV: ${data.ltv}
Principal & interest (monthly): ${data.piMonthly}
Taxes & insurance (monthly est.): ${data.tiMonthly}
PMI (if applicable): ${data.pmiMonthly}
Estimated total monthly payment: ${data.totalPayment}

This is a high-level illustration only and not a formal Loan Estimate.

Best regards,
${data.loName}
AVIAR Financial Services LLC
${data.loPhone} | ${data.loEmail}
  `.trim();
};

// Add templates for other loan types similarly...
export const generateFHAEmail = (data) => { /* ... */ };
export const generateVAEmail = (data) => { /* ... */ };
export const generateUSDAEmail = (data) => { /* ... */ };
export const generateJumboEmail = (data) => { /* ... */ };
export const generateNonQMEmail = (data) => { /* ... */ };
export const generateHELOCEmail = (data) => { /* ... */ };