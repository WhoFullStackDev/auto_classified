"use cache";
import Heading from "../ui/Heading";
import Container from "../ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

const WhyWe = async () => {
  return (
    <Container>
      <div className="h-full flex justify-center items-center flex-col gap-5">
        <Heading text="Why We?" className="mt-[120px] text-center" />
        <div className="xl:w-[1240px] md:h-[410px] h-[700px] w-full rounded-xl border-2 border-white bg-[linear-gradient(96deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 100%)] mt-10 flex max-md:flex-col  items-center xl:justify-between justify-between backdrop-blur-xl p-4">
          <div className="w-[250px] flex flex-col items-center gap-5 ">
            <div className="xl:[w-196px] xl:h-[130px] w-[100px] h-[70px] max-xl:aspect-[10/7] relative">
              <Image
                src="/images/transparent-pricing.svg"
                alt="transparent-pricing "
                fill
                quality={100}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>

            <h2 className="text-text-heading text-center xl:text-2.5xl text-2xl font-bold xl:leading-9 leading-8 text-nowrap">
              Transparent pricing
            </h2>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              No surprises here. See how much {`you'll`} pay on cars you like.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <div className="xl:[w-196px] xl:h-[130px] w-[100px] h-[70px] max-xl:aspect-[10/7] relative">
              <Image
                src="/images/minutes-not-hours.svg"
                alt="minutes-not-hours"
                fill
                quality={100}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
            <h2 className="text-text-heading text-center font-bold xl:leading-9 leading-8 xl:text-2.5xl text-2xl">
              Minutes, not hours
            </h2>
            <p className="text-text-body text-base font-normal leading-6 self-stretch text-center">
              Time saving tools to help you find the right car in a snap.
            </p>
          </div>
          <div className="w-[250px] flex flex-col items-center gap-5">
            <div className="xl:[w-196px] xl:h-[130px] w-[100px] h-[70px] max-xl:aspect-[10/7] relative ">
              <Image
                src="/images/shop-your-way.svg"
                alt="shop-your-way"
                fill
                quality={100}
                loading="lazy"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </div>
            <h2 className="text-text-heading text-center font-bold xl:leading-9 leading-8 xl:text-2.5xl text-2xl">
              Shop your way
            </h2>
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
