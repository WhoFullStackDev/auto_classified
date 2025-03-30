import ExpendableMenu from "../pills/ExpendableMenu";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";

const BedLengthOption: OptionsType[] = [
  { label: "Long Bed", quantity: 14166 },
  { label: "Short Bed", quantity: 41386 },
  { label: "Standard Bed", quantity: 62467 },
];

interface BedLengthDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const BedLengthDropdown: React.FC<BedLengthDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Bed Length"
      tag="Bed"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption
        ToggleText="All Bed Length "
        options={BedLengthOption}
      />
    </ExpendableMenu>
  );
};

export default BedLengthDropdown;
