export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const siteUrl = 'https://hunvisk.github.io';

// İngilizce önek almaz, Türkçe /tr/ altındadır.
// path her zaman dil öneki olmadan verilir: '/', '/toolkit/'
export function localePath(locale: Locale, path = '/'): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

// '/tr/toolkit/' → '/toolkit/', '/toolkit/' → '/toolkit/'
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/tr(\/.*)?$/);
  if (!match) return pathname;
  return match[1] ?? '/';
}

// Her sayfanın canonical ve hreflang bağlantıları
export function alternates(locale: Locale, path = '/') {
  return {
    canonical: localePath(locale, path),
    languages: {
      en: localePath('en', path),
      tr: localePath('tr', path),
      'x-default': localePath(defaultLocale, path),
    },
  };
}
