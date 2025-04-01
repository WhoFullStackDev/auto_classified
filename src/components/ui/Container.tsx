import { cn } from "@/lib/cn";

interface ContainerProps {
  children: Readonly<React.ReactNode>;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-7xl flex flex-col justify-between md:px-5 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
