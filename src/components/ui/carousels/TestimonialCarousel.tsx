"use client";
import "swiper/css";
import "swiper/css/a11y";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import Image from "next/image";
import { truncateText } from "@/lib/truncateText";

const TestimonialCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        a11y={{
          enabled: true,
          slideLabelMessage: "Slide {{index}}",
        }}
        modules={[A11y, Keyboard]}
        keyboard={{ enabled: true }}
        className="h-[300px]  mt-10"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide
            className="w-[400px]! h-[300px]! relative rounded-lg overflow-hidden cursor-pointer shadow-soft-lg"
            key={num}
            tabIndex={0}
            aria-label={`Slide ${num}`}
          >
            <div className="bg-surface_primary h-full p-5 flex flex-col justify-between">
              <div className="flex  items-center gap-1">
                <Image
                  src="/images/Comma 1.svg"
                  alt="Comma"
                  width={14}
                  height={30}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
                <Image
                  src="/images/Comma 1.svg"
                  alt="Comma"
                  width={14}
                  height={30}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex justify-center items-center ">
                <p className="text-text-body text-base font-normal leading-6  w-[300px] h-full overflow-hidden">
                  {truncateText(
                    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ex
              saepe perspiciatis recusandae assumenda, corporis accusamus ad
              quos architecto! Beatae architecto porro mollitia nemo enim,
              laborum tempora. Quas illo fugit commodi quidem esse voluptatum
              dicta ut nemo nisi eius incidunt, voluptatem, itaque blanditiis
              adipisci ea sunt. Doloremque ipsa iure reiciendis voluptas
              recusandae eligendi? Similique maiores alias dolorum dignissimos,
              magnam esse facilis atque mollitia nobis soluta delectus porro
              voluptate est corporis eligendi enim fugiat ad dolore dolores
              deleniti saepe, reprehenderit non voluptates illum? Quam, harum
              magnam. Omnis non deserunt repellat explicabo veritatis error,
              consequuntur, a animi dignissimos ullam excepturi fugiat similique
              maiores sit iusto mollitia! Incidunt cupiditate vel non provident
              praesentium. Quas neque quae officiis alias ut? Nobis iure
              molestias porro exercitationem ex, doloremque aut, voluptate iste
              magnam praesentium voluptas obcaecati, reiciendis ipsam nam
              nostrum et deleniti quos odit. Repellendus dolorum dolores optio!
              Minus debitis, ipsum consequuntur animi assumenda itaque vero
              eveniet eaque ipsam, molestiae esse quam libero magni rem
              laboriosam odit ut? Aut, voluptas cupiditate iusto cumque dicta
              hic impedit possimus autem perspiciatis? Placeat voluptates nulla
              odio aspernatur ratione sapiente animi quos laboriosam commodi
              dolore? Mollitia illo cumque velit? A sequi earum dicta dolores
              repellat voluptas harum, deleniti, quas hic suscipit incidunt
              repudiandae laudantium reiciendis laborum ut corrupti tenetur,
              minus odio neque maxime voluptatem eos excepturi. Veniam
              distinctio minus doloribus voluptatum, sunt perspiciatis, impedit
              blanditiis architecto molestias, sint placeat magnam saepe.
              Accusamus rem officiis iure quaerat. Qui quidem natus iure minima
              quo, culpa suscipit accusamus quisquam odio dignissimos
              praesentium, obcaecati reiciendis quis eius nam facilis doloremque
              in corrupti corporis fugit. Odit eum praesentium modi maxime
              omnis, itaque voluptates dignissimos, veritatis, ipsum esse
              officia minus. Accusamus, nostrum animi unde voluptatum
              exercitationem quos laudantium, ad facere eos at fugiat iste quam
              culpa, pariatur qui sequi? Cumque quas dignissimos aliquid libero
              soluta nobis!`,
                    240
                  )}
                </p>
              </div>
              <div className="flex items-center justify-end gap-1">
                <Image
                  src="/images/Comma 4.svg"
                  alt="Comma"
                  width={14}
                  height={30}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
                <Image
                  src="/images/Comma 4.svg"
                  alt="Comma"
                  width={14}
                  height={30}
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/Person1.avif"
                  alt="avif"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="rounded-full"
                />
                <p className="text-text-body text-base font-normal leading-6 overflow-hidden">
                  Jani
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
