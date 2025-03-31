import { FiChevronDown } from "react-icons/fi";

interface ExpendableMenuProps {
  children: Readonly<React.ReactNode>;
  Label: string;
  tag: string;
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const ExpendableMenu: React.FC<ExpendableMenuProps> = ({
  children,
  Label,
  tag,
  setOpenDropdownTag,
  openDropdownTag,
}) => {
  return (
    <div className="lg:w-[300px] w-[230px] ">
      <div
        className={`flex justify-between items-center p-3 cursor-pointer`}
        onClick={() => {
          setOpenDropdownTag((prev) => (prev === tag ? null : tag));
        }}
      >
        <p className="text-text-body text-base font-medium leading-5">
          {Label}
        </p>
        <FiChevronDown
          size={24}
          className={`text-icon-primary ${
            openDropdownTag === tag ? "rotate-180" : ""
          }`}
        />
      </div>
      {openDropdownTag === tag && <div>{children}</div>}
    </div>
  );
};

export default ExpendableMenu;
