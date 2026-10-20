import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n';

// Saf HTML + CSS: ekranın üst kısmında animasyon kütüphanesi yok
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-primary uppercase">{t.role}</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {t.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{t.tagline}</p>
      <div className="mt-10">
        <a
          href="https://github.com/Hunvisk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
