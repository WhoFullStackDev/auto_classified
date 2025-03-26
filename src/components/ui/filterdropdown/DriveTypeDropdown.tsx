import React from "react";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";
import ExpendableMenu from "../pills/ExpendableMenu";

const DriveTypeOption: OptionsType[] = [
  { label: "4WD", quantity: 14166 },
  { label: "AWD", quantity: 41386 },
  { label: "FWD", quantity: 62467 },
  { label: "RWD", quantity: 13561 },
  { label: "Unknown", quantity: 0 },
];

const DriveTypeDropdown = () => {
  return (
    <ExpendableMenu Label="Drive Type">
      <FilterCheckBoxOption
        ToggleText="All Drive Type"
        options={DriveTypeOption}
      />
    </ExpendableMenu>
  );
};

export default DriveTypeDropdown;
