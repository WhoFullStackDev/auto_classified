import { cn } from "@/lib/cn";
import { IconType } from "react-icons";

interface inputProps {
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  LeftIcon?: IconType;
  RightIcon?: IconType;
  type: string;
  size?: number;
  defaultValue?: number;
  value?: number | string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({
  id,
  name,
  placeholder,
  className,
  LeftIcon,
  RightIcon,
  type,
  defaultValue,
  onChange,
  value,
  size,
  checked,
  ...props
}) => {
  return (
    <div className="inline-flex justify-center items-center relative ">
      {LeftIcon && (
        <LeftIcon className="absolute left-2 top-1/2 transform -translate-y-1/2  text-icon-primary hover:text-icon-action-hover focus:text-icon-action-hover" />
      )}
      <input
        {...props}
        type={type}
        id={id}
        checked={checked}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cn(
          "w-[172px] px-2 py-2 flex items-center shrink-0 border-2  rounded-sm border-border-primary text-text-body hover:border-border-hover focus:outline-border-hover placeholder:text-text-disable disabled:border-border-disabled disabled:text-text-on-disabled font-normal text-base cursor-pointe0r",
          className
        )}
        name={name}
      />
      {RightIcon && (
        <RightIcon
          className="absolute right-3 top-1/2 transform -translate-y-1/2  text-icon-primary hover:text-icon-action-hover focus:text-icon-action-hover"
          size={size}
        />
      )}
    </div>
  );
};

export default Input;
