"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { A11y, Keyboard } from "swiper/modules";

const BrandCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        className="h-[210px] mt-10"
        a11y={{
          enabled: true,

          slideLabelMessage: "Slide {{index}}",
        }}
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true }}
      >
        {/* Todo: Fetch car brand logo from server */}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action outline-none overflow-hidden relative"
          key={1}
          tabIndex={0}
          aria-label={`Slide ${1}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/BMW.avif"
              alt="BMW"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={2}
          tabIndex={0}
          aria-label={`Slide ${2}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/ferrari.avif"
              alt="ferrari"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={3}
          tabIndex={0}
          aria-label={`Slide ${3}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/Lamborghini.avif"
              alt="Lamborghini"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={4}
          tabIndex={0}
          aria-label={`Slide ${4}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/porsche.avif"
              alt="porsche"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={5}
          tabIndex={0}
          aria-label={`Slide ${5}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/mercedes.avif"
              alt="mercedes"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={6}
          tabIndex={0}
          aria-label={`Slide ${6}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/Audi.avif"
              alt="Audi"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={7}
          tabIndex={0}
          aria-label={`Slide ${7}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/ford.avif"
              alt="ford"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={8}
          tabIndex={0}
          aria-label={`Slide ${8}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <Image
              src="/images/Toyota.avif"
              alt="Toyota"
              width={100}
              height={100}
              loading="lazy"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
