"use client";
import React from "react";
import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

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

export default function ContactPage() {
  const t = useTranslations("contact");
  
  const clinic = {
    phone: t("clinic.phone"),
    email: t("clinic.email"),
    address: t("clinic.address"),
  };

  return (
    <div className="bg-gray-50 text-slate-900 relative">
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
              / <span className="font-semibold">{t("breadcrumbs.contact")}</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <main className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center mb-10">
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-lg sm:text-xl">
              {t("heroText")}
            </p>
          </section>

          <div className="flex justify-between items-center text-slate-800 mb-10 flex-wrap gap-6">
            <div className="flex items-center gap-3 text-lg sm:text-xl hover:text-green-600 transition">
              <Phone className="w-8 h-8" />
              <a href={`tel:${clinic.phone.replace(/\s+/g, "")}`}>
                {clinic.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-lg sm:text-xl hover:text-green-600 transition">
              <MapPin className="w-8 h-8" />
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t("clinic.address"))}`} target="_blank"><span>{clinic.address}</span></a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
            <div className="w-full rounded-3xl overflow-hidden shadow-md h-[420px] lg:h-[470px]">
              <iframe
                title={t("map.title")}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  t("clinic.address")
                )}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label={t("map.aria")}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}