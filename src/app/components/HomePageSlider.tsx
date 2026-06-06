"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Slide = {
  image: { src: string; alt?: string };
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

type Props = {
  slideImages: { src: string; alt?: string }[];
  interval?: number;
};

export default function HeroSlider({
  slideImages,
  interval = 5000,
}: Props) {
  const t = useTranslations("heroSlider");

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(0);

  const slides: Slide[] = useMemo(() => {
    return slideImages.map((img, idx) => ({
      image: img,
      title: t(`${idx}.title`),
      subtitle: t(`${idx}.subtitle`),
      buttonText: t(`${idx}.buttonText`),
      buttonLink: t(`${idx}.buttonLink`),
    }));
  }, [slideImages, t]);

  // Auto slide (mobile-safe pause)
  useEffect(() => {
    if (!slides.length || paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, paused]);

  // Swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta =
        touchStartX.current - e.changedTouches[0].clientX;

      if (Math.abs(delta) < 50) return;

      setCurrent((prev) =>
        delta > 0
          ? (prev + 1) % slides.length
          : prev === 0
          ? slides.length - 1
          : prev - 1
      );
    },
    [slides.length]
  );

  const slide = slides[current];

  return (
    <div
      className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.image.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 1 : 0,
          }}
        >
          <Image
            src={s.image.src}
            alt={s.image.alt ?? ""}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="text-center text-white max-w-2xl"
          >
            <h1 className="mb-3 text-2xl font-bold leading-tight drop-shadow sm:text-4xl md:text-5xl">
              {slide.title}
            </h1>

            <p className="mb-6 text-sm leading-relaxed drop-shadow sm:text-lg md:text-xl">
              {slide.subtitle}
            </p>

            <Link
              href={slide.buttonLink}
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90 sm:px-8"
            >
              {slide.buttonText}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
        <div
          key={`${current}-${paused}`}
          className="h-full origin-left bg-white"
          style={{
            animation: paused
              ? "none"
              : `progressBar ${interval}ms linear forwards`,
          }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2 sm:bottom-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current
                ? "w-6 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}