const Measurements = () => {
  return (
    <div>
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Measurements
      </h2>
      <div className="mt-4 flex gap-17">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Doors:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              4 doors
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Front legroom:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              36 in
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Back legroom:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              36 in
            </p>
          </div>
          <div className="flex items-center gap-1">
            <p className="font-medium text-lg leading-6 text-text-body">
              Cargo volume:
            </p>
            <p className="font-medium text-base leading-5 text-[#444444]">
              24 cu ft
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measurements;
