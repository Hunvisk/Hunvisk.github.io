import Link from 'next/link';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n';

// Her sayfanın altında: oyun sayfaları (mağaza incelemesi ve reklam ağları gizlilik/destek bağlantısı arar).
export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const link = 'transition-colors hover:text-primary';

  return (
    <footer className="mx-auto mt-auto flex w-full max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 border-t border-border px-6 py-6 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} {t.meta.siteName}</span>
      <Link href={localePath(locale, '/cyber-hustle/')} className={link}>
        Cyber Hustle
      </Link>
      <Link href={localePath(locale, '/cyber-hustle/privacy/')} className={link}>
        {t.nav.privacy}
      </Link>
      <Link href={localePath(locale, '/cyber-hustle/support/')} className={link}>
        {t.nav.support}
      </Link>
    </footer>
  );
}
