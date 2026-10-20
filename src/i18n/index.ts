import 'server-only';
import type { Locale } from './config';
import { en, type Dictionary } from './en';
import { tr } from './tr';

const dictionaries: Record<Locale, Dictionary> = { en, tr };

// Sadece Server Component'lerde okunur, sözlükler istemci JS'ine girmez.
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
