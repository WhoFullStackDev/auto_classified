"use client";
import React from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Option from "../ui/Option";
import Button from "../ui/Button";
import { calculateEstimateBudget, creditScore, loneTerm } from "@/lib/utils";
import { useForm } from "react-hook-form";

interface FinanceFilterIFormValue {
  monthlyPayment: number;
  downPayment: number;
  creditScore: string;
  loanTerms: number;
}

const FinanceFilter = () => {
  const { register, watch } = useForm<FinanceFilterIFormValue>({
    defaultValues: {
      creditScore: "500-600",
      downPayment: 3000,
      loanTerms: 3,
      monthlyPayment: 500,
    },
  });

  const estimatePrice = calculateEstimateBudget({
    creditScore: watch("creditScore"),
    downPayment: Number(watch("downPayment")),
    monthlyPayment: watch("monthlyPayment"),
    terms: watch("loanTerms"),
  });
  return (
    <form className="flex flex-col gap-4 justify-center">
      <div>
        <Label title="Monthly payment" />
        <Input
          {...register("monthlyPayment")}
          placeholder="500"
          type="tel"
          className="w-[300px]"
        />
      </div>
      <div>
        <Label title="Down payment" />
        <Input
          {...register("downPayment")}
          placeholder="3000"
          type="tel"
          className="w-[300px]"
        />
      </div>
      <div>
        <Label title="Credit score" />
        <Option
          // {...register("credit")}
          className="border-2 rounded-sm w-[300px]"
          optionData={creditScore}
          {...register("creditScore")}
          ariaLabelledby="credit"
        />
      </div>
      <div>
        <Label title="Term length" />
        <Option
          className="border-2 rounded-sm w-[300px]"
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
        className="w-[300px]"
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Input
            name="price-drop"
            placeholder="price-drop"
            type="checkbox"
            className="scale-[1.5] w-3 h-3"
          />
          <Label title="Price drop" />
        </div>
        {/* TODO:Update me */}
        <p className="text-text-body text-base font-normal leading-6 self-stretch ">
          30
        </p>
      </div>
      <p className="text-text-body text-base font-normal leading-6 self-stretch ">
        See vehicles with price drops in the past 30 days
      </p>
    </form>
  );
};

export default FinanceFilter;
