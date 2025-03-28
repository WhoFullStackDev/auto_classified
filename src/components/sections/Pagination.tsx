import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Option, { dataStructure } from "../ui/Option";

const ResultPerPageOPtion: dataStructure[] = [
  { label: "50", value: 50 },
  { label: "30", value: 30 },
  {
    label: "20",
    value: 20,
  },
];

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-12 mt-7">
      <p className="text-base text-text-body font-normal leading-5">
        1 – 30 of 719,709
      </p>
      <div className="flex items-center gap-4">
        <button
          className="flex justify-center items-center w-12 h-12 rounded-full bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer transition-colors duration-300 hover:bg-text-hover focus:bg-button-hover focus:ring focus:ring-text-hover focus:ring-opacity-50 hover:text-white focus:text-white"
          aria-label="Previous Page"
        >
          <FiChevronLeft size={24} className="shrink-0 text-inherit" />
          <span className="sr-only">Previous Page</span>
        </button>

        {[1, 2, 3, 4, 5, "...", 25].map((page, index) => (
          <button
            key={index}
            className="flex justify-center items-center w-12 h-12 rounded-full bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer transition-colors duration-300 hover:bg-text-hover focus:bg-button-hover focus:ring focus:ring-text-hover focus:ring-opacity-50 hover:text-white  focus:text-white"
            aria-label={`Go to page ${page}`}
          >
            <h2 className="text-xl font-bold text-inherit leading-7">{page}</h2>
          </button>
        ))}

        <button
          className="flex justify-center items-center w-12 h-12 rounded-full bg-surface_primary shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] cursor-pointer transition-colors duration-300 hover:bg-text-hover focus:bg-button-hover focus:ring focus:ring-text-hover focus:ring-opacity-50 hover:text-white  focus:text-white"
          aria-label="Next Page"
        >
          <FiChevronRight size={24} className="shrink-0 text-inherit" />
          <span className="sr-only">Next Page</span>
        </button>
      </div>
      <div className="flex  items-center gap-1">
        <p className="text-base text-text-body font-normal leading-5">
          Result Per Page
        </p>
        <Option
          ariaLabelledby="per page result"
          name="result"
          className="bg-surface_primary border-2 rounded-md w-[100px]"
          optionData={ResultPerPageOPtion}
        />
      </div>
    </div>
  );
};

export default Pagination;
