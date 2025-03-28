import React, { useEffect, useState } from "react";
import ExpendableMenu from "../pills/ExpendableMenu";
import Label from "../Label";
import Input from "../Input";
import Toggle from "../Toggle";

interface CarHistoryDropdownProps {
  openDropdownTag: string | null;
  setOpenDropdownTag: React.Dispatch<React.SetStateAction<string | null>>;
}

const option = [
  {
    label: "Salvage",
    details: "Significant damage or totaled",
  },
  {
    label: "Lemon",
    details:
      "A condition where the automaker buys back the car due to warranty defects",
  },

  {
    label: "Frame Damage",
    details: "Damage to a component of the main structure of the vehicle",
  },
  {
    label: "Theft Recovery",
    details: "Any vehicle that has been stolen from its owner and then found",
  },
];

const CarHistoryDropdown: React.FC<CarHistoryDropdownProps> = ({
  openDropdownTag,
  setOpenDropdownTag,
}) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [numberOfAccident, setNumberOfAccident] = useState<string>("none");
  const [numberOfOwner, setNumberOfOwner] = useState<string>("one");
  const [isInEmi, setIsInEmi] = useState<string[]>([]);
  const allSelected = selectedOption.length === option.length;

  const handleToggleAll = () => {
    setSelectedOption(allSelected ? [] : option.map((option) => option.label));
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
      setCheckedValue(option.map(({ label }) => label));
    } else {
      setCheckedValue([]);
    }
  }, [allSelected]);
  return (
    <ExpendableMenu
      Label="Condition and History"
      tag="Condition"
      openDropdownTag={openDropdownTag}
      setOpenDropdownTag={setOpenDropdownTag}
    >
      <div className="p-3 bg-surface_page rounded-md flex flex-col justify-center gap-3">
        <Label title="Reported Accidents" className="text-lg" />

        <div className="flex justify-center  gap-2 flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="accident"
                value="none"
                checked={numberOfAccident === "none"}
                onChange={(e) => setNumberOfAccident(e.target.value)}
                className="scale-[1.2] accent-text-hover"
              />
              <Label title="No accidents reported" />
            </div>
            <p className="text-text-body text-lg font-medium leading-6">125</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="accident"
                className="scale-[1.2] accent-text-hover"
                checked={numberOfAccident === "1 or fewer"}
                value="1 or fewer"
                onChange={(e) => setNumberOfAccident(e.target.value)}
              />
              <Label title="1 or fewer" />
            </div>
            <p className="text-text-body text-lg font-medium leading-6">125</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="accident"
                  className="scale-[1.2] accent-text-hover"
                  value="3 or more"
                  checked={numberOfAccident === "3 or more"}
                  onChange={(e) => setNumberOfAccident(e.target.value)}
                />
                <Label title="3 or more" />
              </div>
              <p className="text-text-body text-lg font-medium leading-6">
                125
              </p>
            </div>
          </div>
        </div>
        <Label title="Title" className="text-lg" />

        <Toggle
          allSelected={allSelected}
          handleToggleAll={handleToggleAll}
          LabelText="Show clean title only"
        />
        <div className="flex flex-col justify-center gap-3 mt-2">
          {option.map(({ label, details }) => (
            <div className="flex justify-between flex-col gap-1" key={label}>
              <div className="flex items-center gap-3">
                <Input
                  type="checkbox"
                  value={label}
                  className="scale-[1.5] w-3 h-3 cursor-pointer accent-text-hover"
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
                <Label title={label} />
              </div>
              {/* TODO:Update me */}
              <p className="text-[#444444] text-base font-normal pl-6 leading-6">
                {details}
              </p>
            </div>
          ))}
        </div>

        <Label title="Number of Owners" className="text-lg" />
        <div className="flex justify-center  gap-2 flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="owner"
                value="one"
                checked={numberOfOwner === "one"}
                onChange={(e) => {
                  setNumberOfOwner(e.target.value);
                }}
                className="scale-[1.2] accent-text-hover"
              />
              <Label title="One Owner" />
            </div>
            <p className="text-text-body text-lg font-medium leading-6">125</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="owner"
                value="1 or fewer"
                checked={numberOfOwner === "1 or fewer"}
                onChange={(e) => {
                  setNumberOfOwner(e.target.value);
                }}
                className="scale-[1.2] accent-text-hover"
              />
              <Label title="1 or fewer" />
            </div>
            <p className="text-text-body text-lg font-medium leading-6">125</p>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="owner"
                  value="3 or more"
                  checked={numberOfOwner === "3 or more"}
                  onChange={(e) => {
                    setNumberOfOwner(e.target.value);
                  }}
                  className="scale-[1.2] accent-text-hover"
                />
                <Label title="3 or more" />
              </div>
              <p className="text-text-body text-lg font-medium leading-6">
                125
              </p>
            </div>
          </div>
        </div>

        <Label title="Fleet & Rental Indicator" className="text-lg" />
        <div className="flex flex-col justify-center gap-3 mt-2">
          <div className="flex justify-between flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Input
                  type="checkbox"
                  value="Fleet"
                  onChange={(e) => {
                    setIsInEmi((prev) =>
                      isInEmi.includes(e.target.value)
                        ? isInEmi.filter((item) => item !== e.target.value)
                        : [...prev, e.target.value]
                    );
                  }}
                  className="scale-[1.5] w-3 h-3 cursor-pointer accent-text-hover"
                />
                <Label title="Fleet Vehicles" />
              </div>
              <p className="text-text-body text-lg font-medium leading-6">24</p>
            </div>
            {/* TODO:Update me */}
            <p className="text-[#444444] text-base font-normal pl-6 leading-6">
              Vehicles owned or leased by a business rather than an individual
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 mt-2">
          <div className="flex justify-between flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Input
                  type="checkbox"
                  value="Rental"
                  onChange={(e) => {
                    setIsInEmi((prev) =>
                      isInEmi.includes(e.target.value)
                        ? isInEmi.filter((item) => item !== e.target.value)
                        : [...prev, e.target.value]
                    );
                  }}
                  className="scale-[1.5] w-3 h-3 cursor-pointer accent-text-hover"
                />
                <Label title="Rental Vehicles" />
              </div>
              <p className="text-text-body text-lg font-medium leading-6">24</p>
            </div>
            {/* TODO:Update me */}
            <p className="text-[#444444] text-base font-normal pl-6 leading-6">
              Vehicles used in a rental capacity
            </p>
          </div>
        </div>
      </div>
    </ExpendableMenu>
  );
};

export default CarHistoryDropdown;
