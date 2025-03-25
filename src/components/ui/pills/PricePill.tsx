"use client";

import { useState } from "react";
import FilterPill from "../FilterPill";
import { IoPricetagOutline } from "react-icons/io5";
import CashFilterForm from "../../forms/CashFilterForm";
import FinanceFilter from "../../forms/FinanceFilter";

const PricePill = () => {
  const [selectFinanceButton, setSelectFinanceButton] = useState<
    "cash" | "finance"
  >("cash");

  return (
    <FilterPill title="price" Icon={IoPricetagOutline}>
      <div className="flex justify-center bg-[#D9D9D9] w-[300px] items-center shrink-0 h-[40px] rounded-[50px] overflow-hidden ">
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
    </FilterPill>
  );
};

export default PricePill;
