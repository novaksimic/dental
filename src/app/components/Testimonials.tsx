"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="relative w-full py-16 sm:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/webp/testimonials.webp"
          alt="Testimonials background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">

        {/* TITLE */}
        <h2 className="mb-10 text-2xl font-bold sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // ✅ mobile-first UX: bez strelica (touch swipe je primaran)
          navigation={false}
          className="!pb-8"
        >

          {[1, 2, 3].map((i) => {
            const rating = Number(t(`testimonial${i}.rating`)) || 5;

            return (
              <SwiperSlide key={i}>
                <div className="px-2 sm:px-6">

                  {/* TEXT */}
                  <p className="mb-6 text-base italic leading-relaxed sm:text-xl md:text-2xl">
                    “{t(`testimonial${i}.text`)}”
                  </p>

                  {/* STARS */}
                  <div className="mb-4 flex justify-center gap-1">
                    {Array.from({ length: rating }).map((_, idx) => (
                      <Star key={idx} />
                    ))}
                  </div>

                  {/* NAME */}
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {t(`testimonial${i}.name`)}
                  </h3>

                  {/* ROLE */}
                  <p className="text-sm opacity-80 sm:text-base">
                    {t(`testimonial${i}.role`)}
                  </p>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

/* STAR ICON */
function Star() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-yellow-400 sm:h-5 sm:w-5"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  );
}