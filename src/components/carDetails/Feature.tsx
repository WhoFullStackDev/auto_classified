import { FiDroplet, FiNavigation } from "react-icons/fi";
import { GiCarSeat } from "react-icons/gi";
import { PiEngine, PiGasPump } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import { TbCar4Wd, TbManualGearbox } from "react-icons/tb";

const Feature = () => {
  return (
    <div>
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Feature
      </h2>
      <div className="mt-4 flex  justify-between w-full max-md:flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <SlSpeedometer size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Mileage:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              216,001
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FiDroplet size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Exterior: 
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Silver Moss Metallic
            </p>
          </div>
          <div className="flex items-center gap-1">
            <TbCar4Wd size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Drivetrain: 
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              AWD
            </p>
          </div>
          <div className="flex items-center gap-1">
            <PiGasPump size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Fuel Type:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Gas
            </p>
          </div>
          <div className="flex items-center gap-1">
            <TbManualGearbox size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Transmission:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Automatic
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <GiCarSeat size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Interior:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Dk Gray/Lt Gray
            </p>
          </div>
          <div className="flex items-center gap-1">
            <PiEngine size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Engine:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              281 hp 3.6L V6
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FiNavigation size={24} className="text-icon-primary" />
            <p className="font-medium text-lg leading-6 text-text-body">
              Navigation system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
