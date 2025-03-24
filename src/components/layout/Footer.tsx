import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Heading from "../ui/Heading";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="mt-[120px]">
      <Container>
        <div className="flex justify-between">
          <div className="flex justify-center flex-col gap-9">
            <Link
              href="/"
              className="font-black text-2xl inline w-28 outline-none focus:ring-2 focus:ring-offset-2  focus:ring-border-focus rounded-md"
            >
              Logo
            </Link>
            <Heading
              text="We help you to find your dream car "
              className="w-[320px]"
            />
            <div className="flex items-center gap-3 ">
              <Link
                href="#"
                className="outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-border-focus rounded-full"
              >
                <FiFacebook className="w-9 h-9 text-icon-primary cursor-pointer hover:text-icon-action-hover focus:hover:text-icon-action-hover" />
              </Link>
              <Link
                href="#"
                className="outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-border-focus   rounded-full"
              >
                <RiTwitterXLine className="w-9 h-9 text-icon-primary cursor-pointer hover:text-icon-action-hover" />
              </Link>
              <Link
                href="#"
                className="outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-border-focus  rounded-full"
              >
                <FiInstagram className="w-9 h-9 text-icon-primary cursor-pointer hover:text-icon-action-hover" />
              </Link>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex  flex-col gap-5">
              <p className="text-base text-[#666666] leading-5 ">Company</p>
              <div className="flex  flex-col justify-center gap-2">
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  News
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base text-[#666666] leading-5">Resources</p>
              <div className="flex  flex-col justify-center gap-2">
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Tools
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Grocery
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Health
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Jewelry
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base text-[#666666] leading-5">Platform</p>
              <div className="flex  flex-col justify-center gap-2">
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  New
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Used
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Electric
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Research
                </Link>
                <Link
                  href="#"
                  className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
                >
                  Sell your car
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr className="border-border-disabled mt-4" />
      {/* Todo: Add company name */}
      <Container>
        <div className="flex justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Company name Inc. All right
            reserved
          </p>
          <div className="flex item-center gap-5">
            <Link
              href="#"
              className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
            >
              Teams of service
            </Link>
            <Link
              href="#"
              className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-base text-text-body leading-5 outline-none focus:ring-2 focus:ring-offset-2 hover:text-text-hover focus:text-text-hover focus:ring-border-focus rounded-md"
            >
              Cookie
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
