"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function truncate(text: string, max = 110) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

const SERVICE_COUNT = 7;
const LAST_SERVICE_INDEX = SERVICE_COUNT;

export default function ServicesSection() {
  const t = useTranslations("servicesSection");

  const services = useMemo(
    () =>
      Array.from({ length: SERVICE_COUNT }, (_, i) => {
        const key = `service${i + 1}`;
        return {
          key,
          title: t(`${key}.title`),
          icon: t(`${key}.icon`),
          description: t(`${key}.description`),
          link: t(`${key}.link`),
          isHighlight: i + 1 === LAST_SERVICE_INDEX,
        };
      }),
    [t]
  );

  return (
    <section className="relative isolate overflow-hidden py-24 pb-32">

  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/webp/services-bg.webp"
      alt={t("cardsBgAlt")}
      fill
      className="object-cover scale-105"
    />

    {/* premium gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/10" />
  </div>

  {/* Content */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  >
        <div
          className={`grid gap-6 ${services.length === 1
              ? "grid-cols-1 justify-items-center"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const isOddLastRow =
              services.length % 3 === 1; // important for lg:grid-cols-3

            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`
        flex flex-col rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md
        transition-all duration-300
        ${service.isHighlight ? "bg-yellow-400/95" : "bg-white/95"}

        ${isLast && isOddLastRow ? "lg:col-start-2" : ""}
      `}
              >
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="h-14 w-14 sm:h-16 sm:w-16"
                />
              </div>

              <h3 className="mb-3 text-center text-lg font-semibold sm:text-xl">
                {service.title}
              </h3>

              <p className="mb-6 text-center text-sm sm:text-base text-gray-600">
                {truncate(service.description)}
              </p>

              <Link
                href={service.link}
                className="mt-auto text-center font-semibold text-green-700 hover:text-blue-600 transition"
              >
                {t("more")}
              </Link>
            </motion.div>
        )})}
        </div>
  </motion.div>
</section>
  );
}