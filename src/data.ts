// 1️⃣ Tekstovi za različite jezike
export const copy = {
  sr: {
    brand: "Dental House",
    nav: {
      home: "Početna",
      services: "Usluge",
      team: "Tim",
      blog: "Blog",
      contact: "Kontakt",
    },
    hero: {
      title: "Vaš osmeh je naša briga",
      subtitle: "Najbolja stomatološka nega u gradu",
      cta: "Zakazite termin",
    },
  },
  en: {
    brand: "Dental House",
    nav: {
      home: "Home",
      services: "Services",
      team: "Team",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Your smile is our priority",
      subtitle: "The best dental care in town",
      cta: "Book an appointment",
    },
  },
};

// 2️⃣ Podešavanja / kontakt info / socijalni linkovi
export const settings = {
  instagram: "https://www.instagram.com/dentalhouse",
  facebook: "https://www.facebook.com/dentalhouse",
  email: "info@dentalhouse.rs",
  phoneDisplay: "+381 60 123 4567",
  phoneHref: "+381601234567",
  address: "Bulevar Oslobođenja 123, Beograd",
};

// 3️⃣ Navigacione putanje
export const NAV_PATHS = {
  home: "/",
  services: "/usluge",
  team: "/tim",
  blog: "/blog",
  contact: "/kontakt",
};

// 4️⃣ Opcionalno: kategorije usluga za sekcije / blog
export const SERVICES_CATEGORIES = [
  { slug: "ortodoncija", title: "Ortodoncija" },
  { slug: "implanti", title: "Implanti" },
  { slug: "estetika", title: "Estetska stomatologija" },
  { slug: "pedijatrija", title: "Dečija stomatologija" },
];
