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
    title: "Livena nadogradnja",
    description:
      "Izrada metalne nadogradnje za ojačavanje zuba nakon endodontske terapije, koja obezbeđuje stabilnu osnovu za krunu i dugotrajnost rada."
  },
  {
    title: "Metalo-keramička kruna",
    description:
      "Kombinacija čvrstoće metala i estetike keramike, idealna za funkcionalnu i dugotrajnu nadoknadu oštećenih zuba."
  },
  {
    title: "Privremena kruna",
    description:
      "Privremeno rešenje koje štiti zub i desni dok se ne izradi trajna kruna, uz očuvanje estetike i funkcije."
  },
  {
    title: "Bezmetalna kruna",
    description:
      "Estetski vrhunska kruna bez metalne osnove koja pruža prirodan izgled i savršeno se uklapa sa ostatkom zuba."
  },
  {
    title: "Totalna akrilatna proteza",
    description:
      "Kompletna proteza za nadoknadu svih zuba u vilici, izrađena tako da obezbedi funkcionalnost i prirodan izgled osmeha."
  },
  {
    title: "Parcijalna akrilatna proteza",
    description:
      "Delimična proteza koja nadoknađuje više izgubljenih zuba, uz očuvanje postojećih prirodnih zuba."
  },
  {
    title: "Žabica",
    description:
      "Privremena parcijalna proteza koja se koristi kao brzo i praktično rešenje do izrade trajnog protetskog rada."
  },
  {
    title: "Skeletirana Vizil proteza",
    description:
      "Metalna parcijalna proteza visoke stabilnosti i dugotrajnosti, sa boljim prianjanjem i većim komforom za pacijenta."
  },
  {
    title: "Atečmen",
    description:
      "Precizni retencioni element koji omogućava stabilno i estetski diskretno vezivanje proteze za postojeće zube."
  },
  {
    title: "Frezovana kruna",
    description:
      "Visokoprecizna kruna izrađena CAD/CAM tehnologijom, koja pruža maksimalno prijanjanje i dugotrajnost."
  },
  {
    title: "Podlaganje proteze",
    description:
      "Korekcija unutrašnje površine proteze radi boljeg prijanjanja i povećanog komfora nakon promena u vilici."
  },
  {
    title: "Reparatura proteze",
    description:
      "Popravka oštećene ili polomljene proteze kako bi se ponovo uspostavila njena funkcionalnost."
  },
  {
    title: "Dodavanje zuba u protezu",
    description:
      "Ugradnja dodatnog zuba u postojeću protezu nakon gubitka zuba, bez potrebe za izradom nove proteze."
  },
  {
    title: "Skidanje stare krune ili mosta",
    description:
      "Bezbedno uklanjanje dotrajalih protetskih radova uz očuvanje strukture zuba za dalju terapiju."
  },
  {
    title: "Biodental plast proteza",
    description:
      "Savremena fleksibilna proteza izrađena od biokompatibilnog materijala, izuzetno udobna i estetski diskretna."
  }
];

export default function ProestethicsPage() {
  const t = useTranslations("prosthetics");
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
          images={["/images/webp/protetika.webp", "/images/webp/protetika-dental.webp"]}
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
