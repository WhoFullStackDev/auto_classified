import React from "react";
import Label from "./Label";

interface ToggleProps {
  handleToggleAll: () => void;
  allSelected: boolean;
  LabelText: string;
}

const Toggle: React.FC<ToggleProps> = ({
  LabelText,
  handleToggleAll,
  allSelected,
}) => {
  return (
    <div>
      <div className=" flex justify-between items-center gap-1">
        <Label title={LabelText} className="shrink-0" />
        <button
          aria-label="toggle"
          type="button"
          role="button"
          className={`w-[40px] h-[20px] flex p-[2px] items-center shrink-0 gap-2 rounded-[20px] ${
            allSelected ? "bg-surface-action" : "bg-surface-disable"
          } relative cursor-pointer`}
          onClick={handleToggleAll}
        >
          <div
            className={`w-[18px] h-[18px] aspect-square bg-surface_primary  ease-in-out transition-all delay-200 rounded-full absolute ${
              allSelected && "right-0.5"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Toggle;
