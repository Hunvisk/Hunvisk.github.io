// İki ayrı kök layout olduğu için 404 sayfası kendi <html> iskeletini kurar.
import type { Metadata } from 'next';
import { fontVariables } from './fonts';
import { en } from '@/i18n/en';
import { tr } from '@/i18n/tr';
import './globals.css';

export const metadata: Metadata = {
  title: `${en.notFound.title} — ${en.meta.siteName}`,
  description: en.notFound.description,
};

// Hangi dilden gelindiği bilinmediği için iki dil birlikte gösterilir
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`dark ${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <p className="font-mono text-sm text-primary">404</p>
        {[
          { locale: 'en', t: en, href: '/' },
          { locale: 'tr', t: tr, href: '/tr/' },
        ].map(({ locale, t, href }) => (
          <section key={locale} lang={locale} className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">{t.notFound.title}</h1>
            <p className="text-muted-foreground">{t.notFound.description}</p>
            <a href={href} className="text-sm font-medium text-primary hover:underline">
              {t.notFound.back}
            </a>
          </section>
        ))}
      </body>
    </html>
  );
}
