import HeroSection from "@/components/sections/HeroSection";
import MostSellingCars from "@/components/sections/MostSellingCars";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <MostSellingCars />
    </React.Fragment>
  );
};

export default page;
