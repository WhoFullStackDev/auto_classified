import React from "react";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";
import ExpendableMenu from "../pills/ExpendableMenu";

const CabTypeOption: OptionsType[] = [
  { label: "Crew Cab", quantity: 14166 },
  { label: "Extended Cab", quantity: 41386 },
  { label: "Regular Cab", quantity: 62467 },
];

interface CabDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const CabDropdown: React.FC<CabDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Cab Type"
      tag="Cab"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption
        ToggleText="All Cab Type "
        options={CabTypeOption}
      />
    </ExpendableMenu>
  );
};

export default CabDropdown;
