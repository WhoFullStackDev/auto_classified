import React from "react";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";
import ExpendableMenu from "../pills/ExpendableMenu";

const EngineOption: OptionsType[] = [
  { label: "Electric", quantity: 14166 },
  { label: "Hybrid", quantity: 41386 },
  { label: "Hydrogen", quantity: 62467 },
  { label: "10 Cylinder", quantity: 13561 },
  { label: "12 Cylinder", quantity: 0 },
  { label: "2 Cylinder", quantity: 14166 },
  { label: "3 Cylinder", quantity: 41386 },
  { label: "4 Cylinder", quantity: 62467 },
  { label: "5 Cylinder", quantity: 13561 },
  { label: "6 Cylinder", quantity: 0 },
  { label: "8 Cylinder", quantity: 14166 },
  { label: "Rotary", quantity: 41386 },
  { label: "Unknown", quantity: 62467 },
];

const EngineDropdown = () => {
  return (
    <ExpendableMenu Label="Engine Type">
      <FilterCheckBoxOption ToggleText="All Engine " options={EngineOption} />
    </ExpendableMenu>
  );
};

export default EngineDropdown;
