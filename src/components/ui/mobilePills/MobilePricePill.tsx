"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { IoPricetagOutline } from "react-icons/io5";

const CashFilterForm = dynamic(
  () => import("@/components/forms/CashFilterForm"),
  { ssr: false }
);
const MobileFilterPill = dynamic(() => import("../MobileFilterPill"), {
  ssr: false,
});

const FinanceFilter = dynamic(() => import("@/components/forms/FinanceFilter"));

const MobilePricePill = () => {
  const [selectFinanceButton, setSelectFinanceButton] = useState<
    "cash" | "finance"
  >("cash");
  return (
    <MobileFilterPill Icon={IoPricetagOutline} title="price">
      <div className="flex justify-center  bg-[#D9D9D9] w-full items-center shrink-0 h-[40px] rounded-[50px] overflow-hidden ">
        <button
          className={`w-1/2 ${
            selectFinanceButton === "cash"
              ? "bg-success text-white"
              : "bg-[#D9D9D9]"
          }  h-full`}
          onClick={() => setSelectFinanceButton("cash")}
        >
          Cash
        </button>
        <button
          className={`w-1/2 ${
            selectFinanceButton === "finance"
              ? "bg-success text-white"
              : "bg-[#D9D9D9]"
          } h-full`}
          onClick={() => setSelectFinanceButton("finance")}
        >
          Finance
        </button>
      </div>
      {selectFinanceButton === "cash" ? <CashFilterForm /> : <FinanceFilter />}
    </MobileFilterPill>
  );
};

export default MobilePricePill;
