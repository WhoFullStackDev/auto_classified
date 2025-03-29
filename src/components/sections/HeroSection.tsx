"use cache";
import Image from "next/image";
import CarInquiryForm from "../forms/CarInquiryForm";
import Container from "../ui/Container";
import HeroImage from "../../../public/images/Hero.avif";

const HeroSection = async () => {
  return (
    <div className="h-[776px] relative">
      <Image
        src={HeroImage}
        alt="hero"
        fill
        placeholder="blur"
        quality={100}
        priority
        sizes="70vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          position: "absolute",
        }}
      />
      <Container className="h-full">
        <div className="h-full flex justify-center items-center flex-col gap-5">
          <h1 className="text-text-on-action font-black text-7xl text-center leading-14 shrink-0">
            Buy & Sell Cars Hassle-Free
          </h1>
          <h2 className="text-2.5xl font-bold text-text-on-action text-center shrink-0">
            Find Your Perfect Ride at the Best Price!
          </h2>
          <CarInquiryForm />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
