import Heading from "../ui/Heading";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

const WhyWe = () => {
  return (
    <Container>
      <div className="h-full flex justify-center items-center flex-col gap-5">
        <Heading text="Why We?" className="mt-[120px]" />
        <div className="w-[1240px] h-[410px] rounded-xl border-2 border-white bg-[linear-gradient(96deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 100%)] mt-10 flex justify-center items-center gap-[120px] backdrop-blur-xl">
          <div className="w-[250px] flex flex-col items-center gap-5 ">
            <Image
              src="/images/transparent-pricing.svg"
              alt="transparent-pricing "
              width={196}
              height={130}
              loading="lazy"
            />
            <h4 className="text-text-heading text-center text-2.5xl font-bold leading-9 text-nowrap">
              Transparent pricing
            </h4>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              No surprises here. See how much {`you'll`} pay on cars you like.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <Image
              src="/images/minutes-not-hours.svg"
              alt="minutes-not-hours"
              width={196}
              height={130}
              loading="lazy"
            />
            <h4 className="text-text-heading text-center text-2.5xl font-bold leading-9">
              Minutes, not hours
            </h4>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              Time saving tools to help you find the right car in a snap.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <Image
              src="/images/shop-your-way.svg"
              alt="shop-your-way"
              width={196}
              height={130}
              loading="lazy"
            />
            <h4 className="text-text-heading text-center text-2.5xl font-bold leading-9">
              Shop your way
            </h4>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              Your own pace, your own space. Shop online where and when {`it's`}
              convenient for you.
            </p>
          </div>
        </div>
        <Button
          ariaLabel="Why-Login"
          type="button"
          label="Login"
          className="w-[320px] h-[50px] rounded-xl mt-10"
        />
      </div>
    </Container>
  );
};

export default WhyWe;
