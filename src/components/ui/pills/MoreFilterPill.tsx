"use client";
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
import { useState } from "react";
import CarHistoryDropdown from "../filterdropdown/CarHistoryDropdown";

const MoreFilterPill = () => {
  const [openDropdownTag, setOpenDropdownTag] = useState<string | null>(null);
  return (
    <FilterPill Icon={FiFilter} title="More Filters">
      <div className="h-[300px] overflow-y-auto justify-start">
        <FuelDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <ExteriorColorDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <PriceRating
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <PopularFeaturesDropDown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <CarHistoryDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <TransmissionDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <DriveTypeDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <EngineDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <InteriorColorDropDown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <BedLengthDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
        <CabDropdown
          openDropdownTag={openDropdownTag}
          setOpenDropdownTag={setOpenDropdownTag}
        />
      </div>
    </FilterPill>
  );
};

export default MoreFilterPill;
