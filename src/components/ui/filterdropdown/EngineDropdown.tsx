import dynamic from "next/dynamic";
import { OptionsType } from "../FilterCheckBoxOption";

const ExpendableMenu = dynamic(() => import("../pills/ExpendableMenu"), {
  ssr: false,
});
const FilterCheckBoxOption = dynamic(() => import("../FilterCheckBoxOption"), {
  ssr: false,
});

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

interface EngineDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const EngineDropdown: React.FC<EngineDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Engine Type"
      tag="Engine"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption ToggleText="All Engine " options={EngineOption} />
    </ExpendableMenu>
  );
};

export default EngineDropdown;
