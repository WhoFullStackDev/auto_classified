"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const BrandCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      className="h-[200px] gap-2.5 mt-10"
    >
      {/* Todo: Fetch car brand logo from server */}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/BMW.avif"
            alt="BMW"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/ferrari.avif"
            alt="ferrari"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/Lamborghini.avif"
            alt="Lamborghini"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/porsche.avif"
            alt="porsche"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/mercedes.avif"
            alt="mercedes"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/Audi.avif"
            alt="Audi"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/ford.avif"
            alt="ford"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
        <div className="flex justify-center items-center shrink-0 h-full w-full">
          <Image
            src="/images/Toyota.avif"
            alt="Toyota"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandCarousel;
