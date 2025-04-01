import { AiFillCar } from "react-icons/ai";
import Container from "../ui/Container";
import { FaHandshake } from "react-icons/fa";
import { HiBuildingStorefront } from "react-icons/hi2";
import Heading from "../ui/Heading";

const Services = () => {
  return (
    <Container>
      <div className="h-full flex justify-center items-center flex-col gap-5">
        <Heading text="Top-Selling Cars" className="mt-[120px] text-center" />
        <div className="xl:w-[1240px]  md:h-[328px] h-[585px] w-full rounded-xl border-2 border-white bg-[linear-gradient(96deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 100%)] mt-10 flex max-md:flex-col  items-center justify-between backdrop-blur-xl p-4">
          <div className="w-[250px] flex flex-col items-center gap-5">
            <AiFillCar className="md:w-12 md:h-12 w-8 h-8  aspect-square" />
            <h2 className="text-text-heading text-center md:text-2.5xl text-2xl font-bold md:leading-9 leading-8">
              Buy Car
            </h2>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              Browse through our extensive collection of verified used and new
              cars.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <FaHandshake className="md:w-12 md:h-12 w-8 h-8  aspect-square" />
            <h2 className="text-text-heading text-center md:text-2.5xl text-2xl font-bold md:leading-9 leading-8">
              Sell Cars
            </h2>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              List your car for sale and reach thousands of potential buyers.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <HiBuildingStorefront className="md:w-12 md:h-12 w-8 h-8  aspect-square" />
            <h2 className="text-text-heading text-center md:text-2.5xl text-2xl font-bold md:leading-9 leading-8">
              Dealer Network
            </h2>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              Connect with our nationwide network of certified dealers.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
