"use client";
import { FiFilter } from "react-icons/fi";
import { useState } from "react";
import dynamic from "next/dynamic";

const MobileFilterPill = dynamic(() => import("../MobileFilterPill"), {
  ssr: false,
});

const FuelDropdown = dynamic(() => import("../filterdropdown/FuelDropdown"), {
  ssr: false,
});
const CarHistoryDropdown = dynamic(
  () => import("../filterdropdown/CarHistoryDropdown"),
  {
    ssr: false,
  }
);
const EngineDropdown = dynamic(
  () => import("../filterdropdown/EngineDropdown"),
  {
    ssr: false,
  }
);

const ExteriorColorDropdown = dynamic(
  () => import("../filterdropdown/ExteriorColorDropdown"),
  {
    ssr: false,
  }
);

const CabDropdown = dynamic(() => import("../filterdropdown/CabDropdown"), {
  ssr: false,
});

const BedLengthDropdown = dynamic(
  () => import("../filterdropdown/BedLengthDropdown"),
  {
    ssr: false,
  }
);

const DriveTypeDropdown = dynamic(
  () => import("../filterdropdown/DriveTypeDropdown"),
  {
    ssr: false,
  }
);
const TransmissionDropdown = dynamic(
  () => import("../filterdropdown/TransmissionDropdown"),
  {
    ssr: false,
  }
);

const PopularFeaturesDropDown = dynamic(
  () => import("../filterdropdown/PopularFeaturesDropDown"),
  {
    ssr: false,
  }
);
const InteriorColorDropDown = dynamic(
  () => import("../filterdropdown/InteriorColorDropDown"),
  {
    ssr: false,
  }
);

const PriceRating = dynamic(() => import("../filterdropdown/PriceRating"), {
  ssr: false,
});

const MobileMoreFilterPill = () => {
  const [openDropdownTag, setOpenDropdownTag] = useState<string | null>(null);
  return (
    <MobileFilterPill Icon={FiFilter} title="Filters">
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
    </MobileFilterPill>
  );
};

export default MobileMoreFilterPill;
