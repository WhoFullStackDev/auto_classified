"use client";
import FilterPill from "../FilterPill";
import { FiCalendar } from "react-icons/fi";
import { allYear } from "@/lib/utils";
import Option from "../Option";
import { useForm } from "react-hook-form";

const YearPill = () => {
  const years = allYear();
  const { register } = useForm();

  return (
    <FilterPill Icon={FiCalendar} title="Year">
      <div className="flex justify-center items-center gap-4">
        <Option
          ariaLabelledby="start year"
          optionData={years}
          {...register("start-year")}
          className="border-2 rounded-md w-[120px]"
          defaultOPtionNeed
          defaultOptionText="Min"
        />
        <p className="text-text-disable text-base font-medium leading-6  ">
          To
        </p>
        <Option
          ariaLabelledby="end year"
          {...register("end-year")}
          optionData={years}
          className="border-2 rounded-md w-[120px]"
          defaultOPtionNeed
          defaultOptionText="Max"
        />
      </div>
    </FilterPill>
  );
};

export default YearPill;
