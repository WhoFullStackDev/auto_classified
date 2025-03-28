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
import { useEffect } from "react";

const MostSellingCarsCarousel = () => {
  useEffect(() => {
    const prevButton = document.querySelector(
      ".swiper-button-prev"
    ) as HTMLElement;
    const nextButton = document.querySelector(
      ".swiper-button-next"
    ) as HTMLElement;

    if (!prevButton || !nextButton) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault(); // Stop page scrolling
        (e.target as HTMLElement).click(); // Trigger button click
      }
    };

    prevButton.addEventListener("keydown", handleKeyDown);
    nextButton.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      prevButton.removeEventListener("keydown", handleKeyDown);
      nextButton.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        a11y={{
          enabled: true,
          nextSlideMessage: "Next slide",
          prevSlideMessage: "Previous slide",
          slideLabelMessage: "Slide {{index}}",
        }}
        modules={[Navigation, A11y, Keyboard]}
        keyboard={{ enabled: true }}
        className="h-[400px] mt-10"
      >
        {/* TODO: Add skeleton, blur*/}
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide
            className="w-[400px] h-[400px] relative rounded-lg group overflow-hidden cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)]"
            key={num}
            tabIndex={0}
            aria-label={`Slide ${num}`}
          >
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
                <h4 className="text-white font-bold text-xl leading-7 drop-shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)]">
                  {truncateText(
                    "Bmw M5 Competition Twin turbo 4.4L v8 engine",
                    18
                  )}
                </h4>
                <h4 className="text-white font-bold text-xl leading-7 drop-shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)]">
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
        ))}
      </Swiper>
    </div>
  );
};

export default MostSellingCarsCarousel;
