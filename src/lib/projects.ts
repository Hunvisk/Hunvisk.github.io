import { projects, type Project } from '#site/content';
import { defaultLocale, type Locale } from '@/i18n/config';

export type LocalizedProject = Project & {
  // true: bu dilde çevirisi yok, İngilizce hali gösteriliyor ("English" rozeti)
  fallback: boolean;
};

// Türkçesi yazılmamış projeler Türkçe sitede İngilizce haliyle gösterilir
export function getProjects(locale: Locale): LocalizedProject[] {
  const base = projects.filter((p) => p.locale === defaultLocale);
  return base
    .map((en) => {
      const translated = projects.find((p) => p.locale === locale && p.slug === en.slug);
      return translated
        ? { ...translated, fallback: false }
        : { ...en, fallback: locale !== defaultLocale };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getProject(locale: Locale, slug: string): LocalizedProject | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}
