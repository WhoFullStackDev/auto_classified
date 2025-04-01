"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { A11y, Keyboard } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const DealerCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        className="h-[200px]  mt-10"
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <SwiperSlide
            className="  md:h-[200px]! md:w-[200px]! w-[130px] h-[130px] rounded-xl bg-surface_primary shadow-lg cursor-pointer overflow-hidden relative"
            key={value}
            tabIndex={0}
            aria-label={`Slide ${value}`}
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
        ))}
      </Swiper>
    </div>
  );
};

export default DealerCarousel;
