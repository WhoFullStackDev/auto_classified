"use client";

import { cn } from "@/lib/cn";
import { Fragment, useState } from "react";
import { IconType } from "react-icons";
import { FiX } from "react-icons/fi";

interface MobileFilterPillProps {
  children: Readonly<React.ReactNode>;
  Icon: IconType;
  title: string;
  className?: string;
}

const MobileFilterPill: React.FC<MobileFilterPillProps> = ({
  Icon,
  children,
  title,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <button
        tabIndex={0}
        role="button"
        className={cn(
          "inline-flex justify-center items-center gap-1 h-[30px] px-4 bg-surface_primary shadow-lg rounded-[20px] w-fit cursor-pointer text-base font-normal text-text-body leading-5 text-center ",
          className
        )}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Icon size={18} className="text-icon-primary" />
        {title}
      </button>

      {isMenuOpen && (
        <div className="absolute w-full h-fit top-18 inset-0  z-10 flex justify-center">
          <div
            className="fixed inset-0 bg-black opacity-20 z-10"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <div className="w-[80%] bg-surface_primary p-5  z-20 relative rounded-xl">
            <FiX
              size={24}
              className="text-icon-primary bg-[#FFDBDB] rounded-full absolute right-5 top-5"
              tabIndex={0}
              role="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            <h6 className="text-text-heading text-xl leading-7 font-bold pt-3 capitalize">
              {title}
            </h6>
            <div className="mt-2"> {children}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MobileFilterPill;
