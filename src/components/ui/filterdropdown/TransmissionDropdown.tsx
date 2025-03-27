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

interface TransmissionDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const TransmissionDropdown: React.FC<TransmissionDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Transmission"
      tag="Transmission"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption
        options={Transmission}
        ToggleText="All Transmission"
      />
    </ExpendableMenu>
  );
};

export default TransmissionDropdown;
