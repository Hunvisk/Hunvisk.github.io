'use client';

import { usePathname } from 'next/navigation';
import { localePath, stripLocale, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

// Karşı dildeki aynı sayfaya gider. Kök layout değiştiği için tam sayfa yüklemesi olur,
// bu yüzden next/link yerine düz <a> kullanılır.
export function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const path = stripLocale(pathname.endsWith('/') ? pathname : `${pathname}/`);
  const target: Locale = locale === 'en' ? 'tr' : 'en';

  return (
    <a
      href={localePath(target, path)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-medium transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className={cn(locale === 'en' ? 'text-primary' : 'text-muted-foreground')}>EN</span>
      <span aria-hidden="true" className="text-border">/</span>
      <span className={cn(locale === 'tr' ? 'text-primary' : 'text-muted-foreground')}>TR</span>
    </a>
  );
}
