import React from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Option, { dataStructure } from "../ui/Option";
import Button from "../ui/Button";

const loneTerm: dataStructure[] = [
  { value: 3, label: "3 year" },
  { value: 5, label: "5 year" },
  { value: 7, label: "7 year" },
];

const creditScore: dataStructure[] = [
  { value: "500-600", label: "500-600" },
  { value: "600-700", label: "600-700" },
  { value: "700-800", label: "700-800" },
  { value: "800-900", label: "800-900" },
];

const FinanceFilter = () => {
  return (
    <form className="flex flex-col gap-4 justify-center">
      <div>
        <Label title="Monthly payment" />
        <Input
          name="monthly"
          placeholder="500"
          type="tel"
          className="w-[300px]"
        />
      </div>
      <div>
        {" "}
        <Label title="Down payment" />
        <Input
          name="down"
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
          name="credit"
          ariaLabelledby="credit"
        />
      </div>
      <div>
        <Label title="Term length" />
        <Option
          className="border-2 rounded-sm w-[300px]"
          optionData={loneTerm}
          // {...register("Loan")}
          name="Loan"
          ariaLabelledby="Loan"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
          Est. buying power
        </p>
        <h6 className="text-text-heading text-[20px] font-bold leading-7">
          $24,789
        </h6>
      </div>
      <Button
        ariaLabel="buying-power"
        label="Shop by buying power"
        type="submit"
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
