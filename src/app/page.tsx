import BrandSection from "@/components/sections/BrandSection";
import CarPriceEstimator from "@/components/sections/CarPriceEstimator";
import HeroSection from "@/components/sections/HeroSection";
import MostSellingCars from "@/components/sections/MostSellingCars";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import TopDealers from "@/components/sections/TopDealers";
import WhyWe from "@/components/sections/WhyWe";
import { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <HeroSection />
      <MostSellingCars />
      <Services />
      <CarPriceEstimator />
      <WhyWe />
      <BrandSection />
      <TopDealers />
      <Testimonial />
    </Fragment>
  );
};

export default page;
