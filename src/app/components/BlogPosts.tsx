"use client";

import { easeOut, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

// ─────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      delay,
    },
  }),
};

const viewport = {
  once: true,
  amount: 0.1,
} as const;

// ─────────────────────────────────────────────────

export default function BlogSection() {
  const t = useTranslations("blog");

  const posts = [
    {
      image: t("post1.image"),
      title: t("post1.title"),
      description: t("post1.description"),
      date: t("post1.date"),
      slug: t("post1.slug"),
    },
    {
      image: t("post2.image"),
      title: t("post2.title"),
      description: t("post2.description"),
      date: t("post2.date"),
      slug: t("post2.slug"),
    },
    {
      image: t("post3.image"),
      title: t("post3.title"),
      description: t("post3.description"),
      date: t("post3.date"),
      slug: t("post3.slug"),
    },
  ];

  return (
    <section className="bg-white/70 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-left sm:text-sm">
            {t("header")}
          </p>

          <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 sm:text-left sm:text-3xl lg:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-3 text-center text-sm leading-relaxed text-gray-500 sm:text-left sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              custom={index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
              className="group flex min-h-[26rem] flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300"
            >
              
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                
                <p className="mb-2 text-xs text-gray-400 sm:text-sm">
                  {post.date}
                </p>

                <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                  {post.title}
                </h3>

                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {post.description}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-300 hover:text-headerGold sm:text-base"
                >
                  {t("more")}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}