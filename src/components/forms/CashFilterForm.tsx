import { useState } from "react";
import Input from "../ui/Input";
import Label from "../ui/Label";

const CashFilterForm = () => {
  const [maxValue, setMaxValue] = useState<number>(34000);
  return (
    <form className="justify-center flex flex-col gap-4">
      <div className="justify-between items-center flex gap-2">
        <Input
          name="start-price"
          placeholder="0"
          type="tel"
          className="w-[120px] border-2"
          defaultValue={0}
        />
        <p className="text-text-body text-base font-medium leading-5">To</p>
        <Input
          name="end-price"
          placeholder="0"
          type="tel"
          className="w-[120px] border-2"
          onChange={(e) => {
            const newValue = Number(e.target.value);
            setMaxValue(newValue);
          }}
          value={maxValue}
        />
      </div>
      <input
        type="range"
        name="price-range"
        min="0"
        max="100000"
        defaultValue={maxValue}
        onChange={(e) => setMaxValue(Number(e.target.value))}
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

export default CashFilterForm;
