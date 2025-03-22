import { cn } from "@/lib/cn";
import { IconType } from "react-icons";

interface inputProps {
  placeholder: string;
  name: string;
  id: string;
  className?: string;
  LeftIcon?: IconType;
  RightIcon?: IconType;
}

const Input: React.FC<inputProps> = ({
  id,
  name,
  placeholder,
  className,
  LeftIcon,
  RightIcon,
}) => {
  return (
    <div
      className={cn(
        "inline-flex justify-center items-center relative w-[172px]",
        className
      )}
    >
      {LeftIcon && (
        <LeftIcon className="absolute left-2 top-1/2 transform -translate-y-1/2  text-icon-primary hover:text-icon-action-hover focus:text-icon-action-hover" />
      )}
      <input
        id={id}
        placeholder={placeholder}
        className={cn(
          "w-full px-2 py-2 flex items-center shrink-0 border-b-2 border-border-primary text-text-body hover:border-border-hover focus:outline-border-hover placeholder:text-text-disable disabled:border-border-disabled disabled:text-text-on-disabled font-normal text-base",
          className
        )}
        name={name}
      />
      {RightIcon && (
        <RightIcon className="absolute right-3 top-1/2 transform -translate-y-1/2  text-icon-primary hover:text-icon-action-hover focus:text-icon-action-hover" />
      )}
    </div>
  );
};

export default Input;
