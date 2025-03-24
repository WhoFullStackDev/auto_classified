import TestimonialCarousel from "../ui/carousels/TestimonialCarousel";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

const Testimonial = () => {
  return (
    <Container>
      <div className="mt-[120px] flex flex-col justify-center items-center">
        <Heading text="Feature Dealers" />
        <TestimonialCarousel />
      </div>
    </Container>
  );
};

export default Testimonial;
