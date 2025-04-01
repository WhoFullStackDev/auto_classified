"use client";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Option from "../ui/Option";
const OptionValue = [
  { value: "hello", label: "hello" },
  { value: "he", label: "he" },
];

const CarInquiryForm = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <form
      // onSubmit={handleSubmit}
      className="xl:w-[1030px] xl:h-[114px] h-[325px] w-[80%] bg-surface_primary p-5 rounded-xl max-xl:justify-center flex xl:flex-row flex-col items-center gap-5"
    >
      <Option
        optionData={OptionValue}
        name="carType"
        ariaLabelledby="carType"
        className="max-xl:w-full"
      />
      <Option
        optionData={OptionValue}
        name="manufacture"
        ariaLabelledby="manufacture"
        className="max-xl:w-full"
      />
      <Option
        optionData={OptionValue}
        name="model"
        ariaLabelledby="model"
        className="max-xl:w-full"
      />
      <Input
        id="zip_code"
        name="zip_code"
        placeholder="Zip Code"
        type="tel"
        className="rounded-none border-t-0 border-l-0 border-r-0 max-xl:w-full"
        width="max-xl:w-full w-[280px]"
      />
      <Button
        label="Find Your Car"
        className="xl:w-[180px] w-full"
        type="submit"
        ariaLabel="Find Your Car"
      />
    </form>
  );
};

export default CarInquiryForm;
