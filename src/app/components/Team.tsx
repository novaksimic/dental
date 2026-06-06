"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import Image from "next/image";

const doctors = [
  { key: "doctor1", img: "/images/webp/dr-pavle.webp", slug: "tim-lekara/dr-pavle-jovanovic" },
  { key: "doctor2", img: "/images/webp/dr-ana.webp", slug: "tim-lekara/dr-ana-popovic" },
  { key: "doctor3", img: "/images/webp/dr-jelena.webp", slug: "tim-lekara/dr-jelena-orozovic" },
  { key: "doctor4", img: "/images/webp/dr-vanja.webp", slug: "tim-lekara/dr-vanja-bojic" },
  { key: "doctor5", img: "/images/webp/dr-ana-masojevic.webp", slug: "tim-lekara/dr-ana-masojevic" },
  { key: "doctor6", img: "/images/webp/dr-filip.webp", slug: "tim-lekara/dr-filip-despotovic" },
];

export default function Team() {
  const t = useTranslations("team");

  return (
    <section className="bg-slate-50 py-14 sm:py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doc, idx) => {
            const name = t(`${doc.key}.name`);
            const bio = t(`${doc.key}.bio`);
            const specialties = t.raw(`${doc.key}.specialties`) as string[];
            const rating = Number(t(`${doc.key}.rating`));

            return (
              <div
                key={doc.key}
                className="
                  flex flex-col items-center text-center
                  rounded-2xl bg-white p-6 shadow-md
                  transition
                "
              >

                {/* Image */}
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full sm:h-36 sm:w-36">
                  <Image
                    src={doc.img}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 8rem, 9rem"
                    priority={idx === 0}
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold sm:text-xl">
                  {name}
                </h3>

                {/* Specialties */}
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700 sm:text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="mt-4 text-sm text-slate-600 line-clamp-3 sm:text-base">
                  {bio}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < rating
                            ? "text-yellow-400"
                            : "text-slate-300"
                        }
                      />
                    ))}
                  </div>

                  <span className="text-sm text-slate-500">
                    {rating}.0
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={doc.slug}
                  className="mt-5 font-semibold text-green-600 transition hover:text-green-800"
                >
                  {t("more")}
                </a>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}