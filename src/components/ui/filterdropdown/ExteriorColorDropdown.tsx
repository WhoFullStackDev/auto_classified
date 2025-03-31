"use client";

import dynamic from "next/dynamic";
import { OptionsType } from "../FilterCheckBoxOption";
import { MdOutlineBlock } from "react-icons/md";

const ExpendableMenu = dynamic(() => import("../pills/ExpendableMenu"), {
  ssr: false,
});
const FilterCheckBoxOption = dynamic(() => import("../FilterCheckBoxOption"), {
  ssr: false,
});

const ExteriorColorsOption: OptionsType[] = [
  { label: "Beige", quantity: 0, icon: "#CFC8BE" },
  { label: "Black", quantity: 13, icon: "#000000" },
  { label: "Blue", quantity: 3, icon: "#CFC8BE" },
  { label: "Brown", quantity: 0, icon: "#513D3C" },
  { label: "Copper", quantity: 0, icon: "#B87333" },
  { label: "Gold", quantity: 8, icon: "#C6A655" },
  { label: "Gray", quantity: 9, icon: "#838288" },
  { label: "Green", quantity: 1, icon: "#0E502C" },
  { label: "Maroon", quantity: 0, icon: "#560D22" },
  { label: "Orange", quantity: 0, icon: "#CD5A31" },
  { label: "Purple", quantity: 0, icon: "#411E5A" },
  { label: "Red", quantity: 8, icon: "#AE081F" },
  { label: "Silver", quantity: 6, icon: "#D1D1D4" },
  { label: "Tan", quantity: 0, icon: "#E8D8BE" },
  { label: "Teal", quantity: 0, icon: "#245566" },
  { label: "Undetermined", quantity: 0, icon: MdOutlineBlock },
  { label: "White", quantity: 282, icon: "#FFFFFF" },
  { label: "Yellow", quantity: 7, icon: "#F0C834" },
  { label: "Unknown", quantity: 6, icon: MdOutlineBlock },
];

interface ExteriorColorDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const ExteriorColorDropdown: React.FC<ExteriorColorDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Exterior Colors"
      tag="Exterior"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption
        ToggleText="All Exterior Colors "
        options={ExteriorColorsOption}
      />
    </ExpendableMenu>
  );
};

export default ExteriorColorDropdown;
