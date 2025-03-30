import ExpendableMenu from "../pills/ExpendableMenu";
import FilterCheckBoxOption, { OptionsType } from "../FilterCheckBoxOption";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdDone } from "react-icons/md";

const PriceRatingOption: OptionsType[] = [
  {
    label: "Excellent Price",
    quantity: 142,
    icon: (
      <span className="w-4 h-4 rounded-full bg-success justify-center items-center flex">
        <svg
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="Vector" d="M3 8L6 4H0L3 8ZM6 0L0 0L3 4L6 0Z" fill="white" />
        </svg>
      </span>
    ),
  },
  {
    label: "Grate Price",
    quantity: 62,
    icon: (
      <span className="w-4 h-4 rounded-full bg-[#00A398] justify-center items-center flex">
        <IoMdArrowDropdown size={20} className="text-white" />
      </span>
    ),
  },

  {
    label: "Fair Price",
    quantity: 54,
    icon: (
      <span className="w-4 h-4 rounded-full bg-[#01A1C1] justify-center items-center flex">
        <MdDone size={12} className="text-white" />
      </span>
    ),
  },
  {
    label: "High Price",
    quantity: 90,
    icon: (
      <span className="w-4 h-4 rounded-full bg-[#0088D6] justify-center items-center flex">
        <IoMdArrowDropup size={20} className="text-white" />
      </span>
    ),
  },
];

interface PriceRatingProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceRating: React.FC<PriceRatingProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  return (
    <ExpendableMenu
      Label="Price Rating"
      tag="Price"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <FilterCheckBoxOption
        ToggleText="All Price Rating "
        options={PriceRatingOption}
      />
    </ExpendableMenu>
  );
};

export default PriceRating;
