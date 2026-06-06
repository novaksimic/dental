import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is always a string
  const safeLocale = await locale || 'sr';
  console.log(locale)

  return {
    locale: safeLocale,
    messages: (await import(`./${safeLocale}.json`)).default
  };
});
