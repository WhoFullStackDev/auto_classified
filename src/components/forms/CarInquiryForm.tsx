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
      className="md:w-[1030px] md:h-[114px] h-[325px] w-[320px] bg-surface_primary p-5 md:rounded-[20px] rounded-xl max-md:justify-center flex md:flex-row flex-col items-center gap-5"
    >
      <Option
        optionData={OptionValue}
        name="carType"
        ariaLabelledby="carType"
        className="max-md:w-full"
      />
      <Option
        optionData={OptionValue}
        name="manufacture"
        ariaLabelledby="manufacture"
        className="max-md:w-full"
      />
      <Option
        optionData={OptionValue}
        name="model"
        ariaLabelledby="model"
        className="max-md:w-full"
      />
      <Input
        id="zip_code"
        name="zip_code"
        placeholder="Zip Code"
        type="tel"
        className="rounded-none border-t-0 border-l-0 border-r-0 max-md:w-[280px]"
      />
      <Button
        label="Find Your Car"
        className="md:w-[180px] w-full"
        type="submit"
        ariaLabel="Find Your Car"
      />
    </form>
  );
};

export default CarInquiryForm;
