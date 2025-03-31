"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGasPump, FaPlug } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { GiGasStove } from "react-icons/gi";
import { MdEnergySavingsLeaf, MdOilBarrel } from "react-icons/md";
import { OptionsType } from "../FilterCheckBoxOption";
import dynamic from "next/dynamic";

const ExpendableMenu = dynamic(() => import("../pills/ExpendableMenu"), {
  ssr: false,
});
const FilterCheckBoxOption = dynamic(() => import("../FilterCheckBoxOption"), {
  ssr: false,
});

const fuelOptions: OptionsType[] = [
  { label: "Electric", icon: AiFillThunderbolt, quantity: 30 },
  { label: "Plug-in electric vehicle (PHEV)", icon: FaPlug, quantity: 30 },
  { label: "Hybrid", icon: MdEnergySavingsLeaf, quantity: 30 },
  { label: "Gas", icon: FaGasPump, quantity: 30 },
  { label: "Diesel", icon: MdOilBarrel, quantity: 30 },
  { label: "CNG", icon: GiGasStove, quantity: 30 },
  { label: "Hydrogen", icon: FaDroplet, quantity: 30 },
];

interface FuelDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const FuelDropdown: React.FC<FuelDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Fuel Type"
      tag="Fuel"
      setOpenDropdownTag={setOpenDropdownTag}
      openDropdownTag={openDropdownTag}
    >
      <FilterCheckBoxOption options={fuelOptions} ToggleText="All Fuel Type" />
    </ExpendableMenu>
  );
};

export default FuelDropdown;
