"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceItem = {
  title: string;
  description: string;
};

type Props = {
  title?: string;
  services: ServiceItem[];
  images?: string[];
};

export default function ServicesAccordion({
  title = "Naše usluge",
  services,
  images = [],
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 👈 odmah otvorena prva

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-mint mb-14 tracking-tight">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT */}
        <div className="space-y-5">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 border
                  ${
                    isOpen
                      ? "border-mint bg-mint/5 shadow-lg"
                      : "border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1"
                  }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-lg text-slate-800 group-hover:text-mint transition">
                    {service.title}
                  </span>

                  <div className="transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="text-mint" />
                    ) : (
                      <Plus className="text-slate-400 group-hover:text-mint" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.20 }}
                      className="px-5 pb-5 text-slate-600 leading-relaxed"
                    >
                      {service.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

              {/* RIGHT - Images */}
              {images.length > 0 && (
                  <div className="flex flex-col gap-6">
                      {images.map((img, idx) => (
                          <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="rounded-3xl overflow-hidden group relative"
                          >
                              <img
                                  src={img}
                                  alt={`Dental service ${idx + 1}`}
                                  className="w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                              />
                              {/* glow */}
                              <div className="absolute inset-0 rounded-3xl bg-mint/10 blur-2xl -z-10" />
                          </motion.div>
                      ))}
                  </div>
              )}
      </div>
    </div>
  );
}