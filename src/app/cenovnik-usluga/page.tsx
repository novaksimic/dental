"use client";
import React from "react";
import PriceList from "../components/PriceList";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

// Wrapper za animirane sekcije
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

type CenovnikProps = {
  locale: "sr" | "en" | "ru";
  rates: {
    EUR: number;
    RUB: number;
  };
};


export default function PricingPage({ locale, rates }: CenovnikProps) {
  const t = useTranslations("pricing");

  return (
    <div className="flex flex-col bg-white text-slate-900">
      {/* Intro section with breadcrumbs */}
      <SectionWrapper>
        <div className="w-full bg-gray-200/80 py-5 px-6 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">
              {t("title")}
            </h1>

            <div className="text-slate-700 text-sm md:text-base">
              <Link href="/" className="hover:text-green-700">
                {t("breadcrumbs.home")}
              </Link>{" "}
              /{" "}
              <span className="font-semibold">
                {t("breadcrumbs.current")}
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <PriceList />
    </div>
  );
}
