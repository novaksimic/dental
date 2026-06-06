"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

export default function InterestingFactsPage() {
  const t = useTranslations("interestingFacts");

  return (
    <div className="bg-gray-50 text-gray-900">
          {/* Breadcrumbs */}
      <SectionWrapper>
        <div className="w-full bg-gray-200/80 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800 mb-4 md:mb-0">
              {t("breadcrumbs.title")}
            </h1>

            <div className="text-slate-600 text-sm md:text-base space-x-2">
              <a href="/" className="hover:text-mint transition">
                {t("breadcrumbs.home")}
              </a>
              <span>/</span>
              <a href="/usluge" className="hover:text-mint transition">
                {t("breadcrumbs.services")}
              </a>
              <span>/</span>
              <span className="font-semibold">
                {t("breadcrumbs.current")}
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className="max-w-6xl mx-auto px-4 py-12">

              <div className="grid md:grid-cols-2 gap-10 items-center mb-14">

                  {/* IMAGE LEFT */}
                  <div className="w-full h-[320px] md:h-[420px] relative rounded-2xl overflow-hidden shadow-md group">
                      <Image
                          src="/images/webp/amalgamska-plomba.webp"
                          alt="Dental treatment"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                  </div>

                  {/* TEXT RIGHT */}
                  <div className="space-y-6">

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {t("paragraph1")}
                      </p>

                      <p className="text-xl font-semibold text-teal-600">
                          {t("paragraph2")}
                      </p>

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {t("paragraph3")}
                      </p>
                  </div>

              </div>

        {/* IMAGE + TEXT SECTION */}
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                {t("title")}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {t("paragraph4")}
              </p>
            </div>

            <div className="w-full h-[300px] relative rounded-xl overflow-hidden shadow group">
              <Image
                src="/images/webp/keramicka-plomba.webp"
                alt="Dental procedure"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* BEFORE / AFTER */}
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* BEFORE */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                {t("comparationTitle")}
              </h3>

              <ul className="space-y-2 list-disc pl-5 text-gray-600">
                <li>{t("item1")}</li>
                <li>{t("item2")}</li>
                <li>{t("item3")}</li>
                <li>{t("item4")}</li>
              </ul>

              <div className="mt-6 h-[200px] relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/webp/postavljanje-plombe.webp"
                  alt="Before treatment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* AFTER */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                {t("comparationTitle2")}
              </h3>

              <ul className="space-y-2 list-disc pl-5 text-gray-600">
                <li>{t("item5")}</li>
                <li>{t("item6")}</li>
                <li>{t("item7")}</li>
                <li>{t("item8")}</li>
              </ul>

              <div className="mt-6 h-[200px] relative rounded-lg overflow-hidden group">
                <Image
                  src="/images/webp/plomba.webp"
                  alt="After treatment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* FINAL TEXT */}
        <SectionWrapper>
          <p className="text-sm sm:text-base leading-relaxed mb-6">
            {t("paragraph5")}
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <p className="text-sm sm:text-base font-medium text-gray-800">
            {t("paragraph6")}
          </p>
        </SectionWrapper>

      </div>
    </div>
  );
}