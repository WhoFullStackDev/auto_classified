import { cn } from "@/lib/cn";
import { IconType } from "react-icons";

interface FilterPillProps {
  children: Readonly<React.ReactNode>;
  Icon: IconType;
  title: string;
  className?: string;
}

const FilterPill: React.FC<FilterPillProps> = ({
  Icon,
  children,
  title,
  className,
}) => {
  return (
    <div
      tabIndex={0}
      role="button"
      className="inline-block relative group rounded-[20px] pb-3"
    >
      <div className=" inline-flex justify-center items-center gap-1 h-[30px] px-4 bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] rounded-[20px] w-fit cursor-pointer group-hover:bg-surface-action group-hover:border-border-hover group-hover:text-white group-focus:bg-surface-action group-focus:border-border-hover group-focus:text-white">
        <Icon
          size={18}
          className="text-icon-primary group-hover:text-white group-focus:text-white"
        />
        <p className="text-base font-normal text-text-body leading-5 text-center group-hover:text-white group-focus:text-white">
          {title}
        </p>
      </div>
      <div
        className={cn(
          "absolute top-[100%] left-0 bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] hidden  z-[8] group-hover:flex group-focus:flex border-border-primary border-2 p-6  justify-center rounded-[20px] flex-col items-center gap-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterPill;
