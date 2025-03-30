"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import Image from "next/image";
import { truncateText } from "@/lib/truncateText";
import { FiCalendar } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import { TbManualGearbox } from "react-icons/tb";

const MostSellingCarsCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        a11y={{
          enabled: true,
          nextSlideMessage: "Next slide",
          prevSlideMessage: "Previous slide",
          slideLabelMessage: "Slide {{index}}",
        }}
        modules={[Navigation, A11y, Keyboard]}
        keyboard={{ enabled: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="md:h-[400px] h-[280px] mt-10"
      >
        {/* TODO: Add skeleton, blur*/}
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide
            className="md:w-[400px]! md:h-[400px]! h-[280px]! w-[335px]! relative rounded-lg group overflow-hidden cursor-pointer shadow-lg md:aspect-square aspect-[280/335]"
            key={num}
            tabIndex={0}
            aria-label={`Slide ${num}`}
          >
            <Image
              src="/images/BMW-M5.avif"
              alt="car"
              sizes="(min-width: 768px) 400px, 335px"
              loading="lazy"
              style={{
                objectFit: "cover",
                position: "absolute",
              }}
              fill
            />

            <div className="w-full absolute bottom-0 h-28 bg-[linear-gradient(178deg,_rgba(0,0,0,0)_2.03%,_#000_97.97%)] md:-bottom-28 md:group-hover:bottom-0 md:delay-300 md:transition-all md:group-hover:opacity-100 md:ease-in-out md:left-0 md:p-5 p-4 flex flex-col gap-5 rounded-bl-lg rounded-br-lg">
              <div className="flex items-center md:gap-10 gap-6">
                <h2 className="text-white font-bold text-xl leading-7 drop-shadow-lg text-nowrap">
                  {truncateText(
                    "Bmw M5 Competition Twin turbo 4.4L v8 engine",
                    18
                  )}
                </h2>
                <h3 className="text-white font-bold text-xl leading-7 drop-shadow-lg">
                  $75,000
                </h3>
              </div>
              <div className="flex md:gap-9 gap-3 items-center">
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
        ))}
      </Swiper>
    </div>
  );
};

export default MostSellingCarsCarousel;
