import CarPriceEstimator from "@/components/sections/CarPriceEstimator";
import HeroSection from "@/components/sections/HeroSection";
import MostSellingCars from "@/components/sections/MostSellingCars";
import Services from "@/components/sections/Services";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <MostSellingCars />
      <Services />
      <CarPriceEstimator />
    </React.Fragment>
  );
};

export default page;
