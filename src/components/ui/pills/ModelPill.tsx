"use client";
import { useForm } from "react-hook-form";
import { MdFormatListBulleted } from "react-icons/md";
import dynamic from "next/dynamic";

const FilterPill = dynamic(() => import("../FilterPill"), {
  ssr: false,
});
const Input = dynamic(() => import("../Input"), {
  ssr: false,
});
const Label = dynamic(() => import("../Label"), {
  ssr: false,
});

const ModelPill = () => {
  const { register } = useForm();
  return (
    <FilterPill Icon={MdFormatListBulleted} title="Models">
      <div className="h-[300px] overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
          (value) => (
            <div
              className="flex justify-between items-center w-[300px] p-3"
              key={value}
            >
              <div className="flex items-center gap-2">
                <Input
                  {...register(`${value}`)}
                  value={value}
                  type="checkbox"
                  className="scale-[1.5] w-3 h-3 accent-success"
                />
                <Label title="Bmw" />
              </div>
              {/* TODO:Update me */}
              <p className="text-text-body text-lg font-medium leading-6  ">
                30
              </p>
            </div>
          )
        )}
      </div>
    </FilterPill>
  );
};

export default ModelPill;
