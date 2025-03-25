import React from "react";
import FilterPill from "../FilterPill";
import { FiMapPin, FiSearch } from "react-icons/fi";
import Input from "../Input";

const LocationPill = () => {
  return (
    <div>
      <FilterPill Icon={FiMapPin} title="Location">
        <Input
          className="flex justify-between items-center bg-[#D9D9D9] w-[300px] shrink-0 h-[40px] rounded-[50px] overflow-hidden px-4 cursor-pointer"
          name="search"
          placeholder="Notion Wide"
          type="text"
          RightIcon={FiSearch}
          size={24}
        />
        <div className="h-[200px] overflow-y-scroll">
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>{" "}
          <p
            tabIndex={0}
            role="button"
            className="text-text-body text-base font-normal leading-6 self-stretch w-[300px] hover:bg-surface-disable focus:bg-surface-disable p-2 rounded-xs cursor-pointer"
          >
            Australia
          </p>
        </div>
      </FilterPill>
    </div>
  );
};

export default LocationPill;
