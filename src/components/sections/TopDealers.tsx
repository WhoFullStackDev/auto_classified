import Container from "../ui/Container";
import Heading from "../ui/Heading";
import DealerCarousel from "../ui/carousels/DealerCarousel";

const TopDealers = () => {
  return (
    <Container>
      <div className="mt-[120px] flex flex-col justify-center items-center">
        <Heading text="Feature Dealers" />
        <DealerCarousel />
      </div>
    </Container>
  );
};

export default TopDealers;
