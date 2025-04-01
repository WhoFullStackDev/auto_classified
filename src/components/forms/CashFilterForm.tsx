"use client";

import { useForm, UseFormRegister, UseFormSetValue } from "react-hook-form";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { FinanceFilterIFormValue } from "./FinanceFilter";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("../ui/Input"), { ssr: false });
const PriceDropAndMillage = dynamic(() => import("../ui/PriceDropAndMillage"), {
  ssr: false,
});
export interface CashFilterFormIFromValue {
  startPrice: number;
  endPrice: number;
  startMillage: number;
  endMillage: number;
  priceDrop: boolean | string;
}

const CashFilterForm = () => {
  const { register, watch, setValue } = useForm<CashFilterFormIFromValue>({
    defaultValues: {
      startPrice: 0,
      endPrice: 100000,
      priceDrop: false,
      endMillage: 2000000,
      startMillage: 0,
    },
  });

  const startPrice = watch("startPrice");
  const endPrice = watch("endPrice");
  const startMillage = watch("startMillage");
  const endMillage = watch("endMillage");

  return (
    <form className="justify-center flex flex-col gap-4 max-lg:mt-4">
      <div className="justify-between items-center flex gap-2">
        <Input
          placeholder="0"
          type="tel"
          className="lg:w-[120px] w-[90px] border-2"
          {...register("startPrice")}
          value={startPrice}
        />
        <p className="text-text-disable text-base font-medium leading-5">To</p>
        <Input
          placeholder="0"
          type="tel"
          className="lg:w-[120px] w-[90px] border-2"
          {...register("endPrice")}
          value={endPrice}
        />
      </div>
      <RangeSlider
        id="range-slider-green"
        min={0}
        max={100000}
        value={[startPrice, endPrice]}
        onInput={(value) => {
          setValue("startPrice", value[0]);
          setValue("endPrice", value[1]);
        }}
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

export default CashFilterForm;
