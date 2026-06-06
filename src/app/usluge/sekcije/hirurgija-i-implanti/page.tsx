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
    title: "Ekstrakcija zuba",
    description:
      "Bezbedno i pažljivo vađenje zuba uz minimalnu nelagodnost, uz očuvanje zdravih okolnih struktura."
  },
  {
    title: "Ekstrakcija zaostalih korenova i zuba",
    description:
      "Uklanjanje preostalih korenova ili delimično očuvanih zuba radi sprečavanja infekcija i oštećenja okolnog tkiva."
  },
  {
    title: "Ekstrakcija impaktiranih umnjaka/očnjaka",
    description:
      "Hirurško vađenje impaktiranih zuba koji nisu pravilno iznikli, uz kontrolisanu i bezbednu proceduru."
  },
  {
    title: "Teška ekstrakcija impaktiranih zuba",
    description:
      "Komplikovana hirurška ekstrakcija zuba koji su potpuno ili delimično zarobljeni u vilici, uz minimalnu nelagodnost."
  },
  {
    title: "Liberalizacija očnjaka sa lepljenjem bravice",
    description:
      "Priprema i oslobađanje očnjaka radi ortodontskog tretmana, uz postavljanje bravice za kontrolisano pomeranje zuba."
  },
  {
    title: "Režanj operacija",
    description:
      "Hirurška intervencija na desnima radi pristupa zubu ili kosti, uz pažljivu kontrolu krvarenja i optimalno zarastanje."
  },
  {
    title: "Apikotomija",
    description:
      "Precizna hirurška intervencija uklanjanja vrha korena zuba radi očuvanja preostalog zuba i sprečavanja infekcije."
  },
  {
    title: "Nivelacija grebena",
    description:
      "Prilagođavanje vilice radi pripreme za protetski rad ili implant, uz ravnomerno i estetski oblikovan greben."
  },
  {
    title: "Komplikovana ekstrakcija umnjaka",
    description:
      "Hirurško vađenje problematičnih umnjaka koji mogu biti delimično impaktirani ili nepravilno položeni."
  },
  {
    title: "Ekstrakcija zuba koji komunicira sa nervom ili sinusom",
    description:
      "Posebno pažljiva hirurška procedura za zube u neposrednoj blizini nerva ili sinusa, uz minimalni rizik od komplikacija."
  },
  {
    title: "BIO OSS i kolagena membrana",
    description:
      "Upotreba biomaterijala za nadoknadu kosti i kolagenih membrana za brže i kvalitetnije zarastanje posle hirurških intervencija."
  },
  {
    title: "Frenektomija",
    description:
      "Hirurško uklanjanje ili skraćivanje usnih ili jezičnih frenula radi olakšavanja oralne funkcije i prevencije problema sa zubima."
  },
  {
    title: "Ekstirpacija ciste",
    description:
      "Bezbedno uklanjanje cističnih formacija u vilici radi očuvanja okolne kosti i zuba."
  },
  {
    title: "Gingivektomija po zubu",
    description:
      "Precizno uklanjanje ili oblikovanje gingive radi poboljšanja estetike i oralnog zdravlja pojedinačnog zuba."
  },
  {
    title: "Implant",
    description:
      "Postavljanje dentalnog implanta kao trajnog rešenja za nadoknadu izgubljenog zuba, uz optimalnu funkciju i estetiku osmeha."
  }
];

export default function SurgeryPage() {
  const t = useTranslations("surgery");
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
          images={["/images/webp/protetika-bg.webp", "/images/hirurgija-i-implanti.jpg"]}
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
