import ExpendableMenu from "../pills/ExpendableMenu";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";

const PopularFeatures: OptionsType[] = [
  { label: "Adaptive Cruise Control", quantity: 24 },
  { label: " Android Auto", quantity: 102967 },
  { label: "Apple CarPlay", quantity: 105186 },
  { label: "Backup Camera", quantity: 124538 },
  { label: "Blind Spot System", quantity: 79749 },
  { label: "Bluetooth", quantity: 125836 },
  { label: "Front Cooled Seats", quantity: 10241 },
  { label: "Front Heated Seats", quantity: 72215 },
  { label: "Lane Keep Assist", quantity: 88536 },
  { label: "Moonroof", quantity: 42580 },
  { label: "Multi-Zone Climate Control", quantity: 80423 },
  { label: "avigation", quantity: 38265 },
  { label: "Parking Sensors", quantity: 57814 },
  { label: "Power Trunk/Liftgate", quantity: 42444 },
  { label: "Premium Audio", quantity: 27389 },
  { label: "Premium Seat Material", quantity: 68791 },
  { label: "Premium Wheels", quantity: 117212 },
  { label: "Remote Engine Start", quantity: 77386 },
  { label: "Third Row Seating", quantity: 13631 },
  { label: "Tow Hitch", quantity: 9012 },
  { label: "Unknown", quantity: 5126 },
];

interface PopularFeaturesDropDownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const PopularFeaturesDropDown: React.FC<PopularFeaturesDropDownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Popular Features"
      tag="Popular"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption
        options={PopularFeatures}
        ToggleText="All Popular Features"
      />
    </ExpendableMenu>
  );
};

export default PopularFeaturesDropDown;
