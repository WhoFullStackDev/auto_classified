import Card from "../ui/Card";
import Button from "../ui/Button";

const Recommendation = () => {
  return (
    <div className="mt-14">
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Recommended For You
      </h2>
      <div className="flex items-center gap-5 mt-5">
        <Card />
        <Card />
      </div>
      <div className="flex justify-center items-center">
        <Button
          type="button"
          ariaLabel="more"
          label="View More"
          className="w-[300px] mt-10 "
        />
      </div>
    </div>
  );
};

export default Recommendation;
