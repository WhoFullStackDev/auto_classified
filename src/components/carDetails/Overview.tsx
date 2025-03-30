const Overview = () => {
  return (
    <div>
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Overview
      </h2>
      <div className="mt-4 flex gap-17">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Brand:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Chevrolet
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Model:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Traverse
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Year:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              2009
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Trim:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              LS FWD
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Body Type:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              SUV / Crossover
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Condition:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              Used
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">VIN:</p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              1GNER13D89S167070
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Stock number:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              S167070
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
