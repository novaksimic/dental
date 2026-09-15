"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";


export interface Doctor {
  id: string;
  image: string;

  doctor: {
    name: string;
    title: string;
  };

  intro: {
    title: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
  };

  hero: {
    description: string;
    cta: string;
  };

  aboutDoctor: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };

  cta: {
    title: string;
    description: string;
    button: string;
  };

  rating: string;

  hobbies: {
    images: string[];
  };
}

export default function DoctorPage() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const t = useTranslations("doctorPage");
  const params = useParams();
  const slug = params.slug;

  const doctors = t.raw("doctors") as Doctor[];
  const doctor = doctors.find((d: Doctor) => d.id === slug);

  if (!doctor) {
    return <div className="p-20 text-center">Doctor not found</div>;
  }

  const rating = Number(doctor.rating);

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* INTRO */}
      <div className="w-full bg-gray-200/80 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">
            {doctor.intro.title}
          </h1>

          <div className="text-slate-700 text-sm md:text-base">
            <Link href="/" className="hover:text-green-700">
              {doctor.intro.breadcrumbHome}
            </Link>{" "}
            /{" "}
            <span className="font-semibold">
              {doctor.intro.breadcrumbCurrent}
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16 relative">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-mint/20 rounded-full blur-3xl animate-pulse"/>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl animate-pulse"/>
        </div>

        {/* HERO */}
        <div className="grid md:grid-cols-2 items-center gap-16 mb-24" ref={heroRef}>

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-mint mb-6">
              {doctor.doctor.name}
            </h1>

            <p className="text-xl text-slate-600 mb-6">
              {doctor.doctor.title}
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-justify">
              {doctor.hero.description}
            </p>

            {/* ⭐ Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < rating ? "text-yellow-400" : "text-slate-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-500">{rating}.0</span>
            </div>

            {/* REVIEWS SLIDER */}
            {/* <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000 }}
              navigation
            >
              {reviews.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[300px] md:h-[400px]">
                    <img
                      src={img}
                      alt="review"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div style={{ y: yParallax }}>
            <img
              src={doctor.image || "/images/placeholder.jpg"}
              alt={doctor.doctor.name}
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

        </div>

        {/* ABOUT */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold text-mint mb-8">
            {doctor.aboutDoctor.title}
          </h2>
          <p className="text-slate-600 mb-4 text-justify">{doctor.aboutDoctor.paragraph1}</p>
          <p className="text-slate-600 mb-4 text-justify">{doctor.aboutDoctor.paragraph2}</p>
          <p className="text-slate-600 mb-4 text-justify">{doctor.aboutDoctor.paragraph3}</p>
        </div>

        {/* HOBBIES / PRIVATE LIFE */}
        {doctor.hobbies?.images?.length > 0 && (
          <div className="max-w-5xl mx-auto mb-24 text-center">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctor.hobbies.images.map((img: string, index: number) => (
                <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={img}
                    alt={`hobby-${index}`}
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-mint text-slate-600 rounded-3xl py-16 px-10 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {doctor.cta.title}
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            {doctor.cta.description}
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-xl hover:bg-teal-700"
          >
            {doctor.cta.button}
          </a>
        </div>

      </main>
    </div>
  );
}