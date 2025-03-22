import { navLinks } from "@/constants/navLink";
import Container from "../ui/Container";
import Link from "next/link";
import { FiBell, FiHeart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-surface_primary h-14 shrink-0 shadow-soft-lg sticky top-0 left-0 z-10">
      <Container className="h-full">
        <div className="h-full flex justify-between items-center">
          <Link href="/" className="font-black text-2xl">
            Logo
          </Link>
          <div className="inline-flex items-center gap-5">
            {navLinks.map((navItem, index) => (
              <Link
                href={navItem.path}
                className="text-base text-text-body hover:text-text-hover font-medium focus:text-text-action"
                key={index}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
          <div className="inline-flex justify-center items-center gap-5">
            <Link href="#" aria-label="Notifications">
              <FiBell className="flex justify-center items-center shrink-0 w-6 h-6 text-icon-primary hover:text-icon-action-hover" />
            </Link>
            <Link href="#" aria-label="Like">
              <FiHeart className="flex justify-center items-center shrink-0 w-6 h-6 text-icon-primary hover:text-icon-action-hover" />
            </Link>
            <button className="flex justify-center items-center w-[85px] h-10 px-4 py-2 bg-button-primary hover:bg-button-hover  focus:bg-button-hover  shadow-soft-lg disabled:bg-button-disable rounded-sm text-text-on-action font-medium text-base leading-6 shrink-0 disabled:text-text-on-disabled">
              Login
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
