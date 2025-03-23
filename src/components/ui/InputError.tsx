import { cn } from "@/lib/cn";

const InputError = ({
  error,
  className,
}: {
  error: string;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-text-error text-base font-normal leading-6 self-stretch invisible",
        className
      )}
    >
      {error}
    </p>
  );
};

export default InputError;
