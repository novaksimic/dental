"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AboutUsSection from "../components/AboutUs";
import Team from "../components/Team";
import Link from "next/link";

// Animation wrapper
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

export default function AboutPage() {
  const t = useTranslations("team");

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Intro Section */}
      <SectionWrapper>
        <div className="w-full bg-gray-200/80 py-5 px-6 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">
              {t("intro.title")}
            </h1>

            <div className="text-slate-700 text-sm md:text-base">
              <Link href="/" className="hover:text-green-700">
                {t("intro.breadcrumbHome")}
              </Link>{" "}
              /{" "}
              <span className="font-semibold">
                {t("intro.breadcrumbCurrent")}
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <section>
        <AboutUsSection />
      </section>
      {/* Team Section */}
      <Team />
    </div>
  );
}

