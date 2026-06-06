"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ServicesAccordion from "../../service-accordion";

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

type ServiceItem = {
  title: string;
  description: string;
};

const services = [
  {
    title: "Izbeljivanje zuba u ordinaciji",
    description:
      "Brzo i efikasno profesionalno izbeljivanje zuba u ordinaciji uz zaštitu desni i minimalnu osetljivost, za blistav i prirodan osmeh."
  },
  {
    title: "Kućno izbeljivanje zuba",
    description:
      "Sigurna i udobna metoda izbeljivanja kod kuće uz prilagođene šine i gelove, za postepeno i kontrolisano posvetljivanje zuba."
  },
  {
    title: "Cirkon - zubni nakit",
    description:
      "Elegantna i diskretna dekoracija zuba pomoću cirkon kristala, koja dodaje sofisticirani sjaj vašem osmehu bez oštećenja zuba."
  },
  {
    title: "Hijaluronski filer 1 ml",
    description:
      "Bezbedna i precizna aplikacija hijaluronskog filera za oblikovanje usana, popunjavanje bora ili poboljšanje kontura lica uz prirodan izgled."
  },
  {
    title: "Botox - 3 regije",
    description:
      "Estetski tretman botoksom za opuštanje mimičnih bora u predelu čela, između obrva i oko očiju, za svež i mladalački izgled."
  }
];

export default function EsteticsPage() {
  const t = useTranslations("estetics");
  const services = t.raw("services") as ServiceItem[]

  return (
    <div className="bg-slate-50 text-slate-900">
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

      <section className="max-w-7xl mx-auto px-6 py-16">
        <ServicesAccordion
          title={t("hero.title")}
          services={services}
          images={["/images/webp/opsta-stomatologija-dental.webp"]}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-color-primary mb-4">
            {t("cta.title")}
          </h3>

          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            {t("cta.description")}
          </p>

          <a
            href="kontakt"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-teal-700 transition-colors"
          >
            {t("cta.button")}
          </a>
        </motion.div>
      </section>
    </div>
  );
}