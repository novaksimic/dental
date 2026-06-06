"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Smile,
  ShieldCheck,
  Sparkles,
  Scan,
  HeartPulse,
  User,
} from "lucide-react";

// ─────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.1,
} as const;

// ─────────────────────────────────────────────────

export default function AboutSection() {
  const t = useTranslations("aboutUs");

  const services = [
    { icon: Smile, name: t("services.oral-diseases") },
    { icon: Sparkles, name: t("services.prosthetics") },
    { icon: ShieldCheck, name: t("services.aesteticDentistry") },
    { icon: Scan, name: t("services.pediatricDentistry") },
    { icon: User, name: t("services.orthodontics") },
    { icon: HeartPulse, name: t("services.surgery") },
  ];

  return (
    <section className="bg-white/70 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
          
          {/* ── IMAGE COLUMN ───────────────────────── */}
          <div className="relative flex w-full flex-col gap-4 sm:gap-6 lg:w-1/2 flex-shrink-0">
            
            {/* Main Image */}
            <div className="mx-auto w-full max-w-3xl">
              <motion.div
                variants={fadeLeft}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                style={{ willChange: "opacity, transform" }}
                className="group relative h-[240px] overflow-hidden rounded-2xl sm:h-[320px] lg:h-[400px]"
              >
                <Image
                  src="/images/webp/about-page.webp"
                  alt={t("title")}
                  fill
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Secondary Images */}
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
              
              <motion.div
                variants={fadeLeft}
                custom={0.12}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                style={{ willChange: "opacity, transform" }}
                className="group relative h-[180px] overflow-hidden rounded-2xl sm:h-[240px] lg:h-[400px]"
              >
                <Image
                  src="/images/webp/dental-operation.webp"
                  alt={t("title")}
                  fill
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                variants={fadeLeft}
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                style={{ willChange: "opacity, transform" }}
                className="group relative h-[180px] overflow-hidden rounded-2xl sm:h-[240px] lg:h-[400px]"
              >
                <Image
                  src="/images/webp/implantologija-dental.webp"
                  alt={t("title")}
                  fill
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
            </div>
          </div>

          {/* ── TEXT COLUMN ───────────────────────── */}
          <div className="flex flex-col space-y-5 lg:w-1/2 max-w-prose">
            
            {/* Title */}
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              style={{ willChange: "opacity, transform" }}
              className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              {t("title")}
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col space-y-4"
            >
              {[t("paragraph1"), t("paragraph2"), t("paragraph3")].map(
                (text, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="text-[15px] leading-relaxed text-slate-700 sm:text-base"
                  >
                    {text}
                  </motion.p>
                )
              )}

              <motion.p
                variants={staggerItem}
                className="text-[15px] font-medium leading-relaxed text-teal-700 sm:text-base"
              >
                {t("paragraph4")}
              </motion.p>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.05,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {services.map((service, i) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-center gap-2 text-sm text-slate-700 sm:text-[15px]"
                  >
                    <Icon
                      size={18}
                      className="flex-shrink-0 text-teal-600"
                    />

                    <span>{service.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="kontakt"
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              style={{ willChange: "opacity, transform" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-fit rounded-xl bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-teal-700 sm:px-8 sm:text-base"
            >
              {t("ctaButton")}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}