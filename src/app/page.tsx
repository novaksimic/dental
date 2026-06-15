"use client";

import AboutUsSection from "./components/AboutUs";
import BlogSection from "./components/BlogPosts";
import HomePageSlider from "./components/HomePageSlider";
import ServicesSection from "./components/ServicesSection";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <main className="text-slate-900">
      
      <HomePageSlider
        slideImages={[
          { src: "/images/webp/dental-operation.webp", alt: "Dental operation" },
          { src: "/images/webp/dental-clinic.webp", alt: "Dental clinic" },
          { src: "/images/webp/tooth.webp", alt: "Tooth figure" },
        ]}
        interval={6000}
      />

      <AboutUsSection />
      <Team />
      <ServicesSection />
      <BlogSection />
      <Testimonials />

    </main>
  );
}