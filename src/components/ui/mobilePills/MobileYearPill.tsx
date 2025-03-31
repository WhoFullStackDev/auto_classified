"use client";

import { FiCalendar } from "react-icons/fi";
import { allYear } from "@/lib/utils";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const MobileFilterPill = dynamic(() => import("../MobileFilterPill"), {
  ssr: false,
});
const Option = dynamic(() => import("../Option"), {
  ssr: false,
});

const MobileYearPill = () => {
  const years = allYear();
  const { register } = useForm();
  return (
    <MobileFilterPill Icon={FiCalendar} title="Year">
      <div className="flex justify-center items-center gap-4">
        <Option
          ariaLabelledby="start year"
          optionData={years}
          {...register("start-year")}
          className="border-2 rounded-md w-[90px]"
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
          className="border-2 rounded-md w-[90px]"
          defaultOPtionNeed
          defaultOptionText="Max"
        />
      </div>
    </MobileFilterPill>
  );
};

export default MobileYearPill;
