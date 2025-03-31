"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

const SortOptions = () => {
  const { register } = useForm({
    defaultValues: {
      sort: "best match",
    },
  });
  return (
    <div className="pb-3 relative">
      <select
        {...register("sort")}
        id="sortOptions"
        className="cursor-pointer px-2 appearance-none w-[136px] outline-border-hover"
        aria-labelledby="sort"
      >
        <option value="best match">Best Match</option>
        <option value="best deal">Best Deal</option>
        <option value="price high to low">Price High To Low</option>
        <option value="price low to high">Price Low To High</option>
        <option value="distance">Distance</option>
        <option value="millage high to low">Millage High To Low</option>
        <option value="millage low to high">Millage Low To High</option>
        <option value="year high to low">Year High To Low</option>
        <option value="year low to high">Year Low To High</option>
        <option value="newly listed">Newly Listed</option>
      </select>

      {/* Custom Icon */}
      <Image
        src="/images/dropdown.svg"
        alt="dropdown"
        className=" right-0.5 text-gray-500 pointer-events-none absolute top-1/6 -translate-x-1/2"
        width={10}
        height={15}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default SortOptions;
