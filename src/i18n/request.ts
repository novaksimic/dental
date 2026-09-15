import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const safeLocale =
    locale === 'en' ||
    locale === 'sr' ||
    locale === 'ru'
      ? locale
      : 'sr';

  return {
    locale: safeLocale,
    messages: (await import(`./${safeLocale}.json`)).default
  };
});