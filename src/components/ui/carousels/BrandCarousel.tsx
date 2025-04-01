"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { A11y, Keyboard } from "swiper/modules";
import dynamic from "next/dynamic";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

const BrandCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        className="h-[210px] mt-10"
        a11y={{
          enabled: true,

          slideLabelMessage: "Slide {{index}}",
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true }}
      >
        {/* Todo: Fetch car brand logo from server fix widt hight*/}
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action outline-none overflow-hidden relative"
          key={1}
          tabIndex={0}
          aria-label={`Slide ${1}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/BMW.avif"
                alt="BMW"
                fill
                quality={100}
                sizes="(min-width: 780px) 130px, 65px"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={2}
          tabIndex={0}
          aria-label={`Slide ${2}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/ferrari.avif"
                alt="ferrari"
                fill
                quality={100}
                sizes="(min-width: 780px) 130px, 65px"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={3}
          tabIndex={0}
          aria-label={`Slide ${3}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/Lamborghini.avif"
                alt="Lamborghini"
                fill
                quality={100}
                loading="lazy"
                sizes="(min-width: 780px) 130px, 65px"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={4}
          tabIndex={0}
          aria-label={`Slide ${4}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/porsche.avif"
                alt="porsche"
                fill
                quality={100}
                loading="lazy"
                sizes="(min-width: 780px) 130px, 65px"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={5}
          tabIndex={0}
          aria-label={`Slide ${5}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/mercedes.avif"
                alt="mercedes"
                fill
                quality={100}
                sizes="(min-width: 780px) 130px, 65px"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={6}
          tabIndex={0}
          aria-label={`Slide ${6}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/Audi.avif"
                alt="Audi"
                fill
                sizes="(min-width: 780px) 130px, 65px"
                quality={100}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={7}
          tabIndex={0}
          aria-label={`Slide ${7}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/ford.avif"
                alt="ford"
                fill
                sizes="(min-width: 780px) 130px, 65px"
                quality={100}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  md:h-[200px]! md:w-[200px]! h-[130px]! w-[130px]! rounded-xl bg-surface_primary shadow-lg cursor-pointer hover:bg-surface-action focus:outline-border-focus focus:outline-2  focus:bg-surface-action overflow-hidden relative"
          key={8}
          tabIndex={0}
          aria-label={`Slide ${8}`}
        >
          <div className="flex justify-center items-center shrink-0 h-full w-full">
            <div className="relative md:w-[100px] md:h-[130px] w-[65px] h-[65px]">
              <Image
                src="/images/Toyota.avif"
                alt="Toyota"
                fill
                quality={100}
                loading="lazy"
                sizes="(min-width: 780px) 130px, 65px"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
