"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ExpendableMenuProps {
  children: Readonly<React.ReactNode>;
  Label: string;
}

const ExpendableMenu: React.FC<ExpendableMenuProps> = ({ children, Label }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-[300px] ">
      <div
        className={`flex justify-between items-center p-3 cursor-pointer`}
        onClick={() => setOpenModal((prev) => !prev)}
      >
        <p className="text-text-body text-base font-medium leading-5">
          {Label}
        </p>
        <FiChevronDown size={24} className="text-icon-primary" />
      </div>
      {openModal && <div>{children}</div>}
    </div>
  );
};

export default ExpendableMenu;
