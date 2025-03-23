import { cn } from "@/lib/cn";

interface HeadingPros {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingPros> = ({ text, className }) => {
  return (
    <h1
      className={cn(
        "font-bold text-[40px] leading-[52px] text-text-heading",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;
