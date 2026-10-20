import Link from 'next/link';
import { LanguageSwitch } from '@/components/language-switch';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n';

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <Link
        href={localePath(locale)}
        aria-label={t.nav.home}
        className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
      >
        {t.meta.siteName}
      </Link>
      <LanguageSwitch locale={locale} label={t.nav.switchLanguage} />
    </header>
  );
}
