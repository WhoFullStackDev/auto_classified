"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { SwiperClass } from "swiper/react";
import Image from "next/image";
import { A11y, Keyboard, Navigation, FreeMode, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import { FiHeart, FiShare2 } from "react-icons/fi";
import dynamic from "next/dynamic";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

const CarImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

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
        e.preventDefault();
        (e.target as HTMLElement).click();
      }
    };

    prevButton.addEventListener("keydown", handleKeyDown);
    nextButton.addEventListener("keydown", handleKeyDown);

    return () => {
      prevButton.removeEventListener("keydown", handleKeyDown);
      nextButton.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className=" relative w-[610px] mt-10">
      <button
        className="absolute w-10 h-10 justify-center items-center flex p-2  bg-surface_primary rounded-full  top-3 right-3 cursor-pointer z-[2]"
        aria-label="like"
      >
        <FiHeart size={24} className="text-icon-primary" />
      </button>
      <button
        className="absolute w-10 h-10 justify-center items-center flex p-2  bg-surface_primary rounded-full  top-3 right-16 cursor-pointer z-[2]"
        aria-label="share"
      >
        <FiShare2 size={24} className="text-icon-primary" />
      </button>

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        aria-live="polite"
        a11y={{
          enabled: true,
          nextSlideMessage: "Next slide",
          prevSlideMessage: "Previous slide",
          slideLabelMessage: "Slide {{index}}",
        }}
        keyboard={true}
        modules={[FreeMode, Keyboard, A11y, Navigation, Thumbs]}
        style={{ marginBottom: "20px" }}
        className="w-[610px]! h-[370px]! "
      >
        <SwiperSlide
          key={1}
          tabIndex={0}
          aria-label={`Slide ${1}`}
          className="w-[610px]! h-[370px]! overflow-hidden rounded-xl "
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            fill
            priority
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide
          key={2}
          tabIndex={0}
          aria-label={`Slide ${2}`}
          className="w-[610px]! h-[370px]! overflow-hidden rounded-xl"
        >
          <Image
            src="/images/sedan.avif"
            alt="Sedan"
            fill
            priority
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        a11y={{
          enabled: true,
          slideLabelMessage: "Slide {{index}}",
        }}
        modules={[FreeMode, Navigation, Keyboard, A11y, Thumbs]}
        keyboard={true}
        className="w-[610px]! aspect-[610/43] "
      >
        <SwiperSlide
          key={1}
          tabIndex={0}
          aria-label={`Thumbnail ${1}`}
          className="w-[85px]! h-[43px]!  overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide
          key={2}
          tabIndex={0}
          aria-label={`Thumbnail ${2}`}
          className="w-[85px] aspect-[85/43] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide
          key={3}
          tabIndex={0}
          aria-label={`Thumbnail ${3}`}
          className="w-[85px] aspect-[85/43] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide
          key={4}
          tabIndex={0}
          aria-label={`Thumbnail ${4}`}
          className="w-[85px] aspect-[85/43] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide
          key={5}
          tabIndex={0}
          aria-label={`Thumbnail ${5}`}
          className="w-[85px] aspect-[85/43] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </SwiperSlide>
        <SwiperSlide
          key={6}
          tabIndex={0}
          aria-label={`Thumbnail ${6}`}
          className="w-[85px] aspect-[85/43] overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            fill
            priority
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarImageSlider;
