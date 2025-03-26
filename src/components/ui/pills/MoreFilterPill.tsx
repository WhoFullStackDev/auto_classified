import React from "react";
import FilterPill from "../FilterPill";
import { FiFilter } from "react-icons/fi";
import FuelDropdown from "../filterdropdown/FuelDropdown";
import PopularFeaturesDropDown from "../filterdropdown/PopularFeaturesDropDown";
import TransmissionDropdown from "../filterdropdown/TransmissionDropdown";
import DriveTypeDropdown from "../filterdropdown/DriveTypeDropdown";
import BedLengthDropdown from "../filterdropdown/BedLengthDropdown";
import CabDropdown from "../filterdropdown/CabDropdown";
import ExteriorColorDropdown from "../filterdropdown/ExteriorColorDropdown";
import PriceRating from "../filterdropdown/PriceRating";
import InteriorColorDropDown from "../filterdropdown/InteriorColorDropDown";
import EngineDropdown from "../filterdropdown/EngineDropdown";

const MoreFilterPill = () => {
  return (
    <FilterPill Icon={FiFilter} title="More Filters">
      <div className="h-[300px] overflow-y-auto justify-start">
        <FuelDropdown />
        <ExteriorColorDropdown />
        <PriceRating />
        <PopularFeaturesDropDown />
        <TransmissionDropdown />
        <DriveTypeDropdown />
        <EngineDropdown />
        <InteriorColorDropDown />
        <BedLengthDropdown />
        <CabDropdown />
      </div>
    </FilterPill>
  );
};

export default MoreFilterPill;
