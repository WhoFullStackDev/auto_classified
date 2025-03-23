import Image from "next/image";
import Heading from "../ui/carousels/Heading";
import Container from "../ui/Container";
import CarPriceCalculator from "../forms/CarPriceCalculator";

const CarPriceEstimator = () => {
  return (
    <Container>
      <div className="mt-[120px] flex justify-center items-center gap-[120px]">
        <div>
          <Heading text="Estimate your budget" />
          <p className="text-text-body text-base font-normal leading-6 self-stretch w-[260px] pt-3">
            Connect with our nationwide network of certified dealers.
          </p>
          <Image
            src="/images/Car.avif"
            alt="Car"
            width={589}
            height={334}
            priority
            className="mt-3"
          />
        </div>
        <CarPriceCalculator />
      </div>
    </Container>
  );
};

export default CarPriceEstimator;
