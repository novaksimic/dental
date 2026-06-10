"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Clock, Instagram } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  const t = useTranslations("topBar");
  const router = useRouter();

  const locale = useLocale() || "en";
  const currentLocale = locale.toUpperCase();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const flags: Record<string, string> = {
    SR: "/images/flags/sr.png",
    EN: "/images/flags/en.png",
    RU: "/images/flags/ru.png",
  };

  const languageNames: Record<string, string> = {
    SR: t("languages.sr"),
    EN: t("languages.en"),
    RU: t("languages.ru"),
  };

  const changeLanguage = (lng: string) => {
    document.cookie = `NEXT_LOCALE=${lng.toLowerCase()}; path=/; max-age=31536000`;
    router.refresh();
    setOpen(false);
  };

  // close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-[60] border-b border-gray-800 bg-gray-900 text-gray-100 text-sm">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap items-center justify-between gap-1 py-2">

          {/* LEFT SIDE */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">

            {/* phone */}
            <a
              href={`tel:${t("phone")}`}
              className="font-medium text-green-400"
            >
              {t("phone")}
            </a>

            {/* email (hidden on mobile) */}
            <a
              href={`mailto:${t("email")}`}
              className="hidden sm:flex items-center gap-1 hover:text-yellow-400"
            >
              <Mail className="h-4 w-4" />
              {t("email")}
            </a>

            {/* working hours (desktop only) */}
            <div className="hidden md:flex items-center gap-1 text-gray-300">
              <Clock className="h-4 w-4" />
              {t("workingHours")}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* LANGUAGE SWITCHER */}
            <div className="relative" ref={dropdownRef}>

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded border border-gray-700 px-2 py-1 hover:bg-gray-800 transition"
              >
                {/* flag */}
                <Image
                  src={flags[currentLocale] ?? flags.EN}
                  alt={currentLocale}
                  width={16}
                  height={12}
                  className="rounded-sm"
                />

                {/* language name (hidden on small screens optional) */}
                <span className="hidden sm:inline text-xs font-medium">
                  {languageNames[currentLocale] ?? currentLocale}
                </span>

                {/* 3 dots (IMPORTANT - restored) */}
                <span className="text-white text-sm leading-none">
                  ⋮
                </span>
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg border border-gray-700 bg-gray-800 shadow-xl z-[70]">

                  {["SR", "EN", "RU"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs hover:bg-gray-700"
                    >
                      <Image
                        src={flags[lng]}
                        alt={lng}
                        width={16}
                        height={12}
                        className="rounded-sm"
                      />
                      {languageNames[lng]}
                    </button>
                  ))}

                </div>
              )}
            </div>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/dentalhouse.vracar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:text-pink-400 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>

            {/* CTA */}
            <a
              href="/kontakt"
              className="rounded bg-yellow-500 px-3 py-1 text-xs font-medium text-gray-900 hover:opacity-90 transition"
            >
              {t("bookAppointment")}
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}