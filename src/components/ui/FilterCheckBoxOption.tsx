"use client";
import { IconType } from "react-icons";
import { ReactElement, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("./Input"), {
  ssr: false,
});
const Label = dynamic(() => import("./Label"), {
  ssr: false,
});
const Toggle = dynamic(() => import("./Toggle"), { ssr: false });

export type OptionsType = {
  label: string;
  icon?: IconType | ReactElement | string;
  quantity: number;
};

interface FilterCheckBoxOptionProps {
  options: OptionsType[];
  ToggleText: string;
}

const FilterCheckBoxOption: React.FC<FilterCheckBoxOptionProps> = ({
  options,
  ToggleText,
}) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const allSelected = selectedOption.length === options.length;

  const handleToggleAll = () => {
    setSelectedOption(allSelected ? [] : options.map((option) => option.label));
  };

  const handleToggleOption = (optionLabel: string) => {
    setSelectedOption(
      (prev) =>
        prev.includes(optionLabel)
          ? prev.filter((item) => item !== optionLabel) // Remove if already selected
          : [...prev, optionLabel] // Add if not selected
    );
  };
  const [checkedValue, setCheckedValue] = useState<string[]>([]);

  useEffect(() => {
    if (allSelected) {
      setCheckedValue(options.map(({ label }) => label));
    } else {
      setCheckedValue([]);
    }
  }, [allSelected, options]);
  return (
    <div className="p-3 bg-surface_page rounded-md flex flex-col justify-center gap-3">
      <Toggle
        allSelected={allSelected}
        handleToggleAll={handleToggleAll}
        LabelText={ToggleText}
      />
      <div className="flex flex-col justify-center gap-2">
        {options.map(({ label, icon: Icon, quantity }) => (
          <div className="flex justify-between items-center" key={label}>
            <div className="flex items-center gap-3">
              <Input
                type="checkbox"
                value={label}
                className="scale-[1.5] w-3 h-3 cursor-pointer accent-success"
                checked={selectedOption.includes(label)}
                onChange={(e) => {
                  handleToggleOption(label);

                  setCheckedValue((prev) =>
                    checkedValue.includes(label)
                      ? checkedValue.filter((item) => item !== e.target.value)
                      : [...prev, e.target.value]
                  );
                }}
              />
              <div className="flex justify-center items-center gap-1">
                {typeof Icon === "function" ? (
                  <Icon className="text-icon-primary" />
                ) : typeof Icon === "string" ? (
                  <span
                    className={`block w-3 h-3 rounded-full`}
                    style={{ backgroundColor: Icon }}
                  ></span>
                ) : (
                  Icon
                )}

                <Label title={label} htmlFor={label} />
              </div>
            </div>
            {/* TODO:Update me */}
            <p className="text-text-body text-lg font-medium leading-6">
              {quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCheckBoxOption;
