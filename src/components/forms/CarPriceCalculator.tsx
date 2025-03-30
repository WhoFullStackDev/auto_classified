"use client";
import { useMemo, useState } from "react";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Option from "../ui/Option";
import Label from "../ui/Label";
import InputError from "../ui/InputError";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { calculateEstimateBudget, creditScore, loneTerm } from "@/lib/utils";

const CarPriceCalculator = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const { register, watch, setValue } = useForm({
    defaultValues: {
      Loan: 3,
      credit: "500-600",
      "down payment": 3000,
      "monthly payment": 500,
      trade: 0,
    },
  });

  const terms = watch("Loan");
  const credit = watch("credit");
  const downPayment = watch("down payment");
  const monthlyPayment = watch("monthly payment");
  const tradeValue = watch("trade");

  const price = useMemo(() => {
    const estimate = calculateEstimateBudget({
      terms: Number(terms),
      creditScore: credit,
      downPayment: Number(downPayment),
      monthlyPayment: Number(monthlyPayment),
      tradeValue: Number(tradeValue),
    });
    return estimate;
  }, [credit, downPayment, monthlyPayment, terms, tradeValue]);

  return (
    <div className="w-full max-w-[350px] mx-auto">
      <Heading
        text={price !== 0 ? `$${price.toLocaleString()}` : "Loading..."}
        className="text-center"
      />
      <p className="text-text-body text-base font-normal leading-6 text-center pt-2">
        Est. buying power
      </p>
      <p className="text-text-body text-sm font-normal leading-6 text-center pt-1">
        Based on 8.06% APR
      </p>
      <form className="flex flex-col justify-center items-center gap-5 mt-10 w-full px-4">
        <div className="flex flex-wrap justify-between gap-5 w-full">
          <div className="flex-1 min-w-[130px]">
            <Label title="Loan Term" htmlFor="Loan" />
            <Option
              className="border-2 rounded-sm w-full bg-surface_primary"
              optionData={loneTerm}
              {...register("Loan")}
              name="Loan"
              ariaLabelledby="Loan"
            />
          </div>
          <div className="flex-1 min-w-[130px]">
            <Label title="Down Payment" htmlFor="down payment" />
            <Input
              {...register("down payment")}
              type="tel"
              id="down payment"
              name="down payment"
              className="w-full bg-surface_primary"
              defaultValue={3000}
              placeholder="3,000"
            />
            <InputError error="hrr" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5 w-full">
          <div className="flex-1 min-w-[130px]">
            <Label title="Credit Score" htmlFor="credit" />
            <Option
              {...register("credit")}
              className="border-2 rounded-sm w-full bg-surface_primary"
              optionData={creditScore}
              name="credit"
              ariaLabelledby="credit"
            />
          </div>

          <div className="flex-1 min-w-[130px]">
            <Label
              title="Monthly Payment"
              className="text-nowrap"
              htmlFor="monthly payment"
            />
            <Input
              {...register("monthly payment")}
              type="tel"
              className="w-full bg-surface_primary"
              id="monthly payment"
              name="monthly payment"
              defaultValue={500}
              placeholder="500"
            />
            <InputError error="hrr" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 w-full">
          <div className="flex items-center gap-2 w-[172px]">
            <button
              aria-label="toggle"
              type="button"
              role="button"
              className={`w-[50px] h-[30px] flex p-[2px] items-center gap-2 rounded-[20px] ${
                showInput ? "bg-surface-action" : "bg-surface-disable"
              } relative`}
              onClick={() => {
                setShowInput((prev) => !prev);
                if (showInput) setValue("trade", 0);
              }}
            >
              <div
                className={`w-[26px] h-[26px] bg-surface_primary rounded-full absolute transition-all ${
                  showInput && "right-0.5"
                }`}
              ></div>
            </button>
            <Label
              title="Include trade-in"
              className="text-wrap"
              htmlFor="trade"
            />
          </div>
          <div className="flex-1 min-w-[130px]">
            <Input
              {...register("trade")}
              type="tel"
              id="trade"
              name="trade"
              defaultValue={0}
              placeholder="0"
              className={`w-full ${
                showInput ? "visible" : "invisible"
              } bg-surface_primary`}
            />
          </div>
        </div>
        <Button
          label="Get My Match"
          type="submit"
          ariaLabel="Get My Match"
          className="w-full md:w-[380px] h-[50px] rounded-2xl mt-6"
        />
      </form>
    </div>
  );
};

export default CarPriceCalculator;
