"use client";

import Label from "../ui/Label";
import Input from "../ui/Input";
import Option from "../ui/Option";
import Button from "../ui/Button";
import { calculateEstimateBudget, creditScore, loneTerm } from "@/lib/utils";
import { useForm } from "react-hook-form";
import RangeSlider from "react-range-slider-input";

interface FinanceFilterIFormValue {
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
    <form className="flex flex-col gap-4 justify-center ">
      <div>
        <Label title="Monthly payment" htmlFor="monthlyPayment" />
        <Input
          {...register("monthlyPayment")}
          placeholder="500"
          type="tel"
          className="w-[300px]"
        />
      </div>
      <div>
        <Label title="Down payment" htmlFor="downPayment" />
        <Input
          {...register("downPayment")}
          placeholder="3000"
          type="tel"
          className="w-[300px]"
        />
      </div>
      <div>
        <Label title="Credit score" htmlFor="creditScore" />
        <Option
          className="border-2 rounded-sm w-[300px]"
          optionData={creditScore}
          {...register("creditScore")}
          ariaLabelledby="credit"
        />
      </div>
      <div>
        <Label title="Term length" htmlFor="loanTerms" />
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
          <Label title="Price drop" htmlFor="price-drop" />
        </div>
        {/* TODO:Update me */}
        <p className="text-text-body text-base font-normal leading-6 self-stretch ">
          30
        </p>
      </div>
      <p className="text-text-body text-base font-normal leading-6 self-stretch ">
        See vehicles with price drops in the past 30 days
      </p>
      <div className="flex justify-center gap-4 flex-col">
        <Label title="Millage" htmlFor="startMillage" />
        <div className="justify-between items-center flex gap-2">
          <Input
            placeholder="0"
            type="tel"
            className="w-[120px] border-2"
            {...register("startMillage")}
            value={startMillage}
          />
          <p className="text-text-disable text-base font-medium leading-5">
            To
          </p>
          <Input
            placeholder="0"
            type="tel"
            className="w-[120px] border-2"
            {...register("endMillage")}
            value={endMillage}
          />
        </div>
        <RangeSlider
          id="range-slider-green"
          min={0}
          max={2000000}
          value={[startMillage, endMillage]}
          onInput={(value) => {
            setValue("startMillage", value[0]);
            setValue("endMillage", value[1]);
          }}
        />
      </div>
    </form>
  );
};

export default FinanceFilter;
