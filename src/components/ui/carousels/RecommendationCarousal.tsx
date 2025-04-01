"use client";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

const RecommendationCarousal = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        className="h-[314px]! "
        a11y={{
          enabled: true,
          nextSlideMessage: "Next slide",
          prevSlideMessage: "Previous slide",
          slideLabelMessage: "Slide {{index}}",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[A11y, Keyboard, Navigation]}
        keyboard={{ enabled: true }}
      >
        {/* Todo: Fetch car brand logo from server fix widt hight*/}
        {[...Array(5)].map((_, index) => (
          <SwiperSlide
            key={index}
            tabIndex={0}
            aria-label={`Slide ${index}`}
            className="w-full! md:w-[295px]!"
          >
            <Card className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendationCarousal;
