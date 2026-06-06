"use client";

import { useTranslations } from "next-intl";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-black text-gray-200">
      
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          
          {/* ── Contact ───────────────────────── */}
          <div className="text-center lg:text-left">
            <h3 className="mb-5 text-xl font-semibold text-white sm:text-2xl">
              {t("contactTitle")}
            </h3>

            <ul className="space-y-4 text-sm sm:text-base">
              
              <li>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    t("address")
                  )}`}
                  target="_blank"
                  className="group inline-flex items-start gap-3 text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <MapPin
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-green-500"
                  />

                  <span className="leading-relaxed">
                    {t("address")}
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href={`tel:${t("phone")}`}
                  className="group inline-flex items-center gap-3 text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <Phone
                    size={18}
                    className="flex-shrink-0 text-green-500"
                  />

                  <span>{t("phone")}</span>
                </Link>
              </li>

              <li>
                <Link
                  href={`mailto:${t("email")}`}
                  className="group inline-flex items-center gap-3 text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <Mail
                    size={18}
                    className="flex-shrink-0 text-green-500"
                  />

                  <span>{t("email")}</span>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/dentalhouse.vracar/"
                  target="_blank"
                  className="group inline-flex items-center gap-3 text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  <Instagram
                    size={18}
                    className="flex-shrink-0 text-green-500"
                  />

                  <span>{t("instagram")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Logo ───────────────────────── */}
          <div className="relative flex min-h-[140px] items-center justify-center sm:min-h-[180px]">
            <Image
              src="/images/dental-house-vracar-logo.svg"
              alt="Dental House Vračar logo"
              fill
              priority={false}
              className="object-contain opacity-40"
            />
          </div>

          {/* ── Working Hours ───────────────────────── */}
          <div className="text-center lg:text-right">
            <h3 className="mb-5 text-xl font-semibold text-white sm:text-2xl">
              {t("workingHoursTitle")}
            </h3>

            <ul className="mb-6 space-y-3 text-sm sm:text-base">
              
              <li className="flex items-center justify-center gap-3 lg:justify-end">
                <Clock
                  size={18}
                  className="flex-shrink-0 text-green-500"
                />

                <span>{t("workingHours.monFri")}</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex justify-center gap-4 lg:justify-end">
              <Link
                href="https://www.instagram.com/dentalhouse.vracar/"
                target="_blank"
                aria-label="Instagram"
                className="rounded-full p-2 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-green-500"
              >
                <Instagram size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-gray-400 sm:px-6 sm:text-sm lg:px-8">
          {t("copyright", {
            year: new Date().getFullYear(),
          })}
        </div>
      </div>
    </footer>
  );
}