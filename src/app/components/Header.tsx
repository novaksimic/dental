"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const t = useTranslations("header");

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const close = () => setMenuOpen(false);

    window.addEventListener("resize", close);

    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="sticky top-[45px] z-50 bg-black text-white">
      
      {/* ───────────────── NAV BAR ───────────────── */}
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ───────── LOGO ───────── */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/dental-house-vracar-logo.svg"
            alt="Dental House Vračar"
            className="
              h-16 w-auto
              md:h-20
              lg:h-24
              transition-all duration-300
            "
          />
        </Link>

        {/* ───────── DESKTOP NAV ───────── */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 font-medium">

            <li>
              <Link href="/" className="transition hover:text-gray-300">
                {t("nav.home")}
              </Link>
            </li>

            <li>
              <Link href="/o-nama" className="transition hover:text-gray-300">
                {t("nav.about")}
              </Link>
            </li>

            {/* ───────── SERVICES DROPDOWN ───────── */}
            <li className="group relative">
              <span className="cursor-pointer transition hover:text-gray-300">
                {t("nav.services")}
              </span>

              <ul className="invisible absolute left-0 mt-3 w-60 rounded-xl bg-white text-black opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {[
                  ["general", "/usluge/sekcije/konzervativna-stomatologija"],
                  ["prosthetics", "/usluge/sekcije/protetika"],
                  ["estetic", "/usluge/sekcije/estetska-stomatologija"],
                  ["preventive", "/usluge/sekcije/decija-i-preventivna-stomatologija"],
                  ["orthodontics", "/usluge/sekcije/ortodoncija"],
                  ["implants", "/usluge/sekcije/hirurgija-i-implanti"],
                  ["facts", "/usluge/sekcije/zanimljivosti"],
                ].map(([key, href]) => (
                  <li key={key}>
                    <Link
                      href={href}
                      className="block px-4 py-2 text-sm transition hover:bg-gray-100"
                    >
                      {t(`nav.servicesDropdown.${key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                href="/cenovnik-usluga"
                className="transition hover:text-gray-300"
              >
                {t("nav.priceList")}
              </Link>
            </li>

            <li>
              <Link
                href="/kontakt"
                className="transition hover:text-gray-300"
              >
                {t("nav.contact")}
              </Link>
            </li>

          </ul>
        </nav>

        {/* ───────── MOBILE MENU BUTTON ───────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={30} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={30} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ───────────────── MOBILE MENU ───────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-black md:hidden"
          >
            <div className="px-4 py-5">
              <nav className="flex flex-col gap-5 text-lg font-medium">

                <Link href="/" onClick={() => setMenuOpen(false)}>
                  {t("nav.home")}
                </Link>

                <Link href="/o-nama" onClick={() => setMenuOpen(false)}>
                  {t("nav.about")}
                </Link>

                {/* ───────── MOBILE SERVICES ACCORDION ───────── */}
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between text-left"
                >
                  {t("nav.services")}
                  <span className="text-xl">
                    {servicesOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-3 overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 text-base text-gray-300">
                        {[
                          ["general", "/usluge/sekcije/konzervativna-stomatologija"],
                          ["prosthetics", "/usluge/sekcije/protetika"],
                          ["estetic", "/usluge/sekcije/estetska-stomatologija"],
                          ["preventive", "/usluge/sekcije/decija-i-preventivna-stomatologija"],
                          ["orthodontics", "/usluge/sekcije/ortodoncija"],
                          ["implants", "/usluge/sekcije/hirurgija-i-implanti"],
                          ["facts", "/usluge/sekcije/beljenje-zuba"],
                        ].map(([key, href]) => (
                          <Link
                            key={key}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="transition hover:text-white"
                          >
                            {t(`nav.servicesDropdown.${key}`)}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/cenovnik-usluga"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.priceList")}
                </Link>

                <Link
                  href="/kontakt"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>

              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}