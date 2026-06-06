// services.ts
export const priceService = {
  sr: [
    {
      id: "opsta",
      title: "Opšta stomatologija",
      items: [
        { name: "Pregled i konsultacija", price: 2000, icon: "/images/icons/opsta.svg" },
        { name: "Uklanjanje kamenca + poliranje", price: 4000, icon: "/images/icons/kamenac.svg" },
        { name: "Plomba (kompozit)", price: 5000, icon: "/images/icons/plomba.svg" },
      ],
    },
    {
      id: "ortodoncija",
      title: "Ortodoncija",
      items: [
        { name: "Fiksni aparat po vilici", price: 90000, icon: "/images/icons/aparat.svg" },
        { name: "Kontrola aparata", price: 3000, icon: "/images/icons/kontrola.svg" },
        { name: "Providni aparat (Invisalign)", price: 250000, icon: "/images/icons/invisalign.svg" },
      ],
    },
    {
      id: "protetika",
      title: "Protetika",
      items: [
        { name: "Metalokeramička krunica", price: 15000, icon: "/images/icons/krunica.svg" },
        { name: "Bezmetalna krunica (cirkon)", price: 25000, icon: "/images/icons/cirkon.svg" },
        { name: "Totalna proteza", price: 35000, icon: "/images/icons/proteza.svg" },
      ],
    },
    {
      id: "implantologija",
      title: "Implantologija",
      items: [
        { name: "Ugradnja implantata", price: 60000, icon: "/images/icons/implant.svg" },
        { name: "Nadoknada na implantatu", price: 25000, icon: "/images/icons/nadoknada.svg" },
      ],
    },
    {
      id: "beljenje",
      title: "Beljenje zuba",
      items: [
        { name: "Beljenje u ordinaciji (po vilici)", price: 12000, icon: "/images/icons/beljenje.svg" },
        { name: "Kućni set za beljenje", price: 15000, icon: "/images/icons/kucni.svg" },
      ],
    },
  ],

  en: [
    {
      id: "opsta",
      title: "General Dentistry",
      items: [
        { name: "Examination and Consultation", price: 17, icon: "/images/icons/opsta.svg" },
        { name: "Tartar Removal + Polishing", price: 34, icon: "/images/icons/kamenac.svg" },
        { name: "Filling (Composite)", price: 42, icon: "/images/icons/plomba.svg" },
      ],
    },
    {
      id: "ortodoncija",
      title: "Orthodontics",
      items: [
        { name: "Fixed Brace per Jaw", price: 765, icon: "/images/icons/aparat.svg" },
        { name: "Brace Control", price: 26, icon: "/images/icons/kontrola.svg" },
        { name: "Clear Aligner (Invisalign)", price: 2125, icon: "/images/icons/invisalign.svg" },
      ],
    },
    {
      id: "protetika",
      title: "Prosthetics",
      items: [
        { name: "Metal-Ceramic Crown", price: 128, icon: "/images/icons/krunica.svg" },
        { name: "Zirconia Crown", price: 213, icon: "/images/icons/cirkon.svg" },
        { name: "Full Denture", price: 298, icon: "/images/icons/proteza.svg" },
      ],
    },
    {
      id: "implantologija",
      title: "Implantology",
      items: [
        { name: "Implant Placement", price: 510, icon: "/images/icons/implant.svg" },
        { name: "Restoration on Implant", price: 213, icon: "/images/icons/nadoknada.svg" },
      ],
    },
    {
      id: "beljenje",
      title: "Teeth Whitening",
      items: [
        { name: "In-Office Whitening (per Jaw)", price: 102, icon: "/images/icons/beljenje.svg" },
        { name: "Home Whitening Kit", price: 128, icon: "/images/icons/kucni.svg" },
      ],
    },
  ],

  ru: [
    {
      id: "opsta",
      title: "Общая стоматология",
      items: [
        { name: "Осмотр и консультация", price: 1240, icon: "/images/icons/opsta.svg" },
        { name: "Удаление налета + полировка", price: 2480, icon: "/images/icons/kamenac.svg" },
        { name: "Пломба (композит)", price: 3100, icon: "/images/icons/plomba.svg" },
      ],
    },
    {
      id: "ortodoncija",
      title: "Ортодонтия",
      items: [
        { name: "Фиксированный аппарат на челюсть", price: 55800, icon: "/images/icons/aparat.svg" },
        { name: "Контроль аппарата", price: 1860, icon: "/images/icons/kontrola.svg" },
        { name: "Прозрачные капы (Invisalign)", price: 155000, icon: "/images/icons/invisalign.svg" },
      ],
    },
    {
      id: "protetika",
      title: "Протетика",
      items: [
        { name: "Металлокерамическая коронка", price: 9300, icon: "/images/icons/krunica.svg" },
        { name: "Безметалловая коронка (цирконий)", price: 15500, icon: "/images/icons/cirkon.svg" },
        { name: "Полный протез", price: 21700, icon: "/images/icons/proteza.svg" },
      ],
    },
    {
      id: "implantologija",
      title: "Имплантология",
      items: [
        { name: "Установка имплантата", price: 37200, icon: "/images/icons/implant.svg" },
        { name: "Восстановление на имплантате", price: 15500, icon: "/images/icons/nadoknada.svg" },
      ],
    },
    {
      id: "beljenje",
      title: "Отбеливание зубов",
      items: [
        { name: "Отбеливание в кабинете (на челюсть)", price: 7440, icon: "/images/icons/beljenje.svg" },
        { name: "Домашний набор для отбеливания", price: 9300, icon: "/images/icons/kucni.svg" },
      ],
    },
  ],
};

// formatPrice.ts
export const formatPrice = (price: number, locale: "sr" | "en" | "ru") => {
  let options: Intl.NumberFormatOptions = { minimumFractionDigits: 0 };
  let currency = "RSD";
  let loc = "sr-RS";

  if (locale === "en") {
    currency = "EUR";
    loc = "en-IE";
  }
  if (locale === "ru") {
    currency = "RUB";
    loc = "ru-RU";
  }

  return new Intl.NumberFormat(loc, { style: "currency", currency, ...options }).format(price);
};