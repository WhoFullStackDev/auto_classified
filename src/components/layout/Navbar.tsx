import { navLinks } from "@/constants/navLink";
import Container from "../ui/Container";
import Link from "next/link";
import { FiBell, FiHeart } from "react-icons/fi";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="bg-surface_primary h-14 shrink-0 shadow-lg">
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
            <Button type="button" label="Login" ariaLabel="Login" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
