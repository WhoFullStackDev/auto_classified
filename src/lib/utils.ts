interface CalculateEstimateBudget {
  terms: number; // Loan term in years
  creditScore: string;
  downPayment: number;
  monthlyPayment: number;
  tradeValue?: number;
}

export const calculateEstimateBudget = ({
  creditScore,
  downPayment,
  monthlyPayment,
  terms,
  tradeValue,
}: CalculateEstimateBudget): number => {
  const interestRates: Record<string, number> = {
    "500-600": 0.18,
    "600-700": 0.12,
    "700-800": 0.08,
    "800-900": 0.05,
  };

  const interestRate = interestRates[creditScore] || 0.1; // Default 10% interest rate
  const monthlyRate = interestRate / 12;
  const months = terms * 12; // Convert years to months

  let loanAmount: number;
  if (monthlyRate === 0) {
    loanAmount = monthlyPayment * months; // Simple multiplication for 0% interest
  } else {
    loanAmount =
      (monthlyPayment * (1 - Math.pow(1 + monthlyRate, -months))) / monthlyRate;
  }

  if (isNaN(loanAmount) || !isFinite(loanAmount)) {
    return 0;
  }

  let totalBudget;
  if (tradeValue) {
    totalBudget = loanAmount + downPayment + tradeValue;
  } else {
    totalBudget = loanAmount + downPayment;
  }

  return Math.round(Number(totalBudget.toFixed(2)));
};
