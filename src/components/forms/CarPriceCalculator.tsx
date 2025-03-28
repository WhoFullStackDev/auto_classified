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
    <div className="w-[350px]">
      <Heading
        text={price !== 0 ? `$${price.toLocaleString()}` : "Loading..."}
        className="text-center"
      />
      <p className="text-text-body text-base font-normal leading-6 self-stretch text-center pt-2">
        Est. buying power
      </p>
      <p className="text-text-body text-sm font-normal leading-6 self-stretch text-center pt-1">
        Based on 8.06% APR
      </p>
      <form className="flex flex-col justify-center items-center gap-5 mt-10">
        <div className="flex justify-center  gap-8">
          <div>
            <Label title="EST. Loan Term" htmlFor="Loan" />
            <Option
              className="border-2 rounded-sm"
              optionData={loneTerm}
              {...register("Loan")}
              name="Loan"
              ariaLabelledby="Loan"
            />
          </div>
          <div>
            <Label title="EST. Down Payment" htmlFor="down payment" />
            <Input
              {...register("down payment")}
              type="tel"
              id="down payment"
              name="down payment"
              defaultValue={3000}
              placeholder="3,000"
            />
            <InputError error="hrr" />
          </div>
        </div>
        <div className="flex justify-center  gap-8">
          <div>
            <Label title="Credit Score" htmlFor="credit" />
            <Option
              {...register("credit")}
              className="border-2 rounded-sm"
              optionData={creditScore}
              name="credit"
              ariaLabelledby="credit"
            />
          </div>

          <div>
            <Label
              title="EST. Monthly Payment"
              className="text-nowrap"
              htmlFor="monthly payment"
            />
            <Input
              {...register("monthly payment")}
              type="tel"
              id="monthly payment"
              name="monthly payment"
              defaultValue={500}
              placeholder="500"
            />
            <InputError error="hrr" />
          </div>
        </div>
        <div className="flex justify-center  gap-8">
          <div className=" flex justify-center items-center gap-1 w-[172px]">
            <button
              aria-label="toggle"
              type="button"
              role="button"
              className={`w-[50px] h-[30px] flex p-[2px] items-center shrink-0 gap-2 rounded-[20px] ${
                showInput ? "bg-surface-action" : "bg-surface-disable"
              } relative`}
              onClick={() => {
                setShowInput((prev) => !prev);
                if (showInput) setValue("trade", 0);
              }}
            >
              <div
                className={`w-[26px] h-[26px] aspect-square bg-surface_primary  ease-in-out transition-all delay-200 rounded-full absolute ${
                  showInput && "right-0.5"
                }`}
              ></div>
            </button>
            <Label
              title="Include trade-in"
              className="shrink-0"
              htmlFor="trade"
            />
          </div>
          <div>
            <Input
              {...register("trade")}
              type="tel"
              id="trade"
              name="trade"
              defaultValue={0}
              placeholder="0"
              className={` ${showInput ? "visible" : "invisible"}`}
            />
          </div>
        </div>
      </form>
      <Button
        label="Get My Match"
        type="submit"
        ariaLabel="Get My Match"
        className="w-[380px] h-[50px] rounded-2xl mt-6"
      />
    </div>
  );
};

export default CarPriceCalculator;
