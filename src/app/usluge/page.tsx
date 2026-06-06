"use client";
import React from "react";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Wrapper za animirane sekcije
const SectionWrapper = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-salte-50 text-slate-900">

      {/* Glavni sadržaj */}
      <main className="flex-grow">
        {/* Intro sekcija sa breadcrumbs */}
        <SectionWrapper>
          <div className="w-full bg-gray-200/80 py-5 px-6 relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
              <h1 className="text-3xl font-bold text-slate-800 mb-6 md:mb-0">Naše usluge</h1>
              <div className="text-slate-700 text-sm md:text-base">
                <a href="/" className="hover:text-green-700">Početna</a> / <span className="font-semibold">Naše usluge</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <section className="bg-slate-50">
          <ServicesSection />
        </section>
      </main>
    </div>
  );
}

