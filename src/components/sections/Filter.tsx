import ModelPill from "../ui/pills/ModelPill";
import LocationPill from "../ui/pills/LocationPill";
import ManufacturerPill from "../ui/pills/ManufacturerPill";
import MoreFilterPill from "../ui/pills/MoreFilterPill";
import PricePill from "../ui/pills/PricePill";
import YearPill from "../ui/pills/YearPill";
import BodyPill from "../ui/pills/BodyPill";
import SortOptions from "../ui/SortOptions";
import MobilePricePill from "../ui/mobilePills/MobilePricePill";
import MobileBodyPill from "../ui/mobilePills/MobileBodyPill";
import MobileLocationPill from "../ui/mobilePills/MobileLocationPill";
import MobileYearPill from "../ui/mobilePills/MobileYearPill";
import MobileManufacturerPill from "../ui/mobilePills/MobileManufacturerPill";
import MobileModelPill from "../ui/mobilePills/MobileModelPill";
import MobileMoreFilterPill from "../ui/mobilePills/MobileMoreFilterPill";

const Filter = () => {
  return (
    <div className="flex justify-between max-lg:flex-col items-center md:mt-10 mt-3 mb-3 ">
      <div className="flex items-center gap-2 max-lg:hidden">
        <PricePill />
        <BodyPill />
        <LocationPill />
        <YearPill />
        <ManufacturerPill />
        <ModelPill />
        <MoreFilterPill />
      </div>
      <div className=" flex gap-2 max-lg:hidden">
        <p className="text-base text-[#444444] font-normal pb-3 ">Sort By</p>
        <SortOptions />
      </div>
      <div className="lg:hidden flex gap-2 overflow-x-scroll overflow-y-hidden w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1 bg-surface_page">
        <MobilePricePill />
        <MobileBodyPill />
        <MobileLocationPill />
        <MobileYearPill />
        <MobileManufacturerPill />
        <MobileModelPill />
        <MobileMoreFilterPill />
      </div>
      <div
        className="lg:hidden w-full justify-between 
      flex mt-3"
      >
        <p className="text-base text-text-body font-normal ">
          1 – 30 of 719,709
        </p>
        <div className=" flex gap-2">
          <p className="text-base text-[#444444] font-normal">Sort By</p>
          <SortOptions />
        </div>
      </div>
    </div>
  );
};

export default Filter;
