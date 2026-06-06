// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import AboutUsSection from "../components/AboutUs";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import TopBar from "../components/TopBar";

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

// // Tim lekara
// const doctors = [
//   {
//     name: "Dr. Ana Petrović",
//     specialties: ["Opšta stomatologija", "Preventiva", "Estetska stomatologija"],
//     img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
//     bio: `Specijalista stomatološke protetike sa preko 15 godina iskustva. 
//     Ana je završila stomatološki fakultet na Univerzitetu u Beogradu i potom se usavršavala u oblasti estetske i funkcionalne protetike u inostranstvu. 
//     Tokom svoje karijere, Ana je uspela da kombinuje tradicionalne metode sa savremenim tehnologijama, pružajući pacijentima najmodernije rešenje za njihov osmeh. 
//     Njena strast je individualni pristup svakom pacijentu i stvaranje trajnih i prirodnih rezultata. Kada nije u ordinaciji, 
//     Ana drži edukativna predavanja i učestvuje na međunarodnim kongresima.`,
//     rating: 5,
//   },
//   {
//     name: "Dr. Marko Jovanović",
//     specialties: ["Ortodoncija", "Aparati za decu i odrasle"],
//     img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
//     bio: `Specijalista oralne hirurgije sa više od 12 godina kliničkog iskustva. 
//     Marko je poznat po svom preciznom radu i smirenom pristupu, što čini složene zahvate jednostavnijim i sigurnijim za pacijente.
//     Završio je brojna usavršavanja u oblasti implantologije i minimalno invazivne hirurgije, 
//     a posebno se posvetio rehabilitaciji složenih slučajeva. Njegov cilj je da svaki pacijent izađe iz ordinacije sa maksimalnim komforom i dugotrajnim rezultatom. 
//     U slobodno vreme, Marko se bavi istraživanjima u stomatološkoj tehnologiji i edukacijom mladih kolega.`,
//     rating: 4,
//   },
//   {
//     name: "Dr. Ivana Kostić",
//     specialties: ["Estetska stomatologija", "Keramičke fasete", "Rekonstrukcija osmeha"],
//     img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
//     bio: `Specijalista pedijatrijske stomatologije sa više od 10 godina iskustva u radu sa decom i adolescentima. 
//     Ivana je poznata po svom strpljenju i sposobnosti da mališane oslobodi straha od zubara. 
//     Njena filozofija je preventivna stomatologija i edukacija roditelja, kako bi deca razvila zdrave navike koje traju celo životno doba. 
//     Osim pedijatrije, Ivana se specijalizovala i za ortodontske tretmane kod dece. Kada nije u ordinaciji, Ivana vodi radionice za decu i piše edukativne članke za roditelje.`,
//     rating: 5,
//   },
// ];

// // Usluge sa emoji ikonama
// const services = [
//   { name: "Oralna hirurgija", icon: "⚕️" },
//   { name: "Implantologija", icon: "🦷" },
//   { name: "Protetika", icon: "🪥" },
//   { name: "Dečija stomatologija", icon: "👶" },
//   { name: "Parodontologija", icon: "❤️" },
//   { name: "Ortodoncija za decu i odrasle", icon: "😁" },
//   { name: "Beljenje zuba", icon: "✨" },
//   { name: "Ortopan digitalno snimanje zuba", icon: "📸" },
// ];

// export default function AboutPage() {
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
//               <a href="/" className="hover:text-green-700">Početna</a> / <span className="font-semibold">O Nama</span>
//             </div>
//           </div>
//         </div>
//       </SectionWrapper>

//       {/* KO SMO MI sekcija */}
//       <section>
//         <AboutUsSection />
//       </section>

//       {/* Tim lekara */}
//       <SectionWrapper>
//         <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
//           <h2 className="text-3xl sm:text-2xl font-bold text-slate-900 mb-6">Upoznajte naš tim lekara</h2>
//           <div className="flex flex-col gap-8">
//             {doctors.map((doc, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-lg p-6 flex flex-row items-center gap-10 w-full hover:shadow-xl transition-shadow duration-300"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: idx * 0.2 }}
//               >
//                 {/* Okrugla slika */}
//                 <motion.img
//                   src={doc.img}
//                   alt={doc.name}
//                   className="w-64 h-64 rounded-full object-cover flex-shrink-0"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 120 }}
//                 />

//                 {/* Tekst pored slike */}
//                 <div className="flex-1 flex flex-col justify-center">
//                   <h3 className="text-xl sm:text-2xl font-semibold mb-1">{doc.name}</h3>
//                   <p className="text-green-700 font-medium mb-2">{doc.specialties.join(", ")}</p>
//                   <p className="text-slate-600 text-sm sm:text-base mb-3">{doc.bio}</p>

//                   {/* Ocene */}
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <Star
//                         key={i}
//                         size={20}
//                         className={i < doc.rating ? "text-yellow-400" : "text-slate-300"}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </SectionWrapper>

//       {/* Footer */}
//       <section>
//         <Footer />
//       </section>

//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AboutUsSection from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";

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


const doctors = [
  {
    key: "doctor1",
    img: "/images/webp/dr-pavle-jovanovic.webp",
  },
  {
    key: "doctor2",
    img: "/images/webp/dr-ana.webp",
  },
  {
    key: "doctor3",
    img: "/images/webp/dr-jelena.webp",
  },
  {
    key: "doctor4",
    img: "/images/webp/dr-ivana.webp",
  },
  {
    key: "doctor5",
    img: "/images/webp/dr-milica.webp",
  },
  {
    key: "doctor6",
    img: "/images/webp/dr-jovan.webp",
  },
];

  // Services from translation
  // const services = Object.values(
  //   t.raw("services") as Record<string, any>
  // );

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
              <a href="/" className="hover:text-green-700">
                {t("intro.breadcrumbHome")}
              </a>{" "}
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

