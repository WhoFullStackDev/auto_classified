import { AiFillCar } from "react-icons/ai";
import Container from "../ui/Container";
import { FaHandshake } from "react-icons/fa";
import { HiBuildingStorefront } from "react-icons/hi2";
import Heading from "../ui/Heading";

const Services = () => {
  return (
    <Container>
      <div className="h-full flex justify-center items-center flex-col gap-5">
        <Heading text="Top-Selling Cars" className="mt-[120px]" />
        <div className="w-[1240px] h-[328px] rounded-xl border-2 border-white bg-[linear-gradient(96deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 100%)] mt-10 flex justify-center items-center gap-[120px] backdrop-blur-xl">
          <div className="w-[250px] flex flex-col items-center gap-5">
            <AiFillCar className="w-12 h-12 aspect-square" />
            <h4 className="text-text-heading text-center text-2.5xl font-bold leading-9">
              Buy Car
            </h4>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              Browse through our extensive collection of verified used and new
              cars.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <FaHandshake className="w-12 h-12 aspect-square" />
            <h4 className="text-text-heading text-center text-2.5xl font-bold leading-9">
              Sell Cars
            </h4>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              List your car for sale and reach thousands of potential buyers.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <HiBuildingStorefront className="w-12 h-12 aspect-square" />
            <h4 className="text-text-heading text-center text-2.5xl font-bold leading-9">
              Dealer Network
            </h4>
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
