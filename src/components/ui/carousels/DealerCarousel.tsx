"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { A11y, Keyboard } from "swiper/modules";

const DealerCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        className="h-[200px]  mt-10"
        a11y={{
          enabled: true,
          slideLabelMessage: "Slide {{index}}",
        }}
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true }}
      >
        {/* Todo: Fetch Person image ,name,place from server */}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={1}
          tabIndex={0}
          aria-label={`Slide ${1}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={2}
          tabIndex={0}
          aria-label={`Slide ${2}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={3}
          tabIndex={0}
          aria-label={`Slide ${3}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={4}
          tabIndex={0}
          aria-label={`Slide ${4}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={5}
          tabIndex={0}
          aria-label={`Slide ${5}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={6}
          tabIndex={0}
          aria-label={`Slide ${6}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={7}
          tabIndex={0}
          aria-label={`Slide ${7}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={8}
          tabIndex={0}
          aria-label={`Slide ${8}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide
          className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg cursor-pointer overflow-hidden relative"
          key={9}
          tabIndex={0}
          aria-label={`Slide ${9}`}
        >
          <div className="flex flex-col justify-center items-center shrink-0 h-full w-full gap-2">
            <Image
              src="/images/Person1.avif"
              alt="Person"
              width={60}
              height={60}
              loading="lazy"
            />
            <p className="text-text-heading text-lg font-normal leading-6 self-stretch text-center">
              Lee
            </p>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              London
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DealerCarousel;
