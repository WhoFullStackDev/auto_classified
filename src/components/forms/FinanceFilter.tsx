"use client";

import { calculateEstimateBudget, creditScore, loneTerm } from "@/lib/utils";
import { useForm, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CashFilterFormIFromValue } from "./CashFilterForm";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("../ui/Input"), { ssr: false });
const Button = dynamic(() => import("../ui/Button"), { ssr: false });
const Option = dynamic(() => import("../ui/Option"), { ssr: false });
const Label = dynamic(() => import("../ui/Label"), { ssr: false });
const PriceDropAndMillage = dynamic(() => import("../ui/PriceDropAndMillage"), {
  ssr: false,
});

export interface FinanceFilterIFormValue {
  monthlyPayment: number;
  downPayment: number;
  creditScore: string;
  loanTerms: number;
  endMillage: number;
  startMillage: number;
}

const FinanceFilter = () => {
  const { register, watch, setValue } = useForm<FinanceFilterIFormValue>({
    defaultValues: {
      creditScore: "500-600",
      downPayment: 3000,
      loanTerms: 3,
      monthlyPayment: 500,
      endMillage: 2000000,
      startMillage: 0,
    },
  });

  const estimatePrice = calculateEstimateBudget({
    creditScore: watch("creditScore"),
    downPayment: Number(watch("downPayment")),
    monthlyPayment: watch("monthlyPayment"),
    terms: watch("loanTerms"),
  });

  const startMillage = watch("startMillage");
  const endMillage = watch("endMillage");
  return (
    <form className="flex flex-col gap-4 justify-center max-lg:mt-4 ">
      <div>
        <Label title="Monthly payment" htmlFor="monthlyPayment" />
        <Input
          {...register("monthlyPayment")}
          placeholder="500"
          type="tel"
          className="lg:w-[300px] w-[240px]"
        />
      </div>
      <div>
        <Label title="Down payment" htmlFor="downPayment" />
        <Input
          {...register("downPayment")}
          placeholder="3000"
          type="tel"
          className="lg:w-[300px] w-[240px]"
        />
      </div>
      <div>
        <Label title="Credit score" htmlFor="creditScore" />
        <Option
          className="border-2 rounded-sm lg:w-[300px] w-[240px]"
          optionData={creditScore}
          {...register("creditScore")}
          ariaLabelledby="credit"
        />
      </div>
      <div>
        <Label title="Term length" htmlFor="loanTerms" />
        <Option
          className="border-2 rounded-sm lg:w-[300px] w-[240px]"
          optionData={loneTerm}
          {...register("loanTerms")}
          ariaLabelledby="Loan"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
          Est. buying power
        </p>
        <h6 className="text-text-heading text-[20px] font-bold leading-7">
          ${estimatePrice}
        </h6>
      </div>
      <Button
        ariaLabel="buying-power"
        label="Shop by buying power"
        type="button"
        className="lg:w-[300px] w-[240px]"
      />
      <PriceDropAndMillage
        endMillage={endMillage}
        startMillage={startMillage}
        setValue={
          setValue as UseFormSetValue<
            FinanceFilterIFormValue | CashFilterFormIFromValue
          >
        }
        register={
          register as UseFormRegister<
            CashFilterFormIFromValue | FinanceFilterIFormValue
          >
        }
      />
    </form>
  );
};

export default FinanceFilter;
