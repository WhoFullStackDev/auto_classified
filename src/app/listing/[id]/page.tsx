import DealerDetails from "@/components/carDetails/DealerDetails";
import Feature from "@/components/carDetails/Feature";
import FuelSpecs from "@/components/carDetails/FuelSpecs";
import History from "@/components/carDetails/History";
import Measurements from "@/components/carDetails/Measurements";
import Overview from "@/components/carDetails/Overview";
import Pricing from "@/components/carDetails/Pricing";
import Recommendation from "@/components/carDetails/Recommendation";
import Safety from "@/components/carDetails/Safety";
import CarSidebarInfo from "@/components/sections/CarSidebarInfo";
import CarImageSlider from "@/components/ui/carousels/CarImageSlider";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SideBarCarDetails from "@/components/ui/SideBarCarDetails";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Listing = () => {
  return (
    <Container className="max-w-5xl justify-center items-center">
      <div className="max-md:w-full">
        <div className=" items-center gap-1 mt-5 md:flex hidden">
          <Link
            href="#"
            className="text-text-body text-base font-normal leading-6 self-stretch  cursor-pointer underline hover:text-text-hover focus:text-text-hover"
          >{`${"Used Cars For Sale"}`}</Link>

          <FiChevronRight size={20} className="text-text-body " />
          <Link
            href="#"
            className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer underline hover:text-text-hover focus:text-text-hover"
          >
            Listing
          </Link>
          <FiChevronRight size={20} className="text-text-body " />
          <Link
            href="#"
            className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer underline hover:text-text-hover focus:text-text-hover"
          >
            BMW
          </Link>
          <FiChevronRight size={20} className="text-text-body " />
          <Link
            href="#"
            className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer underline hover:text-text-hover focus:text-text-hover"
          >
            X3
          </Link>
          <FiChevronRight size={20} className="text-text-body " />
          <Link
            href="#"
            className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer underline hover:text-text-hover focus:text-text-hover"
          >
            2022
          </Link>
          <FiChevronRight size={20} className="text-text-body " />
          <p className="text-text-body text-base font-normal leading-6 self-stretch cursor-pointer">
            VIN: 5UX43DP02N9K61332
          </p>
        </div>
        <Heading text="2022 BMW X3 sDrive30i RWD" className="md:mt-10 mt-3" />
        <div className="flex gap-5">
          <div className="flex flex-col md:w-[610px] w-full md:aspect-[610/2760]">
            <CarImageSlider />
            <SideBarCarDetails />
            <div className="mt-5 flex flex-col gap-7 aspect-">
              <Feature />
              <Overview />
              <FuelSpecs />
              <Safety />
              <Measurements />
              <History />
              <Pricing />
              <DealerDetails />
              <Recommendation />
            </div>
          </div>
          <CarSidebarInfo />
        </div>
      </div>
    </Container>
  );
};

export default Listing;
