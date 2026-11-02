import Link from 'next/link';
import { localePath, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n';
import { cyberHustle } from '@/lib/cyber-hustle';

// Ana sayfadaki oyun kartları (şimdilik Cyber Hustle).
export function Games({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).games;
  const game = cyberHustle(locale);

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-24">
      <h2 className="text-sm font-medium tracking-wide text-primary uppercase">{t.title}</h2>
      <Link
        href={localePath(locale, '/cyber-hustle/')}
        className="mt-4 block rounded-xl border border-border p-6 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <p className="text-xl font-semibold tracking-tight text-foreground">{game.title}</p>
        <p className="mt-2 text-muted-foreground">{game.tagline}</p>
        <p className="mt-4 text-sm font-medium text-primary">{t.open} →</p>
      </Link>
    </section>
  );
}
