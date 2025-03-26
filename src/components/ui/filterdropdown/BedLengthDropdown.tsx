import React from "react";
import ExpendableMenu from "../pills/ExpendableMenu";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";

const BedLengthOption: OptionsType[] = [
  { label: "Long Bed", quantity: 14166 },
  { label: "Short Bed", quantity: 41386 },
  { label: "Standard Bed", quantity: 62467 },
];
const BedLengthDropdown = () => {
  return (
    <ExpendableMenu Label="Bed Length">
      <FilterCheckBoxOption
        ToggleText="All Bed Length "
        options={BedLengthOption}
      />
    </ExpendableMenu>
  );
};

export default BedLengthDropdown;
