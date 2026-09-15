import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dentalhousevracar.com"),
  title: {
    default: "Dental House Vračar",
    template: "%s | Dental House Vračar",
  },
  description:
    "Stomatološka ordinacija Dental House Vračar u Beogradu.",
  applicationName: "Dental House Vračar",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Read locale from request headers
  const cookieStore = cookies(); 
  const locale = (await cookieStore).get('NEXT_LOCALE')?.value || 'sr';
  
  const messages = (await import(`../i18n/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
         <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Dentist",
                  name: "Dental House Vračar",
                  url: "https://www.dentalhousevracar.com",
                }),
              }}
            />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopBar />
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
