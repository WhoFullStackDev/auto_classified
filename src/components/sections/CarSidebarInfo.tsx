import {
  FiArrowUpRight,
  FiExternalLink,
  FiInfo,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";
import Button from "../ui/Button";
import Link from "next/link";
import { AiOutlineCar } from "react-icons/ai";
import { RiVerifiedBadgeLine } from "react-icons/ri";

const CarSidebarInfo = () => {
  return (
    <div className=" mt-10 w-[360px] relative aspect-[340/2760]">
      <div className="sticky top-10 left-0 flex flex-col justify-center gap-7">
        <div className="bg-surface_primary shadow-lg rounded-xl w-[340px] h-[230px] p-5 flex flex-col justify-center gap-3">
          <div className="flex gap-1 items-center">
            <h2 className="text-2.5xl leading-9 font-bold text-text-heading">
              $17,000
            </h2>
            <small className="text-text-body">
              Your price w/o taxes & fees
            </small>
          </div>

          <div className="bg-[#D3EAFD] text-text-body  px-3 py-1 rounded-2xl w-[160px]">
            <small>$150 discount applied</small>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center p-1 w-5  h-5 rounded-full bg-success">
              <FiArrowUpRight size={12} color="#ffffff" />
            </div>
            <p className="text-text-body leading-5 font-normal text-base">
              Good deal
            </p>
          </div>
          <div className="flex gap-2 ">
            <p className="text-text-body leading-5 font-normal text-base text-nowrap">
              $569 below market
            </p>
            <div
              tabIndex={0}
              role="button"
              aria-label="info"
              className="group cursor-pointer flex flex-col items-center justify-center relative"
            >
              <FiInfo
                color="#2196F3"
                size={24}
                className="group-hover:text-[#145A92] group-focus:text-[#145A92]"
              />
              <div className="bg-surface_primary w-[300px] h-[170px] rounded-xl shadow-lg p-5 absolute top-10 hidden group-hover:block group-focus:block">
                <div className="w-[300px] rounded-tr-xl rounded-tl-xl bg-blue-500 h-3 absolute top-0 left-0">
                  <div className="inline-block w-0 h-0 border-solid border-t-0 border-r-[10px] border-l-[10px] border-b-[17.3px] border-l-transparent border-r-transparent border-t-transparent border-b-blue-500 absolute -top-4 left-[47%]"></div>
                </div>
                <p className=" mt-5 text-text-body leading-5 font-normal text-base ">
                  The list price of a car refers to the price set by the
                  dealership.
                </p>
                <p className="pt-4 text-text-body leading-5 font-normal text-base ">
                  Discounts from the dealership are potentially available.
                </p>
              </div>
            </div>
          </div>

          <Button
            type="button"
            ariaLabel="schedule"
            label="Schedule appointment"
            className="w-[300px]"
          />
        </div>
        <div className="bg-surface_primary shadow-lg rounded-xl w-[340px] h-[195px] p-5 flex flex-col justify-center gap-3">
          <Link
            href="/"
            className="text-base leading-5 font-medium text-text-body underline"
          >
            World Ford Pensacola
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <FiPhoneCall className="text-icon-primary" size={20} />
            <p className="text-base leading-5 font-medium text-text-body underline">
              Call dealer
            </p>
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <AiOutlineCar className="text-icon-primary" size={20} />
            <p className="text-base leading-5 font-medium text-text-body underline">
              View vehicle on {`dealer's`} site
            </p>
            <FiExternalLink className="text-icon-primary" size={20} />
          </Link>
          <div className="flex items-center gap-3">
            <FiMapPin className="text-icon-primary" size={20} />
            <p className="text-base leading-5 font-medium text-text-body ">
              Pensacola, FL
              <small className="text-gray-600">(1,833 mi away)</small>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <RiVerifiedBadgeLine className="text-icon-primary" size={20} />
            <p className="text-base leading-5 font-medium text-text-body ">
              Dealer contacted on Mar 16, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSidebarInfo;
