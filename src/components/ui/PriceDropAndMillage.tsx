import { Fragment } from "react";
import Input from "./Input";
import Label from "./Label";
import RangeSlider from "react-range-slider-input";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CashFilterFormIFromValue } from "../forms/CashFilterForm";
import { FinanceFilterIFormValue } from "../forms/FinanceFilter";

interface PriceDropAndMillageProps {
  startMillage: number;
  endMillage: number;
  setValue: UseFormSetValue<CashFilterFormIFromValue | FinanceFilterIFormValue>;
  register: UseFormRegister<CashFilterFormIFromValue | FinanceFilterIFormValue>;
}
const PriceDropAndMillage: React.FC<PriceDropAndMillageProps> = ({
  endMillage,
  startMillage,
  register,
  setValue,
}) => {
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Input
            {...register("priceDrop")}
            type="checkbox"
            value="price drop"
            className="scale-[1.5] w-3 h-3  accent-success"
          />
          <Label title="Price drop" htmlFor="priceDrop" />
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
            className="lg:w-[120px] w-[90px] border-2"
            {...register("startMillage")}
            value={startMillage}
          />
          <p className="text-text-disable text-base font-medium leading-5">
            To
          </p>
          <Input
            placeholder="0"
            type="tel"
            className="lg:w-[120px] w-[90px] border-2"
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
    </Fragment>
  );
};

export default PriceDropAndMillage;
