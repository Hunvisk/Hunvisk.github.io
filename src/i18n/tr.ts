import type { Dictionary } from './en';

// Dictionary tipine bağlı: eksik bir anahtar build'i kırar.
export const tr: Dictionary = {
  meta: {
    siteName: 'Hunvisk',
    title: 'Hunvisk — DevOps Mühendisi',
    description:
      'DevOps portföyü: CI/CD hatları, altyapı otomasyonu ve gözlemlenebilirlik.',
  },
  nav: {
    home: 'Ana sayfa',
    switchLanguage: 'English version',
  },
  hero: {
    name: 'Hunvisk',
    role: 'DevOps Mühendisi',
    tagline:
      'Güvenilir teslimat hatları kuruyor, arkalarındaki altyapıyı otomatikleştiriyorum.',
    cta: "GitHub'a göz at",
  },
  projects: {
    englishOnly: 'İngilizce',
  },
  notFound: {
    title: 'Sayfa bulunamadı',
    description: 'Aradığınız sayfa mevcut değil.',
    back: 'Ana sayfaya dön',
  },
};
