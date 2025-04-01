import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import BrandCarousel from "../ui/carousels/BrandCarousel";

const BrandSection = () => {
  return (
    <Container>
      <div className="flex justify-center items-center">
        <Heading
          text="Shop your favourite brand"
          className="mt-[120px] text-center"
        />
      </div>
      <BrandCarousel />
    </Container>
  );
};

export default BrandSection;
