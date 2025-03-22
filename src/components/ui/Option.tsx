import { cn } from "@/lib/cn";

interface OptionProps {
  className?: string;
  optionData: string[];
}

const Option: React.FC<OptionProps> = ({ className, optionData }) => {
  return (
    <select
      className={cn(
        "w-[172px] px-2 py-2 flex items-center shrink-0 border-b-2 border-border-primary text-text-body hover:border-border-hover focus:outline-border-hover placeholder:text-text-disable disabled:border-border-disabled disabled:text-text-on-disabled font-normal text-base",
        className
      )}
    >
      {optionData &&
        optionData.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
    </select>
  );
};

export default Option;
