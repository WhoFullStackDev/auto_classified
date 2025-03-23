import CarInquiryForm from "../forms/CarInquiryForm";
import Container from "../ui/Container";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/Hero.avif')`,
        height: "776px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
