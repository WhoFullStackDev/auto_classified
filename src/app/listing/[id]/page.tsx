import DealerDetails from "@/components/carDetails/DealerDetails";
import Feature from "@/components/carDetails/Feature";
import FuelSpecs from "@/components/carDetails/FuelSpecs";
import History from "@/components/carDetails/History";
import Measurements from "@/components/carDetails/Measurements";
import Overview from "@/components/carDetails/Overview";
import Pricing from "@/components/carDetails/Pricing";
import Recommendation from "@/components/carDetails/Recommendation";
import Safety from "@/components/carDetails/Safety";
import CarImageSlider from "@/components/ui/carousels/CarImageSlider";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Listing = () => {
  return (
    <Container className="max-w-5xl justify-center items-center">
      <div>
        <div className="flex items-center gap-1 mt-5">
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
        <Heading text="2022 BMW X3 sDrive30i RWD" className="mt-10" />
        <div className="flex gap-5">
          <div className="flex flex-col w-[610px]">
            <CarImageSlider />
            <div className="mt-5 flex flex-col gap-7">
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
        </div>
      </div>
    </Container>
  );
};

export default Listing;
