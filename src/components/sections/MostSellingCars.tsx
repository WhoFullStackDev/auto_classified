import { FiTrendingUp } from "react-icons/fi";
import Container from "../ui/Container";
import MostSellingCarsCarousel from "../ui/carousels/MostSellingCarsCarousel";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const MostSellingCars = () => {
  return (
    <Container>
      <div className="flex justify-center items-center pt-[120px] gap-4">
        <Heading text="Top-Selling Cars" />
        <FiTrendingUp className="w-8 h-8 aspect-square text-success" />
      </div>
      <MostSellingCarsCarousel />
      <div className="flex justify-center items-center mt-10 ">
        <Button
          type="button"
          className="w-[200px] h-[50px] rounded-xl  font-bold text-base leading-9 text-center "
          label="Find Best Deals "
        />
      </div>
    </Container>
  );
};

export default MostSellingCars;
