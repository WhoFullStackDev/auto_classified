import React from "react";
import ExpendableMenu from "../pills/ExpendableMenu";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";

const Transmission: OptionsType[] = [
  {
    label: "Automatic",
    quantity: 129790,
  },
  {
    label: "Manual",
    quantity: 1790,
  },
];

const TransmissionDropdown = () => {
  return (
    <ExpendableMenu Label="Transmission">
      <FilterCheckBoxOption
        options={Transmission}
        ToggleText="All Transmission"
      />
    </ExpendableMenu>
  );
};

export default TransmissionDropdown;
