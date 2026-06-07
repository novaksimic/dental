import { cookies } from "next/headers";
import Cenovnik from "./page";

export default async function Page() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "sr";

  const res = await fetch("https://api.exchangerate-api.com/v4/latest/RSD", {
    next: { revalidate: 86400 },
  });

  const data = await res.json();

  return (
    <Cenovnik
      locale={locale as "sr" | "en" | "ru"}
      rates={{
        EUR: data.rates.EUR,
        RUB: data.rates.RUB,
      }}
    />
  );
}