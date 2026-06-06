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
    title: "Splint-folija za bruksizam",
    description:
      "Specijalni folija splint koji štiti zube od habanja uzrokovanog škripanjem i stiskom zuba, smanjuje bol i napetost vilice."
  },
  {
    title: "Myobrace - mobilni aparat",
    description:
      "Neinvazivni mobilni aparat za decu koji pomaže u korekciji nepravilnog položaja vilice i disanja, uz pravilno formiranje zuba i vilice."
  },
  {
    title: "Invisalign - folija za ispravljanje zuba",
    description:
      "Estetski providni aligneri za postepeno pomeranje zuba bez fiksnih aparata, sa maksimalnom udobnošću i diskretnim tretmanom."
  },
  {
    title: "Fiksni ortodonski aparat",
    description:
      "Klasični fiksni aparat koji omogućava precizno ispravljanje zuba i vilice, sa optimalnim rezultatima za pravilan osmeh."
  },
  {
    title: "Ortodonska analiza",
    description:
      "Detaljna analiza zuba, vilice i zagrižaja uz savremenu dijagnostiku radi planiranja efikasnog ortodontskog tretmana."
  },
  {
    title: "Fiksni ortodonski aparat Damon",
    description:
      "Napredni Damon sistem fiksnih aparata sa niskim trenjem za brže i udobnije pomeranje zuba, uz minimalnu nelagodnost."
  }
];

export default function OrthodonticsPage() {
  const t = useTranslations("orthodontics");
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
          images={["/images/webp/ortodoncija-bg.webp"]}
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
            href="/kontakt"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-teal-700 transition-colors"
          >
            {t("cta.button")}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
