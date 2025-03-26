"use client";

import Input from "../ui/Input";
import Label from "../ui/Label";
import { useForm } from "react-hook-form";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface IFormValue {
  startPrice: number;
  endPrice: number;
  priceDrop: boolean | string;
}

const CashFilterForm = () => {
  const { register, watch, setValue } = useForm<IFormValue>({
    defaultValues: {
      startPrice: 0,
      endPrice: 100000,
      priceDrop: false,
    },
  });

  const startPrice = watch("startPrice");
  const endPrice = watch("endPrice");

  return (
    <form className="justify-center flex flex-col gap-4">
      <div className="justify-between items-center flex gap-2">
        <Input
          placeholder="0"
          type="tel"
          className="w-[120px] border-2"
          {...register("startPrice")}
          value={startPrice}
        />
        <p className="text-text-disable text-base font-medium leading-5">To</p>
        <Input
          placeholder="0"
          type="tel"
          className="w-[120px] border-2"
          {...register("endPrice")}
          value={endPrice}
        />
      </div>
      <RangeSlider
        id="range-slider-yellow"
        min={0}
        max={100000}
        value={[startPrice, endPrice]}
        onInput={(value) => {
          setValue("startPrice", value[0]);
          setValue("endPrice", value[1]);
        }}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Input
            {...register("priceDrop")}
            type="checkbox"
            value="price drop"
            className="scale-[1.5] w-3 h-3  accent-success"
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

export default CashFilterForm;
