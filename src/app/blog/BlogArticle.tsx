"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { BlogArticle as BlogArticleType, FAQ, Section } from "./types";
import SidePanelActivity from "../components/SidePanelActivity";
import { addRecentPost, getRecentPosts } from "../utils/recent-posts-util";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  article: BlogArticleType;
  slug: string;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

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

export default function BlogArticle({ article, slug }: Props) {
        // Active article
        const [activeId, setActiveId] = useState("implanti");
        // Recent posts
        const [recentPosts, setRecentPosts] = useState<string[]>([]);

        useEffect(() => {
            setRecentPosts(getRecentPosts());
        }, []);

        useEffect(() => {
            if (!slug) return;

            addRecentPost(slug);
            setRecentPosts(getRecentPosts());
        }, [slug]);
  return (
    <div className="bg-gray-50 text-slate-900">

          {/* Breadcrumbs */}
          <SectionWrapper>
              <div className="w-full bg-gray-200/80 py-5 px-6 relative mb-8">
                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                      <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">
                          {article.content.title}
                      </h1>

                      <div className="text-slate-700 text-sm md:text-base">
                          <Link href="/" className="hover:text-green-700">
                              {article.content.breadcrumbs.home}
                          </Link>

                          {" / "}

                          <Link href="/blog" className="hover:text-green-700">
                              {article.content.breadcrumbs.blog}
                          </Link>

                          {" / "}

                          <span className="font-semibold">
                              {article.content.breadcrumbs.current}
                          </span>
                      </div>
                  </div>
              </div>
          </SectionWrapper>

          {/* Main Container */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 px-6 py-10">
              <motion.article className="bg-white p-6 md:p-10 rounded-3xl shadow-lg">
                  {/* HERO IMAGE */}
                  <div className="overflow-hidden rounded-2xl mb-8">
                      <motion.img
                          src={article.meta.image}
                          alt={article.content.title}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-[500px] object-cover"
                      />
                  </div>

                  {/* TITLE + INTRO */}
                  <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                  >
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                          {article.content.title}
                      </h1>

                      <p className="text-base leading-relaxed text-gray-600 leading-8 mb-12">
                          {article.content.intro}
                      </p>
                  </motion.div>

                  {/* SECTIONS */}
                  {article.content.sections &&
                      Object.values(article.content.sections).map(
                          (section: Section, index) => (
                              <motion.section
                                  key={index}
                                  variants={fadeUp}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.2 }}
                                  className="mb-12"
                              >
                                  <div className="flex items-start gap-3 mb-4">
                                      <CheckCircle2
                                          size={24}
                                          className="text-green-600 mt-1 flex-shrink-0"
                                      />

                                      <h2 className="text-xl md:text-2xl font-bold text-slate-800 border-l-4 border-green-600 pl-4">
                                          {section.heading}
                                      </h2>
                                  </div>

                                  <p className="text-base leading-relaxed text-gray-600 leading-8">
                                      {section.content}
                                  </p>
                              </motion.section>
                          )
                      )}

                  {/* FAQ */}
                  {article.content.faq &&
                      Object.values(article.content.faq).length > 0 && (
                          <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeUp}
                              className="mt-16"
                          >
                              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8">
                                  {article.content.faqTitle}
                              </h2>

                              <div className="space-y-5">
                                  {Object.values(article.content.faq).map(
                                      (faq: FAQ, index) => (
                                          <motion.div
                                              key={index}
                                              whileHover={{
                                                  y: -4,
                                              }}
                                              transition={{
                                                  duration: 0.2,
                                              }}
                                              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm"
                                          >
                                              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                                                  {faq.question}
                                              </h3>

                                              <p className="text-base leading-relaxed text-gray-600 leading-7">
                                                  {faq.answer}
                                              </p>
                                          </motion.div>
                                      )
                                  )}
                              </div>
                          </motion.div>
                      )}

                  {/* CONCLUSION */}
                  {article.content.conclusion && (
                      <motion.div
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="mt-16 bg-green-50 border border-green-100 rounded-3xl p-8"
                      >
                          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                              {article.content.conclusionTitle}
                          </h2>

                          <p className="text-base leading-relaxed text-gray-700 leading-8">
                              {article.content.conclusion}
                          </p>
                      </motion.div>
                  )}
              </motion.article>
              <SidePanelActivity activeId={activeId} setActiveId={setActiveId} recentPosts={recentPosts} />
          </div>
    </div>
    
  );
}