// src/utils/mortgageMath.js
export function mortgagePI(principal, annualRatePct, termMonths) {
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / termMonths;
  const n = termMonths;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export function loanFromPI(targetMonthlyPI, annualRatePct, termMonths) {
  const r = annualRatePct / 100 / 12;
  if (r === 0) return targetMonthlyPI * termMonths;
  const n = termMonths;
  return targetMonthlyPI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
}

export const dollars = (n) =>
  isFinite(n) ? `$${Math.round(n).toLocaleString()}` : "—";

export const fixed2 = (n) =>
  isFinite(n) ? Number(n).toFixed(2) : "—";