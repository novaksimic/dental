import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Read locale from request headers
  const cookieStore = cookies(); 
  const locale = (await cookieStore).get('NEXT_LOCALE')?.value || 'sr';
  
  const messages = (await import(`../i18n/${locale}.json`)).default;

  console.log("Locale in layout:", locale)

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
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
