import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import BrandCarousel from "../ui/carousels/BrandCarousel";

const BrandSection = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <Heading text="Shop your favourite brand" className="mt-[120px]" />
        <BrandCarousel />
      </div>
    </Container>
  );
};

export default BrandSection;
