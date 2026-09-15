"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SidePanelActivity from "../components/SidePanelActivity";
import { category } from "./kategorije/category-constants";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export interface Prop {
  date: Date,
  locale: string
}

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

export default function BlogPage() {
  const locale = useLocale();
  const t = useTranslations("blogPage");

  const [activeId, setActiveId] = useState("implanti");
  const recentPosts: string[] = [];

  return (
    <div className="bg-gray-50 text-slate-900">
      <SectionWrapper>
        <div className="w-full bg-gray-200/80 py-5 px-6 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">
              {t("title")}
            </h1>
            <div className="text-slate-700 text-sm md:text-base">
              <Link href="/" className="hover:text-green-700">
                {t("breadcrumbs.home")}
              </Link>{" "}
              / <span className="font-semibold">{t("breadcrumbs.blog")}</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 px-6 py-16">
        <section className="max-w-5xl mx-auto px-6 space-y-10">
          {category.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={post.image}
                  alt={t(`posts.${post.id}.title`)}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">
                  <DateComponent date={post.date} locale={locale} />
                </p>

                <h2 className="text-xl font-semibold mb-3 sm:text-2xl">
                  {t(`posts.${post.id}.title`)}
                </h2>

                <p className="text-gray-500 mb-4 line-clamp-2 text-sm sm:text-base">
                  {t(`posts.${post.id}.excerpt`)}
                </p>

                <a
                  href={`/blog/${post.id}`}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-800"
                >
                  {t("readMore")}
                </a>
              </div>
            </article>
          ))}
        </section>

        <SidePanelActivity
          activeId={activeId}
          setActiveId={setActiveId}
          recentPosts={recentPosts}
        />
      </div>
    </div>
  );
}

function DateComponent({ date, locale }: Prop) {
  return (
    <span>
      {new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(date))}
    </span>
  );
}