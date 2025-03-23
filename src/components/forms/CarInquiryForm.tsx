"use client";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Option from "../ui/Option";
const OptionValue = [
  { value: "hello", label: "hello" },
  { value: "he", label: "he" },
];

const CarInquiryForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[1030px] h-[114px] bg-surface_primary p-8 rounded-[20px] inline-flex items-center gap-6"
    >
      <Option optionData={OptionValue} name="carType" />
      <Option optionData={OptionValue} name="manufacture" />
      <Option optionData={OptionValue} name="model" />
      <Input id="zip_code" name="zip_code" placeholder="Zip Code" type="tel" />
      <Button label="Find Your Car" className="w-[180px]" type="submit" />
    </form>
  );
};

export default CarInquiryForm;
