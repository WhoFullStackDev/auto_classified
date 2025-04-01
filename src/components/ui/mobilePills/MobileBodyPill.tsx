"use client";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { dataStructure } from "../Option";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const MobileFilterPill = dynamic(() => import("../MobileFilterPill"), {
  ssr: false,
});

const Option = dynamic(() => import("../Option"), { ssr: false });
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
const MobileBody = () => {
  const { register } = useForm();
  return (
    <MobileFilterPill Icon={MdOutlineDirectionsCar} title="Body">
      <Option
        ariaLabelledby="Body Type"
        optionData={BodyType}
        {...register("start-year")}
        className="border-2 rounded-md w-full"
        defaultOPtionNeed
        defaultOptionText="All"
      />
    </MobileFilterPill>
  );
};

export default MobileBody;
