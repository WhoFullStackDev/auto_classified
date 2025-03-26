import ModelPill from "../ui/pills/ModelPill";
import LocationPill from "../ui/pills/LocationPill";
import ManufacturerPill from "../ui/pills/ManufacturerPill";
import MoreFilterPill from "../ui/pills/MoreFilterPill";
import PricePill from "../ui/pills/PricePill";
import YearPill from "../ui/pills/YearPill";

const Filter = () => {
  return (
    <div className="flex items-center gap-2">
      <PricePill />
      <LocationPill />
      <YearPill />
      <ManufacturerPill />
      <ModelPill />
      <MoreFilterPill />
    </div>
  );
};

export default Filter;
