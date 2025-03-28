import React from "react";
import { AiFillStar } from "react-icons/ai";

const Safety = () => {
  return (
    <div>
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Safety
      </h2>

      <div className="flex flex-col gap-3 mt-4">
        <div className="flex items-center gap-1">
          <p className="font-medium text-lg leading-6 text-text-body">
            NHTSA rollover rating:
          </p>
          <div className="gap-1 flex justify-center items-center">
            <AiFillStar size={24} color="#FFA500" />
            <AiFillStar size={24} color="#FFA500" />
            <AiFillStar size={24} color="#FFA500" />
            <AiFillStar size={24} color="#FFA500" />
            <AiFillStar size={24} color="#999999" />
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-20">
        <div className="flex flex-col gap-3">
          <p className="font-medium text-base leading-5 text-text-body">
            ABS Brakes
          </p>
          <p className="font-medium text-base leading-5 text-text-body">
            Curtain Airbags
          </p>
          <p className="font-medium text-base leading-5 text-text-body">
            Driver Airbag
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-medium text-base leading-5 text-text-body">
            Front Side Airbags
          </p>
          <p className="font-medium text-base leading-5 text-text-body">
            Passenger
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
