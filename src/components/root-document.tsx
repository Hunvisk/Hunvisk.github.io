import { fontVariables } from '@/app/fonts';
import { Providers } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
import type { Locale } from '@/i18n/config';

// İki kök layout'un ortak <html> iskeleti
export function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={`dark ${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Providers>
          <SiteHeader locale={locale} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
