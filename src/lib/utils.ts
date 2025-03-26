import { dataStructure } from "@/components/ui/Option";

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

export const allYear = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 200 }, (_, i) => {
    const year = currentYear - i;
    return { value: year, label: year.toString() };
  });
};

export const loneTerm: dataStructure[] = [
  { value: 3, label: "3 year" },
  { value: 5, label: "5 year" },
  { value: 7, label: "7 year" },
];

export const creditScore: dataStructure[] = [
  { value: "500-600", label: "500-600" },
  { value: "600-700", label: "600-700" },
  { value: "700-800", label: "700-800" },
  { value: "800-900", label: "800-900" },
];
