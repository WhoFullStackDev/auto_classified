import TestimonialCarousel from "../ui/carousels/TestimonialCarousel";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

const Testimonial = () => {
  return (
    <Container>
      <div className="mt-[120px] flex flex-col justify-center items-center">
        <Heading text="Feature Dealers" />
      </div>
      <TestimonialCarousel />
    </Container>
  );
};

export default Testimonial;
