export function mortgagePI(principal, annualRatePct, termMonths) {
  const r = (annualRatePct / 100) / 12;
  if (r === 0) return principal / termMonths;
  return principal * r * Math.pow(1 + r, termMonths) / (Math.pow(1 + r, termMonths) - 1);
}

// Reverse: loan amount you can afford for a target P&I payment
export function loanFromPI(targetMonthlyPI, annualRatePct, termMonths) {
  const r = (annualRatePct / 100) / 12;
  if (r === 0) return targetMonthlyPI * termMonths;
  return targetMonthlyPI * (Math.pow(1 + r, termMonths) - 1) / (r * Math.pow(1 + r, termMonths));
}

// Round helpers
export const dollars = (n) => (isFinite(n) ? `$${Math.round(n).toLocaleString()}` : "—");
export const fixed2  = (n) => (isFinite(n) ? Number(n).toFixed(2) : "—");
