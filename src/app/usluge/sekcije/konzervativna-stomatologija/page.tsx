// "use client";

// import Footer from "@/app/components/Footer";
// import Header from "@/app/components/Header";
// import TopBar from "@/app/components/TopBar";
// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// // Wrapper za animirane sekcije
// const SectionWrapper = ({ children }) => (
//   <motion.section
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, amount: 0.3 }}
//     transition={{ duration: 0.8 }}
//   >
//     {children}
//   </motion.section>
// );

// export default function OpstaStomatologijaSekcija() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">

//       <TopBar />
//       {/* Header */}
//       <Header />

//       {/* Intro sekcija sa breadcrumbs */}
//       <SectionWrapper>
//         <div className="w-full bg-gray-200/80 py-5 px-6 relative">
//           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//             <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">O nama</h1>
//             <div className="text-slate-700 text-sm md:text-base">
//               <a href="/" className="hover:text-green-700">Početna</a> / 
//               <a href="/usluge" className="hover:text-green-700">Naše usluge</a> / 
//               <span className="font-semibold">Opšta stomatologija</span> 
//             </div>
//           </div>
//         </div>
//       </SectionWrapper>

//         <section className="max-w-7xl mx-auto px-6 py-16">
//       {/* Naslov */}
//       <div className="text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-4xl md:text-5xl font-bold text-color-primary mb-4"
//         >
//           Opšta stomatologija
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="max-w-2xl mx-auto text-lg md:text-l text-gray-700 leading-relaxed px-4"
//         >
//           Naša ordinacija pruža kompletne usluge iz oblasti opšte stomatologije —
//           od rutinskih pregleda i popravke zuba do napredne dijagnostike i
//           prevencije. Brinemo o zdravlju vaših zuba sa pažnjom, iskustvom i
//           najnovijim metodama moderne stomatologije.
//         </motion.p>
//       </div>

//       {/* Sekcija sa tekstom i slikom */}
//         <div className="grid md:grid-cols-2 items-center py-8 md:py-16 gap-12">
//             {/* Slika levo */}
//             <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="rounded-2xl overflow-hidden shadow-lg"
//             >
//             <img
//                 src="/images/webp/opsta-stomatologija.webp"
//                 alt="Opšta stomatologija"
//                 width={600}
//                 height={400}
//                 className="w-full h-auto object-cover"
//             />
//             </motion.div>

//             {/* Tekst desno */}
//             <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-col justify-center"
//             >
//             <h2 className="text-2xl font-semibold mb-4 text-color-primary">
//                 Zdrav osmeh počinje od osnovne nege
//             </h2>
//             <p className="text-gray-700 mb-4 leading-relaxed">
//                 Opšta stomatologija obuhvata dijagnostiku, lečenje i prevenciju bolesti zuba
//                 i desni. Naš tim koristi savremene materijale i tehnike kako bi vam pružio
//                 sigurne, bezbolne i dugotrajne tretmane.
//             </p>
//             <p className="text-gray-700 mb-4 leading-relaxed">
//                 Redovne kontrole i profesionalno čišćenje zuba pomažu u sprečavanju
//                 ozbiljnijih problema i očuvanju vašeg osmeha tokom godina.Naši lekari
//                 pristupaju svakom pacijentu individualno, u skladu sa njegovim potrebama,
//                 starosnom dobi i opštim stanjem usne duplje.
//             </p>

//             <p className="text-gray-700 mb-4 leading-relaxed">
//                 Tokom pregleda vršimo detaljnu dijagnostiku, uključujući pregled mekih tkiva,
//                 zuba i stanja desni. Kada je potrebno, koristimo digitalne rendgenske snimke
//                 koji omogućavaju precizno planiranje terapije i uvid u eventualne skrivene
//                 promene ispod površine zuba.
//             </p>

//             <ul className="space-y-4">
//                 {[
//                 "Popravka zuba kompozitnim ispunima",
//                 "Uklanjanje zubnog kamenca i poliranje",
//                 "Lečenje karijesa i zapaljenja desni",
//                 "Sanacija oštećenih zuba i nadoknada izgubljenih površina",
//                 "Preventivni pregledi i profesionalno savetovanje",
//                 ].map((benefit, idx) => (
//                 <motion.li
//                     key={idx}
//                     className="flex items-center space-x-3 text-gray-700 text-lg"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 >
//                     <Check className="text-green-600 w-6 h-6 flex-shrink-0" />
//                     <span>{benefit}</span>
//                 </motion.li>
//                 ))}
//             </ul>
//             {/* <ul className="list-disc list-inside text-gray-700">
//                 <li>Popravka zuba kompozitnim ispunima</li>
//                 <li>Uklanjanje zubnog kamenca i poliranje</li>
//                 <li>Lečenje karijesa i zapaljenja desni</li>
//                 <li>Sanacija oštećenih zuba i nadoknada izgubljenih površina</li>
//                 <li>Preventivni pregledi i profesionalno savetovanje</li>
//             </ul> */}
//             </motion.div>
//         </div>

//       {/* Obrnuta sekcija (slika desno, tekst levo) */}
//       <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-20">
//         {/* Tekst levo */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-color-primary">
//             Bezbolni tretmani i prijatno iskustvo
//           </h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Koristimo savremene anestezije i tehnike koje obezbeđuju maksimalan komfor
//             tokom svake intervencije. Naš cilj je da svaki pacijent izađe sa osmehom,
//             bez straha i neprijatnosti.
//           </p>
//           <p className="text-gray-700 leading-relaxed">
//             U našoj ordinaciji posvećeni smo stvaranju prijatne atmosfere i
//             individualnom pristupu svakom pacijentu.Posebnu pažnju posvećujemo
//             pacijentima koji imaju izražen strah od stomatoloških intervencija, uz
//             strpljiv pristup i jasna objašnjenja svakog koraka u procesu lečenja.
//         </p>
//         <p className="text-gray-700 leading-relaxed">
//             Naš cilj je da izgradimo poverenje i naviku redovnih poseta, jer verujemo da
//             zdravlje zuba nije samo estetsko pitanje — već osnovni deo vašeg ukupnog
//             zdravlja i samopouzdanja.
//         </p>
//         </motion.div>

//         {/* Slika desno */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="rounded-2xl overflow-hidden shadow-lg"
//         >
//           <img
//             src="/images/webp/bezbolni-tretmani.webp"
//             alt="Bezbolni tretmani"
//             width={600}
//             height={400}
//             className="w-full h-auto object-cover"
//           />
//         </motion.div>
//       </div>
//       {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <h3 className="text-2xl font-semibold text-color-primary mb-4">
//             Zakažite svoj termin još danas
//           </h3>
//           <p className="text-gray-700 max-w-2xl mx-auto mb-6">
//             Otkrijte koliko osmeh može promeniti vaš izgled i samopouzdanje.
//             Prepustite beljenje zuba stručnjacima Dental House ordinacije.
//           </p>
//           <a
//             href="/kontakt"
//             className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-700 transition-colors"
//           >
//             Kontaktirajte nas
//           </a>
//         </motion.div>
//     </section>

//         {/* Footer */}
//           <section>
//             <Footer />
//           </section>
//     </div>
//   );
// }

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

// const services = [
//   {
//     title: "Kompozitni ispun",
//     description: "Savremeni estetski ispun koji se koristi za popravku oštećenih zuba i vraćanje prirodnog izgleda."
//   },
//   {
//     title: "Kompozitna plomba sa metalnim/FRC kočićem",
//     description: "Koristi se za ojačavanje oslabljenih zuba i produženje njihovog veka trajanja."
//   },
//   {
//     title: "Kompozitna faseta",
//     description: "Estetsko rešenje za poboljšanje oblika i boje prednjih zuba."
//   },
//   {
//     title: "UZK dubinsko čišćenje i peskiranje",
//     description: "Uklanjanje kamenca i naslaga uz pomoć ultrazvuka i peskarenja za zdrav osmeh."
//   },
//   {
//     title: "Obrada parodontalnog džepa",
//     description: "Tretman desni koji pomaže u zaustavljanju progresije parodontalnih bolesti."
//   },
//   {
//     title: "Interseansni lek",
//     description: "Privremeni lek koji se postavlja između tretmana kako bi se smanjila infekcija."
//   },
//   {
//     title: "Incizija i drenaža",
//     description: "Hitna intervencija za uklanjanje infekcije i bola."
//   },
//   {
//     title: "Endodonska terapija",
//     description: "Lečenje kanala korena zuba radi očuvanja prirodnog zuba."
//   },
//   {
//     title: "Kauzalna terapija parodontopatije",
//     description: "Lečenje uzroka bolesti desni radi dugoročnog zdravlja."
//   },
//   {
//     title: "Endodontska faza",
//     description: "Specifična faza u lečenju kanala zuba sa detaljnom obradom."
//   },
//   {
//     title: "Keramički inlej/onlej",
//     description: "Visokokvalitetne nadoknade koje vraćaju funkciju i estetiku zuba."
//   }
// ];
export default function GeneralDentistryPage() {
  const t = useTranslations("generalDentistry");
  const benefits = t.raw("section1.benefits") as string[];
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
          images={["/images/webp/opsta-stomatologija.webp"]}
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