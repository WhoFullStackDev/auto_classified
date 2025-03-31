import dynamic from "next/dynamic";
import { OptionsType } from "../FilterCheckBoxOption";

const ExpendableMenu = dynamic(() => import("../pills/ExpendableMenu"), {
  ssr: false,
});
const FilterCheckBoxOption = dynamic(() => import("../FilterCheckBoxOption"), {
  ssr: false,
});

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
