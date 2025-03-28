import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCalendar, FiHeart, FiShare } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox } from "react-icons/tb";

const Card = () => {
  return (
    <div className="w-[295px] h-[314px] bg-surface_primary rounded-xl relative shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden  cursor-pointer">
      <div className="absolute w-fit h-fit justify-center items-center flex px-2  bg-surface_primary rounded-lg  top-3 left-3 z-[1]">
        <small className="text-text-body">Sponsor</small>
      </div>
      <button
        className="absolute w-fit h-fit justify-center items-center flex p-2  bg-surface_primary rounded-full  top-3 right-3 cursor-pointer z-[1]"
        aria-label="like"
      >
        <FiHeart className="text-icon-primary" />
      </button>
      <button
        className="absolute w-fit h-fit justify-center items-center flex p-2  bg-surface_primary rounded-full  top-[58%] right-3 cursor-pointer z-[1]"
        aria-label="share"
      >
        <FiShare className="text-icon-primary" />
      </button>
      <Link href="/">
        <div className="relative w-[295px] h-[197px]">
          <Image
            src="/images/Honda.avif"
            alt="Honda"
            priority
            fill
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-3 flex flex-col justify-center gap-2">
          <h2 className="truncate text-xl leading-7 font-bold text-text-heading">
            Renault Kwid Outsider 1.0 Flex MT 2023
          </h2>
          <div className="flex items-center gap-2">
            <h3 className="truncate text-xl leading-7 font-bold text-text-heading">
              $285
            </h3>
            <div className="items-center flex gap-1">
              <div className="w-5 h-5 aspect-square flex justify-center items-center p-1 rounded-full bg-[#228B22]">
                <svg
                  width="6"
                  height="8"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M3 8L6 4H0L3 8ZM6 0L0 0L3 4L6 0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <small className="text-text-body">Excellent Price</small>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-5 h-5 shrink-0 text-text-body" />
              <p className="font-normal text-base text-text-body leading-6">
                2025
              </p>
            </div>
            <div className="flex items-center gap-1">
              <SlSpeedometer className="w-5 h-5 shrink-0 text-text-body" />
              <p className="font-normal text-base text-text-body leading-6">
                15,000KM
              </p>
            </div>
            <div className="flex items-center gap-1">
              <TbManualGearbox className="w-5 h-5 shrink-0 text-text-body" />
              <p className="font-normal text-base text-text-body leading-6">
                Auto
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
