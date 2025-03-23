"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { truncateText } from "@/lib/truncateText";
import { FiCalendar } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox } from "react-icons/tb";

const MostSellingCarsCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="h-[400px] gap-5 mt-10"
      >
        {/* TODO: Add skeleton, blur*/}
        <SwiperSlide className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer">
          <Image
            src="/images/Card.avif"
            alt="car"
            className="object-fill"
            width={400}
            height={400}
            priority
          />
          <div className="w-[400px] absolute h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] -bottom-28 group-hover:bottom-0 delay-300 transition-all group-hover:opacity-100 ease-in-out left-0 p-5 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center gap-10">
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                {truncateText("Bmw M5 Competition Twin turbo 4.4L v8 engine")}
              </h4>
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                $75,000
              </h4>
            </div>
            <div className="flex gap-9 items-center">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  2025
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SlSpeedometer className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  15,000KM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbManualGearbox className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  Automatic
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer">
          <Image
            src="/images/Card.avif"
            alt="car"
            className="object-fill"
            width={400}
            height={400}
            priority
          />
          <div className="w-[400px] absolute h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] -bottom-28 group-hover:bottom-0 delay-300 transition-all group-hover:opacity-100 ease-in-out left-0 p-5 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center gap-10">
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                {truncateText("Bmw M5 Competition Twin turbo 4.4L v8 engine")}
              </h4>
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                $75,000
              </h4>
            </div>
            <div className="flex gap-9 items-center">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  2025
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SlSpeedometer className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  15,000KM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbManualGearbox className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  Automatic
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer">
          <Image
            src="/images/Card.avif"
            alt="car"
            className="object-fill"
            width={400}
            height={400}
            priority
          />
          <div className="w-[400px] absolute h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] -bottom-28 group-hover:bottom-0 delay-300 transition-all group-hover:opacity-100 ease-in-out left-0 p-5 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center gap-10">
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                {truncateText("Bmw M5 Competition Twin turbo 4.4L v8 engine")}
              </h4>
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                $75,000
              </h4>
            </div>
            <div className="flex gap-9 items-center">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  2025
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SlSpeedometer className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  15,000KM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbManualGearbox className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  Automatic
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer">
          <Image
            src="/images/Card.avif"
            alt="car"
            className="object-fill"
            width={400}
            height={400}
            priority
          />
          <div className="w-[400px] absolute h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] -bottom-28 group-hover:bottom-0 delay-300 transition-all group-hover:opacity-100 ease-in-out left-0 p-5 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center gap-10">
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                {truncateText("Bmw M5 Competition Twin turbo 4.4L v8 engine")}
              </h4>
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                $75,000
              </h4>
            </div>
            <div className="flex gap-9 items-center">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  2025
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SlSpeedometer className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  15,000KM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbManualGearbox className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  Automatic
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer">
          <Image
            src="/images/Card.avif"
            alt="car"
            className="object-fill"
            width={400}
            height={400}
            priority
          />
          <div className="w-[400px] absolute h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] -bottom-28 group-hover:bottom-0 delay-300 transition-all group-hover:opacity-100 ease-in-out left-0 p-5 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center gap-10">
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                {truncateText("Bmw M5 Competition Twin turbo 4.4L v8 engine")}
              </h4>
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                $75,000
              </h4>
            </div>
            <div className="flex gap-9 items-center">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  2025
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SlSpeedometer className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  15,000KM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbManualGearbox className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  Automatic
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer">
          <Image
            src="/images/Card.avif"
            alt="car"
            className="object-fill"
            width={400}
            height={400}
            priority
          />
          <div className="w-[400px] absolute h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] -bottom-28 group-hover:bottom-0 delay-300 transition-all group-hover:opacity-100 ease-in-out left-0 p-5 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center gap-10">
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                {truncateText("Bmw M5 Competition Twin turbo 4.4L v8 engine")}
              </h4>
              <h4 className="text-white font-bold text-xl leading-7 drop-shadow-soft-lg">
                $75,000
              </h4>
            </div>
            <div className="flex gap-9 items-center">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  2025
                </p>
              </div>
              <div className="flex items-center gap-1">
                <SlSpeedometer className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  15,000KM
                </p>
              </div>
              <div className="flex items-center gap-1">
                <TbManualGearbox className="w-5 h-5 shrink-0 text-white" />
                <p className="font-normal text-base text-white leading-6">
                  Automatic
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MostSellingCarsCarousel;
