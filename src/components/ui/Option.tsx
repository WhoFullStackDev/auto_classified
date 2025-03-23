import { cn } from "@/lib/cn";

export type dataStructure = {
  value: string | number;
  label: string;
};
interface OptionProps {
  className?: string;
  optionData: dataStructure[];
  name: string;
}

const Option: React.FC<OptionProps> = ({
  className,
  optionData,
  name,
  ...props
}) => {
  return (
    <select
      {...props}
      className={cn(
        "w-[172px] px-2 py-2 flex items-center shrink-0 border-b-2 border-border-primary text-text-body hover:border-border-hover focus:outline-border-hover placeholder:text-text-disable disabled:border-border-disabled disabled:text-text-on-disabled font-normal text-base cursor-pointer",
        className
      )}
      name={name}
    >
      {optionData &&
        optionData.map((Item, index) => (
          <option key={index} value={Item.value}>
            {Item.label}
          </option>
        ))}
    </select>
  );
};

export default Option;
