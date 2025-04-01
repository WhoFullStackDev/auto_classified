"use cache";
import Image from "next/image";
import Heading from "../ui/Heading";
import Container from "../ui/Container";
import CarPriceCalculator from "../forms/CarPriceCalculator";

const CarPriceEstimator = async () => {
  return (
    <Container>
      <div className="mt-[120px] flex max-xl:flex-col justify-center items-center gap-[120px]">
        <div>
          <Heading text="Estimate your budget" className="max-xl:text-center" />
          <p className="text-text-body text-base font-normal leading-6 self-stretch xl:w-[260px] w-full pt-3 max-xl:text-center">
            Connect with our nationwide network of certified dealers.
          </p>
          <div className="md:w-[590px] md:h-[334px]  w-full h-[180px] relative mt-3">
            <Image
              src="/images/Car.avif"
              alt="Car"
              sizes="(min-width: 780px) 590px, (min-width: 500px) 417px, (min-width: 400px) calc(71.25vw + 75px), calc(27.5vw + 236px)"
              fill
              quality={100}
              loading="lazy"
              style={{ objectFit: "cover", position: "absolute" }}
            />
          </div>
        </div>
        <CarPriceCalculator />
      </div>
    </Container>
  );
};

export default CarPriceEstimator;
