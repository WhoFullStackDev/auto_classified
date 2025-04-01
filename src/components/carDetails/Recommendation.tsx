import Button from "../ui/Button";
import RecommendationCarousal from "../ui/carousels/RecommendationCarousal";

const Recommendation = () => {
  return (
    <div className="mt-14 w-full">
      <h2 className="text-text-heading text-2.5xl font-bold leading-9 ">
        Recommended For You
      </h2>
      <div className="flex items-center gap-5 mt-5">
        <RecommendationCarousal />
      </div>
      <div className="flex justify-center items-center">
        <Button
          type="button"
          ariaLabel="more"
          label="View More"
          className="w-[50%] mt-10 "
        />
      </div>
    </div>
  );
};

export default Recommendation;
