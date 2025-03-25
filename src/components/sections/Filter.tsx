import LocationPill from "../ui/pills/LocationPill";
import PricePill from "../ui/pills/PricePill";

const Filter = () => {
  return (
    <div className="flex items-center gap-2">
      <PricePill />
      <LocationPill />
    </div>
  );
};

export default Filter;
