"use client";
import Container from "../ui/Container";
import Link from "next/link";
import { FiBell, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/constants/navLink";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import clsx from "clsx";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="bg-surface_primary h-14 shrink-0 shadow-lg md:hidden">
        <Container className="h-full">
          <div className="h-full flex justify-between items-center">
            <Link href="/" className="font-black text-2xl">
              Logo
            </Link>

            <div className="inline-flex justify-center items-center gap-5">
              <Link href="#" aria-label="Notifications">
                <FiBell className="flex justify-center items-center shrink-0 w-6 h-6 text-icon-primary hover:text-icon-action-hover" />
              </Link>
              <Link href="#" aria-label="Like">
                <FiHeart className="flex justify-center items-center shrink-0 w-6 h-6 text-icon-primary hover:text-icon-action-hover" />
              </Link>
              <button
                className="md:hidden text-icon-primary"
                aria-label="toggle menu"
              >
                {isMenuOpen ? (
                  <FiX
                    size={32}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  />
                ) : (
                  <FiMenu
                    size={32}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  />
                )}
              </button>
            </div>
          </div>
        </Container>
      </nav>
      {isMenuOpen && (
        <div
          className={clsx(
            "absolute w-full h-screen z-10 top-18 md:hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "left-0 opacity-100" : "-left-full opacity-0"
          )}
        >
          <div
            className={`w-full fixed h-full bg-black opacity-35 inset-0 z-10 transition-all ${
              isScrolled ? "top-0" : "top-14"
            }`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <Container className="z-20">
            <div className=" items-center gap-5 bg-surface_primary rounded-xl h-[300px] flex flex-col justify-center p-4">
              {navLinks.map((navItem, index) => (
                <Link
                  href={navItem.path}
                  className="text-base text-text-body hover:text-text-hover font-medium focus:text-text-action"
                  key={index}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  {navItem.name}
                </Link>
              ))}
              <div className="flex justify-center flex-col gap-3">
                <Button
                  type="button"
                  label="Login"
                  ariaLabel="Login"
                  className=" w-[268px]"
                />
                <Button
                  type="button"
                  label="Register"
                  ariaLabel="Login"
                  className="w-[268px] bg-transparent border-button-primary shadow-none text-text-body border-2"
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default MobileNav;
