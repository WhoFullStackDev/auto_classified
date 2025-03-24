import { cn } from "@/lib/cn";

interface ButtonProps {
  className?: string;
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  ariaLabel: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  type,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={cn(
        "flex justify-center items-center w-[85px] h-10 px-4 py-2 bg-button-primary hover:bg-button-hover  focus:bg-button-hover  shadow-soft-lg disabled:bg-button-disable rounded-sm text-text-on-action font-medium text-base leading-6 shrink-0 disabled:text-text-on-disabled cursor-pointer",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
