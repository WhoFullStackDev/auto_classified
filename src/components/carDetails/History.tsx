import { FiCheckCircle } from "react-icons/fi";

const History = () => {
  return (
    <div>
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        History
      </h2>

      <div className="mt-4 flex gap-4 flex-col">
        <div>
          <div className="flex gap-2 items-center">
            <FiCheckCircle size={24} color="#228B22" />
            <h3 className="font-bold text-2xl leading-8 text-text-heading">
              Clean title
            </h3>
          </div>
          <p className="font-medium text-base leading-5 text-text-body pl-8">
            No issues reported.
          </p>
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <FiCheckCircle size={24} color="#228B22" />

            <h3 className="font-bold text-2xl leading-8 text-text-heading">
              0 accidents reported
            </h3>
          </div>
          <p className="font-medium text-base leading-5 text-text-body pl-8 ">
            No accidents or damage reported.
          </p>
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <FiCheckCircle size={24} color="#228B22" />
            <h3 className="font-bold text-2xl leading-8 text-text-heading">
              1 previous owner
            </h3>
          </div>
          <p className="font-medium text-base leading-5 text-text-body pl-8">
            Vehicle has one previous owner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
