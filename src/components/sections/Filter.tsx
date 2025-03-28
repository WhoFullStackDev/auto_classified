import ModelPill from "../ui/pills/ModelPill";
import LocationPill from "../ui/pills/LocationPill";
import ManufacturerPill from "../ui/pills/ManufacturerPill";
import MoreFilterPill from "../ui/pills/MoreFilterPill";
import PricePill from "../ui/pills/PricePill";
import YearPill from "../ui/pills/YearPill";
import BodyPill from "../ui/pills/BodyPill";
import SortOptions from "../ui/SortOptions";

const Filter = () => {
  return (
    <div className="flex justify-between items-center mt-10 mb-2">
      <div className="flex items-center gap-2">
        <PricePill />
        <BodyPill />
        <LocationPill />
        <YearPill />
        <ManufacturerPill />
        <ModelPill />
        <MoreFilterPill />
      </div>
      <div className=" flex gap-2">
        <p className="text-base text-[#444444] font-normal pb-3">Sort By</p>
        <SortOptions />
      </div>
    </div>
  );
};

export default Filter;
