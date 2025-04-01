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
import { SwiperSlide, Swiper } from "swiper/react";

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
    <div className=" relative md:w-[610px] w-full md:mt-10 mt-5">
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
        className="md:w-[610px]! w-full h-[370px]! "
      >
        <SwiperSlide
          key={1}
          tabIndex={0}
          aria-label={`Slide ${1}`}
          className="md:w-[610px]! w-full h-[370px]! overflow-hidden rounded-xl "
        >
          <Image
            src="/images/Hondai.avif"
            alt="Hondai"
            fill
            priority
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            style={{ objectFit: "cover", position: "absolute" }}
          />
        </SwiperSlide>
        <SwiperSlide
          key={2}
          tabIndex={0}
          aria-label={`Slide ${2}`}
          className="md:w-[610px]! w-full h-[370px]! overflow-hidden rounded-xl"
        >
          <Image
            src="/images/sedan.avif"
            alt="Sedan"
            fill
            priority
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
            style={{ objectFit: "cover", position: "absolute" }}
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
        className="md:w-[610px]! w-full md:aspect-[610/43] overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
          <SwiperSlide
            key={value}
            tabIndex={0}
            aria-label={`Thumbnail ${value}`}
            className="w-[85px]! h-[43px]!  overflow-hidden rounded-xl relative"
          >
            <Image
              src="/images/Hondai.avif"
              alt="Hondai"
              sizes="(max-width: 640px) 640px, (max-width: 1024px) 750px, 100vw"
              fill
              priority
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarImageSlider;
