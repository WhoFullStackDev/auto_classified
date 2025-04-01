"use client";
import { useState } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Option from "../ui/Option";
import { calculateEstimateBudget, creditScore, loneTerm } from "@/lib/utils";
import { useForm } from "react-hook-form";

interface PricingIFormValue {
  monthlyPayment: number;
  downPayment: number;
  creditScore: string;
  loanTerms: number;
}

const Pricing = () => {
  const [pickPriceOption, setPickPriceOption] = useState<string>("cash");
  const { register, watch } = useForm<PricingIFormValue>({
    defaultValues: {
      creditScore: "500-600",
      downPayment: 3000,
      loanTerms: 3,
      monthlyPayment: 500,
    },
  });

  const estimatePrice = calculateEstimateBudget({
    creditScore: watch("creditScore"),
    downPayment: Number(watch("downPayment")),
    monthlyPayment: watch("monthlyPayment"),
    terms: watch("loanTerms"),
  });
  return (
    <div className="w-full">
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Price
      </h2>
      <p className="font-medium text-base leading-5 pt-2 md:w-[400px] w-full text-text-body">
        Estimate payments, add your trade-in, and calculate your out-the-door
        price
      </p>
      <div className="flex flex-col justify-center gap-3 mt-5 w-full">
        <div className="md:w-[610px] w-full h-[54px]  bg-surface_primary  shadow-lg flex justify-between items-center rounded-xl p-5 ">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              value="cash"
              id="cash"
              checked={pickPriceOption === "cash"}
              onChange={(e) => setPickPriceOption(e.target.value)}
              name="price"
              className="accent-success"
            />
            <Label title="Your Price" htmlFor="cash" />
          </div>
          <h3 className="text-xl leading-7 text-text-heading font-bold">
            $17,890
          </h3>
        </div>
        <div className="md:w-[610px] w-full h-[54px]  bg-surface_primary  shadow-lg flex justify-between items-center rounded-xl p-5 ">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              value="finance"
              id="finance"
              name="price"
              onChange={(e) => setPickPriceOption(e.target.value)}
              checked={pickPriceOption === "finance"}
              className="accent-success"
            />
            <Label title="Finance" htmlFor="finance" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <h3 className="text-xl leading-7 text-text-heading font-bold">
              ${watch("monthlyPayment")}/mo
            </h3>
            <span className="w-[60px] h-[26px] p-[6px] rounded-lg flex justify-center items-center bg-[#FFEDCC]">
              <small className="text-text-body">Estimate</small>
            </span>
          </div>
        </div>

        {pickPriceOption === "finance" && (
          <div className="w-full">
            <div className="md:w-[610px] w-full h-[156px] bg-surface_primary shadow-lg rounded-xl p-6 flex flex-col justify-center items-center gap-2">
              <Label
                title="Your estimated payment* is"
                className="inline"
                htmlFor="estimate"
              />
              <div className="flex items-center justify-center w-full">
                <h3 className="text-xl leading-7 text-text-heading font-bold">
                  ${estimatePrice}
                </h3>
                <p className="font-medium text-base leading-5 text-text-body">
                  /mo est
                </p>
              </div>
              <p className="font-medium text-[14px] leading-5 text-[#444444] w-full text-center">
                APR of 9.79%
              </p>
            </div>

            <div className="md:w-[610px] w-full  bg-surface_primary  shadow-lg h-[460px] rounded-xl p-8 mt-5">
              <h3 className="text-xl leading-7 text-text-heading font-bold">
                Select your finance terms
              </h3>

              <form className="flex flex-col gap-4 justify-center  w-full mt-5">
                <div className="flex flex-col justify-center gap-2">
                  <Label title="Monthly payment" htmlFor="monthlyPayment" />
                  <Input
                    {...register("monthlyPayment")}
                    placeholder="500"
                    type="tel"
                    className="md:w-[546px] w-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <Label title="Down payment" htmlFor="downPayment" />
                  <Input
                    {...register("downPayment")}
                    placeholder="3000"
                    type="tel"
                    className="md:w-[546px] w-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <Label title="Credit score" htmlFor="creditScore" />
                  <Option
                    className="border-2 rounded-sm md:w-[546px] w-full"
                    optionData={creditScore}
                    {...register("creditScore")}
                    ariaLabelledby="credit"
                  />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <Label title="Term length" htmlFor="loanTerms" />
                  <Option
                    className="border-2 rounded-sm md:w-[546px] w-full"
                    optionData={loneTerm}
                    {...register("loanTerms")}
                    ariaLabelledby="Loan"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
