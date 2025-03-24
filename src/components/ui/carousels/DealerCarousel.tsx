"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const DealerCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      className="h-[200px] gap-2.5 mt-10"
    >
      {/* Todo: Fetch Person image ,name,place from server */}
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
      <SwiperSlide className="  h-[200px]! w-[200px]! rounded-xl bg-surface_primary shadow-soft-lg">
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
  );
};

export default DealerCarousel;
