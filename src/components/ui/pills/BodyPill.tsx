"use client";

import { useForm } from "react-hook-form";
import FilterPill from "../FilterPill";
import Option, { dataStructure } from "../Option";
import { MdOutlineDirectionsCar } from "react-icons/md";

const BodyType: dataStructure[] = [
  { label: "Conversable", value: "Conversable" },
  {
    label: "Coupe",
    value: "Coupe",
  },
  { label: "Hatchback", value: "Hatchback" },
  { label: "Sedan", value: "Sedan" },
  { label: "SUV", value: "SUV" },
  { label: "Truck", value: "Truck" },
  { label: "Van", value: "Van" },
  { label: "Wagon", value: "Wagon" },
  { label: "Unknown", value: "Unknown" },
];
const BodyPill = () => {
  const { register } = useForm();
  return (
    <FilterPill Icon={MdOutlineDirectionsCar} title="Body">
      <div className="flex justify-center items-center gap-4">
        <Option
          ariaLabelledby="Body Type"
          optionData={BodyType}
          {...register("start-year")}
          className="border-2 rounded-md w-[300px]"
          defaultOPtionNeed
          defaultOptionText="All"
        />
      </div>
    </FilterPill>
  );
};

export default BodyPill;
