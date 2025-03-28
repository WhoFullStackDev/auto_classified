import { cn } from "@/lib/cn";

interface labelProps {
  className?: string;
  title: string;
  htmlFor?: string;
}
const Label: React.FC<labelProps> = ({ className, title, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-base font-medium leading-5 text-text-body",
        className
      )}
    >
      {title}
    </label>
  );
};

export default Label;
