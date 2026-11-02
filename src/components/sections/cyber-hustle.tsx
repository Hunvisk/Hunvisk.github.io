import Link from 'next/link';
import { localePath, type Locale } from '@/i18n/config';
import { cyberHustle, privacyUpdated, supportEmail, type LegalSection } from '@/lib/cyber-hustle';

const linkClass = 'font-medium text-primary hover:underline';

// Metindeki https:// adreslerini bağlantıya çevirir (gizlilik politikasındaki ortak sayfaları).
function Linkified({ text }: { text: string }) {
  const parts = text.split(/(https:\/\/\S+)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('https://') ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className={`${linkClass} break-all`}>
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Sections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mt-10 flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-7 text-muted-foreground">
              <Linkified text={paragraph} />
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">{children}</article>;
}

export function CyberHustleOverview({ locale }: { locale: Locale }) {
  const t = cyberHustle(locale);
  return (
    <Shell>
      <p className="text-sm font-medium tracking-wide text-primary uppercase">iOS • Idle</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground">{t.title}</h1>
      <p className="mt-4 text-xl text-foreground">{t.tagline}</p>
      <p className="mt-6 leading-7 text-muted-foreground">{t.description}</p>
      <p className="mt-6 text-sm text-muted-foreground">{t.status}</p>
      <nav className="mt-10 flex gap-6 text-sm">
        <Link href={localePath(locale, '/cyber-hustle/privacy/')} className={linkClass}>
          {t.links.privacy}
        </Link>
        <Link href={localePath(locale, '/cyber-hustle/support/')} className={linkClass}>
          {t.links.support}
        </Link>
      </nav>
    </Shell>
  );
}

export function CyberHustlePrivacy({ locale }: { locale: Locale }) {
  const t = cyberHustle(locale).privacy;
  return (
    <Shell>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">{t.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {t.updatedLabel}: <time dateTime={privacyUpdated}>{privacyUpdated}</time>
      </p>
      <p className="mt-6 leading-7 text-muted-foreground">{t.intro}</p>
      <Sections sections={t.sections} />
    </Shell>
  );
}

export function CyberHustleSupport({ locale }: { locale: Locale }) {
  const t = cyberHustle(locale);
  return (
    <Shell>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">{t.support.title}</h1>
      <p className="mt-6 leading-7 text-muted-foreground">{t.support.intro}</p>
      <p className="mt-4">
        {t.support.emailLabel}:{' '}
        <a href={`mailto:${supportEmail}`} className={linkClass}>
          {supportEmail}
        </a>
      </p>
      <Sections sections={t.support.faq} />
      <p className="mt-12 text-sm">
        <Link href={localePath(locale, '/cyber-hustle/privacy/')} className={linkClass}>
          {t.links.privacy}
        </Link>
      </p>
    </Shell>
  );
}
