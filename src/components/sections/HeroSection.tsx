import Image from "next/image";
import CarInquiryForm from "../forms/CarInquiryForm";
import Container from "../ui/Container";
import HeroImage from "../../../public/images/Hero.avif";

const HeroSection = () => {
  return (
    <div className="h-[776px] relative">
      <Image
        src={HeroImage}
        alt="hero"
        placeholder="blur"
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Container className="h-full">
        <div className="h-full flex justify-center items-center flex-col gap-5">
          <h1 className="text-text-on-action font-black md:text-7xl text-center max-md:leading-14 shrink-0 text-[40px]">
            Buy & Sell Cars Hassle-Free
          </h1>
          <h2 className="md:text-2.5xl text-lg font-bold text-text-on-action text-center shrink-0">
            Find Your Perfect Ride at the Best Price!
          </h2>
          <CarInquiryForm />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
