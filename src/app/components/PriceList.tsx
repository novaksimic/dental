"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

type ServiceItem = {
  name: string;
  price: number | string;
};

type ServiceSection = {
  id: string;
  title: string;
  icon: string;
  items: ServiceItem[];
};

export default function Cenovnik() {
  const t = useTranslations("services");
  const locale = useLocale() as "sr" | "en" | "ru";

  const [rates, setRates] = useState({
    EUR: 0.0085,
    RUB: 0.62,
  });

  const services = t.raw("services") as ServiceSection[];

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (services?.length) {
      setActiveId(services[0].id);
    }
  }, [services]);

  // FETCH REAL EXCHANGE RATES
  useEffect(() => {
    async function fetchRates() {
      try {
        const res = await fetch(
          "https://open.er-api.com/v6/latest/RSD"
        );

        const data = await res.json();

        if (data?.rates?.EUR && data?.rates?.RUB) {
          setRates({
            EUR: data.rates.EUR,
            RUB: data.rates.RUB,
          });
        }
      } catch (err) {
        console.error("Exchange rate error:", err);
      }
    }

    fetchRates();
  }, []);

  // SAFE PRICE PARSER
  const parsePrice = (price: number | string) => {
    const parsed =
      typeof price === "string"
        ? parseFloat(price.replace(",", "."))
        : price;

    return isNaN(parsed) ? 0 : parsed;
  };

  // CONVERT PRICE
  const convert = (price: number | string) => {
    const numericPrice = parsePrice(price);

    return locale === "en"
      ? numericPrice * rates.EUR
      : locale === "ru"
      ? numericPrice * rates.RUB
      : numericPrice;
  };

  const currencyMap = {
    sr: "RSD",
    en: "EUR",
    ru: "RUB",
  };

  const localeMap = {
    sr: "sr-RS",
    en: "en-IE",
    ru: "ru-RU",
  };

  // FORMAT PRICE
  const formatPrice = (price: number | string) =>
    new Intl.NumberFormat(localeMap[locale], {
      style: "currency",
      currency: currencyMap[locale],
      maximumFractionDigits: 2,
    }).format(convert(price));

  const active = useMemo(
    () => services?.find((s) => s.id === activeId),
    [services, activeId]
  );

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">

        {/* MOBILE TABS */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 md:hidden">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
                activeId === s.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">

          {/* SIDEBAR */}
          <aside className="w-full md:sticky md:col-span-2 md:top-36 md:h-fit md:self-start">
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 p-6">
              <h2 className="mb-4 text-lg font-semibold">
                {t("categories")}
              </h2>

              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => setActiveId(s.id)}
                      className={`w-full text-left rounded-lg px-3 py-2 ${
                        activeId === s.id
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="md:col-span-3">

            <AnimatePresence initial={false} mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >

                  {/* HEADER */}
                  <div className="mb-6 flex items-center gap-3">
                    <img
                      src={active.icon}
                      alt={active.title}
                      className="h-7 w-7"
                    />
                    <h2 className="text-2xl font-bold">
                      {active.title}
                    </h2>
                  </div>

                  {/* MOBILE */}
                  <div className="space-y-3 md:hidden">
                    {active.items.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-gray-100 p-4"
                      >
                        <p>{item.name}</p>

                        <p className="font-semibold text-blue-600">
                          {item.price
                            ? formatPrice(item.price)
                            : "-"}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden md:block">
                    <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">

                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 text-sm">
                            <th className="px-5 py-3 text-left">
                              {t("service")}
                            </th>

                            <th className="px-5 py-3 text-left w-40">
                              {t("price")}
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {active.items.map((item, i) => (
                            <tr
                              key={i}
                              className="border-t border-gray-100 hover:bg-gray-50"
                            >
                              <td className="px-5 py-3">
                                {item.name}
                              </td>

                              <td className="px-5 py-3 font-semibold text-blue-600">
                                {item.price
                                  ? formatPrice(item.price)
                                  : "-"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}